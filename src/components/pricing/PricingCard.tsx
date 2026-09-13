'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/common/SpotlightCard';
import { BorderBeam } from '@/components/common/BorderBeam';
import { ShimmerButton } from '@/components/common/ShimmerButton';
import { Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface PricingCardProps {
  badge: string;
  name: string;
  price: string;
  pricePeriod?: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  isFeatured?: boolean;
}

export function PricingCard({
  badge,
  name,
  price,
  pricePeriod,
  tagline,
  features,
  ctaText,
  ctaHref,
  isFeatured = false,
}: PricingCardProps) {
  return (
    <SpotlightCard
      className={`p-8 lg:p-10 flex flex-col justify-between min-h-[580px] relative ${
        isFeatured
          ? 'border-[#D97706]/70 bg-[#16110F] shadow-2xl shadow-black/80 ring-1 ring-[#D97706]/40'
          : 'border-[#2A211D] bg-[#16110F]'
      }`}
      glowColor={isFeatured ? 'rgba(217, 119, 6, 0.15)' : 'rgba(217, 119, 6, 0.05)'}
    >
      {/* Magic UI Border Beam on Featured Card */}
      {isFeatured && (
        <BorderBeam size={240} duration={9} borderWidth={1.5} colorFrom="#D97706" colorTo="#22C55E" />
      )}

      <div>
        {/* Badge & Plan Name */}
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center rounded-full px-3.5 py-1 font-mono text-xs font-semibold tracking-wider ${
              isFeatured
                ? 'border border-[#59421D] bg-[#382A14] text-[#FBBF24]'
                : 'border border-[#2A211D] bg-[#1E1714] text-[#8C827A]'
            }`}
          >
            {badge}
          </span>
          {isFeatured && (
            <span className="flex items-center gap-1.5 font-mono text-xs text-[#22C55E]">
              <ShieldCheck className="h-4 w-4" />
              <span>Recommended</span>
            </span>
          )}
        </div>

        <h3 className="mt-5 font-sans text-3xl font-bold tracking-tight text-[#E6E0DD]">
          {name}
        </h3>
        <p className="mt-2 font-sans text-sm text-[#8C827A] leading-relaxed">
          {tagline}
        </p>

        {/* Price Display */}
        <div className="mt-6 flex items-baseline gap-2.5 border-y border-[#2A211D] py-6 font-mono">
          <span className="font-sans text-5xl font-extrabold tracking-tight tabular-nums text-[#E6E0DD]">
            {price}
          </span>
          {pricePeriod && (
            <span className="font-mono text-xs text-[#8C827A]">{pricePeriod}</span>
          )}
        </div>

        {/* Feature Checklist */}
        <div className="mt-8">
          <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#8C827A] uppercase">
            Included Capabilities
          </span>
          <ul className="mt-5 space-y-3.5 font-sans text-sm text-[#E6E0DD]">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check
                  className={`h-4 w-4 shrink-0 mt-0.5 ${
                    isFeatured ? 'text-[#22C55E]' : 'text-[#8C827A]'
                  }`}
                />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 pt-6 border-t border-[#2A211D]">
        {isFeatured ? (
          <Link href={ctaHref} className="block w-full">
            <ShimmerButton
              shimmerColor="#FBBF24"
              shimmerDuration="3s"
              borderRadius="12px"
              className="w-full py-3.5"
            >
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
            </ShimmerButton>
          </Link>
        ) : (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a
              href={ctaHref}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#2A211D] bg-[#1E1714] px-6 py-3.5 font-mono text-xs font-semibold text-[#8C827A] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all hover:border-[#8C827A]/40 hover:text-[#E6E0DD]"
            >
              <Clock className="h-3.5 w-3.5 text-[#D97706]" />
              <span>{ctaText}</span>
            </a>
          </motion.div>
        )}
      </div>
    </SpotlightCard>
  );
}
