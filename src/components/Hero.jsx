import React from 'react';

export default function Hero() {
  return (
    <section className="section pt-24" id="beranda">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-primary-700">Tingkatkan Keterampilan, Raih Karir Impian</h1>
          <p className="text-slate-600 text-lg leading-relaxed">LPK kami menyediakan pelatihan kerja berbasis kebutuhan industri dengan instruktur berpengalaman dan kurikulum terupdate.</p>
          <div className="flex gap-4">
            <a href="#pendaftaran" className="btn-primary">Mulai Daftar</a>
            <a href="#program" className="inline-flex items-center font-medium text-primary-700 hover:underline">Lihat Program →</a>
          </div>
          <ul className="grid grid-cols-3 gap-4 text-center text-sm">
            <li className="p-4 rounded-lg bg-primary-50">
              <p className="font-bold text-xl text-primary-700">25+</p>
              <p>Program</p>
            </li>
            <li className="p-4 rounded-lg bg-primary-50">
              <p className="font-bold text-xl text-primary-700">1200+</p>
              <p>Alumni</p>
            </li>
            <li className="p-4 rounded-lg bg-primary-50">
              <p className="font-bold text-xl text-primary-700">95%</p>
              <p>Penempatan</p>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary-200 via-primary-100 to-primary-300 flex items-center justify-center text-primary-800 font-semibold text-xl shadow-inner">
            Media / Gambar Hero
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow rounded-lg p-4 hidden md:block">
            <p className="text-sm font-medium">Kelas Praktik Aktif</p>
            <p className="text-xs text-slate-500">Instruktur tersertifikasi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
