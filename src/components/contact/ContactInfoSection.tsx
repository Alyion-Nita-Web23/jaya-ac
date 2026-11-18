"use client";
// Client FAQ accordion section on /kontak synced with active Indonesian/English language state.

import React from "react";
import { ChevronDown } from "lucide-react";
import { formatRupiah } from "@/lib/format";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { EN_CONTACT_FAQ } from "@/lib/translations-en";

const ID_FAQ = [
  {
    q: "Apakah teknisi bisa datang di hari yang sama?",
    a: `Bisa, selama jadwal hari itu masih ada yang kosong. Kami melayani setiap hari pukul ${site.hours.opens.replace(":", ".")}–${site.hours.closes.replace(":", ".")} WIB, termasuk akhir pekan dan tanggal merah.`,
  },
  {
    q: "Apakah ada biaya pengecekan awal?",
    a: `Ada biaya pengecekan ${formatRupiah(site.callOutFee)} per kunjungan, tapi biaya ini gratis jika Anda langsung lanjut servis atau perbaikan di tempat.`,
  },
  {
    q: "Apakah harus membayar DP saat pesan?",
    a: "Tidak perlu DP. Pembayaran baru dilakukan setelah AC selesai dikerjakan dan dicek berfungsi baik, bisa lewat tunai, transfer bank, atau QRIS.",
  },
  {
    q: "Bagaimana cara klaim garansi servis?",
    a: `Setiap pengerjaan dilengkapi garansi ${site.warrantyDays.min}–${site.warrantyDays.max} hari. Jika ada kendala, cukup kirim foto nota atau nomor HP pemesan ke WhatsApp admin supaya teknisi bisa dijadwalkan datang kembali.`,
  },
] as const;

export function ContactInfoSection() {
  const { lang } = useLang();
  const isEn = lang === "en";
  const items = isEn ? EN_CONTACT_FAQ : ID_FAQ;

  return (
    <section
      aria-labelledby="faq-kontak-heading"
      className="w-full pt-8 md:pt-12 pb-2 px-4 sm:px-6"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
          {/* Left: Section Heading */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2
              id="faq-kontak-heading"
              className="text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight text-[#0F172A]"
            >
              {isEn
                ? "Frequently Asked Questions"
                : "Pertanyaan yang Sering Ditanyakan"}
            </h2>
            <p className="mt-1.5 text-[13.5px] sm:text-sm text-[#475569] max-w-[420px] mx-auto lg:mx-0 leading-relaxed">
              {isEn
                ? "Quick answers on dispatch hours, inspection fee, and service warranty."
                : "Informasi singkat seputar jadwal kunjungan, biaya pengecekan, dan garansi."}
            </p>
          </div>

          {/* Right: FAQ Accordion List (aligned with Map column above) */}
          <div className="lg:col-span-7 w-full space-y-2.5 sm:space-y-3">
            {items.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-[#E2E8F0] bg-white open:border-[#BFDBFE] open:bg-[#F8FAFF] transition-colors"
              >
                <summary className="relative flex min-h-[48px] cursor-pointer list-none items-center justify-center px-10 sm:px-12 py-3.5 text-center text-[13.5px] sm:text-[14px] font-bold text-[#0F172A] [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <ChevronDown
                    className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 size-4 shrink-0 text-[#64748B] transition-transform duration-150 group-open:rotate-180 group-open:text-[#0070C0]"
                    aria-hidden="true"
                  />
                </summary>
                <div className="border-t border-[#E2E8F0]/80 px-4 sm:px-8 pb-4 pt-2.5 text-center text-[13px] sm:text-[13.5px] leading-relaxed text-[#475569]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection;
