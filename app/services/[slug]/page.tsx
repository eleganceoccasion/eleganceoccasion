import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRelatedServices, getService, services } from "@/content/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/* =========================================================
   SSG
========================================================= */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* =========================================================
   SEO
========================================================= */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);

  if (!s) {
    return {
      title: "Service not found | Elegance Occasion",
      description:
        "Luxury event styling, signature stations & experiences, and catering across the UK.",
      openGraph: {
        title: "Service not found | Elegance Occasion",
        description:
          "Luxury event styling, signature stations & experiences, and catering across the UK.",
        images: ["/brand/elegance-logo.png"],
      },
    };
  }

  return {
    title: `${s.title} | Elegance Occasion`,
    description: s.tagline,
    openGraph: {
      title: `${s.title} | Elegance Occasion`,
      description: s.tagline,
      images: ["/brand/elegance-logo.png"],
    },
  };
}

/* =========================================================
   PAGE
========================================================= */
export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return notFound();

  const related = getRelatedServices(s.slug);

  return (
    <div className="bg-[var(--page-bg)] text-[var(--foreground)]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[rgba(200,169,74,0.12)] via-white/55 to-[rgba(15,23,42,0.04)]" />
        <div className="pointer-events-none absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[160px] opacity-90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 lg:pt-12 lg:pb-14">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="opacity-60">/</span>
            <Link href="/services" className="hover:text-slate-900">
              Services
            </Link>
            <span className="opacity-60">/</span>
            <span className="text-slate-900 font-semibold">{s.title}</span>
          </div>

          <div className="mt-7 grid gap-10 lg:grid-cols-2 items-start">
            {/* Primary copy column */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-3 py-1 text-[11px] text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[var(--gold-1)]" />
                <span className="font-semibold tracking-[0.18em] uppercase">
                  {s.category}
                </span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-slate-900 leading-[1.06]">
                {s.title}
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed">
                {s.tagline}
              </p>

              <p className="mt-3 text-[12px] text-slate-600 max-w-xl">
                Designed for leadership events, client hospitality and elevated
                private occasions where the standard of delivery needs to match
                the brand in the room.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#enquiry" className="btn-gold">
                  Share your brief
                </a>
                <Link href="/contact" className="btn-ghost">
                  View contact options
                </Link>
              </div>

              {/* Ideal for */}
              <div className="mt-8 rounded-2xl border border-black/5 bg-white/75 p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Ideal use-cases
                </div>
                <p className="mt-1 text-[12px] text-slate-600">
                  Built for teams who need confident, brand-safe delivery rather
                  than one-off casual hire.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.idealFor.map((x) => (
                    <span
                      key={x}
                      className="rounded-full bg-white/90 border border-black/5 px-3 py-1 text-[11px] text-slate-700"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Snapshot / enterprise column */}
            <div className="card-lux p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Engagement snapshot
                  </div>
                  <div className="mt-1 text-[11px] text-slate-600">
                    A concise view for stakeholders and approvers.
                  </div>
                </div>
                <span className="pill">Enterprise-ready</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <MiniStat label="Category" value={s.category} />
                <MiniStat label="Delivery model" value="Styled & staffed" />
                <MiniStat label="Coverage" value="UK-wide" />
                <MiniStat label="Engagement type" value="Brief-led, bespoke" />
              </div>

              {s.audiences && s.audiences.length > 0 && (
                <div className="mt-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Typical audiences
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {s.audiences.map((aud) => (
                      <span
                        key={aud}
                        className="rounded-full border border-black/5 bg-white/70 px-3 py-1 text-[11px] text-slate-700"
                      >
                        {aud}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {s.tags && s.tags.length > 0 && (
                <div className="mt-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Positioning
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/85 border border-black/5 px-3 py-1 text-[11px] text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5 rounded-2xl border border-black/5 bg-white/80 px-4 py-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Visuals & examples
                </div>
                <p className="mt-1 text-[12px] text-slate-600">
                  For photography and live clips of this service in context,
                  explore our{" "}
                  <Link
                    href="/gallery"
                    className="underline underline-offset-2"
                  >
                    gallery
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3 items-start">
          <div className="lg:col-span-2 space-y-10">
            {/* Scope / inclusions */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Scope & inclusions
              </h2>
              <p className="mt-2 text-sm text-slate-700 max-w-2xl">
                Every engagement is scoped around your objectives, guest
                profile and venue constraints, then delivered by a trained,
                on-site team. The outline below is a starting point — final
                inclusions are confirmed in your written proposal.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {s.highlights.map((x) => (
                  <BulletCard key={x} text={x} />
                ))}
              </div>
            </div>

            {/* Delivery standards / ways of working */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Delivery standards
              </h3>
              <p className="mt-2 text-sm text-slate-700 max-w-2xl">
                Designed to sit comfortably alongside blue-chip and FTSE 100
                brands, internal production teams and agency-led builds.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <BulletCard text="Named on-site lead responsible for build, service and handover." />
                <BulletCard text="Uniformed, briefed staff with clear roles and timings." />
                <BulletCard text="Layouts and guest flow aligned to wider run-sheet and venue plan." />
                <BulletCard text="Risk-aware setup including access checks and H&S considerations." />
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Popular extensions & add-ons
              </h3>
              <p className="mt-2 text-sm text-slate-700 max-w-2xl">
                Frequently combined with this service to create a joined-up
                guest experience.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.addOns.map((x) => (
                  <span
                    key={x}
                    className="rounded-full bg-white/85 border border-black/5 px-3 py-1 text-[11px] text-slate-700"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery pointer */}
            <div className="rounded-2xl border border-black/5 bg-white/75 p-5 shadow-sm">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    See this in the room
                  </h3>
                  <p className="mt-1 text-sm text-slate-700 max-w-xl">
                    View recent builds featuring {s.title} alongside décor,
                    catering and interactive stations.
                  </p>
                </div>
                <Link href="/gallery" className="btn-ghost">
                  Open gallery
                </Link>
              </div>
            </div>
          </div>

          {/* Enquiry / enterprise sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-5">
            <div id="enquiry" className="glass-lux p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Share your brief
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Outline objectives, audience and key dates — we&apos;ll
                    respond with availability, structure and a tailored
                    proposal.
                  </p>
                </div>
                <span className="pill">Bespoke</span>
              </div>

              <BriefCTA serviceTitle={s.title} />

              <div className="mt-5 rounded-2xl border border-black/5 bg-white/75 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  Corporate & governance notes
                </div>
                <p className="mt-1 text-xs text-slate-700">
                  Comfortable working within NDAs, brand guidelines,
                  procurement frameworks and agency-led environments. Clear
                  scopes, inclusions and responsibilities suitable for internal
                  circulation.
                </p>
              </div>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-black/5 bg-white/75 p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Often combined with
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Services that pair well with {s.title} for a joined-up
                  guest journey.
                </p>
                <div className="mt-3 grid gap-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/services/${r.slug}`}
                      className="rounded-xl border border-black/5 bg-white/80 px-3 py-2 text-sm text-slate-800 hover:bg-white transition"
                    >
                      <span className="font-semibold">{r.title}</span>
                      <span className="block text-[11px] text-slate-600">
                        {r.tagline}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-black/5 bg-white/60 backdrop-blur py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              Looking for a fully joined-up experience?
            </div>
            <div className="mt-1 text-sm text-slate-700 max-w-xl">
              Combine {s.title} with décor, catering and additional stations to
              create a single, coherent experience delivered by one team.
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/services" className="btn-ghost">
              Explore services
            </Link>
            <Link href="/contact" className="btn-gold">
              Discuss a programme
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   UI
========================================================= */

function BulletCard({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/75 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_5px_rgba(200,169,74,0.12)]" />
        <div className="text-sm text-slate-800">{text}</div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/80 px-4 py-3 text-center shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{value}</div>
      <div className="mt-1 text-[11px] text-slate-600">{label}</div>
    </div>
  );
}

function BriefCTA({ serviceTitle }: { serviceTitle: string }) {
  const whatsapp = buildWhatsAppHref(serviceTitle);
  const mailto = buildMailTo(serviceTitle);

  return (
    <div className="mt-5">
      <div className="grid gap-3">
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn-gold w-full"
        >
          WhatsApp enquiry
        </a>
        <a href={mailto} className="btn-ghost w-full text-center">
          Email enquiry
        </a>
        <Link href="/contact" className="btn-ghost w-full text-center">
          Full contact form
        </Link>
      </div>

      <p className="mt-3 text-[11px] text-slate-500">
        Helpful to include: date, city/venue, guest count, service(s) of
        interest, and any brand or compliance notes.
      </p>
    </div>
  );
}

function buildWhatsAppHref(serviceTitle: string) {
  const phone = "447932802236";
  const text = encodeURIComponent(
    [
      "Hi Elegance Occasion,",
      "",
      `I'm enquiring about: ${serviceTitle}`,
      "",
      "Event type: -",
      "Date: -",
      "City / Venue: -",
      "Guest count: -",
      "Budget range (optional): -",
      "",
      "Key objectives / brief:",
      "-",
      "",
      "Please confirm availability and outline next steps for a tailored proposal.",
    ].join("\n"),
  );
  return `https://wa.me/${phone}?text=${text}`;
}

function buildMailTo(serviceTitle: string) {
  const to = "enquiries@eleganceoccasion.co.uk";
  const subject = encodeURIComponent(
    `Enquiry: ${serviceTitle} (Availability & Proposal)`,
  );
  const body = encodeURIComponent(
    [
      "Hi Elegance Occasion,",
      "",
      `I'm enquiring about: ${serviceTitle}`,
      "",
      "Event type:",
      "Date:",
      "City / Venue:",
      "Guest count:",
      "Budget range (optional):",
      "",
      "Key objectives / success measures:",
      "",
      "Any brand, compliance or access notes:",
      "",
      "Thank you.",
    ].join("\n"),
  );

  return `mailto:${to}?subject=${subject}&body=${body}`;
}
