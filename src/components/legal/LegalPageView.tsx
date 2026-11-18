"use client";
// Shared bilingual legal page view for /syarat-ketentuan and /kebijakan-privasi.

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formatRupiah } from "@/lib/format";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

interface LegalPageViewProps {
  kind: "terms" | "privacy";
}

export function LegalPageView({ kind }: LegalPageViewProps) {
  const { lang } = useLang();
  const isEn = lang === "en";

  const isTerms = kind === "terms";

  const title = isTerms
    ? isEn
      ? "Terms & Conditions"
      : "Syarat & Ketentuan"
    : isEn
      ? "Privacy Policy"
      : "Kebijakan Privasi";

  const sections = isTerms
    ? isEn
      ? [
          {
            h: "1. Booking & Technician Schedule",
            p: `Service bookings are confirmed via WhatsApp (${site.phoneDisplay}) or phone within our operating hours (${site.hours.opens.replace(":", ".")}–${site.hours.closes.replace(":", ".")} WIB, Mon–Sun). Same-day visits depend on technician slot availability.`,
          },
          {
            h: "2. Inspection Fee & Pricing Agreement",
            p: `Initial inspection or call-out fee is ${formatRupiah(site.callOutFee)} per visit across Batam and is 100% waived if you proceed with the recommended service. Final pricing is written on the receipt before any work begins.`,
          },
          {
            h: "3. Payment Terms",
            p: "No upfront deposit is required. Payment is made only after work is completed and cooling performance has been verified via cash, bank transfer, or QRIS.",
          },
          {
            h: "4. Workmanship Warranty",
            p: `Completed services include a ${site.warrantyDays.min}–${site.warrantyDays.max} day warranty according to the job category listed on your receipt. Warranty covers recurring issues on the exact serviced component, excluding third-party tampering, electrical surges, or external physical damage.`,
          },
        ]
      : [
          {
            h: "1. Pemesanan & Jadwal Kunjungan",
            p: `Pemesanan dikonfirmasi melalui WhatsApp (${site.phoneDisplay}) atau telepon pada jam operasional (${site.hours.label}). Kunjungan hari yang sama mengikuti ketersediaan slot teknisi.`,
          },
          {
            h: "2. Biaya Pengecekan & Kesepakatan Harga",
            p: `Biaya pengecekan awal sebesar ${formatRupiah(site.callOutFee)} per kunjungan se-Batam dan 100% gratis apabila pengerjaan dilanjutkan. Biaya pasti selalu dicatat pada nota sebelum pengerjaan dimulai.`,
          },
          {
            h: "3. Ketentuan Pembayaran",
            p: "Tanpa uang muka (DP). Pembayaran dilakukan setelah pekerjaan selesai dan AC dicek dingin kembali melalui tunai, transfer bank, atau QRIS.",
          },
          {
            h: "4. Garansi Pengerjaan",
            p: `Pekerjaan dilindungi garansi ${site.warrantyDays.min}–${site.warrantyDays.max} hari sesuai jenis layanan yang tertera pada nota. Garansi berlaku untuk titik kerusakan atau komponen yang sama, dan tidak mencakup gangguan voltase PLN ekstrem, pembongkaran pihak lain, maupun kerusakan fisik eksternal.`,
          },
        ]
    : isEn
      ? [
          {
            h: "1. Information You Share",
            p: `${site.brandLong} does not collect form submissions or user accounts on this website. Contact details (name, phone number, service address, and AC issue) are shared directly by you when contacting our team via WhatsApp or phone.`,
          },
          {
            h: "2. How Your Data Is Used",
            p: "Your address and contact information are used solely to dispatch technicians, prepare service notes, and verify warranty claims.",
          },
          {
            h: "3. Local Preferences & Third-Party Links",
            p: "Selected language preferences (ID/EN) are stored locally in your browser's localStorage. External links open WhatsApp or Google Maps under their respective privacy policies.",
          },
          {
            h: "4. Contact for Privacy Questions",
            p: `Questions regarding your service records may be directed to our customer service line at ${site.phoneDisplay} or our workshop at ${site.address.street}, ${site.address.locality}.`,
          },
        ]
      : [
          {
            h: "1. Informasi yang Anda Berikan",
            p: `${site.brandLong} tidak mengumpulkan data formulir atau akun pengguna di website ini. Data kontak (nama, nomor telepon, alamat lokasi, dan keluhan AC) dikirim langsung oleh Anda saat menghubungi tim kami via WhatsApp atau telepon.`,
          },
          {
            h: "2. Penggunaan Informasi",
            p: "Alamat dan nomor kontak hanya digunakan untuk penjadwalan kunjungan teknisi, pembuatan nota servis, dan verifikasi klaim garansi layanan.",
          },
          {
            h: "3. Preferensi Browser & Tautan Pihak Ketiga",
            p: "Pilihan bahasa (ID/EN) disimpan secara lokal pada browser Anda (localStorage). Tautan ke WhatsApp dan Google Maps tunduk pada kebijakan privasi layanan masing-masing.",
          },
          {
            h: "4. Kontak Terkait Data Layanan",
            p: `Pertanyaan mengenai riwayat nota atau layanan dapat menghubungi CS kami di ${site.phoneDisplay} atau workshop ${site.address.street}, ${site.address.locality}.`,
          },
        ];

  return (
    <main className="w-full bg-white py-10 md:py-14 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[820px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#334155] hover:text-[#0070C0] transition-colors"
        >
          <ArrowLeft className="size-3.5 text-[#0070C0]" aria-hidden="true" />
          <span>{isEn ? "Back to Home" : "Kembali ke Beranda"}</span>
        </Link>

        <h1 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A]">
          {title}
        </h1>
        <p className="mt-2 text-sm text-[#64748B]">{site.brandLong}</p>

        <div className="mt-7 space-y-6">
          {sections.map((sec) => (
            <section key={sec.h} className="rounded-xl border border-[#E2E8F0] bg-[#FAFBFF] p-5">
              <h2 className="text-[15.5px] font-bold text-[#0F172A]">{sec.h}</h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#475569]">
                {sec.p}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

export default LegalPageView;
