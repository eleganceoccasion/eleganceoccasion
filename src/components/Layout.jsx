import React from "react";
import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

// Shared application shell: quiet header, routed content, clean footer,
// discreet WhatsApp float.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}