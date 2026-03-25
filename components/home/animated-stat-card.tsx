"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatCardProps = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  delayMs?: number;
};

export function AnimatedStatCard({
  label,
  value,
  prefix = "",
  suffix = "",
  durationMs = 1400,
  delayMs = 0,
}: AnimatedStatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = cardRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    let frame = 0;
    let animationFrameId = 0;
    let timeoutId = 0;
    const start = performance.now();

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    timeoutId = window.setTimeout(() => {
      frame = window.requestAnimationFrame(animate);
      animationFrameId = frame;
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [delayMs, durationMs, isVisible, value]);

  return (
    <div
      ref={cardRef}
      className={`rounded-[1.9rem] border border-white/70 bg-white/82 p-5 shadow-[0_16px_55px_rgba(15,23,42,0.07)] backdrop-blur transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      style={{
        boxShadow: isVisible
          ? "0 16px 55px rgba(15,23,42,0.07), 0 0 40px rgba(125,211,252,0.12)"
          : undefined,
      }}
    >
      <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">
        {prefix}
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-500">{label}</p>
    </div>
  );
}
