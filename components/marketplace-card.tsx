"use client";

import Link from "next/link";
import { useState, type PointerEvent as ReactPointerEvent } from "react";
import type { ProductCard } from "@/lib/site-data";
import { formatCurrency } from "@/lib/utils";

type MarketplaceCardProps = {
  product: ProductCard;
};

const baseGlow =
  "radial-gradient(circle at 50% 50%, rgba(125,211,252,0.24), rgba(125,211,252,0) 62%)";

export function MarketplaceCard({ product }: MarketplaceCardProps) {
  const [transformStyle, setTransformStyle] = useState("rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glowStyle, setGlowStyle] = useState({ opacity: 0, background: baseGlow });

  const isCustom = typeof product.price === "string";
  const priceLabel = typeof product.price === "number" ? formatCurrency(product.price) : product.price;
  const bonusLabel = product.bonus > 0 ? `+${formatCurrency(product.bonus)} bonus` : "Su misura";

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;
    const rotateY = (offsetX - 0.5) * 18;
    const rotateX = (0.5 - offsetY) * 18;
    const glowX = Math.round(offsetX * 100);
    const glowY = Math.round(offsetY * 100);

    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.58), rgba(186,230,253,0.38) 24%, rgba(125,211,252,0.16) 38%, rgba(125,211,252,0) 64%)`,
    });
  };

  const resetInteractiveState = () => {
    setTransformStyle("rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlowStyle({ opacity: 0, background: baseGlow });
  };

  return (
    <div
      className="group h-full [perspective:1600px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetInteractiveState}
      onPointerCancel={resetInteractiveState}
      onBlur={resetInteractiveState}
    >
      <article
        className="relative isolate flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/75 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:border-sky-200/70 hover:shadow-[0_38px_100px_rgba(15,23,42,0.14)]"
        style={{ transform: transformStyle, transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.52),rgba(255,255,255,0.12)_38%,rgba(186,230,253,0.18)_100%)] opacity-90" />
        <div className="pointer-events-none absolute inset-0 transition-opacity duration-200" style={glowStyle} />
        <div className="marketplace-card-shine pointer-events-none absolute -right-1/3 -top-1/3 h-[180%] w-[76%] opacity-0 mix-blend-screen" />
        <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/50 opacity-80" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

        <div className="relative z-10 flex items-start justify-between gap-4 [transform:translateZ(42px)]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700/80">
              <span className="size-2 rounded-full bg-sky-500 shadow-[0_0_14px_rgba(14,165,233,0.35)]" />
              Wallet card
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-[2rem]">
              {product.name}
            </h3>
          </div>

          <div className="shrink-0 rounded-full border border-sky-100/80 bg-sky-50/90 px-3.5 py-1.5 text-sm font-semibold text-sky-700 shadow-[0_10px_28px_rgba(125,211,252,0.18)]">
            {bonusLabel}
          </div>
        </div>

        <div className="relative z-10 mt-6 rounded-[1.5rem] border border-white/70 bg-white/58 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] [transform:translateZ(56px)]">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Valore card
              </p>
              <p className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-slate-950">
                {priceLabel}
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100/80 bg-[linear-gradient(180deg,rgba(240,249,255,0.95),rgba(224,242,254,0.88))] px-3 py-2 text-right text-sky-900 shadow-[0_16px_36px_rgba(125,211,252,0.2)]">
              <p className="text-[11px] uppercase tracking-[0.2em] text-sky-600/80">Delivery</p>
              <p className="mt-1 text-sm font-semibold">{isCustom ? "Priority" : "Instant"}</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
          <p className="mt-4 text-sm leading-7 text-slate-500">{product.highlight}</p>
        </div>

        <ul className="relative z-10 mt-6 space-y-3 rounded-[1.5rem] border border-slate-100/80 bg-slate-50/72 p-5 text-sm text-slate-600 [transform:translateZ(34px)]">
          {product.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="mt-1 size-2 rounded-full bg-sky-500 shadow-[0_0_14px_rgba(14,165,233,0.35)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="relative z-10 mt-5 rounded-[1.35rem] border border-dashed border-sky-200/80 bg-sky-50/60 px-4 py-3 text-sm text-slate-600 [transform:translateZ(30px)]">
          {product.delivery}
        </div>

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-3 pt-6 [transform:translateZ(48px)]">
          <Link
            href={`/marketplace/${product.slug}`}
            className="inline-flex min-h-11 items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Scopri la card
          </Link>
          <Link
            href="/login"
            className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Vai all’area utente
          </Link>
        </div>
      </article>
    </div>
  );
}
