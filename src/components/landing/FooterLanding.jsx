import React from 'react';
import { LOGO_SRC, container } from './constants';

export default function FooterLanding() {
  return (
    <footer className="border-t border-[#E2E8F0]">
      <div className={`${container} py-10 grid md:grid-cols-4 gap-8`}>
        <div>
          <div className="flex items-center gap-2">
            <img src={LOGO_SRC} alt="Logo PT Muhammado Nihon Istiqomah" className="w-10 h-10 rounded-md object-contain bg-white border border-[#E2E8F0]" />
            <p className="font-semibold text-[#1A2B48]">PT Muhammado Nihon Istiqomah</p>
          </div>
          <p className="text-ui-base text-[#2D3748]/70 mt-3">LPK ke Jepang — profesional, amanah, dan mendukung kebutuhan peserta Muslim.</p>
        </div>
        <div>
          <p className="font-medium text-[#1A2B48] mb-3">Menu</p>
          <ul className="space-y-2 text-ui-base">
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
          <ul className="space-y-2 text-ui-base">
            <li>Alamat: Jl. Melati IV Lingk Wage No.40, RT.01/RW.3, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611</li>
            <li>Telepon: +62 852-1098-4579</li>
            <li>Email: info@ptmni.co.id</li>
            <li>Instagram/TikTok/Facebook: <a href="https://www.tiktok.com/@muhammadonihonistiqomah" target="_blank" rel="noreferrer" className="text-[#BC002D] hover:underline">@muhammadonihonistiqomah</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-[#1A2B48] mb-3">Legal</p>
          <ul className="space-y-2 text-ui-base">
            <li>Izin LPK: AHU-0003750.AH.01.04.Tahun 2024</li>
            <li>Mitra Resmi: Disnaker Kabupaten Cirebon</li>
            <li>NIB: 0205240103708</li>
            <li><span className="text-[#2D3748]/60">© {new Date().getFullYear()} PT Muhammado Nihon Istiqomah. All rights reserved.</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
