"use client";
// Client component so ContactBlock (on / and /kontak) adapts copy cleanly to Indonesian/English and mobile widths.

import React from "react";
import Image from "next/image";
import { Phone, Clock, MapPin, ExternalLink, MessageSquareText } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { waLink, waText } from "@/lib/whatsapp";

interface ContactBlockProps {
  asH1?: boolean;
}

export function ContactBlock({ asH1 = false }: ContactBlockProps) {
  const { lang } = useLang();
  const isEn = lang === "en";
  const HeadingTag = asH1 ? "h1" : "h2";

  return (
    <section
      aria-labelledby="hubungi-kami-heading"
      className={
        asH1
          ? "w-full pt-8 md:pt-14 pb-2 px-4 sm:px-6"
          : "w-full mt-12 md:mt-14 px-4 sm:px-6"
      }
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <HeadingTag
            id="hubungi-kami-heading"
            className={
              asH1
                ? "text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15]"
                : "text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#0F172A] tracking-tight"
            }
          >
            {isEn ? "Contact Us" : "Hubungi Kami"}
          </HeadingTag>
          <p
            className={
              asH1
                ? "mt-3 sm:mt-3.5 text-sm sm:text-[15.5px] leading-relaxed text-[#475569] max-w-[560px] mx-auto"
                : "mt-1.5 text-[13.5px] sm:text-sm text-[#475569]"
            }
          >
            {isEn
              ? "Consult your AC issue or schedule a technician visit today."
              : "Konsultasikan keluhan AC Anda atau jadwalkan kedatangan teknisi."}
          </p>
        </div>

        {/* 2 Column Layout */}
        <div
          className={
            asH1
              ? "mt-7 md:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch"
              : "mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch"
          }
        >
          {/* Left: 3 Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            {/* 1. Phone / WA Hotline */}
            <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-sm">
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#0070C0]">
                  <Phone className="size-4 sm:size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#64748B]">
                    {isEn
                      ? "WHATSAPP / HOTLINE PHONE"
                      : "WHATSAPP / TELEPON HOTLINE"}
                  </span>
                  <div className="text-[16px] sm:text-[17px] font-bold text-[#0F172A] tracking-tight mt-0.5 whitespace-nowrap">
                    {site.phoneDisplay}
                  </div>
                  <p className="text-[12px] text-[#64748B] mt-0.5">
                    {isEn
                      ? "Online daily, 08.00–20.00 WIB"
                      : "Online setiap hari, 08.00–20.00"}
                  </p>
                </div>
              </div>

              <a
                href={waLink(waText.general(lang))}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp"
                data-track-location="contact"
                className="mt-0.5 inline-flex h-9 sm:h-8 shrink-0 items-center gap-1.5 rounded-md bg-[#15803D] px-3 text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-[#166534]"
              >
                <MessageSquareText className="size-3.5" aria-hidden="true" />
                <span>{isEn ? "Chat WA" : "Hubungi"}</span>
              </a>
            </div>

            {/* 2. Jam Operasional */}
            <div className="flex items-start gap-3.5 rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-sm">
              <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#0070C0]">
                <Clock className="size-4 sm:size-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#64748B]">
                  {isEn ? "OPERATING HOURS" : "JAM OPERASIONAL"}
                </span>
                <div className="text-[15.5px] sm:text-[16px] font-bold text-[#0F172A] tracking-tight mt-0.5">
                  {isEn ? "Mon – Sun: 08.00 – 20.00 WIB" : site.hours.label}
                </div>
                <p className="text-[12px] text-[#64748B] mt-0.5">
                  {isEn
                    ? "Open on weekends & public holidays"
                    : site.hours.note}
                </p>
              </div>
            </div>

            {/* 3. Alamat Workshop */}
            <div className="flex items-start gap-3.5 rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-sm">
              <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#0070C0]">
                <MapPin className="size-4 sm:size-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#64748B]">
                  {isEn
                    ? "WORKSHOP & OFFICE ADDRESS"
                    : "ALAMAT WORKSHOP & KANTOR"}
                </span>
                <div className="text-[15.5px] sm:text-[16px] font-bold text-[#0F172A] tracking-tight mt-0.5">
                  {site.address.street}
                </div>
                <p className="text-[12px] text-[#64748B] mt-0.5">
                  {site.address.locality}, {site.address.city},{" "}
                  {site.address.region}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Map Card */}
          <div className="lg:col-span-7 flex flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-xs">
            <div className="relative flex-1 min-h-[250px] sm:min-h-[300px] w-full bg-slate-100">
              {site.mapsEmbedUrl ? (
                <iframe
                  src={site.mapsEmbedUrl}
                  title={
                    isEn
                      ? `Location Map ${site.brandLong} — ${site.address.locality}`
                      : `Peta Lokasi ${site.brandLong} — ${site.address.locality}`
                  }
                  loading={asH1 ? "eager" : "lazy"}
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <Image
                  src="/images/map-batam.webp"
                  alt="Peta Jangkauan Layanan Jaya AC di Batam"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  unoptimized
                  className="object-cover"
                />
              )}
            </div>

            <div className="flex flex-wrap min-h-[44px] items-center justify-between gap-2 border-t border-[#E2E8F0] bg-white px-4 sm:px-5 py-2 sm:py-0 text-[12.5px]">
              <span className="font-medium text-[#475569]">
                {isEn ? "Coverage: " : "Jangkauan: "}
                <span className="font-semibold text-[#0F172A]">
                  {isEn ? "All of Batam Island" : site.coverage}
                </span>
              </span>

              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#0070C0] hover:text-[#004B87] transition-colors"
              >
                <span>
                  {isEn ? "Open in Google Maps" : "Buka di Google Maps"}
                </span>
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBlock;
