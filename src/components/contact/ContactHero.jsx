import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";

// Centered editorial header over a full-bleed image — a charcoal gradient
// scrim keeps the white type legible without flattening the photograph.
const HERO_IMAGE =
  "/media/7ffd3e6f4_generated_image.jpg";

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-navy">
      <Image
        src={HERO_IMAGE}
        alt=""
        fittingType="fill"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/75" />
      <div className="relative z-10 mx-auto max-w-read px-6 py-32 text-center lg:px-8 lg:py-44">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-gold">Enquiry</p>
          <h1
            className="mt-5 font-heading text-white"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)", lineHeight: 1.02, fontWeight: 600, letterSpacing: "-0.03em" }}
          >
            Let's make it an occasion.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[17px] text-white/75" style={{ lineHeight: 1.65 }}>
            Tell us your date, guest count and what you're envisioning. We'll reply with availability and a fully
            tailored proposal — usually the same day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}