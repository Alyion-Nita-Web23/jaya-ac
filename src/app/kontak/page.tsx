import type { Metadata } from "next";
import ContactBlock from "@/components/sections/ContactBlock";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import CtaBand from "@/components/layout/CtaBand";

export const metadata: Metadata = {
  title: "Hubungi Kami — Servis AC Batam | Jaya AC",
  description:
    "Hubungi Jaya AC Batam lewat WhatsApp atau telepon di 0812-7000-1234. Workshop di Kompleks Sentral Bisnis Blok B No. 12, Batam Center. Buka Senin–Minggu 08.00–20.00 WIB.",
};

export default function KontakPage() {
  return (
    <main className="w-full bg-white">
      <ContactBlock asH1 />
      <ContactInfoSection />
      <CtaBand />
    </main>
  );
}

