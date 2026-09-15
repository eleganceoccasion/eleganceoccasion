import React, { useState, useMemo } from "react";
import { SERVICES, CATEGORIES } from "@/data/services";
import ServiceCard from "@/components/site/ServiceCard";
import Reveal from "@/components/site/Reveal";

// Services directory: oversized page title, slim category navigation, and
// generous image-led listings. Every genuine service is discoverable.
export default function Services() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return SERVICES;
    return SERVICES.filter((s) => s.category === active);
  }, [active]);

  const filters = [
    { key: "all", label: "All" },
    ...CATEGORIES.map((c) => ({ key: c.key, label: c.label })),
  ];

  return (
    <>
      {/* Title */}
      <section className="bg-white">
        <div className="mx-auto max-w-site px-6 pt-20 lg:px-8 lg:pt-28">
          <h1
            className="font-heading text-ink"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.02, fontWeight: 600, letterSpacing: "-0.03em" }}
          >
            Services
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink/55" style={{ lineHeight: 1.6 }}>
            Interactive stations, styling and guest experiences — built to work on their own or combined into one occasion.
          </p>
        </div>
      </section>

      {/* Slim category navigation + listings */}
      <section className="bg-white">
        <div className="mx-auto max-w-site px-6 pb-20 pt-10 lg:px-8 lg:pb-28 lg:pt-12">
          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Filter services by category" style={{ borderBottom: "1px solid #E5E5E7", paddingBottom: "1rem" }}>
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                className={`text-sm font-medium tracking-tight transition-colors ${
                  active === f.key ? "text-ink" : "text-ink/40 hover:text-ink/70"
                }`}
              >
                {f.label}
              </button>
            ))}
          </nav>

          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {filtered.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}