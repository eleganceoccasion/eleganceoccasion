import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";

// Decisive ending — a generated atmospheric image with a warm-charcoal scrim
// gives this section clear distinction from the light footer, with one large
// serif line and a single enquiry action.
const CTA_IMAGE =
  "/media/de3be8a60_generated_image.jpg";

export default function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden bg-navy">
      <Image
        src={CTA_IMAGE}
        alt=""
        fittingType="fill"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/50 to-navy/72" />
      <div className="relative z-10 mx-auto max-w-site px-6 py-24 text-center lg:px-8 lg:py-32">
        <Reveal>
          <h2
            className="font-heading text-white"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.04, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Let's make it an occasion.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/75" style={{ lineHeight: 1.65 }}>
            Share your date and vision — we'll come back with availability and a tailored proposal.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
          >
            Start your enquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}