import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { asset } from "@/data/site";
import Reveal from "@/components/site/Reveal";

// Occasions — two large, image-led showcases for weddings and corporate work,
// introduced by a quiet serif heading. Stacks on mobile.
export default function Occasions() {
  const panels = [
    { to: "/weddings", title: "Weddings & private celebrations", image: asset("/gallery/weddingdecor.jpg") },
    { to: "/corporate", title: "Corporate occasions", image: asset("/gallery/corporateevent.jpg") },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-site px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <h2
            className="font-heading text-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Occasions
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {panels.map((p, i) => (
            <Reveal key={p.to} delay={i * 0.08}>
              <Link to={p.to} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[5/6] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] md:aspect-[4/5]"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-ink md:text-2xl">{p.title}</h3>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-ink/55 transition-colors group-hover:text-ink">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}