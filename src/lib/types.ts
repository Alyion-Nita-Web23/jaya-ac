export type PkSize = "0.5-1" | "1.5" | "2";

export interface PkOption {
  readonly key: PkSize;
  readonly label: string;
  readonly room: string;
}

export type PriceGroupId =
  | "perawatan"
  | "freon"
  | "bocor"
  | "bongkar-pasang"
  | "komponen"
  | "material";

export interface PriceGroup {
  id: PriceGroupId;
  label: string;
  icon: string;
}

export type PriceRow = {
  id: string;
  groupId: PriceGroupId;
  label: string;
  description: string;
  warrantyDays: number | null;
  needsConfirmation?: boolean;
} & (
  | { kind: "per-pk"; prices: Record<PkSize, number> }
  | { kind: "from"; from: number; note?: string }
  | { kind: "per-unit"; price: number; unit: string }
);

export interface WarrantyPolicy {
  covered: string[];
  notCovered: string[];
  claimSteps: { title: string; body: string }[];
}

export type ServiceCategory = "perawatan" | "perbaikan" | "instalasi";

export interface CategoryInfo {
  readonly id: ServiceCategory;
  readonly label: string;
  readonly icon: string;
}

export interface Service {
  slug: string;
  name: string;
  title: string;
  category: ServiceCategory;
  cardDescription: string;
  lead: string;
  image: { src: string; alt: string };
  priceRowIds: string[];
  primaryPriceRowId?: string;
  warrantyDays: number | null;
  steps: { title: string; body: string }[];
  tierFeatures?: Record<PkSize, string[]>;
  favoritePk?: PkSize;
  promo?: { title: string; body: string; badge: string };
  relatedSlugs: string[];
  cardTag?: string;
  featuredOnHome: boolean;
  draft?: boolean;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandLong: string;
  tagline: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsapp: string;
  hours: {
    label: string;
    note: string;
    opens: string;
    closes: string;
    days: string[];
  };
  address: {
    street: string;
    locality: string;
    city: string;
    region: string;
    country: string;
  };
  coverage: string;
  geo: { lat: number; lng: number };
  mapsUrl: string;
  mapsEmbedUrl: string;
  social: { instagram: string; facebook: string };
  callOutFee: number;
  warrantyDays: { min: number; max: number };
  url: string;
}

