import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { container, sectionY } from './constants';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { StaggerContainer, childVariants } from '../animations/StaggerChildren.jsx';

// Hook untuk animasi counter
function useCountUp(end, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;
    let animationId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration, shouldStart]);

  return count;
}

const statisticsData = [
  {
    id: 'alumni',
    number: 500,
    suffix: '+',
    label: 'Alumni Sukses',
    description: 'Alumni yang berhasil bekerja di Jepang',
  },
  {
    id: 'success_rate',
    number: 95,
    suffix: '%',
    label: 'Tingkat Keberhasilan',
    description: 'Peserta berhasil mendapat pekerjaan',
  },
  {
    id: 'companies',
    number: 150,
    suffix: '+',
    label: 'Perusahaan Mitra',
    description: 'Perusahaan di Jepang yang bekerjasama',
  },
  {
    id: 'experience',
    number: 10,
    suffix: '+',
    label: 'Tahun Pengalaman',
    description: 'Berpengalaman mengirim tenaga kerja',
  },
];

// Komponen untuk stat individual dengan counter
function StatItem({ stat, index, inView }) {
  const count = useCountUp(stat.number, 2000 + (index * 200), inView);
  
  return (
    <motion.div
      variants={childVariants}
      className="text-center group"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          type: "spring",
          bounce: 0.4
        }}
        className="relative mb-4"
      >
        {/* Main Number */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
          {count}{stat.suffix}
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-white/20 blur-sm group-hover:text-white/40 transition-all duration-300">
          {count}{stat.suffix}
        </div>
      </motion.div>

      {/* Label */}
      <h3 className="heading-small text-white mb-2 group-hover:text-white/90 transition-colors">
        {stat.label}
      </h3>

      {/* Description */}
      <p className="body-small text-white/70 group-hover:text-white/80 transition-colors">
        {stat.description}
      </p>

      {/* Decorative Line */}
      <div className="mt-4 mx-auto w-12 h-0.5 bg-white/30 group-hover:bg-white/50 group-hover:w-16 transition-all duration-300"></div>
    </motion.div>
  );
}

export default function Statistics() {
  const [ref, inView] = useState(false);
  
  return (
    <SectionFadeIn 
      as="section" 
      className="relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-primary-700 rounded-3xl mx-2 sm:mx-4 lg:mx-6 my-4 sm:my-6 lg:my-8"
      id="statistik"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className={`${container} ${sectionY} relative z-10`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label-section text-white/80 mb-6">
              Prestasi Kami
            </p>
            <h2 className="heading-subsection text-white">
              Pencapaian PT Muhammado Nihon Istiqomah dalam
              <br />
              <span className="text-white/90">Mengantarkan Impian ke Jepang</span>
            </h2>
            <p className="mt-4 text-white/80 body-section max-w-2xl mx-auto">
              Kepercayaan peserta dan hasil nyata yang membuktikan komitmen kami
            </p>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <motion.div
          ref={(el) => {
            if (el && !inView) {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                  }
                },
                { threshold: 0.3 }
              );
              observer.observe(el);
            }
          }}
        >
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-16">
            {statisticsData.map((stat, index) => (
              <StatItem key={stat.id} stat={stat} index={index} inView={inView} />
            ))}
          </StaggerContainer>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 body-section mb-6">
            Bergabunglah dengan ribuan alumni sukses lainnya
          </p>
          <motion.a
            href="#kontak"
            className="inline-flex items-center gap-2 bg-white text-brand-600 font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Perjalanan Anda
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </SectionFadeIn>
  );
}
