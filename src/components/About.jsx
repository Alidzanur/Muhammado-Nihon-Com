import React from 'react';

export default function About() {
  return (
    <section className="section bg-slate-50" id="tentang">
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5">
          <h2>Kenapa Memilih LPK Kami?</h2>
          <p className="text-slate-600 leading-relaxed">Kami berkomitmen menyiapkan tenaga kerja siap pakai melalui metode pembelajaran interaktif, fasilitas praktik lengkap, dan jejaring industri luas. Kurikulum kami disusun bersama praktisi agar relevan dengan kebutuhan perusahaan terkini.</p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3"><span className="text-primary-600 font-bold">✓</span> Instrukur berpengalaman & tersertifikasi</li>
            <li className="flex gap-3"><span className="text-primary-600 font-bold">✓</span> Kurikulum adaptif sesuai industri</li>
            <li className="flex gap-3"><span className="text-primary-600 font-bold">✓</span> Fasilitas praktik lengkap</li>
            <li className="flex gap-3"><span className="text-primary-600 font-bold">✓</span> Pendampingan karir & penyaluran kerja</li>
          </ul>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: 'Fasilitas Modern', desc: 'Lab komputer, workshop, peralatan praktik.' },
            { title: 'Jejaring Industri', desc: 'Kerjasama dengan berbagai perusahaan.' },
            { title: 'Sertifikasi', desc: 'Membantu proses uji kompetensi resmi.' },
            { title: 'Pendampingan', desc: 'Career coaching & simulasi interview.' },
          ].map(card => (
            <div key={card.title} className="p-5 rounded-lg bg-white shadow-sm border border-slate-200">
              <h3 className="text-primary-700 mb-1 text-base font-semibold">{card.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
