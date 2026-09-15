import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { asset } from "@/data/site";
import { Image } from "@/components/ui/image";

// Cinematic, compact opening for the corporate page — signals a premium,
// brand-led standard from the first frame.
const HERO = asset("/gallery/hero-2.jpg");

export default function CorporateHero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative h-[54vh] min-h-[420px] max-h-[640px] w-full">
        <Image
          src={HERO}
          alt="Corporate hospitality by Elegance Occasion"
          fittingType="fill"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(58% 54% at 50% 48%, rgba(0,0,0,0.56) 0%, rgba(0,0,0,0.24) 55%, rgba(0,0,0,0) 100%)" }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-site flex-col items-center justify-center px-6 text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
          >
            Corporate & Brand Hospitality
          </p>
          <h1
            className="mt-5 font-heading text-white"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.75rem)", lineHeight: 1.03, fontWeight: 500, letterSpacing: "-0.02em", textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.5)" }}
          >
            Hospitality, built for the
            <br />
            boardroom and the brand.
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white"
            style={{ lineHeight: 1.6, textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}
          >
            We partner with brands, agencies and organisations to deliver polished, on-brand experiences — managed
            professionally and executed reliably.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              See the work <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Share your brief <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}