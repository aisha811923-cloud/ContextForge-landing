'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from './PricingCard';
import { DollarSign } from 'lucide-react';

export function PricingSection() {
  const freeFeatures = [
    'All 6 desktop workspace tools included',
    'Unlimited local project indexing',
    'Custom .contextforgerules enforcement',
    'Time Machine pre-mutation snapshot engine',
    'Bring Your Own Key (BYOK) for Gemini API',
    'Unlimited local offline inference via Ollama',
    'Standalone native desktop binaries (Win, Mac, Linux)',
  ];

  const enterpriseFeatures = [
    'Team-wide .contextforgerules registry',
    'Multi-seat workspace state sync',
    'Centralized corporate model routing & quotas',
    'Dedicated enterprise support channels',
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32 lg:py-36 overflow-hidden">
      {/* Ambient Lighting Wells */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.06),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2A211D] bg-[#16110F] px-4 py-1.5 font-mono text-xs tracking-[0.25em] text-[#D97706] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <DollarSign className="h-3.5 w-3.5" />
            <span>TRANSPARENT ACCESS</span>
          </div>

          <h2 className="mt-5 font-sans text-4xl font-bold tracking-tight text-[#E6E0DD] sm:text-6xl">
            Powerful developer software should not require a monthly seat tax.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#8C827A] sm:text-lg">
            We believe engineers build best with sovereign, local-first computing. Free forever for individuals; bring your own API key.
          </p>
        </motion.div>

        {/* Dual-Card Grid with Framer Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:items-stretch max-w-5xl mx-auto"
        >
          {/* Developer Free Forever Tier */}
          <PricingCard
            badge="FULL DESKTOP SUITE"
            name="Developer (Free Forever)"
            price="$0"
            pricePeriod="Free Forever"
            tagline="Complete local-first power for individual software engineers."
            features={freeFeatures}
            ctaText="Download ContextForge Free"
            ctaHref="#downloads"
            isFeatured={true}
          />

          {/* Teams & Enterprise Tier */}
          <PricingCard
            badge="IN ACTIVE DEVELOPMENT"
            name="Teams & Enterprise"
            price="Coming Soon"
            pricePeriod="Roadmap 2026"
            tagline="Centralized rule synchronization and shared workspace governance."
            features={enterpriseFeatures}
            ctaText="Join Teams Waitlist"
            ctaHref="#faq"
            isFeatured={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
