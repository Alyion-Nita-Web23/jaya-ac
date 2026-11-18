"use client";
// Client component preserving clean white FeatureStrip styling across mobile and desktop with zero overflow.

import React from "react";
import { Zap, ShieldCheck, ThumbsUp, Headphones } from "lucide-react";
import { HOME_FEATURES } from "@/lib/home";
import { useLang } from "@/lib/i18n";
import { EN_HOME_FEATURES } from "@/lib/translations-en";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  ShieldCheck,
  ThumbsUp,
  Headphones,
};

export function FeatureStrip() {
  const { lang } = useLang();
  const features = lang === "en" ? EN_HOME_FEATURES : HOME_FEATURES;

  return (
    <section
      aria-label={lang === "en" ? "Service Advantages" : "Keunggulan Layanan"}
      className="relative z-30 w-full px-4 sm:px-6"
    >
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-xl sm:rounded-2xl border border-[#E2E8F0] bg-white px-4 py-4 sm:px-6 sm:py-4 shadow-[0_10px_30px_-6px_rgba(15,23,42,0.07),0_4px_12px_-4px_rgba(15,23,42,0.03)]">
        <div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-x-4 gap-y-4 sm:gap-5 lg:gap-0">
          {features.map((feature, idx) => {
            const Icon = ICON_MAP[feature.icon] ?? Zap;

            return (
              <React.Fragment key={feature.icon}>
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-2 sm:gap-3.5 lg:px-3 xl:px-4 min-w-0">
                  <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] border border-[#DBEAFE]/80 shadow-2xs">
                    <Icon
                      className="size-4 sm:size-[18px] text-[#0070C0] stroke-[2.2]"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 w-full">
                    <h2 className="text-[12.5px] sm:text-[14px] font-bold tracking-tight text-[#0F172A] leading-snug break-words">
                      {feature.title}
                    </h2>
                    <p className="mt-0.5 text-[11px] sm:text-[12.5px] text-[#64748B] leading-snug break-words">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {idx < features.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block h-9 w-[1px] bg-[#E2E8F0] shrink-0"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureStrip;
