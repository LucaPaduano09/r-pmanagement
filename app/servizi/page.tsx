import Link from "next/link";
import { ParallaxSection } from "@/components/parallax-section";
import { ReviewGallery } from "@/components/review-gallery";
import { SectionHeading } from "@/components/section-heading";
import { serviceItems, serviceReviews } from "@/lib/site-data";

const workflowSteps = [
  {
    step: "01",
    title: "Audit & positioning",
    description:
      "Analizziamo brand, contenuti, competitor e obiettivi commerciali per definire una direzione chiara.",
  },
  {
    step: "02",
    title: "Creative system",
    description:
      "Costruiamo format, tono di voce, linee visuali e un piano operativo che renda il brand coerente e riconoscibile.",
  },
  {
    step: "03",
    title: "Growth execution",
    description:
      "Attiviamo contenuti, advertising e ottimizzazione continua con lettura costante dei dati e focus sui risultati.",
  },
];

const serviceHighlights = [
  "Piani su misura per brand, professionisti e aziende",
  "Contenuti pensati sia per percezione che per conversione",
  "Gestione ordinata di richieste, servizi e credito wallet",
  "Approccio premium, veloce e orientato alla continuità",
];

export default function ServiziPage() {
  return (
    <div className="pb-20">
      <ParallaxSection
        className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
        intensity={28}
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-sky-800 shadow-sm">
            Servizi pensati per reputazione, domanda e continuità commerciale
          </p>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-6xl">
            Un’offerta più strutturata, più leggibile e molto più utile per chi compra.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            Qui non vendiamo solo singole attività: costruiamo un sistema che unisce strategia,
            contenuti, advertising e personal branding per aiutare il cliente a crescere con più
            ordine e più percezione di valore.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
              >
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/prenota-consulenza"
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Prenota una consulenza gratuita
            </Link>
            <Link
              href="/marketplace"
              className="inline-flex rounded-full border border-slate-200 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
            >
              Vedi il marketplace
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2.25rem] border border-white/70 bg-white/85 p-7 shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
              Dentro ogni percorso
            </p>
            <div className="mt-6 grid gap-4">
              {[
                { label: "Analisi strategica", value: "Brand, pubblico e benchmark" },
                { label: "Produzione contenuti", value: "Format, copy e visual coordinati" },
                { label: "Performance", value: "Lead, funnel e ottimizzazione continua" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-sky-100 bg-[linear-gradient(180deg,_rgba(240,249,255,0.94),_rgba(255,255,255,0.92))] p-7 shadow-[0_22px_70px_rgba(14,165,233,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
              Perché funziona
            </p>
            <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
              Meno improvvisazione, più sistema.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Ogni servizio è pensato per dialogare con gli altri, così il cliente percepisce un
             ’esperienza più seria, più premium e più semplice da continuare nel tempo.
            </p>
          </div>
        </div>
        </div>
      </ParallaxSection>

      <ParallaxSection className="mx-auto max-w-7xl px-6 py-16 lg:px-10" intensity={20}>
        <SectionHeading
          eyebrow="Servizi"
          title="Quattro aree di lavoro, un’unica direzione strategica."
          description="Ogni blocco è progettato per essere comprensibile da subito e abbastanza strutturato da sembrare un’offerta premium, non una lista generica di attività."
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {serviceItems.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
                  {service.metrics}
                </p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Servizio core
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{service.description}</p>

              {service.deliverables?.length ? (
                <div className="mt-6 grid gap-3">
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[1.25rem] border border-slate-100 bg-slate-50 px-4 py-3"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                      <p className="text-sm text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection className="mx-auto max-w-7xl px-6 py-16 lg:px-10" intensity={22}>
        <SectionHeading
          eyebrow="Metodo"
          title="Come lavoriamo, dall’onboarding alla crescita."
          description="Un flusso più chiaro aumenta la fiducia e rende la pagina servizi molto più credibile anche dal punto di vista commerciale."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {workflowSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700/70">
                Step {step.step}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection className="mx-auto max-w-7xl px-6 py-16 lg:px-10" intensity={18}>
        <SectionHeading
          eyebrow="Recensioni"
          title="Cosa dicono di noi"
          description=""
        />
        <div className="mt-12">
          <ReviewGallery reviews={serviceReviews} />
        </div>
      </ParallaxSection>
    </div>
  );
}
