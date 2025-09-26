// Data terpusat untuk Landing Page PT MNI
// Mudah diedit tanpa menyentuh struktur komponen.

export const issuesData = [
  {
    key: 'trust',
    title: 'Takut Tertipu',
    desc: 'Tampilkan legalitas & perjanjian tertulis yang jelas — semua biaya & tahapan transparan.',
    icon: 'ShieldCheck',
  },
  {
    key: 'process',
    title: 'Proses Rumit',
    desc: 'Kurikulum berjenjang + pendampingan step-by-step sampai berangkat.',
    icon: 'BookOpen',
  },
  {
    key: 'cost',
    title: 'Biaya Mahal',
    desc: 'Skema pembayaran bertahap & opsi bantuan sesuai kebijakan yang berlaku.',
    icon: 'HeartHandshake',
  },
  {
    key: 'muslim',
    title: 'Kehidupan Muslim',
    desc: 'Komunitas Muslim, panduan ibadah & halal lifestyle di Jepang.',
    icon: 'Users',
  },
];

export const uspData = [
  'Legalitas jelas & transparan',
  'Kurikulum bahasa & etos kerja standar industri',
  'Pembinaan spiritual & komunitas Muslim',
  'Mentor/alumni sebagai pendamping karier',
  'Timeline terukur hingga keberangkatan',
  'Jaringan penempatan di berbagai prefektur',
];

export const programData = [
  {
    key: 'kaigo',
    title: 'Kaigo (Caregiver) — Unggulan',
    tag: 'Banyak Demand',
    highlight: true,
    icon: 'HeartHandshake',
    bullets: [
      'Fokus bahasa Jepang + keterampilan caregiving & budaya kerja.',
      'Simulasi kerja, SOP fasilitas lansia, etika & komunikasi.',
      'Pendampingan sertifikasi sesuai skema penempatan.',
    ],
    meta: [
      { icon: 'Clock', label: '4–8 bulan' },
      { icon: 'Users', label: 'Min. SMA/SMK' },
    ],
    cta: 'Tanya Detail Kaigo',
  },
  {
    key: 'magang',
    title: 'Magang Jepang (Internship)',
    icon: 'GraduationCap',
    bullets: [
      'Pelatihan bahasa & teknis dasar sesuai bidang.',
      'Pendampingan dokumen & interview.',
    ],
    meta: [
      { icon: 'Clock', label: '3–6 bulan' },
      { icon: 'Factory', label: 'Beragam sektor' },
    ],
    cta: 'Tanya Program Magang',
  },
  {
    key: 'ssw',
    title: 'SSW (Specified Skilled Worker)',
    icon: 'ChefHat',
    bullets: [
      'Persiapan bahasa + materi sesuai sektor (mis. food service/manufacturing).',
      'Simulasi ujian & pendampingan dokumen.',
    ],
    meta: [
      { icon: 'Clock', label: '4–8 bulan' },
      { icon: 'Users', label: 'Lulusan SMA/SMK/D3/S1' },
    ],
    cta: 'Tanya Program SSW',
  },
];

export const testimonials = [1,2,3]; // ganti dengan objek real ketika tersedia

export const processSteps = [
  { key: 'consult', title: 'Konsultasi Awal', icon: 'MessageCircle' },
  { key: 'train', title: 'Daftar & Pelatihan', icon: 'BookOpen' },
  { key: 'docs', title: 'Dokumen & Interview', icon: 'Handshake' },
  { key: 'placement', title: 'Penempatan', icon: 'ShieldCheck' },
  { key: 'depart', title: 'Keberangkatan', icon: 'PlaneTakeoff' },
];

export const faqData = [
  {
    q: 'Apa saja syarat umum untuk mendaftar?',
    a: 'Minimal lulusan SMA/SMK/sederajat, sehat jasmani rohani, berkomitmen mengikuti pelatihan bahasa & kedisiplinan kerja.',
  },
  {
    q: 'Berapa lama pelatihan hingga keberangkatan?',
    a: 'Rata-rata 4–8 bulan tergantung program & progres bahasa peserta.',
  },
  {
    q: 'Bagaimana dengan ibadah & makanan halal di Jepang?',
    a: 'Kami menyediakan pembinaan keislaman, panduan shalat di tempat kerja, serta informasi akses makanan halal & komunitas Muslim setempat.',
  },
  {
    q: 'Apakah ada bantuan biaya?',
    a: 'Tersedia opsi bertahap/skematik sesuai kebijakan yang berlaku. Konsultasikan situasi Anda kepada admin.',
  },
  {
    q: 'Apakah ada asrama?',
    a: 'Fasilitas dapat berbeda per lokasi. Detail akomodasi diinformasikan saat penempatan.',
  },
  {
    q: 'Bagaimana cara mendaftar?',
    a: 'Klik tombol ‘Konsultasi Gratis’ untuk diarahkan ke WhatsApp admin. Isi data singkat: Nama & Kota Asal.',
  },
];
