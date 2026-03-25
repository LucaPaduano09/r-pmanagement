import Link from "next/link";
import { ParallaxSection } from "@/components/parallax-section";
import { SectionHeading } from "@/components/section-heading";

const contactChannels = [
  { label: "Instagram", href: "#" },
  { label: "Tiktok", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TripAdvisor", href: "#" },
  { label: "AirBnB", href: "#" },
];

export default function ContattiPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <ParallaxSection intensity={24}>
        <SectionHeading
          eyebrow="Contatti"
          title="Parliamo del tuo brand e capiamo insieme il prossimo step."
          description="Questa pagina va ancora fatta funzionare"
        />
      </ParallaxSection>
      <ParallaxSection className="mt-12" intensity={20}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-200/80">
                Contatti diretti
              </p>
              <p className="text-3xl font-semibold tracking-[-0.04em]">hello@rpmanagement.it</p>
              <p className="text-base leading-8 text-slate-300">
                Rispondiamo rapidamente per richieste su gestione social, advertising, piani
                editoriali, personal branding e utilizzo del wallet.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
                Canali
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {contactChannels.map((channel) => (
                  <Link
                    key={channel.label}
                    href={channel.href}
                    className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-950"
                  >
                    {channel.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <form className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: "Nome", type: "text" },
                { label: "Email", type: "email" },
                { label: "Brand", type: "text" },
                { label: "Telefono", type: "tel" },
              ].map((field) => (
                <label key={field.label} className="text-sm font-medium text-slate-700">
                  {field.label}
                  <input
                    type={field.type}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-700">
              Messaggio
              <textarea
                rows={5}
                className="mt-2 w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Invia richiesta
            </button>
          </form>
        </div>
      </ParallaxSection>
    </div>
  );
}
