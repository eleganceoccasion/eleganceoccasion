import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { LOGO_URL, TAGLINE, NAV_LINKS, CONTACT } from "@/data/site";

// Editorial footer: a large tagline statement, refined navigation + contact
// columns, and a quiet legal bar. No decorative gradients.
export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-warm" style={{ borderTop: "1px solid #E5E5E7" }}>
      <div className="mx-auto max-w-site px-5 py-14 lg:px-8 lg:py-20">
        {/* Editorial tagline + enquiry prompt */}
        <div className="flex flex-col items-start justify-between gap-8 pb-12 sm:flex-row sm:items-end">
          <h2
            className="font-heading text-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.04, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Our Elegance,
            <br />
            Your Occasion.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-navy hover:text-white hover:border-navy"
          >
            Plan your event <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="hair-rule" />

        {/* Columns */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="Elegance Occasion home">
              <img src={LOGO_URL} alt="" className="h-11 w-11 rounded-full object-cover ring-1 ring-ink/10" />
              <span className="flex flex-col leading-none">
                <span className="text-base font-semibold tracking-tight text-ink" style={{ fontFamily: "var(--font-heading)" }}>
                  Elegance Occasion
                </span>
                <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/45">{TAGLINE}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/55">
              Catering, styling and guest experiences for weddings, brands and celebrations across the UK.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group inline-flex items-center text-sm text-ink/70 transition-colors hover:text-ink">
                    <span className="mr-0 h-px w-0 bg-ink transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">Get in touch</h3>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a href={CONTACT.whatsapp.destination} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-sm text-ink/70 transition-colors hover:text-ink">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hair bg-white text-ink/55 transition-colors group-hover:text-ink">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  {CONTACT.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={CONTACT.phone.destination} className="inline-flex items-center gap-3 text-sm text-ink/70 transition-colors hover:text-ink">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hair bg-white text-ink/55">
                    <Phone className="h-4 w-4" />
                  </span>
                  {CONTACT.phone.display}
                </a>
              </li>
              <li>
                <a href={CONTACT.email.destination} className="inline-flex items-center gap-3 text-sm text-ink/70 transition-colors hover:text-ink">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hair bg-white text-ink/55">
                    <Mail className="h-4 w-4" />
                  </span>
                  {CONTACT.email.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 pt-6 sm:flex-row sm:items-center" style={{ borderTop: "1px solid #E5E5E7" }}>
          <p className="text-xs text-ink/45">© {year} Elegance Occasion. All rights reserved.</p>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink/40">{TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}