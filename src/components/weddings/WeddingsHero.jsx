import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { asset } from "@/data/site";
import { Image } from "@/components/ui/image";

// Cinematic full-bleed opening for the weddings page — a soft radial scrim
// keeps the serif headline legible without flattening the photograph.
const HERO = asset("/gallery/hero-1.jpg");

export default function WeddingsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative h-[52vh] min-h-[380px] max-h-[600px] w-full">
        <Image
          src={HERO}
          alt="Wedding styling by Elegance Occasion"
          fittingType="fill"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/65" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(58% 52% at 50% 46%, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.24) 55%, rgba(0,0,0,0) 100%)" }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-site flex-col items-center justify-center px-6 text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
          >
            Weddings · Mehndi · Nikkah · Receptions
          </p>
          <h1
            className="mt-5 font-heading text-white"
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.25rem)", lineHeight: 1.02, fontWeight: 500, letterSpacing: "-0.02em", textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.5)" }}
          >
            Your day, designed
            <br />
            in every detail.
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white"
            style={{ lineHeight: 1.6, textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}
          >
            Thoughtfully designed for weddings, mehndi and nikkah — each package combines our Signature Stations
            & Experiences into one cohesive guest journey.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="#collections"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Explore collections <ArrowRight className="h-4 w-4" />
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