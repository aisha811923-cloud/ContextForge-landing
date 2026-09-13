'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DynamicCTA } from './DynamicCTA';
import { HeroMockup } from './HeroMockup';
import { AnimatedGridPattern } from '@/components/common/AnimatedGridPattern';
import { ShieldCheck, Cpu, Key, Database } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-48 lg:pb-36">
      {/* Animated Matrix Grid Pattern Background */}
      <AnimatedGridPattern
        width={36}
        height={36}
        numSquares={40}
        maxOpacity={0.14}
        duration={5}
        className="opacity-70 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]"
      />

      {/* Ambient Lighting Wells */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[550px] w-full max-w-6xl bg-gradient-to-tr from-[#D97706]/10 via-[#22C55E]/5 to-transparent blur-3xl opacity-75" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.06),transparent_70%)] blur-2xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Above-the-fold Headline Block */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#2A211D] bg-[#16110F]/90 backdrop-blur-md px-4.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-[#D97706]/40 transition-colors"
          >
            <Cpu className="h-3.5 w-3.5 text-[#D97706]" />
            <span className="font-mono text-xs tracking-[0.25em] text-[#D97706] uppercase font-semibold">
              NATIVE DESKTOP ARCHITECT • TAURI V2 + RUST
            </span>
          </motion.div>

          {/* Primary Command Headline using Plus Jakarta Sans Display */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-[-0.035em] leading-[1.05] sm:leading-[1.03]"
          >
            <span className="bg-gradient-to-b from-[#FFFFFF] via-[#E6E0DD] to-[#8C827A] bg-clip-text text-transparent">
              The Local-First AI Agent
            </span>
            <br />
            <span className="bg-gradient-to-b from-[#FFFFFF] via-[#E6E0DD] to-[#8C827A] bg-clip-text text-transparent">
              That Never Overwrites Your Code.
            </span>
          </motion.h1>

          {/* Subheadline with Constrained Readable Width */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-2xl font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-[#8C827A]"
          >
            Real-time Gemini token streaming, automated pre-mutation snapshots, and per-hunk diff inspection. Native desktop execution with zero cloud workspace storage.
          </motion.p>

          {/* Dynamic Hydration-Safe CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <DynamicCTA />
          </motion.div>

          {/* Micro-Copy Trust Markers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 font-mono text-xs text-[#8C827A]"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#22C55E]" />
              <span>Free forever for developers</span>
            </div>
            <span className="hidden text-[#5A514B] sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Key className="h-4 w-4 text-[#D97706]" />
              <span>Bring Your Own Key (BYOK)</span>
            </div>
            <span className="hidden text-[#5A514B] sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-[#4ADE80]" />
              <span>Zero telemetry retention</span>
            </div>
          </motion.div>
        </div>

        {/* High-Fidelity Hero Desktop Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24"
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}
