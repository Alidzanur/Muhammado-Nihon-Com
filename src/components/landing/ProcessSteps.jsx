import React, { useState } from 'react';
import { MessageCircle, BookOpen, Handshake, ShieldCheck, PlaneTakeoff, ChevronDown, User } from 'lucide-react';
import { container, sectionY } from './constants';
import { processSteps } from '../../data/landingData.js';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';
import { StaggerContainer, childVariants } from '../animations/StaggerChildren.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const stepIconMap = { MessageCircle, BookOpen, Handshake, ShieldCheck, PlaneTakeoff };

export default function ProcessSteps() {
  const [expandedStep, setExpandedStep] = useState(0); // First step expanded by default

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? -1 : index);
  };

  return (
    <SectionFadeIn as="section" className="bg-white">
      <div className={`${container} ${sectionY}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Side - Steps */}
          <div>
            <div className="mb-12">
              <p className="label-section text-brand-600 mb-6">Step-by-Step</p>
              <h2 className="heading-section text-slate-900 mb-4">
                Proses dalam 5 langkah 
                <br />
                sederhana menuju Jepang.
              </h2>
            </div>

            <StaggerContainer className="space-y-4">
              {processSteps.map((step, index) => {
                const IconComp = stepIconMap[step.icon] || MessageCircle;
                const isExpanded = expandedStep === index;
                
                return (
                  <motion.div 
                    key={step.key} 
                    variants={childVariants}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
                  >
                    <button
                      onClick={() => toggleStep(index)}
                      className="w-full flex items-center gap-4 p-6 text-left hover:bg-slate-50 transition-colors duration-200"
                    >
                      {/* Step Circle */}
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-200 ${
                          isExpanded 
                            ? 'bg-brand-600 text-white' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Step Title */}
                      <div className="flex-1">
                              <h3 className="heading-small text-slate-900">
                                {step.title}
                              </h3>
                      </div>

                      {/* Expand Icon */}
                      <div className="flex-shrink-0">
                        <ChevronDown 
                          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                                  <div className="px-6 pb-6">
                                    <div className="pl-18">
                                      <p className="body-card text-slate-600">
                                        {step.description}
                                      </p>
                                    </div>
                                  </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right Side - Image */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                  alt="Calon peserta LPK sedang belajar"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                    <User className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                            <p className="heading-small text-slate-900">500+ Alumni</p>
                            <p className="text-ui-base text-slate-600">Sukses bekerja di Jepang</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionFadeIn>
  );
}
