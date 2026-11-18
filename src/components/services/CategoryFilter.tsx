"use client";
// Client component for /layanan interactive category tabs and bilingual Indonesian/English service catalog cards.

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, Sparkles, Wrench, Hammer, MessageSquareText } from "lucide-react";
import type { ServiceCategory } from "@/lib/types";
import { formatRupiah } from "@/lib/format";
import { useLang } from "@/lib/i18n";
import { EN_CATEGORIES, EN_SERVICES } from "@/lib/translations-en";
import { waLink } from "@/lib/whatsapp";

export interface ServiceCardItem {
  slug: string;
  name: string;
  category: ServiceCategory;
  image: { src: string; alt: string };
  cardDescription: string;
  minPrice: number | null;
}

interface CategoryFilterProps {
  items: ServiceCardItem[];
  counts: Record<ServiceCategory | "semua", number>;
}

type TabKey = ServiceCategory | "semua";

const TAB_CONFIG: Array<{ key: TabKey; label: string; icon: React.ElementType }> = [
  { key: "semua", label: "Semua Layanan", icon: LayoutGrid },
  { key: "perawatan", label: "Perawatan", icon: Sparkles },
  { key: "perbaikan", label: "Perbaikan", icon: Wrench },
  { key: "instalasi", label: "Instalasi", icon: Hammer },
];

export function CategoryFilter({ items, counts }: CategoryFilterProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("semua");
  const { lang } = useLang();
  const isEn = lang === "en";

  const filteredItems =
    activeTab === "semua"
      ? items
      : items.filter((s) => s.category === activeTab);

  return (
    <div>
      {/* Page Header (bilingual) */}
      <div className="mx-auto max-w-[820px] text-center">
        <h1 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
          {isEn
            ? "Complete AC Service & Maintenance Solutions in Batam"
            : "Solusi Lengkap Servis & Perawatan AC di Batam"}
        </h1>
        <p className="mt-3 sm:mt-3.5 text-sm sm:text-[15.5px] leading-relaxed text-[#475569] max-w-[660px] mx-auto">
          {isEn
            ? "Handled by experienced technicians for home split ACs, energy-saving inverters, shophouses, offices, and commercial units."
            : "Dikerjakan oleh teknisi berpengalaman menangani AC split rumah tangga, inverter hemat listrik, hingga unit kantor dan komersial."}
        </p>
      </div>

      {/* Category Tabs: symmetric 2x2 grid on phones (no scrollbar/staircase), horizontal row on sm+ */}
      <div className="mt-8 md:mt-10 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
        {TAB_CONFIG.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          const count = counts[tab.key] ?? 0;
          const label = isEn ? EN_CATEGORIES[tab.key] : tab.label;

          return (
            <button
              key={tab.key}
              type="button"
              data-track="filter_category"
              data-track-category={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`inline-flex h-10 items-center justify-between sm:justify-start gap-1.5 sm:gap-2 rounded-lg px-3 sm:px-4 text-[12.5px] sm:text-[13.5px] font-semibold transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-[#004B87] text-white shadow-xs"
                  : "border border-[#E2E8F0] bg-white text-[#334155] hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <span className="inline-flex items-center gap-1.5 sm:gap-2 min-w-0">
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="truncate">{label}</span>
              </span>
              <span
                className={`flex size-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                  isActive
                    ? "bg-[#032F66] text-white"
                    : "bg-[#F1F5F9] text-[#64748B]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Laptop-mirrored 2-col grid on mobile, 4-col on desktop */}
      <div className="mt-6 md:mt-9 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {filteredItems.map((service) => {
          const enCopy = EN_SERVICES[service.slug];
          const displayName =
            isEn && enCopy ? enCopy.name : service.name;
          const displayDesc =
            isEn && enCopy ? enCopy.cardDescription : service.cardDescription;
          const displayCategory = isEn
            ? EN_CATEGORIES[service.category]
            : service.category;

          let priceLabel = isEn ? "Consultation" : "Konsultasi";
          if (service.slug === "pipa-bracket") {
            priceLabel = service.minPrice
              ? `${formatRupiah(service.minPrice, true)}/m`
              : "Rp 85.000/m";
          } else if (
            service.slug !== "kontrak-komersial" &&
            service.minPrice !== null
          ) {
            priceLabel = isEn
              ? `From ${formatRupiah(service.minPrice, true)}`
              : formatRupiah(service.minPrice, true);
          }

          const waMessage = isEn
            ? `Hello Jaya AC, I would like to book ${displayName}.\nAC Capacity: \nAddress: `
            : `Halo Jaya AC, saya mau pesan layanan ${service.name}.\nUkuran AC: \nAlamat: `;

          return (
            <div
              key={service.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-xs transition-shadow hover:shadow-md"
            >
              {/* Service Image */}
              <div className="relative h-28 sm:h-48 w-full bg-slate-100">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                  className="object-cover"
                />

                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 rounded-full bg-white/95 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#0070C0] shadow-2xs">
                  {displayCategory}
                </span>
              </div>

              {/* Service Body */}
              <div className="flex flex-1 flex-col p-3 sm:p-5">
                <h3 className="text-[13.5px] sm:text-[17px] font-bold tracking-tight text-[#0F172A] leading-snug line-clamp-2 sm:line-clamp-none">
                  {displayName}
                </h3>

                <div className="mt-1 text-[12px] sm:text-[13.5px] font-bold text-[#0070C0] tabular-nums">
                  {priceLabel}
                </div>

                <p className="mt-1.5 sm:mt-2.5 text-[11px] sm:text-[13px] leading-relaxed text-[#64748B] line-clamp-2 sm:line-clamp-3">
                  {displayDesc}
                </p>

                {/* Side-by-side buttons matching desktop at all widths */}
                <div className="mt-auto pt-3 sm:pt-4 flex items-center gap-1.5 sm:gap-2">
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="inline-flex h-8 flex-1 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white px-1.5 text-[11px] sm:text-xs font-semibold text-[#0F172A] shadow-2xs transition-colors hover:bg-slate-50 hover:border-slate-300 whitespace-nowrap"
                  >
                    <span className="sm:hidden">
                      {isEn ? "Details" : "Detail"}
                    </span>
                    <span className="hidden sm:inline">
                      {isEn ? "View Details" : "Lihat Detail"}
                    </span>
                  </Link>

                  <a
                    href={waLink(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="click_whatsapp"
                    data-track-location="card"
                    data-track-service={service.slug}
                    className="inline-flex h-8 flex-1 items-center justify-center gap-1 rounded-lg bg-[#004B87] px-1.5 text-[11px] sm:text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-[#003866] whitespace-nowrap"
                  >
                    <MessageSquareText className="size-3 sm:size-3.5 shrink-0" aria-hidden="true" />
                    <span>{isEn ? "Book" : "Pesan"}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryFilter;
