import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import { getServiceBySlug, getRelatedServices, CATEGORIES } from "@/data/services";
import EnquiryButton from "@/components/site/EnquiryButton";
import Reveal from "@/components/site/Reveal";

// Services with an original video that matches the offering.
const SERVICE_VIDEOS = {
  "mini-dutch-pancake-cart": "/videos/pancakecart.mp4",
  "welcome-drinks-mocktails": "/videos/mocktailvid.mp4",
  "gol-gappe-pani-puri": "/videos/golgappestation.mp4",
};

// Service detail: large image or playable film beside a concise intro, known
// starting price and enquiry action. Spacious inclusions, a real-media
// sequence and related services. Distinct images and copy per service.
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = getRelatedServices(service);
  const catLabel = CATEGORIES.find((c) => c.key === service.category)?.label || service.category;
  const video = SERVICE_VIDEOS[service.id];

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-site px-6 pt-10 lg:px-8">
        <nav className="flex items-center gap-1.5 text-xs text-ink/40" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-ink">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/services" className="transition-colors hover:text-ink">Services</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-ink/70">{service.name}</span>
        </nav>
      </div>

      {/* Hero — media beside concise intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-site px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{catLabel}</p>
              <h1
                className="mt-3 font-heading text-ink"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.03em" }}
              >
                {service.name}
              </h1>
              <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-ink/60" style={{ lineHeight: 1.6 }}>
                {service.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <EnquiryButton serviceId={service.id} size="lg" />
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-ink">
                  View contact options <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              {service.price != null && (
                <p className="mt-6 text-sm text-ink/50">
                  <span className="text-2xl font-semibold text-ink">From £{service.price}</span>
                  <span className="ml-2">starting point — final pricing in your tailored proposal</span>
                </p>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl">
                {video ? (
                  <video
                    src={video}
                    poster={service.image}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="aspect-[4/3] w-full object-cover"
                  />
                ) : (
                  <img src={service.image} alt={service.name} loading="eager" className="aspect-[4/3] w-full object-cover" />
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Inclusions + event types */}
      <section className="bg-surface">
        <div className="mx-auto max-w-site px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">Scope & inclusions</h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60" style={{ lineHeight: 1.65 }}>
                Every engagement is scoped around your objectives, guest profile and venue, then delivered by a trained,
                on-site team. The outline below is a starting point — final inclusions are confirmed in your written proposal.
              </p>
              <ul className="mt-7 space-y-3.5">
                {service.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-[15px] text-ink/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} /> {inc}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">Ideal for</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {service.eventTypes.map((t) => (
                  <span key={t} className="rounded-full border border-hair bg-white px-4 py-2 text-sm font-medium text-ink/70">
                    {t}
                  </span>
                ))}
              </div>
              {service.positioning && service.positioning.length > 0 && (
                <>
                  <h3 className="mt-9 text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">Positioning</h3>
                  <p className="mt-3 text-[15px] text-ink/70">{service.positioning.join(" · ")}</p>
                </>
              )}
              <div className="mt-9">
                <EnquiryButton serviceId={service.id} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-site px-6 py-16 lg:px-8 lg:py-24">
            <Reveal>
              <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">Frequently combined</h2>
            </Reveal>
            <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {related.map((s, i) => (
                <Reveal key={s.id} delay={i * 0.06}>
                  <Link to={`/services/${s.slug}`} className="group block">
                    <div className="overflow-hidden rounded-2xl">
                      <img src={s.image} alt={s.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{s.name}</h3>
                    <p className="mt-1 text-sm text-ink/50">{s.tagline}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}