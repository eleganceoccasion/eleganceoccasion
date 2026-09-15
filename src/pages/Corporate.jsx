import React from "react";
import CorporateHero from "@/components/corporate/CorporateHero";
import CorporatePromise from "@/components/corporate/CorporatePromise";
import CorporateCapabilities from "@/components/corporate/CorporateCapabilities";
import CorporateWork from "@/components/corporate/CorporateWork";
import CorporateProcess from "@/components/corporate/CorporateProcess";
import CorporateCta from "@/components/corporate/CorporateCta";

// Corporate — a premium rebuild written for FTSE-grade clients: a compact
// cinematic hero, a standards manifesto, capability cards, an editorial
// work showcase, a brief-led process timeline, and a closing CTA.
export default function Corporate() {
  return (
    <>
      <CorporateHero />
      <CorporatePromise />
      <CorporateCapabilities />
      <CorporateWork />
      <CorporateProcess />
      <CorporateCta />
    </>
  );
}