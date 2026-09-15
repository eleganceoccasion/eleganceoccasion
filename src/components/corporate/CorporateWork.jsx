import React from "react";
import { asset } from "@/data/site";
import Reveal from "@/components/site/Reveal";

// Editorial portfolio — one wide feature image beside the statement, then a
// three-up grid of supporting builds. All original corporate photography.
const SUPPORT = [
  { src: asset("/gallery/corporateevent2.jpg"), title: "Welcome & reception", caption: "Clean, modern presentation for leadership events." },
  { src: asset("/gallery/corporatesetup.jpg"), title: "Hospitality set-up", caption: "Polished build for clients and key stakeholders." },
  { src: asset("/gallery/corporateevent.jpg"), title: "Branded bar service", caption: "Branded bar and service point for premium receptions." },
];

export default function CorporateWork() {
  return (
    <section id="work" className="bg-white scroll-mt-24">
      <div className="mx-auto max-w-site px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 lg:pt-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The work</p>
              <h2
                className="mt-3 font-heading text-ink"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", lineHeight: 1.08, fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                A look at the work.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/60" style={{ lineHeight: 1.65 }}>
                Branded bars, welcome areas and hospitality builds — delivered to a consistent standard for corporate
                teams, agencies and their clients.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={asset("/gallery/hero-2.jpg")}
                  alt="Corporate hospitality build in the room"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:gap-8">
          {SUPPORT.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="overflow-hidden rounded-2xl">
                <img src={m.src} alt={m.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <p className="mt-3.5 text-sm font-semibold text-ink">{m.title}</p>
              <p className="mt-1 text-sm text-ink/55">{m.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}