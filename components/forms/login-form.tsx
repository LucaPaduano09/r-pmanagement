"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";
import { AuthSubmitButton } from "@/components/forms/auth-submit-button";
import { FormField } from "@/components/forms/form-field";

export function LoginForm() {
  const [state, action] = useActionState(loginAction, undefined);

  return (
    <form
      action={action}
      className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)]"
    >
      <FormField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        errors={state?.errors?.email}
      />
      <div className="mt-5">
        <FormField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          errors={state?.errors?.password}
        />
      </div>
      {state?.message ? <p className="mt-4 text-sm text-rose-600">{state.message}</p> : null}
      <div className="mt-6">
        <AuthSubmitButton idleLabel="Accedi" pendingLabel="Accesso in corso..." />
      </div>
    </form>
  );
}
