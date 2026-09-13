'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlatformCard } from './PlatformCard';
import { RELEASES } from '@/data/releases';
import { Monitor, Apple, Terminal, Download } from 'lucide-react';

export function DownloadMatrix() {
  return (
    <section id="downloads" className="relative py-24 sm:py-32 lg:py-36 overflow-hidden">
      {/* Subtle Ambient Light Well */}
      <div className="pointer-events-none absolute left-1/3 bottom-1/4 h-96 w-[600px] rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.05),transparent_70%)] blur-3xl" />

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
            <Download className="h-3.5 w-3.5" />
            <span>RELEASE ARTIFACTS</span>
          </div>

          <h2 className="mt-5 font-sans text-4xl font-bold tracking-tight text-[#E6E0DD] sm:text-6xl">
            Ready to deploy. Choose your platform.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#8C827A] sm:text-lg">
            Standalone, codesigned binaries compiled with native Rust via Tauri v2. Zero runtime web server dependencies.
          </p>
        </motion.div>

        {/* 3-Platform Download Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10"
        >
          {/* Windows Platform Card */}
          <PlatformCard
            asset={RELEASES.windows}
            icon={<Monitor className="h-6 w-6 text-[#E6E0DD]" />}
            specs="64-bit • Windows 10 / 11 • Automatic WebView2 detection"
            buttonLabel="Download Windows Installer"
          />

          {/* macOS Platform Card */}
          <PlatformCard
            asset={RELEASES.macos}
            icon={<Apple className="h-6 w-6 text-[#E6E0DD]" />}
            specs="Apple Silicon (M1/M2/M3/M4) & Intel • macOS 11.0+"
            buttonLabel="Download macOS Disk Image"
          />

          {/* Linux Platform Card */}
          <PlatformCard
            asset={RELEASES.linux}
            icon={<Terminal className="h-6 w-6 text-[#E6E0DD]" />}
            specs="x86_64 • WebKitGTK 4.1 • Ubuntu, Debian, Fedora, Arch"
            buttonLabel="Download Linux AppImage"
          />
        </motion.div>


      </div>
    </section>
  );
}
