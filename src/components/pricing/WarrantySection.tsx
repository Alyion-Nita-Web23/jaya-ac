"use client";
// Client warranty section component supporting dynamic Indonesian/English translation on /harga.

import React from "react";
import { CircleCheck, Info } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { EN_WARRANTY_POLICY } from "@/lib/translations-en";
import type { WarrantyPolicy } from "@/lib/types";

interface WarrantySectionProps {
  policy: WarrantyPolicy;
}

export function WarrantySection({ policy }: WarrantySectionProps) {
  const { lang } = useLang();
  const isEn = lang === "en";
  const activePolicy = isEn ? EN_WARRANTY_POLICY : policy;

  return (
    <section
      aria-labelledby="ketentuan-garansi-heading"
      className="w-full pt-8 md:pt-10 pb-2 px-4 sm:px-6"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Section Header */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0070C0]">
            {isEn ? "TRUSTED SERVICE COMMITMENT" : "KOMITMEN LAYANAN TERPERCAYA"}
          </span>
          <h2
            id="ketentuan-garansi-heading"
            className="mt-1 text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight text-[#0F172A]"
          >
            {isEn
              ? "Workmanship Warranty Terms & Rights"
              : "Ketentuan & Hak Garansi Pengerjaan"}
          </h2>
        </div>

        {/* 2 Cards */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5">
            <div className="flex items-center gap-2">
              <CircleCheck
                className="size-[18px] shrink-0 text-[#15803D]"
                aria-hidden="true"
              />
              <h3 className="text-[15px] font-bold text-[#15803D]">
                {isEn
                  ? "100% Covered by Warranty (Free)"
                  : "100% Ditanggung Garansi (Gratis)"}
              </h3>
            </div>

            <ul className="mt-3.5 space-y-2.5">
              {activePolicy.covered.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#475569]"
                >
                  <CircleCheck
                    className="size-4 shrink-0 text-[#15803D] mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
            <div className="flex items-center gap-2">
              <Info
                className="size-[18px] shrink-0 text-[#334155]"
                aria-hidden="true"
              />
              <h3 className="text-[15px] font-bold text-[#1E293B]">
                {isEn ? "Outside Warranty Scope" : "Kondisi di Luar Garansi"}
              </h3>
            </div>

            <ul className="mt-3.5 space-y-2.5">
              {activePolicy.notCovered.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#475569]"
                >
                  <Info
                    className="size-4 shrink-0 text-[#64748B] mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3-Step Claim Procedure Card */}
        <div className="mt-4 rounded-xl border border-[#E2E8F0] bg-[#FAFBFF] p-5">
          <h3 className="text-[15px] font-bold text-[#0F172A]">
            {isEn
              ? "Fast 3-Step Warranty Claim Procedure"
              : "Prosedur Klaim 3 Langkah Cepat"}
          </h3>

          <div className="mt-3.5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {activePolicy.claimSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-[#E2E8F0] bg-white p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0070C0] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-[#0F172A]">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WarrantySection;
