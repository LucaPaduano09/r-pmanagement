import Link from "next/link";
import { AnimatedStatCard } from "@/components/home/animated-stat-card";
import { HeroIphoneShowcase } from "@/components/home/hero-iphone-showcase";
import { PremiumHeroBackground } from "@/components/home/premium-hero-background";
import { EditorialMarquee } from "@/components/editorial-marquee";
import { MarketplaceCard } from "@/components/marketplace-card";
import { ParallaxSection } from "@/components/parallax-section";
import { RevealItem } from "@/components/reveal-item";
import { ReviewGallery } from "@/components/review-gallery";
import { SectionHeading } from "@/components/section-heading";
import { marketplaceCards, serviceItems, serviceReviews } from "@/lib/site-data";

const premiumSignals = [
  "Direzione creativa e commerciale nello stesso ecosistema",
  "Marketplace wallet-based per acquisti più semplici e ricorrenti",
  "Customer area pensata per far percepire ordine e solidità",
];

const workflowPreview = [
  { step: "01", title: "Strategia", text: "Audit, positioning e roadmap contenuti." },
  { step: "02", title: "Produzione", text: "Creatività, copy e formati coordinati." },
  { step: "03", title: "Performance", text: "Lead, campagne, ottimizzazione e continuità." },
];

const editorialSignals = [
  "Strategia Social",
  "Sistemi di Contenuto",
  "Posizionamento del Brand",
  "Crescita Adv",
  "Esperienza Wallet",
  "Fidelizzazione Cliente",
];

export default function HomePage() {
  return (
    <div className="pb-20">
      <ParallaxSection
        className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 pb-18 pt-14 lg:px-10 lg:pb-28 lg:pt-24"
        intensity={36}
      >
        <PremiumHeroBackground />
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-200/80 bg-white/82 px-4 py-2 text-sm font-semibold text-sky-800 shadow-[0_10px_40px_rgba(14,165,233,0.09)] backdrop-blur">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_18px_rgba(14,165,233,0.55)]" />
              Social media manager, marketplace e customer area in un solo ecosistema premium
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-slate-950 sm:text-6xl lg:text-7xl">
              L’esperienza digitale che fa percepire il tuo brand più alto, più chiaro, più serio.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              R&amp;P Management unisce consulenza, content strategy, advertising e un marketplace
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
              <AnimatedStatCard label="Clienti attivi" value={30} suffix="+" />
              <AnimatedStatCard
                label="Budget gestiti"
                value={250}
                prefix="€"
                suffix="k+"
                delayMs={160}
              />
              <AnimatedStatCard
                label="Tempo medio onboarding"
                value={72}
                suffix="h"
                delayMs={320}
              />
            </div>

            <div className="mt-10 grid gap-3">
              {premiumSignals.map((signal, index) => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-[1.4rem] border border-sky-100/80 bg-white/68 px-4 py-3 backdrop-blur"
                  style={{
                    animation: `fadeLiftIn 720ms ease-out ${index * 130 + 220}ms both`,
                  }}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_16px_rgba(14,165,233,0.45)]" />
                  <p className="text-sm text-slate-600">{signal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <HeroIphoneShowcase />

            {/* <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {featuredMoments.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/70 bg-white/82 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur"
                  style={{
                    animation: `fadeLiftIn 760ms ease-out ${index * 180 + 260}ms both`,
                  }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700/70">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </ParallaxSection>

      <RevealItem className="mx-auto mt-2 max-w-7xl px-6 lg:px-10" yOffset={18} blurPx={10}>
        <EditorialMarquee items={editorialSignals} />
      </RevealItem>

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
              {workflowPreview.map((item, index) => (
                <RevealItem key={item.step} delayMs={index * 120}>
                  <div className="rounded-[1.6rem] bg-slate-50 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
                      {item.step}
                    </p>
                    <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </RevealItem>
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
          {serviceItems.map((service, index) => (
            <RevealItem key={service.title} delayMs={index * 140}>
              <article className="group rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.08)]">
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
            </RevealItem>
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
        <RevealItem className="mt-12" delayMs={140}>
          <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
            <ReviewGallery reviews={serviceReviews} />
          </div>
        </RevealItem>
      </ParallaxSection>
    </div>
  );
}
