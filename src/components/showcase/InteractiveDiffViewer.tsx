'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MOCK_DIFF_FILE } from '@/data/mockDiffs';
import { Check, X, RotateCcw, FileCode, CheckCircle2, AlertCircle } from 'lucide-react';
import { BorderBeam } from '@/components/common/BorderBeam';

export function InteractiveDiffViewer() {
  const [acceptedHunks, setAcceptedHunks] = useState<Set<string>>(new Set());
  const [rejectedHunks, setRejectedHunks] = useState<Set<string>>(new Set());
  const [recentAcceptId, setRecentAcceptId] = useState<string | null>(null);

  const totalHunks = MOCK_DIFF_FILE.hunks.length;
  const acceptedCount = acceptedHunks.size;
  const rejectedCount = rejectedHunks.size;
  const pendingCount = totalHunks - acceptedCount - rejectedCount;

  const handleAccept = (hunkId: string) => {
    setRejectedHunks((prev) => {
      const next = new Set(prev);
      next.delete(hunkId);
      return next;
    });
    setAcceptedHunks((prev) => {
      const next = new Set(prev);
      if (next.has(hunkId)) {
        next.delete(hunkId);
      } else {
        next.add(hunkId);
        setRecentAcceptId(hunkId);
        setTimeout(() => setRecentAcceptId(null), 800);
      }
      return next;
    });
  };

  const handleReject = (hunkId: string) => {
    setAcceptedHunks((prev) => {
      const next = new Set(prev);
      next.delete(hunkId);
      return next;
    });
    setRejectedHunks((prev) => {
      const next = new Set(prev);
      if (next.has(hunkId)) {
        next.delete(hunkId);
      } else {
        next.add(hunkId);
      }
      return next;
    });
  };

  const handleReset = () => {
    setAcceptedHunks(new Set());
    setRejectedHunks(new Set());
    setRecentAcceptId(null);
  };

  return (
    <div className="relative rounded-2xl border border-[#2A211D] bg-[#16110F] shadow-2xl shadow-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden">
      {/* Diff Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2A211D] bg-[#1E1714]/80 px-5 py-4 sm:px-8">
        {/* File Path & Diff Stats */}
        <div className="flex items-center gap-2.5 font-mono text-xs">
          <FileCode className="h-4 w-4 text-[#8C827A]" />
          <span className="font-semibold text-[#E6E0DD]">{MOCK_DIFF_FILE.filePath}</span>
          <span className="rounded bg-[#143823] px-2 py-0.5 text-[11px] font-mono tabular-nums text-[#4ADE80]">
            +8
          </span>
          <span className="rounded bg-[#381414] px-2 py-0.5 text-[11px] font-mono tabular-nums text-[#F87171]">
            -5
          </span>
        </div>

        {/* Counter Indicators */}
        <div className="flex items-center gap-2.5 font-mono text-xs tabular-nums">
          {/* Accepted Counter */}
          <span className="inline-flex items-center gap-1.5 rounded border border-[#1B4D31] bg-[#143823]/60 px-3 py-1 text-[#4ADE80]">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>
              {acceptedCount} / {totalHunks} Accepted
            </span>
          </span>

          {/* Discarded Counter */}
          {rejectedCount > 0 && (
            <span className="inline-flex items-center gap-1.5 rounded border border-[#521E1E] bg-[#381414]/60 px-3 py-1 text-[#F87171]">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{rejectedCount} Discarded</span>
            </span>
          )}

          {/* Pending Counter */}
          <span className="rounded border border-[#2A211D] bg-[#1E1714] px-3 py-1 text-[#8C827A]">
            {pendingCount} of {totalHunks} Pending
          </span>

          {/* Reset Action */}
          {(acceptedCount > 0 || rejectedCount > 0) && (
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded border border-[#2A211D] bg-[#16110F] px-2.5 py-1 text-[11px] text-[#8C827A] hover:text-[#E6E0DD] hover:border-[#8C827A]/40 transition-colors"
              title="Reset Diffs"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Screen reader live status announcement */}
      <div aria-live="polite" className="sr-only">
        {acceptedCount} of {totalHunks} diff hunks currently accepted. {rejectedCount} discarded.
      </div>

      {/* Hunks Container */}
      <div className="divide-y divide-[#2A211D] p-5 sm:p-8 space-y-6">
        {MOCK_DIFF_FILE.hunks.map((hunk, index) => {
          const isAccepted = acceptedHunks.has(hunk.id);
          const isRejected = rejectedHunks.has(hunk.id);
          const isRecentlyAccepted = recentAcceptId === hunk.id;

          return (
            <div
              key={hunk.id}
              className={`relative rounded-xl border transition-all duration-300 overflow-hidden ${
                isRecentlyAccepted
                  ? 'border-[#22C55E] bg-[#143823]/40'
                  : isAccepted
                    ? 'border-[#2A211D] bg-[#16110F] shadow-sm'
                    : isRejected
                      ? 'border-[#521E1E]/60 bg-[#381414]/10 opacity-40 grayscale transition-opacity duration-300'
                      : 'border-[#2A211D] bg-[#0D0A09]'
              }`}
            >
              {/* Highlight Sweep Animation Layer on Accept */}
              {isRecentlyAccepted && (
                <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent animate-sweep" />
                </div>
              )}

              {/* Hunk Header Action Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2A211D] bg-[#1E1714]/80 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-semibold tabular-nums text-[#8C827A]">
                    Hunk {index + 1}
                  </span>
                  <div className="relative inline-block font-mono text-[11px] text-[#5A514B]">
                    <span>{hunk.header}</span>
                    {/* Animated Strike-Through Line on Reject */}
                    {isRejected && (
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-1/2 h-0.5 w-full bg-[#EF4444] origin-left"
                      />
                    )}
                  </div>
                </div>

                {/* Accept / Reject Action Buttons (Min 44px Touch Targets) */}
                <div className="flex w-full sm:w-auto items-center gap-2.5">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAccept(hunk.id)}
                    aria-label={`Accept hunk ${hunk.id} in ${MOCK_DIFF_FILE.filePath}`}
                    aria-pressed={isAccepted}
                    className={`flex-1 sm:flex-initial min-h-[44px] inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-mono text-xs font-medium transition-all ${
                      isAccepted
                        ? 'border border-[#22C55E] bg-[#22C55E] text-[#0D0A09] font-bold shadow-md shadow-[#22C55E]/20'
                        : 'border border-[#1B4D31] bg-[#143823] text-[#4ADE80] hover:bg-[#1B4D31]'
                    }`}
                  >
                    <Check className="h-4 w-4" />
                    <span>{isAccepted ? 'Accepted' : 'Accept Hunk'}</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleReject(hunk.id)}
                    aria-label={`Reject hunk ${hunk.id} in ${MOCK_DIFF_FILE.filePath}`}
                    aria-pressed={isRejected}
                    className={`flex-1 sm:flex-initial min-h-[44px] inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-mono text-xs font-medium transition-all ${
                      isRejected
                        ? 'border border-[#EF4444] bg-[#EF4444] text-white font-bold shadow-md shadow-[#EF4444]/20'
                        : 'border border-[#521E1E] bg-[#381414] text-[#F87171] hover:bg-[#521E1E]'
                    }`}
                  >
                    <X className="h-4 w-4" />
                    <span>{isRejected ? 'Discarded' : 'Reject Hunk'}</span>
                  </motion.button>
                </div>
              </div>

              {/* Code Lines Rendering */}
              <div className="touch-scroll-clean overflow-x-auto p-2 font-mono text-xs leading-relaxed">
                {hunk.lines.map((line) => {
                  // Determine line styles
                  let lineClass = 'bg-transparent text-[#8C827A]';
                  let numClass = 'text-[#5A514B]';
                  let marker = ' ';
                  let markerClass = 'text-transparent';

                  if (isAccepted) {
                    // Unified clean accepted rendering
                    lineClass = line.type === 'delete' ? 'hidden' : 'text-[#E6E0DD] bg-transparent';
                    numClass = 'text-[#5A514B]';
                    marker = ' ';
                  } else if (line.type === 'add') {
                    lineClass =
                      'bg-[#143823]/40 border-l-2 border-[#22C55E] text-[#E6E0DD]';
                    numClass = 'text-[#22C55E]/60';
                    marker = '+';
                    markerClass = 'text-[#4ADE80] font-bold';
                  } else if (line.type === 'delete') {
                    lineClass =
                      'bg-[#381414]/40 border-l-2 border-[#EF4444] text-[#E6E0DD]/70 line-through';
                    numClass = 'text-[#EF4444]/60';
                    marker = '-';
                    markerClass = 'text-[#F87171] font-bold';
                  }

                  if (isAccepted && line.type === 'delete') {
                    return null;
                  }

                  return (
                    <div
                      key={line.id}
                      className={`flex items-center px-2 py-0.5 rounded-sm transition-colors ${lineClass}`}
                    >
                      {/* Line Numbers */}
                      <span className={`w-8 select-none text-right font-mono text-[11px] ${numClass}`}>
                        {line.oldLineNumber || ''}
                      </span>
                      <span className={`w-8 select-none text-right font-mono text-[11px] ml-2 ${numClass}`}>
                        {line.newLineNumber || ''}
                      </span>

                      {/* Diff Sign Marker */}
                      <span className={`w-6 select-none text-center ${markerClass}`}>
                        {marker}
                      </span>

                      {/* Code Content */}
                      <pre className="flex-1 font-mono text-xs overflow-x-auto whitespace-pre">
                        {line.content}
                      </pre>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Cyber Hardware Accent Beam */}
      <BorderBeam size={280} duration={14} delay={3} colorFrom="#D97706" colorTo="#22C55E" borderWidth={1.5} />
    </div>
  );
}
