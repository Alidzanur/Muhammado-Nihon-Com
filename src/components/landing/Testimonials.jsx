import React from 'react';
import SectionTitle from './SectionTitle';
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
        <SectionTitle kicker="Cerita Alumni" title="Testimoni & Bukti Sosial" subtitle="Dengarkan pengalaman langsung dari alumni yang telah sukses bekerja di Jepang." />
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              name: "Fariz Rifai",
              image: "/images/Faqih.jpeg",
              testimoni: "MasyaAllah, prosesnya jelas dan selalu didampingi. Alhamdulillah kini saya bekerja di Jepang dengan nyaman dan mendapat dukungan komunitas Muslim yang baik."
            },
            {
              id: 2,
              name: "Pramadhanti",
              image: "/images/Testimoni-2.jpg",
              testimoni: "Alhamdulillah, berkat bimbingan Muhammado Nihon saya bisa bekerja sebagai caregiver di Tokyo. Pelatihan bahasa dan keterampilan yang diberikan sangat membantu adaptasi saya di Jepang."
            },
            {
              id: 3,
              name: "Muhammad Faqih",
              image: "/images/Testimoni-3.jpg",
              testimoni: "Sangat bersyukur bisa bergabung dengan Muhammado Nihon. Tidak hanya mendapat pekerjaan yang halal, tapi juga komunitas Muslim yang solid. Prosesnya transparan dan terpercaya."
            }
          ].map((testimoni, i) => (
            <motion.div key={testimoni.id} variants={childVariants}>
              <Card className="border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" aria-label={`Testimoni alumni ${testimoni.name}`}>
                <div className="relative aspect-video bg-[#F5F7FA]">
                  <img 
                    src={testimoni.image} 
                    loading="lazy" 
                    alt={`Testimoni Alumni ${testimoni.name}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardContent className="p-6 pt-8">
                  <p className="text-ui-base font-semibold text-[#1A2B48] mb-3">{testimoni.name}</p>
                  <p className="text-ui-base text-[#2D3748]/80 leading-relaxed">"{testimoni.testimoni}"</p>
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
