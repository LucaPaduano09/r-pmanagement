import { ParallaxSection } from "@/components/parallax-section";
import { SectionHeading } from "@/components/section-heading";
import { clientStories } from "@/lib/site-data";

export default function ClientiPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <ParallaxSection intensity={24}>
        <SectionHeading
          eyebrow="I nostri clienti"
          title="Brand e professionisti che volevano un salto netto di percezione."
          description="Una selezione di casi e profili ideali per cui l’esperienza RP Management è stata costruita."
        />
      </ParallaxSection>
      <ParallaxSection className="mt-12" intensity={20}>
        <div className="grid gap-6 lg:grid-cols-2">
          {clientStories.map((story) => (
            <article
              key={story.name}
              className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
                {story.sector}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                {story.name}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{story.summary}</p>
              <p className="mt-6 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                {story.result}
              </p>
            </article>
          ))}
        </div>
      </ParallaxSection>
    </div>
  );
}
