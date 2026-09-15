import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Accessible lightbox: next/prev, Escape to close, keyboard access, clear
// video controls. Logic preserved; visual system updated to minimal ink.
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];

  const goNext = useCallback(() => onNavigate((index + 1) % items.length), [index, items.length, onNavigate]);
  const goPrev = useCallback(() => onNavigate((index - 1 + items.length) % items.length), [index, items.length, onNavigate]);

  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose, goNext, goPrev]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-6"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {item.type === "video" && item.src ? (
          <video
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
            className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
          />
        ) : (
          <img
            src={item.src || item.poster}
            alt={item.title}
            className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
          />
        )}
        <figcaption className="mt-4 text-center">
          <p className="text-base font-semibold text-white">{item.title}</p>
          <p className="mt-1 text-sm text-white/55">{item.category}</p>
        </figcaption>
      </figure>
    </div>
  );
}