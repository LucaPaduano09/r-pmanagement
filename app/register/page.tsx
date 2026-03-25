import Link from "next/link";
import { RegisterForm } from "@/components/forms/register-form";
import { redirectIfAuthenticated } from "@/lib/auth";

export default async function RegisterPage() {
  await redirectIfAuthenticated();

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-16 lg:px-10">
      <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-200/80">
            Registrazione utente
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
            Crea il tuo account e accedi alla tua area riservata.
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Dopo la registrazione potrai vedere saldo wallet, ordini, accrediti e dati del tuo
            profilo in un’unica dashboard protetta.
          </p>
          <p className="mt-8 text-sm text-slate-400">
            Hai già un account?
          </p>
          <Link
            href="/login"
            className="mt-3 inline-flex text-sm font-semibold text-sky-300 transition hover:text-sky-200"
          >
            Vai al login
          </Link>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
