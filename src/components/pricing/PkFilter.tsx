"use client";
// Client component for interactive PK capacity filtering and bilingual Indonesian/English pricing table on /harga.

import React, { useState } from "react";
import {
  SprayCan,
  Gauge,
  Wrench,
  Settings,
  Cpu,
  Layers,
  Info,
} from "lucide-react";
import type { PkOption, PkSize, PriceGroup, PriceRow } from "@/lib/types";
import { formatRupiah, formatWarranty } from "@/lib/format";
import { useLang } from "@/lib/i18n";
import {
  EN_PK_OPTIONS,
  EN_PRICE_GROUPS,
  EN_PRICE_ROWS,
} from "@/lib/translations-en";
import { waLink, waText } from "@/lib/whatsapp";

type FilterValue = "all" | PkSize;

interface PkFilterProps {
  pkOptions: readonly PkOption[];
  groups: readonly PriceGroup[];
  rows: readonly PriceRow[];
  callOutFee: number;
}

const GROUP_ICONS: Record<PriceGroup["icon"], React.ElementType> = {
  SprayCan,
  Gauge,
  Wrench,
  Drill: Settings,
  Cpu,
  Layers,
};

export function PkFilter({
  pkOptions,
  groups,
  rows,
  callOutFee,
}: PkFilterProps) {
  const [selectedPk, setSelectedPk] = useState<FilterValue>("all");
  const { lang } = useLang();
  const isEn = lang === "en";

  const visiblePkOptions =
    selectedPk === "all"
      ? pkOptions
      : pkOptions.filter((opt) => opt.key === selectedPk);

  const totalColSpan =
    selectedPk === "all" ? 3 + pkOptions.length : 3 + visiblePkOptions.length;

  return (
    <div>
      {/* Bilingual Page Header */}
      <div className="mx-auto max-w-[760px] text-center">
        <h1
          id="daftar-harga-heading"
          className="text-2xl sm:text-3xl md:text-[36px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]"
        >
          {isEn
            ? "Price List & Warranty Policy"
            : "Daftar Harga & Ketentuan Garansi"}
        </h1>
        <p className="mt-3 sm:mt-3.5 text-sm sm:text-[15.5px] leading-relaxed text-[#475569] max-w-[560px] mx-auto">
          {isEn
            ? "Transparent per-unit pricing estimates. Final prices are written clearly on your service receipt before work begins across Batam."
            : "Estimasi tarif transparan per unit. Harga pasti tertulis di nota sebelum pengerjaan dimulai se-Pulau Batam."}
        </p>
      </div>

      {/* PK Capacity Segmented Control: fits 1 sleek horizontal bar on 360px+ phones without scrollbar */}
      <div className="mt-7 md:mt-8 flex justify-start sm:justify-end">
        <div
          role="radiogroup"
          aria-label={isEn ? "Filter AC capacity" : "Filter kapasitas PK"}
          className="inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-0.5 sm:gap-1 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-1"
        >
          <button
            type="button"
            role="radio"
            aria-checked={selectedPk === "all"}
            data-track="filter_pk"
            data-track-pk="all"
            data-track-page="harga"
            onClick={() => setSelectedPk("all")}
            className={`h-8 flex-1 sm:flex-none rounded-md px-2 sm:px-3 text-[11px] sm:text-[13px] transition-colors whitespace-nowrap ${
              selectedPk === "all"
                ? "bg-white font-semibold text-[#0070C0] shadow-xs"
                : "font-medium text-[#475569] hover:text-[#0F172A]"
            }`}
          >
            {isEn ? "All Sizes" : "Semua Kapasitas"}
          </button>

          {pkOptions.map((opt) => {
            const isActive = selectedPk === opt.key;
            const label = isEn ? EN_PK_OPTIONS[opt.key].label : opt.label;
            return (
              <button
                key={opt.key}
                type="button"
                role="radio"
                aria-checked={isActive}
                data-track="filter_pk"
                data-track-pk={opt.key}
                data-track-page="harga"
                onClick={() => setSelectedPk(opt.key)}
                className={`h-8 flex-1 sm:flex-none rounded-md px-1.5 sm:px-3 text-[11px] sm:text-[13px] transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-white font-semibold text-[#0070C0] shadow-xs"
                    : "font-medium text-[#475569] hover:text-[#0F172A]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grouped Price Table: swipeable horizontally on HP with scrollbar completely hidden */}
      <div className="mt-3.5 overflow-x-auto no-scrollbar rounded-xl border border-[#E2E8F0] bg-white shadow-xs">
        <table
          className={`w-full border-collapse text-left ${
            selectedPk === "all" ? "min-w-[600px]" : ""
          }`}
        >
          <thead>
            <tr className="border-b border-[#E2E8F0] bg-[#F9FBFD] text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#475569]">
              <th scope="col" className="px-3.5 sm:px-5 py-3 w-[44%]">
                {isEn ? "SERVICE / WORK" : "LAYANAN / PEKERJAAN"}
              </th>
              {visiblePkOptions.map((opt) => (
                <th
                  key={opt.key}
                  scope="col"
                  className="px-2 sm:px-3 py-3 text-center whitespace-nowrap w-[11%]"
                >
                  {isEn ? EN_PK_OPTIONS[opt.key].label : opt.label}
                </th>
              ))}
              <th
                scope="col"
                className="px-2 sm:px-3 py-3 text-center whitespace-nowrap w-[11%]"
              >
                {isEn ? "WARRANTY" : "GARANSI"}
              </th>
              <th
                scope="col"
                className="px-3.5 sm:px-5 py-3 text-center whitespace-nowrap w-[12%]"
              >
                {isEn ? "ACTION" : "AKSI"}
              </th>
            </tr>
          </thead>

          <tbody>
            {groups.map((group) => {
              const groupRows = rows.filter((row) => row.groupId === group.id);
              if (groupRows.length === 0) return null;

              const GroupIcon = GROUP_ICONS[group.icon] ?? Wrench;
              const groupLabel = isEn
                ? EN_PRICE_GROUPS[group.id]
                : group.label;

              return (
                <React.Fragment key={group.id}>
                  {/* Category Group Header Row */}
                  <tr className="border-b border-[#E2E8F0] bg-[#F6FBFF]">
                    <th
                      scope="colgroup"
                      colSpan={totalColSpan}
                      className="px-3.5 sm:px-5 py-2.5 text-left text-[12px] sm:text-[12.5px] font-semibold text-[#0070C0]"
                    >
                      <span className="inline-flex items-center gap-2">
                        <GroupIcon
                          className="size-4 shrink-0 text-[#0070C0]"
                          aria-hidden="true"
                        />
                        <span>{groupLabel}</span>
                      </span>
                    </th>
                  </tr>

                  {/* Item Rows */}
                  {groupRows.map((row) => {
                    const enRow = EN_PRICE_ROWS[row.id];
                    const rowLabel = isEn && enRow ? enRow.label : row.label;
                    const rowDesc =
                      isEn && enRow ? enRow.description : row.description;
                    const rowNote =
                      isEn && enRow?.note
                        ? enRow.note
                        : row.kind === "from"
                          ? row.note
                          : undefined;

                    const priceSpanContent =
                      row.kind === "from" ? (
                        <>
                          <span className="text-[13px] sm:text-[14px] font-bold text-[#0F172A] tabular-nums whitespace-nowrap">
                            {isEn ? "From " : "Mulai "}
                            {formatRupiah(row.from)}
                          </span>
                          {rowNote ? (
                            <span className="block sm:inline sm:ml-1.5 text-[10.5px] sm:text-[11px] font-normal text-[#64748B]">
                              ({rowNote})
                            </span>
                          ) : null}
                        </>
                      ) : row.kind === "per-unit" ? (
                        <>
                          <span className="text-[13px] sm:text-[14px] font-bold text-[#0F172A] tabular-nums whitespace-nowrap">
                            {formatRupiah(row.price)}
                          </span>
                          <span className="ml-1 text-[11px] font-normal text-[#64748B]">
                            / {isEn && enRow?.unit ? enRow.unit : row.unit}
                          </span>
                        </>
                      ) : null;

                    return (
                      <tr
                        key={row.id}
                        className="border-b border-[#E2E8F0] transition-colors hover:bg-[#F8FAFC]/80"
                      >
                        <td className="px-3.5 sm:px-5 py-3 sm:py-3.5 align-middle">
                          <div className="text-[13px] sm:text-[14px] font-bold text-[#0F172A] leading-snug">
                            {rowLabel}
                          </div>
                          <p className="mt-0.5 max-w-[400px] text-[11.5px] sm:text-[12px] leading-snug text-[#64748B]">
                            {rowDesc}
                          </p>
                        </td>

                        {row.kind === "per-pk" ? (
                          visiblePkOptions.map((opt) => (
                            <td
                              key={opt.key}
                              className="px-2 sm:px-3 py-3 sm:py-3.5 text-center align-middle text-[13px] sm:text-[14px] font-bold text-[#0F172A] tabular-nums whitespace-nowrap"
                            >
                              {formatRupiah(row.prices[opt.key])}
                            </td>
                          ))
                        ) : (
                          <td
                            colSpan={visiblePkOptions.length}
                            className="px-2 sm:px-3 py-3 sm:py-3.5 text-center align-middle"
                          >
                            {priceSpanContent}
                          </td>
                        )}

                        {/* Warranty Chip */}
                        <td className="px-2 sm:px-3 py-3 sm:py-3.5 text-center align-middle">
                          {row.warrantyDays !== null ? (
                            <span className="inline-flex h-[20px] sm:h-[22px] min-w-[46px] sm:min-w-[50px] items-center justify-center rounded-md border border-[#BBF7D0] bg-[#F0FDF4] px-1.5 sm:px-2 text-[10.5px] sm:text-[11px] font-semibold text-[#15803D] whitespace-nowrap">
                              {formatWarranty(row.warrantyDays, lang)}
                            </span>
                          ) : (
                            <span className="text-xs font-medium text-[#64748B]">
                              —
                            </span>
                          )}
                        </td>

                        {/* Book CTA */}
                        <td className="px-3.5 sm:px-5 py-3 sm:py-3.5 text-center align-middle">
                          <a
                            href={waLink(waText.priceRow(row, lang, rowLabel))}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-track="click_whatsapp"
                            data-track-location="price_row"
                            data-track-service={row.id}
                            data-track-pk={
                              selectedPk === "all" ? undefined : selectedPk
                            }
                            className="inline-flex h-8 min-w-[56px] sm:min-w-[64px] items-center justify-center rounded-md bg-[#0070C0] px-2.5 sm:px-3.5 text-[11.5px] sm:text-xs font-semibold text-white transition-colors hover:bg-[#004B87] whitespace-nowrap"
                          >
                            {isEn ? "Book" : "Pesan"}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>

          <tfoot>
            <tr className="bg-white">
              <td
                colSpan={totalColSpan}
                className="px-3.5 sm:px-5 py-3.5 text-[12px] sm:text-[13px] text-[#475569]"
              >
                <span className="inline-flex items-start sm:items-center gap-2">
                  <Info
                    className="size-4 shrink-0 text-[#0070C0] mt-0.5 sm:mt-0"
                    aria-hidden="true"
                  />
                  <span>
                    {isEn ? (
                      <>
                        Initial inspection fee {formatRupiah(callOutFee)} —{" "}
                        <strong className="font-bold text-[#0F172A]">
                          100% FREE
                        </strong>{" "}
                        if proceeded with unit repair.
                      </>
                    ) : (
                      <>
                        Biaya pengecekan awal {formatRupiah(callOutFee)} —{" "}
                        <strong className="font-bold text-[#0F172A]">
                          100% GRATIS
                        </strong>{" "}
                        apabila dilanjutkan dengan perbaikan unit.
                      </>
                    )}
                  </span>
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default PkFilter;
