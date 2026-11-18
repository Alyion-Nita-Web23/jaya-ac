import type { Lang } from "./i18n";

/**
 * Format angka rupiah.
 * Default tanpa spasi: "Rp75.000"
 * Dengan spasi: "Rp 75.000"
 */
export function formatRupiah(amount: number, withSpace = false): string {
  const formatted = new Intl.NumberFormat("id-ID").format(amount);
  return withSpace ? `Rp ${formatted}` : `Rp${formatted}`;
}

/**
 * Format tampilan garansi.
 */
export function formatWarranty(
  days: number | null,
  lang: Lang = "id"
): string {
  if (days === null || days === undefined) {
    return "—";
  }
  return lang === "en" ? `${days} Days` : `${days} Hari`;
}
