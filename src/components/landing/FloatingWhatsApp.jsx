import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WA_LINK } from './constants';

/*
  FloatingWhatsApp
  -----------------
  Tombol melayang untuk CTA cepat ke WhatsApp.
  - Posisi kanan bawah.
  - Responsive: agak naik di layar kecil agar tidak menutupi form input mobile browser.
  - Aksesibilitas: ada sr-only text.
*/
export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp Admin"
      className="group fixed z-50 bottom-5 right-5 sm:bottom-6 sm:right-6 flex items-center gap-3 rounded-full shadow-lg bg-[#25D366] text-white pl-4 pr-5 h-14 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 transition hover:shadow-xl"
    >
      <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
        <MessageCircle className="w-6 h-6" />
      </span>
      <span className="font-medium text-sm tracking-wide hidden sm:inline">Chat Admin</span>
      <span className="sr-only">Buka WhatsApp untuk konsultasi</span>
      <span className="absolute -top-2 -left-2 animate-ping w-5 h-5 rounded-full bg-[#25D366]/70 opacity-70" />
    </a>
  );
}
