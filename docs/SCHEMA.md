# SCHEMA — Struktur Data Jaya AC (v2)

Keputusan v2: **pemesanan lewat WhatsApp saja → tidak ada database, tidak ada form, tidak ada Server Action.** Semua data adalah konten statis TypeScript di `src/lib/`, di-build menjadi HTML statis.

Jika struktur berubah, perbarui dokumen ini **dan** `src/lib/types.ts` dalam commit yang sama. Nilai data (harga, layanan) bersumber dari `PRD.md` §2 dan §8.

---

## 1. Peta File Data

| File | Isi | Sumber nilai |
|---|---|---|
| `src/lib/site.ts` | Nama, kontak, alamat, jam, sosial, biaya cek | PRD §2 |
| `src/lib/pricing.ts` | Grup harga, baris harga, garansi | PRD §8.2, §8.4 |
| `src/lib/services.ts` | 14 layanan + konten detail | PRD §8.1, §8.3 |
| `src/lib/whatsapp.ts` | Builder link & template pesan | §4 di bawah |
| `src/lib/home.ts` | Teks hero, strip keunggulan, ID layanan & baris harga Beranda | PRD §7.1 |
| `src/lib/types.ts` | Semua tipe | dokumen ini |

## 2. Tipe

### 2.1 Site — `src/lib/site.ts`

```ts
export const site = {
  name: "Jaya AC",
  brandLong: "Jaya AC Batam",
  tagline: "Servis & perawatan AC rumah, ruko, dan kantor di Batam.",
  phoneDisplay: "0812-7000-1234",
  phoneTel: "+6281270001234",        // untuk tel:
  whatsapp: "6281270001234",         // untuk wa.me (tanpa +)
  hours: {
    label: "Senin – Minggu: 08.00 – 20.00 WIB",
    note: "Tetap melayani di akhir pekan & tanggal merah",
    opens: "08:00",
    closes: "20:00",
    days: ["Mo","Tu","We","Th","Fr","Sa","Su"],
  },
  address: {
    street: "Kompleks Sentral Bisnis Blok B No. 12",
    locality: "Batam Center",
    city: "Kota Batam",
    region: "Kepulauan Riau",
    country: "ID",
  },
  coverage: "Seluruh Pulau Batam",
  geo: { lat: 0, lng: 0 },           // GANTI: koordinat workshop
  mapsUrl: "",                       // GANTI: tautan Google Maps
  mapsEmbedUrl: "",                  // GANTI: URL embed
  social: { instagram: "", facebook: "" }, // GANTI
  callOutFee: 50_000,
  warrantyDays: { min: 30, max: 60 },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaya-ac.example",
} as const;
```

### 2.2 Harga — `src/lib/pricing.ts`

```ts
export type PkSize = "0.5-1" | "1.5" | "2";

export const PK_OPTIONS = [
  { key: "0.5-1", label: "0,5 – 1 PK", room: "Kamar" },
  { key: "1.5",   label: "1,5 PK",     room: "Ruang Tamu" },
  { key: "2",     label: "2 PK",       room: "Kantor/Ruko" },
] as const;

export type PriceGroupId = "perawatan" | "freon" | "bocor" | "bongkar-pasang" | "komponen" | "material";

export interface PriceGroup {
  id: PriceGroupId;
  label: string;          // "Cuci & Perawatan Rutin"
  icon: string;           // nama ikon Lucide
}

export type PriceRow = {
  id: string;             // "cuci-rutin" — dipakai services.priceRowIds
  groupId: PriceGroupId;
  label: string;          // "Cuci AC Rutin"
  description: string;    // "Pembersihan evaporator indoor, filter debu, dan kompresor outdoor."
  warrantyDays: number | null;   // null = belum dikonfirmasi → chip tidak tampil
  needsConfirmation?: boolean;   // true untuk baris ✚ (PRD §8.2)
} & (
  | { kind: "per-pk"; prices: Record<PkSize, number> }
  | { kind: "from"; from: number; note?: string }          // "Mulai Rp250.000 (sesuai hasil diagnosa)"
  | { kind: "per-unit"; price: number; unit: string }       // "Rp85.000 / meter"
);

export const HOME_PRICE_ROW_IDS = ["cuci-rutin", "tambah-freon", "saluran-mampet", "bongkar-pasang", "modul-pcb"];

export interface WarrantyPolicy {
  covered: string[];      // 4 butir "100% Ditanggung Garansi"
  notCovered: string[];   // 4 butir "Kondisi di Luar Garansi"
  claimSteps: { title: string; body: string }[];  // 3 langkah
}
```

Aturan:
- Uang = **integer rupiah**. Tampilan lewat `formatRupiah()` (`Intl.NumberFormat("id-ID")`).
- Harga per-PK tidak boleh ditulis di tempat lain. Kartu, detail, Beranda membaca dari `priceRows`.

### 2.3 Layanan — `src/lib/services.ts`

```ts
export type ServiceCategory = "perawatan" | "perbaikan" | "instalasi";

export const CATEGORIES = [
  { id: "perawatan", label: "Perawatan", icon: "SprayCan" },
  { id: "perbaikan", label: "Perbaikan", icon: "Wrench" },
  { id: "instalasi", label: "Instalasi", icon: "Drill" },
] as const;

export interface Service {
  slug: string;                  // "cuci-ac"
  name: string;                  // "Cuci AC" — kartu & menu
  title: string;                 // H1 detail: "Cuci AC Rutin & Deep Clean Batam"
  category: ServiceCategory;
  cardDescription: string;       // ≤ 120 karakter, kartu Layanan
  lead: string;                  // paragraf hero detail
  image: { src: string; alt: string };        // /images/layanan/cuci-ac.webp
  priceRowIds: string[];         // relasi ke PriceRow.id; [] = "Konsultasi"
  primaryPriceRowId?: string;    // baris yang dipakai kartu tarif per-PK & pemilih PK di detail
  warrantyDays: number | null;
  steps: { title: string; body: string }[];   // tepat 4
  tierFeatures: Record<PkSize, string[]>;     // 4 ceklis per kartu tarif (hanya jika primary per-pk)
  favoritePk?: PkSize;           // kartu bertanda "Favorit" (default "1.5")
  promo?: { title: string; body: string; badge: string };  // banner, mis. diskon borongan
  relatedSlugs: string[];        // tepat 3
  cardTag?: string;              // label kecil di kartu terkait, mis. "R32 / R410A / R22"
  featuredOnHome: boolean;
  draft?: boolean;               // konten belum disetujui klien
}
```

Turunan (dihitung, **tidak ditulis manual**):
```ts
priceFrom(service): number | null      // min dari semua priceRowIds; null → "Konsultasi"
countByCategory(): Record<ServiceCategory | "semua", number>   // untuk badge tab (14/5/6/3)
```

Validasi saat build (`src/lib/validate-content.ts`, dijalankan di `generateStaticParams` atau skrip `npm run check:content`):
- setiap `priceRowIds` & `relatedSlugs` merujuk ID yang ada;
- `steps.length === 4`, `relatedSlugs.length === 3`;
- jumlah layanan per kategori = 5 / 6 / 3;
- tidak ada `draft: true` saat `NODE_ENV=production` dan `ALLOW_DRAFT` tidak di-set (peringatan, bukan error, sampai konten final).

## 3. Contoh Data (Cuci AC)

```ts
{
  slug: "cuci-ac",
  name: "Cuci AC",
  title: "Cuci AC Rutin & Deep Clean Batam",
  category: "perawatan",
  cardDescription: "Pembersihan evaporator, filter, blower, dan outdoor unit agar pendinginan kembali maksimal dan wangi.",
  lead: "Pembersihan total unit indoor & outdoor secara higienis, bergaransi dingin 30 hari. Teknisi berpengalaman siap datang tepat waktu ke lokasi Anda di Batam.",
  image: { src: "/images/layanan/cuci-ac.webp", alt: "Teknisi Jaya AC membersihkan unit indoor AC split" },
  priceRowIds: ["cuci-rutin"],
  primaryPriceRowId: "cuci-rutin",
  warrantyDays: 30,
  steps: [
    { title: "Diagnosa Awal", body: "Pengecekan temperatur hembusan awal, arus kompresor, dan kelistrikan unit." },
    { title: "Cuci Evaporator", body: "Pasang terpal pelindung anti-bocor, lepas cover, dan semprot jet washer kisi indoor." },
    { title: "Flushing Outdoor", body: "Pembersihan saluran drainase dari lumut dan cuci kondensor unit luar." },
    { title: "Uji QC & Garansi", body: "Pengukuran temperatur digital akhir, area kerja dibersihkan, dan aktivasi garansi 30 hari." },
  ],
  tierFeatures: {
    "0.5-1": ["Unit Indoor & Outdoor", "Cek Tekanan Freon & Arus", "Garansi Dingin 30 Hari", "Estimasi pengerjaan ±45 menit"],
    "1.5":   ["Unit Indoor & Outdoor", "Cek Tekanan Freon & Arus", "Garansi Dingin 30 Hari", "Estimasi pengerjaan ±50 menit"],
    "2":     ["Unit Indoor & Outdoor", "Cek Tekanan Freon & Arus", "Garansi Dingin 30 Hari", "Pembersihan mendalam ±60 menit"],
  },
  favoritePk: "1.5",
  promo: { title: "Diskon Borongan", body: "Potongan Rp10.000/unit untuk order minimal 3 unit di alamat yang sama.", badge: "Hemat s.d. Rp50.000+" },
  relatedSlugs: ["isi-freon", "cuci-besar", "bocor-pipa-freon"],
  featuredOnHome: true,
}
```

## 4. Template WhatsApp — `src/lib/whatsapp.ts`

```ts
export function waLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const waText = {
  general:  () => "Halo Jaya AC, saya mau booking service AC.",
  schedule: () => "Halo Jaya AC, saya mau pesan jadwal kunjungan teknisi.\nAlamat: \nKeluhan: ",
  service:  (s: Service) => `Halo Jaya AC, saya mau pesan layanan ${s.name}.\nUkuran AC: \nAlamat: `,
  servicePk:(s: Service, pkLabel: string, price: string) =>
    `Halo Jaya AC, saya mau pesan ${s.name} untuk AC ${pkLabel} (estimasi ${price}).\nJumlah unit: \nAlamat: `,
  priceRow: (r: PriceRow) => `Halo Jaya AC, saya mau pesan ${r.label} (dari daftar harga).\nUkuran AC: \nAlamat: `,
  warranty: () => "Halo Jaya AC, saya mau klaim garansi.\nNomor HP saat order: \nKeluhan: ",
};
```

Pemakaian per tombol: lihat PRD §10. Setiap `<a>` WA wajib `target="_blank" rel="noopener"` dan atribut analytics (§6).

## 5. Structured Data (JSON-LD)

**Layout (semua halaman):**
```json
{
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Jaya AC",
  "url": "https://jaya-ac.example",
  "telephone": "+6281270001234",
  "image": "https://jaya-ac.example/brand/logo-jaya-ac.png",
  "priceRange": "Rp85.000 – Rp550.000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kompleks Sentral Bisnis Blok B No. 12, Batam Center",
    "addressLocality": "Batam",
    "addressRegion": "Kepulauan Riau",
    "addressCountry": "ID"
  },
  "areaServed": { "@type": "Place", "name": "Pulau Batam" },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "08:00", "closes": "20:00"
  }],
  "sameAs": ["<instagram>", "<facebook>"]
}
```
- `geo` ditambahkan setelah koordinat tersedia.
- **Jangan** menambah `aggregateRating`/`review` sampai ada data ulasan Google asli.

**Detail layanan:** `Service` dengan `provider` (HVACBusiness di atas), `areaServed`, dan `offers` (`AggregateOffer` dengan `lowPrice` = `priceFrom`, `priceCurrency: "IDR"`). Layanan "Konsultasi" tanpa `offers`.

## 6. Analytics

Atribut pada elemen, satu listener global (client component kecil):

```html
<a href="https://wa.me/..." data-track="click_whatsapp" data-track-location="price_row" data-track-service="cuci-ac" data-track-pk="1.5">
```

```ts
type AnalyticsEvent =
  | { name: "click_whatsapp"; location: "header" | "hero" | "card" | "detail" | "tier_card" | "price_row" | "cta_band" | "sticky" | "fab" | "contact" | "footer"; service?: string; pk?: string }
  | { name: "click_call"; location: "sticky" | "detail" | "cta_band" | "contact" | "footer" }
  | { name: "filter_category"; category: string }
  | { name: "filter_pk"; pk: string; page: "harga" | "detail" };
```
