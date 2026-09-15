// Wedding & event collections — preserved from the existing site with their
// selection rules and optional extras. Starting points, not fixed prices.

export const WEDDING_COLLECTIONS = [
  {
    id: "essentials",
    name: "Essentials Collection",
    pitch: "Perfect for intimate weddings and mehndi evenings.",
    rule: "Any 2 Signature Stations & Experiences",
    badge: "Popular",
    blurb:
      "A beautifully balanced setup with one main feature and one complementary touchpoint.",
    options: [
      "Mini Pancake Cart or Chocolate Fountain",
      "Candy Floss Cart",
      "Slush Station",
      "Popcorn Cart",
      "Sweet Cart",
      "360 Photo Booth",
    ],
    optionalExtras: ["Gol Gappa (Pani Puri)"],
  },
  {
    id: "signature",
    name: "Signature Collection",
    pitch: "Our most booked option for full receptions and larger mehndi events.",
    rule: "Any 3 Signature Stations & Experiences",
    badge: "Most requested",
    blurb:
      "Built for busy, high-energy evenings where you want guests moving and exploring.",
    options: [
      "Chocolate Fountain",
      "Mini Pancake Cart",
      "Candy Floss Cart",
      "Slush Station",
      "Sweet Carts",
      "360 Photo Booth",
      "Vintage Photo Booth",
      "Gol Gappa (Pani Puri)",
    ],
    optionalExtras: ["Soft-Serve Ice Cream Cart", "Champagne Fountain & Tower"],
  },
  {
    id: "grand",
    name: "Grand Experience",
    pitch: "For premium venues, tiered spaces and high-impact evenings.",
    rule: "4+ Signature Stations & Experiences",
    badge: "Full experience",
    blurb:
      "Best for large venues, multi-room builds or when you want the experience to feel truly immersive.",
    options: [
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
    ],
    optionalExtras: ["Champagne Fountain & Tower"],
  },
];

export const WEDDING_PROCESS = [
  { step: "01", title: "Discovery & proposal", body: "We capture your date, venue, guest count, cultural elements and desired stations, then return a structured proposal." },
  { step: "02", title: "Layouts & timings", body: "We map station locations, power/water needs and service windows around your ceremony and reception timings." },
  { step: "03", title: "Run-sheet & staffing", body: "Named on-site lead, staffing plan and setup/pack-down timings coordinated with your planner or venue." },
  { step: "04", title: "On-the-day delivery", body: "We manage arrival, build, service and handover — you and your family stay out of the logistics." },
];

export const CORPORATE_PROCESS = [
  { step: "01", title: "Brief-led planning", body: "We start with objectives, audience, constraints and success measures — not a pre-set package." },
  { step: "02", title: "Brand alignment", body: "Visuals, materials, service style and guest flow aligned to your guidelines and venue." },
  { step: "03", title: "Professional execution", body: "Structured setup, punctual schedules, uniformed staff and clean pack-down." },
];