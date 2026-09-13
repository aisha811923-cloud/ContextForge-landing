# Copywriting, Tone & Messaging Guide (`docs/COPYWRITING.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Status:** Approved Production Copy  
**Voice & Tone:** Engineer-to-Engineer, Concrete, High-Authority, Tactile, Zero-Fluff

---

## 1. Brand Tone & Messaging Guidelines

* **Lead with Mechanics, Not Adjectives:** Never use generic buzzwords ("revolutionary", "game-changing", "seamlessly", "blazing fast", "magical"). State the architectural mechanic, state the payoff, and stop.
* **Control & Sovereignty:** Developers are tired of opaque AI agents modifying their repositories without consent. The narrative centers on transparency, inspectability, and non-destructive execution.
* **Direct & Concise:** Keep sentences punchy. Use imperative verbs ("Review", "Roll back", "Queue", "Enforce").

---

## 2. Global Navigation & Header Copy

* **Logotype:** `ContextForge`
* **Release Pill:** `v1.0.0 Stable Release`
* **Nav Links:**
  * `Features` (`#features`)
  * `Proof of Control` (`#showcase`)
  * `Benchmarks` (`#benchmarks`)
  * `Pricing` (`#pricing`)
  * `Downloads` (`#downloads`)
* **Header CTA Button:** `Get ContextForge Free`

---

## 3. Hero Section (Above the Fold)

* **Status Eyebrow Tag:** `NATIVE DESKTOP ARCHITECT • TAURI V2 + RUST`
* **Primary Headline:**
  > The Local-First AI Agent That Never Overwrites Your Code.
* **Subheadline:**
  > Real-time Gemini token streaming, automated pre-mutation snapshots, and per-hunk diff inspection. Native desktop execution with zero cloud workspace storage.
* **Dynamic Primary CTAs:**
  * Windows Detected: `Download for Windows (.exe)`
  * macOS Detected: `Download for macOS (Universal .dmg)`
  * Linux Detected: `Download for Linux (.AppImage)`
  * Undetected / Fallback: `Download ContextForge v1.0.0`
* **Secondary Download Selector:**
  > Also available on **Windows** (`.exe`) • **macOS** (`.dmg`) • **Linux** (`.AppImage` / `.deb`)
* **Micro-Copy Trust Badge:**
  > Free forever for developers • Bring Your Own Key (BYOK) • Zero telemetry retention

---

## 4. Proof of Control Showcase (Interactive Sandbox)

* **Section Eyebrow:** `PROOF OF CONTROL`
* **Section Heading:**
  > Review before you commit. Revert if it breaks.
* **Section Subheadline:**
  > Stop accepting black-box file rewrites. ContextForge isolates every modification into reviewable diff hunks and local disk snapshots.
* **Interactive Sandbox Tabs:**
  * Tab 1: `Hunk-by-Hunk Diff Inspector`
  * Tab 2: `Time Machine Rollback`
  * Tab 3: `Alt + Space Spotlight Summon`
* **Interactive Widget Microcopy:**
  * Diff Controls: `[Accept Hunk]` • `[Reject Hunk]` • `2 of 2 Pending`
  * Snapshot Slider Labels: `Turn 1: Baseline` • `Turn 2: Snapshot Saved` • `Turn 3: Breaking Turn (Revertible)`
  * Revert Button: `Revert Turn (Restore Snapshot)`

---

## 5. Bento Feature Grid (The 6 Pillars)

* **Section Eyebrow:** `ENGINEERED FOR FLOW`
* **Section Heading:**
  > Built for speed. Guarded by default.
* **Pillars Copy:**
  1. **Non-Blocking Queue:**
     * *Title:* Type ahead. Zero wait states.
     * *Description:* Never wait for a stream to finish. Queue subsequent directives instantly while the model writes, or interrupt execution with the hardware stop toggle.
  2. **Time Machine Snapshots:**
     * *Title:* 1-Click Turn Rollbacks.
     * *Description:* Automated file snapshots are written to local disk before every mutation turn. If a refactor breaks your build, roll back your working tree in milliseconds without dirtying Git.
  3. **Workspace Rules Engine:**
     * *Title:* Persistent `.contextforgerules`.
     * *Description:* Define project conventions, architectural boundaries, and lint standards once in your root folder. Injected directly into the system prompt context on every run.
  4. **Granular Diff Inspector:**
     * *Title:* Line-by-Line Patch Review.
     * *Description:* Inspect proposed changes directly inside the execution feed. Accept or reject individual hunks before anything touches your filesystem.
  5. **Telemetry HUD:**
     * *Title:* Sub-Millisecond Speed Gauges.
     * *Description:* Real-time Time-To-First-Token (TTFT), tokens/second generation throughput, and context ceiling utilization visible on an unobtrusive status rail.
  6. **Dual Inference Engine:**
     * *Title:* Cloud Throughput. Local Fallback.
     * *Description:* Stream with Gemini API for ultra-low latency, with automatic zero-crash fallback to local Ollama instances when internet connectivity drops.

---

## 6. Performance Benchmarks Section

* **Section Eyebrow:** `ARCHITECTURE BENCHMARKS`
* **Section Heading:**
  > Native Rust efficiency. Say goodbye to Electron bloat.
* **Section Subheadline:**
  > Compiled directly to native machine code with Tauri v2. Negligible RAM footprint, instant boot times, and tiny installation packages.
* **Table Headers:** `Metric` • `ContextForge (Tauri v2)` • `Traditional Electron Editors` • `Architectural Advantage`

---

## 7. Pricing & Access Section

* **Section Eyebrow:** `TRANSPARENT ACCESS`
* **Section Heading:**
  > Powerful developer software should not require a monthly seat tax.
* **Free Tier Card (Featured):**
  * *Badge:* `FULL DESKTOP SUITE`
  * *Plan Name:* Developer (Free Forever)
  * *Price:* `$0`
  * *Tagline:* Complete local-first power for individual software engineers.
  * *Feature List:*
    * All 6 desktop workspace tools included
    * Unlimited local project indexing
    * Custom `.contextforgerules` enforcement
    * Time Machine pre-mutation snapshot engine
    * Bring Your Own Key (BYOK) for Gemini API
    * Unlimited local offline inference via Ollama
    * Standalone native desktop binaries (Win, Mac, Linux)
  * *CTA Button:* `Download ContextForge Free`
* **Enterprise / Pro Card (Preview):**
  * *Badge:* `IN ACTIVE DEVELOPMENT`
  * *Plan Name:* Teams & Enterprise
  * *Price:* `Coming Soon`
  * *Tagline:* Centralized rule synchronization and shared workspace governance.
  * *Feature List:*
    * Team-wide `.contextforgerules` registry
    * Multi-seat workspace state sync
    * Centralized corporate model routing & quotas
    * Dedicated enterprise support channels
  * *CTA Button:* `Join Teams Waitlist`

---

## 8. Multi-Platform Download Matrix

* **Section Eyebrow:** `RELEASE ARTIFACTS`
* **Section Heading:**
  > Ready to deploy. Choose your platform.
* **Cards Copy:**
  * **Windows Card:**
    * *Title:* Windows
    * *Package:* `.exe` (NSIS Installer)
    * *Specs:* 64-bit • Windows 10 / 11 • Automatic WebView2 detection
    * *Button:* `Download Windows Installer`
  * **macOS Card:**
    * *Title:* macOS
    * *Package:* Universal `.dmg`
    * *Specs:* Apple Silicon (M1/M2/M3/M4) & Intel • macOS 11.0+
    * *Button:* `Download macOS Disk Image`
  * **Linux Card:**
    * *Title:* Linux
    * *Package:* Standalone `.AppImage` & `.deb`
    * *Specs:* x86_64 • WebKitGTK 4.1 • Ubuntu, Debian, Fedora, Arch
    * *Button:* `Download Linux AppImage`
* **Checksum Microcopy:** `Click to copy SHA-256 hash` • `Copied to clipboard!`

---

## 9. Global Footer Copy

* **Copyright Notice:** `© 2026 ContextForge. All rights reserved. Proprietary commercial software.`
* **Privacy Assurance:** `Local-first architecture. Your code never leaves your workstation to our servers.`
* **Quick Links:** `Privacy Policy` • `Terms of Service` • `GitHub Releases` • `Keyboard Shortcuts (Alt + Space)`