import React from "react";
import { asset } from "@/data/site";
import Reveal from "@/components/site/Reveal";

// Editorial moments — a manifesto with capabilities on the left, a feature
// ceremony image on the right, then a three-up strip of wedding moments.
const MOMENTS = [
  { src: asset("/gallery/mehndidecor.jpg"), title: "Mehndi & Nikkah", caption: "Vibrant, photo-ready styling for pre-wedding events." },
  { src: asset("/gallery/weddingdecor.jpg"), title: "Room styling", caption: "Soft, layered styling designed for photography." },
  { src: asset("/gallery/decorbuild.png"), title: "Stage & backdrop", caption: "Statement builds that elevate the whole room." },
];

const CAPABILITIES = [
  "Catering stations & live desserts",
  "Room & table styling",
  "Cinderella & ambient lighting",
  "Uniformed on-site staffing",
  "Photography-ready presentation",
  "One team, concept to pack-down",
];

export default function WeddingsMoments() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-site px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Manifesto + capabilities */}
          <div className="lg:col-span-6 lg:pt-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The experience</p>
              <h2
                className="mt-3 font-heading text-ink"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", lineHeight: 1.08, fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                One team for the food, the styling and the moments.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/60" style={{ lineHeight: 1.65 }}>
                From the arrival pour to the last dance, every station, surface and light is designed and delivered by
                one cohesive team — so the room reads as a single, considered story.
              </p>
              <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {CAPABILITIES.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <span className="mt-2 h-1 w-1.5 shrink-0 rounded-full bg-gold" /> {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Feature image */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={asset("/gallery/cermony.jpg")}
                  alt="Ceremony styling and lighting"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Moments strip */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:gap-8">
          {MOMENTS.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="overflow-hidden rounded-2xl">
                <img src={m.src} alt={m.title} loading="lazy" className="aspect-[4/5] w-full object-cover" />
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