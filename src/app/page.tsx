'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/hero/HeroSection';
import { ControlShowcase } from '@/components/showcase/ControlShowcase';
import { BentoGrid } from '@/components/features/BentoGrid';
import { ResourceTable } from '@/components/benchmarks/ResourceTable';
import { PricingSection } from '@/components/pricing/PricingSection';
import { DownloadMatrix } from '@/components/downloads/DownloadMatrix';
import { FAQSection } from '@/components/faq/FAQSection';
import { Footer } from '@/components/layout/Footer';
import { HotkeyModal } from '@/components/common/HotkeyModal';

export default function LandingPage() {
  const [isHotkeyModalOpen, setIsHotkeyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0A09] text-[#E6E0DD] antialiased selection:bg-[#382A14] selection:text-[#FBBF24] overflow-x-hidden">
      {/* Sticky Global Navigation Header */}
      <Header />

      {/* Main Sections Hierarchy */}
      <main>
        {/* Section 1: Hero with Dynamic CTA & Live Terminal Mockup */}
        <HeroSection />

        {/* Section 2: Proof of Control Interactive Sandbox */}
        <ControlShowcase />

        {/* Section 3: Feature Bento Grid (6 Pillars) */}
        <BentoGrid />

        {/* Section 4: Tauri v2 vs Electron Resource Benchmarks */}
        <ResourceTable />

        {/* Section 5: Transparent Pricing ($0 BYOK & Teams Preview) */}
        <PricingSection />

        {/* Section 6: Multi-Platform Download Matrix & Checksums */}
        <DownloadMatrix />

        {/* Section 7: Technical Objection Handling FAQ */}
        <FAQSection />
      </main>

      {/* Global Site Footer */}
      <Footer onOpenHotkeys={() => setIsHotkeyModalOpen(true)} />

      {/* Desktop Keyboard Shortcuts Modal Sheet */}
      <HotkeyModal
        isOpen={isHotkeyModalOpen}
        onClose={() => setIsHotkeyModalOpen(false)}
      />
    </div>
  );
}
