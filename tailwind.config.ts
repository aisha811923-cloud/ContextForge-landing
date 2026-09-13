import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          base: '#0D0A09',     // Canvas background
          card: '#16110F',     // Level 1 card surface
          active: '#1E1714',   // Level 2 input/active surface
          border: '#2A211D',   // Structural 1px border
          subtle: '#1F1815',   // Subdued card border
        },
        bone: {
          primary: '#E6E0DD',  // High-contrast primary text
          muted: '#8C827A',    // Taupe secondary text
          dim: '#5A514B',      // Tertiary line numbers
        },
        hardware: {
          emerald: '#22C55E',  // Additions & online status
          'emerald-bg': '#143823',
          crimson: '#EF4444',  // Deletions & stop triggers
          'crimson-bg': '#381414',
          amber: '#D97706',    // Hotkey badges & focus rings
          'amber-bg': '#382A14',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-geist-sans)', 'var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono-code)', 'var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'hardware-rim': 'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
        'hardware-subtle': 'inset 0 1px 0 rgba(255, 255, 255, 0.02)',
        'shimmer-inset': 'inset 0 -8px 10px rgba(255, 255, 255, 0.12)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        'shimmer-slide': {
          to: { transform: 'translate(calc(100cqw - 100%), 0)' },
        },
        'spin-around': {
          '0%': { transform: 'translateZ(0) rotate(0)' },
          '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
          '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
          '100%': { transform: 'translateZ(0) rotate(360deg)' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
    },
  },
  plugins: [],
};

export default config;
