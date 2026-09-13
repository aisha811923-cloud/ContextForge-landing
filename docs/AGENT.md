# AI Agent Directives & Guardrails (`AGENT.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Target Environment:** Antigravity / Cursor / Next.js 15+ App Router  
**Role:** Principal Frontend Architect & Creative Developer

---

## 1. Core Mission & Persona

You are an expert Systems & Frontend Engineer tasked with scaffolding and implementing the official web landing page and asset distribution hub for **ContextForge** (`contextforge.dev`). 

ContextForge is a closed-source, local-first AI workspace architect built with Tauri v2 (Rust). The landing page must reflect the software's identity: blisteringly fast, tactile, hardware-inspired, and transparent.

Every component you write must prioritize sub-second load times, tactile interaction feedback, zero Cumulative Layout Shift (CLS), and absolute adherence to the **Dark Espresso** design system.

---

## 2. Absolute Directives & Hard Guardrails

### 2.1 Color Palette Enforcement (Zero Tolerance for Generic Grays)
* **NEVER** use generic Tailwind neutral palettes (`bg-gray-*`, `bg-zinc-*`, `bg-slate-*`, `bg-neutral-*`).
* **ONLY** use the configured Dark Espresso design tokens:
  * Canvas Root: `#0D0A09`
  * Card Surfaces: `#16110F`
  * Active/Hover Wells: `#1E1714`
  * Default Borders: `#2A211D`
  * Inner Top Highlight: `shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]`
  * Primary Typography: `#E6E0DD`
  * Secondary / Muted: `#8C827A`
  * Semantic Emerald (Diff Addition / Healthy): `#22C55E` / `#143823`
  * Semantic Crimson (Diff Deletion / Danger): `#EF4444` / `#381414`
  * Semantic Amber (Streaming / Active): `#D97706` / `#382A14`

### 2.2 Product Positioning & Copy Authenticity
* **Closed-Source SaaS (Not Open-Source):** ContextForge is proprietary software. Never include open-source contributor guides, "Fork on GitHub" ribbons, or permissive license banners (MIT/GPL) for the core app.
* **Pricing Framing:** Emphasize the **$0 Developer Free Forever (BYOK)** tier. Do not hide the pricing; frame it as developer-first transparency.
* **Zero Boilerplate Copy:** Never use placeholder text like "Lorem ipsum", "Empower your team", or "Revolutionary AI". Use exact terms from `docs/COPYWRITING.md`.

### 2.3 Hydration Mismatch Safeguards (OS Detection)
* Never read `window` or `navigator` directly in the server render pass.
* OS detection logic (`useOperatingSystem`) must execute strictly inside `useEffect` after mount. The initial server render MUST display a stable fallback (e.g., "Download ContextForge v1.0.0") that safely morphs to platform-specific text ("Download for Windows (.exe)") post-hydration without DOM tree shifts.

### 2.4 Interactive Showcase Islands Over Static Mockups
* The hero and showcase sections must not rely on flat screenshots or static SVGs.
* The **Hunk Diff Inspector** must allow visitors to click "Accept" and "Reject" on code hunks, triggering animated state transitions in their browser.
* The **Time Machine** showcase must provide a scrub slider or step buttons that switch between Turn 1, Turn 2, and Turn 3 snapshot states.

---

## 3. Architecture & File Structure Protocols

Organize every file strictly within this directory structure:

```text
src/
├── app/
│   ├── layout.tsx              # Root HTML, Geist fonts, JSON-LD Schema
│   ├── page.tsx                # Master page assembling sections
│   ├── privacy/page.tsx        # Legal Privacy Policy route
│   ├── terms/page.tsx          # Legal Terms of Service route
│   ├── robots.ts               # Automated robots.txt
│   └── sitemap.ts              # Programmatic sitemap.xml
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky navigation & OS-aware download pill
│   │   └── Footer.tsx          # Legal links, copyright, hotkey sheet
│   ├── hero/
│   │   ├── HeroSection.tsx     # Headline, dynamic CTA, platform pills
│   │   └── HeroMockup.tsx      # CSS/DOM simulated Dark Espresso terminal
│   ├── showcase/
│   │   ├── ControlShowcase.tsx # Tabs controller for sandbox
│   │   ├── HunkDiffViewer.tsx  # Interactive diff sandbox
│   │   └── TimeMachineScrub.tsx# Snapshot rewind interactive component
│   ├── features/
│   │   ├── BentoGrid.tsx       # 6-pillar grid layout
│   │   └── FeatureCard.tsx     # Spotlight hover-enabled card primitive
│   ├── benchmarks/
│   │   └── ResourceTable.tsx   # Tauri v2 vs. Electron comparison table
│   ├── pricing/
│   │   └── PricingSection.tsx  # $0 BYOK card and Teams preview
│   └── downloads/
│       ├── DownloadMatrix.tsx  # OS cards, SHA-256 copy buttons
│       └── PlatformCard.tsx    # Single download platform asset box
├── data/
│   ├── releases.ts             # Direct GitHub release asset download URLs & SHA-256
│   ├── mockDiffs.ts            # Hunk code data for interactive sandbox
│   ├── benchmarks.ts           # Memory, bundle size, and speed metrics
│   └── hotkeys.ts              # Desktop keyboard shortcut data
├── hooks/
│   ├── useOperatingSystem.ts   # Client-side OS detection hook
│   └── useScrollPosition.ts    # Header backdrop blur controller
└── types/
    └── index.ts                # Centralized TypeScript definitions
```

---

## 4. Component Implementation Rules

1. **Client Boundary Scoping:** Mark components with `'use client'` ONLY if they consume hooks (`useState`, `useEffect`, `useRef`), Framer Motion gesture events, or browser APIs. Static marketing copy and bento card text must remain React Server Components (RSCs).
2. **Strict TypeScript Typing:** Never use `any`. Explicitly declare prop types and data interfaces in `src/types/index.ts`.
3. **Framer Motion Performance:** Use hardware-accelerated transform properties (`opacity`, `scale`, `x`, `y`). Avoid animating layout properties (`width`, `height`, `margin`) unless driven by `layoutId`.
4. **Hardware Milled Inset Utility:** Ensure every card, terminal dock, and modal adheres to the inset highlight formula:
   ```tsx
   className="bg-[#16110F] border border-[#2A211D] rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
   ```

---

## 5. Verification & Acceptance Checklist

Before declaring any section or phase complete, verify:
* [ ] `pnpm tsc --noEmit` runs with 0 type errors.
* [ ] No hydration mismatch errors appear in the browser console.
* [ ] Changing browser User-Agent in DevTools automatically switches the Hero primary CTA between Windows, macOS, and Linux.
* [ ] Clicking "Accept" or "Reject" in the Hunk Diff sandbox updates state and line styling cleanly without page stutter.
* [ ] All external download links point to the official GitHub Release artifact paths with correct SHA-256 hashes.
* [ ] Responsive check passes on $390\text{px}$ (iPhone), $768\text{px}$ (iPad), and $1440\text{px}$ (Desktop).