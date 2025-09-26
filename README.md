# Web-LPK

Proyek website LPK (Lembaga Pelatihan Kerja) menggunakan React + Vite + Tailwind CSS.

## Struktur Utama

```
src/
	components/
		landing/                # Komponen landing page modular (Header, Hero, Problems, dst.)
		animations/             # Wrapper animasi (SectionFadeIn, StaggerContainer, ScrollProgressBar)
		ui/                     # Komponen UI dasar (Button, Card, Accordion)
	data/
		landingData.js          # Sumber data terpusat (issues, usp, program, faq, dsb.)
	App.jsx                   # Merender LandingPageMNI
	main.jsx                  # Entry React
	index.css                 # Tailwind base & utilitas
index.html                  # SEO meta + root
tailwind.config.js
vite.config.js
```

Arsitektur memisahkan data statis dari presentasi agar editing konten cukup di `landingData.js` tanpa menyentuh layout/animasi.

### Alur Landing Page
`LandingPageMNI.jsx` -> memuat:
- `<ScrollProgressBar />` (indikator progres scroll)
- Section berurutan: Header, Hero (dengan parallax), Problems, USP, Programs, Testimonials, ProcessSteps, FAQ, FinalCTA, Footer.
- Setiap section dibungkus `SectionFadeIn` + list item di-stagger dengan `StaggerContainer`.

### Animasi
- `SectionFadeIn`: Fade + slide kecil saat masuk viewport (hanya sekali)
- `StaggerContainer` + `childVariants`: Delay berurutan item grid/list
- `Hero`: Parallax ringan gambar (framer-motion `useScroll` + `useTransform`)
- `ScrollProgressBar`: Garis progres di top fixed

### Cara Ubah Konten
Edit teks/list di: `src/data/landingData.js`.
Contoh: tambah FAQ baru -> push objek ke array `faqData`.

### Ganti Nomor WhatsApp
`src/components/landing/constants.js` -> ubah `WHATSAPP_NUMBER`.

### Tambah Section Baru
1. Buat file komponen di `landing/YourSection.jsx`
2. Gunakan pola:
```jsx
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
export default function YourSection(){
	return <SectionFadeIn as="section">{/* konten */}</SectionFadeIn>;
}
```
3. Import & sisipkan di `LandingPageMNI.jsx`.

### Penghapusan File Monolit
File awal `pt_mni_landing_page_react_tailwind.jsx` sudah dipecah & dihapus agar tidak duplikasi kode.

## Fitur SEO & Aksesibilitas
- Meta Open Graph, Twitter Card, JSON-LD (schema) di `index.html`
- Lazy load image (atribut `loading="lazy"`)
- Alt text deskriptif placeholder (ganti dengan foto asli)
- Struktur heading konsisten.

## Rencana Peningkatan (Opsional)
- Prefer-reduced-motion toggle
- Dark mode (class `dark` + Tailwind config)
- Sitemap & robots.txt
- Real testimonial object dengan video embed
- Tracking analytics (GA / Plausible)


## Menjalankan Lokal

1. Instal dependency:
	```bash
	npm install
	```
2. Jalankan dev server:
	```bash
	npm run dev
	```
3. Buka URL yang muncul (biasanya `http://localhost:5173`).

## Build Produksi
```bash
npm run build
npm run preview
```

## Cara Upload (Git) / Commit Perubahan

Pastikan Anda sudah login git & menambah remote (sudah karena repo ini ada di GitHub).

```bash
git add .
git commit -m "feat: tambah kerangka React Tailwind"
git push origin main
```

Jika ingin kerja di branch baru:
```bash
git checkout -b fitur/program-baru
# edit file
git add .
git commit -m "feat: tambah section program baru"
git push -u origin fitur/program-baru
```

## Memindahkan File .jsx Anda

1. Salin file .jsx yang sudah Anda buat ke folder `src/components/` atau sesuaikan struktur.
2. Import ke `App.jsx` atau halaman terkait.
3. Jalankan `npm run dev` untuk cek.

## Penyesuaian Lanjutan

- Ganti data dummy (alamat, nomor WA, dsb) di komponen `Contact.jsx` & `Footer.jsx`.
- Ganti kotak hero / maps dengan gambar atau embed iframe Google Maps.
- Tambahkan integrasi backend (misal kirim form pendaftaran) dengan mengganti simulasi `setTimeout` di `Registration.jsx` ke `fetch()` API.

## Lisensi

Silakan gunakan & modifikasi bebas sesuai kebutuhan internal LPK Anda.

LPK
