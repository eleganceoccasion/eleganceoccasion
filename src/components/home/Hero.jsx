import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

// Cinematic opening — a full-bleed generated image with a soft gradient scrim
// and an overlaid serif headline. The signature experiences selector sits
// directly beneath this hero on the homepage.
const HERO_IMAGE =
  "https://media.base44.com/images/public/6aa878f8501ddfcd2eda6aa4/e8d09e73d_generated_image.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative h-[86vh] min-h-[540px] max-h-[860px] w-full">
        <Image
          src={HERO_IMAGE}
          alt="An Elegance Occasion event setup"
          fittingType="fill"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Layered scrim — a focused radial darkening over the headline keeps
            the type legible without flattening the whole image. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(60% 55% at 50% 48%, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0) 100%)" }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-site flex-col items-center justify-center px-6 text-center">
          <h1
            className="font-heading text-white"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5.75rem)", lineHeight: 1.02, fontWeight: 500, letterSpacing: "-0.02em", textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.5)" }}
          >
            Every detail considered.
            <br />
            Every occasion remembered.
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white"
            style={{ lineHeight: 1.6, textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}
          >
            Catering, styling and experiences for weddings, brands and celebrations across the UK.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="#experiences"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Explore experiences <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View the gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}