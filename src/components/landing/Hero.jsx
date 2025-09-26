import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WA_LINK } from './constants';
import { Button } from '../ui/button';
import { KBadge } from './Badges';
import { container } from './constants';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  return (
    <SectionFadeIn as="section" className="relative overflow-hidden" id="hero" aria-label="Bagian pembuka PT MNI">
      <div className={`${container} py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center`}>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="uppercase tracking-[0.18em] text-xs text-[#1A2B48]/70 mb-3">LPK Ke Jepang — Muslim Friendly</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1A2B48] [font-family:var(--font-heading,Poppins,sans-serif)] leading-tight">Jembatan Aman Menuju Karier Halal & Bermartabat di Jepang</h1>
          <p className="mt-5 text-[#2D3748]/80">Bimbingan bahasa, keterampilan kerja, dan pembinaan spiritual dalam satu ekosistem pendampingan. Transparan, terstruktur, dan berfokus pada masa depan Anda.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Button asChild size="lg" className="bg-[#BC002D] hover:bg-[#BC002D]/90">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><MessageCircle className="w-5 h-5" /> Daftar Konsultasi Gratis</a>
            </Button>
            <a href="#program" className="inline-flex items-center gap-2 text-[#1A2B48] hover:text-[#BC002D]">Lihat Program <ArrowRight className="w-4 h-4" /></a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <KBadge>Transparansi Biaya</KBadge>
            <KBadge>Bimbingan Ibadah & Halal</KBadge>
            <KBadge>Mentoring Alumni</KBadge>
          </div>
          <div className="mt-8 text-xs text-[#2D3748]/60">*Tampilkan logo mitra resmi & legalitas di sini (JITCO/OTIT, Kemenaker, dsb.)</div>
        </motion.div>
        <motion.div style={{ y: parallaxY }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="grid grid-cols-3 gap-3 will-change-transform">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F7FA] border border-[#E2E8F0]">
                <img src={`https://picsum.photos/seed/mni${i}/600/800`} alt="Alumni placeholder" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[#2D3748]/60 text-center">Gunakan foto asli kegiatan & alumni untuk kepercayaan maksimal.</p>
        </motion.div>
      </div>
    </SectionFadeIn>
  );
}
