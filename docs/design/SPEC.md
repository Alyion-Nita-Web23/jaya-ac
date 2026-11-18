# SPEC — Ukuran Pasti dari Desain Figma (desktop 1280 px)

Dokumen ini adalah **hasil pengukuran piksel** dari screenshot Figma. Pakai bersama potongan gambar di `docs/design/sections/`. Untuk tampilan desktop (≥ 1024 px), hasil coding harus **sedekat mungkin** dengan potongan gambar + angka di sini. Mobile mengikuti `docs/DESIGN.md` §7.

Cara membaca: setiap section punya **file gambar**, **struktur**, dan **angka** (px pada viewport 1280). Kelas Tailwind di kolom "Petunjuk" adalah saran terdekat.

> **Perbedaan yang disengaja** (jangan disamakan dengan gambar): nomor 0812-7000-1234 (bukan 8899), alamat Sentral Bisnis Blok B No. 12, jam Senin–Minggu 08.00–20.00, tombol WA hijau tua `#15803D`, tabel Beranda 3 kolom PK, "2 PK" (bukan "2–2,5 PK"), teks CTA band tanpa "Respon kilat". Lihat `docs/PRD.md` §2 & §7.

---

## 0. Global

### 0.1 Container
Figma tidak konsisten (lebar konten 1152–1216 px antar halaman). **Pakai satu container untuk semua:**
```
mx-auto w-full max-w-[1200px] px-6        → di viewport 1280: konten 1200 px, margin kiri 40 px
```

### 0.2 Header — `sections/00-global-header.png`
| Elemen | Ukuran | Petunjuk |
|---|---|---|
| Tinggi | 80, border bawah 1 px `#E2E8F0`, latar putih, sticky | `h-20 border-b` |
| Logo | tinggi 40 (lebar ±132) | `h-10 w-auto` |
| Menu | 4 item, 15 px medium, jarak ±32, warna `#334155`, aktif `#0070C0` | `gap-8 text-[15px] font-medium` |
| Tombol "Booking via WA" | 168 × 44, radius 8, bg `#0070C0`, teks putih 15 px semibold, ikon pesan 18 | `h-11 px-5 rounded-lg` |

Semua item menu **ukuran sama** (di screenshot Kontak, "Layanan" tampak lebih besar — itu kesalahan desain).

### 0.3 CTA Band — `sections/00-global-cta-band.png`
| Elemen | Ukuran | Petunjuk |
|---|---|---|
| Section | latar `#F8F9FF`, padding atas ±56, bawah ±56 | `py-14` |
| Kartu | lebar penuh container, tinggi ±328, radius 16, border `#DCEBFA`, shadow besar lembut | `rounded-2xl border shadow-[0_12px_40px_rgba(15,23,42,0.08)]` |
| Latar kartu | foto teknisi sangat buram + lapisan putih ≥ 85% | gambar sudah diblur, bukan `backdrop-blur` |
| H2 | 32 px extrabold, tracking rapat, 2 baris, max 680, tengah | `text-[32px] leading-tight tracking-tight` |
| Paragraf | 17 px `#475569`, max 680, mt 16 | |
| Tombol 1 | 312 × 48, bg `#004B87`, ikon WA, "Hubungi WhatsApp" | `h-12 px-6 rounded-lg` |
| Tombol 2 | ±280 × 48, putih, border `#E2E8F0`, ikon telepon, "Telepon CS: 0812-7000-1234" | |
| Jarak tombol | 16, mt 28 | `gap-4 mt-7` |

### 0.4 Footer — `sections/00-global-footer.png`
| Elemen | Ukuran | Petunjuk |
|---|---|---|
| Latar | `#F2F3FF`, pt 40, pb 24 | |
| Kolom | 3 kolom: 5/12 · 3/12 · 4/12 | `grid-cols-12` |
| Logo | tinggi 32 | `h-8` |
| Tagline & WA | 14 px `#334155`; nomor `#0070C0` semibold | |
| Ikon sosial | lingkaran 32, bg `#E8ECF8`, ikon 16 | `size-8 rounded-full` |
| Judul kolom | 12 px bold uppercase, tracking lebar | `text-xs font-bold tracking-wider` |
| Link | 14 px, jarak antar baris 8 | |
| Baris bawah | border atas, pt 16, 13 px; legal di kanan | |

### 0.5 Tipografi (terukur)
| Elemen | px | Bobot | Catatan |
|---|---|---|---|
| H1 Beranda (hero) | 48 | 800 | 1 baris, tracking −0.025em |
| H1 Layanan | 44 | 800 | 2 baris, leading 1.05 |
| H1 Harga | 48 | 800 | 1 baris |
| H1 Kontak | 44 | 800 | |
| H1 Detail | 40 | 800 | 2 baris, leading 1.05 |
| H2 besar (Katalog, Tahap, Tarif, Terkait) | 32–36 | 800 | |
| H2 kecil (Tarif Jelas, Ketentuan Garansi) | 28 | 700 | rata kiri |
| Sub judul halaman | 17–18 | 400 | `#475569` |
| Eyebrow | 12 | 700 | uppercase, `#0070C0` |
| Judul kartu | 17–20 | 600–700 | |
| Deskripsi kartu/tabel | 12–14 | 400 | `#64748B` |
| Harga di tabel | 16 | 700 | `tabular-nums` |
| Harga besar (kartu tarif/pesan) | 28–30 | 800 | `#0070C0` |
| Label tabel / label kecil | 11 | 700 | uppercase |

---

## 1. Beranda

### 1.1 Hero — `sections/beranda-01-hero.png`
| Elemen | Ukuran | Petunjuk |
|---|---|---|
| Tinggi | 563 (tepat di bawah header) | `h-[560px]` |
| Foto | menutupi seluruh section, subjek di kanan | `object-cover object-right` |
| Overlay | putih pekat di kiri → transparan ±60% lebar | `bg-gradient-to-r from-white via-white/85 to-transparent` |
| Konten | rata kiri, vertikal tengah, max 680 | |
| H1 | "AC Dingin Kembali, Tanpa Ribet." 48 px, 1 baris | |
| Sub | 17 px, 2 baris, max 660, mt 16 | |
| Tombol | mt 24, tinggi 48, jarak 18: **Pesan Jadwal** 163 lebar (navy, ikon kalender) · **Chat WhatsApp** 179 lebar (putih, border hijau 1.5 px, teks hijau, ikon pesan) | `h-12 px-5 rounded-lg gap-4` |

### 1.2 Strip Keunggulan — `sections/beranda-02-keunggulan.png`
| Elemen | Ukuran | Petunjuk |
|---|---|---|
| Posisi | 20 px di bawah hero (tidak menumpuk) | `mt-5` |
| Kartu | tinggi ±125, radius 24, border tipis, shadow lembut | `rounded-3xl border shadow-[0_8px_30px_rgba(15,23,42,0.06)]` |
| Isi | 4 kolom dipisah garis vertikal | `grid-cols-4 divide-x` |
| Item | ikon dalam lingkaran 44 bg `#EFF6FF`, ikon `#0070C0` 22; judul 15 px bold; deskripsi 13 px `#64748B` 2 baris | `flex gap-4 px-6` |

### 1.3 Layanan Kami — `sections/beranda-03-layanan-kami.png`
| Elemen | Ukuran | Petunjuk |
|---|---|---|
| Header section | eyebrow "LAYANAN KAMI" + H2 "Tarif Jelas & Terpercaya" 28 px kiri; link "Lihat Semua Layanan →" 14 px kanan bawah | `flex items-end justify-between` |
| Grid | 4 kolom, kartu 281 lebar, jarak 25 | `grid-cols-4 gap-6` |
| Kartu | radius 12, border `#E2E8F0`, putih | |
| Foto | tinggi 192, `object-cover` | `h-48` |
| Badan | padding 16; judul 20 px bold; deskripsi 14 px 3 baris | |
| Tombol LIHAT | lebar penuh, tinggi 34, navy, 12 px bold uppercase, radius 4 | `h-9 rounded` |

### 1.4 Katalog Tarif — `sections/beranda-04-katalog-tarif.png`
| Elemen | Ukuran | Petunjuk |
|---|---|---|
| Section | latar `#F8F9FF`, py ±56 | |
| H2 | "Katalog Tarif Servis AC Standar & Inverter" 36 px extrabold, kiri | |
| Sub | 13 px `#64748B` | |
| Tabel | kartu putih radius 12, border | |
| Header tabel | tinggi 48, bg `#F9FBFD`, 11 px bold uppercase | |
| Baris | tinggi ±59, px 20; nama 15 px semibold + deskripsi 12 px; chip garansi; harga 16 px bold rata kanan | |
| Baris akhir | catatan 12 px kiri + tombol "PESAN SERVIS SEKARANG" 212 × 35 navy 12 px bold kanan | |

Kolom: **Jenis Perawatan/Servis · Garansi · 0,5–1 PK · 1,5 PK · 2 PK** (desain 2 kolom → dibuat 3, sesuai PRD).

### 1.5 Hubungi Kami — `sections/beranda-05-hubungi-kami.png`
Komponen yang sama dengan halaman Kontak (§5), judul memakai `<h2>`.

---

## 2. Layanan — `sections/layanan-01-judul-tab.png`, `layanan-02…`, `layanan-03…`

| Elemen | Ukuran | Petunjuk |
|---|---|---|
| Padding atas | ±96 dari header ke H1 | `pt-24` |
| H1 | 44 px, 2 baris, tengah, max 900 | `max-w-[900px] mx-auto text-center` |
| Sub | 18 px, 2 baris, tengah, max 730, mt 20 | |
| Tab | mt ±60, rata kiri; tinggi 40, radius 8, px 16, 14 px semibold; aktif navy teks putih; non-aktif putih border; badge angka lingkaran 20 | `h-10 rounded-lg` |
| Grid | mt 40, 4 kolom, **kartu 278, jarak 24** | `grid-cols-4 gap-6` |
| Kartu | radius 12, border, tinggi sama per baris (`flex flex-col`) | |
| Foto | tinggi 192 | `h-48 object-cover` |
| Badge kategori | kiri atas (12, 12), putih, rounded-full, 10 px bold uppercase `#0070C0` | `absolute top-3 left-3` |
| Judul | 17 px semibold, mt 16 | |
| Harga | 13 px bold `#0070C0`, mt 4 | |
| Deskripsi | 13 px `#64748B`, maks 3 baris, mt 12 | `line-clamp-3` |
| Tombol | baris bawah `mt-auto`, 2 tombol 110 × 28 berdampingan: "Lihat Detail" (outline) & "Pesan" (navy + ikon WA), 12 px | desktop `h-7`, mobile `h-10` |

---

## 3. Detail Layanan

### 3.1 Hero + Kartu Pesan — `sections/detail-01-hero-kartu-pesan.png`
| Elemen | Ukuran | Petunjuk |
|---|---|---|
| Link kembali | 13 px semibold + panah `#0070C0`, py 24, latar putih | |
| Section | latar `#F8FAFF`, py 28 | |
| Grid | 12 kolom, jarak 40: kiri 7 (±690), kanan 5 (±484) | `grid-cols-12 gap-10` |
| H1 | 40 px, 2 baris, leading 1.05 | |
| Lead | 18 px, 3 baris, leading 1.55, mt 12 | |
| Foto | 692 × 327, radius 12, mt 24 | `aspect-[21/10] rounded-xl` |
| Kartu Pesan | 484 × ±570, putih, radius 20, border, shadow besar, padding 20 | `rounded-[20px] p-5` |
| Judul kartu | 18 px bold + sub 12 px, garis pemisah di bawah | |
| Label | "KAPASITAS UNIT AC ANDA:" 11 px bold uppercase | |
| Opsi PK | 3 kolom jarak 8, tinggi 52, radius 8; aktif border 2 px `#0070C0` + bg `#EFF6FF` + teks `#0070C0`; baris 2 (nama ruangan) 11 px abu | `grid-cols-3 gap-2` |
| Kotak harga | radius 12, bg `#F1F6FD`, p 16; label 12 px; harga 28 px extrabold `#0070C0` + "/unit" 13 px; chip garansi kanan | |
| Tombol WA | lebar penuh, 432 × 48, radius 8, **bg `#15803D`** teks putih 16 px bold, ikon pesan | `h-12` |
| Baris telepon | tinggi 40, radius 8, bg `#F8FAFC` border; ikon + nomor kiri 13 px bold; jam kanan 12 px abu | |
| Jaminan | 2 baris 12 px dengan ikon cek hijau 14, mt 16 | |

### 3.2 Standar Pengerjaan — `sections/detail-02-tahap-pengerjaan.png`
| Elemen | Ukuran |
|---|---|
| Section | latar putih, border atas tipis, py 48 |
| H2 | 32 px extrabold tengah + sub 14 px |
| Grid | 4 kolom jarak 16, mt 32 |
| Kartu | tinggi ±152, radius 12, bg `#F3F6FD`, border tipis, p 20 |
| Nomor | "01–04" 56 px extrabold warna `#D6E4F5`, pojok kanan atas, `aria-hidden` |
| Judul | 16 px bold (turun ±36 px dari atas) · deskripsi 13 px abu |

### 3.3 Tarif + Promo — `sections/detail-03-tarif-promo.png`
| Elemen | Ukuran |
|---|---|
| H2 | "Daftar Tarif Cuci AC" 32 px tengah + sub 14 px |
| Grid | 3 kolom jarak 20, mt 32 |
| Kartu | radius 16, border, p 20 |
| Header kartu | label PK 16 px semibold + chip ruangan kanan (11 px, bg `#F1F5F9`, radius 4) |
| Harga | 30 px extrabold `#0070C0` + "/unit" 13 px |
| Ceklis | 4 baris 13 px, ikon cek hijau, dipisah garis di atasnya |
| Tombol | lebar penuh tinggi 36; kartu biasa: bg `#EFF6FF` border `#BFDBFE` teks `#0070C0`; kartu Favorit: bg navy teks putih |
| Kartu Favorit | border 2 px navy + badge "Favorit" (navy, putih, 10 px, rounded-full) di samping label |
| Promo | mt 24, tinggi ±62, radius 12, bg `#F0F6FD` border; ikon tag hijau; judul 14 px semibold + teks 12 px; chip hijau kanan |

### 3.4 Layanan Terkait — `sections/detail-04-layanan-terkait.png`
| Elemen | Ukuran |
|---|---|
| Eyebrow | pill bg `#E0F2FE` teks `#0070C0` 11 px bold uppercase |
| H2 | 32 px kiri + sub 14 px; link "Lihat Seluruh Layanan →" kanan |
| Grid | 3 kolom jarak 20 |
| Kartu | radius 16, bg `#F8FAFF`, border; foto tinggi 192 + badge label kiri atas |
| Badan | harga mulai 16 px bold `#0070C0` + tag kecil kanan 11 px abu; judul 16 px bold; deskripsi 13 px 2 baris; tombol putih border lebar penuh tinggi 36 "Lihat Detail Layanan >" |

---

## 4. Harga

### 4.1 Judul, Filter, Tabel — `sections/harga-01-judul-filter-tabel-atas.png`, `harga-02-tabel-bawah.png`
| Elemen | Ukuran | Petunjuk |
|---|---|---|
| H1 | 48 px tengah, pt ±80 | |
| Sub | 17 px, 2 baris, max 600 tengah | |
| Filter PK | rata kanan, mt 48; wadah bg `#F8FAFC` border radius 8 p 4; item 13 px tinggi 32 px 12; aktif putih + shadow kecil + teks `#0070C0` | segmented control |
| Tabel | radius 12, border, mt 16 | `<table>` asli |
| Kolom | Layanan ±45% · 0,5–1 PK ±11% · 1,5 PK ±11% · 2 PK ±11% · Garansi ±11% · Aksi ±11% | |
| Header | tinggi 56, bg `#F9FBFD`, 11 px bold uppercase `#475569` | |
| Baris grup | tinggi 40, bg `#F6FBFF`, ikon + nama 13 px semibold `#0070C0` | `colSpan={6}` |
| Baris item | tinggi 64–80, px 28; nama 15 px semibold; deskripsi 12 px abu max 360 | |
| Harga | 16 px bold, tengah, `tabular-nums` | |
| Baris "mulai" | satu sel `colSpan={3}` tengah: "Mulai Rp250.000" 16 px bold + catatan 11 px abu | |
| Chip garansi | 50 × 22, 11 px semibold hijau, bg `#F0FDF4`, border `#BBF7D0`, radius 6 | |
| Tombol Pesan | 65 × 30, bg `#0070C0`, 12 px semibold putih, radius 6 | `h-8 px-4` |
| Baris akhir | 13 px dengan ikon jam/info `#0070C0` | |

### 4.2 Garansi & Klaim — `sections/harga-03-garansi-klaim.png`
| Elemen | Ukuran |
|---|---|
| Eyebrow + H2 | "KOMITMEN LAYANAN" + "Ketentuan & Hak Garansi Pengerjaan" 28 px kiri |
| Grid | 2 kolom jarak 20, mt 24 |
| Kartu | radius 12, border, p 24 |
| Judul kartu kiri | ikon cek + "100% Ditanggung Garansi (Gratis)" 16 px semibold hijau `#15803D` |
| Judul kartu kanan | ikon info + "Kondisi di Luar Garansi" 16 px semibold `#334155` |
| Item | 14 px `#475569`, ikon 16 (hijau / abu), jarak 12 |
| Kartu klaim | mt 20, radius 12, border, bg `#FAFBFF`, p 24; judul 16 px bold; 3 sub-kartu putih berborder jarak 16, p 16: lingkaran nomor 24 navy + judul 14 px semibold + teks 12 px abu |

---

## 5. Kontak — `sections/kontak-01-info-peta.png`
| Elemen | Ukuran | Petunjuk |
|---|---|---|
| H1 | 44 px tengah, pt ±48 | |
| Sub | 18 px tengah | |
| Grid | mt 56, 12 kolom jarak 40: kiri 5, kanan 7 | `grid-cols-12 gap-10` |
| Kartu info | tinggi ±112, radius 16, border, p 20, jarak antar kartu 24 | `space-y-6` |
| Kotak ikon | 40, radius 8, bg `#EFF6FF`, ikon 18 `#0070C0` | |
| Label | 12 px medium uppercase `#64748B` tracking lebar | |
| Nilai | 20 px bold `#0F172A` | |
| Sub | 14 px `#64748B` | |
| Tombol "hubungi" | 130 × 32, kanan atas kartu hotline, border hijau 1 px, teks hijau 13 px, ikon WA | |
| Kartu peta | radius 16, border, overflow hidden; peta tinggi ±330; baris bawah tinggi 54, 13 px: "Jangkauan: Seluruh Pulau Batam" kiri, "Buka di Google Maps ↗" `#0070C0` kanan | |

---

## 6. Aset Sementara

Foto di `public/images/tmp/` dipotong dari screenshot desain agar tampilan langsung mirip. **Resolusinya rendah — ganti dengan export Figma 2× atau foto asli sebelum go-live.**

| File | Dipakai di |
|---|---|
| `hero-beranda.webp` | Hero Beranda |
| `beranda-{cuci-ac,isi-freon,troubleshooting,bongkar-pasang}.webp` | 4 kartu Beranda |
| `layanan-<slug>.webp` (14 file) | Kartu Layanan & kartu Terkait |
| `detail-cuci-ac-hero.webp` | Foto hero detail Cuci AC (layanan lain pakai `layanan-<slug>.webp`) |
