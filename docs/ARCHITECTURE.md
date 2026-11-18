# ARCHITECTURE — Website Jaya AC (v2)

Keputusan v2: **WhatsApp saja, tanpa form & database** → seluruh situs adalah **HTML statis**. Tidak ada server Node di produksi.

## 1. Ringkasan

| Lapisan | Pilihan | Alasan |
|---|---|---|
| Framework | **Next.js 16** App Router, `output: "export"` | Komponen React + SEO, hasil akhir file statis |
| Styling | **Tailwind CSS v4** (`@theme` di `globals.css`) | Token dari `DESIGN.md` di satu tempat |
| Ikon | `lucide-react` + 1 SVG WhatsApp lokal | Ringan, tree-shake |
| Font | `@fontsource-variable/plus-jakarta-sans` | Self-hosted |
| Gambar | WebP/AVIF yang sudah dioptimasi saat build (`sharp` script) | `next/image` optimizer tidak tersedia di static export |
| Data | TypeScript di `src/lib/` | `SCHEMA.md` |
| Backend / DB | **Tidak ada** | Pemesanan via `wa.me` |
| Hosting | Nginx (container `nginx:alpine` atau Nginx host) melayani folder `out/`, di belakang Cloudflare | Sama dengan pola situs statis lain di VPS |

## 2. Prinsip
1. **Server Component default.** `"use client"` hanya untuk: filter kategori (Layanan), filter PK (Harga), pemilih PK (detail), listener analytics. Masing-masing komponen kecil & terisolasi.
2. **Tanpa JS pun berguna.** HTML awal menampilkan semua layanan, semua kolom harga, dan tautan WA default. JS hanya menambah filter/pemilih.
3. **Satu sumber data.** Angka harga & kontak hanya di `src/lib/`. Komponen tidak menulis angka.
4. **Tanpa library berat.** Tanpa UI kit, animation library, carousel, state manager.

## 3. Struktur Folder

```
jaya-ac/
├── AGENTS.md / CLAUDE.md
├── docs/
│   ├── PRD.md  SCHEMA.md  DESIGN.md  ARCHITECTURE.md  STITCH_PROMPTS.md
│   └── design/                       # screenshot Figma (referensi visual agent)
│       ├── beranda.png  layanan.png  detail-layanan.png  harga.png  kontak.png
├── public/
│   ├── brand/  logo-jaya-ac.png  logo-mark.png  (+ .svg dari klien)
│   └── images/ hero/  layanan/<slug>.webp  cta/
├── scripts/optimize-images.mjs       # sharp: resize + WebP/AVIF ke public/images
├── next.config.ts
└── src/
    ├── app/
    │   ├── layout.tsx                # font, Header, Footer, MobileStickyBar, WhatsAppFab, Analytics, JSON-LD
    │   ├── globals.css               # @theme token
    │   ├── page.tsx                  # Beranda
    │   ├── layanan/page.tsx
    │   ├── layanan/[slug]/page.tsx   # generateStaticParams dari services
    │   ├── harga/page.tsx
    │   ├── kontak/page.tsx
    │   ├── syarat-ketentuan/page.tsx
    │   ├── kebijakan-privasi/page.tsx
    │   ├── sitemap.ts  robots.ts  not-found.tsx
    ├── components/
    │   ├── layout/    Header, Footer, MobileStickyBar, WhatsAppFab, Analytics(client)
    │   ├── sections/  HomeHero, FeatureStrip, ServiceCardGrid, PriceCatalog, ContactBlock, CtaBand,
    │   │              ServiceDetailHero, BookingCard, ProcessSteps, TierCards, PromoBanner, RelatedServices,
    │   │              WarrantyTerms, ClaimSteps
    │   ├── interactive/ CategoryFilter(client), PkFilter(client), PkSelector(client)
    │   └── ui/        Container, Button, ButtonLink, WaLink, Badge, WarrantyChip, SectionHeading, Icon, WhatsAppIcon
    └── lib/
        ├── site.ts  pricing.ts  services.ts  home.ts  whatsapp.ts  format.ts  types.ts
        └── validate-content.ts
```

## 4. Perilaku Interaktif

| Komponen | Tanpa JS | Dengan JS |
|---|---|---|
| `CategoryFilter` (Layanan) | Semua 14 kartu tampil; tab tampil sebagai label | Klik tab menyaring kartu; sinkron ke `?kategori=` (via `history.replaceState`) agar bisa dibagikan |
| `PkFilter` (Harga) | Semua kolom tampil | Menyembunyikan kolom PK lain (`data-pk` + kelas `hidden`); di HP default "0,5–1 PK" |
| `PkSelector` (detail) | Opsi 1,5 PK terpilih; harga & link WA untuk 1,5 PK | Ganti PK → harga, chip, dan teks WA ikut berubah |

Implementasi filter: render semua item di server, client component hanya mengubah atribut `hidden`/kelas. Tidak memindahkan data ke client.

## 5. Rendering & Build

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,          // /layanan/cuci-ac/index.html → mudah dilayani Nginx
  images: { unoptimized: true },// gambar sudah dioptimasi oleh scripts/optimize-images.mjs
  poweredByHeader: false,
};
```

- `npm run build` → folder `out/` (± 22 halaman: 4 utama + 14 detail + 2 legal + 404 + sitemap).
- `sitemap.ts` & `robots.ts` memakai `export const dynamic = "force-static"`.
- Header keamanan diatur di **Nginx** (static export tidak mendukung `headers()` di `next.config`).

### Anggaran performa (mobile, 4G)
- LCP < 2,0 s. Elemen LCP Beranda = foto hero → `fetchpriority="high"`, WebP ≤ 120 KB, `srcset` 640/1024/1600.
- First-load JS ≤ 110 KB gzip.
- Peta: iframe `loading="lazy"` di bawah lipatan, atau gambar statis + tautan.
- Tidak ada skrip pihak ketiga sebelum interaksi (analytics `lazyOnload`).

## 6. Deploy

```nginx
server {
  server_name jaya-ac.example;
  root /var/www/jaya-ac/out;

  location / { try_files $uri $uri/ $uri.html =404; }
  location /_next/static/ { add_header Cache-Control "public, max-age=31536000, immutable"; }
  location ~* \.(webp|avif|png|svg|woff2)$ { add_header Cache-Control "public, max-age=2592000"; }

  add_header X-Content-Type-Options nosniff always;
  add_header Referrer-Policy strict-origin-when-cross-origin always;
  add_header X-Frame-Options SAMEORIGIN always;
  add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
  error_page 404 /404.html;
}
```

- CI (GitHub Actions): `npm ci && npm run build` → rsync `out/` ke VPS (atau build image `nginx:alpine` berisi `out/`).
- Cloudflare: cache everything untuk HTML (TTL pendek, purge saat deploy) + aset immutable.

## 7. Lingkungan

| Variabel | Wajib | Keterangan |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | produksi | Domain kanonik (sitemap, canonical, OG, JSON-LD) |
| `NEXT_PUBLIC_ANALYTICS_ID` | opsional | GA4 / Plausible |

Tidak ada secret — situs tidak punya backend.

## 8. Jika Nanti Butuh Form/Database
Ubah `output: "export"` menjadi `output: "standalone"`, tambahkan Server Action + PostgreSQL. Skema booking v1 (tabel `bookings`, `booking_events`, `warranty_claims`) bisa dipakai lagi — minta ke tim, tidak disertakan di v2 agar agent tidak membangunnya.
