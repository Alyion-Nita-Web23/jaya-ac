import type { PkSize, PriceGroupId, ServiceCategory } from "./types";

export const EN_CATEGORIES: Record<ServiceCategory | "semua", string> = {
  semua: "All Services",
  perawatan: "Maintenance",
  perbaikan: "Repair",
  instalasi: "Installation",
};

export const EN_PK_OPTIONS: Record<PkSize, { label: string; room: string }> = {
  "0.5-1": { label: "0.5 – 1 HP", room: "Bedroom" },
  "1.5": { label: "1.5 HP", room: "Living Room" },
  "2": { label: "2 HP", room: "Office / Shop" },
};

export const EN_PRICE_GROUPS: Record<PriceGroupId, string> = {
  perawatan: "Cleaning & Routine Maintenance",
  freon: "Refrigerant Refill & Top-Up (R32 / R410a / R22)",
  bocor: "Water Leak & Pipe Repair",
  "bongkar-pasang": "AC Uninstall & Installation",
  komponen: "PCB Module & Compressor Service",
  material: "Installation Materials",
};

export interface EnPriceRowCopy {
  label: string;
  description: string;
  note?: string;
  unit?: string;
}

export const EN_PRICE_ROWS: Record<string, EnPriceRowCopy> = {
  "cuci-rutin": {
    label: "Routine AC Cleaning",
    description:
      "Thorough cleaning of indoor evaporator, dust filters, and outdoor condenser.",
  },
  "cuci-besar": {
    label: "Deep Cleaning / Overhaul",
    description:
      "Full indoor unit dismantling to remove heavy grime, coil biofilm, and drain slime.",
  },
  flushing: {
    label: "Nitrogen Pipe Flushing",
    description:
      "Flushing stale compressor oil and carbon buildup inside copper pipes using R-11 & nitrogen.",
  },
  fogging: {
    label: "Anti-Bacterial Fogging",
    description:
      "Post-cleaning mist treatment to help reduce odor-causing bacteria and musty smells.",
  },
  "tambah-freon": {
    label: "Refrigerant Top-Up R32 / R410a",
    description:
      "Topping up eco-friendly refrigerant pressure back to optimal compressor PSI.",
  },
  "isi-r32": {
    label: "Full R32 Refill (Empty System)",
    description:
      "Includes circuit vacuuming to remove air and moisture before full refill.",
  },
  "isi-r410a": {
    label: "Full R410a Refill",
    description:
      "Pure inverter-grade refrigerant refill with precision vacuuming.",
  },
  "isi-r22": {
    label: "Full R22 Refill",
    description: "For conventional / older non-inverter AC models.",
  },
  "saluran-mampet": {
    label: "Clogged Drain / Water Dripping Repair",
    description:
      "Fixes indoor water leaks, clears slime buildup, and flushes drain lines.",
  },
  "las-pipa": {
    label: "Copper Pipe Brazing & Vacuum",
    description:
      "Leak detection on copper tubing, silver brazing repair, and nitrogen pressure test.",
  },
  bongkar: {
    label: "AC Uninstall (Pump Down)",
    description:
      "Locks existing refrigerant cleanly into the compressor without gas loss.",
  },
  pasang: {
    label: "New AC Install / Mounting",
    description:
      "Neat indoor & outdoor setup, leak-free pipe flaring, and line vacuuming.",
  },
  "bongkar-pasang": {
    label: "Uninstall & Reinstall (Full Package)",
    description:
      "Full AC relocation within one property with complete performance inspection.",
  },
  "modul-pcb": {
    label: "PCB Module / Electronics Repair",
    description:
      "Repairs temperature sensors, power relays, fan capacitors, or damaged circuit traces.",
    note: "based on diagnosis",
  },
  kompresor: {
    label: "Compressor Service / Replacement",
    description:
      "Handles seized compressors, compressor oil change, or full compressor replacement.",
    note: "depends on unit model",
  },
  troubleshooting: {
    label: "Troubleshooting & Minor Repair",
    description:
      "Full diagnostics for blinking error codes, sudden shutdowns, loud noise, or poor cooling.",
    note: "based on diagnosis",
  },
  dinamo: {
    label: "Fan Motor Replacement",
    description:
      "Fixes slow indoor/outdoor fan speed, worn noisy bearings, or shorted motors.",
    note: "depends on unit model",
  },
  sensor: {
    label: "Thermistor & Temperature Sensor",
    description:
      "Resolves frequent auto shut-off issues caused by faulty evaporator or pipe sensors.",
    note: "depends on unit model",
  },
  "pipa-per-meter": {
    label: "Copper Pipe + Control Cable + Insulation",
    description:
      "Standard 0.6–0.7mm copper pipe installation, control cable, wrapping tape, and rust-resistant bracket.",
    unit: "meter",
  },
};

export interface EnServiceCopy {
  name: string;
  title: string;
  cardDescription: string;
  lead: string;
  steps: { title: string; body: string }[];
  tierFeatures?: Record<PkSize, string[]>;
  promo?: { title: string; body: string; badge: string };
  cardTag?: string;
}

export const EN_SERVICES: Record<string, EnServiceCopy> = {
  "cuci-ac": {
    name: "AC Cleaning",
    title: "Routine AC Cleaning & Deep Wash Batam",
    cardDescription:
      "Thorough cleaning of evaporator, filters, blower, and outdoor condenser for crisp, fresh cooling.",
    lead: "Hygienic indoor & outdoor unit cleaning backed by a 30-day cooling warranty. Experienced technicians arriving on time anywhere in Batam.",
    steps: [
      {
        title: "Initial Check",
        body: "Measures starting air temperature, compressor amperage, and electrical safety.",
      },
      {
        title: "Evaporator Wash",
        body: "Fits waterproof wash cover, removes casing, and jet-washes indoor coils.",
      },
      {
        title: "Drain & Outdoor Flush",
        body: "Clears drain pipes from algae buildup and washes the outdoor condenser.",
      },
      {
        title: "QC Test & Warranty",
        body: "Checks final digital airflow temperature, tidies workspace, and activates 30-day warranty.",
      },
    ],
    tierFeatures: {
      "0.5-1": [
        "Indoor & Outdoor Unit",
        "Freon Pressure & Amp Check",
        "30-Day Cooling Warranty",
        "Estimated time ±45 mins",
      ],
      "1.5": [
        "Indoor & Outdoor Unit",
        "Freon Pressure & Amp Check",
        "30-Day Cooling Warranty",
        "Estimated time ±50 mins",
      ],
      "2": [
        "Indoor & Outdoor Unit",
        "Freon Pressure & Amp Check",
        "30-Day Cooling Warranty",
        "Deep wash ±60 mins",
      ],
    },
    promo: {
      title: "Multi-Unit Discount",
      body: "Save Rp10,000 per unit for 3 or more units serviced at the same address.",
      badge: "Save up to Rp50,000+",
    },
  },
  "isi-freon": {
    name: "Freon Refill & Top-Up",
    title: "Freon Refill & Top-Up R32, R410A, R22 Batam",
    cardDescription:
      "Pressure testing and pure R32, R410A, R22 refrigerant refill to factory specs.",
    lead: "Precision refrigerant charging to factory pressure specs so your AC cools sharply again and your compressor stays healthy.",
    steps: [
      {
        title: "PSI Pressure Check",
        body: "Measures suction line pressure with precision manifold gauges.",
      },
      {
        title: "Leak Inspection",
        body: "Checks flare nuts and pipe joints to verify there are no micro-leaks.",
      },
      {
        title: "Pure Freon Refill",
        body: "Charges factory-grade refrigerant to the unit's rated PSI or weight spec.",
      },
      {
        title: "Amp & Cooling Test",
        body: "Verifies running amperage and steady cold airflow before activating warranty.",
      },
    ],
    tierFeatures: {
      "0.5-1": [
        "R32 / R410a Refrigerant Top-Up",
        "PSI Pressure Inspection",
        "30-Day Warranty",
        "Fast & neat service",
      ],
      "1.5": [
        "R32 / R410a Refrigerant Top-Up",
        "PSI Pressure Inspection",
        "30-Day Warranty",
        "Fast & neat service",
      ],
      "2": [
        "R32 / R410a Refrigerant Top-Up",
        "PSI Pressure Inspection",
        "30-Day Warranty",
        "Comprehensive inspection",
      ],
    },
    cardTag: "R32 / R410A / R22",
  },
  "cuci-besar": {
    name: "Deep Overhaul Wash",
    title: "Full Indoor Overhaul & Deep Cleaning Batam",
    cardDescription:
      "Complete indoor dismantling to clear stubborn dirt, rear coil mold, and persistent odors.",
    lead: "Full indoor unit removal to deep-clean grease buildup and slime behind the evaporator coils and drain pan.",
    steps: [
      {
        title: "Freon Pump Down",
        body: "Safely recovers refrigerant into the outdoor unit with zero gas loss.",
      },
      {
        title: "Indoor Dismantling",
        body: "Separates the evaporator coil, rear drain tray, and blower drum cleanly.",
      },
      {
        title: "Deep Coil Wash",
        body: "Mild chemical wash through every fin to clear trapped mold and black slime.",
      },
      {
        title: "Reinstall & Vacuum",
        body: "Reassembles the unit, vacuums pipe lines, and tests odor-free cold airflow.",
      },
    ],
    tierFeatures: {
      "0.5-1": [
        "Full Indoor Unit Removal",
        "Drain Pan & Blower Cleaning",
        "30-Day Warranty",
        "Odor & Slime-Free Result",
      ],
      "1.5": [
        "Full Indoor Unit Removal",
        "Drain Pan & Blower Cleaning",
        "30-Day Warranty",
        "Odor & Slime-Free Result",
      ],
      "2": [
        "Full Indoor Unit Removal",
        "Drain Pan & Blower Cleaning",
        "30-Day Warranty",
        "Odor & Slime-Free Result",
      ],
    },
    cardTag: "Full Indoor Wash",
  },
  "flushing-nitrogen": {
    name: "Nitrogen Pipe Flushing",
    title: "Copper Line Flushing with Nitrogen Batam",
    cardDescription:
      "Clears burnt compressor oil and carbon debris from copper lines using R-11 and nitrogen.",
    lead: "Flushes old oil residue and blockages inside copper piping before installing a new compressor or fresh refrigerant.",
    steps: [
      {
        title: "Line Isolation",
        body: "Disconnects copper piping from both the compressor and indoor coil.",
      },
      {
        title: "R-11 Cleaner Injection",
        body: "Introduces specialized solvent to dissolve sludge and carbon deposits.",
      },
      {
        title: "High-Pressure Push",
        body: "Flushes lines thoroughly with pure nitrogen gas until debris exits cleanly.",
      },
      {
        title: "Dryness Check",
        body: "Verifies clear discharge and completely dry copper lines ready for sealing.",
      },
    ],
  },
  "fogging-sterilisasi": {
    name: "Anti-Bacterial Fogging",
    title: "AC Fogging & Anti-Bacterial Mist Batam",
    cardDescription:
      "Post-wash mist treatment to help reduce odor-causing bacteria, mold spores, and stuffy smells.",
    lead: "Non-corrosive antibacterial mist treatment designed to freshen bedroom and office airflow after thorough cleaning.",
    steps: [
      {
        title: "Pre-Clean Check",
        body: "Ensures dust filters and evaporator coils are thoroughly clean beforehand.",
      },
      {
        title: "Room Preparation",
        body: "Closes room vents briefly so mist circulation concentrates evenly.",
      },
      {
        title: "Mist Application",
        body: "Applies safe antibacterial mist through the running AC air intake.",
      },
      {
        title: "Aeration & Finish",
        body: "Circulates clean, fresh airflow free from stale or musty odors.",
      },
    ],
  },
  troubleshooting: {
    name: "Repair & Troubleshooting",
    title: "AC Diagnostics & Repair Service Batam",
    cardDescription:
      "Solves water leaks, power failure, noisy operation, blinking error codes, or weak cooling.",
    lead: "In-depth diagnostics to pinpoint dead units, strange noises, blinking error lights, or warm airflow before any repair.",
    steps: [
      {
        title: "Error Code Reading",
        body: "Checks blinking LED indicator patterns and digital remote diagnostics.",
      },
      {
        title: "Component Inspection",
        body: "Tests input voltage, thermistors, capacitors, and electrical relays.",
      },
      {
        title: "Upfront Quote Repair",
        body: "Explains the exact fault and confirms repair pricing clearly before proceeding.",
      },
      {
        title: "Full Load Test",
        body: "Runs the unit at full cooling load to confirm steady compressor operation.",
      },
    ],
  },
  "modul-pcb": {
    name: "Capacitor & PCB Repair",
    title: "AC PCB Board & Capacitor Repair Batam",
    cardDescription:
      "Replaces faulty starting/fan capacitors and repairs main electronic PCB control boards.",
    lead: "Fixes shorted PCB boards, unresponsive receivers, or swollen capacitors using matched replacement parts.",
    steps: [
      {
        title: "Board Inspection",
        body: "Examines burnt traces, stuck power relays, and controller stability.",
      },
      {
        title: "Capacitance Testing",
        body: "Measures starting capacitor microfarads (uF) using a calibrated meter.",
      },
      {
        title: "Component Soldering",
        body: "Replaces damaged parts matching rated voltage and capacity specs.",
      },
      {
        title: "Power Protection Test",
        body: "Confirms accurate sensor response and stable operation without overheating.",
      },
    ],
  },
  "bocor-pipa-freon": {
    name: "Leak & Drain Repair",
    title: "Water Leak & Freon Pipe Repair Batam",
    cardDescription:
      "Pinpoints freon leaks, performs silver pipe brazing, and stops indoor water dripping.",
    lead: "Lasting fixes for cracked drain pans, misaligned indoor brackets, clogged lines, and pinhole copper leaks.",
    steps: [
      {
        title: "Bubble Pressure Test",
        body: "Locates oil/gas seepage along flare fittings and copper pipe bends.",
      },
      {
        title: "Silver Brazing & Pipe Fix",
        body: "Seals copper pinholes cleanly with silver brazing rods and oxygen torch.",
      },
      {
        title: "Drain Line Flushing",
        body: "Clears slime blockages inside spiral drain hoses so condensate flows smoothly.",
      },
      {
        title: "Vacuum & Refill",
        body: "Deep-vacuums lines to -30 inHg and recharges refrigerant cleanly.",
      },
    ],
    tierFeatures: {
      "0.5-1": [
        "Drain Line Flushing",
        "Indoor Leveling Adjustment",
        "60-Day Leak-Free Warranty",
        "Experienced Technicians",
      ],
      "1.5": [
        "Drain Line Flushing",
        "Indoor Leveling Adjustment",
        "60-Day Leak-Free Warranty",
        "Experienced Technicians",
      ],
      "2": [
        "Drain Line Flushing",
        "Indoor Leveling Adjustment",
        "60-Day Leak-Free Warranty",
        "Experienced Technicians",
      ],
    },
    cardTag: "Leak-Free Warranty",
  },
  "ganti-kompresor": {
    name: "Compressor Replacement",
    title: "AC Compressor Service & Replacement Batam",
    cardDescription:
      "Solves seized, burnt-out, or weak compressors, including oil flush, vacuum, and fresh freon.",
    lead: "Expert handling for mechanically jammed compressors, high amp trips, or open motor windings.",
    steps: [
      {
        title: "Winding Resistance Test",
        body: "Tests Common, Run, Start (CRS) resistance and checks for ground shorts.",
      },
      {
        title: "Old Unit Removal",
        body: "Safely unbrazes suction/discharge joints and removes the failed compressor.",
      },
      {
        title: "Flush & Brazing",
        body: "Flushes burnt oil from the condenser before brazing in the replacement unit.",
      },
      {
        title: "Deep Vacuum & Test",
        body: "Performs full system vacuum, weighs in pure refrigerant, and checks running amps.",
      },
    ],
  },
  "dinamo-fan": {
    name: "Fan Motor Replacement",
    title: "Indoor & Outdoor AC Fan Motor Replacement Batam",
    cardDescription:
      "Fixes slow fan rotation, noisy worn bearings, or burnt indoor/outdoor fan motors.",
    lead: "Replaces worn blower or outdoor condenser fan motors to restore strong, quiet airflow.",
    steps: [
      {
        title: "Shaft & Bearing Check",
        body: "Checks for wobbly or seized fan shafts caused by rusted bearings.",
      },
      {
        title: "Coil Resistance Test",
        body: "Measures motor copper windings with a multimeter to verify open/short faults.",
      },
      {
        title: "Motor & Balance Fit",
        body: "Installs the new motor and balances the fan blade for vibration-free spin.",
      },
      {
        title: "Airflow Speed Test",
        body: "Confirms smooth RPM across low, medium, and high remote settings.",
      },
    ],
  },
  "thermistor-sensor": {
    name: "Thermistor & Sensor",
    title: "AC Temperature Sensor & Thermistor Repair Batam",
    cardDescription:
      "Fixes short-cycling AC units caused by faulty evaporator or pipe temperature sensors.",
    lead: "Replaces damaged tube and room thermistors to restore accurate automatic temperature cutoff.",
    steps: [
      {
        title: "Kilo-Ohm Resistance Test",
        body: "Tests thermistor resistance at both chilled and ambient temperatures.",
      },
      {
        title: "Sensor Removal",
        body: "Disconnects corroded or broken sensor leads from the indoor control board.",
      },
      {
        title: "Matched Replacement",
        body: "Fits a new sensor matching your AC brand's standard ohm rating.",
      },
      {
        title: "Auto Cut-Off Calibration",
        body: "Verifies compressor cycling right at your target remote temperature.",
      },
    ],
  },
  "bongkar-pasang": {
    name: "Uninstall & Install",
    title: "Split AC Uninstall & Relocation Service Batam",
    cardDescription:
      "New unit installation, room-to-room transfer, or full relocation using safe pump-down.",
    lead: "Clean split AC removal, fresh installation, or relocation with neat pipe routing and leak-tested fittings.",
    steps: [
      {
        title: "Safe Pump Down",
        body: "Recovers all refrigerant cleanly into the outdoor unit before disconnecting.",
      },
      {
        title: "Neat Removal",
        body: "Detaches indoor wall plates and outdoor brackets cleanly without wall damage.",
      },
      {
        title: "Spirit-Level Mounting",
        body: "Installs brackets dead level with proper drainage slope to prevent leaks.",
      },
      {
        title: "Line Vacuum & Cool Test",
        body: "Vacuums refrigerant lines before opening valves, then tests peak cooling.",
      },
    ],
    tierFeatures: {
      "0.5-1": [
        "Full Uninstall & Reinstall",
        "Pipe Line Vacuuming",
        "30-Day Install Warranty",
        "Neat Pipe & Cable Routing",
      ],
      "1.5": [
        "Full Uninstall & Reinstall",
        "Pipe Line Vacuuming",
        "30-Day Install Warranty",
        "Neat Pipe & Cable Routing",
      ],
      "2": [
        "Full Uninstall & Reinstall",
        "Pipe Line Vacuuming",
        "30-Day Install Warranty",
        "Neat Pipe & Cable Routing",
      ],
    },
  },
  "pipa-bracket": {
    name: "Copper Pipe & Bracket",
    title: "AC Copper Piping & Outdoor Bracket Install Batam",
    cardDescription:
      "Standard 0.6–0.7mm copper pipes, control wiring, foam insulation, and rust-resistant brackets.",
    lead: "Durable anti-corrosion installation materials connecting your indoor and outdoor units for Batam's coastal climate.",
    steps: [
      {
        title: "Route Measurement",
        body: "Plans the shortest, neatest path between indoor wall placement and outdoor mount.",
      },
      {
        title: "Precision Flaring & Bending",
        body: "Flares copper ends crack-free and shapes bends cleanly with a pipe bender.",
      },
      {
        title: "Insulation & Wrapping",
        body: "Wraps lines and control cables in thick foam insulation and UV duct tape.",
      },
      {
        title: "Heavy-Duty Bracket Mount",
        body: "Secures rust-resistant outdoor brackets firmly using wall dynabolts.",
      },
    ],
  },
  "kontrak-komersial": {
    name: "Commercial Maintenance",
    title: "Commercial & Office AC Maintenance Contracts Batam",
    cardDescription:
      "Scheduled maintenance for offices, cafes, shophouses, cassette & ducted units with official invoices.",
    lead: "Planned preventive servicing for multi-unit offices, restaurants, shophouses, and commercial properties across Batam.",
    steps: [
      {
        title: "Site Survey & Asset Log",
        body: "Catalogs unit capacity, type (split/cassette), and current mechanical condition.",
      },
      {
        title: "Scheduled Maintenance Plan",
        body: "Sets monthly or quarterly visit windows that avoid disrupting daily business.",
      },
      {
        title: "Service & Tech Reports",
        body: "Full cleaning and compressor amp checks accompanied by unit checklists.",
      },
      {
        title: "Invoicing & SLA Support",
        body: "Official business invoicing, priority dispatch, and service-level warranty.",
      },
    ],
    cardTag: "Consultation",
  },
};

export const EN_WARRANTY_POLICY = {
  covered: [
    "Recurring faults on the exact component or service point we worked on.",
    "Seepage or leaks at pipe joints or flare fittings installed by our team.",
    "AC losing coolness due to refrigerant loss from our work.",
    "Free return technician visit anywhere on Batam Island.",
  ],
  notCovered: [
    "Electrical damage caused by extreme PLN power grid voltage surges.",
    "Units opened, modified, or serviced by a third party after our visit.",
    "Physical impact damage, rodent bites, or natural disasters.",
    "New faults unrelated to the previously serviced component.",
  ],
  claimSteps: [
    {
      title: "Message Admin on WA",
      body: "Send a photo of your receipt or share the phone number used when ordering.",
    },
    {
      title: "Priority Dispatch",
      body: "We schedule a priority revisit on the same day or at latest next day (H+1).",
    },
    {
      title: "Zero-Fee Rework",
      body: "Our technician fixes the issue with zero call-out fee or related part charges.",
    },
  ],
};

export const EN_HOME_FEATURES = [
  {
    icon: "Zap",
    title: "Fast Response",
    description: "Same-day dispatch available",
  },
  {
    icon: "ShieldCheck",
    title: "Experienced Techs",
    description: "Skilled & reliable handling",
  },
  {
    icon: "ThumbsUp",
    title: "Clear Pricing",
    description: "No hidden charges",
  },
  {
    icon: "Headphones",
    title: "Friendly Service",
    description: "Your comfort comes first",
  },
];

export const EN_CONTACT_FAQ = [
  {
    q: "Can technicians visit on the same day?",
    a: "Yes, as long as there is an open slot that day. We operate daily from 08.00 to 20.00 WIB, including weekends and public holidays.",
  },
  {
    q: "Is there an inspection / call-out fee?",
    a: "There is a Rp50.000 inspection fee per visit, which is waived if you go ahead with the service or repair on the spot.",
  },
  {
    q: "Do I need to pay a deposit (DP) when booking?",
    a: "No deposit is needed. You pay only after the job is finished and your AC is checked, via cash, bank transfer, or QRIS.",
  },
  {
    q: "How do I claim my service warranty?",
    a: "Every service includes a 30–60 day warranty. Just send a photo of your receipt or your booking phone number to our WhatsApp admin so we can schedule a return visit.",
  },
];
