"use client";
// Client component for bilingual homepage tariff summary table with original 1-PK mobile view (no horizontal scroll).

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_PRICE_ROW_IDS } from "@/lib/home";
import { PRICE_ROWS } from "@/lib/pricing";
import { formatRupiah, formatWarranty } from "@/lib/format";
import { useLang } from "@/lib/i18n";
import { EN_PRICE_ROWS } from "@/lib/translations-en";
import { waLink, waText } from "@/lib/whatsapp";

export function PriceCatalog() {
  const { lang } = useLang();
  const isEn = lang === "en";

  const selectedRows = HOME_PRICE_ROW_IDS.map((id) =>
    PRICE_ROWS.find((row) => row.id === id)
  ).filter(Boolean);

  return (
    <section
      aria-labelledby="katalog-tarif-heading"
      className="w-full mt-12 md:mt-16 bg-[#F8F9FF] py-10 md:py-14 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2
              id="katalog-tarif-heading"
              className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-tight"
            >
              {isEn
                ? "Standard & Inverter AC Service Price Catalog"
                : "Katalog Tarif Servis AC Standar & Inverter"}
            </h2>
            <p className="mt-1.5 text-[13.5px] text-[#64748B]">
              {isEn
                ? "Fixed & transparent per-unit rates for residential and commercial split ACs in Batam."
                : "Tarif pasti & transparan per unit. Berlaku untuk seluruh tipe AC Split non-inverter maupun inverter di Batam."}
            </p>
          </div>

          <Link
            href="/harga"
            className="group inline-flex shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-[#0070C0] hover:text-[#004B87] transition-colors"
          >
            <span>
              {isEn ? "View Full Price List" : "Lihat Daftar Harga Lengkap"}
            </span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Pricing Table Card: 1 PK column on mobile (no scrollbar), all 3 PK columns on desktop */}
        <div className="mt-6 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E2E8F0] bg-[#F9FBFD] text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#475569]">
                <th scope="col" className="py-3 px-3 sm:px-5 md:w-[44%]">
                  {isEn ? "SERVICE TYPE" : "JENIS PERAWATAN / SERVIS"}
                </th>
                <th
                  scope="col"
                  className="py-3 px-1.5 sm:px-4 text-center md:w-[14%]"
                >
                  {isEn ? "WARRANTY" : "GARANSI"}
                </th>
                <th
                  scope="col"
                  className="py-3 px-2.5 sm:px-4 text-center whitespace-nowrap md:w-[14%]"
                >
                  {isEn ? "0.5 – 1 HP" : "0,5 – 1 PK"}
                </th>
                <th
                  scope="col"
                  className="hidden md:table-cell py-3 px-4 text-center whitespace-nowrap md:w-[14%]"
                >
                  {isEn ? "1.5 HP" : "1,5 PK"}
                </th>
                <th
                  scope="col"
                  className="hidden md:table-cell py-3 px-4 text-center whitespace-nowrap md:w-[14%]"
                >
                  {isEn ? "2 HP" : "2 PK"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {selectedRows.map((row) => {
                if (!row) return null;

                const isGreenWarranty = (row.warrantyDays ?? 0) >= 60;
                const enRow = EN_PRICE_ROWS[row.id];
                const label = isEn && enRow ? enRow.label : row.label;
                const description =
                  isEn && enRow ? enRow.description : row.description;
                const note =
                  isEn && enRow?.note
                    ? enRow.note
                    : row.kind === "from"
                      ? row.note
                      : undefined;

                const fromContent =
                  row.kind === "from" ? (
                    <>
                      <span className="font-bold text-[12.5px] sm:text-[14px] text-[#0F172A] tabular-nums whitespace-nowrap">
                        {isEn ? "From " : "Mulai "}
                        {formatRupiah(row.from)}
                      </span>
                      {note ? (
                        <span className="block sm:inline sm:ml-1.5 text-[10.5px] sm:text-[11px] font-normal text-[#64748B]">
                          ({note})
                        </span>
                      ) : null}
                    </>
                  ) : row.kind === "per-unit" ? (
                    <span className="font-bold text-[12.5px] sm:text-[14px] text-[#0F172A] tabular-nums whitespace-nowrap">
                      {formatRupiah(row.price)} /{" "}
                      {isEn && enRow?.unit ? enRow.unit : row.unit}
                    </span>
                  ) : null;

                return (
                  <tr
                    key={row.id}
                    className="transition-colors hover:bg-[#F8FAFC]/80"
                  >
                    <td className="py-3 sm:py-3.5 px-3 sm:px-5 align-middle">
                      <div className="font-bold text-[13px] sm:text-[14px] text-[#0F172A]">
                        {label}
                      </div>
                      <div className="mt-0.5 text-[11px] sm:text-[12px] text-[#64748B] leading-snug max-w-[440px]">
                        {description}
                      </div>
                    </td>

                    <td className="py-3 sm:py-3.5 px-1.5 sm:px-4 text-center align-middle">
                      {row.warrantyDays ? (
                        <span
                          className={`inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold border whitespace-nowrap ${
                            isGreenWarranty
                              ? "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]"
                              : "bg-[#EFF6FF] text-[#0070C0] border-[#BFDBFE]"
                          }`}
                        >
                          {formatWarranty(row.warrantyDays, lang)}
                        </span>
                      ) : (
                        <span className="text-xs text-[#64748B]">—</span>
                      )}
                    </td>

                    {row.kind === "per-pk" ? (
                      <>
                        <td className="py-3 sm:py-3.5 px-2.5 sm:px-4 text-center align-middle font-bold text-[12.5px] sm:text-[14px] text-[#0F172A] tabular-nums whitespace-nowrap">
                          {formatRupiah(row.prices["0.5-1"])}
                        </td>
                        <td className="hidden md:table-cell py-3.5 px-4 text-center align-middle font-bold text-[14px] text-[#0F172A] tabular-nums whitespace-nowrap">
                          {formatRupiah(row.prices["1.5"])}
                        </td>
                        <td className="hidden md:table-cell py-3.5 px-4 text-center align-middle font-bold text-[14px] text-[#0F172A] tabular-nums whitespace-nowrap">
                          {formatRupiah(row.prices["2"])}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="md:hidden py-3 px-2 text-center align-middle">
                          {fromContent}
                        </td>
                        <td
                          colSpan={3}
                          className="hidden md:table-cell py-3.5 px-4 text-center align-middle"
                        >
                          {fromContent}
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Table Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-[#E2E8F0] bg-[#F9FBFD] p-4 sm:px-5">
            <p className="text-[12px] leading-relaxed text-[#64748B] max-w-[680px]">
              {isEn
                ? "All rates include technician dispatch and transport anywhere in Batam. No hidden fees. Pay only after completion & cooling check."
                : "Semua biaya sudah termasuk ongkos teknisi & transport ke seluruh Batam. Tanpa biaya tersembunyi. Pembayaran dilakukan setelah pekerjaan selesai & AC kembali dingin."}
            </p>

            <a
              href={waLink(waText.general(lang))}
              target="_blank"
              rel="noopener noreferrer"
              data-track="click_whatsapp"
              data-track-location="card"
              className="inline-flex h-10 sm:h-9 w-full sm:w-auto shrink-0 items-center justify-center rounded-lg bg-[#004B87] px-4 text-[11.5px] font-bold uppercase tracking-wider text-white shadow-2xs transition-colors duration-150 hover:bg-[#032F66]"
            >
              {isEn ? "BOOK SERVICE NOW" : "PESAN SERVIS SEKARANG"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceCatalog;
