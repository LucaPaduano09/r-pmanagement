"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  clearUserSession,
  createUserSession,
  hashPassword,
  requireCurrentUser,
  verifyPassword,
} from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";
import { loginSchema, profileSchema, registerSchema } from "@/lib/validations";

type ActionState = {
  errors?: Record<string, string[] | undefined>;
  message?: string;
};

function formatActionError(error: unknown) {
  if (error instanceof Error && error.message.startsWith("DATABASE_URL_MISSING")) {
    return "Configurazione database mancante. Crea il file .env.local con DATABASE_URL e riavvia il server di sviluppo.";
  }

  return "Si è verificato un errore inatteso. Riprova tra un attimo.";
}

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function registerAction(
  _prevState: ActionState | undefined,
  formData: FormData,
) {
  const parsed = registerSchema.safeParse({
    firstName: getStringValue(formData, "firstName"),
    lastName: getStringValue(formData, "lastName"),
    email: getStringValue(formData, "email"),
    phone: getStringValue(formData, "phone"),
    password: getStringValue(formData, "password"),
    confirmPassword: getStringValue(formData, "confirmPassword"),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: "Controlla i campi evidenziati e riprova.",
    } satisfies ActionState;
  }

  try {
    const prisma = getPrisma();
    const email = parsed.data.email.toLowerCase();
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      return {
        message: "Esiste già un account con questa email.",
        errors: {
          email: ["Usa un'altra email oppure accedi."],
        },
      } satisfies ActionState;
    }

    const user = await prisma.user.create({
      data: {
        email,
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        phone: parsed.data.phone || null,
        passwordHash: hashPassword(parsed.data.password),
      },
      select: { id: true },
    });

    await createUserSession(user.id);
    revalidatePath("/account");
  } catch (error) {
    return {
      message: formatActionError(error),
    } satisfies ActionState;
  }

  redirect("/account");
}

export async function loginAction(
  _prevState: ActionState | undefined,
  formData: FormData,
) {
  const parsed = loginSchema.safeParse({
    email: getStringValue(formData, "email"),
    password: getStringValue(formData, "password"),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: "Inserisci credenziali valide.",
    } satisfies ActionState;
  }

  try {
    const prisma = getPrisma();
    const user = await prisma.user.findUnique({
      where: { email: parsed.data.email.toLowerCase() },
      select: {
        id: true,
        passwordHash: true,
      },
    });

    if (!user?.passwordHash || !verifyPassword(parsed.data.password, user.passwordHash)) {
      return {
        message: "Email o password non corretti.",
      } satisfies ActionState;
    }

    await createUserSession(user.id);
    revalidatePath("/account");
  } catch (error) {
    return {
      message: formatActionError(error),
    } satisfies ActionState;
  }

  redirect("/account");
}

export async function updateProfileAction(
  _prevState: ActionState | undefined,
  formData: FormData,
) {
  const currentUser = await requireCurrentUser();

  const parsed = profileSchema.safeParse({
    firstName: getStringValue(formData, "firstName"),
    lastName: getStringValue(formData, "lastName"),
    phone: getStringValue(formData, "phone"),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: "Non siamo riusciti ad aggiornare il profilo.",
    } satisfies ActionState;
  }

  try {
    await getPrisma().user.update({
      where: { id: currentUser.id },
      data: {
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        phone: parsed.data.phone || null,
      },
    });
  } catch (error) {
    return {
      message: formatActionError(error),
    } satisfies ActionState;
  }

  revalidatePath("/account");
  return {
    message: "Profilo aggiornato correttamente.",
  } satisfies ActionState;
}

export async function logoutAction() {
  await clearUserSession();
  redirect("/login");
}
