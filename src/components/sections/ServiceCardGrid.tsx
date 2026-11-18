"use client";
// Client component so Beranda featured service cards mirror laptop multi-column grid on mobile and translate ID/EN.

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HOME_FEATURED_SERVICE_SLUGS } from "@/lib/home";
import { useLang } from "@/lib/i18n";
import { SERVICES } from "@/lib/services";

const HOME_CARD_DATA: Record<
  string,
  {
    image: string;
    title: string;
    titleEn: string;
    desc: string;
    descEn: string;
  }
> = {
  "cuci-ac": {
    image: "/images/tmp/beranda-cuci-ac.webp",
    title: "Cuci AC",
    titleEn: "AC Cleaning",
    desc: "Pembersihan evaporator, filter, dan outdoor unit agar dingin optimal.",
    descEn: "Evaporator, filter, and outdoor cleaning for optimal cooling.",
  },
  "isi-freon": {
    image: "/images/layanan/isi-freon.webp",
    title: "Isi & Tambah Freon",
    titleEn: "Freon Refill & Top-Up",
    desc: "Pengecekan tekanan dan pengisian freon R32, R410A, R22.",
    descEn: "Pressure gauge checks and R32, R410A, R22 refrigerant refill.",
  },
  troubleshooting: {
    image: "/images/layanan/troubleshooting.webp",
    title: "Perbaikan & Troubleshooting",
    titleEn: "Repair & Troubleshooting",
    desc: "Solusi AC bocor air, mati total, atau tidak dingin.",
    descEn: "Diagnostics for water leaks, power failures, or warm airflow.",
  },
  "bongkar-pasang": {
    image: "/images/layanan/bongkar-pasang.webp",
    title: "Bongkar Pasang",
    titleEn: "Uninstall & Install",
    desc: "Instalasi unit baru, pemindahan posisi, atau relokasi AC.",
    descEn: "New unit installation, repositioning, or AC relocation.",
  },
};

export function ServiceCardGrid() {
  const { lang } = useLang();
  const isEn = lang === "en";

  const featuredServices = HOME_FEATURED_SERVICE_SLUGS.map((slug) =>
    SERVICES.find((s) => s.slug === slug)
  ).filter(Boolean);

  return (
    <section
      aria-labelledby="layanan-kami-heading"
      className="w-full mt-8 md:mt-14 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header Section */}
        <div className="flex flex-row items-end justify-between gap-2 pb-4 sm:pb-5">
          <div>
            <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0070C0]">
              {isEn ? "OUR SERVICES" : "LAYANAN KAMI"}
            </span>
            <h2
              id="layanan-kami-heading"
              className="mt-0.5 sm:mt-1 text-[18px] sm:text-2xl md:text-[26px] font-bold text-[#0F172A] tracking-tight leading-snug"
            >
              {isEn
                ? "Clear & Trusted Pricing"
                : "Tarif Jelas & Terpercaya"}
            </h2>
          </div>

          <Link
            href="/layanan"
            className="group inline-flex shrink-0 items-center gap-1 sm:gap-1.5 text-[12px] sm:text-[13.5px] font-semibold text-[#0070C0] hover:text-[#004B87] transition-colors whitespace-nowrap"
          >
            <span>
              {isEn ? "View All" : "Lihat Semua"}
              <span className="hidden sm:inline">
                {isEn ? " Services" : " Layanan"}
              </span>
            </span>
            <ArrowRight className="size-3.5 sm:size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2 columns on HP matching laptop multi-column rhythm, 4 columns on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {featuredServices.map((service) => {
            if (!service) return null;
            const custom = HOME_CARD_DATA[service.slug];
            const cardTitle = custom
              ? isEn
                ? custom.titleEn
                : custom.title
              : service.name;
            const cardDesc = custom
              ? isEn
                ? custom.descEn
                : custom.desc
              : service.cardDescription;
            const cardImg = custom ? custom.image : service.image.src;

            return (
              <div
                key={service.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-xs transition-all duration-150 hover:border-[#BFDBFE] hover:shadow-md"
              >
                <div className="relative h-28 sm:h-44 w-full bg-slate-100">
                  <Image
                    src={cardImg}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <h3 className="text-[13.5px] sm:text-[16px] md:text-[17px] font-bold text-[#0F172A] tracking-tight leading-snug">
                    {cardTitle}
                  </h3>

                  <p className="mt-1 sm:mt-1.5 text-[11.5px] sm:text-[13px] leading-relaxed text-[#64748B] line-clamp-2 sm:line-clamp-3">
                    {cardDesc}
                  </p>

                  <div className="mt-auto pt-3 sm:pt-4">
                    <Link
                      href={`/layanan/${service.slug}`}
                      className="inline-flex h-8 sm:h-9 w-full items-center justify-center rounded-lg bg-[#004B87] text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-white transition-colors duration-150 hover:bg-[#032F66]"
                    >
                      {isEn ? "VIEW" : "LIHAT"}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceCardGrid;
