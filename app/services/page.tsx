import Link from "next/link";
import Image from "next/image";
import { services, getServicesForCategory } from "@/content/services";

type Category = (typeof services)[number]["category"];

const GROUPS: { title: string; intro: string; category: Category }[] = [
  {
    title: "Signature Stations & Experiences",
    intro:
      "Signature stations, carts, bars and live experiences — dessert, drink and interactive moments designed as focal points for your event.",
    category: "Signature Stations & Experiences",
  },
  {
    title: "Corporate & Enterprise",
    intro:
      "Brand-first experiences built for scale — polished delivery, stakeholder impact, and procurement-ready briefs.",
    category: "Corporate & Enterprise",
  },
  {
    title: "Décor & Styling",
    intro:
      "Cohesive styling that elevates the room — from statement installs to fully designed event environments.",
    category: "Décor & Styling",
  },
];

function byTitle(a: { title: string }, b: { title: string }) {
  return a.title.localeCompare(b.title);
}

/** Small helper: label cross-listed items without clutter */
function alsoInLabel(s: (typeof services)[number], currentCategory: Category) {
  const also = s.alsoIn ?? [];
  const placements = [s.category, ...also].filter((c) => c !== currentCategory);
  if (placements.length === 0) return null;
  // Keep it subtle: show only the first other placement
  return `Also featured in ${placements[0]}`;
}

export default function ServicesPage() {
  return (
    <div className="bg-[var(--page-bg)] text-[var(--foreground)]">
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(200,169,74,0.12)] via-white/60 to-[rgba(242,223,154,0.16)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[190px] opacity-90" />

        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-16 sm:pb-14 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white/80 shadow-sm">
              <Image
                src="/brand/elegance-logo.png"
                alt="Elegance Occasion"
                width={44}
                height={44}
                className="h-9 w-9 object-contain"
                priority
              />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
              Services
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.9rem]">
            Luxury experiences,{" "}
            <span className="text-[color:var(--gold-1)]">
              delivered with precision.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Designed for corporate hospitality and elevated private occasions —
            our services work beautifully on their own, or combined into one
            cohesive experience with a single team managing delivery.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-gold">
              Request availability
            </Link>
            <a
              href="https://wa.me/447932802236"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              WhatsApp enquiry
            </a>
          </div>

          {/* Quiet credibility strip */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <MiniCred
              title="Styled + staffed delivery"
              desc="Professional on-site team, smooth guest flow."
            />
            <MiniCred
              title="Corporate-ready"
              desc="Brand alignment, schedules, and brief-led planning."
            />
            <MiniCred
              title="UK-wide availability"
              desc="We travel nationwide for premium bookings."
            />
          </div>

          <TrustedByMarquee />
        </div>
      </section>

      {/* ===================================================== */}
      {/* BROCHURE SECTIONS */}
      {/* ===================================================== */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-6xl space-y-14 px-4 sm:space-y-16 sm:px-6 lg:px-8">
          {GROUPS.map((group, idx) => {
            // ✅ alsoIn support: category OR secondary placements
            const items = getServicesForCategory(group.category)
              .slice()
              .sort(byTitle);

            // ✅ Featured = curated by featuredRank (1–4), then fill to always show 4
            const featuredBase = items
              .filter((s) => (s.featuredRank ?? 999) <= 4)
              .slice()
              .sort(
                (a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999),
              );

            const fill = items.filter(
              (s) => !featuredBase.some((f) => f.slug === s.slug),
            );

            const featured = [...featuredBase, ...fill].slice(0, 4);

            const featuredSlugs = new Set(featured.map((s) => s.slug));

            // Everything else becomes “show more”
            const more = items
              .filter((s) => !featuredSlugs.has(s.slug))
              .slice()
              .sort(byTitle);

            return (
              <div key={group.title} className="relative">
                {/* Hairline divider */}
                {idx !== 0 && (
                  <div className="mb-12 h-px w-full bg-black/5 sm:mb-14" />
                )}

                {/* Header row */}
                <div className="grid items-start gap-6 lg:grid-cols-[140px_1fr]">
                  <div className="hidden lg:block">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                      Section
                    </div>
                    <div className="mt-2 text-5xl font-semibold text-slate-900/20">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                        {group.title}
                      </h2>

                      {/* Subtle count pill */}
                      <span className="pill hidden sm:inline-flex">
                        {items.length} options
                      </span>
                    </div>

                    <p className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base">
                      {group.intro}
                    </p>

                    {/* Featured list (brochure rows) */}
                    <div className="mt-7 divide-y divide-black/5 rounded-2xl border border-black/5 bg-white/60 backdrop-blur">
                      {featured.map((s) => {
                        const cross = alsoInLabel(s, group.category);

                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="group block px-5 py-5 transition hover:bg-white/40 sm:px-6 sm:py-6"
                          >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="h-2 w-2 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_5px_rgba(200,169,74,0.10)]" />
                                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                                    {s.title}
                                  </h3>
                                </div>

                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-700">
                                  {s.tagline}
                                </p>

                                {/* Subtle cross-listing hint (only if applicable) */}
                                {cross && (
                                  <div className="mt-2 text-[11px] text-slate-500">
                                    {cross}
                                  </div>
                                )}

                                <div className="mt-3 text-[11px] text-slate-600 underline-offset-4 group-hover:underline">
                                  View details
                                </div>
                              </div>

                              <div className="shrink-0 sm:pt-1">
                                <span className="inline-flex items-center rounded-full bg-[rgba(200,169,74,0.12)] px-3 py-1 text-[11px] font-semibold text-slate-900 ring-1 ring-[rgba(200,169,74,0.22)]">
                                  Premium
                                </span>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Optional “View all” collapsible */}
                    {more.length > 0 && (
                      <details className="mt-4">
                        <summary className="inline-flex cursor-pointer select-none items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700">
                          View all {group.title.toLowerCase()}
                          <span className="text-[color:var(--gold-1)]">+</span>
                        </summary>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {more.map((s) => {
                            const cross = alsoInLabel(s, group.category);

                            return (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="rounded-2xl border border-black/5 bg-white/70 px-5 py-4 transition hover:bg-white"
                              >
                                <div className="text-sm font-semibold text-slate-900">
                                  {s.title}
                                </div>
                                <div className="mt-1 text-[12px] text-slate-700">
                                  {s.tagline}
                                </div>
                                {cross && (
                                  <div className="mt-2 text-[11px] text-slate-500">
                                    {cross}
                                  </div>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </details>
                    )}

                    {/* Micro CTA row per section */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href="/contact" className="btn-gold">
                        Request availability
                      </Link>
                      <a
                        href="https://wa.me/447932802236"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost"
                      >
                        Ask on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================== */}
      {/* BESPOKE / ENTERPRISE CTA */}
      {/* ===================================================== */}
      <section className="border-t border-black/5 bg-white/60 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Enterprise brief? We can deliver end-to-end.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
                Many clients engage us to design and deliver the full experience
                — catering, styling, interactive stations, guest flow and on-site
                management. Share your objectives and we’ll respond with
                availability, structure, and a tailored quote.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-gold">
                  Discuss your brief
                </Link>
                <a
                  href="https://wa.me/447932802236"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  WhatsApp us
                </a>
              </div>

              <p className="mt-4 text-[11px] text-slate-500">
                Tip: include date, city/venue, guest count, and any brand/theme
                notes.
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-slate-900">
                  What we’re great at
                </div>
                <span className="pill">Premium</span>
              </div>

              <div className="mt-4 grid gap-3">
                <KeyPoint
                  title="Brand alignment"
                  desc="Palette, signage, presentation and flow built around your brief."
                />
                <KeyPoint
                  title="Professional delivery"
                  desc="Uniformed staff, punctual schedules, clean setup/pack-down."
                />
                <KeyPoint
                  title="Guest experience"
                  desc="Interactive moments people film, share and remember."
                />
                <KeyPoint
                  title="One-team execution"
                  desc="Coordination across catering, décor and stations."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   UI
========================================================= */

function MiniCred({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/65 px-5 py-4 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-[12px] text-slate-700">{desc}</div>
    </div>
  );
}

function KeyPoint({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/70 p-4">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-xs text-slate-700">{desc}</div>
    </div>
  );
}

function TrustedByMarquee() {
  const logos = [
    { name: "Brand One", src: "/brand/brand-1.svg" },
    { name: "Brand Two", src: "/brand/brand-2.svg" },

    // These two are white-on-transparent → invisible on light backgrounds
    { name: "Brand Three", src: "/brand/brand-3.png", invert: true },
    { name: "Brand Four", src: "/brand/brand-4.svg", invert: true },

    { name: "Brand Five", src: "/brand/brand-5.png" },
    { name: "Brand Six", src: "/brand/brand-6.svg" },
  ];

  const track = [...logos, ...logos];

  return (
    <div className="mt-10 sm:mt-12">
      <div className="flex items-center justify-between gap-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">
          Trusted by
        </div>
        <div className="hidden text-[11px] text-slate-500 sm:block">
          Corporate-ready delivery • Brand-led presentation
        </div>
      </div>

      <div
        className="relative mt-4 overflow-hidden rounded-2xl border border-black/5 bg-white/55 backdrop-blur"
        aria-label="Trusted by brand logos"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white/90 to-transparent" />

        <div className="py-5">
          <div className="marquee">
            <div className="marquee__track">
              {track.map((l, i) => (
                <div
                  key={`${l.name}-${i}`}
                  className="mx-7 flex h-10 items-center justify-center"
                >
                  <img
                    src={l.src}
                    alt={l.name}
                    width={140}
                    height={48}
                    loading="lazy"
                    className={[
                      "h-7 w-auto object-contain opacity-70 transition hover:opacity-90",
                      l.invert ? "invert opacity-80 hover:opacity-95" : "grayscale",
                    ].join(" ")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
