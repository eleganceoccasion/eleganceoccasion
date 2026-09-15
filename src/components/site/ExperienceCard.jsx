import React from "react";
import { Star } from "lucide-react";
import EnquiryButton from "./EnquiryButton";
import { useEnquiry } from "./EnquiryProvider";

// Signature experience card. Preserves the card data (image, category, name,
// price, "Most booked" badge, description) and the add/remove action. The
// selected state now inverts to a warm-charcoal card for a modern, confident
// selection cue.
export default function ExperienceCard({ card }) {
  const { name, category, price, mostBooked, image, description, serviceId } = card;
  const selected = useEnquiry().isSelected(serviceId);

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
        selected
          ? "border-navy bg-navy shadow-[0_18px_50px_rgba(38,34,30,0.22)]"
          : "border-hair bg-white shadow-[0_8px_30px_rgba(27,23,21,0.06)] hover:-translate-y-0.5 hover:shadow-[0_16px_46px_rgba(27,23,21,0.12)]"
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {mostBooked && (
          <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#C9B79A] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink shadow-sm">
            <Star className="h-3 w-3 fill-gold text-gold" />
            Most booked
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${selected ? "text-gold" : "text-ink/45"}`}>
          {category}
        </p>
        <h3 className={`mt-1.5 font-serif text-xl font-semibold leading-tight ${selected ? "text-white" : "text-ink"}`}>
          {name}
        </h3>
        <p className={`mt-2 flex-1 text-sm leading-relaxed ${selected ? "text-white/70" : "text-ink/60"}`}>
          {description}
        </p>
        <p className={`mt-4 text-sm font-semibold ${selected ? "text-white" : "text-ink"}`}>From £{price}</p>
        <div className="mt-3">
          <EnquiryButton serviceId={serviceId} className="w-full" />
        </div>
      </div>
    </article>
  );
}