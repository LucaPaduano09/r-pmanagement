import type { Metadata } from "next";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { CursorTrail } from "@/components/cursor-trail";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { WhatsAppFloatingChat } from "@/components/whatsapp-floating-chat";
import "./globals.css";

export const metadata: Metadata = {
  title: "RP Management | Social Media Manager & Marketplace",
  description:
    "Sito premium per social media management, consulenza, marketplace wallet-based e area cliente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.24),_transparent_36%),linear-gradient(180deg,_#f8fbff_0%,_#ffffff_38%,_#f8fafc_100%)] font-sans text-slate-950 antialiased">
        <div className="relative min-h-screen overflow-x-clip">
          <CursorTrail />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_20%_0%,_rgba(14,165,233,0.24),_transparent_34%),radial-gradient(circle_at_80%_12%,_rgba(148,163,184,0.18),_transparent_28%)]" />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
          <WhatsAppFloatingChat />
          <CookieConsentBanner />
        </div>
      </body>
    </html>
  );
}
