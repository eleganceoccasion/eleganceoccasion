import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "@/data/site";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";

// Decisive ending — a generated atmospheric image with a warm-charcoal scrim
// gives this section clear distinction from the light moments section above.
const CTA_IMAGE =
  "https://media.base44.com/images/public/6aa878f8501ddfcd2eda6aa4/de3be8a60_generated_image.png";

export default function WeddingsCta() {
  return (
    <section className="relative w-full overflow-hidden bg-navy">
      <Image src={CTA_IMAGE} alt="" fittingType="fill" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/50 to-navy/72" />
      <div className="relative z-10 mx-auto max-w-site px-6 py-24 text-center lg:px-8 lg:py-32">
        <Reveal>
          <h2
            className="font-heading text-white"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.04, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Check availability for your date.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/75" style={{ lineHeight: 1.65 }}>
            Share your date and vision — we'll come back with availability and a tailored proposal.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Enquire about packages <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={CONTACT.whatsapp.destination}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              WhatsApp our team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}