import Link from "next/link";
import { AboutShowcase } from "@/components/about-showcase";
import { ParallaxSection } from "@/components/parallax-section";
import { SectionHeading } from "@/components/section-heading";

const aboutHighlights = [
  {
    label: "Posizionamento",
    title: "Facciamo sembrare il brand più chiaro, più alto e più desiderabile.",
    description:
      "La prima crescita non arriva dai numeri, ma dalla percezione: tono, struttura, ritmo e coerenza devono far capire subito il valore.",
    points: [
      "Studiamo il brand per capire come renderlo più autorevole e riconoscibile.",
      "Eliminiamo messaggi confusi e costruiamo un’offerta più leggibile da chi arriva per la prima volta.",
      "Lavoriamo su visual, copy e direzione per far percepire qualità prima ancora del contatto.",
    ],
  },
  {
    label: "Sistema",
    title: "Non costruiamo contenuti casuali, ma un sistema di crescita continuo.",
    description:
      "Ogni asset deve parlare con il resto del progetto: contenuti, advertising, customer area e marketplace sono pezzi della stessa esperienza.",
    points: [
      "Ogni servizio è pensato per integrarsi con i successivi senza creare attrito.",
      "Le decisioni creative e operative vengono tradotte in una struttura facilmente scalabile.",
      "Il cliente finale percepisce un percorso ordinato, professionale e premium.",
    ],
  },
  {
    label: "Conversione",
    title: "Creatività e performance devono convivere nello stesso impianto.",
    description:
      "Per noi il design da solo non basta: deve essere abbastanza forte da attrarre e abbastanza chiaro da convertire.",
    points: [
      "Formati e funnel vengono pensati per generare richieste più qualificate.",
      "Il marketplace wallet-based rende l’esperienza di acquisto più semplice e più ricorrente.",
      "L’area utente aggiunge fiducia, ordine e continuità anche dopo la prima vendita.",
    ],
  },
];

const principles = [
  "Pensiamo come partner strategici, non come esecutori occasionali.",
  "Ogni dettaglio visivo deve aiutare il commerciale, non solo apparire bello.",
  "La percezione premium nasce da coerenza, ritmo e struttura chiara.",
];

const timeline = [
  {
    step: "01",
    title: "Ascolto e analisi",
    description:
      "Partiamo da brand, posizionamento, obiettivi, pubblico e situazione attuale per capire dove intervenire davvero.",
  },
  {
    step: "02",
    title: "Costruzione del sistema",
    description:
      "Definiamo la direzione creativa, i contenuti, il tono di voce e la parte commerciale in modo coordinato.",
  },
  {
    step: "03",
    title: "Ottimizzazione continua",
    description:
      "Monitoriamo, rifiniamo e rendiamo il progetto più efficace nel tempo, non solo più bello al lancio.",
  },
];

const proofCards = [
  { value: "360°", label: "Visione su brand, contenuti, advertising e customer flow" },
  { value: "Fast", label: "Approccio rapido nelle iterazioni, ma curato nei dettagli" },
  { value: "Premium", label: "Esperienza progettata per aumentare la percezione di valore" },
];

export default function ChiSiamoPage() {
  return (
    <div className="pb-20">
      <ParallaxSection
        className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
        intensity={30}
      >
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Chi siamo"
            title="Direzione creativa, pensiero strategico e ossessione per i risultati."
            description="RP Management nasce per aiutare professionisti, brand e aziende a crescere con una presenza digitale più autorevole, misurabile e distintiva."
          />

          <p className="mt-8 font-display text-3xl italic leading-[1.25] text-slate-950 sm:text-4xl">
            “Curiamo ogni dettaglio per far percepire valore prima ancora di chiederlo in vendita.”
          </p>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Lavoriamo come partner operativo: definiamo il posizionamento, costruiamo format
            editoriali, gestiamo campagne e traduciamo il lavoro creativo in richieste concrete.
            Il marketplace con wallet integrato rende anche l’esperienza commerciale più lineare
            per i clienti ricorrenti.
          </p>

          <div className="mt-8 grid gap-3">
            {principles.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-[1.4rem] border border-sky-100 bg-sky-50/70 px-4 py-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                <p className="text-sm leading-7 text-slate-600">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/prenota-consulenza"
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Prenota una consulenza
            </Link>
            <Link
              href="/servizi"
              className="inline-flex rounded-full border border-slate-200 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
            >
              Scopri i servizi
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2.25rem] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(239,246,255,0.9))] p-7 shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
              Il nostro focus
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
              Rendere ogni interazione più coerente, più chiara, più memorabile.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Una pagina “chi siamo” premium deve far capire subito metodo, sensibilità e livello
              di cura. Per questo uniamo contenuto, ritmo visivo e micro-transizioni in un impianto
              più editoriale.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {proofCards.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
              >
                <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </ParallaxSection>

      <ParallaxSection className="mx-auto max-w-7xl px-6 py-12 lg:px-10" intensity={22}>
        <AboutShowcase items={aboutHighlights} />
      </ParallaxSection>

      <ParallaxSection className="mx-auto max-w-7xl px-6 py-16 lg:px-10" intensity={24}>
        <SectionHeading
          eyebrow="Metodo"
          title="Come lavoriamo dietro le quinte."
          description="Una struttura più chiara aumenta la fiducia e dà alla pagina un taglio molto più autorevole e professionale."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {timeline.map((item) => (
            <article
              key={item.step}
              className="rounded-[2rem] border border-white/70 bg-white/88 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sky-700/70">
                Step {item.step}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </ParallaxSection>
    </div>
  );
}
