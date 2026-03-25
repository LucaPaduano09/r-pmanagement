import Link from "next/link";
import { LoginForm } from "@/components/forms/login-form";
import { redirectIfAuthenticated } from "@/lib/auth";

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-5xl items-center px-6 py-16 lg:px-10">
      <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-200/80">Area utente</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
            Accedi per vedere saldo, ordini e servizi attivi.
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Qui l’utente potrà autenticarsi e visualizzare il proprio wallet, lo storico
            ordini, i bonus accreditati e i servizi acquistati nel marketplace.
          </p>
        </div>
        <div>
          <LoginForm />
          <p className="mt-6 text-sm text-slate-500">
            Non hai ancora un account?
          </p>
          <Link
            href="/register"
            className="mt-4 inline-flex text-sm font-semibold text-sky-700 transition hover:text-sky-800"
          >
            Registrati ora
          </Link>
        </div>
      </div>
    </div>
  );
}
