import type { Metadata } from "next";
import {
  HARGA_PAGE_ROW_IDS,
  PK_OPTIONS,
  PRICE_GROUPS,
  PRICE_ROWS,
  WARRANTY_POLICY,
} from "@/lib/pricing";
import { site } from "@/lib/site";
import PkFilter from "@/components/pricing/PkFilter";
import WarrantySection from "@/components/pricing/WarrantySection";
import CtaBand from "@/components/layout/CtaBand";

export const metadata: Metadata = {
  title: "Daftar Harga Servis & Ketentuan Garansi AC Batam — Jaya AC",
  description:
    "Estimasi tarif transparan jasa cuci AC, isi freon, perbaikan bocor, dan bongkar pasang unit di Batam dengan garansi resmi 30–60 hari.",
};

export default function HargaPage() {
  const hargaRows = PRICE_ROWS.filter((row) =>
    HARGA_PAGE_ROW_IDS.includes(row.id)
  );
  const hargaGroups = PRICE_GROUPS.filter((group) =>
    hargaRows.some((row) => row.groupId === group.id)
  );

  return (
    <main className="w-full bg-white">
      <section
        aria-labelledby="daftar-harga-heading"
        className="w-full pt-8 md:pt-14 pb-4 md:pb-6 px-4 sm:px-6"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <PkFilter
            pkOptions={PK_OPTIONS}
            groups={hargaGroups}
            rows={hargaRows}
            callOutFee={site.callOutFee}
          />
        </div>
      </section>

      <WarrantySection policy={WARRANTY_POLICY} />

      <CtaBand />
    </main>
  );
}
