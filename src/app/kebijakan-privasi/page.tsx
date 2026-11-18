import type { Metadata } from "next";
import LegalPageView from "@/components/legal/LegalPageView";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Kebijakan Privasi — ${site.brandLong}`,
  description: `Kebijakan privasi pelanggan ${site.brandLong} terkait pemesanan via WhatsApp dan telepon.`,
};

export default function KebijakanPrivasiPage() {
  return <LegalPageView kind="privacy" />;
}
