"use client";

import { useSyncExternalStore } from "react";
import { COOKIE_EVENT_NAME, COOKIE_STORAGE_KEY } from "@/lib/browser-constants";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(COOKIE_EVENT_NAME, onStoreChange);
  return () => window.removeEventListener(COOKIE_EVENT_NAME, onStoreChange);
}

function getClientSnapshot() {
  return window.localStorage.getItem(COOKIE_STORAGE_KEY);
}

function getServerSnapshot() {
  return "accepted";
}

export function CookieConsentBanner() {
  const consentValue = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const isVisible = consentValue === null;

  function acceptCookies() {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    window.dispatchEvent(new Event(COOKIE_EVENT_NAME));
  }

  function dismissBanner() {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, "dismissed");
    window.dispatchEvent(new Event(COOKIE_EVENT_NAME));
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[110]">
      <div className="absolute inset-0 bg-slate-950/38 backdrop-blur-[3px]" />
      <div className="absolute inset-x-0 bottom-4 px-4 sm:bottom-6 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between sm:p-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/70">
              Cookie
            </p>
            <p className="mt-2 text-base font-semibold tracking-[-0.02em] text-slate-950">
              Usiamo cookie tecnici e strumenti di analisi per migliorare esperienza e prestazioni del sito.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Proseguendo puoi accettare l’utilizzo dei cookie. In seguito potremo collegare questo banner
              anche a una cookie policy completa e a preferenze più granulari.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={dismissBanner}
              className="inline-flex rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Più tardi
            </button>
            <button
              type="button"
              onClick={acceptCookies}
              className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Accetta cookie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
