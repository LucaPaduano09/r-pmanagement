import Link from "next/link";
import { MarketplaceCard } from "@/components/marketplace-card";
import { ParallaxSection } from "@/components/parallax-section";
import { ReviewGallery } from "@/components/review-gallery";
import { SectionHeading } from "@/components/section-heading";
import { marketplaceCards, serviceItems, serviceReviews } from "@/lib/site-data";
import { formatCurrency } from "@/lib/utils";

const premiumSignals = [
  "Direzione creativa e commerciale nello stesso ecosistema",
  "Marketplace wallet-based per acquisti più semplici e ricorrenti",
  "Customer area pensata per far percepire ordine e solidità",
];

const featuredMoments = [
  {
    title: "Brand perception",
    description: "Visual, tono e contenuti costruiti per posizionare più in alto il tuo brand.",
  },
  {
    title: "Commercial clarity",
    description: "Offerta, servizi e percorsi resi più comprensibili e più facili da comprare.",
  },
  {
    title: "Retention flow",
    description: "Wallet, area cliente e continuità operativa per aumentare riacquisto e fiducia.",
  },
];

const workflowPreview = [
  { step: "01", title: "Strategia", text: "Audit, positioning e roadmap contenuti." },
  { step: "02", title: "Produzione", text: "Creatività, copy e formati coordinati." },
  { step: "03", title: "Performance", text: "Lead, campagne, ottimizzazione e continuità." },
];

export default function HomePage() {
  return (
    <div className="pb-20">
      <ParallaxSection
        className="relative mx-auto w-full max-w-7xl px-6 pb-18 pt-14 lg:px-10 lg:pb-28 lg:pt-24"
        intensity={36}
      >
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-sky-200 bg-white/85 px-4 py-1.5 text-sm font-semibold text-sky-800 shadow-sm">
            Social media manager, marketplace e customer area in un solo ecosistema premium
          </p>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-slate-950 sm:text-6xl lg:text-7xl">
            L’esperienza digitale che fa percepire il tuo brand più alto, più chiaro, più serio.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            R&P Management unisce consulenza, content strategy, advertising e un marketplace
            dove le card acquistate diventano credito spendibile nella customer area. Non solo
            marketing: un sistema completo che migliora immagine, ordine e conversione.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/prenota-consulenza"
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)] transition hover:bg-slate-800"
            >
              Prenota una consulenza gratuita
            </Link>
            <Link
              href="/marketplace"
              className="inline-flex rounded-full border border-slate-200 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
            >
              Esplora il marketplace
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Clienti attivi", value: "30+" },
              { label: "Budget gestiti", value: "€250k+" },
              { label: "Tempo medio onboarding", value: "72h" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-[0_14px_50px_rgba(15,23,42,0.06)] backdrop-blur"
              >
                <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-3">
            {premiumSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-3 rounded-[1.4rem] border border-sky-100 bg-sky-50/70 px-4 py-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                <p className="text-sm text-slate-600">{signal}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-sky-200/40 blur-3xl lg:block" />
          <div className="absolute right-0 top-0 hidden h-40 w-40 rounded-full bg-slate-200/50 blur-3xl lg:block" />

          <div className="relative mx-auto w-full max-w-[20.5rem]">
            <div className="pointer-events-none absolute -left-1.5 top-22 hidden h-11 w-1 rounded-full bg-slate-800 lg:block" />
            <div className="pointer-events-none absolute -left-1.5 top-34 hidden h-14 w-1 rounded-full bg-slate-800 lg:block" />
            <div className="pointer-events-none absolute -right-1.5 top-28 hidden h-18 w-1 rounded-full bg-slate-800 lg:block" />

            <div className="rounded-[2.8rem] bg-[linear-gradient(180deg,_#1f2430_0%,_#2a3140_45%,_#202633_100%)] p-[9px] shadow-[0_34px_95px_rgba(15,23,42,0.24)] ring-1 ring-white/20">
              <div className="relative overflow-hidden rounded-[2.35rem] border border-white/8 bg-[linear-gradient(180deg,_rgba(35,41,54,0.98),_rgba(39,46,60,0.94))] px-4 pb-4 pt-11 text-white">
                <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-3">
                  <div className="h-6 w-28 rounded-full bg-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-4 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                </div>

                <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-4.5 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">
                        Wallet dashboard preview
                      </p>
                      <p className="mt-2 text-sm text-slate-300">
                        Esperienza cliente progettata per riacquisto e continuità.
                      </p>
                    </div>
                    <div className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                      online
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-300">Saldo disponibile</p>
                    <p className="text-5xl font-semibold tracking-[-0.06em]">
                      {formatCurrency(1575)}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-2">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Ordini</p>
                        <p className="mt-2 text-xs font-semibold">Card acquistate e archiviate</p>
                      </div>
                      <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-2">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Move</p>
                        <p className="mt-2 text-xs font-semibold">Top-up, bonus e utilizzi wallet</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {[
                      "Acquisti card verificati lato server",
                      
                    ].map((entry) => (
                      <div
                        key={entry}
                        className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                      >
                        {entry}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {featuredMoments.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.07)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700/70">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </ParallaxSection>

      <ParallaxSection className="mx-auto max-w-7xl px-6 py-10 lg:px-10" intensity={18}>
        <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
                Manifesto
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950">
                Non basta apparire bene. Serve un sistema che renda il brand desiderabile e facile da comprare.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {workflowPreview.map((item) => (
                <div key={item.step} className="rounded-[1.6rem] bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
                    {item.step}
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection className="mx-auto max-w-7xl px-6 py-16 lg:px-10" intensity={22}>
        <SectionHeading
          eyebrow="Servizi"
          title="Un partner operativo, non solo un fornitore."
          description="Strategia, contenuti, advertising e personal branding progettati per aumentare percezione, domanda e conversione."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {serviceItems.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
                  {service.metrics}
                </p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Core
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              {service.deliverables?.length ? (
                <div className="mt-6 grid gap-3">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </ParallaxSection>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionHeading
          eyebrow="Marketplace"
          title="Card digitali che diventano credito reale."
          description="Ogni card acquistata carica il wallet dell’utente con lo stesso valore, o con un bonus extra, per acquistare servizi e pacchetti in modo fluido."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {marketplaceCards.map((product) => (
            <MarketplaceCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <ParallaxSection className="mx-auto max-w-7xl px-6 py-16 lg:px-10" intensity={24}>
        <SectionHeading
          eyebrow="Clienti"
          title="Risultati che tengono insieme branding e performance."
          description="Una home premium ha bisogno anche di proof elegante: recensioni, continuità e percezione di affidabilità."
        />
        <div className="mt-12 rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
          <ReviewGallery reviews={serviceReviews} />
        </div>
      </ParallaxSection>
    </div>
  );
}
