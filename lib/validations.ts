import { z } from "zod";

const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));
const nameField = (label: string) =>
  z
    .string()
    .trim()
    .min(2, `Inserisci ${label}.`)
    .max(50, `${label} troppo lungo.`)
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'\s-]+$/, `${label} contiene caratteri non validi.`);
const phoneField = z
  .string()
  .trim()
  .regex(/^[+0-9()\s-]{7,20}$/, "Inserisci un numero di telefono valido.")
  .optional()
  .or(z.literal(""));

export const contactFormSchema = z.object({
  name: z.string().min(2, "Inserisci un nome valido."),
  email: z.email("Inserisci un indirizzo email valido."),
  brand: optionalText(120),
  phone: optionalText(30),
  message: z.string().min(20, "Descrivi meglio la tua richiesta."),
});

export const consultationSchema = z.object({
  name: z.string().min(2, "Inserisci il tuo nome."),
  email: z.email("Inserisci un indirizzo email valido."),
  brand: optionalText(120),
  budget: optionalText(80),
  goal: z.string().min(20, "Racconta l'obiettivo principale della call."),
});

export const registerSchema = z.object({
  firstName: nameField("il nome"),
  lastName: nameField("il cognome"),
  email: z.email("Inserisci un indirizzo email valido.").trim(),
  phone: phoneField,
  password: z
    .string()
    .min(8, "La password deve avere almeno 8 caratteri.")
    .max(72, "La password è troppo lunga.")
    .regex(/[A-Za-z]/, "La password deve contenere almeno una lettera.")
    .regex(/[0-9]/, "La password deve contenere almeno un numero.")
    .regex(/[^A-Za-z0-9]/, "La password deve contenere almeno un carattere speciale."),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Le password non coincidono.",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.email("Inserisci un indirizzo email valido.").trim(),
  password: z.string().min(8, "La password deve avere almeno 8 caratteri."),
});

export const profileSchema = z.object({
  firstName: nameField("il nome"),
  lastName: nameField("il cognome"),
  phone: phoneField,
});

export const walletCheckoutSchema = z.object({
  productSlug: z.string().min(1),
  expectedPrice: z.number().int().positive(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type ConsultationInput = z.infer<typeof consultationSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
export type WalletCheckoutInput = z.infer<typeof walletCheckoutSchema>;
