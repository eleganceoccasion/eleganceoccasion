import React from "react";
import { Check, Plus } from "lucide-react";
import { useEnquiry } from "./EnquiryProvider";

// "Add to enquiry" toggle. Kept in the protected selector's visual language
// (navy / gold) so the 12-card section remains recognisable. Used both in
// the protected ExperienceCard and on service detail pages.
export default function EnquiryButton({ serviceId, label = "Add to enquiry", addedLabel = "Added", className = "", size = "md" }) {
  const { isSelected, toggleService } = useEnquiry();
  const selected = isSelected(serviceId);

  const sizeClasses =
    size === "sm" ? "px-3 py-2 text-xs" : size === "lg" ? "px-6 py-3 text-sm" : "px-4 py-2.5 text-sm";

  return (
    <button
      type="button"
      onClick={() => toggleService(serviceId)}
      aria-pressed={selected}
      className={`inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-colors duration-200 ${sizeClasses} ${
        selected
          ? "bg-gold text-white"
          : "bg-navy text-white hover:bg-navy/90"
      } ${className}`}
    >
      {selected ? <Check className="h-4 w-4" strokeWidth={2.5} /> : <Plus className="h-4 w-4" strokeWidth={2.5} />}
      {selected ? addedLabel : label}
    </button>
  );
}