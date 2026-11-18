# PRD — Website Jaya AC

| Item | Isi |
|---|---|
| Produk | Website jasa service AC "Jaya AC" (Batam) |
| Versi dokumen | 2.0 — disesuaikan dengan desain Figma |
| Tanggal | 11 November 2026 |
| Pemilik produk | PM Bidtech |
| Stack | Next.js 16 (App Router, static export) + Tailwind CSS v4 — lihat `ARCHITECTURE.md` |
| Referensi visual | `docs/design/sections/*.png` (potongan Figma per section) + `docs/design/SPEC.md` (ukuran terukur) + `public/brand/` (logo) |
| Dokumen terkait | `SCHEMA.md`, `DESIGN.md`, `ARCHITECTURE.md`, `STITCH_PROMPTS.md`, `../AGENTS.md` |

### Perubahan dari v1.0
| v1.0 | v2.0 (keputusan) |
|---|---|
| 6 halaman (termasuk Area & Tentang) | **4 halaman** sesuai desain: Beranda, Layanan (+ detail), Harga, Kontak |
| Form booking + database | **WhatsApp saja.** Semua tombol pesan membuka WA dengan pesan terisi. Tanpa form, tanpa database |
| 5 layanan | **14 layanan** dalam 3 kategori (Perawatan, Perbaikan, Instalasi) |
| Tombol CTA oranye | **Tidak ada oranye.** Tombol utama biru navy sesuai desain |
| Harga contoh | **Harga dari halaman Harga di Figma** sebagai satu-satunya acuan |
| Kontak placeholder | **Versi halaman Kontak di Figma** (lihat §2) |

---

## 1. Ringkasan

Jaya AC adalah usaha jasa service AC di Batam untuk rumah, ruko, kantor, dan unit komersial. Website ini punya **satu tugas utama: membuat pengunjung menghubungi Jaya AC lewat WhatsApp atau telepon secepat mungkin**, dengan harga dan garansi yang terlihat jelas sebelum mereka bertanya.

Pengunjung datang dari Google Search & Maps ("service ac batam", "isi freon batam", "cuci ac batam center"), mayoritas lewat HP. Mereka butuh tiga hal: **berapa biayanya, bisa datang kapan, bisa dipercaya atau tidak.**

## 2. Data Bisnis (acuan tunggal)

| Data | Nilai |
|---|---|
| Nama | Jaya AC (Jaya AC Batam) |
| WhatsApp & telepon | **0812-7000-1234** (`+6281270001234`, wa.me: `6281270001234`) |
| Jam operasional | **Senin – Minggu, 08.00 – 20.00 WIB** — tetap melayani di akhir pekan & tanggal merah |
| Alamat workshop & kantor | **Kompleks Sentral Bisnis Blok B No. 12, Batam Center, Kota Batam, Kepulauan Riau** |
| Jangkauan | Seluruh Pulau Batam |
| Biaya pengecekan | Rp50.000 — **gratis** jika pengerjaan dilanjutkan |
| Garansi | 30 hari (perawatan, freon, instalasi) · 60 hari (perbaikan) |
| Pembayaran | Setelah pekerjaan selesai & AC dicek dingin; tunai, transfer, QRIS. Tanpa DP |

> ⚠️ **Koreksi terhadap Figma** — desain memuat data yang bertentangan. Saat coding, pakai tabel di atas:
> - Footer, CTA band, dan halaman detail menulis **0812-7000-8899** → ganti ke **0812-7000-1234**.
> - Footer menulis **Komp. Ruko Batam Center Square Blok C No. 12** → ganti ke alamat di atas.
> - Footer & kartu detail menulis **Senin–Sabtu 08.00–18.00** → ganti ke **Senin–Minggu 08.00–20.00**.
> - Kartu Kontak menulis "Online setiap hari kerja" → ganti "Online setiap hari, 08.00–20.00".
> - Footer © 2025 → tahun berjalan otomatis.

## 3. Tujuan & KPI

| Tujuan | KPI | Target 3 bulan pertama |
|---|---|---|
| Menghasilkan kontak | (Klik WA + klik telepon) ÷ sesi | ≥ 8% |
| Kontak dari halaman harga | Klik "Pesan" di tabel Harga / bulan | ≥ 40 |
| Kecepatan halaman | LCP mobile (4G, p75) | < 2,0 detik |
| Stabilitas tampilan | CLS (p75) | < 0,05 |
| Responsif | INP (p75) | < 200 ms |
| SEO | Halaman detail layanan masuk top-10 "[layanan] batam" | ≥ 5 layanan |

## 4. Pengguna

| Persona | Situasi | Yang dicari |
|---|---|---|
| **Ibu Rina**, ibu rumah tangga | AC kamar menetes, mau beres hari ini | Harga jelas, teknisi datang cepat, tidak "dikerjai" |
| **Pak Hendra**, pemilik ruko/kantor | 4–10 unit perlu cuci rutin | Jadwal tetap, diskon borongan, kontrak & invoice |
| **Dimas**, penyewa kos/apartemen | Pindahan, perlu bongkar pasang | Harga paket + biaya pipa per meter |

## 5. Lingkup

### 5.1 Masuk MVP
- 4 halaman + halaman detail untuk **14 layanan** + 2 halaman legal sederhana (Syarat & Ketentuan, Kebijakan Privasi — ditautkan dari footer desain).
- **Semua aksi pesan = tautan WhatsApp** (`wa.me`) dengan teks terisi otomatis sesuai konteks (layanan, ukuran PK).
- Tombol telepon `tel:`.
- **Mobile Sticky Bar** (Telepon + Chat WA) di HP — dari brief awal; desain Figma belum punya versi mobile.
- Filter kategori di halaman Layanan, filter PK di halaman Harga, pemilih PK di detail layanan.
- Peta Google Maps (lazy) + tautan "Buka di Google Maps".
- SEO teknis: metadata per halaman, JSON-LD `HVACBusiness`, `Service`, `sitemap.xml`, `robots.txt`.

### 5.2 Di luar MVP
- Form booking, database, dashboard admin (keputusan: WhatsApp saja).
- Halaman Area Jangkauan & Tentang Kami (keputusan: tidak dibuat).
- Testimoni & FAQ — **tidak ada di desain**. Disarankan ditambahkan setelah ada ulasan Google asli (lihat §9).
- Blog, pembayaran online, akun pelanggan.

## 6. Navigasi

Header: logo (kiri) · menu **Beranda, Layanan, Harga, Kontak** (tengah) · tombol **"Booking via WA"** (kanan). Menu aktif berwarna biru.

| Route | Halaman | Referensi desain |
|---|---|---|
| `/` | Beranda | `docs/design/beranda.png` |
| `/layanan` | Daftar layanan | `docs/design/layanan.png` |
| `/layanan/[slug]` | Detail layanan (14 halaman) | `docs/design/detail-layanan.png` |
| `/harga` | Daftar Harga & Ketentuan Garansi | `docs/design/harga.png` |
| `/kontak` | Hubungi Kami | `docs/design/kontak.png` |
| `/syarat-ketentuan`, `/kebijakan-privasi` | Teks legal (tidak di menu) | — (pakai layout teks sederhana) |

## 7. Halaman & Konten

Urutan section = urutan di desain desktop. Perilaku mobile dijelaskan di `DESIGN.md` §7.

### 7.1 Beranda `/`
1. **Hero** — foto teknisi kanan, memudar ke putih di kiri. H1 *"AC Dingin Kembali, Tanpa Ribet."* Sub: *"Layanan cuci, perbaikan, dan isi freon AC rumah atau kantor di Batam. Teknisi tepat waktu dengan garansi pengerjaan."* Tombol **Pesan Jadwal** (primary → WA "mau pesan jadwal") + **Chat WhatsApp** (outline hijau → WA umum).
2. **Strip keunggulan** (kartu putih, 4 kolom dengan pemisah): Respon Cepat · Teknisi Berpengalaman · Harga Transparan · Layanan Ramah.
   - Teks "Siap datang kapan saja" bertentangan dengan jam 08.00–20.00 → ganti **"Siap datang di hari yang sama"**.
3. **Layanan Kami — "Tarif Jelas & Terpercaya"** + tautan "Lihat Semua Layanan →". 4 kartu foto: Cuci AC, Isi & Tambah Freon, Perbaikan & Troubleshooting, Bongkar Pasang — tombol **LIHAT** ke detail.
4. **Katalog Tarif Servis AC Standar & Inverter** — tabel ringkas 5 baris (lihat §8.2 kolom "Beranda"), kolom: Jenis Perawatan/Servis · Garansi · 0,5–1 PK · 1,5 PK · 2 PK. Catatan biaya di bawah + tombol **PESAN SERVIS SEKARANG**.
   - Desain memakai kolom gabungan "1,5–2 PK"; diubah jadi 3 kolom agar sama dengan halaman Harga.
5. **Hubungi Kami** — sama dengan isi halaman Kontak (§7.5), dipakai ulang sebagai komponen.
6. **CTA band** (komponen global, lihat §7.6).
7. **Footer** (komponen global).

### 7.2 Layanan `/layanan`
- H1 *"Solusi Lengkap Servis & Perawatan AC di Batam"*, sub tentang teknisi bersertifikat.
- **Tab filter kategori**: Semua Layanan (14) · Perawatan (5) · Perbaikan (6) · Instalasi (3). Jumlah dihitung dari data, tidak ditulis manual.
- **Grid kartu** 4 kolom: foto, badge kategori, nama, harga "mulai", deskripsi ≤ 3 baris, tombol **Lihat Detail** (outline) + **Pesan** (primary, ikon WA).
- CTA band + footer.

### 7.3 Detail Layanan `/layanan/[slug]`
Contoh desain: Cuci AC.
1. Tautan "← Kembali ke Semua Layanan".
2. **Hero** (latar biru sangat muda): H1 (mis. *"Cuci AC Rutin & Deep Clean Batam"*), lead, foto besar.
3. **Kartu "Pesan Teknisi AC"** (kanan, sticky di desktop): pemilih kapasitas — 0,5–1 PK *Kamar* · 1,5 PK *Ruang Tamu* · 2 PK *Kantor/Ruko*; harga mulai sesuai PK terpilih + chip garansi; tombol **Chat WhatsApp Sekarang** (teks WA memuat layanan + PK); baris telepon + jam; 2 jaminan: "Tanpa DP — pembayaran setelah selesai & dingin tuntas", "Garansi dingin tuntas, bebas survei ulang".
   - Desain menulis "2–2,5 PK"; diseragamkan menjadi **2 PK**. Unit > 2 PK: catatan "Di atas 2 PK? Chat WA untuk harga".
   - Layanan dengan harga "mulai" (tanpa per-PK) atau "Konsultasi": pemilih PK disembunyikan, tampil "Mulai RpX" / "Harga sesuai survei".
4. **Standar Pengerjaan 4 Tahap** — 4 kartu bernomor 01–04 (nomor besar pudar sebagai latar).
5. **Daftar Tarif [Layanan]** — 3 kartu per PK (tengah ditandai *Favorit*, berbingkai), harga /unit, 4 poin ceklis, tombol **Pesan via WhatsApp**. Hanya untuk layanan per-PK.
6. **Banner promo** (opsional per layanan) — contoh: *Diskon Borongan: potongan Rp10.000/unit untuk minimal 3 unit di alamat yang sama* + chip "Hemat s.d. Rp50.000+". **Konfirmasi ke klien.**
7. **Layanan Servis Terkait Lainnya** — 3 kartu (kategori label, harga mulai, nama, deskripsi, "Lihat Detail Layanan").
8. CTA band + footer.

### 7.4 Harga `/harga`
- H1 *"Daftar Harga & Ketentuan Garansi"*, sub *"Estimasi tarif transparan per unit. Harga pasti tertulis di nota sebelum pengerjaan dimulai."*
- **Filter kapasitas**: Semua Kapasitas · 0,5–1 PK · 1,5 PK · 2 PK (di HP default ke satu kolom, lihat `DESIGN.md`).
- **Tabel berkelompok** (§8.2): nama + deskripsi singkat · 3 kolom PK · chip Garansi · tombol **Pesan** (WA dengan nama pekerjaan).
- Baris penutup: *"Biaya pengecekan awal Rp50.000 — 100% GRATIS apabila dilanjutkan dengan perbaikan unit."*
- **Ketentuan & Hak Garansi Pengerjaan** — 2 kartu (§8.4) + **Prosedur Klaim 3 Langkah**.
- CTA band + footer.

### 7.5 Kontak `/kontak`
- H1 *"Hubungi Kami"*, sub *"Konsultasikan keluhan AC Anda atau jadwalkan kedatangan teknisi."*
- Kiri: 3 kartu info — **WhatsApp / Telepon Hotline** (nomor + tombol "hubungi"), **Jam Operasional**, **Alamat Workshop & Kantor** (data §2).
- Kanan: kartu peta + baris "Jangkauan: Seluruh Pulau Batam" + "Buka di Google Maps ↗".
- CTA band + footer.

### 7.6 Komponen global
- **CTA band**: H2 *"Siap Membuat Ruangan Anda Kembali Sejuk & Nyaman?"*, teks *"Konsultasikan keluhan AC Anda langsung dengan tim teknisi Jaya AC. Jadwal fleksibel dan garansi servis 30–60 hari se-Pulau Batam."* Tombol **Hubungi WhatsApp** (primary) + **Telepon CS: 0812-7000-1234** (outline).
  - Desain menulis "Respon kilat" dan "garansi servis 30 hari" → diganti agar sesuai fakta (garansi perbaikan 60 hari).
- **Footer**: logo, tagline, "WhatsApp: 0812-7000-1234", ikon sosial (WA, Instagram, Facebook — **URL dari klien**), Navigasi, Workshop & Jam Layanan, ©, Syarat & Ketentuan, Kebijakan Privasi.
- **Mobile Sticky Bar** & **tombol WA melayang** (desktop) — lihat `DESIGN.md`.

## 8. Data Layanan & Harga

### 8.1 Daftar 14 layanan

Harga "mulai" **dihitung otomatis** dari baris harga terendah yang terhubung (§8.2) — bukan dari angka di kartu Figma, karena kartu Figma tidak konsisten dengan halaman Harga.

| # | Slug | Nama (dari Figma) | Kategori | Baris harga terhubung | Mulai | Garansi |
|---|---|---|---|---|---|---|
| 1 | `cuci-ac` | Cuci AC | Perawatan | cuci-rutin | Rp75.000 | 30 hari |
| 2 | `isi-freon` | Isi & Tambah Freon | Perawatan | tambah-freon, isi-r32, isi-r410a, isi-r22 | Rp150.000 | 30 hari |
| 3 | `cuci-besar` | Cuci Besar (Overhaul) | Perawatan | cuci-besar | Rp150.000 | 30 hari |
| 4 | `flushing-nitrogen` | Flushing Pipa Nitrogen | Perawatan | flushing ⁽¹⁾ | Rp200.000 | 30 hari ⁽²⁾ |
| 5 | `fogging-sterilisasi` | Fogging & Sterilisasi Anti-Bakteri | Perawatan | fogging ⁽¹⁾ | Rp85.000 | — ⁽²⁾ |
| 6 | `troubleshooting` | Perbaikan & Troubleshooting | Perbaikan | troubleshooting ⁽¹⁾ | Rp100.000 | 60 hari |
| 7 | `modul-pcb` | Ganti Kapasitor & Modul PCB | Perbaikan | modul-pcb | Rp250.000 | 60 hari |
| 8 | `bocor-pipa-freon` | Perbaikan Bocor Pipa & Freon | Perbaikan | saluran-mampet, las-pipa | Rp100.000 | 60 hari |
| 9 | `ganti-kompresor` | Penggantian Kompresor | Perbaikan | kompresor | Rp350.000 | 60 hari |
| 10 | `dinamo-fan` | Ganti Dinamo Motor Fan | Perbaikan | dinamo ⁽¹⁾ | Rp225.000 | 60 hari |
| 11 | `thermistor-sensor` | Ganti Thermistor & Sensor | Perbaikan | sensor ⁽¹⁾ | Rp95.000 | 60 hari |
| 12 | `bongkar-pasang` | Bongkar Pasang AC Split | Instalasi | bongkar, pasang, bongkar-pasang | Rp125.000 | 30 hari |
| 13 | `pipa-bracket` | Pasang Pipa Tembaga & Bracket | Instalasi | pipa-per-meter ⁽¹⁾ | Rp85.000/m | 30 hari |
| 14 | `kontrak-komersial` | Servis & Kontrak AC Komersial | Instalasi | — | Konsultasi | Sesuai kontrak |

⁽¹⁾ Harga hanya ada di kartu Layanan Figma, **belum ada di tabel Harga Figma** → ditambahkan ke tabel Harga (baris bertanda ✚ di §8.2). Konfirmasi ke klien.
⁽²⁾ Garansi tidak tercantum di desain → konfirmasi ke klien.

Beranda menampilkan 4 kartu: `cuci-ac`, `isi-freon`, `troubleshooting`, `bongkar-pasang`.

### 8.2 Tabel harga (acuan: halaman Harga Figma)

| Grup | ID | Pekerjaan | 0,5–1 PK | 1,5 PK | 2 PK | Garansi | Beranda |
|---|---|---|---:|---:|---:|---|---|
| Cuci & Perawatan Rutin | cuci-rutin | Cuci AC Rutin | 75.000 | 85.000 | 100.000 | 30 hari | ✓ |
| | cuci-besar | Cuci Besar / Overhaul | 150.000 | 175.000 | 200.000 | 30 hari | |
| | ✚ flushing | Flushing Pipa Nitrogen | mulai 200.000 | | | 30 hari | |
| | ✚ fogging | Fogging & Sterilisasi | mulai 85.000 | | | — | |
| Pengisian Freon (R32/R410a/R22) | tambah-freon | Tambah Freon R32 / R410a | 150.000 | 175.000 | 200.000 | 30 hari | ✓ |
| | isi-r32 | Isi Freon Penuh R32 (kosong total) | 300.000 | 350.000 | 400.000 | 30 hari | |
| | isi-r410a | Isi Freon Penuh R410a | 325.000 | 375.000 | 425.000 | 30 hari | |
| | isi-r22 | Isi Freon Penuh R22 | 250.000 | 300.000 | 350.000 | 30 hari | |
| Perbaikan Bocor & Mampet | saluran-mampet | Saluran Pembuangan Mampet / Tetes Air | 100.000 | 100.000 | 125.000 | 60 hari | ✓ |
| | las-pipa | Las Pipa Bocor + Vakum Jalur | 200.000 | 250.000 | 300.000 | 60 hari | |
| Bongkar & Pasang Unit | bongkar | Bongkar AC (Pump Down) | 125.000 | 150.000 | 175.000 | 30 hari | |
| | pasang | Pasang AC Baru / Relokasi | 275.000 | 300.000 | 375.000 | 30 hari | |
| | bongkar-pasang | Bongkar & Pasang (Paket Lengkap) | 400.000 | 450.000 | 550.000 | 30 hari | ✓ |
| Modul PCB, Kompresor & Komponen | modul-pcb | Servis Modul / PCB Elektronik | mulai 250.000 (sesuai diagnosa) | | | 60 hari | ✓ |
| | kompresor | Penggantian / Servis Kompresor | mulai 350.000 (tergantung tipe unit) | | | 60 hari | |
| | ✚ troubleshooting | Troubleshooting & Perbaikan Ringan | mulai 100.000 | | | 60 hari | |
| | ✚ dinamo | Ganti Dinamo Motor Fan | mulai 225.000 | | | 60 hari | |
| | ✚ sensor | Ganti Thermistor & Sensor | mulai 95.000 | | | 60 hari | |
| Material Instalasi | ✚ pipa-per-meter | Pipa Tembaga + Kabel + Isolasi | 85.000 / meter | | | 30 hari | |

Catatan:
- Baris "Servis Kompresor / Ganti Modul PCB" di Beranda Figma (Rp175.000/Rp250.000) **diganti** dengan baris `modul-pcb` ("mulai Rp250.000").
- Kartu Layanan Figma "Penggantian Kompresor Baru Rp650.000" **diganti** "mulai Rp350.000" sesuai halaman Harga. Jika Rp650.000 adalah harga ganti unit kompresor baru (bukan servis), klien perlu memisahkan dua baris ini.
- Bracket outdoor: harga belum ada → konfirmasi.

### 8.3 Pengerjaan 4 tahap (contoh Cuci AC dari Figma)
1. **Diagnosa Awal** — cek suhu hembusan awal, arus kompresor, dan kelistrikan.
2. **Cuci Evaporator** — pasang terpal pelindung anti-bocor, lepas cover, semprot jet washer kisi indoor.
3. **Flushing Outdoor** — bersihkan saluran drainase dari lumut dan cuci kondensor unit luar.
4. **Uji QC & Garansi** — ukur suhu digital akhir, bersihkan area kerja, aktivasi garansi 30 hari.

Setiap layanan wajib punya 4 tahap sendiri. Untuk 13 layanan lain, agent boleh menyusun draf, **ditandai `draft: true`** sampai disetujui klien.

### 8.4 Ketentuan garansi (dari Figma)
**Ditanggung (gratis):** kerusakan berulang pada titik komponen/pengerjaan yang sama · rembesan/kebocoran pada sambungan instalasi/nepel teknisi · AC kembali tidak dingin karena freon berkurang dari pengerjaan kami · teknisi datang kembali tanpa biaya kunjungan se-Batam.
**Di luar garansi:** kerusakan kelistrikan akibat lonjakan voltase PLN ekstrem · unit dibongkar/diservis pihak ketiga setelah teknisi kami · kerusakan fisik, gigitan tikus, bencana alam · titik kerusakan baru yang terpisah dari komponen yang diservis.
**Klaim 3 langkah:** (1) Hubungi admin via WA — kirim foto nota atau nomor HP saat order · (2) Jadwal teknisi prioritas — hari yang sama atau maks. H+1 · (3) Perbaikan ulang tanpa biaya kunjungan maupun suku cadang terkait.

## 9. Aturan Konten & Kejujuran

**Gaya:** bahasa Indonesia lugas, kalimat pendek, berorientasi aksi.

**Dilarang** (dari brief): *Revolusioner, Seamless, Terdepan*, juga *inovatif, solusi terbaik, kelas dunia, mutakhir, game-changer*.

**Klaim yang wajib dibuktikan klien sebelum tayang** (desain memuatnya):
| Klaim di desain | Tindakan |
|---|---|
| "Teknisi bersertifikat", "berpengalaman BNSP" | Tayang hanya jika ada sertifikat. Jika tidak: "Teknisi berpengalaman" |
| "membasmi 99,9% kuman" (Fogging) | Hapus angka kecuali ada data uji produk; ganti "membantu mengurangi bakteri & bau apek" |
| "Respon kilat" / "Respon Cepat" | Boleh "Respon Cepat" jika admin memang membalas cepat di jam operasional |
| "Solusi … terlengkap & terpercaya" | Ganti fakta: "14 jenis layanan, garansi 30–60 hari" |

**Foto:** foto di Figma tampak seperti placeholder (dipakai berulang di beberapa kartu). Sebelum go-live, ganti dengan **foto asli** teknisi/pekerjaan Jaya AC. Jangan memakai foto yang memperlihatkan orang yang bukan tim Jaya AC sebagai tim Jaya AC.

**Testimoni/rating:** belum ada di desain. Jika ditambahkan nanti, hanya dari ulasan Google asli.

## 10. Template Pesan WhatsApp

Semua tautan: `https://wa.me/6281270001234?text=<encodeURIComponent(teks)>`. Template detail di `SCHEMA.md` §4.

| Asal klik | Teks |
|---|---|
| Header "Booking via WA", sticky bar, FAB | Halo Jaya AC, saya mau booking service AC. |
| Hero "Pesan Jadwal" | Halo Jaya AC, saya mau pesan jadwal kunjungan teknisi. Alamat: … Keluhan: … |
| Kartu layanan "Pesan" | Halo Jaya AC, saya mau pesan layanan **{nama layanan}**. |
| Detail layanan (dengan PK) | Halo Jaya AC, saya mau pesan **{layanan}** untuk AC **{PK}**, estimasi **{harga}**. Alamat: … |
| Baris tabel Harga "Pesan" | Halo Jaya AC, saya mau pesan **{pekerjaan}** (dari daftar harga). Ukuran AC: … PK. |
| Klaim garansi | Halo Jaya AC, saya mau klaim garansi. Nomor HP saat order: … Keluhan: … |

Template diakhiri baris kosong + "Alamat:" / "Ukuran AC:" agar pelanggan tinggal melengkapi.

## 11. Kebutuhan Non-Fungsional
- **Performa**: halaman 100% statis; JS first-load Beranda ≤ 110 KB gzip; foto WebP/AVIF dengan ukuran tepat; font self-hosted; tanpa animasi selain transisi warna ≤ 150 ms.
- **Aksesibilitas**: WCAG 2.2 AA (kontras di `DESIGN.md` §1.2), target sentuh ≥ 44 px, fokus terlihat, 1 `<h1>` per halaman.
- **SEO**: title unik per layanan (mis. "Cuci AC Batam mulai Rp75.000 | Jaya AC"), NAP sama persis dengan Google Business Profile.
- **Privasi**: situs tidak menyimpan data pelanggan. Kebijakan privasi menjelaskan analytics & bahwa percakapan terjadi di WhatsApp.

## 12. Event Analytics
| Event | Properti |
|---|---|
| `click_whatsapp` | `location` (header/hero/card/detail/price_row/cta_band/sticky/fab/contact/footer), `service`, `pk` |
| `click_call` | `location` |
| `filter_category` | `category` |
| `filter_pk` | `pk`, `page` (harga/detail) |

## 13. Data yang Masih Harus Diberikan Klien
- [ ] Logo versi SVG (yang ada PNG)
- [ ] Foto asli: teknisi, pekerjaan per layanan (min. 1 per layanan), workshop
- [ ] Konfirmasi harga baris ✚ (§8.2) dan harga bracket
- [ ] Garansi Flushing & Fogging
- [ ] Bukti sertifikasi teknisi (jika klaim "bersertifikat" dipertahankan)
- [ ] Ketentuan diskon borongan
- [ ] URL Instagram, Facebook, Google Business Profile, koordinat/embed peta
- [ ] Teks Syarat & Ketentuan dan Kebijakan Privasi (atau setujui draf dari tim)
- [ ] Desain **mobile** (atau setujui aturan mobile di `DESIGN.md` §7; prompt Stitch tersedia di `STITCH_PROMPTS.md`)

## 14. Milestone
| Minggu | Output |
|---|---|
| 1 | Konfirmasi data §13, desain mobile disetujui |
| 2 | Implementasi 4 halaman + 14 detail layanan |
| 3 | Foto asli, QA (a11y, Lighthouse mobile ≥ 95), analytics |
| 4 | Deploy, Search Console, sinkron NAP dengan Google Business Profile |
