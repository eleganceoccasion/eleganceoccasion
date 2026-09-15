import React, { useState, useMemo, useEffect } from "react";
import { Play } from "lucide-react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "@/data/gallery";
import Lightbox from "@/components/site/Lightbox";

// Gallery — the work itself is the page. Compact title, subtle filters,
// larger images, minimal labels and deliberate portrait/landscape
// proportions. All media is accessible with a working lightbox, keyboard
// navigation and actual video playback.
export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === active)),
    [active]
  );

  useEffect(() => {
    if (lightboxIndex != null && lightboxIndex >= filtered.length) setLightboxIndex(null);
  }, [filtered.length, lightboxIndex]);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const navigate = (i) => setLightboxIndex(i);

  // Deliberate varied proportions for an editorial rhythm.
  const aspect = (i) => {
    const m = i % 6;
    if (m === 0) return "aspect-[4/5]";
    if (m === 1) return "aspect-[4/3]";
    if (m === 2) return "aspect-[3/4]";
    if (m === 3) return "aspect-[1/1]";
    if (m === 4) return "aspect-[5/4]";
    return "aspect-[4/3]";
  };

  return (
    <>
      {/* Compact title */}
      <section className="bg-white">
        <div className="mx-auto max-w-site px-6 pt-20 lg:px-8 lg:pt-28">
          <h1
            className="font-heading text-ink"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.02, fontWeight: 600, letterSpacing: "-0.03em" }}
          >
            Gallery
          </h1>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-site px-6 pb-20 pt-8 lg:px-8 lg:pb-28 lg:pt-10">
          <nav className="flex flex-wrap gap-x-6 gap-y-2.5" aria-label="Filter gallery by category">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`text-sm font-medium tracking-tight transition-colors ${
                  active === c ? "text-ink" : "text-ink/40 hover:text-ink/70"
                }`}
              >
                {c}
              </button>
            ))}
          </nav>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
            {filtered.map((item, i) => (
              <button
                key={`${active}-${i}`}
                type="button"
                onClick={() => openLightbox(i)}
                className="group relative block overflow-hidden rounded-xl text-left"
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.type === "video" ? item.poster : item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${aspect(i)}`}
                />
                {item.type === "video" && (
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-transform group-hover:scale-105">
                    <Play className="h-4 w-4" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex != null && (
        <Lightbox items={filtered} index={lightboxIndex} onClose={closeLightbox} onNavigate={navigate} />
      )}
    </>
  );
}