import React from "react";
import { Link } from "react-router-dom";
import { Check, Star, ArrowRight } from "lucide-react";
import { WEDDING_COLLECTIONS } from "@/data/weddings";
import Reveal from "@/components/site/Reveal";

// Collections — a refined comparison. The "signature" (most requested)
// collection is featured on a warm-charcoal card that lifts slightly above
// the others, giving the row a clear focal point.
export default function WeddingsCollections() {
  return (
    <section id="collections" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-site px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Collections</p>
          <h2
            className="mt-3 font-heading text-ink"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.06, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Use our collections as a starting point.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/55" style={{ lineHeight: 1.65 }}>
            Then choose the stations and experiences you want. Everything is styled, staffed and aligned to your timings
            and guest flow.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {WEDDING_COLLECTIONS.map((c, i) => {
            const featured = c.id === "signature";
            const line = featured ? "1px solid rgba(255,255,255,0.14)" : "1px solid #E5E5E7";
            const subText = featured ? "text-white/55" : "text-ink/55";
            const bodyText = featured ? "text-white/70" : "text-ink/60";
            const listText = featured ? "text-white/80" : "text-ink/70";
            const eyebrow = featured ? "text-white/45" : "text-ink/40";
            return (
              <Reveal key={c.id} delay={i * 0.08}>
                <div
                  className={`flex h-full flex-col rounded-2xl p-7 lg:p-8 ${
                    featured
                      ? "bg-navy text-white shadow-[0_18px_50px_rgba(38,34,30,0.22)] lg:-translate-y-3"
                      : "bg-white text-ink"
                  }`}
                  style={{ border: featured ? "1px solid #26221E" : "1px solid #E5E5E7" }}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">{c.name}</h3>
                    {c.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">{c.badge}</span>
                    )}
                  </div>
                  <p className={`mt-2 text-sm leading-relaxed ${subText}`}>{c.pitch}</p>
                  <p className="mt-5 text-sm font-semibold">{c.rule}</p>
                  <p className={`mt-3 text-sm leading-relaxed ${bodyText}`}>{c.blurb}</p>

                  <div className="mt-6 pt-5" style={{ borderTop: line }}>
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${eyebrow}`}>Choose from</p>
                    <ul className="mt-3 space-y-2">
                      {c.options.map((o) => (
                        <li key={o} className={`flex items-start gap-2.5 text-sm ${listText}`}>
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2.5} /> {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {c.optionalExtras.length > 0 && (
                    <div className="mt-5 pt-5" style={{ borderTop: line }}>
                      <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${eyebrow}`}>Optional extras</p>
                      <ul className="mt-3 space-y-2">
                        {c.optionalExtras.map((o) => (
                          <li key={o} className={`flex items-start gap-2.5 text-sm ${listText}`}>
                            <Star className="mt-0.5 h-3 w-3 shrink-0 fill-gold text-gold" /> {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    to="/contact"
                    className={`mt-7 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      featured ? "text-white hover:text-gold" : "text-ink hover:text-gold"
                    }`}
                  >
                    Enquire about this collection <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-ink/50">
            You're free to swap items between packages, and we'll guide you to a mix that suits your venue, timings and
            guest count. All collections are designed for weddings and events of up to around 300 guests; for larger
            numbers, we scale servings, staffing and pricing in your proposal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}