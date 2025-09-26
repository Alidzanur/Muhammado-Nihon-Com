import React from 'react';
import SectionTitle from './SectionTitle';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';
import { container, sectionY } from './constants';
import { faqData } from '../../data/landingData.js';
import SectionFadeIn from '../animations/SectionFadeIn.jsx';

export default function FAQ() {
  return (
    <SectionFadeIn as="section" id="faq">
      <div className={`${container} max-w-3xl ${sectionY}`}>
        <SectionTitle kicker="Ada Pertanyaan?" title="FAQ — Pertanyaan yang Sering Diajukan" />
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((f,i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-[#1A2B48]">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[#2D3748]/80">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionFadeIn>
  );
}
