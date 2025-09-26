import React from 'react';

const programs = [
  { name: 'Desain Grafis', level: 'Beginner – Advanced', desc: 'Adobe Suite, branding & portfolio.' },
  { name: 'Pemrograman Web', level: 'Fullstack', desc: 'HTML, CSS, JS, React dasar sampai deployment.' },
  { name: 'Digital Marketing', level: 'Fundamental', desc: 'SEO, Ads, Content, Analytics.' },
  { name: 'Administrasi Perkantoran', level: 'Profesional', desc: 'Dokumentasi, spreadsheet, korespondensi.' },
  { name: 'Akuntansi Dasar', level: 'Fundamental', desc: 'Jurnal umum, laporan keuangan sederhana.' },
  { name: 'Bahasa Jepang', level: 'JLPT N5-N3', desc: 'Percakapan kerja & budaya industri.' },
];

export default function Programs() {
  return (
    <section className="section" id="program">
      <div className="container">
        <div className="mb-10 text-center max-w-2xl mx-auto space-y-4">
          <h2>Program Pelatihan Unggulan</h2>
          <p className="text-slate-600">Pilih jalur pelatihan sesuai minat & kebutuhan karir Anda. Setiap program disusun modular dan aplikatif.</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {programs.map(p => (
            <div key={p.name} className="group border border-slate-200 rounded-lg p-5 bg-white hover:shadow-md transition flex flex-col">
              <div className="flex-1 space-y-2">
                <h3 className="text-primary-700 text-lg font-semibold group-hover:underline">{p.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-primary-600">{p.level}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-4">
                <a href="#pendaftaran" className="text-sm font-medium text-primary-700 hover:underline">Daftar Sekarang →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
