# Prompt Google Stitch — Versi Mobile Jaya AC (v2)

Desain desktop sudah selesai di Figma (`docs/design/*.png`). Prompt di bawah dipakai untuk **membuat versi mobile** yang setia pada desain itu. Hasil mobile yang disetujui disimpan ke `docs/design/mobile-*.png`, lalu `DESIGN.md` §7 disesuaikan bila ada perbedaan.

Cara pakai:
1. Buat proyek baru di Google Stitch, mode **Mobile**.
2. Jika Stitch menerima gambar, unggah screenshot desktop halaman yang sama sebagai referensi.
3. Tempel **Prompt 0** + prompt halaman. Satu screen per prompt.
4. Teks UI dalam tanda kutip adalah teks final — salin persis (sudah memakai data yang dikoreksi).

---

## Prompt 0 — Style Brief (tempel di setiap screen)

```
Mobile version (390px wide) of the existing desktop design for "Jaya AC", an air-conditioner service company in Batam, Indonesia. Keep the exact same visual style as the desktop reference. All UI text in Bahasa Indonesia, exactly as quoted.

Style: clean, bright, professional. White and very light blue backgrounds, white cards with thin #E2E8F0 borders and 12px radius, soft small shadows.
Colors:
- Primary buttons: navy #004B87 with white text.
- Links, prices, active menu, small table buttons: blue #0070C0.
- WhatsApp buttons: green #15803D with white text (never white text on light green).
- Text: #0F172A; secondary text #475569.
- Section backgrounds: #F8F9FF; footer and CTA area: #F2F3FF; icon squares: #EFF6FF.
- Warranty chips: light green background #F0FDF4, green text #15803D, e.g. "30 Hari".
- NO orange, NO purple, NO gradients except a white fade over the hero photo, NO glass/blur effects, NO emoji, NO illustrations — real photos only.
Font: Plus Jakarta Sans; bold headings with tight letter spacing.
Icons: thin line icons (Lucide style).

Global elements:
- Top header: logo "JAYA AC / SERVICE AC" (navy and light blue, AC unit with air waves) on the left, a "Menu" button on the right.
- Sticky bottom bar always visible: two equal buttons side by side, navy "Telepon" (phone icon) and green "Chat WA" (WhatsApp icon).
- Footer on #F2F3FF, single column: logo, "Servis & perawatan AC rumah, ruko, dan kantor di Batam.", "WhatsApp: 0812-7000-1234", round social icons (WhatsApp, Instagram, Facebook), "NAVIGASI" links (Beranda, Layanan, Harga, Kontak), "WORKSHOP & JAM LAYANAN": "Kompleks Sentral Bisnis Blok B No. 12, Batam Center", "Senin – Minggu: 08.00 – 20.00 WIB", then "© 2026 Jaya AC Batam", "Syarat & Ketentuan", "Kebijakan Privasi".
- CTA band before the footer: rounded card with a soft blurred photo of a technician behind a mostly-opaque white layer. Heading "Siap Membuat Ruangan Anda Kembali Sejuk & Nyaman?", text "Konsultasikan keluhan AC Anda langsung dengan tim teknisi Jaya AC. Jadwal fleksibel dan garansi servis 30–60 hari se-Pulau Batam.", full-width navy button "Hubungi WhatsApp" and full-width white outline button "Telepon CS: 0812-7000-1234".
```

## Prompt 1 — Beranda

```
Screen: Home (Beranda), mobile.
1. Hero: real photo of a technician servicing a wall AC unit on top (4:3). Below it: H1 "AC Dingin Kembali, Tanpa Ribet." and text "Layanan cuci, perbaikan, dan isi freon AC rumah atau kantor di Batam. Teknisi tepat waktu dengan garansi pengerjaan." Two full-width stacked buttons: navy "Pesan Jadwal" (calendar icon) and green-outline "Chat WhatsApp".
2. White rounded card with a 2x2 grid of features, each with a line icon in a light blue circle: "Respon Cepat — Siap datang di hari yang sama", "Teknisi Berpengalaman — Profesional & handal", "Harga Transparan — Tanpa biaya tersembunyi", "Layanan Ramah — Kepuasan Anda prioritas kami".
3. Eyebrow "LAYANAN KAMI", heading "Tarif Jelas & Terpercaya", link "Lihat Semua Layanan →". Four stacked service cards with a photo, title, short description and a full-width navy "LIHAT" button: "Cuci AC", "Isi & Tambah Freon", "Perbaikan & Troubleshooting", "Bongkar Pasang".
4. Heading "Katalog Tarif Servis AC Standar & Inverter". A segmented control "0,5–1 PK | 1,5 PK | 2 PK" (first selected). A compact list-table showing one price column: "Cuci AC Rutin — 30 Hari — Rp75.000", "Tambah Freon R32 / R410a — 30 Hari — Rp150.000", "Saluran Pembuangan Mampet — 60 Hari — Rp100.000", "Bongkar & Pasang (Paket Lengkap) — 30 Hari — Rp400.000", "Servis Modul / PCB — 60 Hari — Mulai Rp250.000". Note: "Biaya pengecekan Rp50.000 — GRATIS jika dilanjutkan perbaikan." Full-width navy button "PESAN SERVIS SEKARANG".
5. "Hubungi Kami" section: three stacked info cards (hotline "0812-7000-1234" with green "hubungi" button; "Senin – Minggu: 08.00 – 20.00 WIB"; "Kompleks Sentral Bisnis Blok B No. 12"), then a map card with "Jangkauan: Seluruh Pulau Batam" and "Buka di Google Maps".
6. CTA band, footer, sticky bottom bar.
```

## Prompt 2 — Layanan

```
Screen: Services list (Layanan), mobile.
H1 "Solusi Lengkap Servis & Perawatan AC di Batam", text "Dikerjakan oleh teknisi berpengalaman, menangani AC split rumah tangga, inverter, hingga unit kantor dan komersial."
A horizontally scrollable row of pill tabs with icons and count badges: "Semua Layanan 14" (selected, navy), "Perawatan 5", "Perbaikan 6", "Instalasi 3".
Single-column list of service cards. Each: photo (16:10) with a small white category badge top-left ("PERAWATAN"), title, blue price "Mulai Rp75.000", 2-line description, two buttons side by side: white outline "Lihat Detail" and navy "Pesan" with WhatsApp icon.
Show the first four: "Cuci AC — Mulai Rp75.000", "Isi & Tambah Freon — Mulai Rp150.000", "Cuci Besar (Overhaul) — Mulai Rp150.000", "Flushing Pipa Nitrogen — Mulai Rp200.000".
Then CTA band, footer, sticky bottom bar.
```

## Prompt 3 — Detail Layanan (Cuci AC)

```
Screen: Service detail for "Cuci AC", mobile.
Link "← Kembali ke Semua Layanan". Light blue section: H1 "Cuci AC Rutin & Deep Clean Batam", text "Pembersihan total unit indoor & outdoor secara higienis, bergaransi dingin 30 hari.", photo of a technician cleaning an indoor AC unit.
Booking card (white, rounded, shadow): title "Pesan Teknisi AC", sub "Jadwalkan kunjungan teknisi hari ini tanpa ribet", label "KAPASITAS UNIT AC ANDA:", 3 selectable tiles "0,5 – 1 PK / Kamar", "1,5 PK / Ruang Tamu" (selected, blue border), "2 PK / Kantor/Ruko". Price box: "Tarif Cuci Komplit Mulai", big blue "Rp85.000 /unit", green chip "Garansi 30 Hari". Full-width green button "Chat WhatsApp Sekarang". Row with phone icon "0812-7000-1234" and "08.00 – 20.00 WIB". Two green check lines: "Tanpa DP — pembayaran setelah selesai & dingin tuntas", "Garansi dingin tuntas, bebas survei ulang".
Section "Standar Pengerjaan 4 Tahap": 4 stacked cards with large faded numbers 01–04: "Diagnosa Awal", "Cuci Evaporator", "Flushing Outdoor", "Uji QC & Garansi" with one-line descriptions.
Section "Daftar Tarif Cuci AC": 3 stacked price cards "0,5 – 1 PK Rp75.000", "1,5 PK Rp85.000" (navy border, badge "Favorit"), "2 PK Rp100.000", each with 4 check items and a "Pesan via WhatsApp" button.
Promo bar: tag icon, "Diskon Borongan — Potongan Rp10.000/unit untuk order minimal 3 unit di alamat yang sama", green chip "Hemat s.d. Rp50.000+".
"Layanan Servis Terkait Lainnya": 3 stacked cards (Isi & Tambah Freon, Cuci Besar / Overhaul, Perbaikan Bocor & Air Menetes) with "Lihat Detail Layanan >".
CTA band, footer, sticky bottom bar.
```

## Prompt 4 — Harga

```
Screen: Pricing (Harga), mobile.
H1 "Daftar Harga & Ketentuan Garansi", text "Estimasi tarif transparan per unit. Harga pasti tertulis di nota sebelum pengerjaan dimulai."
Sticky segmented control "0,5–1 PK | 1,5 PK | 2 PK".
Grouped price list showing only the selected PK column. Group header rows on light blue with blue icon + label: "Cuci & Perawatan Rutin", "Pengisian Freon Murni (R32 / R410a / R22)", "Perbaikan Bocor & Mampet", "Bongkar & Pasang Unit", "Modul PCB, Kompresor & Komponen". Each item row: bold name, small grey description, price right-aligned bold, small green warranty chip, small blue "Pesan" button.
Example rows: "Cuci AC Rutin Rp75.000 30 Hari", "Cuci Besar / Overhaul Rp150.000 30 Hari", "Tambah Freon R32 / R410a Rp150.000 30 Hari", "Isi Freon Penuh R32 Rp300.000 30 Hari", "Saluran Pembuangan Mampet Rp100.000 60 Hari", "Las Pipa Bocor + Vakum Jalur Rp200.000 60 Hari", "Bongkar & Pasang (Paket Lengkap) Rp400.000 30 Hari", "Servis Modul / PCB Mulai Rp250.000 60 Hari".
Footer note with info icon: "Biaya pengecekan awal Rp50.000 — 100% GRATIS apabila dilanjutkan dengan perbaikan unit."
Eyebrow "KOMITMEN LAYANAN", heading "Ketentuan & Hak Garansi Pengerjaan". Card "100% Ditanggung Garansi" with 4 green check items; card "Kondisi di Luar Garansi" with 4 grey info items. Card "Prosedur Klaim 3 Langkah" with numbered steps "Hubungi Admin via WA", "Jadwal Teknisi Prioritas", "Perbaikan Bebas Biaya".
CTA band, footer, sticky bottom bar.
```

## Prompt 5 — Kontak

```
Screen: Contact (Kontak), mobile.
H1 "Hubungi Kami", text "Konsultasikan keluhan AC Anda atau jadwalkan kedatangan teknisi."
Three stacked info cards with a light blue icon square:
- "WHATSAPP / TELEPON HOTLINE", big "0812-7000-1234", small "Online setiap hari, 08.00–20.00", green outline button "hubungi".
- "JAM OPERASIONAL", "Senin – Minggu: 08.00 – 20.00 WIB", small "Tetap melayani di akhir pekan & tanggal merah".
- "ALAMAT WORKSHOP & KANTOR", "Kompleks Sentral Bisnis Blok B No. 12", small "Batam Center, Kota Batam, Kepulauan Riau".
Map card (Google Maps of Batam island with a pin "Jaya AC Batam"), bottom row "Jangkauan: Seluruh Pulau Batam" and blue link "Buka di Google Maps ↗".
CTA band, footer, sticky bottom bar.
```

## Prompt Perbaikan

```
Replace any white text on light green with white text on dark green #15803D.
```
```
Make sure the bottom sticky bar with "Telepon" and "Chat WA" does not cover the last content; add bottom padding.
```
```
Use the phone number 0812-7000-1234 everywhere. Remove any other phone number.
```
