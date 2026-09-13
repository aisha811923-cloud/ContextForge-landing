'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import {
  Clock,
  History,
  Shield,
  GitPullRequest,
  Gauge,
  Radio,
  Layers,
  StopCircle,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function BentoGrid() {
  return (
    <section id="features" className="relative py-24 sm:py-32 lg:py-36 overflow-hidden">
      {/* Ambient Lighting Wells */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.05),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.04),transparent_70%)] blur-3xl" />

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
            <Layers className="h-3.5 w-3.5" />
            <span>ENGINEERED FOR FLOW</span>
          </div>

          <h2 className="mt-5 font-sans text-4xl font-bold tracking-tight text-[#E6E0DD] sm:text-6xl">
            Built for speed. Guarded by default.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#8C827A] sm:text-lg">
            Six architectural pillars engineered into a single native binary. Experience non-destructive local-first AI.
          </p>
        </motion.div>

        {/* 6-Pillar Bento Grid with Framer Motion Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10"
        >
          {/* Pillar 1: Non-Blocking Queue */}
          <motion.div variants={itemVariants}>
            <FeatureCard
              pillarNumber={1}
              title="Non-Blocking Queue"
              headline="Type ahead. Zero wait states."
              description="Never wait for a stream to finish. Queue subsequent directives instantly while the model writes, or interrupt execution with the hardware stop toggle."
              icon={<Clock className="h-5 w-5 text-[#FBBF24]" />}
              badgeText="#1 Queued"
              badgeColor="amber"
            >
              <div className="flex items-center justify-between rounded-lg border border-[#2A211D] bg-[#0D0A09] px-3.5 py-2.5 font-mono text-xs tabular-nums">
                <span className="text-[#8C827A]">Hardware Stop:</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#F87171]">
                  <StopCircle className="h-3.5 w-3.5" />
                  Ctrl + .
                </span>
              </div>
            </FeatureCard>
          </motion.div>

          {/* Pillar 2: Time Machine Snapshots */}
          <motion.div variants={itemVariants}>
            <FeatureCard
              pillarNumber={2}
              title="Time Machine Snapshots"
              headline="1-Click Turn Rollbacks."
              description="Automated file snapshots are written to local disk before every mutation turn. If a refactor breaks your build, roll back your working tree in milliseconds without dirtying Git."
              icon={<History className="h-5 w-5 text-[#4ADE80]" />}
              badgeText="Pre-Mutation Cache"
              badgeColor="emerald"
            >
              <div className="flex items-center justify-between rounded-lg border border-[#2A211D] bg-[#0D0A09] px-3.5 py-2.5 font-mono text-xs tabular-nums">
                <span className="text-[#8C827A]">Snapshot Latency:</span>
                <span className="text-[#4ADE80] font-semibold">&lt; 16 ms</span>
              </div>
            </FeatureCard>
          </motion.div>

          {/* Pillar 3: Workspace Rules Engine */}
          <motion.div variants={itemVariants}>
            <FeatureCard
              pillarNumber={3}
              title="Workspace Rules Engine"
              headline="Persistent .contextforgerules."
              description="Define project conventions, architectural boundaries, and lint standards once in your root folder. Injected directly into the system prompt context on every run."
              icon={<Shield className="h-5 w-5 text-[#D97706]" />}
              badgeText="Local Sovereign"
              badgeColor="amber"
            >
              <div className="flex items-center justify-between rounded-lg border border-[#2A211D] bg-[#0D0A09] px-3.5 py-2.5 font-mono text-xs tabular-nums">
                <span className="text-[#8C827A]">Rule Injection:</span>
                <span className="text-[#E6E0DD] font-semibold">100% Deterministic</span>
              </div>
            </FeatureCard>
          </motion.div>

          {/* Pillar 4: Granular Diff Inspector */}
          <motion.div variants={itemVariants}>
            <FeatureCard
              pillarNumber={4}
              title="Granular Diff Inspector"
              headline="Line-by-Line Patch Review."
              description="Inspect proposed changes directly inside the execution feed. Accept or reject individual hunks before anything touches your filesystem."
              icon={<GitPullRequest className="h-5 w-5 text-[#4ADE80]" />}
              badgeText="Per-Hunk Guard"
              badgeColor="emerald"
            >
              <div className="flex items-center justify-between rounded-lg border border-[#2A211D] bg-[#0D0A09] px-3.5 py-2.5 font-mono text-xs tabular-nums">
                <span className="text-[#8C827A]">Selective Commits:</span>
                <span className="text-[#4ADE80] font-semibold">Hunk-by-Hunk</span>
              </div>
            </FeatureCard>
          </motion.div>

          {/* Pillar 5: Telemetry HUD */}
          <motion.div variants={itemVariants}>
            <FeatureCard
              pillarNumber={5}
              title="Telemetry HUD"
              headline="Sub-Millisecond Speed Gauges."
              description="Real-time Time-To-First-Token (TTFT), tokens/second generation throughput, and context ceiling utilization visible on an unobtrusive status rail."
              icon={<Gauge className="h-5 w-5 text-[#FBBF24]" />}
              badgeText="Live Metrics"
              badgeColor="amber"
            >
              <div className="flex items-center justify-between rounded-lg border border-[#2A211D] bg-[#0D0A09] px-3.5 py-2.5 font-mono text-xs tabular-nums">
                <span className="text-[#8C827A]">TTFT Metric:</span>
                <span className="text-[#4ADE80] font-semibold">14.8 ms • 68 tok/s</span>
              </div>
            </FeatureCard>
          </motion.div>

          {/* Pillar 6: Dual Inference Engine */}
          <motion.div variants={itemVariants}>
            <FeatureCard
              pillarNumber={6}
              title="Dual Inference Engine"
              headline="Cloud Throughput. Local Fallback."
              description="Stream with Gemini API for ultra-low latency, with automatic zero-crash fallback to local Ollama instances when internet connectivity drops."
              icon={<Radio className="h-5 w-5 text-[#E6E0DD]" />}
              badgeText="Gemini + Ollama"
              badgeColor="emerald"
            >
              <div className="flex items-center justify-between rounded-lg border border-[#2A211D] bg-[#0D0A09] px-3.5 py-2.5 font-mono text-xs tabular-nums">
                <span className="text-[#8C827A]">Offline Bridge:</span>
                <span className="text-[#E6E0DD] font-semibold">localhost:11434</span>
              </div>
            </FeatureCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
