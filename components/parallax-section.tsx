"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type ParallaxSectionProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

const DESKTOP_BREAKPOINT = 1024;

export function ParallaxSection({
  children,
  className = "",
  intensity = 28,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    let animationFrameId = 0;
    const sectionNode = sectionRef.current;
    const contentNode = contentRef.current;

    if (!sectionNode || !contentNode) {
      return;
    }

    const effectiveIntensity =
      window.innerWidth < DESKTOP_BREAKPOINT ? intensity * 0.4 : intensity;

    const updateMotion = () => {
      const rect = sectionNode.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const distance = sectionCenter - viewportCenter;
      const normalized = Math.max(-1, Math.min(1, distance / window.innerHeight));
      const offset = normalized * effectiveIntensity * -1;
      const revealOffset = isVisibleRef.current ? 0 : 34;
      const revealScale = isVisibleRef.current ? 1 : 0.975;
      const revealOpacity = isVisibleRef.current ? 1 : 0.01;
      const blurValue = isVisibleRef.current ? 0 : 8;

      contentNode.style.transform = `translate3d(0, ${offset + revealOffset}px, 0) scale(${revealScale})`;
      contentNode.style.opacity = `${revealOpacity}`;
      contentNode.style.filter = `blur(${blurValue}px)`;
      animationFrameId = 0;
    };

    const requestUpdate = () => {
      if (animationFrameId) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateMotion);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisibleRef.current = entry?.isIntersecting ?? false;
        requestUpdate();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    requestUpdate();
    observer.observe(sectionNode);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }

      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [intensity]);

  return (
    <section ref={sectionRef} className={className}>
      <div
        ref={contentRef}
        className="will-change-transform will-change-[opacity,filter] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        {children}
      </div>
    </section>
  );
}
