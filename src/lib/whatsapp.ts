import type { Lang } from "./i18n";
import { site } from "./site";
import type { PriceRow, Service } from "./types";

export function waLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const waText = {
  general: (lang: Lang = "id"): string =>
    lang === "en"
      ? "Hello Jaya AC, I would like to book an AC service."
      : "Halo Jaya AC, saya mau booking service AC.",
  schedule: (lang: Lang = "id"): string =>
    lang === "en"
      ? "Hello Jaya AC, I would like to schedule a technician visit.\nAddress: \nIssue: "
      : "Halo Jaya AC, saya mau pesan jadwal kunjungan teknisi.\nAlamat: \nKeluhan: ",
  service: (s: Service, lang: Lang = "id", localizedName?: string): string =>
    lang === "en"
      ? `Hello Jaya AC, I would like to book ${localizedName ?? s.name}.\nAC Capacity: \nAddress: `
      : `Halo Jaya AC, saya mau pesan layanan ${s.name}.\nUkuran AC: \nAlamat: `,
  servicePk: (
    s: Service,
    pkLabel: string,
    price: string,
    lang: Lang = "id",
    localizedName?: string
  ): string =>
    lang === "en"
      ? `Hello Jaya AC, I would like to book ${localizedName ?? s.name} for a ${pkLabel} AC (est. ${price}).\nNumber of units: \nAddress: `
      : `Halo Jaya AC, saya mau pesan ${s.name} untuk AC ${pkLabel} (estimasi ${price}).\nJumlah unit: \nAlamat: `,
  priceRow: (r: PriceRow, lang: Lang = "id", localizedLabel?: string): string =>
    lang === "en"
      ? `Hello Jaya AC, I would like to book ${localizedLabel ?? r.label} (from price list).\nAC Capacity: \nAddress: `
      : `Halo Jaya AC, saya mau pesan ${r.label} (dari daftar harga).\nUkuran AC: \nAlamat: `,
  warranty: (lang: Lang = "id"): string =>
    lang === "en"
      ? "Hello Jaya AC, I would like to claim my service warranty.\nOrder phone number: \nIssue: "
      : "Halo Jaya AC, saya mau klaim garansi.\nNomor HP saat order: \nKeluhan: ",
};
