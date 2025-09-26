import React from 'react';
import SectionTitle from './SectionTitle';
import { Video } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { container, sectionY } from './constants';
import { testimonials } from '../../data/landingData.js';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { StaggerContainer, childVariants } from '../animations/StaggerChildren.jsx';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <SectionFadeIn as="section" id="testimoni">
      <div className={`${container} ${sectionY}`}>
        <SectionTitle kicker="Cerita Alumni" title="Testimoni & Bukti Sosial" subtitle="Prioritaskan video testimoni & dokumentasi kegiatan." />
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(i => (
            <motion.div key={i} variants={childVariants}>
              <Card className="border-[#E2E8F0] overflow-hidden" aria-label={`Testimoni alumni ${i}`}>
                <div className="relative aspect-video bg-[#F5F7FA]">
                  <img src={`https://picsum.photos/seed/testi${i}/800/450`} loading="lazy" alt="Thumbnail video testimoni alumni (ganti dengan video asli)" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-[#E2E8F0] flex items-center justify-center"><Video className="w-6 h-6 text-[#BC002D]" /></div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-[#1A2B48]">Nama Alumni</p>
                  <p className="text-sm text-[#2D3748]/80 mt-1">“MasyaAllah, prosesnya jelas dan selalu didampingi. Alhamdulillah kini saya bekerja di Jepang.”</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
        <div className="mt-8 flex justify-center"><Button variant="outline" className="border-[#BC002D] text-[#BC002D] hover:bg-[#BC002D]/10">Lihat Galeri Kegiatan</Button></div>
      </div>
    </SectionFadeIn>
  );
}
