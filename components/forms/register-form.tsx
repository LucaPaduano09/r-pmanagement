"use client";

import { useActionState, useState } from "react";
import { registerAction } from "@/app/actions/auth";
import { AuthSubmitButton } from "@/components/forms/auth-submit-button";
import { FormField } from "@/components/forms/form-field";

type RegisterValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

function validateEmail(value: string) {
  if (!value) {
    return undefined;
  }

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return isValid ? undefined : "Inserisci un indirizzo email valido.";
}

function validatePassword(value: string) {
  if (!value) {
    return undefined;
  }

  if (value.length < 8) {
    return "La password deve avere almeno 8 caratteri.";
  }

  if (!/[A-Za-z]/.test(value)) {
    return "La password deve contenere almeno una lettera.";
  }

  if (!/[0-9]/.test(value)) {
    return "La password deve contenere almeno un numero.";
  }

  if (!/[^A-Za-z0-9]/.test(value)) {
    return "La password deve contenere almeno un carattere speciale.";
  }

  return undefined;
}

function validateConfirmPassword(password: string, confirmPassword: string) {
  if (!confirmPassword) {
    return undefined;
  }

  return password === confirmPassword ? undefined : "Le password non coincidono.";
}

function PasswordToggleButton({
  isVisible,
  onToggle,
}: {
  isVisible: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 transition hover:text-slate-700"
      aria-label={isVisible ? "Nascondi password" : "Mostra password"}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
        {isVisible ? null : <path d="M4 4l16 16" />}
      </svg>
    </button>
  );
}

export function RegisterForm() {
  const [state, action] = useActionState(registerAction, undefined);
  const [values, setValues] = useState<RegisterValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const liveEmailError = validateEmail(values.email);
  const livePasswordError = validatePassword(values.password);
  const liveConfirmPasswordError = validateConfirmPassword(
    values.password,
    values.confirmPassword,
  );

  function updateValue(name: keyof RegisterValues, value: string) {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  return (
    <form
      action={action}
      className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Nome"
          name="firstName"
          autoComplete="given-name"
          required
          minLength={2}
          maxLength={50}
          pattern="^[A-Za-zÀ-ÖØ-öø-ÿ'\\s-]+$"
          errors={state?.errors?.firstName}
        >
          <input
            name="firstName"
            value={values.firstName}
            onChange={(event) => updateValue("firstName", event.target.value)}
            autoComplete="given-name"
            required
            minLength={2}
            maxLength={50}
            pattern="^[A-Za-zÀ-ÖØ-öø-ÿ'\\s-]+$"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
          />
        </FormField>
        <FormField
          label="Cognome"
          name="lastName"
          autoComplete="family-name"
          required
          minLength={2}
          maxLength={50}
          pattern="^[A-Za-zÀ-ÖØ-öø-ÿ'\\s-]+$"
          errors={state?.errors?.lastName}
        >
          <input
            name="lastName"
            value={values.lastName}
            onChange={(event) => updateValue("lastName", event.target.value)}
            autoComplete="family-name"
            required
            minLength={2}
            maxLength={50}
            pattern="^[A-Za-zÀ-ÖØ-öø-ÿ'\\s-]+$"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
          />
        </FormField>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <FormField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          errors={liveEmailError ? [liveEmailError] : state?.errors?.email}
        >
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            autoComplete="email"
            inputMode="email"
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
          />
        </FormField>
        <FormField
          label="Telefono"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          minLength={7}
          maxLength={20}
          pattern="^[+0-9()\\s-]{7,20}$"
          errors={state?.errors?.phone}
        >
          <input
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            minLength={7}
            maxLength={20}
            pattern="^[+0-9()\\s-]{7,20}$"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
          />
        </FormField>
      </div>

      <div className="mt-5">
        <FormField
          label="Password"
          name="password"
          errors={livePasswordError ? [livePasswordError] : state?.errors?.password}
        >
          <div className="relative mt-2">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={(event) => updateValue("password", event.target.value)}
              autoComplete="new-password"
              required
              minLength={8}
              maxLength={72}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-14 outline-none transition focus:border-slate-400"
            />
            <PasswordToggleButton
              isVisible={showPassword}
              onToggle={() => setShowPassword((current) => !current)}
            />
          </div>
        </FormField>
      </div>

      <div className="mt-5">
        <FormField
          label="Conferma password"
          name="confirmPassword"
          errors={
            liveConfirmPasswordError
              ? [liveConfirmPasswordError]
              : state?.errors?.confirmPassword
          }
        >
          <div className="relative mt-2">
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={(event) => updateValue("confirmPassword", event.target.value)}
              autoComplete="new-password"
              required
              minLength={8}
              maxLength={72}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-14 outline-none transition focus:border-slate-400"
            />
            <PasswordToggleButton
              isVisible={showConfirmPassword}
              onToggle={() => setShowConfirmPassword((current) => !current)}
            />
          </div>
        </FormField>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        La password deve avere almeno 8 caratteri, includere una lettera, un numero e un
        carattere speciale.
      </p>
      {state?.message ? <p className="mt-4 text-sm text-rose-600">{state.message}</p> : null}
      <div className="mt-6">
        <AuthSubmitButton idleLabel="Crea account" pendingLabel="Creazione account..." />
      </div>
    </form>
  );
}
