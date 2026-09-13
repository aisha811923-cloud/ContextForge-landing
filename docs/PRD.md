# Product Requirements Document (PRD)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Status:** Approved  
**Target Release:** v1.0.0 Stable  
**License:** Proprietary / Closed-Source SaaS (Desktop Client)

---

## 1. Executive Summary & Vision

ContextForge is a local-first AI workspace architect and code execution engine built on Tauri v2 (Rust). It bridges low-latency cloud intelligence (Google Gemini API) with local fallback execution (Ollama) while safeguarding developer codebases through automated pre-mutation disk snapshots ("Time Machine"), per-hunk diff inspection, non-blocking prompt queues, and project-level workspace rule enforcement (`.contextforgerules`).

The primary purpose of the landing page (`contextforge.dev`) is to convert technical developer traffic into desktop client installations by demonstrating speed, zero cloud lock-in, and granular code control.

---

## 2. Product Positioning & Business Model

* **Software Model:** Proprietary closed-source commercial desktop software.
* **Pricing Strategy:** 
  * **Developer Tier ($0 / Free Forever):** Full access to all 6 desktop capabilities, unlimited local indexing, custom rules, Time Machine rollbacks, Bring Your Own Key (BYOK) for Gemini API, and unlimited local Ollama inference.
  * **Teams & Enterprise Tier (Preview / Coming Soon):** Centralized rule sync, shared workspace configurations, and managed team API gateways.
* **Core Philosophy:** "Zero Cloud Lock-In". The user's proprietary source code never traverses or persists on ContextForge servers. Workspace analysis and rollback snapshots are executed 100% on the user's local filesystem.

---

## 3. Target Audience & Developer Personas

* **Full-Stack & Systems Engineers:** Developers frustrated with black-box AI tools that unilaterally overwrite working code, introduce breaking regressions, or corrupt Git working trees.
* **Privacy-Conscious Developers:** Engineers working under strict compliance boundaries who require local-first data isolation or offline LLM fallback.
* **Efficiency Purists:** Developers who reject resource-heavy Electron clients in favor of lightweight, fast native binaries (~15MB installer, <50MB idle RAM).

---

## 4. Web Information Architecture (Section Breakdown)

### Section 1: Sticky Navigation Bar
* **Brand Identity:** ContextForge vector mark + logotype with an inline `v1.0.0 Stable` status badge.
* **Anchor Links:** `Features`, `Proof of Control`, `Architecture`, `Pricing`.
* **Action CTA:** Pinned high-contrast button: `Get ContextForge Free`.

### Section 2: Above-the-Fold Hero
* **Headline:** "The Local-First AI Agent That Never Overwrites Your Code."
* **Sub-headline:** "Instant Gemini token streaming, automated pre-mutation snapshots, and per-hunk diff inspection. Native desktop execution with zero cloud storage."
* **Dynamic Smart CTA:**
  * Auto-detect visitor operating system via client-side sniffing (`Windows`, `macOS`, `Linux`).
  * Surface primary OS button: `Download for Windows (.exe)` / `Download for macOS (Universal .dmg)` / `Download for Linux (.AppImage)`.
  * Display secondary links below for manual alternative platform selection.
* **Hero Visual:** High-fidelity interactive Dark Espresso desktop application mockup featuring live token streaming telemetry, non-blocking queue visualization, and tool execution status.

### Section 3: Proof of Control (Interactive Showcase Sandbox)
* **Interactive Sandbox Tabs:**
  1. **Hunk Diff Inspector:** Live browser widget allowing visitors to toggle between "Accept" and "Reject" on code diff lines, updating live diff counts.
  2. **Time Machine Scrub:** Interactive slider demonstrating file states rewinding to pre-mutation snapshots in single-click turns.
  3. **Global Summon:** Visual demonstration of the native `Alt + Space` spotlight hotkey overlaying a code editor.

### Section 4: Feature Bento Grid (The 6 Pillars)
* **Pillar 1: Non-Blocking Prompt Queue:** Compose follow-up prompts freely while the engine streams; support for instant execution interrupts via hardware stop.
* **Pillar 2: Time Machine Rollback:** Automated snapshot generation before every file mutation with single-click restoration.
* **Pillar 3: Workspace Rules Engine:** Automatic scanning and system prompt injection of `.contextforgerules`.
* **Pillar 4: Hunk-by-Hunk Diff Inspector:** Granular patch control directly inside the chat flow before disk writes.
* **Pillar 5: Live Telemetry HUD:** Sub-millisecond tracking of Time-To-First-Token (TTFT), tokens/second, and context limits.
* **Pillar 6: Cloud Speed & Local Offline Fallback:** Gemini streaming by default with automatic, guarded fallback to local Ollama (`localhost:11434`).

### Section 5: Architecture & Resource Benchmarks
* **Comparative Metric Table:** Direct contrast against traditional Electron-based AI editors:
  * Binary Distribution Size (<15MB vs. 120MB+)
  * Idle Memory Footprint (<50MB vs. 400MB+)
  * Startup Latency (<250ms vs. 2000ms+)
  * Workspace Data Persistence (100% Local vs. Remote Database Sync)

### Section 6: Transparent Pricing
* **Dual-Card Matrix:**
  * **Developer Free Forever ($0):** Highlighted card with comprehensive feature inclusion and direct binary download trigger.
  * **Teams & Enterprise (Coming Soon):** Subtle card detailing upcoming cloud rules registry and multi-seat sync.

### Section 7: Multi-Platform Download Matrix
* Three platform cards with dedicated asset metadata:
  * **Windows:** `.exe` (NSIS Installer) | Architecture: `x64` | Edge WebView2 check.
  * **macOS:** `.dmg` | Architecture: `Universal (Apple Silicon & Intel)` | Minimum OS: `macOS 11.0+`.
  * **Linux:** `.AppImage` & `.deb` | Architecture: `x86_64` | WebKitGTK 4.1.
* Includes file sizes, SHA-256 verification hashes, and direct links to GitHub Release assets.

### Section 8: Legal & Navigation Footer
* Intellectual property and closed-source proprietary copyright notices.
* Direct routing to `/privacy` (Privacy Policy) and `/terms` (Terms of Service).
* Desktop hotkey quick-reference sheet (`Alt + Space`, `Esc`, `Ctrl + Enter`).

---

## 5. Non-Functional & Technical Requirements

* **Performance:** Google Lighthouse score $\ge 95$ across Performance, Accessibility, and SEO. First Contentful Paint (FCP) $< 0.8\text{s}$, Cumulative Layout Shift (CLS) $= 0.00$.
* **Styling Contract:** Strict Dark Espresso palette (`#0D0A09` base, `#16110F` cards, `#2A211D` borders, `#E6E0DD` primary text).
* **Responsive Breakpoints:** Fully responsive rendering across mobile ($390\text{px}$), tablet ($768\text{px}$), desktop ($1024\text{px}$), and ultra-wide ($1440\text{px}+$ displays.
* **Client Fallbacks:** If client-side OS detection is inconclusive or blocked, gracefully default the primary download CTA to an all-platforms selector dropdown without breaking layout flow.