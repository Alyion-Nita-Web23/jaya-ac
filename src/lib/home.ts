import type { FeatureItem } from "./types";

export const HOME_HERO = {
  h1: "AC Dingin Kembali, Tanpa Ribet.",
  sub: "Layanan cuci, perbaikan, dan isi freon AC rumah atau kantor di Batam. Teknisi tepat waktu dengan garansi pengerjaan.",
  ctaSchedule: "Pesan Jadwal",
  ctaWa: "Chat WhatsApp",
  image: "/images/hero/hero-beranda-3k-desk.webp",
  mobileImage: "/images/hero/hero-beranda-3k.webp",
} as const;

export const HOME_FEATURES: FeatureItem[] = [
  {
    icon: "Zap",
    title: "Respon Cepat",
    description: "Siap datang di hari yang sama",
  },
  {
    icon: "ShieldCheck",
    title: "Teknisi Berpengalaman",
    description: "Profesional & Handal",
  },
  {
    icon: "ThumbsUp",
    title: "Harga Transparan",
    description: "Tanpa Biaya Tersembunyi",
  },
  {
    icon: "Headphones",
    title: "Layanan Ramah",
    description: "Kepuasan Anda Prioritas Kami",
  },
];

export const HOME_FEATURED_SERVICE_SLUGS = [
  "cuci-ac",
  "isi-freon",
  "troubleshooting",
  "bongkar-pasang",
] as const;

export const HOME_PRICE_ROW_IDS = [
  "cuci-rutin",
  "tambah-freon",
  "saluran-mampet",
  "bongkar-pasang",
  "modul-pcb",
] as const;

