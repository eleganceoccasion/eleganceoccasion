"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================================================
   CONFIG
========================================================= */
const WHATSAPP_NUMBER = "447932802236";
const BUSINESS_EMAIL = "enquiries@eleganceoccasion.co.uk"; // change if needed

function encodeLines(lines: string[]) {
  return encodeURIComponent(lines.filter(Boolean).join("\n"));
}

/* =========================================================
   GALLERY ITEMS
========================================================= */
// Make sure these files live in /public/gallery
const galleryItems = [
  {
    src: "/gallery/hero-1.jpg",
    title: "Wedding set-up",
    tag: "Wedding",
  },
  {
    src: "/gallery/hero-2.jpg",
    title: "Corporate hospitality setup",
    tag: "Corporate",
  },
  {
    src: "/gallery/mehndidecor.jpg",
    title: "Mehndi Décor",
    tag: "Photo & content",
  },
  {
    src: "/gallery/corporateevent.jpg",
    title: "Anniversary",
    tag: "Private Event",
  },
  {
    src: "/gallery/corporateevent2.jpg",
    title: "Welcome Area",
    tag: "Corporate",
  },
  {
    src: "/gallery/decorbuild.png",
    title: "Décor build & styling",
    tag: "Décor",
  },
  {
    src: "/gallery/fountain.png",
    title: "Luxury chocolate fountain",
    tag: "Dessert",
  },
  {
    src: "/gallery/foodbowl.png",
    title: "Canapés & food bowls",
    tag: "Catering",
  },
  {
    src: "/gallery/photobooth.png",
    title: "360 / vintage photobooth",
    tag: "Experiences",
  },
];

/* =========================================================
   PAGE
========================================================= */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--foreground)]">
      <StickyMiniNav />

      {/* ===================================================== */}
      {/* HERO                                                   */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden border-b border-black/5">
        {/* Premium animated overlay (light theme) */}
        <div
          className="
            absolute inset-0 pointer-events-none
            bg-gradient-to-br from-[rgba(200,169,74,0.18)] via-white/40 to-[rgba(242,223,154,0.22)]
            animate-gradient
          "
        />

        {/* Parallax texture */}
        <ParallaxBG />

        {/* Soft glow orb */}
        <div className="pointer-events-none absolute -top-36 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[160px] animate-pulse-slow" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-10 px-4 pt-12 pb-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16 lg:pb-20">
          {/* LEFT */}
          <div>
            {/* Single eyebrow (remove duplicate branding row) */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">
              UK-wide luxury event design • Corporate • Weddings • Private
            </p>

            {/* Status pill */}
            <div className="pill mt-4 mb-4 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--gold-1)] animate-pulse" />
              <span>Now taking 2026 bookings — corporate, weddings & private.</span>
            </div>

            {/* HERO HEADLINE (improved gold visibility) */}
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem]">
              Premium event experiences for <GoldHighlight>brands</GoldHighlight>,{" "}
              <GoldHighlight>teams</GoldHighlight> &{" "}
              <GoldHighlight>private hosts</GoldHighlight>.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
              We design and deliver corporate hospitality, catering, décor and signature
              stations — planned to brief, aligned to brand/theme, and executed with calm,
              professional on-site management.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#enquiry" className="btn-gold">
                Send an enquiry
              </a>
              <Link href="/services" className="btn-ghost">
                Explore services
              </Link>
            </div>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-2 gap-4 text-xs sm:grid-cols-4 sm:text-sm">
              <Stat label="Delivery" value="White-glove" />
              <Stat label="Audience" value="Corporate+" />
              <Stat label="Coverage" value="UK-wide" />
              <Stat label="Build" value="Bespoke" />
            </dl>

            <p className="mt-5 text-xs text-slate-600">
              One supplier • Styled to brand/theme • Fully staffed setup & service
            </p>

            {/* Hero tiles (3 small images) */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <HeroTile src="/gallery/tree.jpg" alt="Elegance Occasion hero tile 1" />
              <HeroTile src="/gallery/flower.jpg" alt="Elegance Occasion hero tile 2" />
              <HeroTile src="/gallery/cermony.jpg" alt="Elegance Occasion hero tile 3" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {/* Enquiry card (compact, executive) */}
            <div id="enquiry" className="glass-lux p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                    Corporate & event enquiry
                  </h2>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                    Share your brief — we’ll reply with availability and a tailored proposal.
                  </p>
                </div>
                <span className="pill">WhatsApp / Email</span>
              </div>

              <div className="mt-3 rounded-2xl border border-black/5 bg-white/60 px-4 py-3 text-[12px] text-slate-700">
                Supplier-grade delivery: structured timelines, clear scope, single point of
                contact.
              </div>

              <EnquiryBriefForm />
            </div>

            {/* Trust mini-block */}
            <div className="card-lux p-5">
              <div className="text-sm font-semibold text-slate-900">
                Built for enterprise expectations
              </div>
              <div className="mt-3 grid gap-3">
                <FeatureRow
                  title="Professional delivery"
                  desc="On-time setup, tidy service, and clean pack-down."
                />
                <FeatureRow
                  title="Brand-first styling"
                  desc="Colour palettes, signage and details aligned to your brand."
                />
                <FeatureRow
                  title="One supplier"
                  desc="Décor + catering + experiences — simplified coordination."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* TRUST STRIP (ultra-premium)                            */}
      {/* ===================================================== */}
      <section className="relative border-y border-black/5 bg-white/55">
        {/* premium wash + soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(200,169,74,0.12)] via-white/45 to-[rgba(15,23,42,0.05)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 30%, rgba(200,169,74,0.14), transparent 55%), radial-gradient(circle at 85% 65%, rgba(15,23,42,0.06), transparent 55%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
          {/* one cohesive premium “band” */}
          <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white/65 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
            {/* inner highlight */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/40" />
            {/* subtle top hairline */}
            <div className="pointer-events-none absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,74,0.28)] to-transparent" />

            <div className="relative grid gap-6 p-6 sm:p-7 lg:grid-cols-[1.05fr_1.55fr] lg:items-center">
              {/* Left: statement */}
              <div className="rounded-3xl border border-black/5 bg-white/60 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  {/* stars */}
                  <div className="text-[12px] tracking-[0.14em] text-[color:var(--gold-1)]">
                    ★★★★★
                  </div>
                  <span className="h-1 w-1 rounded-full bg-black/10" />
                  <div className="text-[12px] font-semibold text-slate-700">
                    Corporate-ready delivery
                  </div>
                </div>

                <div className="mt-2 text-base font-semibold text-slate-900 sm:text-lg">
                  Designed with taste. Delivered with precision.
                </div>

                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  Clear scope, structured timelines, and calm on-site management — end to
                  end.
                </div>
              </div>

              {/* Right: proof points */}
              <div className="grid gap-3 sm:grid-cols-2">
                <TrustChip title="Response" value="Within 1 business day" />
                <TrustChip title="Delivery" value="Run-sheet + staffed team" />
                <TrustChip title="Branding" value="Menus, signage, napkins, cups" />
                <TrustChip title="Coverage" value="UK-wide (premium bookings)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* SERVICES                                               */}
      {/* ===================================================== */}
      <section id="services" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Experiences, catering & styling — one team
            </h2>
            <p className="mt-2 text-sm text-slate-700 sm:text-base">
              From drinks and dessert stations to full décor builds and catering, we design
              cohesive event experiences that photograph beautifully and run smoothly.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Corporate experiences"
              desc="Brand activations, office events, launches and annual celebrations with premium presentation."
              tag="Enterprise"
            />
            <ServiceCard
              title="Décor & styling"
              desc="Backdrops, tablescapes, florals, staging and detail styling aligned to your theme or brand."
              tag="Design"
            />
            <ServiceCard
              title="Catering"
              desc="Canapés, grazing and tailored menus delivered professionally for teams and guests."
              tag="Food"
            />
            <ServiceCard
              title="Signature stations"
              desc="Staffed stations designed for guest flow: mocktails, mobile bar, dessert experiences and cultural stations."
              tag="Stations"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services" className="btn-gold">
              View all services
            </Link>
            <a href="#gallery" className="btn-ghost">
              See gallery
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* GALLERY PREVIEW                                        */}
      {/* ===================================================== */}
      <section
        id="gallery"
        className="relative overflow-hidden border-y border-black/5 bg-gradient-to-b from-white/60 to-[rgba(200,169,74,0.08)] py-14 sm:py-16"
      >
        <div className="pointer-events-none absolute -top-28 right-0 h-[520px] w-[520px] rounded-full bg-[var(--glow)] blur-[170px] opacity-80" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Gallery preview
            </h2>
            <p className="mt-2 text-sm text-slate-700 sm:text-base">
              A small snapshot of recent dessert stations, décor builds and photo
              experiences. Explore the full gallery for more event examples.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <GalleryCard
                key={item.src}
                src={item.src}
                title={item.title}
                tag={item.tag}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/gallery" className="btn-ghost">
              View full gallery
            </Link>
            <a href="#enquiry" className="btn-gold">
              Send an enquiry
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FINAL CTA                                               */}
      {/* ===================================================== */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Tell us your brief — we’ll build the proposal
            </h2>

            <p className="mt-3 max-w-xl text-sm text-slate-700 sm:text-base">
              Share your date, city, guest count and requirements. We’ll confirm
              availability and come back with a tailored quote aligned to your goals.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#enquiry" className="btn-gold">
                Message us on WhatsApp
              </a>

              <Link href="/contact" className="btn-ghost">
                Contact page
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-600">
              Tip: Event dates lock early — secure your preferred slot ahead of peak season.
            </p>
          </div>

          <div className="card-lux p-6 sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-slate-900">
                What you can expect
              </div>
              <span className="pill">Premium</span>
            </div>

            <div className="mt-4 grid gap-3">
              <FeatureRow
                title="Single point of contact"
                desc="We coordinate the moving parts so your event stays calm."
              />
              <FeatureRow
                title="Polished execution"
                desc="Professional team, clean setup, tidy pack-down."
              />
              <FeatureRow
                title="Cohesive design"
                desc="Décor, food and stations aligned to one aesthetic."
              />
              <FeatureRow
                title="Corporate-ready"
                desc="Ideal for activations, launches, team events and VIP hosting."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FOOTER                                                  */}
      {/* ===================================================== */}
      <footer className="border-t border-black/5 bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white/80">
                <Image
                  src="/brand/elegance-logo.png"
                  alt="Elegance Occasion"
                  width={40}
                  height={40}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-slate-900">Elegance Occasion</div>
                <div className="text-xs text-slate-600">Our Elegance, Your Occasion</div>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-700">
              Luxury event design, décor, catering and interactive stations across the UK.
            </p>
          </div>

          <div>
            <div className="font-semibold text-slate-900">Explore</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <Link className="hover:text-slate-900" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" href="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" href="/corporate">
                  Corporate
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" href="/weddings">
                  Weddings
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-slate-900">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <a
                className="block hover:text-slate-900"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: +44 7932 802236
              </a>
              <a className="block hover:text-slate-900" href="tel:+447932802236">
                Call: +44 7467 578056
              </a>
              <a className="block hover:text-slate-900" href={`mailto:${BUSINESS_EMAIL}`}>
                Email: {BUSINESS_EMAIL}
              </a>
              <p className="text-xs text-slate-500">
                UK-wide availability • Corporate • Weddings • Private
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 py-4 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Elegance Occasion. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   SUPPORTING COMPONENTS
========================================================= */

const StickyMiniNav = React.memo(function StickyMiniNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 260);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } border-b border-black/5 bg-white/80 backdrop-blur-md`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-white">
            <Image
              src="/brand/elegance-logo.png"
              alt="Elegance Occasion"
              width={34}
              height={34}
              className="h-7 w-7 object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="text-xs font-semibold text-slate-900 sm:text-sm">
              Elegance Occasion
            </div>
            <div className="hidden text-[11px] text-slate-600 sm:block">
              Corporate-ready event experiences
            </div>
          </div>
        </div>

        <a href="#enquiry" className="btn-gold px-5 py-2 text-xs sm:text-sm">
          Enquire
        </a>
      </div>
    </div>
  );
});

const ParallaxBG = React.memo(function ParallaxBG() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const offset = window.scrollY * 0.18;
            ref.current.style.transform = `translateY(${offset}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 select-none opacity-[0.55]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 15%, rgba(200,169,74,0.22), transparent 45%), radial-gradient(circle at 70% 55%, rgba(15,23,42,0.06), transparent 55%), linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0.15))",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        willChange: "transform",
      }}
    />
  );
});

const Stat = React.memo(function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[22px] bg-gradient-to-b from-white/85 to-white/55 p-[1px] shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
      <div className="relative rounded-[21px] border border-black/5 bg-white/70 px-4 py-3 text-center backdrop-blur">
        {/* top hairline */}
        <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,74,0.30)] to-transparent" />

        <div className="text-[15px] font-semibold tracking-tight text-slate-900">
          {value}
        </div>

        <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-600">
          {label}
        </div>
      </div>
    </div>
  );
});

function HeroTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 33vw, 220px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(200,169,74,0.14)] via-transparent to-[rgba(15,23,42,0.06)]" />
      </div>
    </div>
  );
}

const ServiceCard = React.memo(function ServiceCard({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div className="card-lux p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <span className="pill whitespace-nowrap">{tag}</span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-slate-700">{desc}</p>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-600">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-1)]" />
        Brief-led • Styled • Fully managed
      </div>
    </div>
  );
});

/* New gallery card using real images */
function GalleryCard({
  src,
  title,
  tag,
}: {
  src: string;
  title: string;
  tag: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/5 bg-white/70 shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80" />
      </div>
      <div className="flex items-center justify-between gap-2 px-3 py-3">
        <div className="text-sm font-semibold text-slate-900 line-clamp-1">
          {title}
        </div>
        <span className="rounded-full bg-slate-900/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
          {tag}
        </span>
      </div>
    </div>
  );
}

function FeatureRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-xs text-slate-700">{desc}</div>
    </div>
  );
}

/* =========================================================
   Gold Highlight (better visibility)
========================================================= */
function GoldHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>

      {/* richer gold underline (gradient + glow) */}
      <span
        aria-hidden
        className="
          absolute left-[-0.06em] right-[-0.06em]
          bottom-[0.12em]
          h-[0.52em]
          rounded-full
          bg-gradient-to-r
          from-[rgba(200,169,74,0.18)]
          via-[rgba(200,169,74,0.40)]
          to-[rgba(242,223,154,0.22)]
          shadow-[0_10px_30px_rgba(200,169,74,0.18)]
          ring-1 ring-[rgba(200,169,74,0.22)]
          blur-[0.2px]
        "
      />
    </span>
  );
}

/* =========================================================
   Trust Chip (replaces bland trust pills)
========================================================= */
function TrustChip({ title, value }: { title: string; value: string }) {
  return (
    <div className="group rounded-3xl border border-black/5 bg-white/60 px-4 py-4 shadow-sm backdrop-blur transition hover:bg-white/75 hover:shadow-[0_14px_36px_rgba(15,23,42,0.10)]">
      <div className="flex items-start gap-3">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--gold-1)] shadow-[0_0_0_7px_rgba(200,169,74,0.10)]" />
        <div className="min-w-0">
          <div className="text-[11px] font-semibold tracking-[0.16em] text-slate-700 uppercase">
            {title}
          </div>
          <div className="mt-1 text-[13px] leading-snug text-slate-900">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Enquiry Brief Form (WhatsApp + Email, no API)
========================================================= */
function EnquiryBriefForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [guests, setGuests] = useState("");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [preferred, setPreferred] = useState<"WhatsApp" | "Email" | "Call">("WhatsApp");
  const [error, setError] = useState<string | null>(null);

  const message = useMemo(() => {
    const lines = [
      "Hi Elegance Occasion",
      "",
      "New enquiry / brief:",
      `Name: ${name.trim() || "-"}`,
      `Company: ${company.trim() || "-"}`,
      `Email: ${email.trim() || "-"}`,
      `Phone: ${phone.trim() || "-"}`,
      `Event type: ${eventType.trim() || "-"}`,
      `Date: ${date || "TBC"}`,
      `City/Venue: ${city.trim() || "-"}`,
      `Guests: ${guests.trim() || "-"}`,
      `Budget (optional): ${budget.trim() || "-"}`,
      `Preferred contact: ${preferred}`,
      notes.trim() ? `Notes: ${notes.trim()}` : "",
      "",
      "Please confirm availability and share next steps. Thank you!",
    ];

    return encodeLines(lines);
  }, [name, company, email, phone, eventType, date, city, guests, budget, preferred, notes]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("New enquiry — Elegance Occasion");
    const body = decodeURIComponent(message); // readable mail body
    return `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }, [message]);

  function submitWhatsApp(e: React.FormEvent) {
    e.preventDefault();

    // minimal validation (enterprise-friendly, not annoying)
    if (!eventType.trim()) return setError("Please tell us the event type.");
    if (!city.trim()) return setError("Please include the city/venue.");
    setError(null);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submitWhatsApp} className="mt-5">
      {error && (
        <div className="mb-4 rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-900">
          {error}
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {/* Essentials */}
        <div>
          <label className="text-xs text-slate-600">Event type *</label>
          <input
            className="input-dark mt-1"
            placeholder="Corporate / Launch / Wedding / Private"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs text-slate-600">Event date (or TBC)</label>
          <input
            className="input-dark mt-1"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs text-slate-600">City / venue *</label>
          <input
            className="input-dark mt-1"
            placeholder="e.g. London (Canary Wharf) / Manchester / Birmingham"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs text-slate-600">Guest count</label>
          <input
            className="input-dark mt-1"
            placeholder="e.g. 150"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs text-slate-600">Budget range (optional)</label>
          <input
            className="input-dark mt-1"
            placeholder="e.g. £2,500–£7,500"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        {/* Optional details collapsible */}
        <div className="sm:col-span-2">
          <details className="mt-1 rounded-2xl border border-black/5 bg-white/55 px-4 py-3">
            <summary className="cursor-pointer select-none text-sm font-semibold text-slate-900">
              Add more details (optional)
              <span className="ml-2 text-[color:var(--gold-1)]">+</span>
            </summary>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs text-slate-600">Name</label>
                <input
                  className="input-dark mt-1"
                  placeholder="e.g. Sara"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-xs text-slate-600">Company</label>
                <input
                  className="input-dark mt-1"
                  placeholder="e.g. Acme Ltd"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div>
                <label className="text-xs text-slate-600">Email</label>
                <input
                  className="input-dark mt-1"
                  placeholder="e.g. name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  inputMode="email"
                />
              </div>

              <div>
                <label className="text-xs text-slate-600">Phone</label>
                <input
                  className="input-dark mt-1"
                  placeholder="e.g. +44 7..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  inputMode="tel"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs text-slate-600">Preferred contact</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(["WhatsApp", "Email", "Call"] as const).map((m) => {
                    const active = preferred === m;
                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setPreferred(m)}
                        className={
                          "rounded-full px-3 py-1 text-[12px] ring-1 transition " +
                          (active
                            ? "bg-[rgba(200,169,74,0.18)] text-slate-900 ring-[rgba(200,169,74,0.30)]"
                            : "bg-white/70 text-slate-700 ring-black/10 hover:bg-white")
                        }
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs text-slate-600">Brief / notes</label>
                <textarea
                  className="input-dark mt-1 min-h-[110px]"
                  placeholder="Theme/brand notes, timings, dietary requirements, must-haves..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="submit" className="btn-gold">
          Send on WhatsApp
        </button>

        <a className="btn-ghost" href={mailtoHref}>
          Email instead
        </a>
      </div>

      <p className="mt-3 text-[11px] text-slate-500">
        No account needed — WhatsApp opens with a pre-written brief.
      </p>
    </form>
  );
}
