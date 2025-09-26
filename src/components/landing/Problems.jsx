import React from 'react';
import SectionTitle from './SectionTitle';
import { ShieldCheck, BookOpen, HeartHandshake, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { container, sectionY } from './constants';
import { issuesData } from '../../data/landingData.js';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { StaggerContainer, childVariants } from '../animations/StaggerChildren.jsx';
import { motion } from 'framer-motion';

const iconMap = { ShieldCheck, BookOpen, HeartHandshake, Users };

export default function Problems() {
  return (
    <SectionFadeIn as="section" className="bg-[#F5F7FA]" id="masalah">
      <div className={`${container} ${sectionY}`}>
        <SectionTitle kicker="Kekhawatiran Umum" title="Masalah yang Sering Dihadapi & Cara PT MNI Menjawabnya" subtitle="Ringkas, jelas, dan menyentuh kebutuhan nyata calon peserta." />
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {issuesData.map((it) => {
            const IconComp = iconMap[it.icon] || ShieldCheck;
            return (
              <motion.div key={it.key} variants={childVariants}>
                <Card className="border-[#E2E8F0]">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <div className="shrink-0"><IconComp className="w-6 h-6 text-[#BC002D]" /></div>
                    <CardTitle className="text-base text-[#1A2B48]">{it.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-[#2D3748]/80">{it.desc}</CardContent>
                </Card>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionFadeIn>
  );
}
