"use client";

import { useEffect, useRef } from "react";

export function PremiumHeroBackground() {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const node = haloRef.current;

      if (!node) {
        return;
      }

      const x = event.clientX - 180;
      const y = event.clientY - 180;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.7),transparent_88%)]" />
        <div className="absolute -top-24 left-[10%] h-72 w-72 rounded-full bg-sky-200/30 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute right-[8%] top-16 h-80 w-80 rounded-full bg-cyan-100/45 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.14),transparent_32%),radial-gradient(circle_at_80%_16%,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_52%_74%,rgba(191,219,254,0.18),transparent_32%)]" />
      </div>
      <div
        ref={haloRef}
        className="pointer-events-none absolute left-0 top-0 hidden h-90 w-90 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.24),rgba(255,255,255,0.02)_68%)] blur-3xl opacity-80 lg:block"
      />
    </>
  );
}
