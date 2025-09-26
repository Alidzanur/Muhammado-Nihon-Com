import React from 'react';
import { LOGO_SRC, WA_LINK, container } from './constants';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-[#E2E8F0]">
      <div className={`${container} h-16 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="Logo PT Muhammad Nihon Istiqomah" className="w-10 h-10 rounded-md object-contain bg-white border border-[#E2E8F0]" />
          <div>
            <p className="text-sm font-semibold text-[#1A2B48] leading-none">PT Muhammad Nihon Istiqomah</p>
            <p className="text-xs text-[#2D3748]/60 leading-none mt-1">LPK ke Jepang — Profesional & Amanah</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            ['Program', '#program'],
            ['Keunggulan', '#keunggulan'],
            ['Testimoni', '#testimoni'],
            ['FAQ', '#faq'],
            ['Kontak', '#kontak'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="hover:text-[#BC002D]">{label}</a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-[#BC002D] hover:bg-[#BC002D]/90">
            <a href={WA_LINK} target="_blank" rel="noreferrer">Konsultasi Gratis</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
