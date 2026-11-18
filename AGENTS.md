# AGENTS.md — Jaya AC Website

Aturan untuk AI coding agent (Antigravity, Claude Code, Cursor, Codex, dll.) dan developer. Baca sebelum mengubah kode.

## Konteks

Website jasa service AC **Jaya AC** di Batam. Tujuan tunggal: pengunjung (mayoritas HP) menghubungi Jaya AC lewat **WhatsApp** atau **telepon**. Tidak ada form & database — semua tombol pesan adalah tautan `wa.me`.

## Baca Dulu

| Sumber | Isi | Kapan |
|---|---|---|
| `docs/design/sections/*.png` | **Potongan desain Figma per section, resolusi asli** — acuan visual utama | Sebelum membuat section apa pun. Buka file section yang sedang dikerjakan, bukan screenshot halaman penuh |
| `docs/design/SPEC.md` | **Ukuran terukur** (px) tiap section: font, jarak, lebar, tinggi, radius, warna | Bersama potongan gambar di atas |
| `docs/design/*.png` | Screenshot halaman penuh — hanya untuk melihat urutan section | Gambar ini diperkecil saat dibaca; jangan dipakai untuk mengukur |
| `public/brand/` | Logo | Header, footer, favicon |
| `docs/PRD.md` | Halaman, konten, **data bisnis (§2)**, **14 layanan & harga (§8)**, template WA (§10) | Sebelum menulis teks/data |
| `docs/DESIGN.md` | Token warna, tipografi, komponen, **aturan mobile (§7)** | Sebelum menyentuh UI |
| `docs/SCHEMA.md` | Tipe data & file data | Sebelum mengubah `src/lib/` |
| `docs/ARCHITECTURE.md` | Stack, folder, static export, deploy | Sebelum menambah route/dependensi |

**Jika screenshot dan dokumen berbeda:** layout & gaya → ikuti screenshot. **Warna, kontras, nomor telepon, alamat, jam, harga → ikuti dokumen** (screenshot memuat data lama yang sudah dikoreksi di PRD §2 & §8).

## Perintah

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export ke out/ — WAJIB lolos
npm run lint
npm run typecheck    # tsc --noEmit
```

## Stack (jangan diganti)
Next.js 16 App Router (`output: "export"`) · React 19 · TypeScript strict · Tailwind CSS v4 (`@theme` di `src/app/globals.css`) · lucide-react · font self-hosted Plus Jakarta Sans.

**Jangan menambah:** database/ORM, Server Actions, API routes, form booking, UI kit (shadcn/MUI), animation library, carousel, CSS-in-JS, Google Fonts `<link>`.

## Halaman (hanya ini)
`/` · `/layanan` · `/layanan/[slug]` (14) · `/harga` · `/kontak` · `/syarat-ketentuan` · `/kebijakan-privasi`.
Menu header: Beranda, Layanan, Harga, Kontak. **Jangan** membuat halaman Area atau Tentang.

## Aturan Wajib

### Data
1. Kontak, harga, layanan, garansi **hanya** di `src/lib/*.ts`. Jangan hardcode "0812…" atau "Rp75.000" di JSX.
2. Nomor resmi **0812-7000-1234**, alamat **Kompleks Sentral Bisnis Blok B No. 12, Batam Center**, jam **Senin–Minggu 08.00–20.00 WIB**. Nomor 0812-7000-8899 dan alamat "Batam Center Square Blok C" di screenshot **salah** — jangan dipakai.
3. Harga mengikuti PRD §8.2. Harga "mulai" di kartu **dihitung** dari baris harga, bukan ditulis manual.
4. Uang = integer rupiah, ditampilkan lewat `formatRupiah()`.
5. Ubah bentuk data → perbarui `src/lib/types.ts` dan `docs/SCHEMA.md` di commit yang sama.

### WhatsApp & telepon
6. Semua tombol "Pesan", "Booking via WA", "Chat WhatsApp", "Hubungi WhatsApp" = `<a href={waLink(...)}>` dengan template dari `src/lib/whatsapp.ts` sesuai konteks (layanan, PK, baris harga). `target="_blank" rel="noopener"`.
7. Tambahkan atribut analytics `data-track` sesuai `SCHEMA.md` §6.

### Kejujuran konten
8. Jangan membuat testimoni, rating, jumlah pelanggan, atau sertifikasi. Klaim di PRD §9 hanya tayang jika ada bukti dari klien.
9. Foto layanan: final di `public/images/layanan/<slug>.webp`; sementara pakai `public/images/tmp/layanan-<slug>.webp` (dipotong dari desain). Jangan memakai foto stok dari internet.
10. Konten layanan yang belum disetujui klien diberi `draft: true`.

### Copywriting
11. Bahasa Indonesia lugas. Dilarang: revolusioner, seamless, terdepan, inovatif, solusi terbaik, kelas dunia, mutakhir.

### UI (detail di `docs/DESIGN.md`)
12. Tombol utama `primary` #004B87 teks putih; tombol header/tabel & harga `accent` #0070C0. **Tidak ada oranye.**
13. Tombol WhatsApp `wa` #15803D teks putih. **Jangan** teks putih di #25D366 (kontras 1,98).
14. `sky` #31A3FF (warna logo) hanya dekoratif, jangan untuk teks.
15. Dilarang: `backdrop-blur`, gradien dekoratif (kecuali fade putih hero), emoji, ilustrasi 3D, animasi scroll/pulse.
16. Mobile-first: kelas dasar untuk HP, `sm:`/`md:`/`lg:` untuk layar besar. Ikuti `DESIGN.md` §7 (desain Figma hanya desktop).
17. Mobile Sticky Bar & FAB WA hanya di `layout.tsx`.

### Kode
18. HTML semantik: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`. Satu `<h1>` per halaman.
19. Server Component default. `"use client"` hanya untuk `CategoryFilter`, `PkFilter`, `PkSelector`, `Analytics` — tulis alasannya di komentar baris pertama.
20. Halaman harus tetap bisa dipakai tanpa JS (semua item & kolom tampil, link WA default).
21. Tailwind bersih: tanpa kelas duplikat/bertentangan, tanpa `!important` (kecuali reset `prefers-reduced-motion`), pakai token bukan nilai arbitrer.
22. Tanpa `any`, tanpa `console.log` tersisa.
23. Gambar: `<Image unoptimized>` dengan `width/height` atau `<img>` + `srcset` dari file WebP yang sudah dioptimasi; `priority`/`fetchPriority="high"` hanya foto hero.

## Cara Kerja agar Sama dengan Figma
1. Urutan & prompt lengkap: `docs/design/PROMPTS_ANTIGRAVITY.md`.
2. Kerjakan **satu section per tugas** (bukan satu halaman).
3. Untuk tiap section: buka potongan di `docs/design/sections/`, pakai angka di `docs/design/SPEC.md`.
4. Setelah coding: buka `localhost:3000` di browser **lebar 1280px**, screenshot section tersebut, bandingkan dengan potongan desain, tulis tabel perbedaan (font, jarak, ukuran, radius, warna, posisi), perbaiki sampai sama.
5. Desktop (≥ 1024 px) harus sedekat mungkin dengan desain. Mobile mengikuti `docs/DESIGN.md` §7 dan tidak boleh mengubah tampilan desktop.
6. Container semua halaman: `max-w-[1200px] px-6`.
7. Foto sementara di `public/images/tmp/` (lihat SPEC §6) — pakai agar tampilan mirip, jangan diganti placeholder abu-abu.

## Anggaran Performa
First-load JS Beranda ≤ 110 KB gzip · LCP < 2,0 s mobile · CLS < 0,05.

## Definition of Done
- [ ] `npm run build`, `npm run lint`, `npm run typecheck` lolos
- [ ] Tiap section dibandingkan dengan potongan di `docs/design/sections/` pada lebar 1280px (tabel perbedaan kosong), lalu dicek di 360 / 390 / 768 px
- [ ] Semua link WA membuka teks yang benar; `tel:` benar
- [ ] Tidak ada nomor 8899 / alamat Blok C: `grep -rn "8899\|Blok C" src` kosong
- [ ] Tidak ada kata terlarang & `backdrop-blur`: `grep -rniE "revolusioner|seamless|terdepan|backdrop-blur" src` kosong
- [ ] Navigasi keyboard berfungsi, fokus terlihat
- [ ] `docs/` diperbarui jika data/perilaku berubah

## Yang Tidak Boleh Dilakukan Agent
- Mengubah harga/kontak/layanan tanpa instruksi pemilik.
- Membuat form, API, database, halaman Area/Tentang.
- Menghapus `draft: true` tanpa persetujuan.
- Commit `.env`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
