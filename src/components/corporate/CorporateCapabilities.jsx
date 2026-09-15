import React from "react";
import { Palette, Users, Sparkles, MapPin } from "lucide-react";
import Reveal from "@/components/site/Reveal";

// Four capability cards — the operational standards a corporate client
// actually evaluates against, each with a hairline and a quiet icon.
const CAPABILITIES = [
  {
    icon: Palette,
    title: "Brand alignment",
    body: "Visuals, materials, service style and guest flow aligned to your guidelines and venue — nothing generic.",
  },
  {
    icon: Users,
    title: "Uniformed staffing",
    body: "Professional, briefed staff with a named on-site lead and structured service windows from arrival to pack-down.",
  },
  {
    icon: Sparkles,
    title: "Branded touchpoints",
    body: "Branded cups, napkins, trays, signage and showpiece moments designed to photograph and film well.",
  },
  {
    icon: MapPin,
    title: "UK-wide delivery",
    body: "Premium bookings across the UK with one consistent team and one accountable point of contact.",
  },
];

export default function CorporateCapabilities() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-site px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Capabilities</p>
          <h2
            className="mt-3 max-w-2xl font-heading text-ink"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", lineHeight: 1.08, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            What we bring to the room.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-7" style={{ border: "1px solid #E5E5E7" }}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warm" style={{ border: "1px solid #E5E5E7" }}>
                    <Icon className="h-[18px] w-[18px] text-ink" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/55" style={{ lineHeight: 1.6 }}>
                    {c.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}