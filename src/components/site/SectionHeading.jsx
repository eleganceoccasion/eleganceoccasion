import React from "react";
import Reveal from "./Reveal";

// Consistent editorial section heading with an eyebrow and optional gold rule.
export default function SectionHeading({ eyebrow, title, intro, align = "left", light = false, id }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${alignClass} ${align === "center" ? "" : ""}`}>
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${light ? "text-gold" : "text-gold"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`mt-3 font-serif font-medium ${light ? "text-ivory" : "text-navy"}`}
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.05 }}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-ivory/80" : "text-navy/70"}`} style={{ lineHeight: 1.7 }}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}