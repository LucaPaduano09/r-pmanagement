import { ParallaxSection } from "@/components/parallax-section";
import { SectionHeading } from "@/components/section-heading";

export default function PrenotaConsulenzaPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <ParallaxSection intensity={24}>
        <SectionHeading
          eyebrow="Consulenza gratuita"
          title="Una call iniziale per capire obiettivi, priorità e margini di crescita."
          description="Questa pagina va ancora collegata e fatta funzionare "
        />
      </ParallaxSection>
      <ParallaxSection className="mt-12" intensity={20}>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-200/80">Cosa ottieni</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <li>Analisi iniziale del posizionamento social.</li>
              <li>Valutazione rapida del funnel o del profilo attuale.</li>
              <li>Proposta del percorso più adatto tra servizi e wallet card.</li>
            </ul>
          </div>
          <form className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: "Nome", type: "text" },
                { label: "Email", type: "email" },
                { label: "Brand", type: "text" },
                { label: "Budget indicativo", type: "text" },
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
              Obiettivo principale
              <textarea
                rows={5}
                className="mt-2 w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Richiedi call gratuita
            </button>
          </form>
        </div>
      </ParallaxSection>
    </div>
  );
}
