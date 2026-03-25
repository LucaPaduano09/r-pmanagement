"use client";

import { useEffect, useRef, useState } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = headingRef.current;

    if (!node) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;

    if (reducedMotion.matches) {
      frameId = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      observer.disconnect();
    };
  }, []);

  return (
    <div ref={headingRef} className={`max-w-3xl ${alignment}`}>
      <p
        className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700/80 transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          opacity: isVisible ? 1 : 0.01,
          filter: `blur(${isVisible ? 0 : 10}px)`,
          transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 18px, 0)",
        }}
      >
        {eyebrow}
      </p>
      <h2
        className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 transition-[transform,opacity,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-5xl"
        style={{
          opacity: isVisible ? 1 : 0.01,
          filter: `blur(${isVisible ? 0 : 14}px)`,
          transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 24px, 0)",
          transitionDelay: "90ms",
        }}
      >
        {title}
      </h2>
      <p
        className="mt-4 text-base leading-8 text-slate-600 transition-[transform,opacity,filter] duration-[960ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-lg"
        style={{
          opacity: isVisible ? 1 : 0.01,
          filter: `blur(${isVisible ? 0 : 12}px)`,
          transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 22px, 0)",
          transitionDelay: "180ms",
        }}
      >
        {description}
      </p>
    </div>
  );
}
