"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================================================
   CONFIG
========================================================= */
const WHATSAPP_NUMBER = "447932802236";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Elegance Occasion 👋\n\nI'd like a quote / availability.\n\nEvent type: -\nDate: -\nCity/Venue: -\nGuests: -\nServices interested in: -\n\nThank you!"
)}`;

/* =========================================================
   EXPERIENCE STATIONS
   FIX 4: Slush Station re-added. Total = 12 → clean 4-col grid.
========================================================= */
const experiences = [
  {
    id: "chocolate-fountain",
    title: "Chocolate Fountain",
    desc: "Luxury flowing fountain with fruit, marshmallows and premium dipping selections.",
    img: "/gallery/fountain.png",
    tag: "Dessert",
    price: "From £250",
    popular: true,
  },
  {
    id: "vintage-photo-booth",
    title: "Vintage Photo Booth",
    desc: "Elegant open-air photo booth with instant prints, props and digital sharing.",
    img: "/gallery/photobooth.png",
    tag: "Experience",
    price: "From £350",
    popular: true,
  },
  {
    id: "mini-dutch-pancakes",
    title: "Mini Dutch Pancakes",
    desc: "Fresh live poffertjes with luxury toppings and interactive serving.",
    img: "/gallery/pancakes.png",
    tag: "Food",
    price: "From £200",
    popular: true,
  },
  {
    id: "candy-floss",
    title: "Candy Floss",
    desc: "Fresh spun candy floss in custom colours and flavours.",
    img: "/gallery/candyflosscart.png",
    tag: "Sweet",
    price: "From £195",
    popular: false,
  },
  {
    id: "soft-serve",
    title: "Soft-Serve Ice Cream",
    desc: "Premium soft-serve station with toppings, cones and custom styling.",
    img: "/gallery/icecream2.jpg",
    tag: "Dessert",
    price: "From £350",
    popular: false,
  },
  {
    id: "360-booth",
    title: "360 Photo Booth",
    desc: "Luxury 360 video booth perfect for weddings, socials and brand activations.",
    img: "/gallery/360boothconcept.png",
    tag: "Experience",
    price: "From £150",
    popular: true,
  },
  {
    id: "pani-puri",
    title: "Pani Puri Station",
    desc: "Authentic gol gappe experience prepared and served live.",
    img: "/gallery/Gol Gappe.png",
    tag: "Cultural",
    price: "From £149",
    popular: true,
  },
  {
    id: "luxury-fruit-display",
    title: "Luxury Fruit Display",
    desc: "Exotic fruit display with stunning sculptural arrangements.",
    img: "/gallery/fuitdisplay2.png",
    tag: "Dessert",
    price: "From £249",
    popular: true,
  },
  {
    id: "sweet-carts",
    title: "Sweet Carts",
    desc: "Styled sweet displays curated to your event palette and theme.",
    img: "/gallery/sweets.jpg",
    tag: "Sweet",
    price: "From £149",
    popular: false,
  },
  {
    id: "welcome-drinks",
    title: "Welcome Drinks",
    desc: "Luxury welcome drinks and handcrafted mocktails served live.",
    img: "/gallery/welcomedrinks.png",
    tag: "Drinks",
    price: "From £195",
    popular: false,
  },
  // FIX 4: Slush Station restored
  {
    id: "slush-station",
    title: "Slush Station",
    desc: "Refreshing slush station with vibrant flavours and live serving.",
    img: "/gallery/slushcup.png",
    tag: "Drinks",
    price: "From £149",
    popular: true,
  },
  // 12th entry keeps the 4-col XL grid clean (3 rows of 4)
  {
    id: "grazing-table",
    title: "Grazing Table",
    desc: "Abundant styled boards with artisan cheeses, charcuterie and seasonal produce.",
    img: "/gallery/foodbowl.png",
    tag: "Food",
    price: "From £299",
    popular: false,
  },
];

/* =========================================================
   CATEGORIES
========================================================= */
const categories = [
  {
    title: "Enterprise",
    desc: "Brand activations, launches & corporate hospitality",
    img: "/gallery/corporateevent.jpg",
    href: "/corporate",
  },
  {
    title: "Weddings",
    desc: "Luxury wedding styling & full experiences",
    img: "/gallery/hero-1.jpg",
    href: "/weddings",
  },
  {
    title: "Décor & Design",
    desc: "Floral styling, staging & installations",
    img: "/gallery/decorbuild.png",
    href: "/services",
  },
  {
    title: "Private Events",
    desc: "Birthdays, mehndi nights & celebrations",
    img: "/gallery/mehndidecor.jpg",
    href: "/services",
  },
];

/* =========================================================
   GALLERY PREVIEW
========================================================= */
const gallery = [
  { src: "/gallery/hero-2.jpg", label: "Corporate Experiences" },
  { src: "/gallery/cermony.jpg", label: "Ceremony Experiences" },
  { src: "/gallery/photobooth.png", label: "Interactive Stations" },
];

/* =========================================================
   PAGE
========================================================= */
export default function HomePage() {
  const today = new Date();

  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState(120); // FIX 2: slider state
  const [eventType, setEventType] = useState("");
  const [city, setCity] = useState(""); // FIX 3: city state

  function toggleExperience(id: string) {
    setSelectedExperiences((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const selectedNames = selectedExperiences
    .map((id) => experiences.find((e) => e.id === id)?.title)
    .filter(Boolean)
    .join(", ");

  const enquiryMessage = useMemo(() => {
    const lines = [
      "Hi Elegance Occasion 👋",
      "",
      "I'd like an event quote.",
      "",
      `Date: ${selectedDate || "-"}`,
      `Event type: ${eventType || "-"}`,
      `City/Venue: ${city || "-"}`, // FIX 3: city now in message
      `Guests: ~${guests}`,
      `Experiences: ${selectedNames || "-"}`,
      "",
      "Please let me know availability and pricing.",
      "",
      "Thank you!",
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [selectedDate, eventType, city, guests, selectedNames]);

  const enquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${enquiryMessage}`;

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--foreground)] overflow-x-hidden">

      {/* =====================================================
         HERO
         FIX 1: "Build your event" CTA now scrolls to #experiences
         so users pick stations before hitting the builder.
      ===================================================== */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/rings.jpg"
            alt="Elegance Occasion"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(180,140,40,0.2)] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 sm:pb-28">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[rgba(242,210,100,0.85)]">
            UK-Wide • Weddings • Corporate • Luxury Events
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Luxury Experiences
            <br />
            Designed Around
            <br />
            <span className="text-[rgba(242,210,100,1)]">Your Occasion.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/72">
            Premium event styling, catering, entertainment and interactive
            stations — all managed seamlessly by one team.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            {/* FIX 1: scrolls to stations grid first */}
            <a href="#experiences" className="btn-gold px-7 py-3.5 text-base">
              Build your event →
            </a>
            <Link
              href="/gallery"
              className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View gallery
            </Link>
          </div>
          <p className="mt-7 text-xs tracking-wide text-white/45">
            Tailored Proposals · 2026 bookings open · Fully styled experiences
          </p>
        </div>
      </section>

      {/* =====================================================
         EXPERIENCES GRID
         FIX 4 & 5: 12 stations, xl:grid-cols-4 = 3 clean rows
      ===================================================== */}
      <section id="experiences" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--gold-1)]">
                Signature experiences
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Pick the experiences your guests will remember.
              </h2>
              <p className="mt-3 text-sm text-slate-500 max-w-xl">
                Tap to add stations to your enquiry, then scroll down to choose your date and send everything to WhatsApp in one go.
              </p>
            </div>
            <a
              href="#build"
              className="self-start sm:self-auto whitespace-nowrap rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md transition"
            >
              Skip to booking →
            </a>
          </div>

          {/* FIX 4 & 5: 2-col → 3-col → 4-col, 12 items = 3 rows of 4 */}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
            {experiences.map((exp) => {
              const active = selectedExperiences.includes(exp.id);
              return (
                <div
                  key={exp.id}
                  className="group overflow-hidden rounded-[28px] border border-black/6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)] flex flex-col"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    {exp.popular && (
                      <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-[var(--gold-1)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                          Most Booked
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <div className="text-xs font-bold text-white">{exp.price}</div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold tracking-tight text-slate-900 sm:text-base leading-tight">
                        {exp.title}
                      </h3>
                      <span className="shrink-0 rounded-full border border-black/8 bg-slate-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-500">
                        {exp.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 flex-1">{exp.desc}</p>
                    <button
                      onClick={() => toggleExperience(exp.id)}
                      className={`mt-4 w-full rounded-2xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm sm:py-3 ${
                        active
                          ? "bg-[var(--gold-1)] text-white shadow-[0_8px_25px_rgba(200,169,74,0.3)]"
                          : "bg-slate-900 text-white hover:bg-black"
                      }`}
                    >
                      {active ? "✓ Added to enquiry" : "Add to enquiry"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nudge down to builder */}
          <div className="mt-12 text-center">
            <a href="#build" className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-base">
              Continue to booking <span className="text-lg leading-none">↓</span>
            </a>
            {selectedExperiences.length > 0 && (
              <p className="mt-3 text-sm text-slate-500">
                {selectedExperiences.length} station{selectedExperiences.length > 1 ? "s" : ""} selected
              </p>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
         SMART BUILDER
         FIX 2: Slider + presets for guest count
         FIX 3: City field visible and wired up
      ===================================================== */}
      <section
        id="build"
        className="relative overflow-hidden bg-[linear-gradient(to_bottom,#faf8f2,#f5f1e8)] py-20 sm:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 40%, rgba(200,169,74,0.12), transparent 40%), radial-gradient(circle at 90% 10%, rgba(200,169,74,0.10), transparent 35%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-1)]">
              Build your event
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Choose your date.
              <br />
              We'll handle the experience.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Add your details below and send everything to WhatsApp in one tap — we'll come back with availability and a tailored quote.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">

            {/* LEFT */}
            <div className="rounded-[32px] border border-black/6 bg-white/85 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-8 space-y-8">

              {/* Event type */}
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Event type
                </label>
                <div className="relative mt-2">
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-black/8 bg-white px-4 py-3 text-sm font-medium text-slate-900 focus:border-[var(--gold-1)] focus:outline-none"
                  >
                    <option value="">Select event type</option>
                    {["Wedding","Birthday","Corporate Event","Prom","Private Party","Baby Shower","Engagement","Mehndi","Anniversary","Graduation","Festival","Launch Event","Other"].map(
                      (t) => <option key={t} value={t}>{t}</option>
                    )}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Event date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={today.toISOString().split("T")[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-black/8 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[var(--gold-1)] focus:outline-none"
                />
              </div>

              {/* FIX 3: City field — now on screen and wired to message */}
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  City / Venue
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. London, Birmingham, Manchester"
                  className="mt-2 w-full rounded-2xl border border-black/8 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 focus:border-[var(--gold-1)] focus:outline-none"
                />
              </div>

              {/* FIX 2: Guest slider + quick presets */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Estimated guests
                  </label>
                  <span className="text-sm font-bold text-[var(--gold-1)]">
                    {guests >= 500 ? "500+" : `~${guests}`} guests
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={500}
                  step={5}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full accent-[var(--gold-1)] cursor-pointer"
                />
                <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                  <span>10</span><span>500+</span>
                </div>
                {/* Quick presets */}
                <div className="mt-4 grid grid-cols-6 gap-2">
                  {[50, 100, 150, 200, 300, 500].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setGuests(count)}
                      className={`rounded-xl border py-2 text-xs font-semibold transition-all ${
                        guests === count
                          ? "border-[rgba(200,169,74,0.35)] bg-[rgba(200,169,74,0.10)] text-[var(--gold-1)]"
                          : "border-black/8 bg-white text-slate-600 hover:border-[rgba(200,169,74,0.2)]"
                      }`}
                    >
                      {count === 500 ? "500+" : count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected experiences */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">Selected experiences</h3>
                  <span className="rounded-full bg-[rgba(200,169,74,0.12)] px-3 py-1 text-xs font-bold text-[var(--gold-1)]">
                    {selectedExperiences.length} selected
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedExperiences.length > 0 ? (
                    selectedExperiences.map((id) => {
                      const item = experiences.find((e) => e.id === id);
                      if (!item) return null;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => toggleExperience(id)}
                          title="Click to remove"
                          className="rounded-full border border-[rgba(200,169,74,0.18)] bg-[rgba(200,169,74,0.08)] px-3 py-1.5 text-xs font-semibold text-[var(--gold-1)] hover:bg-[rgba(200,169,74,0.18)] transition"
                        >
                          {item.title} ×
                        </button>
                      );
                    })
                  ) : (
                    <div className="w-full rounded-2xl border border-dashed border-black/10 bg-[rgba(0,0,0,0.02)] px-5 py-4 text-center text-sm text-slate-400">
                      Select experiences above to build your enquiry.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT — summary + send */}
            <div className="rounded-[32px] border border-[rgba(200,169,74,0.18)] bg-[linear-gradient(to_bottom,#fffdf8,#f8f4ea)] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-1)]">
                Your luxury enquiry
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Ready to book?</h3>
              <p className="mt-3 text-slate-600">
                Your enquiry opens directly in WhatsApp with all your selected details pre-filled.
              </p>

              <div className="mt-8 space-y-4 rounded-3xl border border-black/6 bg-white/70 p-5">
                <SummaryRow label="Event" value={eventType || "Not selected"} />
                <SummaryRow label="Date" value={selectedDate || "Not selected"} />
                <SummaryRow label="City / Venue" value={city || "Not entered"} />
                <SummaryRow label="Guests" value={guests >= 500 ? "500+" : `~${guests}`} />
                <SummaryRow
                  label="Experiences"
                  value={selectedExperiences.length > 0 ? `${selectedExperiences.length} selected` : "None selected"}
                />
              </div>

              <a
                href={enquiryUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.22)] transition hover:scale-[1.01]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.428c-.073.31.198.594.512.533l5.701-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.003-1.368l-.36-.213-3.724.977.993-3.63-.235-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
                Send enquiry on WhatsApp
              </a>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {["Tailored Packages", "No account needed", "Luxury event specialists"].map((t) => (
                  <div key={t} className="rounded-full border border-black/6 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-600">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
         CATEGORIES
      ===================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--gold-1)]">
              Event categories
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tailored for every type of event.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group overflow-hidden rounded-[30px] border border-black/6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-2xl font-bold tracking-tight text-white">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{cat.desc}</p>
                    <div className="mt-5 text-sm font-semibold text-[rgba(242,210,100,0.95)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Explore →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
         GALLERY
      ===================================================== */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(242,210,100,0.7)]">
                Recent events
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Crafted experiences. Real occasions.
              </h2>
            </div>
            <Link href="/gallery" className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/75 transition hover:bg-white/10">
              Full gallery →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {gallery.map((img) => (
              <Link key={img.src} href="/gallery" className="group overflow-hidden rounded-[28px]">
                <div className="relative" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
                  <div className="absolute bottom-5 left-5">
                    <div className="text-lg font-bold text-white">{img.label}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
         FINAL CTA
      ===================================================== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-1)]">
            Let's create something unforgettable
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            One team.
            <br />
            Every detail handled.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            From luxury styling and interactive stations to full guest
            experiences — Elegance Occasion delivers events that feel effortless.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold px-8 py-4 text-base">
              Get a quote on WhatsApp
            </a>
            <Link href="/contact" className="btn-ghost px-8 py-4 text-base">
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   SUMMARY ROW
========================================================= */
function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-slate-500">{label}</span>
      <span className="text-sm font-semibold text-slate-900">{value}</span>
    </div>
  );
}