import React from "react";
import Hero from "@/components/home/Hero";
import Occasions from "@/components/home/Occasions";
import ExperienceSelector from "@/components/home/ExperienceSelector";
import EnquiryBuilder from "@/components/site/EnquiryBuilder";
import CateringFeature from "@/components/home/CateringFeature";
import FinalCta from "@/components/home/FinalCta";

// New homepage composition:
// A. Quiet nav (Layout)  B. Typography-led opening + cinematic image
// C. Two large occasion showcases  D. Protected selector + enquiry builder
// E. Considered catering showcase + film strip  F. Decisive ending.
export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSelector />
      <Occasions />
      <CateringFeature />
      <EnquiryBuilder />
      <FinalCta />
    </>
  );
}