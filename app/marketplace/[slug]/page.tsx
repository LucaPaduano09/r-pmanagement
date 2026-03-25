import Link from "next/link";
import { notFound } from "next/navigation";
import { marketplaceCards } from "@/lib/site-data";
import { formatCurrency } from "@/lib/utils";

export function generateStaticParams() {
  return marketplaceCards.map((product) => ({ slug: product.slug }));
}

export default async function MarketplaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = marketplaceCards.find((entry) => entry.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="rounded-[2.5rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
          Marketplace / {product.name}
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-slate-950">
          {product.name}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>

        <div className="mt-10 grid gap-6 rounded-[2rem] bg-slate-950 p-7 text-white lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-sky-200/80">Valore card</p>
            <p className="mt-3 text-5xl font-semibold tracking-[-0.06em]">
              {formatCurrency(product.price)}
            </p>
            <p className="mt-3 text-sm text-slate-300">{product.delivery}</p>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-200">{product.highlight}</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1 size-2 rounded-full bg-sky-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/login"
            className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Accedi e acquista
          </Link>
          <Link
            href="/prenota-consulenza"
            className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Richiedi supporto
          </Link>
        </div>
      </div>
    </div>
  );
}
