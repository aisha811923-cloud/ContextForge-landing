'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InteractiveDiffViewer } from './InteractiveDiffViewer';
import { TimeMachineSlider } from './TimeMachineSlider';
import { SpotlightPreview } from './SpotlightPreview';
import { IslandErrorBoundary } from '@/components/common/IslandErrorBoundary';
import { GitPullRequest, History, Sparkles, Sliders } from 'lucide-react';

type TabKey = 'diff' | 'timemachine' | 'spotlight';

export function ControlShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>('diff');

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    {
      key: 'diff',
      label: 'Hunk-by-Hunk Diff Inspector',
      icon: <GitPullRequest className="h-4 w-4" />,
    },
    {
      key: 'timemachine',
      label: 'Time Machine Rollback',
      icon: <History className="h-4 w-4" />,
    },
    {
      key: 'spotlight',
      label: 'Alt + Space Spotlight Summon',
      icon: <Sparkles className="h-4 w-4" />,
    },
  ];

  return (
    <section id="showcase" className="relative py-24 sm:py-32 lg:py-36 overflow-hidden">
      {/* Ambient Lighting Wells */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-tr from-[#D97706]/10 via-[#22C55E]/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.06),transparent_70%)] blur-2xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2A211D] bg-[#16110F] px-4 py-1.5 font-mono text-xs tracking-[0.25em] text-[#D97706] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <Sliders className="h-3.5 w-3.5" />
            <span>PROOF OF CONTROL</span>
          </div>

          <h2 className="mt-5 font-sans text-4xl font-bold tracking-tight text-[#E6E0DD] sm:text-6xl">
            Review before you commit. Revert if it breaks.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#8C827A] sm:text-lg">
            Stop accepting black-box file rewrites. ContextForge isolates every modification into reviewable diff hunks and local disk snapshots.
          </p>
        </motion.div>

        {/* Hardware Segmented Tab Controller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex justify-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-[#2A211D] bg-[#16110F] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <motion.button
                  key={tab.key}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 font-mono text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? 'border border-[#2A211D] bg-[#1E1714] text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                      : 'text-[#8C827A] hover:bg-[#1E1714]/60 hover:text-[#E6E0DD]'
                  }`}
                >
                  <span className={isActive ? 'text-[#D97706]' : 'text-[#8C827A]'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Panel Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          {activeTab === 'diff' && (
            <IslandErrorBoundary islandName="HunkDiffViewer">
              <InteractiveDiffViewer />
            </IslandErrorBoundary>
          )}

          {activeTab === 'timemachine' && (
            <IslandErrorBoundary islandName="TimeMachineSlider">
              <TimeMachineSlider />
            </IslandErrorBoundary>
          )}

          {activeTab === 'spotlight' && (
            <IslandErrorBoundary islandName="SpotlightPreview">
              <SpotlightPreview />
            </IslandErrorBoundary>
          )}
        </motion.div>
      </div>
    </section>
  );
}
