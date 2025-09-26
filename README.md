# Web-LPK

Proyek website LPK (Lembaga Pelatihan Kerja) menggunakan React + Vite + Tailwind CSS.

## Struktur

```
src/
  components/   -> Komponen modular (Navbar, Hero, About, dll.)
  App.jsx        -> Susunan halaman utama
  main.jsx       -> Entry React
  index.css      -> Import Tailwind dan utility custom
tailwind.config.js
vite.config.js
```

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
