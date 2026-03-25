"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_BREAKPOINT = 1024;

export function CursorTrail() {
  const orbRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const orbPositionRef = useRef({ x: 0, y: 0 });
  const dotPositionRef = useRef({ x: 0, y: 0 });
  const hasInitializedRef = useRef(false);
  const isSuppressedRef = useRef(false);
  const isVisibleRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches || window.innerWidth < DESKTOP_BREAKPOINT) {
      return;
    }

    const render = () => {
      const orbNode = orbRef.current;
      const dotNode = dotRef.current;

      if (orbNode && dotNode) {
        orbPositionRef.current.x += (targetRef.current.x - orbPositionRef.current.x) * 0.14;
        orbPositionRef.current.y += (targetRef.current.y - orbPositionRef.current.y) * 0.14;
        dotPositionRef.current.x += (targetRef.current.x - dotPositionRef.current.x) * 0.32;
        dotPositionRef.current.y += (targetRef.current.y - dotPositionRef.current.y) * 0.32;

        orbNode.style.transform = `translate3d(${orbPositionRef.current.x}px, ${orbPositionRef.current.y}px, 0)`;
        dotNode.style.transform = `translate3d(${dotPositionRef.current.x}px, ${dotPositionRef.current.y}px, 0)`;
      }

      animationFrameRef.current = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target;
      const shouldSuppress =
        target instanceof Element && Boolean(target.closest("[data-cursor-native]"));

      if (shouldSuppress) {
        isSuppressedRef.current = true;
        if (isVisibleRef.current) {
          isVisibleRef.current = false;
          setIsVisible(false);
        }
        return;
      }

      if (isSuppressedRef.current) {
        isSuppressedRef.current = false;
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      targetRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (!hasInitializedRef.current) {
        orbPositionRef.current = targetRef.current;
        dotPositionRef.current = targetRef.current;
        hasInitializedRef.current = true;
        if (!shouldSuppress) {
          isVisibleRef.current = true;
          setIsVisible(true);
        }
      }
    };

    const handlePointerLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };
    const handlePointerEnter = () => {
      if (!isSuppressedRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    animationFrameRef.current = window.requestAnimationFrame(render);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerenter", handlePointerEnter);
    };
  }, []);

  return (
    <>
      <div
        ref={orbRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[80] hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/45 bg-[radial-gradient(circle,_rgba(125,211,252,0.28),_rgba(255,255,255,0.02)_68%)] shadow-[0_0_60px_rgba(14,165,233,0.18)] backdrop-blur-sm transition-opacity duration-300 lg:block ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[81] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 shadow-[0_0_24px_rgba(15,23,42,0.24)] transition-opacity duration-300 lg:block ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
