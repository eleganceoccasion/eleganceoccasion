// app/weddings/page.tsx
import Link from "next/link";
import React from "react";

export default function WeddingsPage() {
  return (
    <div className="bg-[var(--page-bg)] text-[var(--foreground)]">
      {/* ===================================================== */}
      {/* HERO                                                  */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(200,169,74,0.14)] via-white/70 to-[rgba(15,23,42,0.06)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[190px] opacity-90" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">
            <span>Weddings & Events</span>
            <span className="h-1 w-1 rounded-full bg-black/10" />
            <span className="text-slate-600">Curated collections</span>
          </div>

          <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.8rem] leading-[1.06]">
            Wedding & mehndi packages,{" "}
            <GoldHighlight>styled and staffed for your day</GoldHighlight>.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Thoughtfully designed collections for weddings, mehndi/nikkah,
            receptions and milestone events. Each package combines our Signature
            Stations &amp; Experiences into one cohesive guest journey — tailored
            to your venue, timings and guest count.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-gold">
              Request package availability
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
        </div>
      </section>

      {/* ===================================================== */}
      {/* SECTION 01 — HOW THE PACKAGES WORK                    */}
      {/* ===================================================== */}
      <Section tone="tint">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading n="01" title="How our wedding packages work" />

          <p className="mt-4 max-w-3xl text-sm text-slate-700 sm:text-base">
            Packages are a structured starting point, not a rigid box. We design
            around your venue, schedule, traditions and photography — from
            intimate mehndi evenings to 300+ guest receptions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <MiniStep
              title="Choose a collection"
              desc="Select the collection that matches how many experiences you’d like and the feel of your day."
            />
            <MiniStep
              title="Curate your stations"
              desc="Mix and match from our Signature Stations & Experiences — dessert, drinks, photo and cultural."
            />
            <MiniStep
              title="Tailor to your day"
              desc="We align styling, timings and service with your planner, venue and running order."
            />
          </div>
        </div>
      </Section>

      {/* ===================================================== */}
      {/* SECTION 02 — COLLECTIONS (PACKAGES)                   */}
      {/* ===================================================== */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading n="02" title="Wedding & event collections" />

          <p className="mt-4 max-w-3xl text-sm text-slate-700 sm:text-base">
            Use our collections as a starting point — then choose the stations and
            experiences you want. Everything is styled, staffed and aligned to your 
            timings and guest flow.
          </p>

          {/* PACKAGE CARDS FIRST */}
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Essentials */}
            <PackageCard
              tier="Essentials Collection"
              subtitle="Perfect for intimate weddings and mehndi evenings."
              badge="Popular"
              summary="Any 2 Signature Stations & Experiences"
              bullets={[
                "Choose any 2 stations from our Signature Stations & Experiences list below",
                "A focused, high-impact setup for smaller gatherings",
              ]}
              note="A beautifully balanced setup with one main feature and one complementary touchpoint."
            />

            {/* Signature */}
            <PackageCard
              tier="Signature Collection"
              subtitle="Our most booked option for full receptions and larger mehndi events."
              badge="Most requested"
              summary="Any 3 Signature Stations & Experiences"
              bullets={[
                "Choose any 3 stations from our Signature Stations & Experiences list below",
                "Balances dessert, drinks and interaction for steady guest flow",
              ]}
              note="Built for busy, high-energy evenings where you want guests moving and exploring."
              featured
            />

            {/* Grand */}
            <PackageCard
              tier="Grand Experience"
              subtitle="For premium venues, tiered spaces and high-impact evenings."
              badge="Full experience"
              summary="4+ Signature Stations & Experiences"
              bullets={[
                "Choose any 4 or more stations from our Signature Stations & Experiences list below",
                "Creates multiple focal points across the room and throughout the evening",
              ]}
              note="Best for large venues, multi-room builds or when you want the experience to feel truly immersive."
            />
          </div>

          {/* PER-COLLECTION SERVICE LISTS – PREMIUM + PRACTICAL */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Essentials */}
            <CollectionMixCard
              label="Essentials Collection – choose any 2"
              desc="Perfect for intimate weddings and mehndi evenings."
              items={[
                "Mini Pancake Cart or Chocolate Fountain",
                "Candy Floss Cart",
                "Slush Station",
                "Popcorn Cart",
                "Sweet Cart",
                "360 Photo Booth",
                "Optional extra: Gol Gappa (Pani Puri)",
              ]}
            />

            {/* Signature */}
            <CollectionMixCard
              label="Signature Collection – choose any 3"
              desc="Balanced selection for full wedding receptions."
              items={[
                "Chocolate Fountain",
                "Mini Pancake Cart",
                "Candy Floss Cart",
                "Slush Station",
                "Sweet Carts",
                "360 Photo Booth",
                "Vintage Photo Booth",
                "Gol Gappa (Pani Puri)",
                "Optional extra: Soft-Serve Ice Cream Cart",
                "Optional extra: Champagne Fountain & Tower",
              ]}
            />

            {/* Grand */}
            <CollectionMixCard
              label="Grand Experience – choose 4+"
              desc="High-impact setup for premium venues and larger guest flows."
              items={[
                "Mini Pancake Cart",
                "Chocolate Fountain",
                "360 Photo Booth",
                "Vintage Photo Booth",
                "Candy Floss Cart",
                "Slush Station",
                "Sweet Carts",
                "Gol Gappa (Pani Puri)",
                "Soft-Serve Ice Cream Cart",
                "Mobile Bar / Mocktail Bar",
                "Welcome Drinks & Mocktails",
                "Optional extra: Champagne Fountain & Tower",
              ]}
            />
          </div>

          {/* Footer note */}
          <div className="mt-8 rounded-2xl border border-black/5 bg-white/70 p-5 text-[13px] text-slate-700">
            <div className="text-sm font-semibold text-slate-900">
              How our wedding collections work
            </div>
            <p className="mt-1">
              The service lists above show what you can select within each collection.
              You&apos;re free to swap items between packages, and we&apos;ll guide you
              to a mix that suits your venue, timings and guest count.
            </p>
            <p className="mt-2 text-[11px] text-slate-600">
              All collections are designed for weddings and events of up to around 300
              guests; for larger numbers, we simply scale servings, staffing and pricing
              in your proposal. Welcome Drinks and Champagne Fountain &amp; Tower can be
              added to any collection at a preferred package rate.
            </p>
          </div>
        </div>
      </Section>

      {/* ===================================================== */}
      {/* SECTION 03 — PLANNING & LOGISTICS (TIMELINE)          */}
      {/* ===================================================== */}
      <Section tone="tint">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading n="03" title="Planning, logistics & on-the-day delivery" />

          <p className="mt-4 max-w-3xl text-sm text-slate-700 sm:text-base">
            We treat your wedding like a production, not a casual booking — with
            clear timelines, ownership and coordination across venues, planners
            and other suppliers.
          </p>

          {/* Timeline of four clean steps */}
          <div className="mt-8 relative">
            {/* Connecting line on large screens */}
            <div className="pointer-events-none absolute left-6 right-6 top-9 hidden lg:block">
              <div className="h-px bg-gradient-to-r from-black/10 via-[rgba(200,169,74,0.4)] to-black/10" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <TimelineCard
                step="01"
                title="Discovery & proposal"
                text="We capture your date, venue, guest count, cultural elements and desired stations, then return a structured proposal."
              />
              <TimelineCard
                step="02"
                title="Layouts & timings"
                text="We map station locations, power/water needs and service windows around your ceremony and reception timings."
              />
              <TimelineCard
                step="03"
                title="Run-sheet & staffing"
                text="Named on-site lead, staffing plan and setup/pack-down timings coordinated with your planner or venue."
              />
              <TimelineCard
                step="04"
                title="On-the-day delivery"
                text="We manage arrival, build, service and handover — you and your family stay out of the logistics."
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ===================================================== */}
      {/* FINAL CTA                                             */}
      {/* ===================================================== */}
      <section className="relative border-t border-black/5 bg-white/70 py-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(200,169,74,0.10)] via-white/40 to-[rgba(15,23,42,0.04)]" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Check availability for your date
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm text-slate-700 sm:text-base">
            Share your plans, guest count and any stations you have in mind. We’ll
            respond with availability, collection options and a tailored quote.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-gold">
              Enquire about packages
            </Link>
            <a
              href="https://wa.me/447932802236"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              WhatsApp our team
            </a>
          </div>

          <p className="mt-4 text-[11px] text-slate-500">
            Premium, styled and fully staffed — built around your day, not a
            generic package.
          </p>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   UI HELPERS
========================================================= */

function Section({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone?: "tint";
}) {
  const base = "py-16 sm:py-20";
  const tinted = "border-t border-black/5 bg-white/60";
  const plain = "border-t border-black/5 bg-transparent";

  return (
    <section className={`${base} ${tone === "tint" ? tinted : plain}`}>
      {children}
    </section>
  );
}

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="grid items-end gap-4 sm:grid-cols-[140px_1fr]">
      <div className="hidden sm:block">
        <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
          Section
        </div>
        <div className="mt-2 text-5xl font-semibold text-slate-900/15">{n}</div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-4 h-px w-full bg-gradient-to-r from-black/10 via-[rgba(200,169,74,0.20)] to-black/10" />
      </div>
    </div>
  );
}

/* Multiline-safe highlight */
function GoldHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline
        rounded-[14px]
        px-1.5
        [box-decoration-break:clone]
        bg-[linear-gradient(to_bottom,transparent_55%,rgba(200,169,74,0.20)_55%,rgba(200,169,74,0.20)_92%,transparent_92%)]
      "
    >
      {children}
    </span>
  );
}

function MiniStep({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/70 px-4 py-4 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-[13px] text-slate-700">{desc}</div>
    </div>
  );
}

function PackageCard(props: {
  tier: string;
  subtitle: string;
  badge?: string;
  summary: string;
  bullets: string[];
  note?: string;
  featured?: boolean;
}) {
  const { tier, subtitle, badge, summary, bullets, note, featured } = props;

  const base =
    "relative flex h-full flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white/70 p-6 backdrop-blur transition-transform duration-300";
  const elevation = featured
    ? "shadow-[0_22px_60px_rgba(15,23,42,0.16)] ring-1 ring-[rgba(200,169,74,0.35)]"
    : "shadow-[0_18px_45px_rgba(15,23,42,0.10)]";

  return (
    <div className={`${base} ${elevation}`}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/50" />
      <div className="relative flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">{tier}</div>
            <div className="mt-1 text-[13px] text-slate-700">{subtitle}</div>
          </div>
          {badge && (
            <span className="pill whitespace-nowrap text-[11px]">
              {badge}
            </span>
          )}
        </div>

        {/* Summary pill */}
        <div className="mt-4 rounded-2xl border border-black/5 bg-white/75 px-4 py-3 text-[12px] font-semibold text-slate-900">
          {summary}
        </div>

        {/* Bullets */}
        <ul className="mt-4 list-disc pl-5 space-y-1.5 text-[13px] text-slate-700 marker:text-[var(--gold-1)]">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        {/* Note */}
        {note && (
          <p className="mt-4 text-[11px] leading-relaxed text-slate-600">
            {note}
          </p>
        )}

        {/* CTA aligned across all cards */}
        <div className="mt-auto pt-5">
          <Link
            href="/contact"
            className={
              featured ? "btn-gold w-full text-xs" : "btn-ghost w-full text-xs"
            }
          >
            Enquire about this collection
          </Link>
        </div>
      </div>
    </div>
  );
}

function CollectionMixCard({
  label,
  desc,
  items,
}: {
  label: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="h-full rounded-[22px] border border-black/5 bg-white/75 p-5 shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
      <div className="text-[12px] font-semibold text-slate-900">
        {label}
      </div>
      <p className="mt-2 text-[13px] text-slate-700">{desc}</p>

      <ul className="mt-3 list-disc pl-4 space-y-1.5 text-[13px] text-slate-700 marker:text-[var(--gold-1)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function StationCard({
  title,
  desc,
  category,
}: {
  title: string;
  desc: string;
  category?: string;
}) {
  return (
    <div className="rounded-[22px] border border-black/5 bg-white/70 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
      {category && (
        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
          {category}
        </div>
      )}
      <div className="mt-1 text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-[13px] text-slate-700">
        {desc}
      </div>
    </div>
  );
}

function TimelineCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative rounded-[22px] border border-black/5 bg-white/80 p-5 shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-[11px] font-semibold text-slate-800">
          {step}
        </span>
        <span>Step</span>
      </div>
      <div className="mt-3 text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-[13px] text-slate-700">{text}</p>
    </div>
  );
}
