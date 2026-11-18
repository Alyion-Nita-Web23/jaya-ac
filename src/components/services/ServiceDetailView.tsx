"use client";
// Client presentation wrapper for /layanan/[slug] supporting live bilingual switching while keeping SSG & SEO in page.tsx.

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Tag,
} from "lucide-react";
import type { PkOption, PriceRow, Service } from "@/lib/types";
import { formatRupiah } from "@/lib/format";
import { useLang } from "@/lib/i18n";
import {
  EN_CATEGORIES,
  EN_PK_OPTIONS,
  EN_SERVICES,
} from "@/lib/translations-en";
import { waLink, waText } from "@/lib/whatsapp";
import PkSelector from "@/components/services/PkSelector";
import CtaBand from "@/components/layout/CtaBand";

export interface RelatedServiceItem {
  service: Service;
  minPrice: number | null;
}

interface ServiceDetailViewProps {
  service: Service;
  pkOptions: readonly PkOption[];
  primaryPriceRow: PriceRow | null;
  minPrice: number | null;
  relatedItems: RelatedServiceItem[];
}

export function ServiceDetailView({
  service,
  pkOptions,
  primaryPriceRow,
  minPrice,
  relatedItems,
}: ServiceDetailViewProps) {
  const { lang } = useLang();
  const isEn = lang === "en";

  const enCopy = EN_SERVICES[service.slug];
  const title = isEn && enCopy ? enCopy.title : service.title;
  const name = isEn && enCopy ? enCopy.name : service.name;
  const lead = isEn && enCopy ? enCopy.lead : service.lead;
  const steps = isEn && enCopy ? enCopy.steps : service.steps;
  const promo = isEn && enCopy?.promo ? enCopy.promo : service.promo;

  const showTierCards =
    primaryPriceRow?.kind === "per-pk" && Boolean(service.tierFeatures);

  return (
    <main className="w-full bg-white">
      {/* Back Link Bar */}
      <div className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-3 sm:py-3.5">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#334155] transition-colors hover:text-[#0070C0]"
          >
            <ArrowLeft className="size-3.5 text-[#0070C0]" aria-hidden="true" />
            <span>
              {isEn ? "Back to All Services" : "Kembali ke Semua Layanan"}
            </span>
          </Link>
        </div>
      </div>

      {/* Section 1: Hero & Sticky Booking Card */}
      <section
        aria-labelledby="detail-service-heading"
        className="w-full bg-[#F8FAFF] py-6 md:py-9 px-4 sm:px-6"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <h1
                id="detail-service-heading"
                className="text-2xl sm:text-3xl md:text-[36px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]"
              >
                {title}
              </h1>

              <p className="mt-3 text-sm sm:text-[15.5px] leading-relaxed text-[#475569] max-w-[620px]">
                {lead}
              </p>

              <div className="relative mt-5 aspect-[16/10] lg:aspect-[21/10] w-full overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-xs">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 680px"
                  unoptimized
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>

            {/* Right Column: Booking Card */}
            <div className="lg:col-span-5">
              <PkSelector
                service={service}
                pkOptions={pkOptions}
                primaryPriceRow={primaryPriceRow}
                fallbackMinPrice={minPrice}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Standar Pengerjaan 4 Tahap */}
      <section
        aria-labelledby="tahap-pengerjaan-heading"
        className="w-full bg-white pt-9 pb-4 md:pt-12 md:pb-6 px-4 sm:px-6"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-[660px] text-center">
            <h2
              id="tahap-pengerjaan-heading"
              className="text-xl sm:text-2xl md:text-[28px] font-extrabold tracking-tight text-[#0F172A]"
            >
              {isEn
                ? "4-Step Workmanship Standard"
                : "Standar Pengerjaan 4 Tahap"}
            </h2>
            <p className="mt-1.5 text-sm text-[#475569]">
              {isEn
                ? "Structured and hygienic workflow for peak cooling without messing up your room."
                : "Prosedur terstruktur dan higienis untuk hasil dingin maksimal tanpa mengotori ruangan."}
            </p>
          </div>

          <div className="mt-6 sm:mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {steps.map((step, index) => {
              const stepNumber = String(index + 1).padStart(2, "0");
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col justify-start overflow-hidden rounded-xl border border-[#DCE6F5] bg-[#F3F6FD] px-3.5 pt-7 pb-4 sm:px-5 sm:pt-9 sm:pb-5 min-h-[128px] sm:min-h-[144px]"
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none select-none absolute top-2 right-2.5 sm:top-2.5 sm:right-3.5 text-[30px] sm:text-[42px] font-extrabold leading-none tracking-tight ${
                      isLast ? "text-[#CEE6DA]" : "text-[#D6E4F5]"
                    }`}
                  >
                    {stepNumber}
                  </span>

                  <h3 className="relative z-10 text-[13.5px] sm:text-[15.5px] font-bold text-[#0F172A] leading-snug">
                    {step.title}
                  </h3>
                  <p className="relative z-10 mt-1 sm:mt-1.5 text-[11.5px] sm:text-[13px] leading-relaxed text-[#475569]">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Daftar Tarif Per-PK */}
      {showTierCards &&
        primaryPriceRow.kind === "per-pk" &&
        service.tierFeatures && (
          <section
            aria-labelledby="daftar-tarif-layanan-heading"
            className="w-full bg-white pt-8 pb-4 md:pt-10 md:pb-6 px-4 sm:px-6"
          >
            <div className="mx-auto w-full max-w-[1200px]">
              <div className="mx-auto max-w-[660px] text-center">
                <h2
                  id="daftar-tarif-layanan-heading"
                  className="text-xl sm:text-2xl md:text-[28px] font-extrabold tracking-tight text-[#0F172A]"
                >
                  {isEn ? `${name} Rate Tiers` : `Daftar Tarif ${name}`}
                </h2>
                <p className="mt-1.5 text-sm text-[#475569]">
                  {service.warrantyDays !== null
                    ? isEn
                      ? `Transparent rates include full service completion and a ${service.warrantyDays}-day warranty.`
                      : `Biaya transparan sudah termasuk pengerjaan tuntas dan garansi ${service.warrantyDays} hari.`
                    : isEn
                      ? "Transparent per-unit pricing by experienced Batam technicians."
                      : "Biaya transparan per unit dengan teknisi berpengalaman di seluruh Batam."}
                </p>
              </div>

              <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
                {pkOptions.map((opt) => {
                  const isFavorite = (service.favoritePk ?? "1.5") === opt.key;
                  const tierPrice = primaryPriceRow.prices[opt.key];
                  const features =
                    isEn && enCopy?.tierFeatures?.[opt.key]
                      ? enCopy.tierFeatures[opt.key]
                      : service.tierFeatures?.[opt.key] ?? [];
                  const optCopy = isEn ? EN_PK_OPTIONS[opt.key] : opt;

                  return (
                    <div
                      key={opt.key}
                      className={`flex flex-col rounded-2xl bg-white p-5 ${
                        isFavorite
                          ? "border-2 border-[#004B87] shadow-[0_8px_28px_rgba(0,75,135,0.08)]"
                          : "border border-[#E2E8F0] shadow-xs"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[15.5px] font-bold text-[#0F172A]">
                            {optCopy.label}
                          </span>
                          {isFavorite && (
                            <span className="inline-flex items-center rounded-full bg-[#004B87] px-2.5 py-0.5 text-[10px] font-bold text-white">
                              {isEn ? "Popular" : "Favorit"}
                            </span>
                          )}
                        </div>

                        <span className="rounded bg-[#F1F5F9] px-2 py-0.5 text-[11px] font-medium text-[#64748B]">
                          {optCopy.room}
                        </span>
                      </div>

                      <div className="mt-2.5 pb-4 border-b border-[#E2E8F0] flex items-baseline gap-1">
                        <span className="text-2xl sm:text-[26px] font-extrabold text-[#0070C0] tabular-nums tracking-tight leading-none">
                          {formatRupiah(tierPrice, true)}
                        </span>
                        <span className="text-xs font-medium text-[#64748B]">
                          /unit
                        </span>
                      </div>

                      <ul className="mt-4 flex-1 space-y-2.5">
                        {features.map((feat) => (
                          <li
                            key={feat}
                            className={`flex items-start gap-2 text-[13px] ${
                              isFavorite
                                ? "font-medium text-[#0F172A]"
                                : "text-[#475569]"
                            }`}
                          >
                            <Check
                              className="size-3.5 shrink-0 text-[#15803D] mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={waLink(
                          waText.servicePk(
                            service,
                            optCopy.label,
                            formatRupiah(tierPrice),
                            lang,
                            name
                          )
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-track="click_whatsapp"
                        data-track-location="tier_card"
                        data-track-service={service.slug}
                        data-track-pk={opt.key}
                        className={`mt-5 inline-flex h-10 sm:h-9 w-full items-center justify-center rounded-lg text-[13px] font-semibold transition-colors ${
                          isFavorite
                            ? "bg-[#004B87] text-white hover:bg-[#032F66]"
                            : "border border-[#BFDBFE] bg-[#EFF6FF] text-[#0070C0] hover:bg-[#DBEAFE]"
                        }`}
                      >
                        {isEn ? "Book via WhatsApp" : "Pesan via WhatsApp"}
                      </a>
                    </div>
                  );
                })}
              </div>

              {promo && (
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-[#DCE6F5] bg-[#F0F6FD] px-4 sm:px-5 py-3.5">
                  <div className="flex items-start sm:items-center gap-3">
                    <Tag
                      className="size-4 shrink-0 text-[#15803D] mt-0.5 sm:mt-0"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="text-[13.5px] font-bold text-[#0F172A]">
                        {promo.title}
                      </div>
                      <p className="text-xs text-[#475569]">{promo.body}</p>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 self-start sm:self-center items-center rounded-md border border-[#BBF7D0] bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#15803D]">
                    {promo.badge}
                  </span>
                </div>
              )}
            </div>
          </section>
        )}

      {/* Section 4: Layanan Servis Terkait Lainnya */}
      <section
        aria-labelledby="layanan-terkait-heading"
        className="w-full bg-white pt-8 pb-2 md:pt-10 md:pb-2 px-4 sm:px-6"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="inline-block rounded-full bg-[#E0F2FE] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[#0070C0]">
                {isEn ? "FULL SERVICE COVERAGE" : "KEBUTUHAN SERVIS LENGKAP"}
              </span>
              <h2
                id="layanan-terkait-heading"
                className="mt-2 text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight text-[#0F172A]"
              >
                {isEn
                  ? "Other Related AC Services"
                  : "Layanan Servis Terkait Lainnya"}
              </h2>
              <p className="mt-1 text-sm text-[#475569]">
                {isEn
                  ? "14 types of AC maintenance, repair, and installation services with a 30–60 day warranty in Batam."
                  : "14 jenis layanan perawatan, perbaikan, dan instalasi AC bergaransi 30–60 hari di Batam."}
              </p>
            </div>

            <Link
              href="/layanan"
              className="group inline-flex items-center gap-1 text-[13.5px] font-semibold text-[#0070C0] hover:text-[#004B87] transition-colors shrink-0"
            >
              <span>
                {isEn ? "View All Services" : "Lihat Seluruh Layanan"}
              </span>
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedItems.map(({ service: rel, minPrice: relMin }) => {
              const enRel = EN_SERVICES[rel.slug];
              const relName = isEn && enRel ? enRel.name : rel.name;
              const relDesc =
                isEn && enRel ? enRel.cardDescription : rel.cardDescription;
              const relCat = isEn ? EN_CATEGORIES[rel.category] : rel.category;

              let relPriceLabel = isEn ? "Consultation" : "Konsultasi";
              if (relMin !== null) {
                if (rel.slug === "pipa-bracket") {
                  relPriceLabel = `${formatRupiah(relMin, true)}/m`;
                } else {
                  relPriceLabel = `${isEn ? "From " : "Mulai "}${formatRupiah(relMin, true)}`;
                }
              }

              const tagRight =
                (isEn && enRel?.cardTag ? enRel.cardTag : rel.cardTag) ??
                (rel.warrantyDays !== null
                  ? isEn
                    ? `${rel.warrantyDays}-Day Warranty`
                    : `Garansi ${rel.warrantyDays} Hari`
                  : null);

              return (
                <div
                  key={rel.slug}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFF] shadow-xs transition-all hover:shadow-md"
                >
                  <div className="relative h-44 sm:h-48 w-full bg-slate-100">
                    <Image
                      src={rel.image.src}
                      alt={rel.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0F172A] shadow-2xs">
                      {relCat}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-[#0070C0] tabular-nums">
                        {relPriceLabel}
                      </span>
                      {tagRight && (
                        <span className="text-[11px] font-medium text-[#64748B] truncate">
                          {tagRight}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-1.5 text-[16px] font-bold text-[#0F172A] leading-snug">
                      {relName}
                    </h3>

                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#475569] line-clamp-2">
                      {relDesc}
                    </p>

                    <div className="mt-auto pt-4">
                      <Link
                        href={`/layanan/${rel.slug}`}
                        className="inline-flex h-10 sm:h-9 w-full items-center justify-center gap-1 rounded-lg border border-[#E2E8F0] bg-white text-xs font-semibold text-[#0F172A] shadow-2xs transition-colors hover:bg-slate-50 hover:border-slate-300"
                      >
                        <span>
                          {isEn
                            ? "View Service Details"
                            : "Lihat Detail Layanan"}
                        </span>
                        <ChevronRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

export default ServiceDetailView;
