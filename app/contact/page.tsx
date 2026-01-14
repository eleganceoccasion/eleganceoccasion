"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

const EMAIL_TO = "enquiries@eleganceoccasion.co.uk";
const WHATSAPP = "https://wa.me/447932802236";

type ContactFormState = {
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

export default function ContactPage() {
  return (
    <div className="bg-[var(--page-bg)] text-[var(--foreground)]">
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(200,169,74,0.10)] via-white/70 to-[rgba(242,223,154,0.14)]" />
        <div className="pointer-events-none absolute -top-44 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[190px] opacity-90" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">
            Contact
          </span>

          <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.9rem]">
            Enquiries, briefs &amp; availability —{" "}
            <span className="text-[color:var(--gold-1)]">
              handled professionally.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
            For corporate hospitality, brand activations and premium private
            events. Share your requirements and we’ll respond with availability,
            next steps, and a tailored quote.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL_TO}`} className="btn-gold">
              Email us
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              WhatsApp (optional)
            </a>
            <Link href="/corporate" className="btn-ghost">
              Corporate page
            </Link>
            <Link href="/weddings" className="btn-ghost">
              Weddings page
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <MiniCred
              title="Response SLA"
              desc="Within 1 business day (Mon–Fri)."
            />
            <MiniCred
              title="UK-wide delivery"
              desc="Nationwide availability for premium bookings."
            />
            <MiniCred
              title="Procurement-ready"
              desc="Comfortable with approvals, NDAs and schedules."
            />
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CONTACT GRID */}
      {/* ===================================================== */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
            {/* ------------------------------------------------- */}
            {/* FORM */}
            {/* ------------------------------------------------- */}
            <div className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-slate-900">
                  Send an enquiry
                </div>
                <span className="pill">Email-first</span>
              </div>

              <p className="mt-3 text-[13px] text-slate-700">
                Complete the brief below — it generates a structured draft email
                for you to review and send.
              </p>

              <ContactForm />

              <p className="mt-4 text-[11px] text-slate-500">
                Prefer procurement formats? We can share a corporate brief
                template on request.
              </p>
            </div>

            {/* ------------------------------------------------- */}
            {/* SIDE PANEL */}
            {/* ------------------------------------------------- */}
            <div className="space-y-4">
              {/* Contact details */}
              <div className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Contact details
                </div>

                <div className="mt-4 grid gap-3 text-[13px] text-slate-700">
                  <div className="rounded-xl border border-black/5 bg-white/70 px-4 py-3">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </div>
                    <a
                      className="mt-1 block font-semibold text-slate-900"
                      href={`mailto:${EMAIL_TO}`}
                    >
                      {EMAIL_TO}
                    </a>
                  </div>

                  <div className="rounded-xl border border-black/5 bg-white/70 px-4 py-3">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      WhatsApp
                    </div>
                    <a
                      className="mt-1 block font-semibold text-slate-900"
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Message us
                    </a>
                    <div className="mt-1 text-[12px] text-slate-600">
                      Optional — email is recommended for full briefs.
                    </div>
                  </div>

                  <div className="rounded-xl border border-black/5 bg-white/70 px-4 py-3">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      Response time
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      Within 1 business day
                    </div>
                    <div className="mt-1 text-[12px] text-slate-600">
                      For urgent timelines, mention your event date at the top.
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate box */}
              <div className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Corporate &amp; enterprise
                </div>
                <p className="mt-2 text-[13px] text-slate-700">
                  If you’re planning a brand activation or hospitality
                  programme, our corporate page outlines delivery standards,
                  timelines and customisation options.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/corporate" className="btn-ghost">
                    View corporate
                  </Link>
                  <Link href="/services" className="btn-ghost">
                    Services
                  </Link>
                </div>
              </div>

              {/* Weddings box */}
              <div className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Weddings &amp; private celebrations
                </div>
                <p className="mt-2 text-[13px] text-slate-700">
                  For premium weddings, receptions and cultural events, our
                  weddings page covers styling, stations, timelines and bespoke
                  experience options.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/weddings" className="btn-ghost">
                    View weddings
                  </Link>
                  <Link href="/services" className="btn-ghost">
                    Services
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-10 grid gap-3">
            <FaqItem
              q="Do you work with procurement and approvals?"
              a="Yes. We are comfortable with approvals, NDAs, risk checks, brand guidelines and agency-led workflows."
            />
            <FaqItem
              q="Can you provide branded items?"
              a="Yes — we align artwork, confirm lead times, minimums and integrate everything into a cohesive build."
            />
            <FaqItem
              q="Do you travel nationwide?"
              a="Yes — we travel UK-wide for premium bookings. Logistics confirmed during planning."
            />
            <FaqItem
              q="Can you work under NDA?"
              a="Yes — we frequently work under NDA and internal compliance frameworks."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   FORM (client version)
========================================================= */

function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    guests: "",
    type: "",
    services: "",
    custom: "",
    notes: "",
  });

  const subject = "Elegance Occasion — Enquiry / Brief";

  const mailto = useMemo(() => {
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
      `Guest count: ${form.guests}`,
      `Service(s) required: ${form.services}`,
      "",
      "Brand / theme notes:",
      form.notes,
      "",
      "Customisation:",
      form.custom,
      "",
      "Thank you,",
      form.name,
    ];

    return `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [form]);

  const update =
    (field: keyof ContactFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

  return (
    <form
      className="mt-6 grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      {/* Row 1 */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="text-[12px] font-semibold text-slate-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="input-dark mt-2"
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
          />
        </div>
        <div>
          <label className="text-[12px] font-semibold text-slate-700" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            className="input-dark mt-2"
            placeholder="Company (optional)"
            value={form.company}
            onChange={update("company")}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="text-[12px] font-semibold text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="input-dark mt-2"
            placeholder="name@company.com"
            value={form.email}
            onChange={update("email")}
          />
        </div>
        <div>
          <label className="text-[12px] font-semibold text-slate-700" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            className="input-dark mt-2"
            placeholder="Optional"
            value={form.phone}
            onChange={update("phone")}
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="text-[12px] font-semibold text-slate-700" htmlFor="date">
            Event date
          </label>
          <input
            id="date"
            className="input-dark mt-2"
            placeholder="DD/MM/YYYY"
            value={form.date}
            onChange={update("date")}
          />
        </div>
        <div>
          <label className="text-[12px] font-semibold text-slate-700" htmlFor="location">
            City / Venue
          </label>
          <input
            id="location"
            className="input-dark mt-2"
            placeholder="e.g. London • Mayfair"
            value={form.location}
            onChange={update("location")}
          />
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="text-[12px] font-semibold text-slate-700" htmlFor="guests">
            Guest count
          </label>
          <input
            id="guests"
            className="input-dark mt-2"
            placeholder="e.g. 120"
            value={form.guests}
            onChange={update("guests")}
          />
        </div>
        <div>
          <label className="text-[12px] font-semibold text-slate-700" htmlFor="type">
            Event type
          </label>
          <input
            id="type"
            className="input-dark mt-2"
            placeholder="Corporate / Private"
            value={form.type}
            onChange={update("type")}
          />
        </div>
      </div>

      {/* Services */}
      <div>
        <label className="text-[12px] font-semibold text-slate-700" htmlFor="services">
          Services required 
        </label>
        <input
          id="services"
          className="input-dark mt-2"
          placeholder="Dessert stations, styling, cultural stations, etc."
          value={form.services}
          onChange={update("services")}
        />
      </div>

      {/* Customisation */}
      <div>
        <label className="text-[12px] font-semibold text-slate-700" htmlFor="custom">
          Customisation (optional)
        </label>
        <input
          id="custom"
          className="input-dark mt-2"
          placeholder="Branded cups, napkins/tissues, trays, signage..."
          value={form.custom}
          onChange={update("custom")}
        />
      </div>

      {/* Notes */}
      <div>
        <label className="text-[12px] font-semibold text-slate-700" htmlFor="notes">
          Notes / requirements
        </label>
        <textarea
          id="notes"
          className="input-dark mt-2 min-h-[120px]"
          placeholder="Timings, access, venue constraints, approvals, brand notes..."
          value={form.notes}
          onChange={update("notes")}
        />
      </div>

      <div className="mt-2 flex flex-wrap gap-3">
        <button type="submit" className="btn-gold">
          Open email with brief
        </button>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          WhatsApp (optional)
        </a>
      </div>
    </form>
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

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-black/5 bg-white/70 px-5 py-4 shadow-sm">
      <summary className="cursor-pointer">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-900">{q}</span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/70">
            +
          </span>
        </div>
      </summary>
      <div className="mt-3 text-[13px] leading-relaxed text-slate-700">{a}</div>
    </details>
  );
}
