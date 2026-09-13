'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundGradientProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export function BackgroundGradient({
  children,
  className = '',
  containerClassName = '',
  animate = true,
}: BackgroundGradientProps) {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0 50%', '100% 50%', '0 50%'],
    },
  };

  return (
    <div className={`relative p-[1px] group ${containerClassName}`}>
      {/* Blurred Ambient Glow Layer */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[1] opacity-40 group-hover:opacity-80 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#D97706,transparent),radial-gradient(circle_farthest-side_at_100%_0,#22C55E,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#F59E0B,transparent),radial-gradient(circle_farthest-side_at_0_0,#B45309,#16110F)]"
      />

      {/* Sharp Perimeter Highlight Layer */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#D97706,transparent),radial-gradient(circle_farthest-side_at_100%_0,#22C55E,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#F59E0B,transparent),radial-gradient(circle_farthest-side_at_0_0,#B45309,#16110F)]"
      />

      {/* Main Inner Content */}
      <div className={`relative z-10 rounded-[inherit] ${className}`}>
        {children}
      </div>
    </div>
  );
}
