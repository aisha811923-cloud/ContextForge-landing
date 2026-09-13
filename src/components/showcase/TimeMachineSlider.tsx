'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, RotateCcw, FileCode, Clock, ShieldCheck } from 'lucide-react';
import { BorderBeam } from '@/components/common/BorderBeam';

interface TurnData {
  index: number;
  label: string;
  badge: string;
  status: 'clean' | 'saved' | 'breaking';
  timestamp: string;
  description: string;
  buildStatus: 'passing' | 'ready' | 'failing';
  files: { name: string; status: 'clean' | 'modified' | 'broken'; lines: string }[];
}

const TURNS: TurnData[] = [
  {
    index: 0,
    label: 'Turn 1: Baseline',
    badge: 'Baseline State',
    status: 'clean',
    timestamp: '14:20:02.105',
    description: 'Working directory clean. All unit tests passing in Rust backend and frontend web engine.',
    buildStatus: 'passing',
    files: [
      { name: 'src/core/telemetryEngine.ts', status: 'clean', lines: '24 lines • Clean' },
      { name: 'src-tauri/src/bridge.rs', status: 'clean', lines: '88 lines • Clean' },
      { name: 'Cargo.toml', status: 'clean', lines: '18 dependencies • Locked' },
    ],
  },
  {
    index: 1,
    label: 'Turn 2: Snapshot Saved',
    badge: 'Pre-Mutation Snapshot Arm',
    status: 'saved',
    timestamp: '14:21:40.892',
    description: 'Autonomous pre-mutation atomic snapshot written to local disk cache (.contextforge/snapshots/turn-002.snap). Zero Git index pollution.',
    buildStatus: 'ready',
    files: [
      { name: 'src/core/telemetryEngine.ts', status: 'clean', lines: 'Snapshot hash: #f7a932' },
      { name: 'src-tauri/src/bridge.rs', status: 'clean', lines: 'Snapshot hash: #c81e9b' },
      { name: 'Cargo.toml', status: 'clean', lines: 'Snapshot hash: #110fa4' },
    ],
  },
  {
    index: 2,
    label: 'Turn 3: Breaking Turn (Revertible)',
    badge: 'Breaking Mutation',
    status: 'breaking',
    timestamp: '14:22:15.014',
    description: 'Model hallucinated obsolete import and triggered compilation failure. 1-Click Rollback armed to restore pre-mutation state in <16ms.',
    buildStatus: 'failing',
    files: [
      { name: 'src/core/telemetryEngine.ts', status: 'broken', lines: 'Error: Cannot find module "timer-shim"' },
      { name: 'src-tauri/src/bridge.rs', status: 'modified', lines: 'Unused import warning' },
      { name: 'Cargo.toml', status: 'clean', lines: 'Unmodified' },
    ],
  },
];

export function TimeMachineSlider() {
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(2);
  const [revertedMessage, setRevertedMessage] = useState<string | null>(null);

  const turn = TURNS[currentTurnIndex];

  const handleSliderKeyNav = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      setCurrentTurnIndex((prev) => Math.min(prev + 1, TURNS.length - 1));
      setRevertedMessage(null);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      setCurrentTurnIndex((prev) => Math.max(prev - 1, 0));
      setRevertedMessage(null);
    } else if (e.key === 'Home') {
      setCurrentTurnIndex(0);
      setRevertedMessage(null);
    } else if (e.key === 'End') {
      setCurrentTurnIndex(TURNS.length - 1);
      setRevertedMessage(null);
    }
  };

  const handleRevert = () => {
    // Revert to Turn 2 (snapshot saved state)
    setCurrentTurnIndex(1);
    setRevertedMessage('Restored atomic pre-mutation snapshot (Turn 2) in 11.4ms with zero Git reflog dirt.');
    setTimeout(() => {
      setRevertedMessage(null);
    }, 4000);
  };

  return (
    <div className="relative rounded-2xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {/* Top Header & Turn Selector Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2A211D] pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A211D] bg-[#1E1714] text-[#D97706] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <History className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold text-[#E6E0DD]">
              Time Machine Snapshot Engine
            </h3>
            <span className="font-mono text-xs text-[#8C827A]">
              1-Click Local Disk Rollback
            </span>
          </div>
        </div>

        {/* Turn Step Segmented Control */}
        <div
          role="slider"
          aria-label="Time Machine snapshot restore turn"
          aria-valuemin={0}
          aria-valuemax={2}
          aria-valuenow={currentTurnIndex}
          aria-valuetext={turn.label}
          tabIndex={0}
          onKeyDown={handleSliderKeyNav}
          className="flex items-center rounded-xl border border-[#2A211D] bg-[#0D0A09] p-1.5 font-mono text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D97706]"
        >
          {TURNS.map((t, idx) => (
            <motion.button
              key={t.index}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setCurrentTurnIndex(idx);
                setRevertedMessage(null);
              }}
              className={`min-h-[36px] min-w-[64px] sm:min-w-[74px] rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                currentTurnIndex === idx
                  ? 'bg-[#1E1714] text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] border border-[#2A211D]'
                  : 'text-[#8C827A] hover:text-[#E6E0DD]'
              }`}
            >
              Turn {idx + 1}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Snapshot Details Card */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Turn Log & Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={turn.index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 lg:col-span-7"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2A211D] bg-[#1E1714] px-3.5 py-1 font-mono text-xs text-[#E6E0DD]">
                <Clock className="h-3.5 w-3.5 text-[#8C827A]" />
                {turn.label}
              </span>
              <span className="font-mono text-xs tabular-nums text-[#5A514B]">{turn.timestamp}</span>
            </div>

            <p className="font-sans text-sm leading-relaxed text-[#8C827A]">
              {turn.description}
            </p>

            {/* Revert Trigger Button */}
            {currentTurnIndex === 2 ? (
              <div className="pt-2">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRevert}
                  className="group min-h-[44px] inline-flex items-center gap-2 rounded-xl border border-[#521E1E] bg-[#381414] px-5 py-2.5 font-mono text-xs font-semibold text-[#F87171] shadow-lg shadow-[#EF4444]/10 transition-all hover:border-[#EF4444] hover:bg-[#521E1E]"
                >
                  <RotateCcw className="h-4 w-4 transition-transform duration-200 group-hover:-rotate-45" />
                  <span>Revert Turn (Restore Snapshot)</span>
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center gap-2 font-mono text-xs text-[#4ADE80]">
                <ShieldCheck className="h-4 w-4 text-[#22C55E]" />
                <span>Snapshot armed. State verified intact.</span>
              </div>
            )}

            {revertedMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl border border-[#1B4D31] bg-[#143823]/80 p-4 font-mono text-xs text-[#4ADE80]"
              >
                {revertedMessage}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Affected File Tree Panel */}
        <div className="rounded-xl border border-[#2A211D] bg-[#0D0A09] p-5 lg:col-span-5">
          <div className="flex items-center justify-between border-b border-[#2A211D] pb-3 font-mono text-xs">
            <span className="text-[#8C827A]">Working Tree Status</span>
            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                turn.buildStatus === 'passing'
                  ? 'bg-[#143823] text-[#4ADE80] border border-[#1B4D31]'
                  : turn.buildStatus === 'ready'
                    ? 'bg-[#382A14] text-[#FBBF24] border border-[#59421D]'
                    : 'bg-[#381414] text-[#F87171] border border-[#521E1E]'
              }`}
            >
              {turn.buildStatus}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={turn.index}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 space-y-2.5 font-mono text-xs"
            >
              {turn.files.map((file) => (
                <div
                  key={file.name}
                  className="flex items-start justify-between rounded-lg border border-[#2A211D]/60 bg-[#16110F] p-2.5 transition-colors hover:border-[#8C827A]/40"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FileCode className="h-3.5 w-3.5 shrink-0 text-[#8C827A]" />
                    <span className="truncate text-[#E6E0DD] text-[11px]">{file.name}</span>
                  </div>
                  <span
                    className={`shrink-0 text-[10px] ml-2 ${
                      file.status === 'clean'
                        ? 'text-[#8C827A]'
                        : file.status === 'broken'
                          ? 'text-[#F87171] font-semibold'
                          : 'text-[#FBBF24]'
                    }`}
                  >
                    {file.lines}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Cyber Hardware Accent Beam */}
      <BorderBeam size={260} duration={16} delay={6} colorFrom="#22C55E" colorTo="#D97706" borderWidth={1.5} />
    </div>
  );
}
