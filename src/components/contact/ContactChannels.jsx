import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/data/site";

// A quiet, centered row of contact channels beneath the form — the only
// secondary element on the page, kept as small pills so nothing competes
// with the enquiry builder.
const CHANNELS = [
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsapp.display, href: CONTACT.whatsapp.destination, external: true },
  { icon: Phone, label: "Call", value: CONTACT.phone.display, href: CONTACT.phone.destination, external: false },
  { icon: Mail, label: "Email", value: CONTACT.email.display, href: CONTACT.email.destination, external: false },
];

export default function ContactChannels() {
  return (
    <div className="mt-16 border-t border-hair pt-10">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/35">
        Or reach us directly
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {CHANNELS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2.5 rounded-full border border-hair px-5 py-2.5 text-sm text-ink/70 transition-colors hover:border-ink/50 hover:text-ink"
          >
            <c.icon className="h-4 w-4" />
            <span className="font-medium">{c.label}</span>
            <span className="text-ink/45">{c.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}