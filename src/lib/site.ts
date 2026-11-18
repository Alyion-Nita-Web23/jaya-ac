import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Jaya AC",
  brandLong: "Jaya AC Batam",
  tagline: "Servis & perawatan AC rumah, ruko, dan kantor di Batam.",
  phoneDisplay: "0812-7000-1234",
  phoneTel: "+6281270001234",
  whatsapp: "6281270001234",
  hours: {
    label: "Senin – Minggu: 08.00 – 20.00 WIB",
    note: "Tetap melayani di akhir pekan & tanggal merah",
    opens: "08:00",
    closes: "20:00",
    days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  },
  address: {
    street: "Kompleks Sentral Bisnis Blok B No. 12",
    locality: "Batam Center",
    city: "Kota Batam",
    region: "Kepulauan Riau",
    country: "ID",
  },
  coverage: "Seluruh Pulau Batam",
  geo: { lat: 1.1278, lng: 104.0538 },
  mapsUrl: "https://maps.google.com/?q=1.1278,104.0538",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s1.1278,104.0538!6i13!3m1!1sid!5m1!1sid",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  callOutFee: 50_000,
  warrantyDays: { min: 30, max: 60 },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaya-ac.com",
};

