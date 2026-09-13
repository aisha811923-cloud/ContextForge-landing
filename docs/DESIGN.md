# Dark Espresso Design System (`DESIGN.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Aesthetic:** Dark Espresso, Tactile Milled Hardware, High-Contrast Monospace Precision  
**Tone:** Industrial, Understated, Technical, Zero-Latency  

---

## 1. Color Tokens & Semantic Assignments

The design system exclusively uses the **Dark Espresso** palette. Generic cool grays (`zinc`, `slate`, `neutral`, `gray`) are strictly forbidden.

### 1.1 Core Surfaces & Structural Tokens
```css
/* Core Canvas & Well Surfaces */
--color-bg-base:        #0D0A09; /* Deepest Espresso: Viewport root & footer wells */
--color-surface-card:   #16110F; /* Level 1 Surface: Bento cards, code containers */
--color-surface-active: #1E1714; /* Level 2 Surface: Active tabs, input wells, hover states */

/* Structural Borders & Hardware Rims */
--color-border-default: #2A211D; /* 1px crisp structural divider lines */
--color-border-subtle:  #1F1815; /* Subdued card borders for nested elements */
--color-border-focus:   #D97706; /* Focus-visible keyboard boundary */

/* Tactile Inset Highlight (Milled Top Edge) */
--hardware-rim: inset 0 1px 0 rgba(255, 255, 255, 0.04);
--hardware-rim-subtle: inset 0 1px 0 rgba(255, 255, 255, 0.02);
```

### 1.2 Typography & Monospace Colors
```css
--color-text-primary:   #E6E0DD; /* High-contrast bleached bone: Headlines & active text */
--color-text-secondary: #8C827A; /* Muted warm taupe: Sub-copy, metadata, labels */
--color-text-tertiary:  #5A514B; /* Faded espresso: Inactive line numbers, structural syntax */
```

### 1.3 Semantic & Functional Accents
```css
/* Semantic Emerald: Additions, Live Telemetry, Accepted State */
--color-emerald-fg:     #4ADE80; /* Text & glyphs */
--color-emerald-bg:     #143823; /* Diff line addition surface */
--color-emerald-border: #1B4D31; /* Addition border */

/* Semantic Crimson: Deletions, Hardware Stop, Rejected State */
--color-crimson-fg:     #F87171; /* Text & glyphs */
--color-crimson-bg:     #381414; /* Diff line deletion surface */
--color-crimson-border: #521E1E; /* Deletion border */

/* Semantic Amber: Streaming Active, Queue Badges, Focus */
--color-amber-fg:       #FBBF24; /* Active token stream & highlight text */
--color-amber-bg:       #382A14; /* Queue indicator pill surface */
--color-amber-border:   #59421D; /* Accent border */
--color-amber-glow:     rgba(217, 119, 6, 0.08); /* Spotlight radial overlay */
```

---

## 2. Typography Hierarchy

Fonts are loaded via `next/font` for zero layout shift and local binary delivery.

* **Primary Sans:** `Geist Sans` or `Inter` — Used for headlines, sub-copy, body text, and marketing value propositions.
  * Tracking: Tight (`tracking-tight` / `-0.02em` on titles; `tracking-normal` on body).
* **Technical Monospace:** `Geist Mono` or `JetBrains Mono` — Used for code diffs, telemetry indicators (`tok/s`), keyboard hotkeys, binary hashes, and terminal outputs.

### Typographic Scale
| Scale Token | Font Size | Line Height | Tracking | Weight | Target Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `text-display` | `3.75rem` (60px) | `1.05` | `-0.03em` | Bold (700) | Hero Primary Title |
| `text-h1` | `2.5rem` (40px) | `1.15` | `-0.025em`| Bold (700) | Section Headlines (Bento, Pricing) |
| `text-h2` | `1.75rem` (28px) | `1.25` | `-0.02em` | SemiBold (600)| Card Titles, Modal Headers |
| `text-body` | `1.0rem` (16px) | `1.6` | `-0.01em` | Normal (400)| Explanatory paragraph text |
| `text-caption` | `0.8125rem` (13px)| `1.4` | `0em` | Medium (500)| Badges, hotkeys, metadata |
| `text-mono-sm` | `0.8125rem` (13px)| `1.5` | `0em` | Regular (400)| Code lines, terminal output |
| `text-mono-xs` | `0.6875rem` (11px)| `1.3` | `0.02em` | Medium (500)| Telemetry indicators, hashes |

---

## 3. Surface Styling & Hardware Component Primitives

### 3.1 The Milled Hardware Card Pattern
Every container, bento block, and code box adheres to this exact class recipe:
```tsx
<div className="relative rounded-xl border border-[#2A211D] bg-[#16110F] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
  {/* Card Content */}
</div>
```

### 3.2 Primary Tactical Download Button
Tactile, physical feedback with high-contrast bone typography:
```tsx
<button className="relative inline-flex items-center justify-center gap-2 rounded-lg bg-[#E6E0DD] px-6 py-3 font-sans text-sm font-semibold text-[#0D0A09] shadow-md transition-all duration-150 hover:bg-[#FFFFFF] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0A09]">
  {children}
</button>
```

### 3.3 Secondary Platform Button / Inset Well
```tsx
<button className="inline-flex items-center gap-2 rounded-lg border border-[#2A211D] bg-[#16110F] px-4 py-2 font-mono text-xs font-medium text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#8C827A]/40 hover:bg-[#1E1714] active:scale-[0.98]">
  {children}
</button>
```

### 3.4 Hardware Monospace Keyboard Shortcut (`<Kbd>`)
```tsx
<kbd className="inline-flex items-center justify-center rounded border border-[#2A211D] bg-[#1E1714] px-1.5 py-0.5 font-mono text-[11px] font-semibold text-[#8C827A] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
  Alt + Space
</kbd>
```

### 3.5 Status & Telemetry Badges
* **Stable Version Badge:**
  ```tsx
  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2A211D] bg-[#16110F] px-3 py-1 font-mono text-xs text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
    v1.0.0 Public Release
  </span>
  ```
* **Active Queue Badge:**
  ```tsx
  <span className="inline-flex items-center gap-1 rounded border border-[#59421D] bg-[#382A14] px-2 py-0.5 font-mono text-[11px] font-medium text-[#FBBF24]">
    #1 Queued
  </span>
  ```
* **Telemetry Gauge:**
  ```tsx
  <span className="inline-flex items-center gap-1.5 rounded border border-[#2A211D] bg-[#1E1714] px-2 py-1 font-mono text-xs text-[#4ADE80]">
    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22C55E]" />
    68 tok/s
  </span>
  ```

---

## 4. Diff View & Code Block Styling Specifications

### 4.1 Addition Line Styling
* Container: `bg-[#143823]/40 border-l-2 border-[#22C55E] text-[#E6E0DD]`
* Line Number: `text-[#22C55E]/60 select-none`
* Diff Marker: `+ text-[#4ADE80] font-bold select-none`

### 4.2 Deletion Line Styling
* Container: `bg-[#381414]/40 border-l-2 border-[#EF4444] text-[#E6E0DD]/70 line-through`
* Line Number: `text-[#EF4444]/60 select-none`
* Diff Marker: `- text-[#F87171] font-bold select-none`

### 4.3 Context Line Styling
* Container: `bg-transparent text-[#8C827A]`
* Line Number: `text-[#5A514B] select-none`
* Diff Marker: `  select-none`

---

## 5. Responsive Grid & Container Breakpoints

All sections sit inside a unified responsive container wrapper:
```tsx
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* Section Content */}
</div>
```

* **Mobile (< 640px):** Single column layouts, sticky header download button morphs to icon-only glyph, horizontal scroll overflow for diff inspector tables.
* **Tablet (640px – 1024px):** 2-column Bento grids, full text buttons, condensed telemetry HUD.
* **Desktop (> 1024px):** 3-column Bento grid, full interactive side-by-side Diff Inspector and Time Machine controls.