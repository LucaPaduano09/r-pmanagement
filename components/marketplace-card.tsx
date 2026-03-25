import Link from "next/link";
import type { ProductCard } from "@/lib/site-data";
import { formatCurrency } from "@/lib/utils";

type MarketplaceCardProps = {
  product: ProductCard;
};

export function MarketplaceCard({ product }: MarketplaceCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
            Wallet card
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
            {product.name}
          </h3>
        </div>
        <div className="rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
          +{formatCurrency(product.bonus)} bonus
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
      <p className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-slate-950">
        {Number(product.price) ? formatCurrency(Number(product.price)) : product.price}
      </p>
      <p className="mt-2 text-sm text-slate-500">{product.highlight}</p>

      <ul className="mt-6 space-y-3 text-sm text-slate-600">
        {product.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-1 size-2 rounded-full bg-sky-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href={`/marketplace/${product.slug}`}
          className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Scopri la card
        </Link>
        <Link
          href="/login"
          className="inline-flex rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Vai all’area utente
        </Link>
      </div>
    </article>
  );
}
