'use client';

import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 30,
  className = '',
  maxOpacity = 0.5,
  duration = 4,
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getPos = useCallback((): [number, number] => {
    return [
      Math.floor((Math.random() * (dimensions.width || 1200)) / width),
      Math.floor((Math.random() * (dimensions.height || 800)) / height),
    ];
  }, [dimensions.width, dimensions.height, width, height]);

  const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>(() => {
    return Array.from({ length: numSquares }, (_, i) => ({
      id: i,
      pos: [
        Math.floor((Math.random() * 1200) / width),
        Math.floor((Math.random() * 800) / height),
      ],
    }));
  });

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(
        Array.from({ length: numSquares }, (_, i) => ({
          id: i,
          pos: getPos(),
        }))
      );
    }
  }, [dimensions, numSquares, getPos]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-[#D97706]/10 stroke-[#2A211D]/30 ${className}`}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [sqX, sqY], id: sqId }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: 'reverse',
            }}
            onAnimationComplete={() => {
              setSquares((prev) =>
                prev.map((sq) => (sq.id === sqId ? { ...sq, pos: getPos() } : sq))
              );
            }}
            key={`${sqX}-${sqY}-${index}`}
            width={width - 1}
            height={height - 1}
            x={sqX * width + 1}
            y={sqY * height + 1}
            fill="#D97706"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
