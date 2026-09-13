# Web Navigation Flow & Information Architecture (`WEBFLOW.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Target URL:** `https://contextforge.dev`  
**Site Architecture:** Single-Page Application (SPA) Scroll Flow + Static Legal Sub-Routes

---

## 1. Master Information Architecture & User Journey

```
                     [Visitor Enters: contextforge.dev]
                                     │
                 ┌───────────────────┴───────────────────┐
                 ▼                                       ▼
        [Header Navigation]                     [Hero Section / Fold 1]
   - Anchor: #features                     - Value Proposition
   - Anchor: #showcase                     - Dynamic OS Detection
   - Anchor: #benchmarks                   - Primary OS Download CTA
   - Anchor: #pricing                      - Secondary OS Direct Links
   - Anchor: #downloads                    - Live Dark Espresso Terminal Mockup
   - Action: "Get ContextForge Free"                     │
                 │                                       ▼
                 │                      [Proof of Control Showcase (#showcase)]
                 │                         - Tab 1: Hunk Diff Inspector
                 │                         - Tab 2: Time Machine Snapshot Scrub
                 │                         - Tab 3: Alt + Space Global Spotlight
                 │                                       │
                 │                                       ▼
                 │                      [Bento Feature Grid (#features)]
                 │                         - 1. Non-Blocking Queue
                 │                         - 2. Time Machine Rollback
                 │                         - 3. .contextforgerules Engine
                 │                         - 4. Granular Diff Inspector
                 │                         - 5. Live Telemetry HUD
                 │                         - 6. Dual Gemini + Ollama Engine
                 │                                       │
                 │                                       ▼
                 │                      [Performance Benchmarks (#benchmarks)]
                 │                         - Tauri v2 (Rust) vs. Electron Matrix
                 │                         - RAM, Binary Size, Cold Start Speeds
                 │                                       │
                 │                                       ▼
                 │                      [Pricing & Model Transparency (#pricing)]
                 │                         - Plan 1: Developer ($0 BYOK) [Primary]
                 │                         - Plan 2: Teams & Enterprise [Preview]
                 │                                       │
                 │                                       ▼
                 │                      [Platform Download Matrix (#downloads)]
                 │                         - Windows Card (.exe NSIS)
                 │                         - macOS Card (.dmg Universal)
                 │                         - Linux Card (.AppImage / .deb)
                 │                         - SHA-256 Hashes & Install Scripts
                 │                                       │
                 │                                       ▼
                 │                      [Technical FAQ Accordion (#faq)]
                 │                         - Local privacy, BYOK, Ollama fallback
                 │                                       │
                 ▼                                       ▼
    ┌─────────────────────────────────────────────────────────────┐
    │                       Global Footer                         │
    │  - Intellectual Property & Proprietary Licensing Notice     │
    │  - Desktop Hotkey Cheat Sheet Modal                         │
    │  - Route: /privacy (Privacy Policy)                         │
    │  - Route: /terms (Terms of Service)                         │
    │  - External: GitHub Releases Mirror                         │
    └─────────────────────────────────────────────────────────────┘
```

---

## 2. Scroll Anchors & Route Map

### 2.1 Landing Page Anchors (`/`)
* `#hero` — Top of page, dynamic download trigger, live terminal.
* `#showcase` — Interactive Hunk Diff sandbox & Time Machine slider.
* `#features` — 6-pillar Bento grid with spotlight tracking.
* `#benchmarks` — Memory, bundle size, and latency comparison table.
* `#pricing` — $0 Free Tier spotlight and Teams preview card.
* `#downloads` — Direct links to Windows, macOS, and Linux release binaries.
* `#faq` — Technical objection handling and architecture questions.

### 2.2 Standalone Sub-Routes
* `/privacy` — Legal privacy policy explicitly stating local disk isolation, zero code transmission, and BYOK direct-routing policies.
* `/terms` — Commercial closed-source proprietary Terms of Service.
* `/robots.txt` — Automated search engine crawler instructions (via `src/app/robots.ts`).
* `/sitemap.xml` — Programmatic XML index of routes (via `src/app/sitemap.ts`).

---

## 3. Dynamic Download & Routing Logic

When a visitor interacts with a download trigger:

```
                  [User Clicks Primary CTA]
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
   [OS Successfully Detected]         [Detection Inconclusive]
            │                                 │
   Directs to matching asset:                 Smooth scroll jump to:
   - Win: ContextForge_1.0.0_x64-setup.exe     #downloads Matrix Section
   - Mac: ContextForge_1.0.0_universal.dmg
   - Lin: ContextForge_1.0.0_amd64.AppImage
```

* **Direct Asset Links:** All download buttons link directly to the verified asset URLs published on the GitHub Releases CDN (`https://github.com/<org>/ContextForge/releases/download/v1.0.0/...`).
* **SHA-256 Copy Trigger:** Clicking any checksum pill immediately copies the 64-character hexadecimal hash to the user's clipboard and displays a 2-second "Copied!" confirmation badge.

---

## 4. Keyboard Navigation & Accessibility Flow

* **Sequential Tab Order:**
  1. Skip to Content link (`#main-content`)
  2. Header Navigation links & CTA
  3. Hero Primary Download Button & Alternative Platform links
  4. Interactive Sandbox Tabs (`Hunk Diff`, `Time Machine`, `Spotlight`)
  5. Feature cards and Benchmark table
  6. Download platform cards and Copy Hash buttons
  7. Footer links & Legal pages
* **Focus States:** Every interactive element displays a high-contrast focus ring:
  `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0A09]`.