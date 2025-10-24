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
      className="group fixed z-50 bottom-5 right-5 sm:bottom-6 sm:right-6 flex items-center gap-3 rounded-full shadow-lg shadow-green-500/25 bg-gradient-to-r from-green-500 to-green-600 text-white pl-4 pr-5 h-14 focus:outline-none focus:ring-4 focus:ring-green-500/40 transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 active:scale-95"
    >
      <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
        <MessageCircle className="w-6 h-6" />
      </span>
      <span className="font-semibold text-ui-base tracking-wide hidden sm:inline">Chat Admin</span>
      <span className="sr-only">Buka WhatsApp untuk konsultasi</span>
      <span className="absolute -top-2 -right-2 animate-ping w-4 h-4 rounded-full bg-red-500 opacity-80" />
      <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-500" />
    </a>
  );
}
