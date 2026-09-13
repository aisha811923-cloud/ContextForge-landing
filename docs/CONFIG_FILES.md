# Core Configuration Files & Manifest Specs (`CONFIG_FILES.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Stack:** Next.js 15+ (App Router) / React 19 / TypeScript / Tailwind CSS v3/v4

---

## 1. Tailwind CSS Configuration (`tailwind.config.ts`)

```typescript
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
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'hardware-rim': 'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
        'hardware-subtle': 'inset 0 1px 0 rgba(255, 255, 255, 0.02)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 2. Next.js Configuration (`next.config.ts`)

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: [https://github.com](https://github.com)",
              "font-src 'self'",
              "connect-src 'self' [https://api.github.com](https://api.github.com) [https://github.com](https://github.com)",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

---

## 3. TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 4. Package Manifest (`package.json`)

```json
{
  "name": "contextforge-landing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.11.9",
    "lucide-react": "^0.453.0",
    "next": "15.0.1",
    "react": "19.0.0-rc-65e3b0f-20241020",
    "react-dom": "19.0.0-rc-65e3b0f-20241020",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@playwright/test": "^1.48.2",
    "@testing-library/react": "^16.0.1",
    "@types/node": "^20.17.0",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.11",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.1",
    "eslint-config-next": "15.0.1",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3",
    "vitest": "^2.1.3"
  }
}
```

---

## 5. PostCSS Configuration (`postcss.config.mjs`)

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```