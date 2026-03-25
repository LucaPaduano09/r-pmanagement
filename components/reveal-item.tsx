"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  yOffset?: number;
  blurPx?: number;
  scale?: number;
};

export function RevealItem({
  children,
  className = "",
  delayMs = 0,
  yOffset = 24,
  blurPx = 14,
  scale = 0.985,
}: RevealItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = itemRef.current;

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
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
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
    <div
      ref={itemRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0.01,
        filter: `blur(${isVisible ? 0 : blurPx}px)`,
        transform: isVisible
          ? "translate3d(0, 0, 0) scale(1)"
          : `translate3d(0, ${yOffset}px, 0) scale(${scale})`,
        transitionDelay: `${delayMs}ms`,
        transitionDuration: "900ms",
        transitionProperty: "transform, opacity, filter",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
}
