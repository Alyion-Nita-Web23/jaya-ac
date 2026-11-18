import { PRICE_ROWS } from "./pricing";
import type { CategoryInfo, Service, ServiceCategory } from "./types";

export const CATEGORIES: readonly CategoryInfo[] = [
  { id: "perawatan", label: "Perawatan", icon: "SprayCan" },
  { id: "perbaikan", label: "Perbaikan", icon: "Wrench" },
  { id: "instalasi", label: "Instalasi", icon: "Drill" },
] as const;

export const SERVICES: Service[] = [
  // 1. Cuci AC
  {
    slug: "cuci-ac",
    name: "Cuci AC",
    title: "Cuci AC Rutin & Deep Clean Batam",
    category: "perawatan",
    cardDescription:
      "Pembersihan evaporator, filter, blower, dan outdoor unit agar pendinginan kembali maksimal dan wangi.",
    lead: "Pembersihan total unit indoor & outdoor secara higienis, bergaransi dingin 30 hari. Teknisi berpengalaman siap datang tepat waktu ke lokasi Anda di Batam.",
    image: {
      src: "/images/layanan/cuci-ac.webp",
      alt: "Teknisi Jaya AC membersihkan unit indoor AC split",
    },
    priceRowIds: ["cuci-rutin"],
    primaryPriceRowId: "cuci-rutin",
    warrantyDays: 30,
    steps: [
      {
        title: "Diagnosa Awal",
        body: "Pengecekan temperatur hembusan awal, arus kompresor, dan kelistrikan unit.",
      },
      {
        title: "Cuci Evaporator",
        body: "Pasang terpal pelindung anti-bocor, lepas cover, dan semprot jet washer kisi indoor.",
      },
      {
        title: "Flushing Outdoor",
        body: "Pembersihan saluran drainase dari lumut dan cuci kondensor unit luar.",
      },
      {
        title: "Uji QC & Garansi",
        body: "Pengukuran temperatur digital akhir, area kerja dibersihkan, dan aktivasi garansi 30 hari.",
      },
    ],
    tierFeatures: {
      "0.5-1": [
        "Unit Indoor & Outdoor",
        "Cek Tekanan Freon & Arus",
        "Garansi Dingin 30 Hari",
        "Estimasi pengerjaan ±45 menit",
      ],
      "1.5": [
        "Unit Indoor & Outdoor",
        "Cek Tekanan Freon & Arus",
        "Garansi Dingin 30 Hari",
        "Estimasi pengerjaan ±50 menit",
      ],
      "2": [
        "Unit Indoor & Outdoor",
        "Cek Tekanan Freon & Arus",
        "Garansi Dingin 30 Hari",
        "Pembersihan mendalam ±60 menit",
      ],
    },
    favoritePk: "1.5",
    promo: {
      title: "Diskon Borongan",
      body: "Potongan Rp10.000/unit untuk order minimal 3 unit di alamat yang sama.",
      badge: "Hemat s.d. Rp50.000+",
    },
    relatedSlugs: ["isi-freon", "cuci-besar", "bocor-pipa-freon"],
    featuredOnHome: true,
  },

  // 2. Isi & Tambah Freon
  {
    slug: "isi-freon",
    name: "Isi & Tambah Freon",
    title: "Isi & Tambah Freon R32, R410A, R22 Batam",
    category: "perawatan",
    cardDescription:
      "Pengukuran tekanan dan pengisian freon murni R32, R410A, R22 sesuai standar pabrikan.",
    lead: "Pengisian tekanan refrigerant murni sesuai spesifikasi pabrikan agar AC kembali beku menusuk dan kompresor bekerja awet.",
    image: {
      src: "/images/layanan/isi-freon.webp",
      alt: "Pengisian freon AC dengan manifold gauge",
    },
    priceRowIds: ["tambah-freon", "isi-r32", "isi-r410a", "isi-r22"],
    primaryPriceRowId: "tambah-freon",
    warrantyDays: 30,
    steps: [
      {
        title: "Cek Tekanan PSI",
        body: "Ukur tekanan pipa hisap kompresor menggunakan manifold digital/analog.",
      },
      {
        title: "Uji Kebocoran",
        body: "Pemeriksaan nepel dan sambungan pipa untuk memastikan tidak ada kebocoran halus.",
      },
      {
        title: "Pengisian Freon Murni",
        body: "Pengisian freon berkualitas tinggi sesuai takaran berat atau standar PSI unit.",
      },
      {
        title: "Uji Arus & Suhu",
        body: "Ukur ampere tang dan pastikan suhu hembusan dingin merata sebelum garansi aktif.",
      },
    ],
    tierFeatures: {
      "0.5-1": [
        "Tambah Freon R32 / R410a",
        "Pengecekan Tekanan PSI",
        "Garansi 30 Hari",
        "Pengerjaan cepat & rapi",
      ],
      "1.5": [
        "Tambah Freon R32 / R410a",
        "Pengecekan Tekanan PSI",
        "Garansi 30 Hari",
        "Pengerjaan cepat & rapi",
      ],
      "2": [
        "Tambah Freon R32 / R410a",
        "Pengecekan Tekanan PSI",
        "Garansi 30 Hari",
        "Pengerjaan komprehensif",
      ],
    },
    favoritePk: "1.5",
    relatedSlugs: ["cuci-ac", "bocor-pipa-freon", "cuci-besar"],
    cardTag: "R32 / R410A / R22",
    featuredOnHome: true,
    draft: true,
  },

  // 3. Cuci Besar (Overhaul)
  {
    slug: "cuci-besar",
    name: "Cuci Besar (Overhaul)",
    title: "Cuci Besar / Overhaul Total AC Split Batam",
    category: "perawatan",
    cardDescription:
      "Bongkar unit indoor total untuk mengangkat kotoran membandel, jamur lendir pipa, dan bau apek menahun.",
    lead: "Pencopotan unit indoor secara keseluruhan untuk membersihkan kerak oli dan lumut membandel di belakang kisi evaporator.",
    image: {
      src: "/images/layanan/cuci-besar.webp",
      alt: "Overhaul dan pembersihan total unit indoor AC",
    },
    priceRowIds: ["cuci-besar"],
    primaryPriceRowId: "cuci-besar",
    warrantyDays: 30,
    steps: [
      {
        title: "Pump Down Freon",
        body: "Kunci sirkulasi freon ke outdoor agar cairan pendingin tidak terbuang.",
      },
      {
        title: "Turun Unit Indoor",
        body: "Bongkar evaporator, talang air belakang, drum blower motor secara terpisah.",
      },
      {
        title: "Pembersihan Kimia Lembut",
        body: "Cuci tuntas setiap celah kisi aluminium yang tertutup lumut dan lendir hitam.",
      },
      {
        title: "Pemasangan & Vakum",
        body: "Rakit kembali unit, vakum jalur, dan cek performa dingin serta bebas bau.",
      },
    ],
    tierFeatures: {
      "0.5-1": [
        "Turun Unit Indoor Penuh",
        "Pembersihan Talang & Blower",
        "Garansi 30 Hari",
        "Bebas Bau & Lendir Tuntas",
      ],
      "1.5": [
        "Turun Unit Indoor Penuh",
        "Pembersihan Talang & Blower",
        "Garansi 30 Hari",
        "Bebas Bau & Lendir Tuntas",
      ],
      "2": [
        "Turun Unit Indoor Penuh",
        "Pembersihan Talang & Blower",
        "Garansi 30 Hari",
        "Bebas Bau & Lendir Tuntas",
      ],
    },
    favoritePk: "1.5",
    relatedSlugs: ["cuci-ac", "isi-freon", "flushing-nitrogen"],
    cardTag: "Turun Unit Indoor",
    featuredOnHome: false,
    draft: true,
  },

  // 4. Flushing Pipa Nitrogen
  {
    slug: "flushing-nitrogen",
    name: "Flushing Pipa Nitrogen",
    title: "Flushing Sirkulasi Pipa AC dengan Nitrogen Batam",
    category: "perawatan",
    cardDescription:
      "Pembersihan sirkulasi oli dan kerak pipa tembaga menggunakan cairan R-11 dorongan nitrogen.",
    lead: "Membersihkan oli basi dan penyumbatan kerak karbon di dalam pipa tembaga sebelum pasang kompresor atau ganti freon baru.",
    image: {
      src: "/images/layanan/flushing-nitrogen.webp",
      alt: "Flushing jalur pipa AC menggunakan tabung nitrogen bertekanan",
    },
    priceRowIds: ["flushing"],
    primaryPriceRowId: "flushing",
    warrantyDays: 30,
    steps: [
      {
        title: "Isolasi Jalur Pipa",
        body: "Putuskan sambungan pipa dari kompresor dan indoor unit.",
      },
      {
        title: "Injeksi Cairan R-11",
        body: "Masukkan cleaner khusus pelarut oli kerak karbon ke dalam pipa tembaga.",
      },
      {
        title: "Tembak Tekanan Tinggi",
        body: "Dorong dengan tekanan gas nitrogen murni hingga seluruh kotoran hitam keluar tuntas.",
      },
      {
        title: "Uji Kebersihan Jalur",
        body: "Pastikan cairan yang keluar jernih dan jalur pipa kering sempurna.",
      },
    ],
    relatedSlugs: ["cuci-besar", "ganti-kompresor", "bocor-pipa-freon"],
    featuredOnHome: false,
    draft: true,
  },

  // 5. Fogging & Sterilisasi Anti-Bakteri
  {
    slug: "fogging-sterilisasi",
    name: "Fogging & Sterilisasi Anti-Bakteri",
    title: "Fogging & Desinfeksi Bakteri AC Batam",
    category: "perawatan",
    cardDescription:
      "Sterilisasi uap pasca-pembersihan untuk membantu mengurangi bakteri, spora jamur, pemicu alergi dan bau ruangan.",
    lead: "Treatment pengasapan anti-bakteri non-korosif untuk memurnikan sirkulasi udara kamar dan kantor dari mikroorganisme berbahaya.",
    image: {
      src: "/images/layanan/fogging-sterilisasi.webp",
      alt: "Fogging desinfeksi ruang dan kisi AC",
    },
    priceRowIds: ["fogging"],
    primaryPriceRowId: "fogging",
    warrantyDays: null,
    steps: [
      {
        title: "Pembersihan Awal",
        body: "Pastikan filter debu dan kisi evaporator dalam keadaan bersih.",
      },
      {
        title: "Persiapan Ruangan",
        body: "Tutup rapat ventilasi ruangan agar partikel uap sterilisasi terkonsentrasi.",
      },
      {
        title: "Pengasapan Cairan Khusus",
        body: "Semprotkan kabut formula anti-bakteri ke dalam intake hisap AC yang menyala.",
      },
      {
        title: "Aerasi & Finishing",
        body: "Sirkulasikan udara hingga ruangan terasa segar, higienis, dan bebas aroma apek.",
      },
    ],
    relatedSlugs: ["cuci-ac", "cuci-besar", "troubleshooting"],
    featuredOnHome: false,
    draft: true,
  },

  // 6. Perbaikan & Troubleshooting
  {
    slug: "troubleshooting",
    name: "Perbaikan & Troubleshooting",
    title: "Troubleshooting & Servis Kendala AC Batam",
    category: "perbaikan",
    cardDescription:
      "Solusi AC bocor air, mati total, atau tidak dingin. Pemeriksaan menyeluruh kendala error unit.",
    lead: "Pemeriksaan mendalam untuk menemukan sumber pasti kerusakan AC mati total, berisik, kode error berkedip, hingga tidak dingin.",
    image: {
      src: "/images/layanan/troubleshooting.webp",
      alt: "Teknisi memeriksa modul dan kelistrikan AC",
    },
    priceRowIds: ["troubleshooting", "saluran-mampet"],
    primaryPriceRowId: "troubleshooting",
    warrantyDays: 60,
    steps: [
      {
        title: "Pengecekan Kode Error",
        body: "Baca respon indikator kedipan lampu atau kode remote digital unit.",
      },
      {
        title: "Inspeksi Komponen",
        body: "Uji tegangan input, thermistor, kapasitor, dan sirkuit kelistrikan.",
      },
      {
        title: "Perbaikan / Penggantian",
        body: "Solusi komponen yang bermasalah secara transparan dengan konfirmasi biaya di awal.",
      },
      {
        title: "Uji Beban Penuh",
        body: "Jalankan unit pada beban pendinginan penuh untuk memvalidasi stabilitas kompresor.",
      },
    ],
    relatedSlugs: ["modul-pcb", "bocor-pipa-freon", "dinamo-fan"],
    featuredOnHome: true,
    draft: true,
  },

  // 7. Ganti Kapasitor & Modul PCB
  {
    slug: "modul-pcb",
    name: "Ganti Kapasitor & Modul PCB",
    title: "Servis Modul PCB & Kapasitor AC Batam",
    category: "perbaikan",
    cardDescription:
      "Penggantian kapasitor starting kompresor / fan internal serta reparasi papan sirkuit elektronik utama.",
    lead: "Perbaikan kendala modul PCB konslet, sensor mati mendadak, atau kapasitor meledak/kembung dengan komponen pengganti berkualitas.",
    image: {
      src: "/images/layanan/modul-pcb.webp",
      alt: "Pemeriksaan jalur solder papan PCB AC",
    },
    priceRowIds: ["modul-pcb"],
    primaryPriceRowId: "modul-pcb",
    warrantyDays: 60,
    steps: [
      {
        title: "Diagnosa Jalur Solder",
        body: "Periksa jalur terbakar, relay hangus, dan kestabilan mikrokontroler modul.",
      },
      {
        title: "Uji Kapasitansi uF",
        body: "Ukur nilai mikrofarad kapasitor starting menggunakan capacitance meter.",
      },
      {
        title: "Solder & Ganti Komponen",
        body: "Ganti komponen rusak dengan spesifikasi voltase dan kapasitas yang sepadan.",
      },
      {
        title: "Uji Proteksi Daya",
        body: "Pastikan modul merespon sensor dengan aman tanpa lonjakan panas.",
      },
    ],
    relatedSlugs: ["troubleshooting", "thermistor-sensor", "dinamo-fan"],
    featuredOnHome: false,
    draft: true,
  },

  // 8. Perbaikan Bocor Pipa & Freon
  {
    slug: "bocor-pipa-freon",
    name: "Perbaikan Bocor Pipa & Freon",
    title: "Perbaikan Bocor Air & Pipa Freon AC Batam",
    category: "perbaikan",
    cardDescription:
      "Pendeteksian titik poros kebocoran freon, pengelasan perak pipa tembaga, dan perbaikan tetes air indoor.",
    lead: "Solusi tuntas untuk masalah kondensasi talang retak, kemiringan indoor keliru, atau pipa tembaga rembes berlubang halus.",
    image: {
      src: "/images/layanan/bocor-pipa-freon.webp",
      alt: "Pengelasan pipa tembaga AC yang mengalami kebocoran",
    },
    priceRowIds: ["saluran-mampet", "las-pipa"],
    primaryPriceRowId: "saluran-mampet",
    warrantyDays: 60,
    steps: [
      {
        title: "Uji Tekanan Gelembung",
        body: "Cari titik rembesan oli freon pada sambungan flaring dan tekukan pipa tembaga.",
      },
      {
        title: "Las Perak & Perbaikan Pipa",
        body: "Tutup lubang kebocoran pipa menggunakan kawat perak dan blender gas oksigen.",
      },
      {
        title: "Pembersihan Jalur Drainase",
        body: "Tembak sumbatan lendir pada selang spiral drainase indoor agar tetesan air lancar.",
      },
      {
        title: "Vakum & Isi Freon Ulang",
        body: "Vakum udara pipa hingga minus 30 inHg lalu lakukan pengisian freon kembali.",
      },
    ],
    tierFeatures: {
      "0.5-1": [
        "Pembersihan Selang Drainase",
        "Penataan Kemiringan Indoor",
        "Garansi 60 Hari Bebas Bocor",
        "Teknisi Berpengalaman",
      ],
      "1.5": [
        "Pembersihan Selang Drainase",
        "Penataan Kemiringan Indoor",
        "Garansi 60 Hari Bebas Bocor",
        "Teknisi Berpengalaman",
      ],
      "2": [
        "Pembersihan Selang Drainase",
        "Penataan Kemiringan Indoor",
        "Garansi 60 Hari Bebas Bocor",
        "Teknisi Berpengalaman",
      ],
    },
    favoritePk: "1.5",
    relatedSlugs: ["cuci-ac", "isi-freon", "troubleshooting"],
    cardTag: "Garansi Pasti Manjur",
    featuredOnHome: false,
    draft: true,
  },

  // 9. Penggantian Kompresor
  {
    slug: "ganti-kompresor",
    name: "Penggantian Kompresor",
    title: "Ganti & Servis Kompresor AC Batam",
    category: "perbaikan",
    cardDescription:
      "Solusi kompresor macet, terbakar, atau kehilangan kompresi. Termasuk vakum oli baru dan isi freon murni.",
    lead: "Penanganan jantung utama pendingin udara Anda ketika mengalami macet mekanis, ampere melonjak, atau gulungan dinamo putus.",
    image: {
      src: "/images/layanan/ganti-kompresor.webp",
      alt: "Pemasangan unit kompresor outdoor AC baru",
    },
    priceRowIds: ["kompresor"],
    primaryPriceRowId: "kompresor",
    warrantyDays: 60,
    steps: [
      {
        title: "Cek Hambatan Gulungan",
        body: "Ukur resistansi terminal Common, Run, Start (CRS) ke ground mesin.",
      },
      {
        title: "Pelepasan Kompresor Lama",
        body: "Bongkar pipa sambungan hisap dan buang kompresor lama secara aman.",
      },
      {
        title: "Flushing & Pasang Baru",
        body: "Bersihkan sisa oli gosong pada kondensor sebelum mengelas kompresor pengganti.",
      },
      {
        title: "Vakum Dalam & Pengujian",
        body: "Vakum total sirkulasi, isi freon murni timbangan, dan uji running ampere stabil.",
      },
    ],
    relatedSlugs: ["flushing-nitrogen", "isi-freon", "modul-pcb"],
    featuredOnHome: false,
    draft: true,
  },

  // 10. Ganti Dinamo Motor Fan
  {
    slug: "dinamo-fan",
    name: "Ganti Dinamo Motor Fan",
    title: "Ganti Dinamo Motor Kipas Fan AC Batam",
    category: "perbaikan",
    cardDescription:
      "Penanganan fan indoor/outdoor putaran lambat, bearing aus berderit keras, atau dinamo korsleting.",
    lead: "Ganti dinamo kipas blower atau motor outdoor yang aus agar sirkulasi hembusan angin kembali kencang dan hening.",
    image: {
      src: "/images/layanan/dinamo-fan.webp",
      alt: "Pemeriksaan motor kipas fan AC split",
    },
    priceRowIds: ["dinamo"],
    primaryPriceRowId: "dinamo",
    warrantyDays: 60,
    steps: [
      {
        title: "Cek Putaran As Kipas",
        body: "Periksa apakah as motor goyang atau seret akibat bearing yang berkarat.",
      },
      {
        title: "Uji Nilai Resistansi",
        body: "Ukur gulungan tembaga motor fan dengan multimeter untuk memastikan tidak putus.",
      },
      {
        title: "Pemasangan Dinamo Baru",
        body: "Pasang motor baru orisinal berikut balancing baling-baling fan agar tidak bergetar.",
      },
      {
        title: "Uji Hembusan Angin",
        body: "Pastikan kecepatan putaran RPM normal pada semua setelan remote.",
      },
    ],
    relatedSlugs: ["troubleshooting", "modul-pcb", "thermistor-sensor"],
    featuredOnHome: false,
    draft: true,
  },

  // 11. Ganti Thermistor & Sensor
  {
    slug: "thermistor-sensor",
    name: "Ganti Thermistor & Sensor",
    title: "Ganti Sensor Suhu & Thermistor AC Batam",
    category: "perbaikan",
    cardDescription:
      "Atasi AC sering mati-hidup sendiri akibat error sensor temperatur evaporator atau suhu pipa tidak akurat.",
    lead: "Penggantian thermistor tabung dan mata sensor suhu yang rusak untuk mengembalikan pembacaan suhu otomatis AC secara presisi.",
    image: {
      src: "/images/layanan/thermistor-sensor.webp",
      alt: "Penggantian kabel soket thermistor AC",
    },
    priceRowIds: ["sensor"],
    primaryPriceRowId: "sensor",
    warrantyDays: 60,
    steps: [
      {
        title: "Ukur Nilai Tahanan Kilo-Ohm",
        body: "Uji nilai resistansi sensor thermistor saat dingin dan suhu ruang normal.",
      },
      {
        title: "Pelepasan Soket Sensor",
        body: "Lepas sensor lama yang berkarat atau terputus dari papan modul indoor.",
      },
      {
        title: "Pasang Sensor Orisinal",
        body: "Pasang sensor baru dengan resistansi standar ohm sesuai spesifikasi merk AC.",
      },
      {
        title: "Kalibrasi Pemutusan Otomatis",
        body: "Uji cut-off kompresor tepat saat ruangan telah mencapai suhu target remote.",
      },
    ],
    relatedSlugs: ["modul-pcb", "troubleshooting", "cuci-ac"],
    featuredOnHome: false,
    draft: true,
  },

  // 12. Bongkar Pasang AC Split
  {
    slug: "bongkar-pasang",
    name: "Bongkar Pasang AC Split",
    title: "Jasa Bongkar Pasang & Relokasi AC Batam",
    category: "instalasi",
    cardDescription:
      "Instalasi unit baru, pemindahan antar kamar, atau relokasi AC dengan teknik pump down aman.",
    lead: "Pekerjaan bongkar, pasang baru, maupun relokasi unit AC split dengan standar kerapian estetika ruangan dan keamanan freon tanpa bocor.",
    image: {
      src: "/images/layanan/bongkar-pasang.webp",
      alt: "Teknisi memasang bracket indoor AC pada dinding",
    },
    priceRowIds: ["bongkar", "pasang", "bongkar-pasang"],
    primaryPriceRowId: "bongkar-pasang",
    warrantyDays: 30,
    steps: [
      {
        title: "Pump Down Aman",
        body: "Kunci freon masuk ke kompresor outdoor agar tidak terbuang satu tetes pun.",
      },
      {
        title: "Bongkar Rapi & Angkut",
        body: "Lepas bracket indoor dan dudukan outdoor dengan rapi tanpa merusak cat dinding.",
      },
      {
        title: "Pemasangan Presisi & Waterpass",
        body: "Pasang plat gantungan baru dengan waterpass agar pembuangan air tidak bocor.",
      },
      {
        title: "Vakum Pipa & Uji Fungsi",
        body: "Vakum sirkulasi pemipaan sebelum kran dibuka, lalu tes dingin optimal unit.",
      },
    ],
    tierFeatures: {
      "0.5-1": [
        "Bongkar & Pasang Lengkap",
        "Vakum Jalur Pipa",
        "Garansi Instalasi 30 Hari",
        "Kerapian Jalur Kabel & Pipa",
      ],
      "1.5": [
        "Bongkar & Pasang Lengkap",
        "Vakum Jalur Pipa",
        "Garansi Instalasi 30 Hari",
        "Kerapian Jalur Kabel & Pipa",
      ],
      "2": [
        "Bongkar & Pasang Lengkap",
        "Vakum Jalur Pipa",
        "Garansi Instalasi 30 Hari",
        "Kerapian Jalur Kabel & Pipa",
      ],
    },
    favoritePk: "1.5",
    relatedSlugs: ["pipa-bracket", "cuci-ac", "isi-freon"],
    featuredOnHome: true,
    draft: true,
  },

  // 13. Pasang Pipa Tembaga & Bracket
  {
    slug: "pipa-bracket",
    name: "Pasang Pipa Tembaga & Bracket",
    title: "Pemasangan Pipa Tembaga & Bracket AC Batam",
    category: "instalasi",
    cardDescription:
      "Instalasi pipa tembaga standar tebal 0.6mm–0.7mm, kabel control, duct tape pembungkus, dan bracket outdoor anti-karat.",
    lead: "Material instalasi berkualitas tinggi anti korosi untuk menyambungkan unit indoor dan outdoor dengan daya tahan puluhan tahun di iklim Batam.",
    image: {
      src: "/images/layanan/pipa-bracket.webp",
      alt: "Pemasangan pipa tembaga tebal dan pembungkus isolasi AC",
    },
    priceRowIds: ["pipa-per-meter"],
    primaryPriceRowId: "pipa-per-meter",
    warrantyDays: 30,
    steps: [
      {
        title: "Ukur Jarak Jalur Pipa",
        body: "Tentukan rute terpendek dan paling rapi antara posisi indoor dan outdoor.",
      },
      {
        title: "Flaring & Bending Presisi",
        body: "Kembangkan ujung tembaga tanpa retak dan tekuk pipa menggunakan pipe bender.",
      },
      {
        title: "Insulasi & Duct Tape Rapi",
        body: "Bungkus pipa bersama kabel kontrol dengan insulasi tebal anti-kondensasi.",
      },
      {
        title: "Pasang Bracket Dynabolt Kuat",
        body: "Pasang bracket outdoor berbahan kokoh dengan dynabolt anti-goyang dan anti-karat.",
      },
    ],
    relatedSlugs: ["bongkar-pasang", "bocor-pipa-freon", "cuci-ac"],
    featuredOnHome: false,
    draft: true,
  },

  // 14. Servis & Kontrak AC Komersial
  {
    slug: "kontrak-komersial",
    name: "Servis & Kontrak AC Komersial",
    title: "Kontrak Pemeliharaan AC Kantor & Ruko Batam",
    category: "instalasi",
    cardDescription:
      "Paket pemeliharaan berkala untuk ruko, cafe, kantor, cassette & ceiling duct dengan SLA respons cepat dan invoice resmi.",
    lead: "Solusi terencana perawatan rutin puluhan unit AC untuk perkantoran, ruko, restoran, dan fasilitas komersial di seluruh penjuru Batam.",
    image: {
      src: "/images/layanan/kontrak-komersial.webp",
      alt: "Perawatan unit AC komersial kantor di Batam",
    },
    priceRowIds: [],
    warrantyDays: 30,
    steps: [
      {
        title: "Survei & Pendataan Unit",
        body: "Identifikasi kapasitas, tipe (split/cassette), dan kondisi riil tiap unit AC Anda.",
      },
      {
        title: "Penyusunan Jadwal Servis",
        body: "Rancang kalender kunjungan berkala (bulanan/triwulan) tanpa mengganggu operasional usaha.",
      },
      {
        title: "Eksekusi & Laporan Teknis",
        body: "Pembersihan total, pengecekan tekanan kompresor, disertai lembar checklist detail.",
      },
      {
        title: "Invoice & Garansi Berkelanjutan",
        body: "Dukungan invoice resmi perusahaan, fasilitas prioritas darurat, dan garansi SLA pengerjaan.",
      },
    ],
    relatedSlugs: ["cuci-ac", "bongkar-pasang", "troubleshooting"],
    cardTag: "Konsultasi",
    featuredOnHome: false,
    draft: true,
  },
];

/**
 * Menghitung harga termurah dari layanan berdasarkan baris harga yang terhubung.
 * Mengembalikan integer rupiah, atau null jika konsultasi.
 */
export function priceFrom(service: Service): number | null {
  if (!service.priceRowIds || service.priceRowIds.length === 0) {
    return null;
  }

  const prices: number[] = [];

  for (const rowId of service.priceRowIds) {
    const row = PRICE_ROWS.find((r) => r.id === rowId);
    if (!row) continue;

    if (row.kind === "per-pk") {
      prices.push(row.prices["0.5-1"], row.prices["1.5"], row.prices["2"]);
    } else if (row.kind === "from") {
      prices.push(row.from);
    } else if (row.kind === "per-unit") {
      prices.push(row.price);
    }
  }

  if (prices.length === 0) {
    return null;
  }

  return Math.min(...prices);
}

/**
 * Menghitung jumlah layanan per kategori dan total 'semua'.
 */
export function countByCategory(): Record<ServiceCategory | "semua", number> {
  const counts: Record<ServiceCategory | "semua", number> = {
    semua: SERVICES.length,
    perawatan: 0,
    perbaikan: 0,
    instalasi: 0,
  };

  for (const service of SERVICES) {
    counts[service.category]++;
  }

  return counts;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

