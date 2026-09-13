'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BorderBeam } from '@/components/common/BorderBeam';
import { Terminal, Shield, Square, Sparkles, Activity, Cpu, HardDrive } from 'lucide-react';

export function HeroMockup() {
  const [tokensPerSec, setTokensPerSec] = useState<number>(68);

  // Variable live throughput generation simulation (64 -> 72 -> 68 tok/s)
  useEffect(() => {
    const rates = [64, 71, 68, 74, 69, 72, 68];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % rates.length;
      setTokensPerSec(rates[idx]);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Ambient Radial Spotlight Layer */}
      <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#D97706]/15 via-[#22C55E]/10 to-transparent opacity-70 blur-2xl" />

      {/* Primary Milled Terminal Frame with Magic UI BorderBeam */}
      <div className="relative overflow-hidden rounded-2xl border border-[#2A211D] bg-[#16110F] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] shadow-2xl shadow-black">
        {/* Animated Border Beam Tracing Light */}
        <BorderBeam size={280} duration={8} borderWidth={1.5} colorFrom="#D97706" colorTo="#22C55E" />

        {/* Terminal Titlebar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#2A211D] bg-[#1E1714]/90 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3.5">
          {/* Left: Window Dots & Monogram */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="h-3 w-3 rounded-full border border-[#521E1E] bg-[#381414] transition-opacity hover:opacity-80" />
              <span className="h-3 w-3 rounded-full border border-[#59421D] bg-[#382A14] transition-opacity hover:opacity-80" />
              <span className="h-3 w-3 rounded-full border border-[#1B4D31] bg-[#143823] transition-opacity hover:opacity-80" />
            </div>
            <span className="ml-1 sm:ml-2 font-mono text-xs text-[#8C827A] flex items-center gap-1.5 truncate">
              <Cpu className="h-3.5 w-3.5 shrink-0 text-[#D97706]" />
              <span className="text-[#E6E0DD] font-medium truncate">contextforge://workspace/core-pipeline</span>
            </span>
          </div>

          {/* Center: Active Turn Status & Model */}
          <div className="hidden items-center gap-2.5 font-mono text-xs text-[#8C827A] lg:flex">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#2A211D] bg-[#1E1714] px-2.5 py-0.5 text-[11px] text-[#E6E0DD]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
              <span className="text-[#8C827A]">Model:</span>
              <span className="font-semibold text-[#E6E0DD]">BYOK Active [Claude • Gemini • DeepSeek]</span>
            </span>
            <span className="text-[#5A514B]">turn:</span>
            <span className="rounded bg-[#1E1714] px-2 py-0.5 text-[#E6E0DD] font-semibold border border-[#2A211D]">
              #3 (in-flight)
            </span>
          </div>

          {/* Right: Telemetry Live Gauges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono">
            {/* Queue Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#59421D] bg-[#382A14] px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-semibold text-[#FBBF24]">
              #1 Queued
            </span>

            {/* Live Telemetry Pill with Multi-Ring Pulsing LED */}
            <div className="inline-flex items-center gap-2 rounded-md border border-[#2A211D] bg-[#16110F] px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs text-[#4ADE80] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
              </span>
              <span className="font-bold tabular-nums font-mono">{tokensPerSec} tok/s</span>
            </div>
          </div>
        </div>

        {/* Terminal Body Grid */}
        <div className="grid grid-cols-1 divide-y divide-[#2A211D] lg:grid-cols-12 lg:divide-x lg:divide-y-0">
          {/* Execution Feed & Context Area */}
          <div className="p-4 sm:p-6 lg:p-8 font-mono text-xs leading-relaxed lg:col-span-8 overflow-hidden">
            {/* System Prompt / Rules Banner */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#2A211D] bg-[#1E1714]/80 px-4 py-2.5 text-xs text-[#8C827A]">
              <div className="flex items-center gap-2.5">
                <Shield className="h-4 w-4 shrink-0 text-[#D97706]" />
                <span className="truncate">
                  Active Rules:{' '}
                  <strong className="text-[#E6E0DD] font-semibold">.contextforgerules</strong> (Local Sovereign)
                </span>
              </div>
              <span className="inline-flex items-center gap-1 font-semibold text-[#4ADE80] shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                Enforced
              </span>
            </div>

            {/* Prompt Directive Bubble */}
            <div className="mb-5 rounded-xl border border-[#2A211D] bg-[#1E1714] p-4 text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-1.5 flex items-center justify-between text-[11px] font-mono text-[#8C827A]">
                <span className="text-[#D97706] font-bold">&gt; USER DIRECTIVE</span>
                <span className="tabular-nums">12:04:18.910</span>
              </div>
              <p className="font-sans text-sm text-[#E6E0DD] leading-relaxed">
                Refactor <code className="rounded bg-[#0D0A09] px-1.5 py-0.5 font-mono text-[#FBBF24]">telemetryEngine.ts</code> to measure sub-millisecond TTFT using <code className="rounded bg-[#0D0A09] px-1.5 py-0.5 font-mono text-[#FBBF24]">performance.now()</code> and hook into the physical hardware stop interrupt.
              </p>
            </div>

            {/* Live Streaming Execution Log */}
            <div className="space-y-2 rounded-xl border border-[#2A211D]/80 bg-[#0D0A09] p-4 sm:p-5 text-[12px] overflow-hidden">
              <div className="flex flex-wrap items-center gap-2 text-[#8C827A]">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#FBBF24]" />
                <span className="font-semibold text-[#E6E0DD]">Active Engine: Claude 3.7 / Ollama Local (Dual Engine):</span>
                <span className="text-[11px] text-[#5A514B]">TTFT 14.8ms • Zero Cloud Storage</span>
              </div>

              <div className="mt-3 font-mono text-xs text-[#8C827A] space-y-1">
                <p className="text-[#E6E0DD]">
                  Writing atomic snapshot <span className="text-[#4ADE80] font-semibold">turn-003.snap</span> to local cache...
                </p>
                <p className="text-[#8C827A]">
                  Scanning working tree: <span className="text-[#E6E0DD] font-semibold">1 file staged for hunk inspection</span>.
                </p>
              </div>

              {/* Code Diff Preview Strip inside Mockup with Touch Scroll */}
              <div className="mt-4 overflow-hidden rounded-lg border border-[#2A211D] bg-[#16110F] text-xs">
                <div className="border-b border-[#2A211D] bg-[#1E1714] px-4 py-2 text-[11px] text-[#8C827A] font-semibold">
                  diff --git a/src/core/telemetryEngine.ts b/src/core/telemetryEngine.ts
                </div>
                <div className="divide-y divide-[#2A211D]/40 font-mono text-[11px] leading-normal overflow-x-auto touch-scroll-clean">
                  <div className="flex items-center bg-[#381414]/40 px-4 py-1.5 text-[#F87171] min-w-[480px]">
                    <span className="w-8 select-none text-[#EF4444]/70 tabular-nums">- 18</span>
                    <span className="mr-2.5 font-bold">-</span>
                    <span className="line-through">public recordStart(): void &#123; this.startTime = Date.now(); &#125;</span>
                  </div>
                  <div className="flex items-center bg-[#143823]/40 px-4 py-1.5 text-[#4ADE80] min-w-[480px]">
                    <span className="w-8 select-none text-[#22C55E]/70 tabular-nums">+ 18</span>
                    <span className="mr-2.5 font-bold">+</span>
                    <span>public recordStart(): void &#123; this.highResStart = performance.now(); &#125;</span>
                  </div>
                  <div className="flex items-center bg-[#143823]/40 px-4 py-1.5 text-[#4ADE80] min-w-[480px]">
                    <span className="w-8 select-none text-[#22C55E]/70 tabular-nums">+ 19</span>
                    <span className="mr-2.5 font-bold">+</span>
                    <span>if (this.abortSignal?.aborted) throw new HardwareStopError();</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Telemetry HUD Panel */}
          <div className="flex flex-col justify-between bg-[#16110F] p-6 font-mono text-xs lg:col-span-4">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#8C827A] uppercase">
                  Telemetry Gauges
                </span>
                <div className="mt-3 space-y-3">
                  <div className="rounded-lg border border-[#2A211D] bg-[#1E1714] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex justify-between text-xs text-[#8C827A]">
                      <span>Time-to-First-Token</span>
                      <span className="font-bold text-[#4ADE80] tabular-nums">14.8 ms</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#0D0A09]">
                      <div className="h-full w-[15%] bg-[#22C55E]" />
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#2A211D] bg-[#1E1714] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex justify-between text-xs text-[#8C827A]">
                      <span>Context Window</span>
                      <span className="font-bold text-[#E6E0DD] tabular-nums">2,410 / 128k</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#0D0A09]">
                      <div className="h-full w-[1.8%] bg-[#D97706]" />
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#2A211D] bg-[#1E1714] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex justify-between text-xs text-[#8C827A]">
                      <span>Local Idle Memory</span>
                      <span className="font-bold text-[#4ADE80] tabular-nums">42.4 MB</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#0D0A09]">
                      <div className="h-full w-[8%] bg-[#22C55E]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Machine Snapshot Status */}
              <div>
                <span className="text-xs font-bold tracking-widest text-[#8C827A] uppercase">
                  Time Machine Rollback
                </span>
                <div className="mt-3 rounded-lg border border-[#2A211D] bg-[#1E1714] p-3.5 text-xs">
                  <div className="flex items-center justify-between text-[#8C827A]">
                    <span>Snapshot State:</span>
                    <span className="text-[#4ADE80] font-semibold">Clean Cached</span>
                  </div>
                  <div className="mt-1 text-[11px] text-[#5A514B]">
                    1-Click Rollback armed for Turn #3
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Hardware Control Buttons */}
            <div className="mt-6 pt-5 border-t border-[#2A211D] flex items-center justify-between gap-3">
              <button
                type="button"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-[#521E1E] bg-[#381414] px-4 py-2.5 text-xs font-semibold text-[#F87171] transition-colors hover:bg-[#521E1E]"
              >
                <Square className="h-3.5 w-3.5 fill-current" />
                <span>Stop Stream</span>
              </button>
              <div className="rounded-lg border border-[#2A211D] bg-[#1E1714] px-3 py-2.5 text-xs font-mono text-[#8C827A]">
                Ctrl + .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
