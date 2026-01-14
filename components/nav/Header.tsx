"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const WHATSAPP_NUMBER = "447932802236";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/corporate", label: "Corporate" },
  { href: "/weddings", label: "Weddings" },
  { href: "/contact", label: "Contact" },
];

function buildWhatsAppHref() {
  const text = encodeURIComponent(
    [
      "Hi Elegance Occasion",
      "",
      "I'd like a quote / availability.",
      "Event type: -",
      "Date: -",
      "City: -",
      "Guests: -",
      "Services: -",
      "",
      "Thank you!",
    ].join("\n")
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function isActivePath(pathname: string, href: string) {
  // Home only active on exact "/"
  if (href === "/") return pathname === "/";

  // Any nested route counts as active (e.g. /services/chocolate-fountain)
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname() || "/";
  const whatsappHref = React.useMemo(() => buildWhatsAppHref(), []);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const mobileItems = React.useMemo(
    () =>
      NAV.map((it) => ({
        ...it,
        active: isActivePath(pathname, it.href),
      })),
    [pathname]
  );

  return (
    <>
      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-2xl bg-white border border-black/10 shadow-sm flex items-center justify-center overflow-hidden">
              <Image
                src="/brand/elegance-logo.png"
                alt="Elegance Occasion"
                width={44}
                height={44}
                className="h-9 w-9 object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">
                Elegance Occasion
              </div>
              <div className="text-[11px] text-slate-600">
                Our Elegance, Your Occasion
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-black/5 bg-white/70 p-1">
            {NAV.map((it) => {
              const active = isActivePath(pathname, it.href);

              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={[
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition",
                    active
                      ? "text-slate-900 bg-[rgba(200,169,74,0.16)] ring-1 ring-[rgba(200,169,74,0.30)]"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white",
                  ].join(" ")}
                >
                  {it.label}

                  {/* Gold underline accent */}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute left-4 right-4 -bottom-[6px] h-[2px] rounded-full bg-[var(--gold-1)] opacity-70"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop actions */}
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/contact" className="btn-ghost px-5 py-2 text-sm">
                Enquire
              </Link>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-gold px-5 py-2 text-sm"
              >
                WhatsApp quote
              </a>
            </div>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        items={mobileItems}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
