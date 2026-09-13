# Technical Requirements Document (TRD)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Target Platform:** Web (Vercel Edge Network)  
**Architecture:** Next.js App Router (Static Site Generation with Hydrated Client Islands)

---

## 1. System Architecture & Rendering Strategy

The ContextForge landing page is architected as an ultra-fast, statically generated web application (SSG) with targeted interactive client islands. Every informational section (Hero copy, Architecture, Pricing, FAQ, Legal) is pre-rendered at build time to maximize SEO indexing and achieve near-zero Time to First Byte (TTFB).

```
[Edge CDN / Vercel Edge Cache]
              │
    ┌─────────┴────────────────────────┐
    ▼                                  ▼
[Static Server Components]     [Hydrated Client Islands]
 - Hero Typography & Layout     - OS Detection & Dynamic CTA
 - Bento Grid Metadata          - Interactive Hunk Diff Sandbox
 - Benchmark Matrix             - Time Machine Scrub Slider
 - Legal Documents & FAQ        - Spotlight Cursor Glow & Tabs
```

---

## 2. Technology Stack & Dependency Specifications

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `15.x` / `14.2+` | SSG generation, routing, and programmatic SEO endpoints (`sitemap.ts`, `robots.ts`) |
| **Runtime** | Node.js | `20.x LTS` | CI/CD build environments |
| **UI Library** | React | `19.x` / `18.3+` | Component lifecycle and client-side state trees |
| **Language** | TypeScript | `5.x` | Strict typing (`strict: true`, `noImplicitAny: true`) |
| **Styling** | Tailwind CSS | `3.4+` / `4.x` | Zero-runtime CSS with Dark Espresso custom token extensions |
| **Animation** | Framer Motion | `11.x` | Spring-physics micro-interactions, spotlight hover, and tab layout transitions |
| **Icons** | Lucide React | Latest | Monochromatic UI glyphs (system icons, platform logos, tool indicators) |
| **Package Manager**| `pnpm` | `9.x` | Deterministic dependency tree resolution |

---

## 3. Dynamic Operating System Detection Engine

The landing page must automatically determine the visitor's operating system to tailor the primary download call-to-action (CTA) while preserving static generation without hydration mismatches.

### 3.1 Client Hook (`src/hooks/useOperatingSystem.ts`)
The hook executes exclusively in a `useEffect` post-mount pass to prevent React Server Component (RSC) hydration mismatch warnings:

```typescript
export type PlatformKey = 'windows' | 'macos' | 'linux' | 'unknown';

interface OSState {
  platform: PlatformKey;
  label: string;
  extension: string;
  isDetected: boolean;
}

export function useOperatingSystem(): OSState {
  const [os, setOs] = useState<OSState>({
    platform: 'unknown',
    label: 'Download ContextForge',
    extension: '',
    isDetected: false,
  });

  useEffect(() => {
    // 1. Prioritize Client Hints API if available
    const nav = navigator as any;
    if (nav.userAgentData?.platform) {
      const plat = nav.userAgentData.platform.toLowerCase();
      if (plat.includes('win')) return setOs({ platform: 'windows', label: 'Download for Windows', extension: '.exe', isDetected: true });
      if (plat.includes('mac')) return setOs({ platform: 'macos', label: 'Download for macOS', extension: '.dmg', isDetected: true });
      if (plat.includes('linux')) return setOs({ platform: 'linux', label: 'Download for Linux', extension: '.AppImage', isDetected: true });
    }

    // 2. Fallback to userAgent sniffing
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('win')) {
      setOs({ platform: 'windows', label: 'Download for Windows', extension: '.exe', isDetected: true });
    } else if (ua.includes('mac') || ua.includes('macintosh')) {
      setOs({ platform: 'macos', label: 'Download for macOS', extension: '.dmg', isDetected: true });
    } else if (ua.includes('linux') || ua.includes('x11')) {
      setOs({ platform: 'linux', label: 'Download for Linux', extension: '.AppImage', isDetected: true });
    } else {
      setOs({ platform: 'unknown', label: 'Download ContextForge', extension: '', isDetected: false });
    }
  }, []);

  return os;
}
```

### 3.2 Hydration Fallback Pattern
During server rendering and initial paint, the Hero CTA renders a neutral container displaying `Download ContextForge v1.0.0` with a subtle generic platform dropdown. Once hydrated, the component transitions to the targeted platform pill (`Download for Windows (.exe)`) with zero layout shift.

---

## 4. Interactive Client Island Architecture

To prevent main-thread blocking, dynamic features are isolated into discrete client components (`'use client'`):

### 4.1 Interactive Diff Inspector (`src/components/showcase/InteractiveDiffViewer.tsx`)
- **Internal State:** Maintains a localized `Set<string>` of accepted hunk IDs.
- **Micro-Actions:**
  - Clicking `[Accept Hunk]` flags the hunk ID, shifts line CSS classes from deletion/addition tokens to unified neutral accepted tokens, and decrements pending mutations.
  - Clicking `[Reject Hunk]` drops the hunk from the staging buffer and visually marks it as discarded with a subtle strike-through style.
- **Performance Requirement:** State mutations must execute under 16ms with zero DOM re-parsing.

### 4.2 Time Machine Scrub Slider (`src/components/showcase/TimeMachineSlider.tsx`)
- **State Management:** Controlled integer state (`0 | 1 | 2 | 3`) representing historical execution checkpoints:
  - `Turn 3 (Active)`: Breaking refactor introduced across 3 files.
  - `Turn 2 (Reverted)`: Automated pre-mutation snapshot restored.
  - `Turn 1 (Clean)`: Baseline project state.
- **Rendering:** Uses Framer Motion's `AnimatePresence` to cross-fade code lines and restore file badges dynamically.

### 4.3 Ambient Cursor Spotlight (`src/components/common/SpotlightCard.tsx`)
- Bento cards attach `onMouseMove` listeners to record mouse relative coordinates `(x, y)`.
- Modifies CSS custom properties (`--mouse-x`, `--mouse-y`) directly on the element DOM node to eliminate React component re-render overhead.

---

## 5. Asset Delivery & GitHub Release Asset Redirection

The landing page does not host multimegabyte desktop binary files on the edge web server. All binary downloads route through GitHub Releases CDN:

```
[User clicks CTA] ──> [/api/download?os=windows] 
                             │
                             ▼
              [302 Redirect to GitHub Release CDN Asset]
              [https://github.com/](https://github.com/)<org>/ContextForge/releases/download/v1.0.0/ContextForge_1.0.0_x64-setup.exe
```

* **Asset Verification:** Each download card dynamically reads checksum metadata from `src/data/releases.ts` to allow 1-click clipboard copying of the SHA-256 hash.
* **Fallbacks:** If query params fail, users can browse the complete binary matrix directly at `#downloads`.

---

## 6. Performance Budget & Core Web Vitals Constraints

| Metric | Target Ceiling | Enforcement Mechanism |
| :--- | :--- | :--- |
| **Largest Contentful Paint (LCP)** | < 1.0s | Zero external bitmap images in the hero; terminal rendered via raw CSS/DOM |
| **Cumulative Layout Shift (CLS)** | 0.00 | Fixed aspect ratios and dimensional wrappers on code showcase containers |
| **Total Blocking Time (TBT)** | < 50ms | Framer motion tree-shaking; isolation of client interactive islands |
| **Initial JS Payload** | < 85 kB gzip | Avoidance of heavy component libraries (pure Tailwind CSS primitives) |

---

## 7. Build, Validation & Route Architecture

```text
src/
├── app/
│   ├── layout.tsx              # Root HTML wrapper, Geist Mono injection, SEO schema
│   ├── page.tsx                # Master landing page assembling all 7 sections
│   ├── privacy/page.tsx        # Pre-rendered static Privacy Policy
│   ├── terms/page.tsx          # Pre-rendered static Terms of Service
│   ├── robots.ts               # Programmatic robots.txt generation
│   └── sitemap.ts              # Programmatic sitemap.xml generation
```

* **Type Verification:** `pnpm tsc --noEmit` must pass with zero errors in CI/CD before every production deployment.
* **Linting & Code Integrity:** Strict ESLint rules forbidding raw `any` casting and unescaped HTML entities.