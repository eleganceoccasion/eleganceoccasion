import React from "react";
import { Link } from "react-router-dom";
import { HOMEPAGE_CARDS } from "@/data/services";
import ExperienceCard from "@/components/site/ExperienceCard";
import Reveal from "@/components/site/Reveal";

// Signature experiences — the protected 12-card picker, sitting directly
// beneath the cinematic hero. Card data, prices, badges and add/remove
// actions are preserved; only the surrounding chrome and grid are refreshed.
export default function ExperienceSelector() {
  return (
    <section id="experiences" className="scroll-mt-24 bg-warm">
      <div className="mx-auto max-w-site px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">Signature experiences</p>
          <h2
            className="mt-3 font-heading text-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Pick the experiences your guests will remember.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/55" style={{ lineHeight: 1.65 }}>
            Tap to add stations to your enquiry, then scroll down to choose your date and send everything to WhatsApp in one go.
          </p>
          <a href="#build" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink/60 transition-colors hover:text-ink">
            Skip to booking →
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOMEPAGE_CARDS.map((card, i) => (
            <Reveal key={card.key} delay={(i % 3) * 0.05}>
              <ExperienceCard card={card} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#build"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
          >
            Continue to booking ↓
          </a>
          <p className="mt-5 text-sm text-ink/50">
            Looking for more?{" "}
            <Link to="/services" className="font-medium text-ink underline-offset-4 transition-colors hover:text-gold hover:underline">
              Browse all services
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}