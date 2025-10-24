import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WA_LINK } from './constants';
import { Button } from '../ui/button';
import { KBadge } from './Badges';
import { container, heroY } from './constants';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  return (
    <SectionFadeIn as="section" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white" id="hero" aria-label="Bagian pembuka PT Muhammado Nihon Istiqomah">
      <div className={`${container} ${heroY} grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="label-section text-brand-600 mb-6">LPK Ke Jepang — Muslim Friendly</p>
          
          <h1 className="heading-section text-slate-900 [font-family:var(--font-heading,Poppins,sans-serif)]">
            Jembatan Aman Menuju{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Karier Halal
            </span>{' '}
            & Bermartabat di Jepang
          </h1>
          
          <p className="body-section text-slate-600">
            Bimbingan bahasa, keterampilan kerja, dan pembinaan spiritual dalam satu ekosistem pendampingan. Transparan, terstruktur, dan berfokus pada masa depan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <Button asChild size="md" className="w-full sm:w-auto">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> 
                Daftar Konsultasi Gratis
              </a>
            </Button>
            <Button asChild variant="outline" size="md" className="w-full sm:w-auto">
              <a href="#program" className="inline-flex items-center justify-center gap-2">
                Lihat Program 
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-3 justify-center sm:justify-start">
            <KBadge>Transparansi Biaya</KBadge>
            <KBadge>Bimbingan Ibadah & Halal</KBadge>
            <KBadge>Mentoring Alumni</KBadge>
          </div>
          
        </motion.div>
        
        <motion.div 
          style={{ y: parallaxY }} 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
            {[
              { src: '/images/1.jpeg', alt: 'Alumni sukses 1' },
              { src: '/images/2.jpeg', alt: 'Alumni sukses 2' },
              { src: '/images/3.jpeg', alt: 'Alumni sukses 3' },
              { src: '/images/Home-4.jpeg', alt: 'Alumni sukses 4' },
              { src: '/images/Home-5.jpeg', alt: 'Alumni sukses 5' },
              { src: '/images/Home-6.jpeg', alt: 'Alumni sukses 6' }
            ].map((photo, i) => (
              <motion.div 
                key={i} 
                className="aspect-[4/5] rounded-xl lg:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionFadeIn>
  );
}
