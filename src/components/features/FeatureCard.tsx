import React from 'react';
import { SpotlightCard } from '@/components/common/SpotlightCard';

interface FeatureCardProps {
  pillarNumber: number;
  title: string;
  headline: string;
  description: string;
  icon: React.ReactNode;
  badgeText: string;
  badgeColor?: 'emerald' | 'amber' | 'crimson';
  className?: string;
  children?: React.ReactNode;
}

export function FeatureCard({
  pillarNumber,
  title,
  headline,
  description,
  icon,
  badgeText,
  badgeColor = 'amber',
  className = '',
  children,
}: FeatureCardProps) {
  const badgeClasses = {
    amber: 'border-[#59421D] bg-[#382A14] text-[#FBBF24]',
    emerald: 'border-[#1B4D31] bg-[#143823] text-[#4ADE80]',
    crimson: 'border-[#521E1E] bg-[#381414] text-[#F87171]',
  }[badgeColor];

  return (
    <SpotlightCard className={`p-8 lg:p-10 flex flex-col justify-between min-h-[340px] ${className}`}>
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A211D] bg-[#1E1714] text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              {icon}
            </div>
            <span className="font-mono text-xs tracking-wider text-[#8C827A]">
              PILLAR 0{pillarNumber}
            </span>
          </div>

          <span
            className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide tabular-nums ${badgeClasses}`}
          >
            {badgeText}
          </span>
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="font-sans text-2xl font-bold tracking-tight text-[#E6E0DD]">
            {title}
          </h3>
          <p className="mt-1.5 font-mono text-xs font-semibold text-[#D97706] uppercase tracking-wider">
            {headline}
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-[#8C827A]">
            {description}
          </p>
        </div>
      </div>

      {/* Optional Interactive Mini-Illustration / Visual Preview */}
      {children && <div className="mt-8 border-t border-[#2A211D]/80 pt-5">{children}</div>}
    </SpotlightCard>
  );
}
