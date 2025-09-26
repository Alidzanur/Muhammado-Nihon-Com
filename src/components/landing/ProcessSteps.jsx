import React from 'react';
import SectionTitle from './SectionTitle';
import { MessageCircle, BookOpen, Handshake, ShieldCheck, PlaneTakeoff } from 'lucide-react';
import { container, sectionY } from './constants';
import { processSteps } from '../../data/landingData.js';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { StaggerContainer, childVariants } from '../animations/StaggerChildren.jsx';
import { motion } from 'framer-motion';

const stepIconMap = { MessageCircle, BookOpen, Handshake, ShieldCheck, PlaneTakeoff };

export default function ProcessSteps() {
  return (
    <SectionFadeIn as="section" className="bg-[#F5F7FA]">
      <div className={`${container} ${sectionY}`}>
        <SectionTitle kicker="Step-by-Step" title="Alur Proses Hingga Keberangkatan" />
        <StaggerContainer as="ol" className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5">
          {processSteps.map((s,i) => {
            const IconComp = stepIconMap[s.icon] || MessageCircle;
            return (
              <motion.li key={s.key} variants={childVariants} className="p-4 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#BC002D]/10 flex items-center justify-center"><IconComp className="w-5 h-5 text-[#BC002D]" /></div>
                <p className="text-sm font-medium text-[#1A2B48]">{i+1}. {s.title}</p>
              </motion.li>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionFadeIn>
  );
}
