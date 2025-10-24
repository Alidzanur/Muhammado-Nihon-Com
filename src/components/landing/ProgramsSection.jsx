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
    <SectionFadeIn as="section" className="bg-slate-50" id="program">
      <div className={`${container} ${sectionY}`}>
        <SectionTitle kicker="Program PT Muhammado Nihon Istiqomah" title="Pilih Jalur yang Tepat untuk Masa Depan Anda" subtitle="Sorot Program Kaigo sebagai unggulan, disusul Magang & SSW." />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {programData.map(p => {
            const IconComp = iconMap[p.icon] || HeartHandshake;
            return (
              <motion.div key={p.key} variants={childVariants}>
                <Card className={`relative h-full ${p.highlight ? 'ring-2 ring-brand-200 shadow-brand' : ''} group`}>
                  {p.highlight && (
                    <div className="absolute -top-3 left-6 bg-gradient-brand text-white px-4 py-1 rounded-full text-ui-base shadow-lg">
                      Unggulan
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`p-3 rounded-xl ${p.highlight ? 'bg-brand-100' : 'bg-slate-100'} group-hover:scale-110 transition-transform duration-200`}>
                          <IconComp className={`w-6 h-6 ${p.highlight ? 'text-brand-600' : 'text-slate-600'}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="heading-small text-slate-800">
                            {p.title}
                          </CardTitle>
                          {p.subtitle && (
                            <p className="text-ui-base text-slate-500 mt-1">
                              {p.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                      {p.tag && (
                        <span className="text-ui-small px-3 py-1 rounded-full bg-brand-100 text-brand-700 whitespace-nowrap">
                          {p.tag}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 space-y-6">
                    <div className="space-y-3">
                      {p.bullets.map(b => (
                        <div key={b} className="flex items-start gap-3 body-card text-slate-600">
                          <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                    
                    {p.meta && (
                      <div className="flex items-center gap-6 text-ui-base text-slate-500 pt-2 border-t border-slate-100">
                        {p.meta.map(m => {
                          const MIcon = metaIconMap[m.icon] || Clock;
                          return (
                            <div key={m.label} className="flex items-center gap-2">
                              <MIcon className="w-4 h-4" />
                              <span>{m.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    
                    <div className="pt-4">
                      <Button 
                        asChild 
                        variant={p.highlight ? 'solid' : 'outline'} 
                        size="md"
                        className="w-full"
                      >
                        <a href={WA_LINK} target="_blank" rel="noreferrer">
                          {p.cta}
                        </a>
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
