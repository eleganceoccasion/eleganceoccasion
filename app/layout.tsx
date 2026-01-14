import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/nav/Header";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elegance Occasion | Our Elegance, Your Occasion",
  description:
    "Luxury event styling, décor, dessert stations, entertainment and catering across the UK. Simplicity meets elegance.",
  icons: {
    icon: "/brand/elegance-logo.png",
    shortcut: "/brand/elegance-logo.png",
    apple: "/brand/elegance-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body className="antialiased bg-[var(--page-bg)] text-[var(--foreground)] relative">
        {/* Top bar (premium, confidence-building) */}
        <div className="border-b border-black/5 bg-white/55 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4 text-[11px] sm:text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="inline-flex h-2 w-2 rounded-full bg-[var(--gold-1)] animate-pulse" />
              <span>UK-wide events • Weddings • Corporate • Private</span>
            </div>

            <div className="hidden sm:flex items-center gap-6 text-slate-600">
              <span>Fast WhatsApp responses</span>
              <a
                href="tel:+447932802236"
                className="text-slate-900 font-semibold"
              >
                Call: +44 7467 578056
              </a>
            </div>
          </div>
        </div>

        {/* Global navigation */}
        <Header />

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
