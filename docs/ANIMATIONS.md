# Animation & Motion Specifications (`ANIMATIONS.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Engine:** Framer Motion 11+ / Tailwind CSS Keyframes  
**Design Intent:** Tactile, hardware-milled precision, sub-150ms snappy micro-interactions, and zero layout shift (CLS = 0.00).

---

## 1. Global Motion Physics & Curves

ContextForge avoids floaty, generic SaaS animations. Motion mimics high-end hardware instruments and developer terminals: rapid springs, instant state snaps, and crisp ease-outs.

| Preset Name | Configuration | Use Case |
| :--- | :--- | :--- |
| **Spring Snappy** | `type: "spring", stiffness: 450, damping: 30` | Button clicks, tab switches, badge pop counters |
| **Spring Smooth** | `type: "spring", stiffness: 260, damping: 20` | Modal entrances, Time Machine snapshot transitions |
| **Ease Out Fast** | `ease: [0.16, 1, 0.3, 1], duration: 0.15s` | Hover states, border glows, color shifts |
| **Telemetry Pulse**| `ease: "easeInOut", duration: 2.0s, repeat: Infinity` | Active streaming indicator dot, status LED |

---

## 2. Component Micro-Interaction Specs

### 2.1 Ambient Cursor Spotlight (`SpotlightCard.tsx`)
Cards in the Bento Grid dynamically track the user's cursor without re-rendering React state:
* **Mechanism:** Native `pointermove` listener updates CSS custom properties `--mouse-x` and `--mouse-y` directly on the card DOM node.
* **Overlay Layer:** An absolute overlay styled with:
  ```css
  background: radial-gradient(
    450px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
    rgba(217, 119, 6, 0.08),
    transparent 80%
  );
  ```
* **Transition:** Fade in on mouse enter (`opacity: 1`, `duration: 0.2s`), fade out on leave (`opacity: 0`, `duration: 0.3s`).

### 2.2 Interactive Hunk Diff Inspector (`InteractiveDiffViewer.tsx`)
* **Accept Hunk Animation:**
  * When `[Accept Hunk]` is clicked:
    * Background color transitions from `#143823` (Diff Addition) to `#16110F` (Unified Surface) over $120\text{ms}$.
    * Diff line marker (`+`) fades out; code shifts into standard syntax color.
    * The accepted counter badge pops using **Spring Snappy**: `scale: [1, 1.25, 1]`.
* **Reject Hunk Animation:**
  * When `[Reject Hunk]` is clicked:
    * The entire hunk container animates: `opacity: 0.35`, `filter: "grayscale(80%)"`, with a subtle strike-through line animating across the hunk header (`scaleX: [0, 1]`).

### 2.3 Time Machine Scrub Slider (`TimeMachineSlider.tsx`)
* **Turn Switch (1 ➔ 2 ➔ 3):**
  * Uses `AnimatePresence mode="wait"`.
  * Exiting state: `opacity: 0`, `y: -6`, `duration: 0.12s`.
  * Entering state: `opacity: 0 -> 1`, `y: 6 -> 0`, `duration: 0.15s`.
  * Active File Tree: Files affected by the turn highlight with an emerald or crimson outline that flashes for $300\text{ms}$ before settling to neutral `#2A211D`.

### 2.4 Sticky Header Scroll Blur (`Header.tsx`)
* **Trigger Threshold:** `window.scrollY > 20px`.
* **State Transition:**
  * Unscrolled: `bg-transparent`, `border-color: transparent`, `backdrop-blur-none`.
  * Scrolled: `bg-[#0D0A09]/80`, `border-[#2A211D]`, `backdrop-blur-md`.
  * Duration: $150\text{ms}$ ease-out.

### 2.5 Dynamic OS Button Morph
* On hydration mount, once `useOperatingSystem` detects the host platform:
  * The generic CTA button morphs into the detected OS label:
    ```typescript
    initial={{ opacity: 0.8, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    ```
  * Flanking secondary platform pills smoothly stagger in with a $50\text{ms}$ delay.

### 2.6 Telemetry HUD Live Ticker (`HeroMockup.tsx`)
* **Streaming Counter (`tok/s`):** Number increments mimic variable streaming output ($64 \to 72 \to 68\text{ tok/s}$) updating at $800\text{ms}$ intervals with a quick vertical roll (`y: [-8, 0]`, `opacity: [0, 1]`).
* **Breathing LED Dot:** Continuous ambient glow:
  ```typescript
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    boxShadow: [
      "0 0 0px rgba(34,197,94,0)",
      "0 0 10px rgba(34,197,94,0.5)",
      "0 0 0px rgba(34,197,94,0)",
    ]
  }}
  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  ```

---

## 3. Reduced Motion & Performance Guardrails

* **Accessibility Overrides (`prefers-reduced-motion`):**
  Wrap all motion configurations with a reduced-motion check. When enabled:
  * Scale and translation animations are disabled (`transform: none`).
  * Only instantaneous opacity crossfades ($50\text{ms}$) are permitted.
* **Hardware Acceleration:** All animated properties are strictly restricted to `transform` and `opacity`. Never animate `margin`, `padding`, `width`, `height`, or `top`/`left`.