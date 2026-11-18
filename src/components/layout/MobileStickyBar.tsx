"use client";
// Client sticky action bar on mobile screens (< md) synced with active language selection.

import React from "react";
import { MessageSquareText, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { waLink, waText } from "@/lib/whatsapp";

export function MobileStickyBar() {
  const { lang } = useLang();

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-[#E2E8F0] bg-white px-4 py-2.5 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] md:hidden">
      <div className="mx-auto grid max-w-[480px] grid-cols-2 gap-2.5">
        <a
          href={`tel:${site.phoneTel}`}
          data-track="click_call"
          data-track-location="sticky"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#004B87] text-[13.5px] font-bold text-white shadow-2xs transition-colors hover:bg-[#032F66]"
        >
          <Phone className="size-4 shrink-0" aria-hidden="true" />
          <span>{lang === "en" ? "Call Now" : "Telepon"}</span>
        </a>

        <a
          href={waLink(waText.general(lang))}
          target="_blank"
          rel="noopener noreferrer"
          data-track="click_whatsapp"
          data-track-location="sticky"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#15803D] text-[13.5px] font-bold text-white shadow-2xs transition-colors hover:bg-[#166534]"
        >
          <MessageSquareText className="size-4 shrink-0" aria-hidden="true" />
          <span>{lang === "en" ? "Chat WhatsApp" : "Chat WA"}</span>
        </a>
      </div>
    </div>
  );
}

export default MobileStickyBar;
