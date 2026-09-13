'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReleaseAsset } from '@/types';
import { useClipboard } from '@/hooks/useClipboard';
import { SpotlightCard } from '@/components/common/SpotlightCard';
import {
  Download,
  Copy,
  Check,
  Terminal,
  ChevronDown,
  ChevronUp,
  HardDrive,
} from 'lucide-react';

interface PlatformCardProps {
  asset: ReleaseAsset;
  icon: React.ReactNode;
  specs: string;
  buttonLabel: string;
}

export function PlatformCard({
  asset,
  icon,
  specs,
  buttonLabel,
}: PlatformCardProps) {
  const { copy: copyHash, copied: copiedHash } = useClipboard(2000);
  const { copy: copyInstall, copied: copiedInstall } = useClipboard(2000);
  const [showInstallCommand, setShowInstallCommand] = useState(false);

  return (
    <SpotlightCard className="p-8 lg:p-10 flex flex-col justify-between min-h-[460px]">
      <div>
        {/* Card Header: Platform Monogram & Size Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#2A211D] bg-[#1E1714] text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              {icon}
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold text-[#E6E0DD]">
                {asset.osName}
              </h3>
              <span className="font-mono text-xs text-[#8C827A]">{asset.format}</span>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2A211D] bg-[#1E1714] px-3 py-1 font-mono text-xs font-medium tabular-nums text-[#4ADE80]">
            <HardDrive className="h-3.5 w-3.5" />
            <span>{asset.fileSize}</span>
          </span>
        </div>

        {/* Technical Specs Summary */}
        <p className="mt-5 font-mono text-xs text-[#8C827A] leading-relaxed">
          {specs}
        </p>

        {/* Primary Binary Download Link Button */}
        <div className="mt-7">
          <motion.a
            href={`/api/download?platform=${asset.platform}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`download-${asset.platform}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group min-h-[48px] inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E6E0DD] px-5 py-3.5 font-sans text-sm font-semibold text-[#0D0A09] shadow-lg shadow-black/40 transition-all duration-150 hover:bg-[#FFFFFF]"
          >
            <Download className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5" />
            <span>{buttonLabel}</span>
          </motion.a>

          {/* Secondary Package Pills */}
          {asset.secondaryPackages && asset.secondaryPackages.length > 0 && (
            <div className="mt-3.5 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-[#5A514B]">Formats:</span>
              {asset.secondaryPackages.map((pkg) => {
                const cleanFormat = pkg.format.replace(/^\./, '');
                return (
                  <motion.a
                    key={pkg.format}
                    href={`/api/download?platform=${asset.platform}&format=${cleanFormat}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[#2A211D] bg-[#16110F] px-3 py-1.5 font-mono text-xs text-[#8C827A] hover:border-[#D97706]/40 hover:bg-[#1E1714] hover:text-[#E6E0DD] transition-colors"
                    title={`Download ${pkg.label}`}
                  >
                    <Download className="h-3 w-3 text-[#D97706]" />
                    <span>{pkg.format}</span>
                  </motion.a>
                );
              })}
            </div>
          )}
        </div>

        {/* SHA-256 Checksum Pill with Full-Width Touch-Friendly Copy Area */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#8C827A] mb-2">
            <span>SHA-256 Checksum</span>
            <span className="text-[#5A514B]">
              {copiedHash ? 'Copied to clipboard!' : 'Click to copy hash'}
            </span>
          </div>

          <button
            type="button"
            data-testid="copy-sha256"
            onClick={() => copyHash(asset.sha256)}
            title="Click to copy SHA-256 hash"
            className="group flex min-h-[44px] w-full items-center justify-between gap-3 rounded-xl border border-[#2A211D] bg-[#0D0A09] px-3.5 py-2.5 font-mono text-xs tabular-nums transition-all hover:border-[#8C827A]/60 hover:bg-[#1E1714] active:scale-[0.99]"
          >
            <span className="truncate text-left text-[#8C827A] group-hover:text-[#E6E0DD] font-mono text-[11px] sm:text-xs">
              {asset.sha256}
            </span>
            <span className="shrink-0 text-[#8C827A]">
              {copiedHash ? (
                <span className="inline-flex items-center gap-1 text-[#4ADE80] font-semibold text-xs">
                  <Check className="h-4 w-4" />
                  <span>Copied!</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-md border border-[#2A211D] bg-[#16110F] px-2.5 py-1 text-[11px] text-[#8C827A] group-hover:text-[#E6E0DD] group-hover:border-[#8C827A]/40 transition-colors">
                  <Copy className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Copy SHA-256</span>
                  <span className="sm:hidden">Copy</span>
                </span>
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Terminal Command Toggle */}
      {asset.installCommand && (
        <div className="mt-6 border-t border-[#2A211D] pt-5">
          <button
            type="button"
            onClick={() => setShowInstallCommand(!showInstallCommand)}
            className="flex w-full items-center justify-between font-mono text-xs text-[#8C827A] hover:text-[#E6E0DD] transition-colors"
          >
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5" />
              <span>One-Line Terminal Install</span>
            </div>
            {showInstallCommand ? (
              <ChevronUp className="h-3.5 w-3.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" />
            )}
          </button>

          {showInstallCommand && (
            <div className="mt-3.5 relative rounded-xl border border-[#2A211D] bg-[#0D0A09] p-3 font-mono text-xs">
              <pre className="text-[#E6E0DD] overflow-x-auto whitespace-pre-wrap break-all pr-8">
                {asset.installCommand}
              </pre>
              <button
                type="button"
                onClick={() => copyInstall(asset.installCommand!)}
                className="absolute right-2.5 top-2.5 rounded-lg p-1.5 text-[#8C827A] hover:bg-[#1E1714] hover:text-[#E6E0DD] transition-colors"
                title="Copy Terminal Command"
              >
                {copiedInstall ? (
                  <Check className="h-3.5 w-3.5 text-[#4ADE80]" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </SpotlightCard>
  );
}
