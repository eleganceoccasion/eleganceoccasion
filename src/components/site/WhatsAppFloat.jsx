import React from "react";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/site";

// Discreet floating WhatsApp action. Positioned bottom-right; the selection
// count chip sits bottom-left so they never overlap.
export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsapp.destination}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Elegance Occasion on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 focus-visible:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}