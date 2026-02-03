"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Category =
  | "All"
  | "Corporate"
  | "Weddings"
  | "Mehndi"
  | "Décor"
  | "Food & Drinks"
  | "Experiences";

type GalleryItem = {
  src: string;
  title: string;
  subtitle?: string;
  category: Category;
  type: "image" | "video";
};

const galleryItems: GalleryItem[] = [
  /* =======================================================
     HERO MOMENTS – WEDDING & CORPORATE OVERVIEW
  ======================================================== */
  {
    src: "/gallery/hero-1.jpg",
    title: "Wedding set-ups",
    subtitle:
      "Cohesive styling, dessert stations and guest areas designed as one story.",
    category: "Weddings",
    type: "image",
  },
  {
    src: "/gallery/corporatesetup.jpg",
    title: "Corporate set-ups",
    subtitle:
      "Polished hospitality build for leadership, clients and key stakeholders.",
    category: "Corporate",
    type: "image",
  },

  /* =======================================================
     SIGNATURE CARTS & STATIONS – MAIN FOCUS
  ======================================================== */

    {
    src: "/gallery/photoboothclose.png",
    title: "Photobooth",
    subtitle: "Detail shot of the booth styling and finish.",
    category: "Experiences",
    type: "image",
  },
  
  {
    src: "/gallery/fountain.png",
    title: "Luxury chocolate fountain",
    subtitle: "Showpiece dessert station with curated dipping menu.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/champagnecart.png",
    title: "Champagne cart & tower",
    subtitle: "Champagne fountain/tower styled for premium events.",
    category: "Experiences",
    type: "image",
  },
  {
    src: "/gallery/charcuteriecart.png",
    title: "Charcuterie cart",
    subtitle: "Grazing-style charcuterie with layered presentation.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/canapes.png",
    title: "Canapés service",
    subtitle: "Handed canapés styled for corporate & private events.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/desserttable.png",
    title: "Dessert table",
    subtitle: "Structured dessert layout designed around guest flow.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/welcomedrinks.png",
    title: "Welcome drinks",
    subtitle: "Selection of drinks to start the perfect event",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/chocolatestrawberries.png",
    title: "Chocolate covered strawberries",
    subtitle: "Luxury dessert pieces for VIP tables & gifting.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/pancakes.png",
    title: "Mini pancake stacks",
    subtitle: "Close-up of live-prepared mini Dutch pancakes.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/foodbowl.png",
    title: "Food bowls & small plates",
    subtitle: "Guest-friendly portions with premium plating.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/meatselection.png",
    title: "Meat selection",
    subtitle: "High-quality cuts styled for service and photography.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/coffeecart.png",
    title: "Coffee cart",
    subtitle: "Barista-style coffee service with premium presentation.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/hotchocolatecart.png",
    title: "Hot chocolate cart",
    subtitle: "Winter-friendly warm drinks with styled toppings.",
    category: "Food & Drinks",
    type: "image",
  },

  /* =======================================================
     SLUSH & COLD DRINKS – DETAIL + BRANDING
  ======================================================== */
  {
    src: "/gallery/slushbrand.png",
    title: "Slush station branding",
    subtitle: "Branded station fascia for campaign work.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/slushcup.png",
    title: "Slush cup detail",
    subtitle: "Close-up shot ready for socials & campaigns.",
    category: "Food & Drinks",
    type: "image",
  },
  {
    src: "/gallery/slushcloseup.jpg",
    title: "Slush service close-up",
    subtitle: "Vibrant product shot with branded garnish.",
    category: "Food & Drinks",
    type: "image",
  },

  /* =======================================================
     FUN CARTS & PHOTO EXPERIENCES – WIDE + CLOSE-UP
  ======================================================== */
  {
    src: "/gallery/popcorncart.png",
    title: "Popcorn cart",
    subtitle: "Fresh popcorn with styled cart presentation.",
    category: "Experiences",
    type: "image",
  },
  {
    src: "/gallery/closeuppopcorn.png",
    title: "Popcorn close-up",
    subtitle: "Detail shot ready for campaigns and socials.",
    category: "Experiences",
    type: "image",
  },
  {
    src: "/gallery/candyflosscart.png",
    title: "Candy floss cart",
    subtitle: "Nostalgic station with a clean, modern finish.",
    category: "Experiences",
    type: "image",
  },
  {
    src: "/gallery/photobooth.png",
    title: "Photobooth",
    subtitle: "Content-first booth setups for guests and teams.",
    category: "Experiences",
    type: "image",
  },

  {
    src: "/gallery/photostrip.png",
    title: "Photo strip output",
    subtitle: "Printed keepsakes tailored to your event branding.",
    category: "Experiences",
    type: "image",
  },
  {
    src: "/gallery/360boothconcept.png",
    title: "360 booth concept visual",
    subtitle: "Concept layout for brand-first content moments.",
    category: "Experiences",
    type: "image",
  },
  {
    // note the %20 to safely reference the file with a space in its name
    src: "/gallery/Gol%20Gappe.png",
    title: "Gol Gappa (Pani Puri) station",
    subtitle: "Interactive, flavour-led station guests gather around.",
    category: "Mehndi",
    type: "image",
  },

  /* =======================================================
     VIDEO CLIPS – MOTION PROOF
  ======================================================== */
  {
    src: "/gallery/pancakecart.mp4",
    title: "Mini pancake cart service",
    subtitle: "High-interaction dessert station in action.",
    category: "Food & Drinks",
    type: "video",
  },
  {
    src: "/gallery/mocktailvid.mp4",
    title: "Mocktail bar service",
    subtitle: "Branded glassware, garnish and polished delivery.",
    category: "Food & Drinks",
    type: "video",
  },
  {
    src: "/gallery/golgappestation.mp4",
    title: "Gol Gappa station in motion",
    subtitle: "Live service moment from a mehndi event.",
    category: "Mehndi",
    type: "video",
  },

    {
    src: "/gallery/stage1.mp4",
    title: "Stage lighting build",
    subtitle: "Atmospheric lighting and staging in action.",
    category: "Décor",
    type: "video",
  },
  {
    src: "/gallery/stage2.mp4",
    title: "Stage & backdrop reveal",
    subtitle: "Layered lighting designed for impact and photography.",
    category: "Décor",
    type: "video",
  },
  {
    src: "/gallery/stage3.mp4",
    title: "Evening stage ambience",
    subtitle: "Soft, cinematic lighting transformation.",
    category: "Décor",
    type: "video",
  },

{
  src: "/gallery/stage5.mp4",
  title: "Dessert table presentation",
  subtitle: "Styled dessert table with layered layout and guest flow.",
  category: "Food & Drinks",
  type: "video",
},

  {
    src: "/gallery/willows.mp4",
    title: "Wedding setup",
    subtitle: "Romantic lighting and décor at a luxury venue.",
    category: "Weddings",
    type: "video",
  },
  {
    src: "/gallery/package.mp4",
    title: "Signature event package",
    subtitle: "A complete experience — styling, stations and service.",
    category: "Experiences",
    type: "video",
  },

  /* =======================================================
     DÉCOR, WEDDING & CORPORATE ENVIRONMENTS
  ======================================================== */
  {
    src: "/gallery/weddingdecor.jpg",
    title: "Wedding décor styling",
    subtitle: "Soft, layered styling designed for photography.",
    category: "Weddings",
    type: "image",
  },
  {
    src: "/gallery/mehndidecor.jpg",
    title: "Mehndi décor & backdrop",
    subtitle: "Vibrant, photo-ready styling for pre-wedding events.",
    category: "Mehndi",
    type: "image",
  },
  {
    src: "/gallery/decorbuild.png",
    title: "Décor build & styling",
    subtitle: "Immersive backdrop and staging for photo moments.",
    category: "Décor",
    type: "image",
  },
  {
    src: "/gallery/corporateevent.jpg",
    title: "Corporate hospitality bar",
    subtitle: "Branded bar and service point for premium receptions.",
    category: "Corporate",
    type: "image",
  },
  {
    src: "/gallery/corporateevent2.jpg",
    title: "Welcome area",
    subtitle: "Clean, modern presentation for leadership events.",
    category: "Corporate",
    type: "image",
  },
];

const FILTERS: Category[] = [
  "All",
  "Corporate",
  "Weddings",
  "Mehndi",
  "Décor",
  "Food & Drinks",
  "Experiences",
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--foreground)]">
      {/* Top band / header */}
      <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-white/70 via-[rgba(200,169,74,0.10)] to-white/60">
        <div className="pointer-events-none absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[170px] opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
            Gallery
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Recent builds, stations &amp; experiences
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
            A curated look at how Elegance Occasion shows up in the room — from
            corporate hospitality and brand-led builds to weddings, mehndi
            events and private celebrations.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-600">
            <span className="pill bg-white/70">
              Styled, staffed and production-ready
            </span>
          </div>
        </div>
      </section>

      {/* Filter bar + grid */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={
                    "rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition " +
                    (isActive
                      ? "bg-[rgba(200,169,74,0.18)] text-slate-900 ring-1 ring-[rgba(200,169,74,0.40)]"
                      : "bg-white/80 text-slate-600 ring-1 ring-black/5 hover:bg-white")
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <GalleryCard key={item.src} item={item} />
            ))}
          </div>

          {/* Footer copy */}
          <div className="mt-10 rounded-2xl border border-black/5 bg-white/70 p-5 text-[13px] text-slate-700 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <div className="text-sm font-semibold text-slate-900">
              Planning a brand, corporate or private event?
            </div>
            <p className="mt-1">
              These images and clips show the standard we bring to corporate
              hospitality, launches, offsites and private events. We&apos;ll
              align styling, signage and service to your brand and audience.
            </p>
            <p className="mt-2 text-[11px] text-slate-600">
              Share your brief and we&apos;ll reply with availability, a tailored
              concept and clear next steps.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold text-xs sm:text-sm">
                Discuss a project
              </Link>
              <Link href="/" className="btn-ghost text-xs sm:text-sm">
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   CARD COMPONENT
========================================================= */

function GalleryCard({ item }: { item: GalleryItem }) {
  const isVideo = item.type === "video";

  return (
    <article className="group overflow-hidden rounded-[26px] border border-black/5 bg-white/70 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="relative aspect-[4/3]">
        {isVideo ? (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}

        {/* gradient overlay + play hint for video */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-90" />

        {isVideo && (
          <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
            Video
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-3 px-4 pb-4 pt-3">
        <div className="min-w-0">
          <div className="line-clamp-1 text-sm font-semibold text-slate-900">
            {item.title}
          </div>
          {item.subtitle && (
            <div className="mt-1 line-clamp-2 text-[11px] leading-snug text-slate-600">
              {item.subtitle}
            </div>
          )}
        </div>

        <span className="shrink-0 rounded-full bg-slate-900/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
          {item.category}
        </span>
      </div>
    </article>
  );
}
