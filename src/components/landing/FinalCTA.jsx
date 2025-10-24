import React from 'react';
import { Button } from '../ui/button';
import { WHATSAPP_NUMBER, WA_LINK, container, sectionY } from './constants';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';

export default function FinalCTA() {
  return (
    <SectionFadeIn as="section" id="kontak" className="bg-gradient-to-br from-brand-500 via-brand-600 to-primary-700 rounded-3xl mx-2 sm:mx-4 lg:mx-6 mb-4 sm:mb-6 lg:mb-8">
      <div className={`${container} max-w-4xl ${sectionY}`}>
        <div className="rounded-3xl border border-brand-200 bg-white p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="heading-subsection text-[#1A2B48] [font-family:var(--font-heading,Poppins,sans-serif)]">Siap Wujudkan Mimpi Bekerja di Jepang?</h3>
            <p className="mt-3 body-section text-[#2D3748]/80">Isi data singkat di bawah ini dan tim kami akan menghubungi Anda.</p>
          </div>
            <form
              className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const nama = fd.get('nama') || '';
                const wa = fd.get('wa') || '';
                const text = encodeURIComponent(`Assalamu'alaikum, saya ${nama}. Nomor WA saya ${wa}. Saya ingin konsultasi program kerja ke Jepang di PT Muhammado Nihon Istiqomah.`);
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
              }}
            >
              <div>
                <label className="text-ui-base text-[#1A2B48]">Nama Lengkap</label>
                <input name="nama" required placeholder="Nama Anda" className="mt-1 w-full h-11 rounded-xl border border-brand-200 px-3 outline-none focus:ring-2 focus:ring-brand-500/30" />
              </div>
              <div>
                <label className="text-ui-base text-[#1A2B48]">No. WhatsApp</label>
                <input name="wa" required placeholder="08XXXXXXXXXX" className="mt-1 w-full h-11 rounded-xl border border-brand-200 px-3 outline-none focus:ring-2 focus:ring-brand-500/30" />
              </div>
              <div className="col-span-full flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center items-center text-center">
                <Button type="submit" className="bg-brand-500 hover:bg-brand-600 h-11 px-6 sm:px-10 shadow-sm w-full sm:w-auto">Kirim & Konsultasi via WhatsApp</Button>
                <Button asChild variant="outline" className="border-brand-500 text-brand-600 hover:bg-brand-50 h-11 px-6 sm:px-10 w-full sm:w-auto"><a href={WA_LINK} target="_blank" rel="noreferrer">Chat Admin Langsung</a></Button>
              </div>
            </form>
        </div>
      </div>
    </SectionFadeIn>
  );
}
