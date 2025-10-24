import React from 'react';
import { Button } from '../ui/button';
import { container } from '../landing/constants';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className={`${container} h-16 sm:h-18 lg:h-20 flex items-center justify-between`}>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/images/Logo-Muhammado.png" 
                alt="Logo PT Muhammado Nihon Istiqomah" 
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-contain bg-white border border-slate-200 shadow-sm" 
              />
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
          
          <div className="flex items-center gap-3">
            <Button asChild size="md">
              <a href="/" className="whitespace-nowrap">Kembali ke Beranda</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className={`${container} text-center max-w-2xl`}>
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="text-8xl sm:text-9xl font-bold text-transparent bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text mb-4">
                404
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-brand-400 to-brand-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-gradient-to-r from-brand-300 to-brand-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan, dihapus, atau URL yang Anda masukkan salah.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="w-full sm:w-auto min-w-[200px] h-12 px-6 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200">
              <a href="/" className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Kembali ke Beranda</span>
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] h-12 px-6 font-semibold text-base border-2 hover:bg-brand-50 hover:border-brand-300 transition-all duration-200">
              <a href="https://wa.me/6285210984579" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 15.19c-.15.42-.83.77-1.14.82-.3.05-.68.07-1.05-.08-.24-.08-.55-.2-.95-.39-1.66-.8-2.73-2.35-2.81-2.46-.08-.11-.67-.89-.67-1.7s.43-1.27.58-1.45c.15-.18.33-.23.44-.23s.22-.01.32-.01c.1 0 .25-.04.4.2.15.25.51.98.55 1.05.04.07.07.16.02.26-.05.1-.08.16-.16.25-.08.08-.16.18-.23.24-.08.06-.16.12-.08.24.08.12.35.52.75.84.52.42 1.01.55 1.13.61.12.06.19.05.26-.03.07-.08.3-.35.38-.47.08-.12.16-.1.27-.06.12.04.75.35 1.25.58.54.25.96.38 1.08.42.12.04.19.02.26-.08.07-.1.07-.19.05-.27-.02-.08-.15-.2-.3-.35-.25-.25-.52-.44-.7-.59-.07-.06-.12-.1-.18-.16-.06-.07-.05-.12-.03-.2.02-.08.12-.2.18-.27.06-.07.12-.12.18-.2.06-.08.08-.13.12-.22.04-.08.02-.15-.01-.2-.03-.06-.15-.15-.3-.25-.25-.18-.52-.3-.7-.37-.07-.03-.12-.05-.18-.05-.06 0-.15.01-.23.01-.08 0-.2-.01-.3-.01-.1 0-.26.03-.4.15-.14.12-.53.52-.53 1.27s.54 1.48.61 1.58c.07.1.98 1.5 2.38 2.04.35.13.62.21.83.27.35.1.67.09.92.05.28-.04.54-.13.74-.25.2-.12.36-.27.45-.44.09-.17.09-.35.06-.52-.03-.17-.15-.32-.3-.44z"/>
                </svg>
                <span>Hubungi Kami</span>
              </a>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="border-t border-slate-200 pt-8">
            <p className="text-sm text-slate-500 mb-4">Atau coba halaman populer berikut:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/#program" className="text-brand-600 hover:text-brand-700 font-medium transition-colors">
                Program Kami
              </a>
              <a href="/#keunggulan" className="text-brand-600 hover:text-brand-700 font-medium transition-colors">
                Keunggulan
              </a>
              <a href="/#testimoni" className="text-brand-600 hover:text-brand-700 font-medium transition-colors">
                Testimoni
              </a>
              <a href="/#faq" className="text-brand-600 hover:text-brand-700 font-medium transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className={`${container} py-8`}>
          <div className="text-center">
            <p className="text-sm text-slate-600">
              © 2024 PT Muhammado Nihon Istiqomah. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
