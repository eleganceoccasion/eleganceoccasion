import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { asset } from "@/data/site";
import Reveal from "@/components/site/Reveal";

// Catering, styling & hospitality on a warm-charcoal band. The right column
// holds two showpiece images side-by-side; beneath the whole grid the three
// "In motion" videos run together.
export default function CateringFeature() {
  const pair = [
    { src: asset("/gallery/champagnecart.png"), alt: "Champagne cart & tower" },
    { src: asset("/gallery/fountain.png"), alt: "Luxury chocolate fountain" },
  ];

  const motion = [
    { src: "/videos/pancakecart.mp4", poster: asset("/gallery/pancakes.png"), label: "Mini pancake cart" },
    { src: "/videos/mocktailvid.mp4", poster: asset("/gallery/welcomedrinks.png"), label: "Mocktail bar" },
    { src: "/videos/golgappestation.mp4", poster: asset("/gallery/Gol%20Gappe.png"), label: "Pani puri station" },
  ];

  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-site px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Statement */}
          <div className="lg:col-span-6 lg:pt-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Catering, styling & hospitality</p>
              <h2
                className="mt-3 font-heading text-white"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", lineHeight: 1.08, fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                One team for the food, the styling and the guest experience.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65" style={{ lineHeight: 1.65 }}>
                From interactive stations and live-prepared desserts to full room styling and hospitality staffing —
                everything is designed, delivered and managed by one cohesive team.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-gold"
              >
                Explore services <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          {/* Two showpiece images */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {pair.map((img) => (
                  <div key={img.alt} className="overflow-hidden rounded-2xl">
                    <img src={img.src} alt={img.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* In motion — the three signature stations */}
        <Reveal delay={0.15}>
          <p className="mt-14 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">In motion</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {motion.map((m) => (
              <div key={m.src}>
                <video
                  src={m.src}
                  poster={m.poster}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="aspect-[3/4] w-full rounded-2xl bg-black object-cover"
                />
                <p className="mt-2.5 text-sm font-medium text-white/55">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}