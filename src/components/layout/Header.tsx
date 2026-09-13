'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useOperatingSystem } from '@/hooks/useOperatingSystem';
import { LATEST_VERSION } from '@/data/releases';
import { Download, Menu, X, Terminal, Cpu } from 'lucide-react';

export function Header() {
  const isScrolled = useScrollPosition(20);
  const os = useOperatingSystem();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Proof of Control', href: '#showcase' },
    { label: 'Benchmarks', href: '#benchmarks' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Downloads', href: '#downloads' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'border-b border-[#2A211D] bg-[#0D0A09]/85 backdrop-blur-md shadow-lg shadow-black/40'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logomark & Name */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-transform duration-150 active:scale-[0.98]"
            aria-label="ContextForge Home"
          >
            {/* Tactical Hexagonal Monogram Icon */}
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A211D] bg-[#16110F] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors group-hover:border-[#D97706]/40 group-hover:bg-[#1E1714]">
              <Cpu className="h-4.5 w-4.5 text-[#E6E0DD] transition-colors group-hover:text-[#FBBF24]" />
            </div>

            <div className="flex flex-col">
              <span className="font-sans text-base font-bold tracking-tight text-[#E6E0DD]">
                ContextForge
              </span>
            </div>
          </Link>

          {/* Release Version Pill (Visible on both mobile & desktop) */}
          <Link
            href="#downloads"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#2A211D] bg-[#16110F] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#8C827A] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#8C827A]/40 hover:text-[#E6E0DD]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            <span>v{LATEST_VERSION}</span>
          </Link>
        </div>

        {/* Center: Desktop Nav Links (Hidden < 768px) */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-[#2A211D]/80 bg-[#16110F]/70 px-4 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:flex"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1 font-sans text-xs font-medium text-[#8C827A] transition-colors hover:bg-[#1E1714] hover:text-[#E6E0DD]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Dynamic OS Download CTA (Desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`/api/download?platform=${os.platform === 'unknown' ? 'windows' : os.platform}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-xl border border-[#2A211D] bg-[#16110F] px-4 py-2 font-mono text-xs font-medium text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-150 hover:border-[#D97706]/50 hover:bg-[#1E1714] active:scale-[0.98]"
          >
            <Download className="h-3.5 w-3.5 text-[#8C827A] transition-colors group-hover:text-[#4ADE80]" />
            <span>
              {os.isDetected
                ? `Download ${os.extension ? `(${os.extension})` : ''}`
                : 'Get ContextForge Free'}
            </span>
          </a>
        </div>

        {/* Mobile Actions: Compact Tactile Download Pill & Menu Drawer Toggle (< 768px) */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`/api/download?platform=${os.platform === 'unknown' ? 'windows' : os.platform}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#2A211D] bg-[#16110F] px-3 py-1.5 font-mono text-xs font-medium text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] active:scale-95 transition-colors hover:border-[#D97706]/40"
            aria-label="Download ContextForge binary"
          >
            <Download className="h-3.5 w-3.5 text-[#D97706]" />
            <span>Download</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A211D] bg-[#16110F] text-[#8C827A] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:text-[#E6E0DD]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#2A211D] bg-[#0D0A09] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border border-[#2A211D]/50 bg-[#16110F] px-4 py-2.5 font-sans text-sm font-medium text-[#8C827A] hover:bg-[#1E1714] hover:text-[#E6E0DD]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`/api/download?platform=${os.platform === 'unknown' ? 'windows' : os.platform}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#E6E0DD] px-4 py-2.5 font-sans text-sm font-semibold text-[#0D0A09] transition-all hover:bg-white"
            >
              <Download className="h-4 w-4" />
              <span>Get ContextForge Free</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
