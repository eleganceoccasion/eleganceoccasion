import Link from "next/link";
import React from "react";

/* =========================================================
   Corporate Page — Enterprise-grade brochure
   Positioned for Fortune 500 / FTSE 100 & global brands
========================================================= */

export default function CorporatePage() {
  return (
    <div className="bg-[var(--page-bg)] text-[var(--foreground)]">
      {/* ===================================================== */}
      {/* ENTERPRISE HERO                                       */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden border-b border-black/5 [list-style:none]">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(200,169,74,0.14)] via-white/70 to-[rgba(15,23,42,0.04)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.65]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 22%, rgba(200,169,74,0.18), transparent 55%), radial-gradient(circle at 82% 62%, rgba(15,23,42,0.06), transparent 58%)",
          }}
        />
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[190px] opacity-90" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Left copy */}
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">
                  Corporate & Enterprise
                </span>
                <span className="h-1 w-1 rounded-full bg-black/10" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                  Brand-safe delivery
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.95rem] leading-[1.06]">
                Premium event experiences,{" "}
                <span className="whitespace-nowrap">delivered to</span>{" "}
                <GoldHighlight>enterprise standards</GoldHighlight>.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
                We partner with global brands, agencies and organisations to
                deliver polished, on-brand experiences — managed professionally,
                executed reliably, and aligned with commercial objectives.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-gold">
                  Share your corporate brief
                </Link>
                <Link href="/services" className="btn-ghost">
                  View services
                </Link>
              </div>

              <p className="mt-4 max-w-2xl text-[12px] text-slate-600">
                Comfortable operating within NDAs, approvals, procurement
                frameworks and agency-led production environments.
              </p>

              {/* Premium stats rail */}
              <div className="mt-10">
                <PremiumRail
                  items={[
                    { value: "White-glove", label: "Delivery" },
                    { value: "Corporate+", label: "Audience" },
                    { value: "UK-wide", label: "Coverage" },
                    { value: "Bespoke", label: "Build" },
                  ]}
                />
              </div>
            </div>

            {/* Right capability card */}
            <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white/65 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/45" />
              <div className="pointer-events-none absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,74,0.30)] to-transparent" />

              <div className="relative p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-900">
                    Capability snapshot
                  </div>
                  <span className="pill">Enterprise-ready</span>
                </div>

                <div className="mt-4 grid gap-3">
                  <KeyPoint
                    title="Brand alignment"
                    desc="Guidelines-led presentation, materials and guest flow."
                  />
                  <KeyPoint
                    title="Professional delivery"
                    desc="Uniformed staff, punctual schedules, clean setup/pack-down."
                  />
                  <KeyPoint
  title="Custom production & showpieces"
  desc="Branded cups, napkins, trays, signage — plus showpiece moments such as champagne fountain & tower service."
/>

                  <KeyPoint
                    title="UK-wide availability"
                    desc="Nationwide coverage for premium bookings."
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <PillTag>Brief-led</PillTag>
                  <PillTag>Approval-ready</PillTag>
                  <PillTag>On-site managed</PillTag>
                  <PillTag>White-label option</PillTag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* SECTION 01 — WHO WE SUPPORT                            */}
      {/* ===================================================== */}
      <BrochureSection>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading n="01" title="Who we support" />

          <p className="mt-4 max-w-3xl text-sm text-slate-700 sm:text-base">
            Our corporate work is built for teams who need brand-safe,
            reliable delivery — from listed companies and global brands to
            agencies and premium venues.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <FeaturePanel
              title="Global & enterprise brands"
              desc="Internal events, launches, hospitality and client-facing activations."
              bullets={[
                "Leadership hosting & VIP areas",
                "Brand-aligned presentation and service style",
                "Structured delivery you can share internally",
              ]}
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <MiniCard
                title="Marketing & PR agencies"
                desc="White-label or partnered delivery for campaigns and experiential briefs."
              />
              <MiniCard
                title="Venues & hospitality groups"
                desc="On-site premium experiences aligned to venue standards and flows."
              />
              <MiniCard
                title="Production & event teams"
                desc="Reliable execution support as part of wider event builds."
              />
            </div>
          </div>
        </div>
      </BrochureSection>

      {/* ===================================================== */}
      {/* SECTION 02 — HOW WE WORK WITH TEAMS                    */}
      {/* ===================================================== */}
      <BrochureSection tone="tint">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading n="02" title="How we work with enterprise teams" />

          <p className="mt-4 max-w-3xl text-sm text-slate-700 sm:text-base">
            We design around your objectives and constraints — not a fixed
            package list. The goal is a premium guest experience that fits
            seamlessly into your wider event plan.
          </p>

          <div className="mt-10">
            <ProcessRail
              steps={[
                {
                  step: "01",
                  title: "Brief-led planning",
                  desc: "We start with objectives, audience, constraints and success measures — not a pre-set package.",
                },
                {
                  step: "02",
                  title: "Brand alignment",
                  desc: "Visuals, materials, service style and guest flow aligned to your guidelines and venue.",
                },
                {
                  step: "03",
                  title: "Professional execution",
                  desc: "Structured setup, punctual schedules, uniformed staff and clean pack-down.",
                },
              ]}
            />
          </div>

          <div className="mt-10 rounded-[28px] border border-black/5 bg-white/65 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_7px_rgba(200,169,74,0.12)]" />
              <div className="text-sm font-semibold text-slate-900">
                What you can expect
              </div>
            </div>
            <ul className="mt-4 grid gap-2 text-[13px] text-slate-700 sm:grid-cols-2">
              <li>• Clear scope, deliverables and inclusions</li>
              <li>• Named point of contact and response SLAs</li>
              <li>• Risk-aware setup and guest-flow planning</li>
              <li>• Venue coordination and on-site management</li>
            </ul>
          </div>
        </div>
      </BrochureSection>

{/* ===================================================== */}
{/* SECTION 03 — BRAND GOVERNANCE & ON-BRAND BUILDS       */}
{/* ===================================================== */}
<BrochureSection>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <SectionHeading n="03" title="Brand governance & on-brand builds" />

    <p className="mt-4 max-w-3xl text-sm text-slate-700 sm:text-base">
      We treat your brand the way an internal team would: clear approvals,
      controlled customisation, and on-site execution that looks and feels
      like you — not a generic supplier.
    </p>

    {/* Governance + expression */}
    <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      {/* Brand governance panel */}
      <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white/65 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/45" />
        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_7px_rgba(200,169,74,0.12)]" />
            <div className="text-sm font-semibold text-slate-900">
              Brand governance framework
            </div>
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-slate-700">
            Built for marketing, brand and procurement teams who need
            confidence that every touchpoint is controlled and approval-led.
          </p>

          <div className="mt-5 grid gap-3 text-[13px] text-slate-800">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_5px_rgba(200,169,74,0.16)]" />
              <div>
                <div className="font-semibold text-slate-900">
                  Guidelines-led execution
                </div>
                <div className="mt-1 text-slate-700">
                  We work from your brand book and asset library:
                  colours, type, tone and usage rules are followed, not
                  approximated.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_5px_rgba(200,169,74,0.16)]" />
              <div>
                <div className="font-semibold text-slate-900">
                  Defined approval gates
                </div>
                <div className="mt-1 text-slate-700">
                  Artwork, messaging and key placements are signed off
                  before production — with version control and clear
                  timelines.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_5px_rgba(200,169,74,0.16)]" />
              <div>
                <div className="font-semibold text-slate-900">
                  Risk & compliance aware
                </div>
                <div className="mt-1 text-slate-700">
                  We factor venue constraints, H&amp;S considerations and any
                  internal compliance requirements into the build and
                  run-sheet.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_5px_rgba(200,169,74,0.16)]" />
              <div>
                <div className="font-semibold text-slate-900">
                  Procurement-safe documentation
                </div>
                <div className="mt-1 text-slate-700">
                  Clear scopes, inclusions and responsibilities that can
                  be shared internally with budget holders and legal.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <PillTag>Artwork approval gates</PillTag>
            <PillTag>Brand book alignment</PillTag>
            <PillTag>Defined SLAs</PillTag>
            <PillTag>On-site lead</PillTag>
          </div>
        </div>
      </div>

      {/* On-site expression panel */}
      <div className="rounded-[28px] border border-black/5 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <div className="text-sm font-semibold text-slate-900">
          How your brand shows up on the day
        </div>
        <p className="mt-2 text-[13px] text-slate-700">
          We design the experience so it feels distinctly “you” in the
          room, not just on a PDF.
        </p>

        <div className="mt-4 grid gap-3 text-[13px] text-slate-800">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Branded touchpoints
            </div>
            <ul className="mt-2 list-disc pl-4 space-y-1 text-slate-700 marker:text-[var(--gold-1)]">
              <li>Cups, napkins, trays and serveware</li>
              <li>Station signage and call-outs</li>
              <li>Menu cards and small-format print</li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Look &amp; feel
            </div>
            <ul className="mt-2 list-disc pl-4 space-y-1 text-slate-700 marker:text-[var(--gold-1)]">
              <li>Colour-matched styling and materials</li>
              <li>Service style aligned to audience + tone</li>
              <li>Photography-ready layouts and details</li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Operating model
            </div>
            <ul className="mt-2 list-disc pl-4 space-y-1 text-slate-700 marker:text-[var(--gold-1)]">
              <li>Named on-site lead for your team</li>
              <li>Integrated with wider production or venue</li>
              <li>Clean handover and post-event debrief if required</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-black/5 bg-white/55 px-4 py-3 text-[12px] text-slate-700">
          Suitable for global brands, agency-led campaigns and
          procurement-driven environments.
        </div>
      </div>
    </div>

    {/* Use-cases */}
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      <UseCaseCard
        title="Corporate hospitality"
        desc="VIP hosting, leadership events and client entertainment that feel fully on-brand."
        bullets={[
          "Premium, consistent presentation",
          "Structured guest flow and service",
          "Run-sheet aligned with your agenda",
        ]}
      />
      <UseCaseCard
        title="Activations & launches"
        desc="Campaign-led builds with controlled messaging and strong in-room presence."
        bullets={[
          "Signage and key messaging placement",
          "Campaign palette and styling alignment",
          "Photography and content-ready setups",
        ]}
      />
      <UseCaseCard
        title="Agency & white-label"
        desc="We deliver under your name with agreed standards, governance and reporting."
        bullets={[
          "Approval-ready assets and mock-ups",
          "On-site lead integrated into your team",
          "Clean pack-down and clear handover",
        ]}
      />
    </div>
  </div>
</BrochureSection>


      {/* ===================================================== */}
      {/* SECTION 04 — TIMELINES & EXPECTATIONS                 */}
      {/* ===================================================== */}
      <BrochureSection tone="tint">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading n="04" title="Timelines & delivery expectations" />

          <p className="mt-4 max-w-3xl text-sm text-slate-700 sm:text-base">
            We work to clear response times and decision points so internal teams
            can plan confidently.
          </p>

          <div className="mt-10">
            <TimelineRail
              items={[
                { title: "Initial response", desc: "Within 1 business day" },
                { title: "Outline concept & estimate", desc: "3–5 business days" },
                { title: "Custom production", desc: "Scope, approvals & lead times" },
                { title: "Event delivery", desc: "On-site, managed end-to-end" },
              ]}
            />
          </div>

          <div className="mt-10 rounded-[28px] border border-black/5 bg-white/65 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="text-sm font-semibold text-slate-900">
              What to include in your brief
            </div>

            <p className="mt-2 text-[13px] text-slate-700">
              <span className="inline-flex flex-wrap gap-x-2 gap-y-1">
                <span>Date</span>
                <span className="text-slate-400">•</span>
                <span>City/venue</span>
                <span className="text-slate-400">•</span>
                <span>Guest count</span>
                <span className="text-slate-400">•</span>
                <span>Service(s) required</span>
                <span className="text-slate-400">•</span>
                <span>Running order</span>
                <span className="text-slate-400">•</span>
                <span>Brand/theme notes</span>
                <span className="text-slate-400">•</span>
                <span className="whitespace-nowrap">
                  Any compliance or access constraints
                </span>
              </span>
            </p>
          </div>
        </div>
      </BrochureSection>

      {/* ===================================================== */}
      {/* SECTION 05 — ENGAGEMENT MODELS                        */}
      {/* ===================================================== */}
      <BrochureSection>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading n="05" title="Engagement models" />

          <p className="mt-4 max-w-3xl text-sm text-slate-700 sm:text-base">
            We support enterprise teams and agencies with structured delivery —
            from one-off activations to multi-date hospitality programmes.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <UseCaseCard
              title="Single activation"
              desc="A defined brief delivered end-to-end with clear scope and tight execution."
              bullets={[
                "Concept & costing",
                "Venue coordination",
                "On-site lead + pack-down",
              ]}
            />
            <UseCaseCard
              title="Multi-date programme"
              desc="Repeatable delivery across locations with consistent standards and reporting."
              bullets={[
                "Reusable spec pack",
                "Repeatable run-sheet",
                "Consistency checks",
              ]}
            />
            <UseCaseCard
              title="Agency partnership"
              desc="White-label or co-delivery under agency direction and campaign governance."
              bullets={[
                "Approval gates",
                "Comms alignment",
                "On-brand integration",
              ]}
            />
          </div>

          <div className="mt-10 grid gap-3">
            <FaqItem
              q="Do you offer white-label delivery for agencies?"
              a="Yes. We can operate under your agency’s direction with controlled brand presentation, agreed comms, and structured on-site execution."
            />
            <FaqItem
              q="Can you supply branded items like cups, tissues, trays and signage?"
              a="Yes. We scope requirements during briefing, align artwork/specs for approval, confirm lead times/minimums, and integrate everything into a cohesive setup."
            />
            <FaqItem
              q="Do you travel outside the local area?"
              a="Yes — we travel UK-wide for premium bookings. Venue access, timing and logistics are confirmed during planning."
            />
          </div>
        </div>
      </BrochureSection>

      {/* ===================================================== */}
      {/* FINAL CTA                                             */}
      {/* ===================================================== */}
      <section className="relative border-t border-black/5 bg-white/70 py-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(200,169,74,0.10)] via-white/40 to-[rgba(15,23,42,0.04)]" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Discuss your corporate brief
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm text-slate-700 sm:text-base">
            Share your objectives, dates and requirements — we’ll respond with
            availability, structure and next steps.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-gold">
              Request corporate brief
            </Link>
            <Link href="/services" className="btn-ghost">
              View services
            </Link>
          </div>

          <p className="mt-4 text-[11px] text-slate-500">
            Corporate-first. Brief-led. Brand-safe delivery.
          </p>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   UI Components — premium surfaces
========================================================= */

function BrochureSection({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone?: "tint";
}) {
  return (
    <section
      className={
        tone === "tint"
          ? "border-t border-black/5 bg-white/60 py-14 sm:py-16"
          : "py-14 sm:py-16"
      }
    >
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

/* Multiline-safe highlight (no long underline bar) */
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

/* ---------- Premium Rails ---------- */

function PremiumRail({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-black/5 bg-white/65 shadow-[0_14px_45px_rgba(15,23,42,0.10)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/45" />
      <div className="grid grid-cols-2 divide-x divide-y divide-black/5 sm:grid-cols-4 sm:divide-y-0">
        {items.map((it) => (
          <div key={it.label} className="relative px-5 py-4 text-center">
            <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,74,0.26)] to-transparent" />
            <div className="text-[15px] font-semibold tracking-tight text-slate-900">
              {it.value}
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-600">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessRail({
  steps,
}: {
  steps: { step: string; title: string; desc: string }[];
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white/65 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/45" />
      <div className="grid gap-0 lg:grid-cols-3 lg:divide-x lg:divide-black/5">
        {steps.map((s, idx) => (
          <div key={s.step} className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                Step {s.step}
              </div>
              {idx !== steps.length - 1 && (
                <span className="hidden lg:inline-block text-[11px] text-slate-500">
                  →
                </span>
              )}
            </div>
            <div className="mt-3 text-lg font-semibold text-slate-900">
              {s.title}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-slate-700">
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineRail({
  items,
}: {
  items: { title: string; desc: string }[];
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white/65 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/45" />
      <div className="grid grid-cols-2 divide-x divide-y divide-black/5 lg:grid-cols-4 lg:divide-y-0">
        {items.map((it) => (
          <div key={it.title} className="p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
              {it.title}
            </div>
            <div className="mt-2 text-[15px] font-semibold text-slate-900">
              {it.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Cards ---------- */

function FeaturePanel({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white/65 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(200,169,74,0.10)] via-white/45 to-transparent" />
      <div className="relative">
        <div className="text-base font-semibold text-slate-900">{title}</div>
        <div className="mt-2 text-sm text-slate-700">{desc}</div>
        <div className="mt-5 grid gap-2 text-[13px] text-slate-700">
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_6px_rgba(200,169,74,0.10)]" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-[22px] border border-black/5 bg-white/65 px-5 py-5 shadow-sm backdrop-blur">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-[13px] leading-relaxed text-slate-700">
        {desc}
      </div>
    </div>
  );
}

function KeyPoint({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/60 p-4">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-xs text-slate-700">{desc}</div>
    </div>
  );
}

function PillTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700">
      {children}
    </span>
  );
}

function MiniStep({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/60 px-4 py-3">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-[13px] text-slate-700">{desc}</div>
    </div>
  );
}

/* ---------- New enterprise components ---------- */

function SpecRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid gap-1 px-4 py-3 sm:grid-cols-[200px_1fr] sm:items-start">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
        {k}
      </div>
      <div className="text-[13px] leading-relaxed text-slate-800">{v}</div>
    </div>
  );
}

function DeliverableChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/60 px-4 py-3 text-[12px] font-semibold text-slate-800">
      {children}
    </div>
  );
}

function UseCaseCard({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-[24px] border border-black/5 bg-white/65 p-5 shadow-[0_14px_32px_rgba(15,23,42,0.06)]">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-[13px] text-slate-700">{desc}</p>

      <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[13px] text-slate-700 marker:text-[var(--gold-1)]">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}


function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-[28px] border border-black/5 bg-white/65 px-6 py-5 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur">
      <summary className="cursor-pointer list-none select-none">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm font-semibold text-slate-900">{q}</div>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/70 text-slate-700 transition group-open:rotate-45">
            +
          </span>
        </div>
      </summary>
      <div className="mt-3 text-[13px] leading-relaxed text-slate-700">{a}</div>
    </details>
  );
}
