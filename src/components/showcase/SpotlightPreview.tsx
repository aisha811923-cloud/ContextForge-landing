'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Command, CornerDownLeft, Terminal, Shield } from 'lucide-react';

export function SpotlightPreview() {
  const [activeQuery, setActiveQuery] = useState('Refactor telemetryEngine.ts to support hardware interrupt');

  return (
    <div className="relative rounded-2xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {/* Container Intro */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#2A211D] pb-5">
        <div>
          <h3 className="font-sans text-base font-semibold text-[#E6E0DD]">
            Global Spotlight Summon HUD
          </h3>
          <p className="font-mono text-xs text-[#8C827A]">
            Summonable anywhere across Windows, macOS, and Linux
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-lg border border-[#2A211D] bg-[#1E1714] px-3 py-1.5 font-mono text-xs text-[#8C827A]">
          <span>Hotkey:</span>
          <kbd className="rounded-md bg-[#0D0A09] px-2 py-0.5 text-xs font-semibold text-[#E6E0DD] shadow-inner">
            Alt + Space
          </kbd>
        </div>
      </div>

      {/* Simulated Code Editor Backdrop with Floating Spotlight HUD */}
      <div className="relative min-h-[360px] rounded-xl border border-[#2A211D] bg-[#0D0A09] p-6 font-mono text-xs overflow-hidden">
        {/* Dimmed Background Code Simulator */}
        <div className="pointer-events-none opacity-20 select-none leading-relaxed text-[#8C827A]">
          <p>import &#123; TauriBridge &#125; from &apos;@contextforge/core&apos;;</p>
          <p>export class WorkspaceGovernor &#123;</p>
          <p>  private readonly activeRules = &apos;.contextforgerules&apos;;</p>
          <p>  public async streamTurn(prompt: string): Promise&lt;void&gt; &#123;</p>
          <p>    const session = await TauriBridge.spawnLocalSession();</p>
          <p>    return session.executeDirectives(prompt);</p>
          <p>  &#125;</p>
          <p>&#125;</p>
        </div>

        {/* Floating Spotlight Command Bar with Glowing Ring & Shimmer */}
        <div className="absolute inset-x-4 top-8 sm:inset-x-12 sm:top-12 mx-auto max-w-2xl rounded-2xl border border-[#2A211D] bg-[#16110F] shadow-2xl shadow-black ring-1 ring-[#D97706]/30 overflow-hidden">
          {/* Input Bar */}
          <div className="flex items-center gap-3 border-b border-[#2A211D] px-5 py-3.5">
            <Search className="h-4 w-4 shrink-0 text-[#D97706]" />
            <input
              type="text"
              value={activeQuery}
              onChange={(e) => setActiveQuery(e.target.value)}
              placeholder="Ask ContextForge or execute command..."
              className="w-full bg-transparent font-sans text-sm text-[#E6E0DD] placeholder-[#5A514B] focus:outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 rounded-md border border-[#2A211D] bg-[#1E1714] px-2 py-0.5 text-[11px] text-[#8C827A]">
              <span>Enter</span>
              <CornerDownLeft className="h-2.5 w-2.5" />
            </kbd>
          </div>

          {/* Quick Context Chips */}
          <div className="flex items-center justify-between border-b border-[#2A211D]/60 bg-[#1E1714]/40 px-5 py-2.5 font-mono text-[11px] text-[#8C827A]">
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3 text-[#22C55E]" />
              <span>Workspace: ~/core-api (14 files indexed)</span>
            </div>
            <span className="text-[#4ADE80] font-medium">Gemini 2.0 Streaming</span>
          </div>

          {/* Action Suggestions List */}
          <div className="p-2 space-y-1.5 font-sans text-xs">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between rounded-xl bg-[#1E1714] px-4 py-2.5 text-[#E6E0DD] cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-[#FBBF24]" />
                <span className="font-medium">Execute Prompt & Stage Hunks</span>
              </div>
              <span className="font-mono text-[11px] tabular-nums text-[#8C827A]">Queue #1</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between rounded-xl px-4 py-2.5 text-[#8C827A] hover:bg-[#1E1714]/60 hover:text-[#E6E0DD] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Terminal className="h-4 w-4 text-[#8C827A]" />
                <span>Revert to Turn 2 Pre-Mutation Snapshot</span>
              </div>
              <span className="font-mono text-[11px] text-[#5A514B]">Ctrl + Shift + Z</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between rounded-xl px-4 py-2.5 text-[#8C827A] hover:bg-[#1E1714]/60 hover:text-[#E6E0DD] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Command className="h-4 w-4 text-[#8C827A]" />
                <span>Reload .contextforgerules Workspace Boundaries</span>
              </div>
              <span className="font-mono text-[11px] text-[#5A514B]">Ctrl + K</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
