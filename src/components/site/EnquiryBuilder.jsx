import React, { useState } from "react";
import { MessageCircle, Mail, Copy, Check, X } from "lucide-react";
import { useEnquiry } from "./EnquiryProvider";
import { EVENT_TYPES, GUEST_PRESETS, buildWhatsAppUrl, buildEmailUrl } from "@/data/site";
import { getServiceById } from "@/data/services";

// A calm, Apple-style enquiry builder — generous whitespace, refined serif
// heading, hairline inputs and a quiet summary card. All logic is preserved
// exactly: the primary action opens WhatsApp with a readable message the
// customer reviews and sends; email and copy fallbacks are retained.
//
// `bare` renders the form + summary as a single stacked column with no
// section wrapper, for embedding inside a split layout (e.g. Contact).
export default function EnquiryBuilder({ id = "build", heading = "Tell us about your occasion", intro = "", bare = false }) {
  const { selectedIds, removeService, clearServices, eventDetails, setEventDetail } = useEnquiry();
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedServices = selectedIds.map(getServiceById).filter(Boolean);
  const serviceNames = selectedServices.map((s) => s.name);

  const hasAnyDetail =
    eventDetails.eventType || eventDetails.date || eventDetails.city || eventDetails.guests || selectedIds.length > 0;

  const waUrl = buildWhatsAppUrl({
    eventType: eventDetails.eventType,
    date: eventDetails.date,
    city: eventDetails.city,
    guests: eventDetails.guests,
    services: serviceNames,
    notes,
  });
  const emailUrl = buildEmailUrl({
    eventType: eventDetails.eventType,
    date: eventDetails.date,
    city: eventDetails.city,
    guests: eventDetails.guests,
    services: serviceNames,
    notes,
  });

  const handleWhatsApp = (e) => {
    if (!hasAnyDetail) {
      e.preventDefault();
      setError("Add at least one detail — an event type, date, city, guest count, or a selected experience — so we can help.");
      return;
    }
    setError("");
  };

  const handleCopy = async () => {
    const text = decodeURIComponent(waUrl.split("text=")[1] || "");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Couldn't copy automatically — please copy the message manually.");
    }
  };

  const inputCls =
    "w-full rounded-xl border border-hair bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink/30 focus:border-ink/70";

  const formBlock = (
    <div>
      <h2
        className="font-heading text-ink"
        style={{ fontSize: bare ? "clamp(1.6rem, 3vw, 2.1rem)" : "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.02em" }}
      >
        {heading}
      </h2>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/50" style={{ lineHeight: 1.65 }}>
        {intro || "Share a few details and send everything to WhatsApp in one tap — we'll reply with availability and a tailored quote."}
      </p>

      <div className="mt-10 space-y-8">
        <Field label="Event type">
          <select
            value={eventDetails.eventType}
            onChange={(e) => setEventDetail("eventType", e.target.value)}
            className={inputCls}
          >
            <option value="">Select event type</option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>

        <div className="grid gap-8 sm:grid-cols-2">
          <Field label="Event date" hint="Undecided is fine">
            <input
              type="date"
              value={eventDetails.date}
              onChange={(e) => setEventDetail("date", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="City / Venue" hint="TBC is fine">
            <input
              type="text"
              value={eventDetails.city}
              onChange={(e) => setEventDetail("city", e.target.value)}
              placeholder="e.g. London"
              className={inputCls}
            />
          </Field>
        </div>

        <Field label="Estimated guests" hint="Manual entry, presets, or 500+">
          <input
            type="number"
            min="1"
            value={eventDetails.guests}
            onChange={(e) => setEventDetail("guests", e.target.value)}
            placeholder="~120"
            className={inputCls}
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {GUEST_PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setEventDetail("guests", String(p))}
                className="rounded-full border border-hair bg-white px-3.5 py-1.5 text-xs font-medium text-ink/55 transition-colors hover:border-ink/60 hover:text-ink"
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setEventDetail("guests", "500+")}
              className="rounded-full border border-hair bg-white px-3.5 py-1.5 text-xs font-medium text-ink/55 transition-colors hover:border-ink/60 hover:text-ink"
            >
              500+
            </button>
          </div>
        </Field>

        <Field label="Notes & requirements (optional)">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Tell us about your vision, timings, cultural elements, branding…"
            className={`${inputCls} resize-none`}
          />
        </Field>
      </div>
    </div>
  );

  const summaryBlock = (
    <div className={bare ? "" : "lg:pt-2"}>
      <div className="rounded-2xl border border-hair bg-white p-7 shadow-[0_2px_24px_rgba(27,23,21,0.05)] lg:p-9">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">Your enquiry</h3>
        <dl className="mt-5 divide-y divide-hair">
          <SummaryRow label="Event" value={eventDetails.eventType || "Not selected"} />
          <SummaryRow label="Date" value={eventDetails.date || "To be confirmed"} />
          <SummaryRow label="City / Venue" value={eventDetails.city || "To be confirmed"} />
          <SummaryRow label="Guests" value={eventDetails.guests || "—"} />
        </dl>

        <div className="mt-6 pt-6" style={{ borderTop: "1px solid #E5E5E7" }}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
            Selected experiences ({selectedIds.length})
          </p>
          {selectedIds.length === 0 ? (
            <p className="mt-2.5 text-sm text-ink/45">No experiences selected yet — a general enquiry is welcome.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {selectedServices.map((s) => (
                <li key={s.id} className="flex items-center justify-between gap-3 rounded-lg bg-surface px-3 py-2.5">
                  <span className="text-sm font-medium text-ink">{s.name}</span>
                  <button
                    type="button"
                    onClick={() => removeService(s.id)}
                    aria-label={`Remove ${s.name}`}
                    className="rounded-full p-1 text-ink/40 transition hover:bg-white hover:text-ink"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {selectedIds.length > 0 && (
            <button
              type="button"
              onClick={clearServices}
              className="mt-3 text-xs font-medium text-ink/45 underline-offset-4 transition hover:text-ink hover:underline"
            >
              Clear all
            </button>
          )}
        </div>

        {error && (
          <p role="alert" className="mt-5 rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="mt-8 space-y-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleWhatsApp}
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.18)] transition-transform hover:scale-[1.01]"
          >
            <MessageCircle className="h-5 w-5" />
            Send enquiry on WhatsApp
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={emailUrl}
              className="flex items-center justify-center gap-2 rounded-full border border-hair px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/60 hover:bg-surface"
            >
              <Mail className="h-4 w-4" /> Open in email
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 rounded-full border border-hair px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/60 hover:bg-surface"
            >
              {copied ? <Check className="h-4 w-4 text-gold" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy enquiry"}
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] leading-relaxed text-ink/40">
          No account needed · You review and send · Final scope and pricing confirmed in a tailored proposal
        </p>
      </div>
    </div>
  );

  if (bare) {
    return (
      <div id={id} className="scroll-mt-24">
        {formBlock}
        <div className="mt-10">{summaryBlock}</div>
      </div>
    );
  }

  return (
    <section id={id} className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-site px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          {formBlock}
          {summaryBlock}
        </div>
      </div>
    </section>
  );
}

function Field({ label, hint = "", children }) {
  return (
    <div>
      <div className="mb-2.5 flex items-center justify-between">
        <label className="text-[13px] font-semibold text-ink">{label}</label>
        {hint && <span className="text-[11px] text-ink/35">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <dt className="text-sm text-ink/45">{label}</dt>
      <dd className="text-right text-sm font-medium text-ink">{value}</dd>
    </div>
  );
}