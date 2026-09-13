# Phased Implementation Roadmap (`ROADMAP.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Target Completion:** Production Ready on Vercel Edge  
**Methodology:** Phased, Component-by-Component Verification with Antigravity / Cursor

---

## Phase Overview

```
[Phase 1: Scaffolding & Tokens] ──> [Phase 2: Hero & Dynamic CTA] ──> [Phase 3: Interactive Sandbox]
                                                                                │
[Phase 7: QA, A11y & Deploy]  <── [Phase 6: Legal & SEO Routes] <── [Phase 4 & 5: Bento, Pricing, Downloads]
```

---

## Phase 1: Project Initialization & Design Tokens
**Objective:** Establish the repository structure, verify dependencies, and configure the strict Dark Espresso theme.

- [ ] Initialize Next.js 15+ project with TypeScript, App Router, and Tailwind CSS (`src/` directory).
- [ ] Install production dependencies: `clsx`, `tailwind-merge`, `framer-motion`, `lucide-react`.
- [ ] Apply `tailwind.config.ts` Dark Espresso palette and hardware inset utilities.
- [ ] Configure `src/app/layout.tsx` with Geist Sans and Geist Mono variable fonts.
- [ ] Create `src/data/releases.ts`, `src/data/mockDiffs.ts`, `src/data/benchmarks.ts`, and `src/data/hotkeys.ts`.
- **Exit Criteria:** `pnpm dev` renders an empty Dark Espresso (`#0D0A09`) page with zero runtime or font errors.

---

## Phase 2: Navigation & Hero Section
**Objective:** Construct the above-the-fold experience with client-side OS detection and animated desktop mockup.

- [ ] Build `src/hooks/useOperatingSystem.ts` with post-mount hydration safety.
- [ ] Implement `src/components/layout/Header.tsx` with scroll backdrop blur and dynamic download button.
- [ ] Implement `src/components/hero/HeroSection.tsx` with headline, subheadline, and trust markers from `docs/COPYWRITING.md`.
- [ ] Build `src/components/hero/DynamicCTA.tsx` to handle platform-specific pills (`.exe`, `.dmg`, `.AppImage`) and secondary platform links.
- [ ] Build `src/components/hero/HeroMockup.tsx` rendering the simulated Dark Espresso terminal with live telemetry counter (`68 tok/s`) and `#1 Queued` status chip.
- **Exit Criteria:** Visiting the page displays the hero section; changing DevTools user-agent properly updates the primary download button without hydration mismatch warnings.

---

## Phase 3: Interactive Proof of Control Sandbox
**Objective:** Build interactive client islands that allow developers to test ContextForge's signature diffing and rollback controls.

- [ ] Implement `src/components/showcase/ControlShowcase.tsx` with hardware tab bar (`Hunk Diff Inspector`, `Time Machine Rollback`, `Alt + Space Summon`).
- [ ] Construct `src/components/showcase/InteractiveDiffViewer.tsx` allowing users to click "Accept" and "Reject" on code hunks, visually updating code line styles and badge counts.
- [ ] Construct `src/components/showcase/TimeMachineSlider.tsx` with an interactive scrubber demonstrating pre-mutation snapshot restoration across 3 turn states.
- [ ] Construct `src/components/showcase/SpotlightPreview.tsx` demonstrating the floating `Alt + Space` query HUD.
- [ ] Wrap components in `src/components/common/IslandErrorBoundary.tsx`.
- **Exit Criteria:** Users can click and interact with all three tabs without page lag, layout jumps, or console errors.

---

## Phase 4: Bento Feature Grid & Resource Benchmarks
**Objective:** Detail the 6 core desktop pillars and benchmark Tauri v2 against Electron.

- [ ] Implement `src/components/common/SpotlightCard.tsx` with cursor radial gradient tracking.
- [ ] Build `src/components/features/BentoGrid.tsx` and `src/components/features/FeatureCard.tsx` covering all 6 pillars (Non-Blocking Queue, Time Machine, Rules Engine, Diff Inspector, Telemetry HUD, Dual Engine).
- [ ] Build `src/components/benchmarks/ResourceTable.tsx` rendering the comparison matrix between ContextForge (Tauri v2) and Electron alternatives.
- **Exit Criteria:** Bento cards track cursor coordinates smoothly; benchmark table renders cleanly across desktop and mobile screens.

---

## Phase 5: Pricing, Download Matrix & Technical FAQ
**Objective:** Provide transparent access tiers, release binary downloads, and technical answers.

- [ ] Build `src/components/pricing/PricingSection.tsx` highlighting the **Developer ($0 Free Forever BYOK)** card alongside the Teams preview card.
- [ ] Build `src/components/downloads/DownloadMatrix.tsx` and `src/components/downloads/PlatformCard.tsx` containing cards for Windows, macOS, and Linux.
- [ ] Implement `src/hooks/useClipboard.ts` for 1-click copying of SHA-256 checksum hashes.
- [ ] Build `src/components/faq/FAQSection.tsx` and `src/components/faq/FAQItem.tsx` answering technical questions on privacy, BYOK, and local Ollama fallback.
- **Exit Criteria:** SHA-256 hashes copy to the clipboard with a visual confirmation badge; FAQ accordions toggle smoothly.

---

## Phase 6: Footer, Legal Routes & Programmatic SEO
**Objective:** Complete legal obligations and search engine crawler indexing.

- [ ] Build `src/components/layout/Footer.tsx` with proprietary copyright notices, legal links, and hotkey trigger.
- [ ] Implement `src/components/common/HotkeyModal.tsx` accessible dialog showing the desktop hotkeys reference.
- [ ] Build static routes: `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` using copy from `docs/PRIVACY_POLICY.md` and `docs/LEGAL_TERMS.md`.
- [ ] Create `src/app/robots.ts` and `src/app/sitemap.ts`.
- [ ] Inject `SoftwareApplication` JSON-LD schema into `src/app/layout.tsx`.
- **Exit Criteria:** `/privacy` and `/terms` render cleanly; `sitemap.xml` and `robots.txt` output valid schemas at `/sitemap.xml` and `/robots.txt`.

---

## Phase 7: Quality Assurance, Verification & Deployment
**Objective:** Perform full QA matrix and deploy to production edge.

- [ ] Run `pnpm type-check` (`tsc --noEmit`) and verify 0 type errors.
- [ ] Run `pnpm lint` and resolve any ESLint warnings.
- [ ] Execute Vitest unit tests (`pnpm test`) for `useOperatingSystem` and interactive components.
- [ ] Test cross-browser compatibility (Chrome, Safari, Firefox, Edge) and responsive viewports (390px, 768px, 1440px).
- [ ] Verify binary download links point to live GitHub Release artifacts (`v1.0.0`).
- [ ] Connect repository to Vercel, configure production domain (`contextforge.dev`), and trigger initial production build.
- **Exit Criteria:** Production site achieves $\ge 95$ Lighthouse score across all categories with green Core Web Vitals.