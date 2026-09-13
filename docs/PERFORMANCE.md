# Performance Budget & Web Vitals Optimization (`PERFORMANCE.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Target Standard:** Google Core Web Vitals (All Green) / Lighthouse Score $\ge 98$  
**Primary Engine:** Next.js 15+ SSG on Vercel Edge Network

---

## 1. Core Web Vitals Targets & Budget Caps

| Metric | Target Ceiling | Enforcement Strategy |
| :--- | :--- | :--- |
| **Largest Contentful Paint (LCP)** | $< 1.0\text{s}$ | Hero preview is rendered entirely using native CSS and DOM nodes; zero heavy bitmap image requests above the fold. |
| **Cumulative Layout Shift (CLS)** | $\mathbf{0.00}$ | Hard-coded container heights, CSS `aspect-ratio` rules, and zero post-hydration DOM insertion. |
| **Interaction to Next Paint (INP)** | $< 50\text{ms}$ | Micro-interactions leverage CSS hardware transforms; cursor spotlight bypasses React state renders entirely. |
| **Total Blocking Time (TBT)** | $< 50\text{ms}$ | Framer Motion tree-shaking; zero third-party tracking scripts; dynamic client island hydration. |
| **First Contentful Paint (FCP)** | $< 0.6\text{s}$ | Edge SSG delivery with pre-compressed HTML and inlined critical Tailwind styles. |
| **Initial JavaScript Payload** | $< 85\text{ kB}$ (gzip) | Strict component boundaries; zero UI component libraries (no Radix, no Material UI). |

---

## 2. Rendering & Asset Optimization Techniques

### 2.1 Hero Section Render-Path Zero-Image Policy
Traditional software landing pages load 2MB–5MB video clips or WebP screen captures that delay LCP. ContextForge renders the hero interface mock using lightweight HTML, CSS, and SVG:
* **DOM Structure:** Terminal header, window controls, prompt queue, and code stream are rendered as native DOM elements.
* **Payload Size:** The entire hero interface markup weighs $< 6\text{ kB}$ gzipped, achieving instant paint with zero network asset waterfall.

### 2.2 Ambient Cursor Spotlight Optimization
Bento cards track mouse movement to render a dynamic radial gradient. Standard React state hooks (`useState`) on `pointermove` cause 60fps component re-renders that ruin INP.

* **High-Performance Direct DOM Implementation:**
  ```typescript
  // src/components/common/SpotlightCard.tsx
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Updates CSS variables directly on the DOM node - ZERO React re-renders
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };
  ```

### 2.3 Font Optimization & Zero Font Jank
Fonts are provisioned via `next/font` with local variable font fallbacks to prevent Flash of Unstyled Text (FOUT) and Flash of Invisible Text (FOIT):
```typescript
// src/app/layout.tsx
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata = { /* ... */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-[#0D0A09] text-[#E6E0DD] antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## 3. Bundle Breakdown & Code-Splitting Strategy

Client-side interactive sandboxes are loaded with granular hydration boundaries to avoid blocking initial load:

```
[Initial Document: SSG HTML + Tailwind CSS] (18 kB)
       │
       ├── Core Client Island: DynamicCTA & Header (12 kB)
       │
       └── Lazy Island Chunks (Hydrated on Interaction / Viewport):
             ├── InteractiveDiffViewer (14 kB)
             ├── TimeMachineSlider (11 kB)
             └── HotkeyModal Dialog (6 kB)
```

* **Dynamic Code Splitting Pattern:**
  ```tsx
  import dynamic from 'next/dynamic';

  const InteractiveDiffViewer = dynamic(
    () => import('@/components/showcase/InteractiveDiffViewer'),
    {
      ssr: false,
      loading: () => (
        <div className="h-[380px] w-full animate-pulse rounded-xl border border-[#2A211D] bg-[#16110F]" />
      ),
    }
  );
  ```

---

## 4. HTTP Compression & Edge Caching

Next.js is configured on the Vercel Edge Network with Brotli (`br`) compression enabled by default:
* **Static Assets (`/_next/static/*`):** `Cache-Control: public, max-age=31536000, immutable`
* **Static Pages (`/`, `/privacy`, `/terms`):** `Cache-Control: public, max-age=0, must-revalidate, s-maxage=86400`
* **SVG Icons & Static Media (`/public/*`):** `Cache-Control: public, max-age=86400, stale-while-revalidate=604800`

---

## 5. Performance Monitoring & CI Auditing

Lighthouse CI (`lhci`) runs as a mandatory GitHub Actions check before merging pull requests:
* **Performance Budget File (`lighthouserc.json`):**
  ```json
  {
    "ci": {
      "collect": {
        "numberOfRuns": 3,
        "startServerCommand": "pnpm start"
      },
      "assert": {
        "assertions": {
          "categories:performance": ["error", { "minScore": 0.95 }],
          "categories:accessibility": ["error", { "minScore": 0.98 }],
          "categories:best-practices": ["error", { "minScore": 1.0 }],
          "categories:seo": ["error", { "minScore": 1.0 }],
          "first-contentful-paint": ["error", { "maxNumericValue": 800 }],
          "largest-contentful-paint": ["error", { "maxNumericValue": 1200 }],
          "cumulative-layout-shift": ["error", { "maxNumericValue": 0 }]
        }
      }
    }
  }
  ```