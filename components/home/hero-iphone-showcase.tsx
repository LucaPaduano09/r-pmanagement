"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/utils";

const floatingBadges = [
  {
    label: "Lead flow",
    value: "+18 richieste",
    className: "-left-10 top-18",
    tailClassName: "left-[calc(100%-0.2rem)] top-[55%] -translate-y-1/2",
    duration: 7.4,
    delay: 0.2,
  },
  {
    label: "Wallet top-up",
    value: "+500 euro",
    className: "-right-7 top-30",
    tailClassName: "right-[calc(100%-0.2rem)] top-[56%] -translate-y-1/2",
    duration: 6.6,
    delay: 1.4,
  },
  {
    label: "Campaign ROAS",
    value: "4.6x",
    className: "-left-7 bottom-24",
    tailClassName: "left-[calc(100%-0.2rem)] top-[58%] -translate-y-1/2",
    duration: 8.1,
    delay: 2.6,
  },
];

export function HeroIphoneShowcase() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const cardTransform = useMemo(
    () => `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    [rotate.x, rotate.y],
  );

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;
    const rotateY = (relativeX - 0.5) * 14;
    const rotateX = (0.5 - relativeY) * 14;

    setRotate({ x: rotateX, y: rotateY });
  }

  function resetRotation() {
    setRotate({ x: 0, y: 0 });
  }

  return (
    <div className="relative mx-auto w-full max-w-[22rem] [perspective:1700px]">
      {floatingBadges.map((badge, index) => (
        <div
          key={badge.label}
          className={`pointer-events-none absolute z-20 hidden lg:block ${badge.className}`}
          style={{
            animation: `floatBadge ${4.8 + index * 0.7}s ease-in-out infinite, floatingBubblePresence ${badge.duration}s ease-in-out infinite`,
            animationDelay: `${index * 0.5}s, ${badge.delay}s`,
          }}
        >
          <div className="relative px-4 py-3.5">
            <span className="absolute inset-x-4 bottom-1 top-2 rounded-[999px] border border-white/85 bg-white/92 shadow-[0_20px_60px_rgba(15,23,42,0.09)] backdrop-blur-md" />
            <span className="absolute left-2 top-4 h-12 w-12 rounded-full border border-white/85 bg-white/92 shadow-[0_16px_42px_rgba(15,23,42,0.06)]" />
            <span className="absolute left-9 top-0 h-14 w-14 rounded-full border border-white/85 bg-white/92 shadow-[0_16px_42px_rgba(15,23,42,0.06)]" />
            <span className="absolute right-9 top-0.5 h-13 w-13 rounded-full border border-white/85 bg-white/92 shadow-[0_16px_42px_rgba(15,23,42,0.06)]" />
            <span className="absolute right-2 top-4 h-11 w-11 rounded-full border border-white/85 bg-white/92 shadow-[0_16px_42px_rgba(15,23,42,0.06)]" />
            <span
              className={`absolute h-4.5 w-4.5 rounded-full border border-white/85 bg-white/92 shadow-[0_12px_28px_rgba(15,23,42,0.06)] ${badge.tailClassName}`}
            />
            <span
              className={`absolute h-3 w-3 rounded-full border border-white/85 bg-white/88 shadow-[0_10px_20px_rgba(15,23,42,0.05)] ${
                badge.tailClassName.includes("left")
                  ? "left-[calc(100%+0.7rem)] top-[62%]"
                  : "right-[calc(100%+0.7rem)] top-[63%]"
              }`}
            />
            <div className="relative z-10 min-w-[8.5rem] px-4 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700/70">
                {badge.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-950">{badge.value}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="pointer-events-none absolute -left-1.5 top-22 hidden h-11 w-1 rounded-full bg-slate-800 lg:block" />
      <div className="pointer-events-none absolute -left-1.5 top-34 hidden h-14 w-1 rounded-full bg-slate-800 lg:block" />
      <div className="pointer-events-none absolute -right-1.5 top-28 hidden h-18 w-1 rounded-full bg-slate-800 lg:block" />

      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={resetRotation}
        className="relative rounded-[2.9rem] bg-[linear-gradient(180deg,_#1f2430_0%,_#2a3140_45%,_#202633_100%)] p-[9px] shadow-[0_40px_120px_rgba(15,23,42,0.28)] ring-1 ring-white/20 transition-transform duration-300 ease-out"
        style={{ transform: cardTransform }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[2.9rem]">
          <div className="absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] opacity-60 animate-[shinePhone_5.5s_ease-in-out_infinite]" />
        </div>

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
              <div className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 animate-[pulse_2.8s_ease-in-out_infinite]">
                online
              </div>
            </div>

            <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-slate-300">Saldo disponibile</p>
                <span className="rounded-full border border-sky-200/10 bg-sky-300/8 px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-sky-200">
                  live
                </span>
              </div>
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
                "Credito accreditato nel wallet cliente",
                "Storico ordini e servizi acquistati",
              ].map((entry, index) => (
                <div
                  key={entry}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                  style={{
                    animation: `fadeLiftIn 700ms ease-out ${index * 180 + 320}ms both`,
                  }}
                >
                  {entry}
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
