# Urutan Prompt Antigravity — Supaya Hasil Sama dengan Figma

Kerjakan **satu prompt per langkah**, tunggu selesai, cek, baru lanjut. Jangan meminta satu halaman penuh sekaligus.

Kenapa per section: screenshot satu halaman penuh (1280 × 3000+ px) diperkecil saat dibaca model, sehingga ukuran font, jarak, dan detail hilang. Potongan di `docs/design/sections/` berukuran asli.

---

## Langkah 0 — Mulai dari bersih (jika hasil sebelumnya sudah jauh berbeda)

```
Hapus semua komponen dan halaman yang sudah dibuat di src/components dan src/app (kecuali konfigurasi proyek).
Kita ulang dari awal dengan pendekatan per section.
```

## Langkah 1 — Fondasi

```
Baca AGENTS.md, docs/PRD.md, docs/DESIGN.md, docs/SCHEMA.md, docs/ARCHITECTURE.md, dan docs/design/SPEC.md.
Lakukan:
1. Setup Next.js 16 + Tailwind v4 + static export sesuai ARCHITECTURE.md.
2. Isi token warna dan font di src/app/globals.css sesuai DESIGN.md §1–2.
3. Buat semua data di src/lib/ (site, pricing, services, whatsapp, format, types) sesuai PRD §2, §8, §10 dan SCHEMA.md. Untuk foto, pakai file di public/images/tmp/ sesuai SPEC.md §6.
4. Buat komponen Container dengan max-w-[1200px] px-6 (SPEC §0.1).
Belum membuat halaman. Tunjukkan daftar file yang dibuat.
```

## Langkah 2 — Header

```
Lihat docs/design/sections/00-global-header.png dan SPEC.md §0.2.
Buat komponen Header persis seperti gambar (tinggi 80, logo h-10 dari public/brand/logo-jaya-ac.png, 4 menu 15px, tombol "Booking via WA" 168x44 warna #0070C0).
Pasang di layout. Lalu buka http://localhost:3000 di browser dengan lebar 1280px, screenshot header,
bandingkan dengan 00-global-header.png, tulis daftar perbedaan, dan perbaiki sampai sama.
```

## Langkah 3 — Footer & CTA band

```
Lihat docs/design/sections/00-global-footer.png dan 00-global-cta-band.png, serta SPEC.md §0.3–0.4.
Buat komponen Footer dan CtaBand. Pakai data dari src/lib/site.ts (nomor 0812-7000-1234, alamat Sentral Bisnis Blok B No. 12, jam Senin–Minggu 08.00–20.00 — JANGAN pakai nomor/alamat yang tertulis di gambar).
Teks CTA band sesuai PRD §7.6.
Screenshot di browser 1280px, bandingkan dengan gambar, perbaiki perbedaannya.
```

## Langkah 4 — Beranda (per section)

Ulangi pola ini untuk tiap file, satu per satu:

| Urutan | Gambar | SPEC |
|---|---|---|
| 4a | `beranda-01-hero.png` | §1.1 |
| 4b | `beranda-02-keunggulan.png` | §1.2 |
| 4c | `beranda-03-layanan-kami.png` | §1.3 |
| 4d | `beranda-04-katalog-tarif.png` | §1.4 |
| 4e | `beranda-05-hubungi-kami.png` | §1.5 + §5 |

Template prompt:
```
Kerjakan section [NAMA] di halaman Beranda.
Acuan visual: docs/design/sections/[FILE].png. Ukuran: docs/design/SPEC.md [§].
Data dari src/lib/ (jangan menulis harga/nomor langsung di JSX).
Setelah selesai: buka localhost:3000 di browser lebar 1280px, screenshot section itu saja,
bandingkan berdampingan dengan [FILE].png. Tulis tabel perbedaan (elemen | desain | hasil) untuk:
ukuran font, tebal font, jarak/padding, lebar/tinggi elemen, radius, warna, posisi. Perbaiki semua, ulangi sampai tidak ada perbedaan yang terlihat.
```

## Langkah 5 — Layanan
`layanan-01-judul-tab.png` (§2) → `layanan-02-grid-baris-1-2.png` + `layanan-03-grid-baris-3-4.png` (§2). Pakai template yang sama.

## Langkah 6 — Detail Layanan (contoh: /layanan/cuci-ac)
`detail-01-hero-kartu-pesan.png` (§3.1) → `detail-02-tahap-pengerjaan.png` (§3.2) → `detail-03-tarif-promo.png` (§3.3) → `detail-04-layanan-terkait.png` (§3.4).
Setelah Cuci AC sama dengan desain, baru minta generate 13 layanan lain dari data.

## Langkah 7 — Harga
`harga-01-judul-filter-tabel-atas.png` + `harga-02-tabel-bawah.png` (§4.1) → `harga-03-garansi-klaim.png` (§4.2).

## Langkah 8 — Kontak
`kontak-01-info-peta.png` (§5).

## Langkah 9 — Mobile
```
Sekarang cek semua halaman di lebar 390px. Ikuti docs/DESIGN.md §7.
Pastikan Mobile Sticky Bar tampil dan tidak menutupi konten. Jangan mengubah tampilan desktop (≥1024px) yang sudah sesuai.
```

---

## Cara memberi koreksi

❌ "Belum mirip, perbaiki."
✅ "Di hero, H1 di desain 48px satu baris, di hasil 36px dua baris. Tombol di desain tinggi 48, di hasil 40. Overlay putih di desain menutupi kiri sampai ±60% lebar, di hasil terlalu tipis."

Jika agent terus meleset di satu elemen, kirim potongan gambar elemen itu saja (crop lebih kecil) beserta angkanya dari SPEC.md.
