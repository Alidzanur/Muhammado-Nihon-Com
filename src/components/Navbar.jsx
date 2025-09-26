import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#program', label: 'Program' },
  { href: '#pendaftaran', label: 'Pendaftaran' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-bold text-primary-700 text-lg">LPK</a>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="hover:text-primary-600 transition">{l.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex">
          <a href="#pendaftaran" className="btn-primary text-sm">Daftar</a>
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden inline-flex p-2 rounded hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pb-4 space-y-2">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-medium hover:text-primary-600"
            >{l.label}</a>
          ))}
          <a href="#pendaftaran" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">Daftar</a>
        </div>
      )}
    </header>
  );
}
