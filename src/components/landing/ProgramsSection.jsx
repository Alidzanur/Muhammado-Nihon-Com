import React from 'react';
import SectionTitle from './SectionTitle';
import { HeartHandshake, Clock, Users, GraduationCap, Factory, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { WA_LINK, container, sectionY } from './constants';
import { programData } from '../../data/landingData.js';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { StaggerContainer, childVariants } from '../animations/StaggerChildren.jsx';
import { motion } from 'framer-motion';

const iconMap = { HeartHandshake, GraduationCap, ChefHat };
const metaIconMap = { Clock, Users, Factory };

export default function ProgramsSection() {
  return (
    <SectionFadeIn as="section" className="bg-[#F5F7FA]" id="program">
      <div className={`${container} ${sectionY}`}>
        <SectionTitle kicker="Program PT MNI" title="Pilih Jalur yang Tepat untuk Masa Depan Anda" subtitle="Sorot Program Kaigo sebagai unggulan, disusul Magang & SSW." />
        <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {programData.map(p => {
            const IconComp = iconMap[p.icon] || HeartHandshake;
            return (
              <motion.div key={p.key} variants={childVariants}>
                <Card className={`border-[#E2E8F0] ${p.highlight ? 'ring-2 ring-[#BC002D]/20' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-[#1A2B48] flex items-center gap-2"><IconComp className="w-5 h-5 text-[#BC002D]" /> {p.title}</CardTitle>
                      {p.tag && <span className="text-xs px-2 py-1 rounded-full bg-[#BC002D]/10 text-[#BC002D]">{p.tag}</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-[#2D3748]/80 space-y-3">
                    <ul className="list-disc pl-5 space-y-1">
                      {p.bullets.map(b => <li key={b}>{b}</li>)}
                    </ul>
                    <div className="flex items-center gap-4 text-xs flex-wrap">
                      {p.meta && p.meta.map(m => {
                        const MIcon = metaIconMap[m.icon] || Clock;
                        return <span key={m.label} className="inline-flex items-center gap-1"><MIcon className="w-4 h-4" /> {m.label}</span>;
                      })}
                    </div>
                    <div className="pt-2">
                      <Button asChild variant={p.highlight ? 'solid' : 'outline'} className={`${p.highlight ? 'bg-[#BC002D] hover:bg-[#BC002D]/90' : 'border-[#BC002D] text-[#BC002D] hover:bg-[#BC002D]/10'} w-full`}>
                        <a href={WA_LINK} target="_blank" rel="noreferrer">{p.cta}</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionFadeIn>
  );
}
