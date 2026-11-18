import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PK_OPTIONS, PRICE_ROWS } from "@/lib/pricing";
import { getServiceBySlug, priceFrom, SERVICES } from "@/lib/services";
import { site } from "@/lib/site";
import ServiceDetailView, {
  type RelatedServiceItem,
} from "@/components/services/ServiceDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: `Layanan Tidak Ditemukan — ${site.name}`,
    };
  }

  return {
    title: `${service.title} — ${site.name}`,
    description: service.lead,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const primaryPriceRow = service.primaryPriceRowId
    ? PRICE_ROWS.find((row) => row.id === service.primaryPriceRowId) ?? null
    : null;

  const minPrice = priceFrom(service);

  const relatedItems: RelatedServiceItem[] = service.relatedSlugs
    .map((relSlug) => getServiceBySlug(relSlug))
    .filter((rel): rel is NonNullable<typeof rel> => Boolean(rel))
    .map((rel) => ({
      service: rel,
      minPrice: priceFrom(rel),
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.lead,
    provider: {
      "@type": "HVACBusiness",
      name: site.name,
      url: site.url,
      telephone: site.phoneTel,
    },
    areaServed: {
      "@type": "Place",
      name: site.coverage,
    },
    ...(minPrice !== null
      ? {
          offers: {
            "@type": "AggregateOffer",
            lowPrice: minPrice,
            priceCurrency: "IDR",
          },
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailView
        service={service}
        pkOptions={PK_OPTIONS}
        primaryPriceRow={primaryPriceRow}
        minPrice={minPrice}
        relatedItems={relatedItems}
      />
    </>
  );
}
