'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FAQItem } from './FAQItem';
import { FAQ_ITEMS } from '@/data/faq';
import { HelpCircle } from 'lucide-react';

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 lg:py-36 overflow-hidden">
      {/* Subtle Ambient Light Well */}
      <div className="pointer-events-none absolute right-1/3 top-1/3 h-80 w-[500px] rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.04),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2A211D] bg-[#16110F] px-4 py-1.5 font-mono text-xs tracking-[0.25em] text-[#D97706] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>TECHNICAL FAQ</span>
          </div>

          <h2 className="mt-5 font-sans text-4xl font-bold tracking-tight text-[#E6E0DD] sm:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#8C827A] sm:text-lg">
            Architectural details, local security models, and system requirements explained without buzzwords.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 space-y-4"
        >
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
