import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Problems from './Problems';
import USP from './USP';
import ProgramsSection from './ProgramsSection';
import Testimonials from './Testimonials';
import ProcessSteps from './ProcessSteps';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import FooterLanding from './FooterLanding';
import { ScrollProgressBar } from '../animations/ScrollProgressBar.jsx';
import FloatingWhatsApp from './FloatingWhatsApp.jsx';

export default function LandingPageMNI() {
  return (
    <div className="min-h-screen bg-white text-[#2D3748] [font-family:var(--font-body,Lato,sans-serif)]">
      <ScrollProgressBar />
      <Header />
      <Hero />
      <Problems />
      <USP />
      <ProgramsSection />
      <Testimonials />
      <ProcessSteps />
      <FAQ />
      <FinalCTA />
      <FooterLanding />
      <FloatingWhatsApp />
    </div>
  );
}
