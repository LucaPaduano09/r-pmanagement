"use client";

import { useActionState } from "react";
import { updateProfileAction } from "@/app/actions/auth";
import { AuthSubmitButton } from "@/components/forms/auth-submit-button";
import { FormField } from "@/components/forms/form-field";

type ProfileFormProps = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export function ProfileForm({
  firstName,
  lastName,
  phone,
  email,
}: ProfileFormProps) {
  const [state, action] = useActionState(updateProfileAction, undefined);

  return (
    <form action={action} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
        Le tue informazioni
      </h2>
      <p className="mt-2 text-sm leading-7 text-slate-500">
        Aggiorna i dati del profilo. L&apos;email di accesso corrente è {email}.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FormField
          label="Nome"
          name="firstName"
          defaultValue={firstName}
          autoComplete="given-name"
          errors={state?.errors?.firstName}
        />
        <FormField
          label="Cognome"
          name="lastName"
          defaultValue={lastName}
          autoComplete="family-name"
          errors={state?.errors?.lastName}
        />
      </div>
      <div className="mt-5">
        <FormField
          label="Telefono"
          name="phone"
          type="tel"
          defaultValue={phone}
          autoComplete="tel"
          errors={state?.errors?.phone}
        />
      </div>
      {state?.message ? <p className="mt-4 text-sm text-emerald-700">{state.message}</p> : null}
      <div className="mt-6">
        <AuthSubmitButton idleLabel="Salva modifiche" pendingLabel="Salvataggio..." />
      </div>
    </form>
  );
}
