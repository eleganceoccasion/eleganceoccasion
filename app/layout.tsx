import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";

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
      <body className="relative min-h-screen bg-[var(--page-bg)] text-[var(--foreground)] antialiased">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3E9W643KXM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3E9W643KXM');
          `}
        </Script>

        {/* Top bar */}
        <div className="border-b border-black/5 bg-white/55 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[11px] sm:px-6 sm:text-xs lg:px-8">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="inline-flex h-2 w-2 rounded-full bg-[var(--gold-1)] animate-pulse" />
              <span>UK-wide events • Weddings • Corporate • Private</span>
            </div>

            <div className="hidden items-center gap-6 text-slate-600 sm:flex">
              <span>Tailored Proposals</span>

              <a
                href="tel:+447932802236"
                className="font-semibold text-slate-900 transition hover:text-[var(--gold-1)]"
              >
                Call: +44 7380 809766
              </a>
            </div>
          </div>
        </div>

        {/* Global navigation */}
        <Header />

        {/* Page content */}
        <main className="min-h-[70vh]">{children}</main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}