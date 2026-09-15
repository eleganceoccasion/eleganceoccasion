import React from "react";
import WeddingsHero from "@/components/weddings/WeddingsHero";
import WeddingsMoments from "@/components/weddings/WeddingsMoments";
import WeddingsCollections from "@/components/weddings/WeddingsCollections";
import WeddingsProcess from "@/components/weddings/WeddingsProcess";
import WeddingsCta from "@/components/weddings/WeddingsCta";

// Weddings — a cinematic, editorial rebuild: full-bleed hero, a moments
// manifesto with capabilities, a featured collections comparison, a
// four-step process timeline, and an image-led closing CTA.
export default function Weddings() {
  return (
    <>
      <WeddingsHero />
      <WeddingsCollections />
      <WeddingsMoments />
      <WeddingsProcess />
      <WeddingsCta />
    </>
  );
}