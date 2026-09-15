import React from "react";
import Reveal from "@/components/site/Reveal";

// A quiet manifesto that establishes the standard — one large serif line,
// a short justification, and a row of qualitative standards (no fabricated
// metrics).
const STANDARDS = ["Brand-aligned", "Uniformed & punctual", "UK-wide coverage", "Clean pack-down"];

export default function CorporatePromise() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-site px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The standard</p>
          <h2
            className="mt-3 max-w-4xl font-heading text-ink"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Where corporate standards meet genuine hospitality.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink/60" style={{ lineHeight: 1.65 }}>
            Every engagement is brief-led, not package-led. We start with your objectives, audience and venue, then design
            the hospitality, styling and service around the outcome you need — so it reads as your brand, not a hire.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {STANDARDS.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full bg-warm px-4 py-2 text-[13px] font-medium tracking-tight text-ink/75"
                style={{ border: "1px solid #E5E5E7" }}
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}