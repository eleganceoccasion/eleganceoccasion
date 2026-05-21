"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

const EMAIL_TO = "enquiries@eleganceoccasion.co.uk";
const WHATSAPP_NUMBER = "447932802236";

const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

type Form = {
  name: string;
  company: string;
  email: string;
  phone: string;
  date: string;
  location: string;
  guests: string;
  type: string;
  services: string;
  custom: string;
  notes: string;
};

const INITIAL: Form = {
  name: "", company: "", email: "", phone: "",
  date: "", location: "", guests: "", type: "",
  services: "", custom: "", notes: "",
};

const EVENT_TYPES = [
  "Wedding", "Birthday", "Corporate Event", "Prom", "Private Party",
  "Baby Shower", "Engagement", "Mehndi", "Anniversary", "Graduation",
  "Festival", "Launch Event", "Other",
];

/* =========================================================
   PAGE
========================================================= */
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--foreground)] overflow-x-hidden">
      <HeroSection />
      <FormSection />
      <FaqSection />
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#fffdf8,white,#faf6ee)]">

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,74,0.7)] to-transparent" />

      <div
        className="pointer-events-none absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,169,74,0.12) 0%, rgba(200,169,74,0.04) 40%, transparent 72%)",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-16 -left-10 h-[320px] w-[320px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,169,74,0.08) 0%, transparent 68%)",
        }}
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="hero-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      <div
        className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(200,169,74,0.08), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20">

        <div className="mb-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-7 bg-[rgba(200,169,74,0.7)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[rgba(166,133,43,0.9)]">
              Get in touch
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/80 px-4 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] tracking-wide text-slate-500">
              2026 bookings open
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h1
            className="font-serif text-[clamp(32px,5.5vw,62px)] font-normal leading-[1.06] tracking-[-0.02em] text-slate-900"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Let's talk about
          </h1>

          <div className="relative mt-1 inline-block">
            <span
              className="font-serif text-[clamp(32px,5.5vw,62px)] font-normal leading-[1.06] tracking-[-0.02em]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                background:
                  "linear-gradient(135deg, rgba(226,193,92,1) 0%, rgba(186,148,42,1) 45%, rgba(222,183,71,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              your occasion.
            </span>

            <div
              className="absolute -bottom-1 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(to right, rgba(200,169,74,0.5), rgba(242,210,100,0.25), transparent)",
              }}
            />
          </div>
        </div>

        <p className="mb-12 max-w-[440px] text-[15px] font-normal leading-[1.8] text-slate-500">
          Tell us your date, guest count and what you're envisioning. We respond
          with availability and a fully tailored proposal — usually the same day.
        </p>

        <div className="mb-16 flex flex-wrap items-center gap-3">
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-bold tracking-[0.04em] text-[#1a0f00] transition-all hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(200,169,74,0.25)]"
            style={{
              background:
                "linear-gradient(135deg, #c8a94a 0%, #efd784 50%, #c8a94a 100%)",
            }}
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.428c-.073.31.198.594.512.533l5.701-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.003-1.368l-.36-.213-3.724.977.993-3.63-.235-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
            </svg>
            WhatsApp us now
          </a>

          <a
            href={`mailto:${EMAIL_TO}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-6 py-3.5 text-[13px] font-semibold tracking-[0.04em] text-slate-700 backdrop-blur transition-all hover:border-black/[0.12] hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
          >
            <svg
              className="h-3.5 w-3.5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send an email
          </a>
        </div>

        <div
          className="mb-10 h-px"
          style={{
            background:
              "linear-gradient(to right, rgba(15,23,42,0.08), rgba(15,23,42,0.03), transparent)",
          }}
        />

        <dl className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
          {[
            { value: "1 day", label: "Response SLA" },
            { value: "UK-wide", label: "Availability" },
            { value: "Bespoke", label: "Every proposal" },
            { value: "NDA-ready", label: "Corporate-grade" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-1.5 ${
                i > 0 ? "sm:border-l sm:border-black/[0.06] sm:pl-7" : ""
              } ${i < 3 ? "sm:pr-7" : ""}`}
            >
              <dt
                className="text-[22px] font-normal leading-none tracking-[-0.01em] text-[rgba(186,148,42,0.95)]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {item.value}
              </dt>
              <dd className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(200,169,74,0.35), rgba(200,169,74,0.55), rgba(200,169,74,0.35), transparent)",
        }}
      />
    </section>
  );
}

/* =========================================================
   FORM SECTION
========================================================= */
function FormSection() {
  return (
    <section className="py-20 sm:py-24 bg-[linear-gradient(to_bottom,#faf8f2,#f5f1e8)] overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(200,169,74,0.08), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--gold-1)]">
            Send a brief
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Fill in the details below.
            <br />
            We'll handle the rest.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            The more you share, the more accurate your quote. Takes about 2 minutes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] items-start">
          <ContactForm />
          <SidePanel />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */
function ContactForm() {
  const [form, setForm] = useState<Form>(INITIAL);

  const update =
    (field: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const whatsappMsg = useMemo(() => {
    const lines = [
      "Hi Elegance Occasion 👋",
      "",
      "I'd like to enquire about an event.",
      "",
      `Name: ${form.name || "-"}`,
      `Company: ${form.company || "-"}`,
      `Email: ${form.email || "-"}`,
      `Phone: ${form.phone || "-"}`,
      "",
      `Event type: ${form.type || "-"}`,
      `Date: ${form.date || "-"}`,
      `City / Venue: ${form.location || "-"}`,
      `Guests: ${form.guests || "-"}`,
      `Services: ${form.services || "-"}`,
      `Customisation: ${form.custom || "-"}`,
      "",
      `Notes: ${form.notes || "-"}`,
      "",
      "Please confirm availability and share pricing. Thank you!",
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [form]);

  const mailtoBody = useMemo(() => {
    const lines = [
      "Hello Elegance Occasion,",
      "",
      "I would like to enquire about availability and pricing.",
      "",
      "— Brief details —",
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      `Event type: ${form.type}`,
      `Date: ${form.date}`,
      `City / Venue: ${form.location}`,
      `Guests: ${form.guests}`,
      `Services required: ${form.services}`,
      `Customisation: ${form.custom}`,
      "",
      "Notes / requirements:",
      form.notes,
      "",
      `Thank you, ${form.name}`,
    ];
    return `mailto:${EMAIL_TO}?subject=${encodeURIComponent("Elegance Occasion — Enquiry / Brief")}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [form]);

  const whatsappUrl = `${WHATSAPP_BASE}?text=${whatsappMsg}`;

  const inputCls =
    "mt-1.5 w-full min-w-0 rounded-2xl border border-black/8 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 focus:border-[rgba(200,169,74,0.5)] focus:outline-none focus:ring-2 focus:ring-[rgba(200,169,74,0.15)] transition";
  const labelCls = "text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500";

  return (
    <div className="w-full min-w-0 rounded-[32px] border border-black/6 bg-white/90 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur sm:p-8">
      <div className="grid gap-5">

        {/* Name + Company */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="min-w-0">
            <label className={labelCls}>Your name</label>
            <input className={inputCls} placeholder="e.g. John" value={form.name} onChange={update("name")} />
          </div>
          <div className="min-w-0">
            <label className={labelCls}>Company (optional)</label>
            <input className={inputCls} placeholder="e.g. Acme Ltd" value={form.company} onChange={update("company")} />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="min-w-0">
            <label className={labelCls}>Email</label>
            <input className={inputCls} placeholder="name@company.com" inputMode="email" value={form.email} onChange={update("email")} />
          </div>
          <div className="min-w-0">
            <label className={labelCls}>Phone (optional)</label>
            <input className={inputCls} placeholder="+44 7..." inputMode="tel" value={form.phone} onChange={update("phone")} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/5 my-1" />

        {/* Event type */}
        <div>
          <label className={labelCls}>Event type</label>
          <div className="relative mt-1.5">
            <select
              value={form.type}
              onChange={update("type")}
              className="w-full min-w-0 appearance-none rounded-2xl border border-black/8 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[rgba(200,169,74,0.5)] focus:outline-none transition"
            >
              <option value="">Select event type</option>
              {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Date + Location */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="min-w-0">
            <label className={labelCls}>Event date</label>
            <input
              type="date"
              className={inputCls}
              min={new Date().toISOString().split("T")[0]}
              value={form.date}
              onChange={update("date")}
            />
          </div>
          <div className="min-w-0">
            <label className={labelCls}>City / Venue</label>
            <input className={inputCls} placeholder="e.g. London, Birmingham" value={form.location} onChange={update("location")} />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className={labelCls}>Guest count</label>
          <input className={inputCls} placeholder="e.g. 150" value={form.guests} onChange={update("guests")} />
        </div>

        {/* Services */}
        <div>
          <label className={labelCls}>Services required</label>
          <input
            className={inputCls}
            placeholder="e.g. Chocolate fountain, 360 booth, candy floss, décor..."
            value={form.services}
            onChange={update("services")}
          />
        </div>

        {/* Customisation */}
        <div>
          <label className={labelCls}>Customisation (optional)</label>
          <input
            className={inputCls}
            placeholder="Branded cups, signage, colour scheme, napkins..."
            value={form.custom}
            onChange={update("custom")}
          />
        </div>

        {/* Notes */}
        <div>
          <label className={labelCls}>Notes & requirements</label>
          <textarea
            className={`${inputCls} min-h-[110px] resize-none`}
            placeholder="Timings, venue access, dietary needs, brand guidelines, anything else..."
            value={form.notes}
            onChange={update("notes")}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-black/5" />

        {/* CTAs — always stacked on mobile, row on sm+ */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(37,211,102,0.22)] transition hover:scale-[1.01]"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.428c-.073.31.198.594.512.533l5.701-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.003-1.368l-.36-.213-3.724.977.993-3.63-.235-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            Send on WhatsApp
          </a>

          <a
            href={mailtoBody}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-black/8 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:shadow-sm"
          >
            <svg className="h-4 w-4 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Open in email instead
          </a>
        </div>

        <p className="text-center text-[11px] text-slate-400">
          No account needed · Your details open pre-filled · We reply fast
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SIDE PANEL
========================================================= */
function SidePanel() {
  return (
    <aside className="lg:sticky lg:top-24 w-full min-w-0">

      <div className="relative overflow-hidden rounded-[36px] border border-black/[0.06] bg-white/75 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] sm:p-7">

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(200,169,74,0.10), transparent 40%)",
          }}
        />

        <section className="relative z-10">
          <div className="mb-5 flex items-center justify-between gap-4">

            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-[rgba(200,169,74,0.7)]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--gold-1)]">
                Direct contact
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/70 px-3 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-medium tracking-wide text-slate-500">
                Available now
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <ContactRow
              icon={
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              }
              label="WhatsApp"
              value="+44 7932 802236"
              href={WHATSAPP_BASE}
            />

            <ContactRow
              icon={
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.2a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              label="Call"
              value="+44 7380 809766"
              href="tel:+447380809766"
            />

            <ContactRow
              icon={
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 6l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              label="Email"
              value={EMAIL_TO}
              href={`mailto:${EMAIL_TO}`}
            />
          </div>

          <div className="mt-5 rounded-[24px] border border-black/[0.05] bg-white/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Response time
            </div>
            <div
              className="text-[28px] leading-none tracking-[-0.03em] text-slate-900"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Within 1 day
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
              Monday–Sunday. Mention your preferred event date for urgent availability checks.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-black/[0.06] pt-5">
            {["Fully insured", "UK-wide", "Premium suppliers"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/[0.05] bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <div className="my-8 h-px bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.06),transparent)]" />

        <section className="relative z-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-6 bg-[rgba(200,169,74,0.7)]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--gold-1)]">
              What happens next
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[rgba(200,169,74,0.25)] via-[rgba(200,169,74,0.12)] to-transparent" />

            <div className="space-y-7">
              {[
                ["01", "We review your brief", "Usually within a few working hours."],
                ["02", "Availability is confirmed", "Including logistics and lead-time considerations."],
                ["03", "You receive a tailored quote", "Broken down with optional upgrades and add-ons."],
                ["04", "Your booking is secured", "With deposit confirmation and planning begins."],
              ].map(([num, title, desc]) => (
                <div key={num} className="relative">
                  <div className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(200,169,74,0.22)] bg-white text-[9px] font-bold tracking-wide text-[var(--gold-1)] shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                    {num}
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
                      {title}
                    </div>
                    <div className="mt-1 text-[13px] leading-relaxed text-slate-500">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}

/* =========================================================
   CONTACT ROW
========================================================= */
function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-[22px] border border-black/[0.05] bg-white/75 px-4 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.025)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-[rgba(200,169,74,0.18)] hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(200,169,74,0.16)] bg-[rgba(200,169,74,0.08)] text-[var(--gold-1)] transition-colors group-hover:bg-[rgba(200,169,74,0.12)]">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {label}
        </div>
        <div className="mt-0.5 truncate text-[14px] font-semibold tracking-[-0.01em] text-slate-900 transition-colors group-hover:text-[var(--gold-1)]">
          {value}
        </div>
      </div>

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[0.05] bg-white text-slate-300 transition-all group-hover:border-[rgba(200,169,74,0.16)] group-hover:text-[var(--gold-1)]">
        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  );
}

/* =========================================================
   FAQ
========================================================= */
function FaqSection() {
  const faqs = [
    ["Do you work with procurement and approvals?", "Yes — we're comfortable with approvals, NDAs, risk checks, brand guidelines and agency-led workflows. Just mention it in your brief."],
    ["Can you provide branded items?", "Absolutely. We can align branded cups, napkins, signage and menus to your brand. We'll confirm artwork specs, lead times and minimums during planning."],
    ["Do you travel nationwide?", "Yes. We travel UK-wide for premium bookings. Travel and logistics costs are confirmed upfront during the planning stage — no surprises."],
    ["Can you work under NDA?", "Yes. We regularly work under NDA and internal compliance frameworks for corporate clients."],
    ["How far in advance should I book?", "We recommend at least 4–6 weeks for most events. Peak dates (summer, Christmas, bank holidays) book up fast — the earlier the better."],
    ["Can I mix and match stations?", "Yes — most bookings combine multiple stations. We'll help you build a package that works for your space, guest count and budget."],
  ];

  return (
    <section className="py-20 sm:py-24 bg-[var(--page-bg)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--gold-1)]">
            FAQs
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Common questions.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-black/6 bg-white px-6 py-4 shadow-sm open:shadow-md transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-900">{q}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/8 bg-slate-50 text-slate-500 transition group-open:rotate-45 group-open:bg-[rgba(200,169,74,0.1)] group-open:text-[var(--gold-1)] group-open:border-[rgba(200,169,74,0.2)]">
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm leading-relaxed text-slate-600">{a}</div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-4">Still have questions? Just ask.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="btn-gold px-6 py-3 text-sm"
            >
              WhatsApp us
            </a>
            <a href={`mailto:${EMAIL_TO}`} className="btn-ghost px-6 py-3 text-sm">
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}