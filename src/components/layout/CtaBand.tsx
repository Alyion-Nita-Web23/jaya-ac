"use client";
// Client component so the global CTA Band updates dynamically between Indonesian and English.

import React from "react";
import Image from "next/image";
import { MessageSquareText, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { waLink, waText } from "@/lib/whatsapp";

export function CtaBand() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <section
      aria-labelledby="cta-band-heading"
      className="w-full mt-10 md:mt-14 bg-[#F8F9FF] py-10 md:py-12 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-2xl border border-[#DCEBFA] bg-white py-8 sm:py-10 md:py-12 px-5 sm:px-8 text-center shadow-[0_12px_40px_rgba(15,23,42,0.07)]">
          {/* Background image */}
          <div className="pointer-events-none absolute inset-0 select-none">
            <Image
              src="/images/cta-bg.webp"
              alt=""
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              unoptimized
              className="object-cover object-center"
              aria-hidden="true"
            />
          </div>

          {/* Card Content */}
          <div className="relative z-10 mx-auto max-w-[620px]">
            <h2
              id="cta-band-heading"
              className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-[#0F172A] tracking-tight leading-[1.2]"
            >
              {isEn ? (
                <>
                  Ready to Make Your Room
                  <br />
                  Cool &amp; Comfortable Again?
                </>
              ) : (
                <>
                  Siap Membuat Ruangan Anda Kembali
                  <br />
                  Sejuk &amp; Nyaman?
                </>
              )}
            </h2>

            <p className="mt-3 text-sm sm:text-[15px] text-[#475569] leading-relaxed max-w-[580px] mx-auto">
              {isEn
                ? "Consult your AC issue directly with Jaya AC technicians. Flexible scheduling and 30–60 day warranty across Batam Island."
                : "Konsultasikan keluhan AC Anda langsung dengan tim teknisi Jaya AC. Jadwal fleksibel dan garansi servis 30–60 hari se-Pulau Batam."}
            </p>

            {/* Action Buttons: side-by-side matching laptop layout on mobile too */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
              <a
                href={waLink(waText.general(lang))}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp"
                data-track-location="cta_band"
                className="inline-flex h-10 sm:h-11 items-center justify-center gap-2 rounded-lg bg-[#004B87] px-4 sm:px-5 text-[12.5px] sm:text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#032F66] whitespace-nowrap"
              >
                <MessageSquareText className="size-4 shrink-0" aria-hidden="true" />
                <span>{isEn ? "Chat on WhatsApp" : "Hubungi WhatsApp"}</span>
              </a>

              <a
                href={`tel:${site.phoneTel}`}
                data-track="click_call"
                data-track-location="cta_band"
                className="inline-flex h-10 sm:h-11 items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-4 sm:px-5 text-[12.5px] sm:text-[13.5px] font-semibold text-[#0F172A] shadow-2xs transition-colors hover:bg-slate-50 hover:border-slate-300 whitespace-nowrap"
              >
                <Phone className="size-4 text-[#0070C0] shrink-0" aria-hidden="true" />
                <span>
                  {isEn ? "Call CS" : "Telepon CS"}: {site.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
