'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BENCHMARKS } from '@/data/benchmarks';
import { Zap, Check, Cpu } from 'lucide-react';

export function ResourceTable() {
  return (
    <section id="benchmarks" className="relative py-24 sm:py-32 lg:py-36 overflow-hidden">
      {/* Subtle Ambient Light Well */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-80 w-[500px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.04),transparent_70%)] blur-3xl" />

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
            <Zap className="h-3.5 w-3.5" />
            <span>ARCHITECTURE BENCHMARKS</span>
          </div>

          <h2 className="mt-5 font-sans text-4xl font-bold tracking-tight text-[#E6E0DD] sm:text-6xl">
            Native Rust efficiency. Say goodbye to Electron bloat.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#8C827A] sm:text-lg">
            Compiled directly to native machine code with Tauri v2. Negligible RAM footprint, instant boot times, and tiny installation packages.
          </p>
        </motion.div>

        {/* Benchmark Table Container with Framer Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 overflow-hidden rounded-2xl border border-[#2A211D] bg-[#16110F] shadow-2xl shadow-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              {/* Table Header */}
              <thead className="border-b border-[#2A211D] bg-[#1E1714]/80 font-mono text-xs text-[#8C827A]">
                <tr>
                  <th scope="col" className="px-6 py-5 font-semibold text-[#E6E0DD]">
                    Metric
                  </th>
                  <th scope="col" className="px-6 py-5 font-semibold text-[#4ADE80]">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-[#22C55E]" />
                      <span>ContextForge (Tauri v2)</span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-5 font-semibold text-[#8C827A]">
                    Traditional Electron Editors
                  </th>
                  <th scope="col" className="px-6 py-5 font-semibold text-[#FBBF24]">
                    Architectural Advantage
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#2A211D]/60 font-sans">
                {BENCHMARKS.map((row) => (
                  <tr
                    key={row.metric}
                    className="transition-colors duration-150 hover:bg-[#1E1714]/40"
                  >
                    {/* Metric Name */}
                    <td className="px-6 py-5 font-mono text-xs font-semibold text-[#E6E0DD]">
                      {row.metric}
                    </td>

                    {/* ContextForge (Tauri v2) Result */}
                    <td className="px-6 py-5 font-mono text-xs font-bold tabular-nums text-[#4ADE80]">
                      <div className="inline-flex items-center gap-2 rounded-lg bg-[#143823]/50 px-3 py-1.5 border border-[#1B4D31]">
                        <Check className="h-3.5 w-3.5 text-[#22C55E]" />
                        <span>{row.contextForge}</span>
                      </div>
                    </td>

                    {/* Traditional Electron Result */}
                    <td className="px-6 py-5 font-mono text-xs tabular-nums text-[#8C827A]">
                      <span className="line-through opacity-60">{row.electron}</span>
                    </td>

                    {/* Advantage Description */}
                    <td className="px-6 py-5 font-sans text-xs text-[#E6E0DD]">
                      <span className="inline-flex items-center gap-1.5 font-medium text-[#FBBF24]">
                        {row.advantage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Note */}
          <div className="border-t border-[#2A211D] bg-[#0D0A09] px-6 py-4 font-mono text-xs tabular-nums text-[#8C827A]">
            * Benchmarks measured on macOS Apple Silicon (M3 Pro, 18GB RAM) and Windows 11 (Core i7-13700H, 32GB RAM) running clean idle background workloads.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
