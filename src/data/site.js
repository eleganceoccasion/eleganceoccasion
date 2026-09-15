// Single source of truth for site-wide configuration: contact channels,
// navigation, event types and asset helpers. Imported by every page and
// shared component so contact details never drift.

// Original assets are now served from project storage (public/) so the app
// no longer depends on the old domain. Paths keep their original encoding
// (e.g. "/gallery/Gol%20Gappe.png"); Vite decodes and serves the local file.
export const asset = (path) => path;

export const LOGO_URL = asset("/brand/elegance-logo.png");

// Exact contact configuration — kept separate and used consistently.
export const CONTACT = {
  whatsapp: {
    display: "+44 7932 802236",
    destination: "https://wa.me/447932802236",
  },
  phone: {
    display: "+44 7380 809766",
    destination: "tel:+447380809766", // dials 07380 809766
  },
  email: {
    display: "enquiries@eleganceoccasion.co.uk",
    destination: "mailto:enquiries@eleganceoccasion.co.uk",
  },
};

export const TAGLINE = "Our Elegance, Your Occasion";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Weddings", to: "/weddings" },
  { label: "Corporate", to: "/corporate" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const EVENT_TYPES = [
  "Wedding",
  "Birthday",
  "Corporate Event",
  "Prom",
  "Private Party",
  "Baby Shower",
  "Engagement",
  "Mehndi",
  "Anniversary",
  "Graduation",
  "Festival",
  "Launch Event",
  "Other",
];

export const GUEST_PRESETS = [50, 100, 150, 200, 300, 500];

// Build a WhatsApp enquiry URL from the current event details + selections.
// The customer reviews and sends the message inside WhatsApp — the site
// never implies it has already been sent or that a booking is secured.
export function buildWhatsAppUrl({ eventType, date, city, guests, services, notes }) {
  const lines = [
    "Hello Elegance Occasion,",
    "",
    "I'd like to enquire about an event and would appreciate a tailored proposal.",
    "",
    `Event type: ${eventType || "-"}`,
    `Date: ${date || "To be confirmed"}`,
    `City / Venue: ${city || "To be confirmed"}`,
    `Guests: ${guests || "-"}`,
    `Selected experiences: ${services && services.length ? services.join(", ") : "General enquiry"}`,
  ];
  if (notes && notes.trim()) {
    lines.push(`Notes: ${notes.trim()}`);
  }
  lines.push("", "Please confirm availability and share pricing. Thank you.");
  const text = lines.join("\n");
  return `${CONTACT.whatsapp.destination}?text=${encodeURIComponent(text)}`;
}

// Build a mailto: enquiry URL (honestly labelled "Open in email").
export function buildEmailUrl({ eventType, date, city, guests, services, notes }) {
  const subject = "Elegance Occasion — Enquiry";
  const body = [
    "Hello Elegance Occasion,",
    "",
    "I would like to enquire about availability and pricing.",
    "",
    `Event type: ${eventType || "-"}`,
    `Date: ${date || "To be confirmed"}`,
    `City / Venue: ${city || "To be confirmed"}`,
    `Guests: ${guests || "-"}`,
    `Selected experiences: ${services && services.length ? services.join(", ") : "General enquiry"}`,
  ];
  if (notes && notes.trim()) {
    body.push(`Notes: ${notes.trim()}`);
  }
  body.push("", "Thank you,");
  return `${CONTACT.email.destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.join("\n"))}`;
}