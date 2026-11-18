import type { PkOption, PkSize, PriceGroup, PriceRow, WarrantyPolicy } from "./types";

export const PK_OPTIONS: readonly PkOption[] = [
  { key: "0.5-1", label: "0,5 – 1 PK", room: "Kamar" },
  { key: "1.5", label: "1,5 PK", room: "Ruang Tamu" },
  { key: "2", label: "2 PK", room: "Kantor/Ruko" },
] as const;

export const PRICE_GROUPS: PriceGroup[] = [
  { id: "perawatan", label: "Cuci & Perawatan Rutin", icon: "SprayCan" },
  { id: "freon", label: "Pengisian Freon Murni (R32 / R410a / R22)", icon: "Gauge" },
  { id: "bocor", label: "Perbaikan Bocor & Mampet", icon: "Wrench" },
  { id: "bongkar-pasang", label: "Bongkar & Pasang Unit", icon: "Drill" },
  { id: "komponen", label: "Modul PCB & Kompresor Mesin", icon: "Cpu" },
  { id: "material", label: "Material Instalasi", icon: "Layers" },
];

export const PRICE_ROWS: PriceRow[] = [
  // 1. Cuci & Perawatan Rutin
  {
    id: "cuci-rutin",
    groupId: "perawatan",
    label: "Cuci AC Rutin",
    description: "Pembersihan evaporator indoor, filter debu, dan kompresor outdoor.",
    warrantyDays: 30,
    kind: "per-pk",
    prices: {
      "0.5-1": 75000,
      "1.5": 85000,
      "2": 100000,
    },
  },
  {
    id: "cuci-besar",
    groupId: "perawatan",
    label: "Cuci Besar / Overhaul",
    description: "Turun unit indoor tuntas, pembersihan lendir evaporator belakang & talang air.",
    warrantyDays: 30,
    kind: "per-pk",
    prices: {
      "0.5-1": 150000,
      "1.5": 175000,
      "2": 200000,
    },
  },
  {
    id: "flushing",
    groupId: "perawatan",
    label: "Flushing Pipa Nitrogen",
    description: "Pembersihan sirkulasi oli dan kerak pipa tembaga menggunakan cairan R-11 dorongan nitrogen.",
    warrantyDays: 30,
    needsConfirmation: true,
    kind: "from",
    from: 200000,
  },
  {
    id: "fogging",
    groupId: "perawatan",
    label: "Fogging & Sterilisasi",
    description: "Sterilisasi uap pasca-pembersihan untuk membantu mengurangi bakteri & bau apek.",
    warrantyDays: null,
    needsConfirmation: true,
    kind: "from",
    from: 85000,
  },

  // 2. Pengisian Freon
  {
    id: "tambah-freon",
    groupId: "freon",
    label: "Tambah Freon R32 / R410a",
    description:
      "Penambahan tekanan freon ramah lingkungan sampai standar optimal PSI kompresor.",
    warrantyDays: 30,
    kind: "per-pk",
    prices: {
      "0.5-1": 150000,
      "1.5": 175000,
      "2": 200000,
    },
  },
  {
    id: "isi-r32",
    groupId: "freon",
    label: "Isi Freon Penuh R32 (Kosong Total)",
    description:
      "Termasuk vakum jalur sirkulasi untuk membuang udara dan uap lembab.",
    warrantyDays: 30,
    kind: "per-pk",
    prices: {
      "0.5-1": 300000,
      "1.5": 350000,
      "2": 400000,
    },
  },
  {
    id: "isi-r410a",
    groupId: "freon",
    label: "Isi Freon Penuh R410a",
    description: "Pengisian freon murni inverter dengan vakum oli proses tinggi.",
    warrantyDays: 30,
    kind: "per-pk",
    prices: {
      "0.5-1": 325000,
      "1.5": 375000,
      "2": 425000,
    },
  },
  {
    id: "isi-r22",
    groupId: "freon",
    label: "Isi Freon Penuh R22",
    description: "Khusus unit AC model konvensional / model lama non-inverter.",
    warrantyDays: 30,
    kind: "per-pk",
    prices: {
      "0.5-1": 250000,
      "1.5": 300000,
      "2": 350000,
    },
  },

  // 3. Perbaikan Bocor & Mampet
  {
    id: "saluran-mampet",
    groupId: "bocor",
    label: "Saluran Pembuangan Mampet / Tetes Air",
    description: "Penanganan bocor indoor, kuras pipa lendir, flushing drainase.",
    warrantyDays: 60,
    kind: "per-pk",
    prices: {
      "0.5-1": 100000,
      "1.5": 100000,
      "2": 125000,
    },
  },
  {
    id: "las-pipa",
    groupId: "bocor",
    label: "Las Pipa Bocor + Vakum Jalur",
    description:
      "Deteksi titik bocor pipa tembaga, pengelasan perak, & uji tekan nitrogen.",
    warrantyDays: 60,
    kind: "per-pk",
    prices: {
      "0.5-1": 200000,
      "1.5": 250000,
      "2": 300000,
    },
  },

  // 4. Bongkar & Pasang Unit
  {
    id: "bongkar",
    groupId: "bongkar-pasang",
    label: "Bongkar AC (Pump Down)",
    description:
      "Penguncian freon ke dalam kompresor agar freon lama tidak terbuang.",
    warrantyDays: 30,
    kind: "per-pk",
    prices: {
      "0.5-1": 125000,
      "1.5": 150000,
      "2": 175000,
    },
  },
  {
    id: "pasang",
    groupId: "bongkar-pasang",
    label: "Pasang AC Baru / Relokasi",
    description:
      "Instalasi rapi indoor & outdoor, flaring nepel anti-bocor, pemvakuman pipa.",
    warrantyDays: 30,
    kind: "per-pk",
    prices: {
      "0.5-1": 275000,
      "1.5": 300000,
      "2": 375000,
    },
  },
  {
    id: "bongkar-pasang",
    groupId: "bongkar-pasang",
    label: "Bongkar & Pasang (Paket Lengkap)",
    description:
      "Pindah unit dalam satu lokasi dengan pengecekan fungsi menyeluruh.",
    warrantyDays: 30,
    kind: "per-pk",
    prices: {
      "0.5-1": 400000,
      "1.5": 450000,
      "2": 550000,
    },
  },

  // 5. Modul PCB & Kompresor Mesin
  {
    id: "modul-pcb",
    groupId: "komponen",
    label: "Servis Modul / PCB Elektronik",
    description:
      "Perbaikan sensor suhu, relay power, kapasitor fan, atau jalur board putus.",
    warrantyDays: 60,
    kind: "from",
    from: 250000,
    note: "sesuai hasil diagnosa",
  },
  {
    id: "kompresor",
    groupId: "komponen",
    label: "Penggantian / Servis Kompresor",
    description: "Penanganan kompresor macet, ganti oli kompresor, atau ganti unit kompresor.",
    warrantyDays: 60,
    kind: "from",
    from: 350000,
    note: "tergantung tipe unit",
  },
  {
    id: "troubleshooting",
    groupId: "komponen",
    label: "Troubleshooting & Perbaikan Ringan",
    description: "Pemeriksaan menyeluruh kendala error kode indikator unit mati tiba-tiba, berisik, atau rembesan tidak dingin.",
    warrantyDays: 60,
    needsConfirmation: true,
    kind: "from",
    from: 100000,
    note: "sesuai hasil diagnosa",
  },
  {
    id: "dinamo",
    groupId: "komponen",
    label: "Ganti Dinamo Motor Fan",
    description: "Penanganan fan indoor/outdoor putaran lambat, bearing aus berderit keras, atau dinamo korsleting.",
    warrantyDays: 60,
    needsConfirmation: true,
    kind: "from",
    from: 225000,
    note: "sesuai tipe unit",
  },
  {
    id: "sensor",
    groupId: "komponen",
    label: "Ganti Thermistor & Sensor",
    description: "Atasi AC sering mati-hidup sendiri akibat error sensor temperatur evaporator atau suhu pipa tidak akurat.",
    warrantyDays: 60,
    needsConfirmation: true,
    kind: "from",
    from: 95000,
    note: "sesuai tipe unit",
  },

  // 6. Material Instalasi
  {
    id: "pipa-per-meter",
    groupId: "material",
    label: "Pipa Tembaga + Kabel + Isolasi",
    description: "Instalasi pipa tembaga standar tebal 0.6mm–0.7mm, kabel control, duct tape pembungkus, dan bracket outdoor anti-karat.",
    warrantyDays: 30,
    needsConfirmation: true,
    kind: "per-unit",
    price: 85000,
    unit: "meter",
  },
];

export const HOME_PRICE_ROW_IDS = [
  "cuci-rutin",
  "tambah-freon",
  "saluran-mampet",
  "bongkar-pasang",
  "modul-pcb",
];

export const HARGA_PAGE_ROW_IDS: readonly string[] = [
  "cuci-rutin",
  "cuci-besar",
  "tambah-freon",
  "isi-r32",
  "isi-r410a",
  "isi-r22",
  "saluran-mampet",
  "las-pipa",
  "bongkar",
  "pasang",
  "bongkar-pasang",
  "modul-pcb",
  "kompresor",
];

export const WARRANTY_POLICY: WarrantyPolicy = {
  covered: [
    "Kerusakan berulang pada titik komponen atau pengerjaan yang sama.",
    "Rembesan atau kebocoran pada sambungan instalasi / nepel teknisi.",
    "AC kembali tidak dingin akibat berkurangnya freon dari pengerjaan kami.",
    "Teknisi datang kembali tanpa biaya kunjungan se-Batam.",
  ],
  notCovered: [
    "Kerusakan kelistrikan akibat lonjakan voltase PLN ekstrem.",
    "Unit dibongkar atau diservis oleh pihak ketiga setelah teknisi kami.",
    "Kerusakan fisik, gigitan tikus, atau bencana alam.",
    "Titik kerusakan baru yang terpisah dari komponen servis sebelumnya.",
  ],
  claimSteps: [
    {
      title: "Hubungi Admin via WA",
      body: "Kirimkan foto nota atau infokan nomor handphone saat order service.",
    },
    {
      title: "Jadwal Teknisi Prioritas",
      body: "Kami jadwalkan kunjungan prioritas hari yang sama atau maksimal H+1.",
    },
    {
      title: "Perbaikan Bebas Biaya",
      body: "Teknisi menuntaskan perbaikan ulang tanpa biaya kedatangan maupun suku cadang terkait.",
    },
  ],
};

export function getPriceRowById(id: string): PriceRow | undefined {
  return PRICE_ROWS.find((row) => row.id === id);
}

