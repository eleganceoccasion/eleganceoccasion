import React from "react";
import { Link } from "react-router-dom";
import EnquiryButton from "./EnquiryButton";

// Image-led service card for the directory. Larger image, minimal info
// beneath — name, starting price and a link to the detail page. An
// "Add to enquiry" toggle is available without leaving the listing.
export default function ServiceCard({ service }) {
  return (
    <article className="group flex flex-col">
      <Link to={`/services/${service.slug}`} className="block overflow-hidden rounded-2xl">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </Link>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <Link to={`/services/${service.slug}`} className="block">
            <h3 className="text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-ink/70">{service.name}</h3>
          </Link>
          {service.price != null && (
            <p className="mt-1 text-sm text-ink/50">From £{service.price}</p>
          )}
        </div>
        <EnquiryButton serviceId={service.id} size="sm" className="shrink-0" />
      </div>
    </article>
  );
}