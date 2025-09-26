import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-sm mt-12">
      <div className="container py-10 grid md:grid-cols-4 gap-10">
        <div className="space-y-3">
          <h3 className="text-white text-base font-semibold">LPK</h3>
          <p className="text-slate-400 text-xs leading-relaxed">Membangun SDM kompeten melalui pelatihan kerja berbasis industri.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Navigasi</h4>
          <ul className="space-y-2">
            <li><a href="#tentang" className="hover:text-white">Tentang</a></li>
            <li><a href="#program" className="hover:text-white">Program</a></li>
            <li><a href="#pendaftaran" className="hover:text-white">Pendaftaran</a></li>
            <li><a href="#kontak" className="hover:text-white">Kontak</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Program</h4>
          <ul className="space-y-2">
            <li>Desain Grafis</li>
            <li>Pemrograman Web</li>
            <li>Digital Marketing</li>
            <li>Administrasi</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-white font-medium mb-3 text-sm">Newsletter</h4>
          <form className="space-y-3" onSubmit={e => { e.preventDefault(); alert('Terima kasih!'); }}>
            <input type="email" required placeholder="Email Anda" className="w-full rounded-md bg-slate-800 border border-slate-700 focus:border-primary-500 focus:ring-primary-500 text-xs" />
            <button className="w-full btn-primary justify-center text-xs py-2">Berlangganan</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container py-4 flex flex-col md:flex-row gap-3 md:items-center justify-between">
          <p className="text-xs">© {new Date().getFullYear()} LPK. All rights reserved.</p>
          <p className="text-xs text-slate-500">Dibuat dengan React + Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
