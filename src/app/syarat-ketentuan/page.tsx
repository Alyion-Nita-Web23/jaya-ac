import type { Metadata } from "next";
import LegalPageView from "@/components/legal/LegalPageView";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Syarat & Ketentuan — ${site.brandLong}`,
  description: `Syarat & ketentuan pemesanan, biaya pengecekan, pembayaran, dan garansi servis AC ${site.brandLong}.`,
};

export default function SyaratKetentuanPage() {
  return <LegalPageView kind="terms" />;
}
