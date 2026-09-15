import React from "react";
import { WEDDING_PROCESS } from "@/data/weddings";
import Reveal from "@/components/site/Reveal";

// A four-step timeline of how a wedding moves from first enquiry to the
// last guest leaving — numbered, hairline-divided, editorial.
export default function WeddingsProcess() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-site px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">How it works</p>
          <h2
            className="mt-3 font-heading text-ink"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", lineHeight: 1.08, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            From first hello to the last guest.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {WEDDING_PROCESS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.07}>
              <div className="border-t pt-5" style={{ borderColor: "#E5E5E7" }}>
                <p className="font-heading text-gold" style={{ fontSize: "1.75rem", fontWeight: 600, lineHeight: 1 }}>
                  {s.step}
                </p>
                <h3 className="mt-3 text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55" style={{ lineHeight: 1.6 }}>
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}