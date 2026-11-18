# DESIGN — Sistem Desain Jaya AC (v2, dari Figma)

**Sumber kebenaran visual:** desain Figma desktop di `docs/design/*.png`, potongan per section di `docs/design/sections/*.png`, ukuran terukur di `docs/design/SPEC.md`, dan logo di `public/brand/`. Dokumen ini menerjemahkan desain itu menjadi token & aturan yang bisa dipakai konsisten, termasuk untuk **versi mobile yang belum ada di Figma** (§7).

Jika screenshot dan dokumen ini berbeda:
- **Warna, kontras, data (harga/kontak)** → ikuti dokumen ini (sudah dikoreksi).
- **Layout, urutan section, gaya kartu** → ikuti screenshot.

Prinsip:
1. **Bersih & terang.** Latar putih/biru sangat muda, kartu putih berborder tipis, banyak ruang.
2. **Biru navy untuk aksi.** Tidak ada oranye. Hijau hanya untuk WhatsApp & garansi.
3. **Angka terlihat.** Harga, garansi (hari), dan PK ditulis tegas, rata kanan di tabel.
4. **Foto asli.** Setiap kartu layanan punya foto pekerjaan nyata.

---

## 1. Warna

Diambil dari logo dan sampel piksel desain. Desain Figma memakai 4 biru tombol yang berbeda (#004B87, #0B6BCB, #0070C0, #006194) — **dikonsolidasi menjadi 2**.

| Token | Hex | Asal | Pemakaian |
|---|---|---|---|
| `navy` | `#032F66` | Logo "JAYA AC" | Logo, aksen judul (opsional) |
| `sky` | `#31A3FF` | Logo gelombang & "SERVICE AC" | **Dekoratif saja** (ikon besar, garis). Jangan untuk teks |
| `primary` | `#004B87` | Tombol Pesan, LIHAT, Pesan Jadwal, tab aktif | Tombol aksi utama (teks putih) |
| `primary-hover` | `#032F66` | — | Hover tombol primary |
| `accent` | `#0070C0` | Menu aktif, harga di kartu, tombol "Booking via WA", tombol Pesan di tabel | Tautan, harga, tombol header, tombol kecil di tabel |
| `accent-soft` | `#EFF6FF` | Kotak ikon di kartu Kontak & strip keunggulan | Latar ikon, badge kategori |
| `row-group` | `#F6FBFF` | Baris grup tabel harga | Latar baris grup |
| `surface` | `#F8F9FF` | Latar section tarif / hero detail | Latar section alternatif |
| `footer` | `#F2F3FF` | Latar footer & area CTA band | Footer |
| `card` | `#FFFFFF` | Kartu | Kartu, header, tabel |
| `line` | `#E2E8F0` | Border kartu | Border, pemisah |
| `ink` | `#0F172A` | Judul & teks utama | Teks utama |
| `ink-muted` | `#475569` | Deskripsi | Teks sekunder |
| `wa` | `#15803D` | — (lihat §1.2) | Tombol & outline WhatsApp |
| `wa-soft` | `#F0FDF4` | Chip garansi | Latar chip garansi |

### 1.1 Peta tombol desain → token
| Elemen di Figma | Token |
|---|---|
| "Booking via WA" (header) | `accent` bg, teks putih, ikon pesan |
| "Pesan Jadwal", "LIHAT", "Pesan" (kartu), "PESAN SERVIS SEKARANG", "Hubungi WhatsApp (Respon Cepat)" | `primary` bg, teks putih |
| "Pesan" kecil di tabel Harga | `accent` bg, teks putih |
| "Lihat Detail", "Telepon CS", "Lihat Detail Layanan" | outline: putih, border `line`, teks `ink` |
| "Chat WhatsApp" (hero), "hubungi" (Kontak) | outline `wa`, teks `wa`, ikon WA |
| "Chat WhatsApp Sekarang" (detail) | **`wa` bg, teks putih** (bukan #25D366, lihat §1.2) |
| Kartu harga "Favorit" → "Pesan via WhatsApp" | `primary` bg; kartu lain: `accent-soft` bg + teks `accent` |
| Chip garansi "30 Hari"/"60 Hari" | `wa-soft` bg, border hijau muda, teks `wa` |

### 1.2 Kontras (WCAG 2.2) — sudah dihitung

| Kombinasi | Rasio | Status |
|---|---|---|
| Putih di `primary` #004B87 | 8,91 | ✅ |
| Putih di `accent` #0070C0 | 5,15 | ✅ |
| `accent` sebagai teks di putih | 5,15 | ✅ |
| `ink` di `footer` #F2F3FF | 16,19 | ✅ |
| `ink-muted` #475569 di putih | 7,58 | ✅ |
| **Putih di hijau WhatsApp #25D366 (desain detail)** | **1,98** | ❌ gagal |
| Putih di `wa` #15803D | 5,02 | ✅ (dipakai) |
| `ink` di #25D366 | 9,00 | ✅ alternatif jika ingin hijau terang |
| `sky` #31A3FF sebagai teks di putih | 2,69 | ❌ — hanya dekoratif |

**Keputusan:** tombol WhatsApp memakai `#15803D` + teks putih. Jika klien ingin tetap hijau terang khas WhatsApp (#25D366), teks wajib gelap (`ink`).

## 2. Tipografi

- Font: **Plus Jakarta Sans** (variable, self-hosted via `@fontsource-variable/plus-jakarta-sans`). Fallback `Inter, system-ui, sans-serif`.
- Judul memakai tracking rapat seperti desain: `tracking-tight` (−0,025em).
- Angka harga: `tabular-nums`.

| Peran | Mobile | Desktop | Bobot | Contoh |
|---|---|---|---|---|
| H1 halaman | 30 px | 44–48 px | 800 | "Solusi Lengkap Servis & Perawatan AC di Batam" |
| H2 section | 24 px | 32 px | 800 | "Katalog Tarif Servis AC Standar & Inverter" |
| H3 kartu | 17 px | 18 px | 700 | "Isi & Tambah Freon" |
| Eyebrow | 12 px | 12 px | 700, UPPERCASE, `accent` | "LAYANAN KAMI", "KOMITMEN LAYANAN" |
| Body | 16 px | 16 px | 400 | |
| Deskripsi kartu/tabel | 14 px | 13–14 px | 400, `ink-muted` | |
| Harga kartu | 14 px | 14 px | 700, `accent` | "Rp 75.000" |
| Harga besar (kartu tarif) | 28 px | 32 px | 800, `accent` | "Rp 75.000 /unit" |
| Label tabel | 11 px | 11 px | 700, UPPERCASE, `ink-muted` | "LAYANAN / PEKERJAAN" |

Format rupiah konsisten: **"Rp75.000"** (tanpa spasi) di tabel, boleh "Rp 75.000" di kartu besar — pilih satu lewat `formatRupiah()`; default tanpa spasi.

## 3. Spasi, Radius, Bayangan

- Container **`max-w-[1200px] px-6`** (mobile `px-4`) — satu ukuran untuk semua halaman. Angka terukur per section ada di `docs/design/SPEC.md`; untuk desktop, SPEC.md lebih tepat daripada tabel di dokumen ini.
- Padding section: `py-12` mobile, `py-20` desktop.
- Radius: kartu `rounded-xl` (12 px), tombol `rounded-lg` (8 px), badge/chip `rounded-full`, kartu tarif & kartu Pesan Teknisi `rounded-2xl`.
- Border kartu 1 px `line`. Bayangan: `shadow-sm` di kartu, `shadow-md` di kartu "Pesan Teknisi AC" dan strip keunggulan.

## 4. Komponen (merujuk desain)

### 4.1 Header
Putih, border bawah tipis, tinggi 72 px desktop. Logo kiri (tinggi 40 px), menu tengah (aktif = `accent`), tombol "Booking via WA" kanan.

### 4.2 Hero Beranda
Foto penuh lebar, sisi kiri memudar ke putih (overlay `from-white via-white/80 to-transparent` **dari kiri ke kanan** — ini satu-satunya gradien yang diizinkan, fungsinya menjaga keterbacaan teks). Teks di kiri, max 560 px. Di HP: foto di atas (rasio 4:3), teks & tombol di bawah, tanpa overlay.

### 4.3 Strip Keunggulan
Kartu putih `rounded-2xl shadow-md` menumpuk sedikit di bawah hero (`-mt-8` desktop). 4 kolom dengan pemisah vertikal; tiap item: ikon garis dalam lingkaran `accent-soft`, judul bold, 2 baris deskripsi. Di HP: grid 2×2 tanpa pemisah.

### 4.4 Kartu Layanan
- **Beranda**: foto 16:10, judul, deskripsi, tombol full-width "LIHAT" (`primary`, uppercase, kecil).
- **Halaman Layanan**: foto 16:10 + badge kategori di pojok kiri atas (putih, teks `accent`, uppercase 10 px), judul, harga `accent`, deskripsi `line-clamp-3`, 2 tombol berdampingan "Lihat Detail" (outline) + "Pesan" (primary + ikon WA). Tinggi kartu disamakan; tombol menempel di bawah (`mt-auto`).
- **Terkait (detail)**: label kategori + harga mulai + catatan kecil kanan (mis. "R32 / R410A / R22"), judul, deskripsi, tombol outline "Lihat Detail Layanan >". Latar kartu `surface`.

### 4.5 Tab Filter Kategori
Pill berborder; aktif = `primary` bg + teks putih; tiap tab punya ikon + angka jumlah dalam badge bulat. Di HP: satu baris, geser horizontal (`overflow-x-auto`, snap).

### 4.6 Tabel Harga
- Kartu putih berborder, header kolom uppercase kecil.
- **Baris grup**: latar `row-group`, ikon + nama grup `accent`, bold.
- Baris item: nama (bold) + deskripsi kecil `ink-muted`; harga rata kanan bold `tabular-nums`; chip garansi; tombol "Pesan" kecil.
- Baris "mulai" memakai `colspan=3`, teks "Mulai Rp250.000" + catatan kecil dalam kurung.
- Baris penutup: ikon info + catatan biaya pengecekan.
- **Filter PK** (segmented control kanan atas): menyembunyikan kolom lain.

### 4.7 Kartu "Pesan Teknisi AC" (detail layanan)
`rounded-2xl shadow-md`, sticky `top-24` di desktop. Isi: judul + sub kecil, label "KAPASITAS UNIT AC ANDA:", 3 opsi PK (kartu kecil; aktif = border `accent` 2 px + bg `accent-soft`), kotak harga (`surface`, harga besar `accent` + chip garansi), tombol WA full-width, baris telepon + jam, 2 baris ceklis hijau.

### 4.8 Kartu Tahap Pengerjaan
Latar `surface`, `rounded-xl`; nomor "01–04" besar (56 px, bobot 800) di pojok kanan atas dengan warna `line`/`accent-soft` (dekoratif, `aria-hidden`); judul + deskripsi.

### 4.9 Kartu Tarif per PK
3 kolom. Header: "0.5 PK – 1.0 PK" + chip ruangan kanan ("Kamar Tidur"). Harga besar + "/unit", garis pemisah, 4 ceklis, tombol. Kartu tengah: border `primary` 2 px + badge "Favorit".

### 4.10 Banner Promo
Bar `accent-soft` berborder, ikon tag kiri, judul + keterangan, chip hijau kanan.

### 4.11 Kartu Info Kontak
Putih berborder, kotak ikon `accent-soft` 40 px kiri, label uppercase kecil, nilai bold 20 px, sub `ink-muted`. Kartu hotline punya tombol outline hijau "hubungi" kanan atas.

### 4.12 Kartu Peta
Iframe Google Maps (`loading="lazy"`, `title`) atau gambar peta statis yang ditautkan ke Google Maps, sudut `rounded-xl`; baris bawah "Jangkauan: Seluruh Pulau Batam" + tautan `accent` "Buka di Google Maps ↗".

### 4.13 CTA Band
Section latar `footer`. Kartu lebar `rounded-2xl` dengan foto teknisi buram di latar dan lapisan putih di atasnya. Aturan keterbacaan: **lapisan putih minimal 85% opasitas** (`bg-white/85`), teks `ink`. Foto latar di-blur saat ekspor gambar (bukan `backdrop-blur` CSS) agar ringan.

### 4.14 Footer
Latar `footer`. 3 kolom: (logo + tagline + WhatsApp + ikon sosial bulat) · NAVIGASI · WORKSHOP & JAM LAYANAN. Baris bawah: © + tautan legal. Di HP: 1 kolom.

### 4.15 Mobile Sticky Bar (tidak ada di Figma — dari brief)
`fixed bottom-0`, `md:hidden`, putih, border atas, `shadow-lg`, padding `env(safe-area-inset-bottom)`. 2 tombol 50/50 tinggi 52 px: **Telepon** (`primary`) dan **Chat WA** (`wa`). Body `pb-20 md:pb-0`.

### 4.16 Tombol WA Melayang (desktop)
`hidden md:flex fixed right-6 bottom-6`, `rounded-full`, `wa`, ikon + "Chat WA". Tanpa animasi.

## 5. Ikon & Gambar
- **Ikon:** Lucide, garis 2 px, 16–24 px. Pemetaan dari desain: Respon Cepat `Zap`, Teknisi `ShieldCheck`, Harga Transparan `ThumbsUp`, Layanan Ramah `Headphones`, Perawatan `SprayCan`, Perbaikan `Wrench`, Instalasi `Drill`, Semua `LayoutGrid`, Telepon `Phone`, Jam `Clock`, Alamat `MapPin`, Booking `MessageSquareText`, ceklis `CircleCheck`, info `Info`, promo `Tag`. Ikon WhatsApp: SVG resmi sederhana (bukan dari Lucide).
- **Logo:** `public/brand/logo-jaya-ac.png` (horizontal, transparan) dan `logo-mark.png` (ikon AC saja, untuk favicon). Minta versi SVG ke klien.
- **Foto:** WebP, rasio kartu 16:10, hero 16:9. Foto asli Jaya AC. Teks alt deskriptif ("Teknisi Jaya AC mencuci evaporator AC split").

## 6. Gerak
Hanya transisi warna/border ≤ 150 ms. Tanpa animasi scroll, parallax, carousel otomatis, pulse. Hormati `prefers-reduced-motion`.

## 7. Aturan Mobile (desain Figma hanya desktop)

| Elemen | Mobile (< 768 px) |
|---|---|
| Header | Logo + tombol "Menu" (`<details>`); tombol "Booking via WA" disembunyikan (diganti sticky bar) |
| Hero Beranda | Foto atas, teks bawah; 2 tombol full-width bertumpuk |
| Strip keunggulan | Grid 2×2 |
| Grid kartu layanan | 1 kolom (`sm`: 2, `lg`: 4) |
| Tab kategori | Geser horizontal |
| Tabel harga | Default tampil **satu kolom PK** (0,5–1 PK) + filter PK di atas; kolom Garansi & Aksi tetap. Tanpa scroll horizontal |
| Detail layanan | Urutan: H1 → foto → kartu Pesan Teknisi → tahap → tarif → terkait. Kartu tidak sticky |
| Kartu tarif per PK | Bertumpuk, kartu "Favorit" tetap di tengah urutan |
| Kontak | Kartu info lalu peta |
| Footer | 1 kolom |
| Sticky bar | Aktif di semua halaman |

Untuk desain mobile visual, gunakan prompt di `STITCH_PROMPTS.md`.

## 8. Larangan
| Dilarang | Catatan |
|---|---|
| Oranye sebagai CTA | Tidak dipakai di desain |
| Gradien ungu/neon/dekoratif | Satu-satunya gradien: fade putih di hero (§4.2) |
| `backdrop-blur` / glassmorphism | CTA band memakai foto yang sudah diblur + lapisan ≥ 85% |
| Ilustrasi 3D/kartun, emoji | Pakai foto asli & ikon Lucide |
| Teks putih di #25D366 | Gagal kontras |
| Teks berwarna `sky` #31A3FF | Gagal kontras |
| Biru tombol selain `primary`/`accent` | Konsolidasi §1 |
| Kata: revolusioner, seamless, terdepan | Dari brief |

## 9. Checklist Aksesibilitas
- [ ] Kontras sesuai §1.2
- [ ] Target sentuh ≥ 44 px (tombol "Pesan" kecil di tabel: tinggi min. 36 px + area klik diperluas padding baris)
- [ ] Fokus terlihat (`outline accent`)
- [ ] Tab filter & pemilih PK memakai `role="radiogroup"`/radio asli, bisa dengan keyboard
- [ ] Iframe peta punya `title`
- [ ] Nomor dekoratif 01–04 & ikon dekoratif `aria-hidden`
