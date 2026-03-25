"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigationItems } from "@/lib/site-data";

type SiteHeaderClientProps = {
  isAuthenticated: boolean;
};

export function SiteHeaderClient({ isAuthenticated }: SiteHeaderClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      setIsScrolled(currentScrollY > 18);

      if (currentScrollY <= 24) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 8) {
        setIsHidden(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsMenuOpen(false);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const isCurrentPath = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      data-cursor-native="true"
      className={`sticky top-0 z-50 px-3 pt-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-4 lg:px-6 ${
        isHidden ? "-translate-y-[calc(100%-1.25rem)] opacity-95" : "translate-y-0 opacity-100"
      }`}
    >
      <div
        className={`relative mx-auto flex w-full max-w-7xl items-center justify-between gap-6 border px-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:px-8 ${
          isScrolled
            ? "rounded-[2rem] border-white/80 bg-white/88 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
            : "rounded-[2.2rem] border-white/50 bg-white/66 py-4 shadow-[0_10px_36px_rgba(15,23,42,0.05)] backdrop-blur-xl"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/65 to-transparent transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <Link href="/" className="flex items-center gap-3">
          <Image alt="logo" src="/logo2.svg" width={50} height={50} />
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isScrolled ? "translate-y-0 scale-[0.98]" : "translate-y-0 scale-100"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              RepManagement
            </p>
            <p className="text-sm text-slate-900">Social Media Management</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navigationItems.map((item) => (
            <div key={item.href} className="relative">
              <Link
                href={item.href}
                className={`text-sm font-medium transition ${
                  isCurrentPath(item.href) ? "text-slate-950" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
              <span
                className={`absolute -bottom-2 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-sky-500 shadow-[0_0_18px_rgba(14,165,233,0.4)] transition-all duration-300 ${
                  isCurrentPath(item.href) ? "w-7 opacity-100" : "w-0 opacity-0"
                }`}
              />
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur transition hover:border-slate-300 hover:bg-white xl:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <Link
            href={isAuthenticated ? "/account" : "/login"}
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white sm:inline-flex"
          >
            {isAuthenticated ? "Il tuo account" : "Area utente"}
          </Link>
          <Link
            href="/prenota-consulenza"
            className={`hidden rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.26)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-slate-800 sm:inline-flex ${
              isScrolled ? "py-2.5" : "py-3"
            }`}
          >
            Prenota ora
          </Link>
        </div>
      </div>

      <div
        className={`xl:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"} fixed inset-0 top-[5.25rem] z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Chiudi menu mobile"
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-[rgba(248,251,255,0.72)] backdrop-blur-md"
        />
        <div
          className={`absolute inset-x-3 top-0 rounded-[2rem] border border-white/80 bg-white/88 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:inset-x-4 ${
            isMenuOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-4 scale-[0.98] opacity-0"
          }`}
        >
          <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,_rgba(248,250,252,0.92),_rgba(255,255,255,0.86))] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700/70">
              Navigazione
            </p>
            <div className="mt-4 grid gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-[1.35rem] px-4 py-3 text-sm font-medium transition ${
                    isCurrentPath(item.href)
                      ? "bg-slate-950 text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)]"
                      : "bg-white/70 text-slate-700 hover:bg-white hover:text-slate-950"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`text-xs uppercase tracking-[0.22em] ${
                      isCurrentPath(item.href) ? "text-sky-200" : "text-slate-400"
                    }`}
                  >
                    Open
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href={isAuthenticated ? "/account" : "/login"}
              className="rounded-[1.5rem] border border-slate-200 bg-white/82 px-4 py-4 text-sm font-semibold text-slate-800 shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition hover:border-slate-300 hover:bg-white"
            >
              {isAuthenticated ? "Vai alla tua area riservata" : "Accedi o crea il tuo account"}
            </Link>
            <Link
              href="/prenota-consulenza"
              className="rounded-[1.5rem] bg-slate-950 px-4 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:bg-slate-800"
            >
              Prenota una consulenza gratuita
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
