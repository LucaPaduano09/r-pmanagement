"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import {
  COOKIE_EVENT_NAME,
  COOKIE_STORAGE_KEY,
  SUPPORT_COLLAPSED_EVENT_NAME,
  SUPPORT_COLLAPSED_SESSION_KEY,
} from "@/lib/browser-constants";

const COLLAPSE_DELAY_MS = 7000;

function subscribe(onStoreChange: () => void) {
  window.addEventListener(SUPPORT_COLLAPSED_EVENT_NAME, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(SUPPORT_COLLAPSED_EVENT_NAME, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getClientSnapshot() {
  return window.sessionStorage.getItem(SUPPORT_COLLAPSED_SESSION_KEY) === "true";
}

function getServerSnapshot() {
  return false;
}

export function WhatsAppFloatingChat() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const isCollapsed = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    if (typeof window === "undefined" || isCollapsed) {
      return;
    }

    let timeoutId: number | null = null;

    const collapseSupportCard = () => {
      window.sessionStorage.setItem(SUPPORT_COLLAPSED_SESSION_KEY, "true");
      window.dispatchEvent(new Event(SUPPORT_COLLAPSED_EVENT_NAME));
    };

    const startCollapseTimer = () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(() => {
        collapseSupportCard();
      }, COLLAPSE_DELAY_MS);
    };

    const handleCookieChange = () => {
      const consentValue = window.localStorage.getItem(COOKIE_STORAGE_KEY);
      if (consentValue) {
        startCollapseTimer();
      }
    };

    const consentValue = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (consentValue && pathname === "/") {
      startCollapseTimer();
    }

    window.addEventListener(COOKIE_EVENT_NAME, handleCookieChange);

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      window.removeEventListener(COOKIE_EVENT_NAME, handleCookieChange);
    };
  }, [isCollapsed, pathname]);

  const isCardVisible = !isCollapsed || isHovered;

  return (
    <div
      className="fixed bottom-5 right-4 z-[94] flex items-end gap-3 sm:bottom-6 sm:right-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`hidden origin-right items-end gap-3 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/92 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:flex ${
          isCardVisible
            ? "max-w-[22rem] scale-100 opacity-100"
            : "pointer-events-none max-w-0 scale-95 border-transparent px-0 py-0 opacity-0"
        }`}
      >
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.4rem] border border-sky-100 bg-sky-50">
          <Image
            src="/operator-support.svg"
            alt="Operatore assistenza"
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="max-w-[11rem] shrink-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700/70">
            Supporto rapido
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-950">
            Hai bisogno di aiuto?
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Scrivici su WhatsApp per ricevere una risposta più veloce.
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/393400000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apri chat WhatsApp"
        className="group inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_20px_50px_rgba(37,211,102,0.35)] transition hover:scale-[1.04] hover:shadow-[0_24px_60px_rgba(37,211,102,0.45)]"
      >
        <Image
          src="/whatsapp-icon.svg"
          alt="WhatsApp"
          width={30}
          height={30}
          className="transition group-hover:scale-105"
        />
      </a>
    </div>
  );
}
