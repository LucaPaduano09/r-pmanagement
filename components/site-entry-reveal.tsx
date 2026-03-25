"use client";

import { useLayoutEffect, useState } from "react";
import { SITE_ENTRY_REVEAL_SESSION_KEY } from "@/lib/browser-constants";

const ENTRY_ANIMATION_DURATION_MS = 1800;

export function SiteEntryReveal() {
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hasSeenReveal = window.sessionStorage.getItem(SITE_ENTRY_REVEAL_SESSION_KEY) === "true";
    let frameId = 0;

    if (reducedMotion.matches || hasSeenReveal) {
      frameId = window.requestAnimationFrame(() => {
        setIsVisible(false);
      });

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.sessionStorage.setItem(SITE_ENTRY_REVEAL_SESSION_KEY, "true");

    const timeoutId = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      setIsVisible(false);
    }, ENTRY_ANIMATION_DURATION_MS);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.clearTimeout(timeoutId);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-auto fixed inset-0 z-[140] overflow-hidden"
    >
      <div className="absolute inset-y-0 left-0 w-[50.5%] overflow-hidden animate-[doorOpenLeft_1.45s_cubic-bezier(0.22,1,0.36,1)_forwards]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#eef8ff_0%,_#e2f1ff_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(125,211,252,0.26),transparent_28%),radial-gradient(circle_at_72%_50%,rgba(255,255,255,0.45),transparent_34%)]" />
        <div className="absolute inset-y-0 right-0 w-px bg-white/90 shadow-[0_0_26px_rgba(255,255,255,0.95)]" />
      </div>
      <div className="absolute inset-y-0 right-0 w-[50.5%] overflow-hidden animate-[doorOpenRight_1.45s_cubic-bezier(0.22,1,0.36,1)_forwards]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#eef8ff_0%,_#e2f1ff_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(125,211,252,0.26),transparent_28%),radial-gradient(circle_at_28%_50%,rgba(255,255,255,0.45),transparent_34%)]" />
        <div className="absolute inset-y-0 left-0 w-px bg-white/90 shadow-[0_0_26px_rgba(255,255,255,0.95)]" />
      </div>
      <div className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-white/90 shadow-[0_0_34px_rgba(255,255,255,0.95)] animate-[doorSeamFade_1s_ease-out_forwards]" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/55 blur-3xl animate-[doorGlowBurst_1.1s_ease-out_forwards]" />
    </div>
  );
}
