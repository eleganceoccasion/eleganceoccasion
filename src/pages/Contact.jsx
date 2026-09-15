import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import EnquiryBuilder from "@/components/site/EnquiryBuilder";

// Contact — one calm, focused column: a warm editorial header, the enquiry
// builder centered and narrow, and a quiet row of direct channels beneath.
// Selected services still carry across through the shared enquiry provider.
export default function Contact() {
  return (
    <>
      <ContactHero />
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-20 lg:py-28">
          <EnquiryBuilder
            id="build"
            bare
            heading="Send a brief"
            intro="Add your details and send everything to WhatsApp in one tap — or open it in email."
          />
          <ContactChannels />
        </div>
      </section>
    </>
  );
}