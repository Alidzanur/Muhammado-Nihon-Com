import React, { useState } from 'react';
import { LOGO_SRC, WA_LINK, container } from './constants';
import { Button } from '../ui/button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    ['Program', '/#program'],
    ['Keunggulan', '/#keunggulan'],
    ['Testimoni', '/#testimoni'],
    ['FAQ', '/#faq'],
    ['Blog', '/blog'],
    ['Kontak', '/#kontak'],
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className={`${container} h-16 sm:h-18 lg:h-20 flex items-center justify-between`}>
        <div className="flex items-center gap-4">
          <div className="relative">
            <a href="/">
              <img src={LOGO_SRC} alt="Logo PT Muhammado Nihon Istiqomah" className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-contain bg-white border border-slate-200 shadow-sm" />
            </a>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gradient-brand rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <div className="hidden sm:block">
            <p className="text-ui-base font-bold text-slate-800 leading-tight">PT Muhammado Nihon Istiqomah</p>
            <p className="text-ui-small text-slate-600 leading-tight mt-0.5">LPK ke Jepang — Profesional & Amanah</p>
          </div>
          <div className="block sm:hidden">
            <p className="text-ui-base font-bold text-slate-800">PT Muhammado Nihon Istiqomah</p>
            <p className="text-ui-small text-slate-600">LPK ke Jepang</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-ui-base">
          {menuItems.map(([label, href]) => (
            <a 
              key={href} 
              href={href} 
              className="text-slate-700 hover:text-brand-600 transition-colors duration-200 font-semibold py-2 relative group"
              {...(href.startsWith('/') ? {} : {})}
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-brand transition-all duration-200 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button asChild size="md">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="whitespace-nowrap">Konsultasi Gratis</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200/80 shadow-lg">
          <div className={`${container} py-4`}>
            <nav className="flex flex-col space-y-4">
              {menuItems.map(([label, href]) => (
                <a 
                  key={href} 
                  href={href} 
                  onClick={closeMobileMenu}
                  className="text-slate-700 hover:text-brand-600 transition-colors duration-200 font-semibold py-3 px-4 rounded-lg hover:bg-brand-50"
                >
                  {label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <Button asChild size="md" className="w-full">
                  <a href={WA_LINK} target="_blank" rel="noreferrer" onClick={closeMobileMenu}>
                    Konsultasi Gratis
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
