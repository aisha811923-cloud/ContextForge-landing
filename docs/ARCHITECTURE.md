# Master Directory & System Architecture (`ARCHITECTURE.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Framework:** Next.js 15+ (App Router) / React 19 / TypeScript / Tailwind CSS  
**Target Platform:** Vercel Edge Network  

---

## 1. Directory Structure

```text
contextforge-landing/
├── .cursorrules                        # IDE development guardrails & palette rules
├── .github/
│   └── workflows/
│       └── deploy.yml                  # Automated Vercel preview & production deploy
├── docs/
│   ├── PRD.md                          # Product Requirements Document
│   ├── TRD.md                          # Technical Architecture Document
│   ├── AGENT.md                        # AI Agent Directives & Guardrails
│   ├── ANIMATIONS.md                   # Motion specifications & Framer curves
│   ├── WEBFLOW.md                      # Navigation flow & scroll anchors
│   ├── ARCHITECTURE.md                 # System architecture & component tree
│   ├── DESIGN.md                       # Dark Espresso design system tokens
│   ├── COPYWRITING.md                  # Verbatim messaging & headline dictionary
│   ├── FAQ.md                          # Technical objection handling
│   ├── CHANGELOG.md                    # Release history & v1.0.0 notes
│   ├── TERMINAL_INSTALL.md             # One-line terminal install commands
│   ├── PRIVACY_POLICY.md               # Legal privacy terms (zero code retention)
│   ├── LEGAL_TERMS.md                  # Proprietary closed-source SaaS license
│   ├── SECURITY.md                     # Binary verification & threat mitigation
│   ├── DEPLOYMENT.md                   # Vercel Edge hosting & CDN config
│   ├── ERROR_HANDLING.md               # Client error boundaries & fallbacks
│   ├── TESTING.md                      # Cross-browser & responsive QA suite
│   ├── ACCESSIBILITY.md                # WCAG 2.1 AA accessibility guidelines
│   ├── PERFORMANCE.md                  # Core Web Vitals targets & budgeting
│   ├── CONFIG_FILES.md                 # Config files (Next, Tailwind, TS, Manifest)
│   └── ROADMAP.md                      # Phased execution milestones
├── public/
│   ├── favicon.ico                     # Hardware-inspired monogram favicon
│   ├── icon.svg                        # ContextForge vector mark
│   ├── og-preview.png                  # High-DPI 1200x630 OpenGraph card
│   └── icons/
│       ├── windows.svg                 # Platform icon glyphs
│       ├── apple.svg
│       └── linux.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout, Geist font, JSON-LD Schema
│   │   ├── page.tsx                    # Master single-page composition
│   │   ├── globals.css                 # Custom Dark Espresso utilities & scrollbars
│   │   ├── privacy/
│   │   │   └── page.tsx                # Standalone Privacy Policy route
│   │   ├── terms/
│   │   │   └── page.tsx                # Standalone Terms of Service route
│   │   ├── robots.ts                   # Programmatic robots.txt
│   │   └── sitemap.ts                  # Programmatic sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Sticky header with blur & dynamic CTA pill
│   │   │   └── Footer.tsx              # Copyright, hotkey sheet trigger, legal links
│   │   ├── common/
│   │   │   ├── SpotlightCard.tsx       # Reusable cursor-tracking radial glow card
│   │   │   ├── Badge.tsx               # Monospace version, status, and tag pills
│   │   │   ├── Button.tsx              # Tactile milled hardware button primitive
│   │   │   └── HotkeyModal.tsx         # Desktop keyboard cheat-sheet dialog
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx         # Main fold: value prop, dynamic CTA
│   │   │   ├── DynamicCTA.tsx          # OS-aware hydrated download button
│   │   │   └── HeroMockup.tsx          # Simulated Dark Espresso terminal with live HUD
│   │   ├── showcase/
│   │   │   ├── ControlShowcase.tsx     # Tabbed sandbox controller
│   │   │   ├── InteractiveDiffViewer.tsx # Interactive hunk-by-hunk diff editor
│   │   │   ├── TimeMachineSlider.tsx   # Pre-mutation snapshot turn rewind widget
│   │   │   └── SpotlightPreview.tsx    # Alt + Space global command HUD preview
│   │   ├── features/
│   │   │   ├── BentoGrid.tsx           # 6-pillar feature grid layout
│   │   │   └── FeatureCard.tsx         # Individual bento cards with spotlight
│   │   ├── benchmarks/
│   │   │   └── ResourceTable.tsx       # Tauri v2 (Rust) vs. Electron data table
│   │   ├── pricing/
│   │   │   ├── PricingSection.tsx      # Dual-card layout: $0 Free Forever & Pro Preview
│   │   │   └── PricingCard.tsx         # Tactile pricing tier card with BYOK highlights
│   │   ├── downloads/
│   │   │   ├── DownloadMatrix.tsx      # Multi-platform binary download section
│   │   │   └── PlatformCard.tsx        # Card with binary size, SHA-256 copy & commands
│   │   └── faq/
│   │       ├── FAQSection.tsx          # Accordion-style technical FAQ
│   │       └── FAQItem.tsx             # Animated disclosure panel
│   ├── data/
│   │   ├── releases.ts                 # Release assets, hashes, versions, CDN links
│   │   ├── mockDiffs.ts                # Code diff hunks for the interactive sandbox
│   │   ├── benchmarks.ts               # Memory, bundle size, and cold start metrics
│   │   ├── hotkeys.ts                  # Desktop keyboard shortcuts dictionary
│   │   └── faq.ts                      # FAQ questions and structured markdown answers
│   ├── hooks/
│   │   ├── useOperatingSystem.ts       # Client-side OS detection hook
│   │   ├── useScrollPosition.ts        # Header scroll blur detection hook
│   │   └── useClipboard.ts             # 1-click SHA-256 hash copy controller
│   └── types/
│       └── index.ts                    # Centralized TypeScript interfaces
├── next.config.ts                      # Next.js compiler, compression, and asset rules
├── package.json                        # Dependencies, pnpm scripts
├── postcss.config.mjs                  # PostCSS plugins
├── tailwind.config.ts                  # Dark Espresso theme configuration
└── tsconfig.json                       # Strict TypeScript configuration
```

---

## 2. Component Hierarchy & Data Flow

```
Page (RSC: src/app/page.tsx)
│
├── Header (Client Component)
│     └── Dynamic Download Pill (Reads useOperatingSystem)
│
├── HeroSection (Server Component Wrapper)
│     ├── DynamicCTA (Client Component: Hydrated OS Button + Dropdown)
│     └── HeroMockup (Client Component: Token Stream & Telemetry HUD Ticker)
│
├── ControlShowcase (Client Component: Tab Controller)
│     ├── InteractiveDiffViewer (Client Component: Reads mockDiffs.ts)
│     ├── TimeMachineSlider (Client Component: Snapshot Scrub State)
│     └── SpotlightPreview (Client Component: Hotkey Simulation)
│
├── BentoGrid (Server Component)
│     └── 6x FeatureCard (Client Component: Wrapped in SpotlightCard cursor listener)
│
├── ResourceTable (Server Component: Reads benchmarks.ts)
│
├── PricingSection (Server Component)
│     ├── PricingCard: Developer Free ($0 BYOK)
│     └── PricingCard: Teams & Enterprise (Coming Soon)
│
├── DownloadMatrix (Server Component: Reads releases.ts)
│     └── 3x PlatformCard (Client Component: SHA-256 Copy & Terminal Popover)
│
├── FAQSection (Client Component: Accordion State)
│
└── Footer (Server Component)
      └── HotkeyModal (Client Component: Accessible Dialog)
```

---

## 3. Client vs. Server Component Boundaries

To ensure rapid delivery, components are split cleanly between static server-rendered HTML and client-hydrated islands:

| Component | Nature | Execution Reason |
| :--- | :--- | :--- |
| `src/app/page.tsx` | Server (RSC) | Pre-renders static page skeleton and metadata for instant TTFB. |
| `Header.tsx` | Client Island | Attaches scroll event listeners to dynamically toggle blur classes. |
| `DynamicCTA.tsx` | Client Island | Reads `navigator.userAgent` post-mount without causing RSC hydration mismatch. |
| `HeroMockup.tsx` | Client Island | Drives the live telemetry generation counter (`tok/s`) and pulsing LED. |
| `InteractiveDiffViewer.tsx` | Client Island | Manages local React state for accepting/rejecting diff hunks in real time. |
| `TimeMachineSlider.tsx` | Client Island | Controls scrubbing index across simulated git/snapshot states. |
| `SpotlightCard.tsx` | Client Island | Binds DOM `pointermove` to update CSS radial-gradient coordinates directly. |
| `ResourceTable.tsx` | Server (RSC) | Static table rendered with zero client-side JavaScript overhead. |
| `PricingSection.tsx` | Server (RSC) | Pure HTML/CSS layout with static feature matrices. |
| `PlatformCard.tsx` | Client Island | Contains `useClipboard` logic for copying SHA-256 release hashes. |
| `FAQSection.tsx` | Client Island | Controls accordion expand/collapse state transitions. |
| `privacy/page.tsx` | Server (RSC) | Pure static markdown-rendered legal document. |
| `terms/page.tsx` | Server (RSC) | Pure static markdown-rendered legal document. |

---

## 4. State Management Contracts

1. **Global State:** None required. The site is an ultra-fast landing page and distribution hub. Cross-component global state stores (Redux, Zustand) are deliberately excluded to preserve an initial JS bundle size under $85\text{ kB}$.
2. **Local Component State:**
   * `osState`: Managed via `useOperatingSystem` for CTA routing.
   * `activeTab`: Managed in `ControlShowcase` for switching sandbox widgets (`diff` | `snapshots` | `spotlight`).
   * `acceptedHunks`: Managed as a `Set<string>` inside `InteractiveDiffViewer`.
   * `turnIndex`: Integer state (`0..2`) inside `TimeMachineSlider`.
   * `copiedHash`: Temporary boolean string flag inside `PlatformCard` for UI copy confirmations.