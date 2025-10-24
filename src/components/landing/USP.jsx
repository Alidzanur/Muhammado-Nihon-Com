import React from 'react';
import SectionTitle from './SectionTitle';
import { ShieldCheck, BookOpen, HeartHandshake, Users, Clock, MapPin } from 'lucide-react';
import { container, sectionY } from './constants';
import { uspData } from '../../data/landingData.js';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { StaggerContainer, childVariants } from '../animations/StaggerChildren.jsx';
import { motion } from 'framer-motion';

const icons = [ShieldCheck, BookOpen, HeartHandshake, Users, Clock, MapPin];

export default function USP() {
  return (
    <SectionFadeIn as="section" id="keunggulan">
      <div className={`${container} ${sectionY}`}>
        <SectionTitle kicker="Mengapa PT Muhammado Nihon Istiqomah" title="Amanah, Terstruktur, dan Berorientasi Hasil" subtitle="USP yang relevan dengan kebutuhan & kekhawatiran calon peserta." />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uspData.map((text, i) => {
            const IconComp = icons[i % icons.length];
            return (
              <motion.div key={text} variants={childVariants} className="flex items-start gap-3 p-4 rounded-2xl border border-[#E2E8F0] bg-white">
                <IconComp className="w-5 h-5 text-[#BC002D]" />
                <p className="text-ui-base text-[#2D3748]">{text}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionFadeIn>
  );
}
