export type ServiceItem = {
  title: string;
  description: string;
  metrics: string;
  deliverables?: string[];
};

export type ReviewItem = {
  name: string;
  role: string;
  quote: string;
  outcome: string;
};

export type ProductCard = {
  slug: string;
  name: string;
  description: string;
  price: number | string;
  bonus: number;
  highlight: string;
  delivery: string;
  features: string[];
};

export type ClientStory = {
  name: string;
  sector: string;
  result: string;
  summary: string;
};

export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/clienti", label: "I nostri clienti" },
  { href: "/contatti", label: "Contatti" },
  { href: "/prenota-consulenza", label: "Consulenza gratuita" },
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Social media strategy",
    description:
      "Piani editoriali, positioning, rubriche e calendario contenuti cuciti sul tuo brand.",
    metrics: "+42% crescita media reach trimestrale",
    deliverables: [
      "Audit iniziale del posizionamento",
      "Piano editoriale mensile",
      "Rubriche e contenuti pillar",
    ],
  },
  {
    title: "Content production",
    description:
      "Short-form video, creatività statiche, copywriting e direction pensati per conversione e riconoscibilità.",
    metrics: "3 formati creativi testati ogni mese",
    deliverables: [
      "Reel, stories e caroselli",
      "Copy ad alta conversione",
      "Creative direction coordinata",
    ],
  },
  {
    title: "Advertising & funnel",
    description:
      "Campagne Meta e lead generation con focus su prenotazioni, vendite e tracciamento ROI.",
    metrics: "Campagne",
    deliverables: [
      "Setup campagne e pixel",
      "Lead funnel e remarketing",
      "Reportistica e ottimizzazione",
    ],
  },
  {
    title: "Personal branding",
    description:
      "Per founder, consulenti e professionisti che vogliono trasformare autorità in domanda qualificata.",
    metrics: "Presenza Omnicanale",
    deliverables: [
      "Tone of voice personale",
      "Format seriali riconoscibili",
      "Strategia contenuti autorevole",
    ],
  },
];

export const serviceReviews: ReviewItem[] = [
  {
    name: "Martina De Luca",
    role: "Founder, Studio Élan",
    quote:
      "Avevamo bisogno di ordine, direzione e una presenza più premium. Dopo pochi mesi il brand è diventato molto più riconoscibile e le richieste sono salite.",
    outcome: "+61% richieste inbound",
  },
  {
    name: "Riccardo Villa",
    role: "Owner, Villa Performance",
    quote:
      "Non solo contenuti belli: finalmente una strategia che ha collegato branding, lead e follow-up commerciale in modo chiaro.",
    outcome: "-24% costo lead",
  },
  {
    name: "Chiara Neri",
    role: "Co-founder, Maison Atelier",
    quote:
      "Il lavoro sul posizionamento social ci ha dato coerenza visiva e tono giusto. Oggi il profilo sembra davvero allineato al valore del brand.",
    outcome: "+3.2x engagement qualificato",
  },
  {
    name: "Lorenzo Bassi",
    role: "Founder, Bassi Interiors",
    quote:
      "La parte più forte è stata la struttura: ogni contenuto sembrava finalmente parte di un sistema e non di una pubblicazione casuale.",
    outcome: "+48% richieste commerciali",
  },
  {
    name: "Elisa Fontana",
    role: "Owner, Fontana Beauty Lab",
    quote:
      "Abbiamo migliorato estetica, chiarezza dell’offerta e continuità. I clienti percepiscono il brand in modo molto più professionale.",
    outcome: "+57% prenotazioni da Instagram",
  },
  {
    name: "Davide Serra",
    role: "CEO, Serra Digital Clinic",
    quote:
      "Mi è piaciuto il mix tra creatività e lettura dati. Ogni scelta aveva un senso strategico e questo si è visto nei risultati.",
    outcome: "-31% costo acquisizione",
  },
  {
    name: "Federica Rinaldi",
    role: "Founder, Rinaldi Events",
    quote:
      "Finalmente un partner che pensa anche all’esperienza del cliente oltre che ai contenuti. La presenza online oggi è molto più forte.",
    outcome: "+2.8x richieste qualificate",
  },
  {
    name: "Tommaso Greco",
    role: "Co-owner, Greco Fitness Club",
    quote:
      "Il lavoro su reel, advertising e funnel ha reso tutto più semplice da leggere e più efficace da convertire in contatti reali.",
    outcome: "+44% lead mensili",
  },
  {
    name: "Sara Pini",
    role: "Brand Manager, Pini Maison",
    quote:
      "Ci serviva una presenza social più premium e coerente con il prezzo del prodotto. Oggi il posizionamento è decisamente più alto.",
    outcome: "+36% conversione da DM",
  },
];

export const marketplaceCards: ProductCard[] = [
    {
    slug: "custom-amount",
    name: "Card Custom",
    description:
      "Hai bisogno di una card custom? questa è l'opzione che fa per te!",
    price: "Custom",
    bonus: 0,
    highlight: "",
    delivery: "Accredito prioritario e attivazione premium",
    features: [
      "Review strategica dedicata",
      "Pensata per team e aziende in crescita",
    ],
  },
  {
    slug: "easy-250",
    name: "Card Easy 250",
    description:
      "Perfetta per iniziare un nuovo percorso con spesa controllata.",
    price: 250,
    bonus: 0,
    highlight: "La card si trasforma in 250 euro di saldo disponibile nel wallet utente.",
    delivery: "Accredito istantaneo dopo conferma ordine",
    features: [
      "Saldo utilizzabile per servizi e pacchetti",
      "Storico ordini e movimenti wallet",
      "Checkout verificato lato server",
    ],
  },
  {
    slug: "starter-500",
    name: "Card Starter 500",
    description:
      "Perfetta per testare un nuovo percorso di crescita con budget agile e spesa controllata.",
    price: 500,
    bonus: 0,
    highlight: "La card si trasforma in 500 euro di saldo disponibile nel wallet utente.",
    delivery: "Accredito istantaneo dopo conferma ordine",
    features: [
      "Saldo utilizzabile per servizi e pacchetti",
      "Storico ordini e movimenti wallet",
      "Checkout verificato lato server",
    ],
  },
  {
    slug: "growth-1000",
    name: "Card Growth 1000",
    description:
      "Per brand che vogliono accelerare contenuti, campagne e sprint creativi in modo più strutturato.",
    price: 1000,
    bonus: 75,
    highlight: "Include un bonus wallet di 75 euro per incentivare i riacquisti.",
    delivery: "Accredito entro pochi minuti",
    features: [
      "1.075 euro di valore spendibile",
      "Priorità in fase di onboarding",
      "Ideale per piani trimestrali",
    ],
  },
  {
    slug: "elite-1500",
    name: "Card Elite 1500",
    description:
      "Pensata per aziende che vogliono continuità operativa, strategia e scala senza rallentamenti.",
    price: 1500,
    bonus: 100,
    highlight: "Formula premium con bonus più alto e supporto prioritario.",
    delivery: "Accredito prioritario e attivazione premium",
    features: [
      "1650 euro di saldo wallet",
      "Review strategica dedicata",
      "Pensata per team e aziende in crescita",
    ],
  },
  {
    slug: "elite-2000",
    name: "Card Elite 2000",
    description:
      "Pensata per aziende enterprise o forti utenti che vogliono continuità operativa, strategia e scala senza rallentamenti.",
    price: 2000,
    bonus: 150,
    highlight: "Formula premium con bonus più alto e supporto prioritario.",
    delivery: "Accredito prioritario e attivazione premium",
    features: [
      "2150 euro di saldo wallet",
      "Review strategica dedicata",
      "Pensata per team e aziende in crescita",
    ],
  },
];

export const clientStories: ClientStory[] = [
  {
    name: "Atelier Forma",
    sector: "Fashion & retail",
    result: "+118% lead qualificati",
    summary:
      "Restyling dell’identità social e funnel Meta orientato a richieste showroom.",
  },
  {
    name: "Nova Clinic",
    sector: "Healthcare",
    result: "-27% costo per prenotazione",
    summary:
      "Ottimizzazione campagne e contenuti verticali pensati per fiducia e autorevolezza.",
  },
  {
    name: "Casa Brunetti",
    sector: "Hospitality",
    result: "+63% richieste dirette",
    summary:
      "Strategia editorial hospitality-first con storytelling visuale e remarketing.",
  },
  {
    name: "Studio Vetra",
    sector: "Professional services",
    result: "+4.1x pipeline organica",
    summary:
      "Personal branding del founder con format seriali e contenuti ad alta credibilità.",
  },
];

export const dashboardPreview = {
  userName: "Giulia Moretti",
  balance: 1575,
  nextConsultation: "28 marzo 2026, ore 15:30",
  recentOrders: [
    { id: "#RP-1048", item: "Card Growth 1500", amount: 1500, status: "Accreditato" },
    { id: "#RP-1022", item: "Card Starter 500", amount: 500, status: "Utilizzato" },
  ],
  walletMovements: [
    { label: "Bonus Growth", value: "+75 euro" },
    { label: "Acquisto campagna Meta", value: "-900 euro" },
    { label: "Acquisto shooting creator", value: "-300 euro" },
  ],
};
