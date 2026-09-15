import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CalendarPlus } from "lucide-react";
import { LOGO_URL, TAGLINE, NAV_LINKS, CONTACT } from "@/data/site";
import { useEnquiry } from "./EnquiryProvider";

// Refined navigation bar: ~70px, white at rest, translucent + blurred once
// scrolled, hairline divider, animated underline indicators under each link,
// and a single dark "Plan your event" button. Mobile uses a clean panel.
export default function SiteHeader() {
  const { pathname } = useLocation();
  const { selectedCount } = useEnquiry();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "bg-white"
      }`}
      style={{ borderBottom: "1px solid #E5E5E7" }}
    >
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <div className="flex h-[70px] items-center justify-between">
          {/* Logo lockup */}
          <Link to="/" className="flex items-center gap-3" aria-label="Elegance Occasion home">
            <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-1 ring-ink/10">
              <img src={LOGO_URL} alt="" className="h-full w-full object-cover" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-tight text-ink" style={{ fontFamily: "var(--font-heading)" }}>
                Elegance Occasion
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink/45">{TAGLINE}</span>
            </span>
          </Link>

          {/* Desktop nav with animated underline indicators */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`group relative py-2 text-[13px] font-medium tracking-tight transition-colors ${
                    active ? "text-ink" : "text-ink/55 hover:text-ink"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px w-full origin-left bg-ink transition-transform duration-300 ease-out ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Plan button (desktop) + mobile menu toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="relative hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-ink shadow-[0_4px_14px_rgba(184,154,85,0.28)] transition-all hover:bg-gold/90 hover:shadow-[0_6px_20px_rgba(184,154,85,0.36)] sm:inline-flex"
            >
              <CalendarPlus className="h-4 w-4" strokeWidth={2} />
              Plan your event
              {selectedCount > 0 && (
                <span className="ml-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-navy px-1.5 text-[11px] font-bold text-white">
                  {selectedCount}
                </span>
              )}
            </Link>

            {/* Mobile: compact plan badge + menu */}
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-2 text-xs font-semibold text-ink sm:hidden"
            >
              Plan
              {selectedCount > 0 && (
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-white">
                  {selectedCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hair text-ink transition-colors hover:bg-surface lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="lg:hidden" style={{ borderTop: "1px solid #E5E5E7" }}>
          <nav className="mx-auto max-w-site px-5 py-3" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`block border-b border-hair/60 py-3.5 text-[15px] font-medium ${
                  isActive(l.to) ? "text-ink" : "text-ink/60"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="py-4 text-sm">
              <a href={CONTACT.whatsapp.destination} target="_blank" rel="noreferrer" className="block py-1.5 text-ink/70">WhatsApp · {CONTACT.whatsapp.display}</a>
              <a href={CONTACT.phone.destination} className="block py-1.5 text-ink/70">Call · {CONTACT.phone.display}</a>
              <a href={CONTACT.email.destination} className="block py-1.5 text-ink/70">{CONTACT.email.display}</a>
            </div>
            <Link to="/contact" className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink">
              Plan your event {selectedCount > 0 ? `(${selectedCount})` : ""}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}