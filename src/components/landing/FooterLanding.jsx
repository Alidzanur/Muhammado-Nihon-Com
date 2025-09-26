import React from 'react';
import { LOGO_SRC, container } from './constants';

export default function FooterLanding() {
  return (
    <footer className="border-t border-[#E2E8F0]">
      <div className={`${container} py-10 grid md:grid-cols-4 gap-8`}>
        <div>
          <div className="flex items-center gap-2">
            <img src={LOGO_SRC} alt="Logo PT Muhammad Nihon Istiqomah" className="w-10 h-10 rounded-md object-contain bg-white border border-[#E2E8F0]" />
            <p className="font-semibold text-[#1A2B48]">PT Muhammad Nihon Istiqomah</p>
          </div>
          <p className="text-sm text-[#2D3748]/70 mt-3">LPK ke Jepang — profesional, amanah, dan mendukung kebutuhan peserta Muslim.</p>
        </div>
        <div>
          <p className="font-medium text-[#1A2B48] mb-3">Menu</p>
          <ul className="space-y-2 text-sm">
            {['Program','#program','Keunggulan','#keunggulan','Testimoni','#testimoni','FAQ','#faq'].reduce((acc, cur, idx, arr) => {
              if (idx % 2 === 0) acc.push({ label: cur, href: arr[idx+1] });
              return acc;
            }, []).map(it => (
              <li key={it.href}><a className="hover:text-[#BC002D]" href={it.href}>{it.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium text-[#1A2B48] mb-3">Kontak</p>
          <ul className="space-y-2 text-sm">
            <li>Alamat: (isi alamat kantor/kelas)</li>
            <li>Telepon: 08XXXXXXXXXX</li>
            <li>Email: info@ptmni.co.id</li>
            <li>Instagram/TikTok/Facebook: @ptmni</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-[#1A2B48] mb-3">Legal</p>
          <ul className="space-y-2 text-sm">
            <li>Izin LPK: (isi nomor izin)</li>
            <li>Mitra Resmi: (cantumkan nama mitra)</li>
            <li><span className="text-[#2D3748]/60">© {new Date().getFullYear()} PT MNI. All rights reserved.</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
