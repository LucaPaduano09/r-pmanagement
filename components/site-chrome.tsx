import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { navigationItems } from "@/lib/site-data";
import Image from "next/image";

export async function SiteHeader() {
  const currentUser = await getCurrentUser();

  return (
    <header
      data-cursor-native="true"
      className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-2xl"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          {/* <span className="flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(15,23,42,0.22)]">
            RP
          </span> */}
          <Image alt="logo" src={"/logo2.svg"} width={50} height={50}/>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              RepManagement
            </p>
            <p className="text-sm text-slate-900">Social Media Management</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={currentUser ? "/account" : "/login"}
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white sm:inline-flex"
          >
            {currentUser ? "Il tuo account" : "Area utente"}
          </Link>
          <Link
            href="/prenota-consulenza"
            className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.26)] transition hover:bg-slate-800"
          >
            Prenota ora
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer
      data-cursor-native="true"
      className="relative overflow-hidden border-t border-slate-200 bg-[linear-gradient(180deg,_#f8fbff_0%,_#eef6ff_100%)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_20%_20%,_rgba(125,211,252,0.24),_transparent_34%),radial-gradient(circle_at_80%_10%,_rgba(15,23,42,0.08),_transparent_24%)]" />
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-18">
        <div className="grid gap-8 rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur xl:grid-cols-[1.15fr_0.7fr_0.7fr_0.85fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image alt="logo" src={"/logo2.svg"} width={50} height={50}/>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
                  RP Management
                </p>
                <p className="text-sm text-slate-600">Social Media Management</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Strategia, contenuti, advertising, marketplace wallet-based e area cliente in una
              presenza digitale pensata per sembrare premium e convertire meglio.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/prenota-consulenza"
                className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Prenota una call
              </Link>
              <Link
                href="/marketplace"
                className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Vai al marketplace
              </Link>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-600">
            <p className="font-semibold uppercase tracking-[0.2em] text-slate-950">Navigazione</p>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block transition hover:translate-x-1 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-4 text-sm text-slate-600">
            <p className="font-semibold uppercase tracking-[0.2em] text-slate-950">Contatti</p>
            <div className="space-y-3">
              <p>hello@rpmanagement.it</p>
              <p>+39 333 333 333 3</p>
              <p>Napoli, Italia</p>
            </div>
            <p className="rounded-[1.5rem] border border-sky-100 bg-sky-50/80 px-4 py-3 text-xs leading-6 text-slate-600">
              Risposte rapide per consulenze, servizi continuativi e richieste sul wallet.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-[linear-gradient(180deg,_rgba(248,250,252,0.95),_rgba(255,255,255,0.9))] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700/70">
              Premium workflow
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
              Più ordine, più percezione, più continuità.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Dalla consulenza iniziale fino alla gestione ordini e saldo cliente, tutto è pensato
              per dare un’esperienza più solida e professionale.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RP Management. Tutti i diritti riservati.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contatti" className="transition hover:text-slate-700">
              Privacy
            </Link>
            <Link href="/contatti" className="transition hover:text-slate-700">
              Cookie
            </Link>
            <Link href="/contatti" className="transition hover:text-slate-700">
              Supporto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
