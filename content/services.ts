/* =========================================================
   SERVICES CONTENT — Premium taxonomy
========================================================= */

export type Category =
  | "Corporate & Enterprise"
  | "Signature Stations & Experiences"
  | "Décor & Styling";

export type Audience =
  | "Corporate"
  | "Weddings"
  | "Mehndi/Nikkah"
  | "Birthdays"
  | "Private"
  | "Enterprise"
  | "VIP"
  | "Conferences"
  | "Awards"
  | "Launches";

export type Service = {
  slug: string;
  title: string;
  tagline: string;

  /** Primary grouping (where it lives on /services) */
  category: Category;

  /** Optional secondary placements */
  alsoIn?: Category[];

  /** Curated spotlight order for /services (1–4 = featured) */
  featuredRank?: number;

  /** Cross-listing */
  audiences?: Audience[];

  /** Optional extra descriptors for future filters/search */
  tags?: string[];

  highlights: string[];
  idealFor: string[];
  addOns: string[];

  // Optional media (add later)
  heroImage?: string;
  gallery?: string[];
};

export const services: Service[] = [
  /* =====================================================
     CORPORATE & ENTERPRISE
  ===================================================== */

  {
    slug: "corporate-experiences",
    title: "Corporate Experiences",
    tagline:
      "Polished, brand-first event experiences designed to impress stakeholders and scale smoothly.",
    category: "Corporate & Enterprise",
    featuredRank: 1,
    audiences: ["Corporate", "Enterprise", "Launches", "Awards"],
    tags: ["Brand-first", "Procurement-friendly", "On-site team"],
    highlights: [
      "Professional, uniformed on-site team",
      "Premium presentation designed for photography",
      "Runs to schedule — clean setup and pack-down",
      "Brief-led delivery (brand palette, guest flow, timing)",
    ],
    idealFor: ["Brand activations", "Client hosting", "Office events", "Launches"],
    addOns: [
      "Welcome drinks & mocktails",
      "360 photo booth",
      "Signature dessert station",
    ],
  },

  {
    slug: "canapes-bowl-food",
    title: "Canapés & Bowl Food",
    tagline:
      "A polished catering format — perfect for networking, receptions and corporate hospitality.",
    category: "Corporate & Enterprise",
    featuredRank: 2,
    audiences: ["Corporate", "Enterprise", "VIP", "Awards", "Launches"],
    tags: ["Networking-friendly", "Paced service"],
    highlights: [
      "Ideal for standing/networking events",
      "Professional service and pacing",
      "Premium menu presentation",
      "Designed around guest flow",
    ],
    idealFor: [
      "Corporate receptions",
      "Brand activations",
      "Awards nights",
      "VIP hosting",
    ],
    addOns: ["Welcome drinks & mocktails", "Table styling", "Welcome areas"],
  },

  {
    slug: "grazing-tables",
    title: "Charcuterie & Dessert Grazing Tables",
    tagline:
      "A visually striking food display designed for sharing and conversation.",
    category: "Corporate & Enterprise",
    featuredRank: 4,
    // Also reads like a “station” for browsing
    alsoIn: ["Signature Stations & Experiences"],
    audiences: ["Corporate", "Weddings", "Private", "VIP", "Launches"],
    tags: ["High visual impact", "Sharing format"],
    highlights: [
      "Styled grazing layouts",
      "Sweet & savoury options available",
      "Perfect for networking environments",
      "High visual impact for photography",
    ],
    idealFor: [
      "Corporate receptions",
      "Brand activations",
      "Weddings",
      "Private events",
    ],
    addOns: ["Welcome drinks & mocktails", "Canapés & bowl food", "Table styling"],
  },

   /* =====================================================
     SIGNATURE STATIONS & EXPERIENCES
  ===================================================== */

  {
    slug: "vintage-photo-booth",
    title: "Vintage Photo Booth",
    tagline:
      "An elegant, timeless booth experience — suited to luxury venues and premium corporate evenings.",
    category: "Signature Stations & Experiences",
    featuredRank: 2, // ⭐ Now 2
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Corporate", "Weddings", "Private", "Awards"],
    tags: ["Attendant-led", "Prints optional", "Luxury look"],
    highlights: [
      "Beautiful vintage-style booth aesthetic",
      "Attendant-led, smooth guest flow",
      "Prints + digital sharing (optional)",
      "Fits luxury venues and black-tie events",
    ],
    idealFor: ["Weddings", "Mehndi/Nikkah", "Awards nights", "Corporate parties"],
    addOns: ["Welcome areas", "Table styling", "Welcome drinks & mocktails"],
  },

  {
    slug: "360-photo-booth",
    title: "360 Photo Booth",
    tagline:
      "A high-impact, shareable content moment with a premium on-site presence.",
    category: "Signature Stations & Experiences",
    // ❌ remove featuredRank so it doesn't take a hero slot
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Corporate", "Private", "Awards", "Launches"],
    tags: ["Shareable content", "Attendant-led", "Brandable"],
    highlights: [
      "Attendant-led experience",
      "Shareable branded content moments",
      "Premium setup aesthetics",
      "Smooth guest flow management",
    ],
    idealFor: ["Awards nights", "Launch events", "Corporate parties", "Private events"],
    addOns: ["Branded welcome area", "Mocktail bar", "Dessert station"],
  },

  {
    slug: "welcome-drinks-mocktails",
    title: "Welcome Drinks & Mocktails",
    tagline:
      "A refined arrival experience — styled, staffed, and tailored to your theme or brand.",
    category: "Signature Stations & Experiences",
    // ❌ remove featuredRank so it doesn't take a hero slot
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Corporate", "Weddings", "Private", "Launches", "VIP"],
    tags: ["Arrival waves", "Brandable menus"],
    highlights: [
      "Premium styling and glassware presentation",
      "Fast service designed for arrival waves",
      "Optional branded menus and signage",
      "Works beautifully for VIP hosting",
    ],
    idealFor: ["Networking", "Corporate receptions", "Weddings", "Private dinners"],
    addOns: [
      "Canapés / catering",
      "Décor & styling",
      "Coffee / hot chocolate station",
    ],
  },

  {
    slug: "popcorn-cart",
    title: "Popcorn Cart",
    tagline: "Fresh popcorn served with a clean, premium presentation.",
    category: "Signature Stations & Experiences",
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Corporate", "Private", "Weddings", "Birthdays"],
    tags: ["Fast service", "Queue-friendly"],
    highlights: [
      "Freshly served for guests",
      "Fast service for queues",
      "Styled cart presentation",
      "Pairs seamlessly with photo experiences",
    ],
    idealFor: ["Corporate parties", "Brand activations", "Birthdays", "Weddings"],
    addOns: ["Vintage photo booth", "360 photo booth", "Candy floss"],
  },

  {
    slug: "luxury-chocolate-fountain",
    title: "Luxury Chocolate Fountain",
    tagline:
      "A showpiece dessert experience designed as a social focal point.",
    category: "Signature Stations & Experiences",
    featuredRank: 1, // ⭐ Hero #1
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Weddings", "Mehndi/Nikkah", "Corporate", "Private", "Birthdays"],
    tags: ["Showpiece", "Photo-moment"],
    highlights: [
      "Premium chocolate options",
      "Fully staffed delivery",
      "Styled station presentation",
      "Strong guest engagement",
    ],
    idealFor: ["Weddings", "Mehndi/Nikkah", "Birthdays", "Corporate hospitality"],
    addOns: ["Chocolate covered strawberries", "Sweet cart", "Mini pancake cart"],
  },

    {
    slug: "champagne-fountain-tower",
    title: "Champagne Fountain & Tower",
    tagline:
      "A statement champagne moment — perfect for launches, awards nights and luxury weddings.",
    category: "Signature Stations & Experiences",
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Corporate", "Enterprise", "Weddings", "VIP", "Awards", "Launches"],
    tags: ["Showpiece", "Drinks station", "Premium"],
    highlights: [
      "Champagne fountain or tiered tower with professional pour",
      "Glassware, styling and lighting matched to your event or brand",
      "Staffed service with controlled pours and guest flow",
      "Configurable for welcome moments, speeches or countdowns",
    ],
    idealFor: [
      "Brand launches and milestone celebrations",
      "Awards nights and premieres",
      "Luxury weddings and receptions",
      "VIP and board-level hosting",
    ],
    addOns: [
      "Mobile bar or mocktail bar",
      "Welcome drinks service",
      "Stage / backdrop & lighting",
    ],
  },


  {
    slug: "mini-dutch-pancake-cart",
    title: "Mini Dutch Pancake Cart",
    tagline:
      "Live-prepared mini pancakes with premium toppings and a refined presentation.",
    category: "Signature Stations & Experiences",
    featuredRank: 3, // ⭐ Hero #3
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Weddings", "Corporate", "Private", "Birthdays"],
    tags: ["Cooked live", "Fast service"],
    highlights: [
      "Cooked live for guests",
      "Premium toppings & finishes",
      "Elegant station styling",
      "Efficient service for large guest counts",
    ],
    idealFor: ["Weddings", "Private events", "Corporate", "Festive nights"],
    addOns: ["Chocolate fountain", "Coffee station", "Sweet cart"],
  },

  {
    slug: "soft-serve-ice-cream-cart",
    title: "Soft-Serve Ice Cream Cart",
    tagline:
      "A clean, modern dessert station — ideal for summer and indoor venues.",
    category: "Signature Stations & Experiences",
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Weddings", "Corporate", "Private", "Birthdays", "Launches"],
    tags: ["Summer", "Queue-friendly"],
    highlights: [
      "Modern cart aesthetic",
      "Served quickly for queues",
      "Theme-friendly presentation",
      "Optional premium toppings",
    ],
    idealFor: ["Weddings", "Summer events", "Brand events", "Private parties"],
    addOns: ["Candy floss", "Sweet cart", "Mocktail bar"],
  },

  {
    slug: "sweet-carts",
    title: "Sweet Carts",
    tagline: "Styled dessert displays tailored to your theme or brand.",
    category: "Signature Stations & Experiences",
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Weddings", "Mehndi/Nikkah", "Corporate", "Private", "Birthdays"],
    tags: ["Theme-matched", "Photo-ready"],
    highlights: [
      "Theme-matched styling",
      "Clean premium presentation",
      "Flexible sizing for venues",
      "Designed for photography",
    ],
    idealFor: ["Mehndi/Nikkah", "Birthdays", "Weddings", "Corporate"],
    addOns: ["Chocolate fountain", "Pancake cart", "Décor & styling"],
  },

  {
    slug: "candy-floss-cart",
    title: "Candy Floss Cart",
    tagline:
      "A nostalgic experience delivered with a clean, premium finish.",
    category: "Signature Stations & Experiences",
    featuredRank: 4, // ⭐ Hero #4
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Weddings", "Corporate", "Private", "Birthdays"],
    tags: ["Nostalgic", "Fast service"],
    highlights: [
      "Freshly spun for guests",
      "Fast service for busy events",
      "Styled cart presentation",
      "Strong visual appeal",
    ],
    idealFor: ["Weddings", "Birthdays", "Corporate events", "Private parties"],
    addOns: ["Popcorn cart", "Sweet carts", "Photo booths"],
  },

  {
    slug: "gol-gappe-pani-puri",
    title: "Gol Gappe (Pani Puri) Station",
    tagline:
      "An interactive flavour-led station with professional delivery.",
    category: "Signature Stations & Experiences",
    audiences: ["Mehndi/Nikkah", "Corporate", "Private", "Weddings"],
    tags: ["Interactive", "High engagement"],
    highlights: [
      "Interactive guest experience",
      "Professional service",
      "Clean setup and flow",
      "Pairs well with drinks and desserts",
    ],
    idealFor: ["Mehndi/Nikkah", "Private events", "Corporate hospitality"],
    addOns: ["Slush station", "Sweet cart", "Full décor styling"],
  },

  {
    slug: "slush-station",
    title: "Slush Station",
    tagline:
      "A refreshing drinks station for warm-weather and high-energy events.",
    category: "Signature Stations & Experiences",
    audiences: ["Mehndi/Nikkah", "Corporate", "Private", "Birthdays", "Weddings"],
    tags: ["Summer", "High-volume"],
    highlights: [
      "High-volume service",
      "Clean, modern setup",
      "Fully staffed delivery",
      "Vibrant guest experience",
    ],
    idealFor: ["Mehndi/Nikkah", "Birthdays", "Corporate", "Private events"],
    addOns: ["Mocktail bar", "Dessert stations", "Décor & styling"],
  },

  {
    slug: "tea-coffee-hot-chocolate-stand",
    title: "Tea / Coffee / Hot Chocolate Stand",
    tagline:
      "A refined warm drinks service — ideal for conferences and winter events.",
    category: "Signature Stations & Experiences",
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Corporate", "Conferences", "Weddings", "Private"],
    tags: ["Winter", "Arrival waves"],
    highlights: [
      "Premium warm drink presentation",
      "Ideal for conferences",
      "Smooth arrival service",
      "Pairs well with desserts",
    ],
    idealFor: ["Conferences", "Corporate", "Weddings", "Private events"],
    addOns: ["Dessert station", "Sweet cart", "Welcome area styling"],
  },

  {
    slug: "chocolate-covered-strawberries",
    title: "Chocolate Covered Strawberries",
    tagline:
      "Luxury dessert pieces designed for VIP tables and gifting.",
    category: "Signature Stations & Experiences",
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Weddings", "VIP", "Corporate", "Private"],
    tags: ["VIP add-on", "Gifting"],
    highlights: [
      "Premium presentation",
      "Ideal for VIP tables",
      "Theme-friendly styling",
      "Elegant add-on option",
    ],
    idealFor: ["Weddings", "VIP tables", "Corporate gifting", "Private events"],
    addOns: ["Chocolate fountain", "Sweet cart", "Mocktail bar"],
  },

  {
    slug: "mobile-bar",
    title: "Mobile Bar (Full / Custom)",
    tagline:
      "A premium mobile bar experience — fully staffed, beautifully styled, and tailored to your event or brand.",
    category: "Signature Stations & Experiences",
    // ❌ remove featuredRank so it doesn't take a hero slot
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Corporate", "Private", "Launches", "VIP"],
    tags: ["Full service bar", "Custom builds", "Brandable"],
    highlights: [
      "Full bar setup with professional bartenders",
      "Flexible menus tailored to your brief or audience",
      "Customisable bar front, menus and signage",
      "Designed for smooth guest flow and high-volume service",
    ],
    idealFor: [
      "Corporate hospitality",
      "Brand activations",
      "Private celebrations",
      "VIP areas",
    ],
    addOns: [
      "Custom glassware",
      "Branded cups / menus",
      "Décor & styling",
      "Mocktail or alcohol-free options",
    ],
  },

  {
    slug: "mocktail-bar",
    title: "Mocktail Bar",
    tagline:
      "Alcohol-free cocktails crafted fresh on-site — elegant, inclusive, and ideal for corporate hospitality.",
    category: "Signature Stations & Experiences",
    // ❌ remove featuredRank so it doesn't take a hero slot
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Corporate", "Weddings", "Private", "Launches"],
    tags: ["Alcohol-free", "Inclusive hosting", "Brand-friendly"],
    highlights: [
      "Freshly prepared mocktails with premium ingredients",
      "Stylish presentation with professional staffing",
      "Inclusive option for mixed or alcohol-free audiences",
      "Menus and styling tailored to your theme or brand",
    ],
    idealFor: [
      "Corporate receptions",
      "Daytime events",
      "Wellness-focused gatherings",
      "Brand activations",
    ],
    addOns: [
      "Branded menus & signage",
      "Custom cups or glassware",
      "Welcome drinks service",
      "Dessert or canapé pairing",
    ],
  },


  /* =====================================================
     DÉCOR & STYLING
  ===================================================== */

  {
    slug: "full-event-design",
    title: "Full Event Design",
    tagline:
      "Concept-to-delivery design — ideal for large builds and clients wanting one team managing the vision.",
    category: "Décor & Styling",
    featuredRank: 1,
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Enterprise", "Corporate", "Weddings", "VIP", "Awards", "Launches"],
    tags: ["One team", "Concept-to-delivery"],
    highlights: [
      "Full concept and styling direction",
      "Coordination across décor + catering + stations",
      "Timeline + flow planning",
      "Premium end-to-end delivery",
    ],
    idealFor: ["Enterprise", "Weddings", "High-end private", "Galas"],
    addOns: ["Corporate experiences", "Catering", "Welcome areas"],
  },

  {
    slug: "decor-styling",
    title: "Décor & Styling",
    tagline:
      "Cohesive styling that looks intentional in every frame — from corporate to luxury weddings.",
    category: "Décor & Styling",
    featuredRank: 2,
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Corporate", "Weddings", "Mehndi/Nikkah", "Private", "VIP"],
    tags: ["Theme-matched", "Photo-ready"],
    highlights: [
      "Theme / brand palette alignment",
      "Backdrops, tablescapes, staging and details",
      "Designed for photography and guest flow",
      "One-team delivery: setup → service → pack-down",
    ],
    idealFor: ["Weddings", "Mehndi/Nikkah", "Corporate", "VIP dinners"],
    addOns: ["Welcome area", "Catering", "Dessert stations"],
  },

  {
    slug: "welcome-areas",
    title: "Welcome Areas",
    tagline:
      "Entrance moments and reception styling — refined, photo-ready, and brandable.",
    category: "Décor & Styling",
    featuredRank: 4,
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Corporate", "Weddings", "Private", "Launches"],
    tags: ["First impression", "Brandable"],
    highlights: [
      "First impression styling",
      "Brandable signage options",
      "Premium reception setup",
      "Clean guest flow design",
    ],
    idealFor: ["Corporate", "Weddings", "Private", "Launches"],
    addOns: ["Welcome drinks", "360 booth", "Full décor styling"],
  },

  {
    slug: "floral-stage-backdrops",
    title: "Floral & Stage Backdrops",
    tagline:
      "Statement backdrops and stage builds — designed to photograph beautifully and elevate the whole room.",
    category: "Décor & Styling",
    featuredRank: 3,
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Weddings", "Mehndi/Nikkah", "Corporate", "Launches"],
    tags: ["Stage build", "Brand wall"],
    highlights: [
      "Luxury backdrop builds (photo-ready)",
      "Theme and colour palette matched",
      "Great for brand walls / step-and-repeat",
      "Setup and pack-down managed end-to-end",
    ],
    idealFor: ["Weddings", "Mehndi/Nikkah", "Corporate", "Launches"],
    addOns: ["Welcome areas", "Table styling", "360 photo booth"],
  },

  {
    slug: "candle-centrepiece-styling",
    title: "Candle & Centre-Piece Styling",
    tagline: "Elegant table styling designed to elevate the entire room.",
    category: "Décor & Styling",
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Weddings", "Corporate", "VIP", "Private"],
    tags: ["Ambience", "Tablescapes"],
    highlights: [
      "Luxury candle arrangements",
      "Modern & classic centre-piece options",
      "Styled to match theme or brand palette",
      "Designed for photography & ambience",
    ],
    idealFor: ["Weddings", "Mehndi/Nikkah", "Corporate dinners", "VIP events"],
    addOns: ["Table styling", "Floral & stage backdrops", "Welcome areas"],
  },

  {
    slug: "table-styling",
    title: "Table Styling",
    tagline:
      "Premium tablescapes designed for photography, comfort, and elegance.",
    category: "Décor & Styling",
    alsoIn: ["Corporate & Enterprise"],
    audiences: ["Weddings", "Corporate", "VIP", "Private"],
    tags: ["Tablescapes", "Luxury finish"],
    highlights: [
      "Clean, intentional tablescape design",
      "Matches theme / brand palette",
      "Photo-ready detail work",
      "Luxury finish and consistency",
    ],
    idealFor: ["Weddings", "VIP dinners", "Corporate", "Private"],
    addOns: ["Full décor styling", "Welcome area", "Dessert stations"],
  },

  {
    slug: "dance-floor-staging",
    title: "Dance Floor & Staging",
    tagline:
      "Professional staging and dance floors for seamless event flow and impact.",
    category: "Décor & Styling",
    audiences: ["Weddings", "Corporate", "Awards", "Private"],
    tags: ["Venue-compliant", "Stage build"],
    highlights: [
      "Clean, professional staging builds",
      "Ideal for speeches, performances & first dances",
      "Corporate-safe & venue-compliant setups",
      "Installed and removed by our team",
    ],
    idealFor: ["Weddings", "Corporate events", "Awards nights", "Private parties"],
    addOns: ["Lighting", "Floral backdrops", "Audio/visual setups"],
  },

  {
    slug: "event-lighting-design",
    title: "Event Lighting Design",
    tagline:
      "Atmospheric lighting that transforms spaces and elevates every detail.",
    category: "Décor & Styling",
    audiences: ["Corporate", "Weddings", "Awards", "Private"],
    tags: ["Atmosphere", "Feature lighting"],
    highlights: [
      "Ambient, stage and feature lighting",
      "Designed to enhance décor and staging",
      "Corporate-safe and venue compliant",
      "Installed and removed by our team",
    ],
    idealFor: ["Corporate events", "Weddings", "Awards nights", "Private events"],
    addOns: ["Dance floor & staging", "Floral backdrops", "Full event design"],
  },

  {
  slug: "cinderella-lighting",
  title: "Cinderella Lighting",
  tagline:
    "A fairytale lighting transformation — soft, romantic, and designed to make the room feel magical.",
  category: "Décor & Styling",
  alsoIn: ["Corporate & Enterprise"],
  audiences: ["Weddings", "Mehndi/Nikkah", "Private", "VIP", "Awards"],
  tags: ["Fairytale", "Romantic lighting", "Transformational"],
  highlights: [
    "Soft ambient lighting that transforms the entire room",
    "Designed to enhance florals, stages and tablescapes",
    "Warm, flattering light for photography and film",
    "Installed and programmed by our in-house team",
  ],
  idealFor: [
    "Luxury weddings and receptions",
    "Mehndi / Nikkah evenings",
    "Romantic venues and marquees",
    "VIP and high-end private events",
  ],
  addOns: [
    "Floral & stage backdrops",
    "Candle & centre-piece styling",
    "Dance floor & staging",
    "Full event design",
  ],
},

  {
    slug: "kids-corner-soft-play",
    title: "Kids Corner & Soft Play Styling",
    tagline:
      "A thoughtfully designed children’s area that blends seamlessly into your event.",
    category: "Décor & Styling",
    audiences: ["Weddings", "Birthdays", "Private"],
    tags: ["Family-friendly", "Styled"],
    highlights: [
      "Soft play & activity zones",
      "Styled to match your event theme",
      "Keeps younger guests engaged",
      "Clean, safe and professionally set up",
    ],
    idealFor: ["Weddings", "Family events", "Birthdays", "Private functions"],
    addOns: ["Balloon styling", "Table décor", "Dessert stations"],
  },
];

/* =========================================================
   HELPERS
========================================================= */

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Category grouping with alsoIn support (what your /services page should use) */
export function getServicesForCategory(category: Category) {
  return services.filter(
    (s) => s.category === category || s.alsoIn?.includes(category),
  );
}

/** Primary category only (useful if you ever need strict canonical grouping) */
export function getServicesByCategory(category: Category) {
  return services.filter((s) => s.category === category);
}

export function getServicesByAudience(audience: Audience) {
  return services.filter((s) => s.audiences?.includes(audience));
}

/**
 * Related = same primary category first, then shared audiences/tags,
 * with alsoIn considered as a “soft” category match.
 */
export function getRelatedServices(slug: string) {
  const current = getService(slug);
  if (!current) return [];

  const currentCats = new Set<Category>([
    current.category,
    ...(current.alsoIn ?? []),
  ]);

  const byCategory = services
    .filter((s) => s.slug !== slug)
    .filter((s) => {
      const sCats = [s.category, ...(s.alsoIn ?? [])];
      return sCats.some((c) => currentCats.has(c));
    });

  const currentAud = new Set(current.audiences ?? []);
  const currentTags = new Set(current.tags ?? []);

  const bySignals = services
    .filter((s) => s.slug !== slug)
    .filter((s) => !byCategory.some((x) => x.slug === s.slug))
    .filter((s) => {
      const audHit = (s.audiences ?? []).some((a) => currentAud.has(a));
      const tagHit = (s.tags ?? []).some((t) => currentTags.has(t));
      return audHit || tagHit;
    });

  // keep it clean: category matches first, then signal matches
  return [...byCategory, ...bySignals].slice(0, 4);
}
