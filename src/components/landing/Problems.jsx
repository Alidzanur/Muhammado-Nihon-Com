import React from 'react';
import SectionTitle from './SectionTitle';
import { ShieldCheck, BookOpen, HeartHandshake, Users } from 'lucide-react';
import { container, sectionY } from './constants';
import { issuesData } from '../../data/landingData.js';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { StaggerContainer, childVariants } from '../animations/StaggerChildren.jsx';
import { motion } from 'framer-motion';

const iconMap = { ShieldCheck, BookOpen, HeartHandshake, Users };

export default function Problems() {
  return (
    <SectionFadeIn as="section" className="bg-slate-50" id="masalah">
      <div className={`${container} ${sectionY}`}>
        <SectionTitle kicker="Kekhawatiran Umum" title="Masalah yang Sering Dihadapi & Cara PT Muhammado Nihon Istiqomah Menjawabnya" subtitle="Ringkas, jelas, dan menyentuh kebutuhan nyata calon peserta." />
        
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
          {issuesData.map((it, index) => {
            const IconComp = iconMap[it.icon] || ShieldCheck;
            return (
              <motion.div 
                key={it.key} 
                variants={childVariants}
                className="group relative text-center"
              >
                {/* Top Border Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-brand rounded-full mb-6"></div>
                
                {/* Icon Container */}
                <div className="relative pt-8 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg border border-slate-200 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <IconComp className="w-8 h-8 text-brand-600 group-hover:text-brand-700 transition-colors" />
                  </div>
                  
                  {/* Background Decoration */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-brand-50 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </div>

                {/* Content */}
                        <div className="space-y-4">
                          <h3 className="heading-small text-slate-800 group-hover:text-brand-700 transition-colors duration-200">
                            {it.title}
                          </h3>
                          
                          <p className="body-card text-slate-600">
                            {it.desc}
                          </p>
                        </div>

                {/* Bottom Decoration */}
                <div className="mt-6 flex justify-center">
                  <div className="w-8 h-0.5 bg-slate-200 group-hover:bg-brand-300 group-hover:w-12 transition-all duration-300"></div>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-brand-soft opacity-0 group-hover:opacity-100 transition-all duration-300 -z-20 scale-95 group-hover:scale-100"></div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Bottom Section with Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-slate-200">
            <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
            <span className="text-ui-base text-slate-600">
              Solusi terpercaya untuk setiap kekhawatiran Anda
            </span>
          </div>
        </motion.div>
      </div>
    </SectionFadeIn>
  );
}
