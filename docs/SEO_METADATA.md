# Search Engine Optimization & Social Graph Specifications (`docs/SEO_METADATA.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Canonical Domain:** `https://contextforge.dev`  
**Document Version:** 1.0.0  
**Target Search Profile:** High-intent technical developers, systems engineers, and local-first AI practitioners

---

## 1. Master Metadata & OpenGraph Configuration

### 1.1 Programmatic Metadata Export (`src/app/layout.tsx`)
```typescript
import type { Metadata } from 'next';

const BASE_URL = '[https://contextforge.dev](https://contextforge.dev)';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ContextForge — Local-First AI Workspace Architect & Code Execution Engine',
    template: '%s | ContextForge',
  },
  description:
    'Proprietary native desktop AI architect with real-time Gemini streaming, Time Machine turn rollbacks, hunk-by-hunk diff inspection, and offline Ollama fallback. Zero cloud workspace retention.',
  applicationName: 'ContextForge',
  authors: [{ name: 'ContextForge Systems', url: BASE_URL }],
  generator: 'Next.js',
  keywords: [
    'local-first AI',
    'AI coding agent',
    'Tauri v2 desktop',
    'code diff inspector',
    'turn rollback',
    'offline LLM',
    'Ollama desktop tool',
    'Gemini API coding assistant',
    'BYOK developer tools',
    'Rust desktop editor',
    'non-blocking prompt queue',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'ContextForge Systems',
  publisher: 'ContextForge Systems',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'ContextForge',
    title: 'ContextForge — The Local-First AI Agent That Never Overwrites Your Code',
    description:
      'Native desktop AI workspace architect. Real-time Gemini streaming, automated pre-mutation snapshots, per-hunk diff review, and local Ollama fallback. 100% local workspace storage.',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'ContextForge — Dark Espresso Desktop AI Workspace Architect Mockup',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContextForge — Local-First AI Desktop Architect',
    description:
      'Review diffs hunk-by-hunk. Roll back breaking turns in one click. Native Rust desktop client for Windows, macOS, and Linux.',
    images: ['/og-preview.png'],
    creator: '@contextforge',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
};
```

---

## 2. Structured Data: `SoftwareApplication` JSON-LD

Injected into the root `<head>` of `src/app/layout.tsx` to ensure search engines display rich software badges, verified download links, price tier ($0.00), and operating system coverage:

```html
<script type="application/ld+json">
{
  "@context": "[https://schema.org](https://schema.org)",
  "@type": "SoftwareApplication",
  "name": "ContextForge",
  "operatingSystem": "Windows 10, Windows 11, macOS 11.0+, Ubuntu, Debian, Fedora, Arch Linux",
  "applicationCategory": "DeveloperApplication",
  "applicationSubCategory": "AI Code Execution & Workspace Architecture",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD",
    "availability": "[https://schema.org/InStock](https://schema.org/InStock)"
  },
  "description": "Proprietary local-first AI workspace architect and code execution engine. Features non-blocking prompt queues, Time Machine turn snapshots, per-hunk diff inspection, and local Ollama offline fallback.",
  "softwareVersion": "1.0.0",
  "fileSize": "15MB",
  "releaseNotes": "[https://contextforge.dev/docs/CHANGELOG.md](https://contextforge.dev/docs/CHANGELOG.md)",
  "downloadUrl": "[https://contextforge.dev/#downloads](https://contextforge.dev/#downloads)",
  "author": {
    "@type": "Organization",
    "name": "ContextForge Systems",
    "url": "[https://contextforge.dev](https://contextforge.dev)"
  },
  "screenshot": "[https://contextforge.dev/og-preview.png](https://contextforge.dev/og-preview.png)",
  "featureList": [
    "Non-Blocking Turn Queue with Hardware Stop Interrupt",
    "Time Machine Pre-Mutation Disk Snapshot Rollbacks",
    "Hunk-by-Hunk Code Diff Inspector",
    "Persistent .contextforgerules Workspace Boundaries",
    "Sub-Millisecond Telemetry HUD (TTFT and tok/s)",
    "Dual Cloud (Gemini) and Local Offline (Ollama) Bridge"
  ]
}
</script>
```

---

## 3. Dynamic Crawler Endpoints

### 3.1 Programmatic Robots Controller (`src/app/robots.ts`)
```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
    ],
    sitemap: '[https://contextforge.dev/sitemap.xml](https://contextforge.dev/sitemap.xml)',
    host: '[https://contextforge.dev](https://contextforge.dev)',
  };
}
```

### 3.2 Programmatic XML Sitemap Generator (`src/app/sitemap.ts`)
```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = '[https://contextforge.dev](https://contextforge.dev)';
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
```

---

## 4. OpenGraph Asset & Social Card Specifications

* **Dimensions:** Exactly $1200 \times 630\text{ px}$ at 72 DPI (Standard OpenGraph 1.91:1 ratio).
* **Visual Hierarchy:**
  * Background: `#0D0A09` (Dark Espresso base canvas).
  * Center: Milled hardware mockup container with inner border highlight and amber spotlight glow.
  * Headline: *"The Local-First AI Agent That Never Overwrites Your Code"*.
  * Badges: `v1.0.0 Stable` • `Tauri v2 + Rust` • `Windows • macOS • Linux`.
* **File Size Cap:** $< 250\text{ kB}$ PNG or WebP to ensure sub-second scrapability by Discord, Slack, and X/Twitter crawler bots.