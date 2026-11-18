"use client";
// Client component for interactive PK selection and bilingual Indonesian/English copy in the service detail booking card.

import React, { useState } from "react";
import { CircleCheck, MessageSquareText, Phone } from "lucide-react";
import type { PkOption, PkSize, PriceRow, Service } from "@/lib/types";
import { formatRupiah } from "@/lib/format";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import {
  EN_PK_OPTIONS,
  EN_PRICE_ROWS,
  EN_SERVICES,
} from "@/lib/translations-en";
import { waLink, waText } from "@/lib/whatsapp";

interface PkSelectorProps {
  service: Service;
  pkOptions: readonly PkOption[];
  primaryPriceRow: PriceRow | null;
  fallbackMinPrice: number | null;
}

export function PkSelector({
  service,
  pkOptions,
  primaryPriceRow,
  fallbackMinPrice,
}: PkSelectorProps) {
  const { lang } = useLang();
  const isEn = lang === "en";
  const isPerPk = primaryPriceRow?.kind === "per-pk";
  const [selectedPk, setSelectedPk] = useState<PkSize>(
    pkOptions[0]?.key ?? "0.5-1"
  );

  const selectedOpt =
    pkOptions.find((opt) => opt.key === selectedPk) ?? pkOptions[0];

  const enService = EN_SERVICES[service.slug];
  const serviceName = isEn && enService ? enService.name : service.name;
  const selectedPkLabel =
    isEn && selectedOpt
      ? EN_PK_OPTIONS[selectedOpt.key].label
      : selectedOpt?.label ?? "";

  let priceDisplay = isEn ? "Quote after inspection" : "Harga sesuai survei";
  let priceSuffix: string | null = null;
  let priceLabel = isEn
    ? `Estimated Cost for ${serviceName}`
    : `Estimasi Biaya ${serviceName}`;
  let waHref = waLink(waText.service(service, lang, serviceName));

  if (isPerPk && primaryPriceRow.kind === "per-pk" && selectedOpt) {
    const pkPrice = primaryPriceRow.prices[selectedPk];
    priceDisplay = formatRupiah(pkPrice, true);
    priceSuffix = isEn ? "/unit" : "/unit";
    priceLabel =
      service.slug === "cuci-ac"
        ? isEn
          ? "Complete Wash From"
          : "Tarif Cuci Komplit Mulai"
        : isEn
          ? `${serviceName} Rate From`
          : `Tarif ${serviceName} Mulai`;
    waHref = waLink(
      waText.servicePk(
        service,
        selectedPkLabel,
        formatRupiah(pkPrice),
        lang,
        serviceName
      )
    );
  } else if (primaryPriceRow?.kind === "from") {
    const enRow = EN_PRICE_ROWS[primaryPriceRow.id];
    const note = isEn && enRow?.note ? enRow.note : primaryPriceRow.note;
    priceDisplay = `${isEn ? "From " : "Mulai "}${formatRupiah(primaryPriceRow.from, true)}`;
    priceLabel = isEn
      ? `Estimated Cost for ${serviceName}`
      : `Estimasi Biaya ${serviceName}`;
    priceSuffix = note ? `(${note})` : null;
  } else if (primaryPriceRow?.kind === "per-unit") {
    const enRow = EN_PRICE_ROWS[primaryPriceRow.id];
    const unit = isEn && enRow?.unit ? enRow.unit : primaryPriceRow.unit;
    priceDisplay = formatRupiah(primaryPriceRow.price, true);
    priceSuffix = `/${unit}`;
    priceLabel = isEn ? `${serviceName} Rate` : `Tarif ${serviceName}`;
  } else if (fallbackMinPrice !== null) {
    priceDisplay = `${isEn ? "From " : "Mulai "}${formatRupiah(fallbackMinPrice, true)}`;
  }

  return (
    <aside className="lg:sticky lg:top-[88px] rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-[0_12px_36px_rgba(15,23,42,0.07)]">
      {/* Card Header */}
      <div className="pb-4 border-b border-[#E2E8F0]">
        <h2 className="text-[17px] font-bold text-[#0F172A] tracking-tight">
          {isEn ? "Book AC Technician" : "Pesan Teknisi AC"}
        </h2>
        <p className="mt-0.5 text-xs text-[#64748B]">
          {isEn
            ? "Schedule a technician visit today hassle-free"
            : "Jadwalkan kunjungan teknisi hari ini tanpa ribet"}
        </p>
      </div>

      {/* PK Selector */}
      {isPerPk && (
        <div className="mt-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#475569]">
            {isEn ? "Your AC Unit Capacity:" : "Kapasitas Unit AC Anda:"}
          </div>

          <div
            role="radiogroup"
            aria-label={isEn ? "Select AC capacity" : "Pilih kapasitas PK AC"}
            className="mt-2 grid grid-cols-3 gap-1.5 sm:gap-2"
          >
            {pkOptions.map((opt) => {
              const isActive = selectedPk === opt.key;
              const optCopy = isEn ? EN_PK_OPTIONS[opt.key] : opt;
              return (
                <button
                  key={opt.key}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  data-track="filter_pk"
                  data-track-pk={opt.key}
                  data-track-page="detail"
                  onClick={() => setSelectedPk(opt.key)}
                  className={`flex min-h-[52px] flex-col items-center justify-center rounded-lg px-1.5 sm:px-2 py-1.5 text-center transition-colors ${
                    isActive
                      ? "border-2 border-[#0070C0] bg-[#EFF6FF] text-[#0070C0]"
                      : "border border-[#E2E8F0] bg-white text-[#0F172A] hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold leading-tight whitespace-nowrap">
                    {optCopy.label}
                  </span>
                  <span
                    className={`mt-0.5 text-[10.5px] leading-tight ${
                      isActive ? "text-[#0070C0]" : "text-[#64748B]"
                    }`}
                  >
                    {optCopy.room}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-1.5 text-[11px] text-[#64748B]">
            {isEn
              ? "Above 2 HP? Chat via WhatsApp for a large-unit estimate."
              : "Di atas 2 PK? Chat WA untuk estimasi harga unit besar."}
          </p>
        </div>
      )}

      {/* Price Box */}
      <div className="mt-4 rounded-xl bg-[#F1F6FD] p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="text-xs font-medium text-[#475569] min-w-0">
            {priceLabel}
          </div>

          {service.warrantyDays !== null && (
            <span className="inline-flex shrink-0 items-center rounded-full border border-[#BBF7D0] bg-[#DCFCE7] px-2.5 py-0.5 text-[11px] font-semibold text-[#15803D] whitespace-nowrap">
              {isEn
                ? `${service.warrantyDays}-Day Warranty`
                : `Garansi ${service.warrantyDays} Hari`}
            </span>
          )}
        </div>

        <div className="mt-1.5 flex items-baseline gap-1 flex-wrap">
          <span className="text-[24px] sm:text-[26px] font-extrabold text-[#0070C0] tabular-nums tracking-tight leading-none whitespace-nowrap">
            {priceDisplay}
          </span>
          {priceSuffix && (
            <span className="text-xs font-medium text-[#64748B] whitespace-nowrap">
              {priceSuffix}
            </span>
          )}
        </div>
      </div>

      {/* Primary WhatsApp Button */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        data-track="click_whatsapp"
        data-track-location="detail"
        data-track-service={service.slug}
        data-track-pk={isPerPk ? selectedPk : undefined}
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#15803D] px-4 text-sm font-bold text-white shadow-xs transition-colors hover:bg-[#166534] active:scale-[0.99]"
      >
        <MessageSquareText className="size-4 shrink-0" aria-hidden="true" />
        <span>
          {isEn ? "Chat on WhatsApp Now" : "Chat WhatsApp Sekarang"}
        </span>
      </a>

      {/* Phone & Operational Hours Row */}
      <div className="mt-2.5 flex min-h-[40px] flex-wrap items-center justify-between gap-x-2 gap-y-1 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 sm:px-3.5 py-2 text-[11.5px] sm:text-xs">
        <a
          href={`tel:${site.phoneTel}`}
          data-track="click_call"
          data-track-location="detail"
          className="inline-flex shrink-0 items-center gap-1.5 font-bold text-[#0F172A] hover:text-[#0070C0] transition-colors whitespace-nowrap"
        >
          <Phone className="size-3.5 text-[#0070C0] shrink-0" aria-hidden="true" />
          <span className="tabular-nums whitespace-nowrap">{site.phoneDisplay}</span>
        </a>
        <span className="text-[#64748B] whitespace-nowrap text-[11px] sm:text-xs">
          {site.hours.opens.replace(":", ".")}–{site.hours.closes.replace(":", ".")} WIB
        </span>
      </div>

      {/* Trust Guarantees */}
      <ul className="mt-4 space-y-2 pt-1">
        <li className="flex items-start gap-2 text-xs text-[#475569]">
          <CircleCheck
            className="size-3.5 shrink-0 text-[#15803D] mt-0.5"
            aria-hidden="true"
          />
          <span>
            {isEn
              ? "No Deposit — Pay after job is completed & AC cools properly"
              : "Tanpa DP — Pembayaran setelah selesai & dingin tuntas"}
          </span>
        </li>
        <li className="flex items-start gap-2 text-xs text-[#475569]">
          <CircleCheck
            className="size-3.5 shrink-0 text-[#15803D] mt-0.5"
            aria-hidden="true"
          />
          <span>
            {isEn
              ? "Cooling performance warranty with free revisit"
              : "Garansi dingin tuntas, bebas biaya kunjungan ulang"}
          </span>
        </li>
      </ul>
    </aside>
  );
}

export default PkSelector;
