'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useOperatingSystem } from '@/hooks/useOperatingSystem';
import { RELEASES, LATEST_VERSION } from '@/data/releases';
import { ShimmerButton } from '@/components/common/ShimmerButton';
import { Download, ChevronRight, Apple, Monitor, Terminal } from 'lucide-react';

export function DynamicCTA() {
  const os = useOperatingSystem();

  // Determine targeted release asset based on client detection
  const primaryAsset =
    os.platform === 'windows'
      ? RELEASES.windows
      : os.platform === 'macos'
        ? RELEASES.macos
        : os.platform === 'linux'
          ? RELEASES.linux
          : null;

  const detectedPlatform = os.platform === 'unknown' ? 'windows' : os.platform;
  const downloadHref = `/api/download?platform=${detectedPlatform}`;

  const getPrimaryLabel = () => {
    if (!os.isDetected) return `Download ContextForge v${LATEST_VERSION}`;
    if (os.platform === 'windows') return 'Download for Windows (.exe)';
    if (os.platform === 'macos') return 'Download for macOS (Universal .dmg)';
    if (os.platform === 'linux') return 'Download for Linux (.AppImage)';
    return `Download ContextForge v${LATEST_VERSION}`;
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Primary Milled Tactical Action Button with Shimmer Physics */}
      <div className="flex flex-col items-center sm:flex-row gap-4">
        <a
          href={downloadHref}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="hero-primary-download"
          className="inline-block"
        >
          <ShimmerButton
            shimmerColor="#FBBF24"
            shimmerDuration="2.8s"
            borderRadius="14px"
            className="px-8 py-4 font-sans text-sm sm:text-base font-bold shadow-2xl"
          >
            <Download className="h-5 w-5 text-[#FBBF24] transition-transform duration-150 group-hover:-translate-y-0.5" />
            <span>{getPrimaryLabel()}</span>
          </ShimmerButton>
        </a>

        {/* View All Platforms Quick Link with Spring Hover */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        >
          <Link
            href="#downloads"
            className="inline-flex items-center gap-2 rounded-xl border border-[#2A211D] bg-[#16110F] px-6 py-4 font-mono text-xs sm:text-sm font-medium text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-150 hover:border-[#8C827A]/50 hover:bg-[#1E1714]"
          >
            <span>All Platforms</span>
            <ChevronRight className="h-4 w-4 text-[#8C827A]" />
          </Link>
        </motion.div>
      </div>

      {/* Secondary Platform Quick Selector Row */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs text-[#8C827A]">
        <span className="text-[#5A514B]">Also compiled for:</span>
        <a
          href="/api/download?platform=windows"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#8C827A] transition-colors hover:text-[#E6E0DD] hover:underline underline-offset-4"
        >
          <Monitor className="h-3.5 w-3.5" />
          <span>Windows</span>
          <span className="text-[#5A514B]">(.exe)</span>
        </a>
        <span className="text-[#5A514B]">•</span>
        <a
          href="/api/download?platform=macos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#8C827A] transition-colors hover:text-[#E6E0DD] hover:underline underline-offset-4"
        >
          <Apple className="h-3.5 w-3.5" />
          <span>macOS</span>
          <span className="text-[#5A514B]">(.dmg)</span>
        </a>
        <span className="text-[#5A514B]">•</span>
        <a
          href="/api/download?platform=linux"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#8C827A] transition-colors hover:text-[#E6E0DD] hover:underline underline-offset-4"
        >
          <Terminal className="h-3.5 w-3.5" />
          <span>Linux</span>
          <span className="text-[#5A514B]">(.AppImage)</span>
        </a>
      </div>
    </div>
  );
}
