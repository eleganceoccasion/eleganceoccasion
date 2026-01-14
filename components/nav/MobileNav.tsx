"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

type NavItem = { href: string; label: string; active?: boolean };

export default function MobileNav({
  open,
  onClose,
  items,
  whatsappHref,
}: {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  whatsappHref: string;
}) {
  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        onClick={onClose}
        className={`absolute inset-0 transition ${
          open ? "opacity-100" : "opacity-0"
        } bg-black/40`}
        aria-label="Close menu"
        type="button"
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-[88%] max-w-[380px] transform transition duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full border-l border-black/10 bg-white/85 backdrop-blur-xl shadow-2xl">
          {/* Header row */}
          <div className="flex items-center justify-between gap-3 border-b border-black/5 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white border border-black/10 overflow-hidden flex items-center justify-center">
                <Image
                  src="/brand/elegance-logo.png"
                  alt="Elegance Occasion"
                  width={44}
                  height={44}
                  className="h-9 w-9 object-contain"
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
            </div>

            <button
              onClick={onClose}
              type="button"
              className="rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-white"
            >
              Close
            </button>
          </div>

          {/* Links */}
          <div className="px-4 py-4">
            <nav className="grid gap-2">
              {items.map((it) => {
                const active = !!it.active;

                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={onClose}
                    className={
                      "rounded-2xl border px-4 py-3 text-sm font-semibold transition " +
                      (active
                        ? "border-[rgba(200,169,74,0.30)] bg-[rgba(200,169,74,0.14)] text-slate-900"
                        : "border-black/5 bg-white/70 text-slate-900 hover:bg-white")
                    }
                  >
                    <div className="flex items-center justify-between">
                      <span>{it.label}</span>
                      {active && (
                        <span className="inline-flex h-2 w-2 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_4px_rgba(200,169,74,0.12)]" />
                      )}
                    </div>

                    {active && (
                      <div className="mt-1 text-[11px] text-slate-700">
                        You’re here
                      </div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="mt-5 grid gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-gold w-full"
              >
                Get a quote on WhatsApp
              </a>

              <Link href="/contact" onClick={onClose} className="btn-ghost w-full">
                Contact us
              </Link>
            </div>

            {/* Small reassurance */}
            <div className="mt-5 rounded-2xl border border-black/5 bg-white/70 p-4">
              <div className="text-sm font-semibold text-slate-900">
                Quick response
              </div>
              <p className="mt-1 text-xs text-slate-700">
                Send your date + city and we’ll confirm availability and options.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-black/5 bg-white/80 px-4 py-4">
            <div className="text-[11px] text-slate-600">
              UK-wide • Weddings • Mehndi • Corporate • Private
            </div>
            <a
              className="mt-2 block text-sm font-semibold text-slate-900 hover:text-black"
              href="tel:+447932802236"
            >
              Call: +44 7467 578056
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
