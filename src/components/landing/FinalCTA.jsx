import React from 'react';
import { Button } from '../ui/button';
import { WHATSAPP_NUMBER, WA_LINK, container, sectionY } from './constants';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';

export default function FinalCTA() {
  return (
    <SectionFadeIn as="section" id="kontak" className="bg-[#F5F7FA]">
      <div className={`${container} max-w-4xl ${sectionY}`}>
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1A2B48] [font-family:var(--font-heading,Poppins,sans-serif)]">Siap Wujudkan Mimpi Bekerja di Jepang?</h3>
            <p className="mt-3 text-[#2D3748]/80">Isi data singkat di bawah ini dan tim kami akan menghubungi Anda.</p>
          </div>
            <form
              className="mt-8 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto justify-items-stretch"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const nama = fd.get('nama') || '';
                const wa = fd.get('wa') || '';
                const text = encodeURIComponent(`Assalamu'alaikum, saya ${nama}. Nomor WA saya ${wa}. Saya ingin konsultasi program kerja ke Jepang di PT MNI.`);
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
              }}
            >
              <div>
                <label className="text-sm text-[#1A2B48]">Nama Lengkap</label>
                <input name="nama" required placeholder="Nama Anda" className="mt-1 w-full h-11 rounded-xl border border-[#E2E8F0] px-3 outline-none focus:ring-2 focus:ring-[#BC002D]/30" />
              </div>
              <div>
                <label className="text-sm text-[#1A2B48]">No. WhatsApp</label>
                <input name="wa" required placeholder="08XXXXXXXXXX" className="mt-1 w-full h-11 rounded-xl border border-[#E2E8F0] px-3 outline-none focus:ring-2 focus:ring-[#BC002D]/30" />
              </div>
              <div className="col-span-full flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center text-center">
                <Button type="submit" className="bg-[#BC002D] hover:bg-[#BC002D]/90 h-11 px-10 shadow-sm w-full sm:w-auto">Kirim & Konsultasi via WhatsApp</Button>
                <Button asChild variant="outline" className="border-[#BC002D] text-[#BC002D] hover:bg-[#BC002D]/10 h-11 px-10 w-full sm:w-auto"><a href={WA_LINK} target="_blank" rel="noreferrer">Chat Admin Langsung</a></Button>
              </div>
            </form>
        </div>
      </div>
    </SectionFadeIn>
  );
}
