'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Command, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenHotkeys?: () => void;
}

export function Footer({ onOpenHotkeys }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2A211D] bg-[#0D0A09] text-[#8C827A]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Main Footer Row */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand & Mission Statement */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="ContextForge Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A211D] bg-[#16110F] text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <Cpu className="h-5 w-5 text-[#E6E0DD]" />
              </div>
              <span className="font-sans text-lg font-bold text-[#E6E0DD]">
                ContextForge
              </span>
            </Link>
            <p className="mt-3 max-w-md font-sans text-xs text-[#8C827A] leading-relaxed">
              Local-first architecture. Your code never leaves your workstation to our servers.
            </p>
          </div>

          {/* Quick Links Group */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs sm:text-sm">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#E6E0DD]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-[#E6E0DD]"
            >
              Terms of Service
            </Link>

            {onOpenHotkeys && (
              <button
                type="button"
                onClick={onOpenHotkeys}
                className="inline-flex items-center gap-2 rounded-lg border border-[#2A211D] bg-[#16110F] px-3 py-1.5 font-mono text-xs text-[#8C827A] hover:border-[#8C827A]/40 hover:text-[#E6E0DD] transition-all"
              >
                <Command className="h-3.5 w-3.5 text-[#D97706]" />
                <span>Hotkeys (Alt + Space)</span>
              </button>
            )}
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A211D] bg-[#16110F] text-[#8C827A] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:bg-[#1E1714] hover:text-[#E6E0DD] hover:border-[#8C827A]/40 transition-all active:scale-95"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom Copyright & Security Seal */}
        <div className="mt-12 border-t border-[#2A211D]/50 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row font-mono text-xs tabular-nums text-[#5A514B]">
          <p>© 2026 ContextForge. All rights reserved. Proprietary commercial software.</p>
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            <span className="text-[#8C827A]">Tauri v2 • Rust • Zero Telemetry Retention</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
