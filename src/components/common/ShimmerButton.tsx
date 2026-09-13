'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ShimmerButtonProps extends HTMLMotionProps<'button'> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = '#FBBF24',
  shimmerSize = '0.05em',
  shimmerDuration = '3s',
  borderRadius = '12px',
  background = 'radial-gradient(ellipse 80% 50% at 50% 120%, rgba(217, 119, 6, 0.25), rgba(22, 17, 15, 1))',
  className = '',
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <motion.button
      style={
        {
          '--spread': '90deg',
          '--shimmer-color': shimmerColor,
          '--radius': borderRadius,
          '--speed': shimmerDuration,
          '--cut': shimmerSize,
          '--bg': background,
        } as React.CSSProperties
      }
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-[#2A211D] px-6 py-3.5 text-white [background:var(--bg)] [border-radius:var(--radius)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_20px_-5px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#D97706]/60 hover:shadow-[0_0_25px_rgba(217,119,6,0.35)] ${className}`}
      {...props}
    >
      {/* Spark Container */}
      <div className="absolute inset-0 overflow-visible [container-type:size]">
        {/* Spark Element */}
        <div className="absolute inset-0 h-[100cqh] animate-spin-around [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="animate-shimmer-slide absolute inset-[-100%] w-auto [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>

      {/* Backdrop Rim */}
      <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 font-sans text-sm font-semibold tracking-wide text-[#E6E0DD] group-hover:text-white transition-colors">
        {children}
      </span>
    </motion.button>
  );
}
