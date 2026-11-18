import type { Metadata } from "next";
import { SERVICES, countByCategory, priceFrom } from "@/lib/services";
import CategoryFilter, {
  type ServiceCardItem,
} from "@/components/services/CategoryFilter";
import CtaBand from "@/components/layout/CtaBand";

export const metadata: Metadata = {
  title: "Layanan Servis & Perawatan AC Batam — Jaya AC",
  description:
    "Solusi lengkap 14 layanan servis, perbaikan, dan instalasi AC split rumah tangga & komersial di Batam. Dikerjakan teknisi berpengalaman dengan garansi 30–60 hari.",
};

export default function LayananPage() {
  const counts = countByCategory();

  const items: ServiceCardItem[] = SERVICES.map((service) => ({
    slug: service.slug,
    name: service.name,
    category: service.category,
    image: service.image,
    cardDescription: service.cardDescription,
    minPrice: priceFrom(service),
  }));

  return (
    <main className="w-full bg-white">
      <section className="w-full pt-8 md:pt-14 pb-10 md:pb-12 px-4 sm:px-6">
        <div className="mx-auto w-full max-w-[1200px]">
          <CategoryFilter items={items} counts={counts} />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
