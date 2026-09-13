# Accessibility & A11y Standards (`ACCESSIBILITY.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Target Standard:** WCAG 2.1 Level AA Compliance  
**Audience:** All engineers, including those relying on screen readers, keyboard-only navigation, high-contrast modes, or vestibular motion preferences.

---

## 1. Color Contrast Ratios & Luminance Validation

ContextForge’s Dark Espresso palette is calibrated to exceed WCAG 2.1 AA standards (minimum 4.5:1 for normal text, 3:1 for large text and interface components).

| Token Pair | Foreground | Background | Contrast Ratio | WCAG Compliance Level |
| :--- | :--- | :--- | :--- | :--- |
| **Body Text** | `#E6E0DD` | `#0D0A09` | **15.2:1** | AAA Pass (> 7:1) |
| **Card Body** | `#E6E0DD` | `#16110F` | **13.8:1** | AAA Pass (> 7:1) |
| **Sub-copy / Metadata** | `#8C827A` | `#0D0A09` | **5.4:1** | AA Pass (> 4.5:1) |
| **Card Sub-copy** | `#8C827A` | `#16110F` | **4.9:1** | AA Pass (> 4.5:1) |
| **Diff Addition Text** | `#4ADE80` | `#143823` | **6.8:1** | AA Pass (> 4.5:1) |
| **Diff Deletion Text** | `#F87171` | `#381414` | **5.9:1** | AA Pass (> 4.5:1) |
| **Amber Active Text** | `#FBBF24` | `#382A14` | **7.2:1** | AAA Pass (> 7:1) |
| **Hardware Rim Accent** | `#D97706` | `#0D0A09` | **6.1:1** | AA Component Pass (> 3:1) |

---

## 2. Keyboard Navigation & Focus Ring Contract

Every interactive element (`<a>`, `<button>`, `<input>`, `<select>`, interactive diff toggles) must be fully navigable and operable via standard keyboard controls (`Tab`, `Shift + Tab`, `Enter`, `Space`, and Arrow keys).

### 2.1 The Focus-Visible Standard
ContextForge never disables focus rings (`outline: none` without replacement is strictly forbidden). The unified high-contrast keyboard focus ring is:

```css
focus-visible:outline-none 
focus-visible:ring-2 
focus-visible:ring-[#D97706] 
focus-visible:ring-offset-2 
focus-visible:ring-offset-[#0D0A09]
```

### 2.2 Skip to Main Content Landmark
An accessible skip-link must be the first focusable element on the DOM tree:
```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[#E6E0DD] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-semibold focus:text-[#0D0A09] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D97706]"
>
  Skip to main content
</a>
```

---

## 3. ARIA Landmarks & Structural Hierarchy

Screen readers must navigate the page using standard landmark semantics rather than non-descriptive `<div>` containers.

### 3.1 Landmark Architecture
* `<header role="banner">` — Sticky top navigation bar.
* `<main id="main-content" role="main">` — Core page content containing Hero, Showcase, Bento Grid, Benchmarks, Pricing, and Downloads.
* `<nav aria-label="Primary Navigation">` — Internal anchor navigation.
* `<section aria-labelledby="section-heading-id">` — Each major section must declare an explicit `aria-labelledby` referencing its primary heading (`<h2>`).
* `<footer role="contentinfo">` — Legal copy, terms, and hotkey triggers.

### 3.2 Heading Hierarchy
* `<h1>` is reserved strictly for the Hero title: *"The Local-First AI Agent That Never Overwrites Your Code"*.
* `<h2>` is assigned to each of the 6 core landing sections (Showcase, Features, Benchmarks, Pricing, Downloads, FAQ).
* `<h3>` is assigned to bento cards, platform cards, and modal dialog headers.
* Skipping heading levels (e.g., `<h1>` directly to `<h3>`) is forbidden.

---

## 4. Interactive Showcase Screen Reader Patterns

The interactive components must communicate their state changes to assistive technology in real time.

### 4.1 Hunk Diff Inspector (`InteractiveDiffViewer.tsx`)
Diff controls require explicit ARIA attributes to prevent screen reader ambiguity:
```tsx
{/* Accept Button */}
<button
  type="button"
  onClick={() => handleAccept(hunk.id)}
  aria-label={`Accept hunk ${hunk.id} in ${filePath}: replace lines ${hunk.oldStart} through ${hunk.oldStart + hunk.oldLines}`}
  aria-pressed={isAccepted}
  className="..."
>
  Accept Hunk
</button>

{/* Live Status Announcer */}
<div aria-live="polite" className="sr-only">
  {acceptedCount} of {totalHunks} diff hunks currently accepted.
</div>
```

### 4.2 Time Machine Scrub Bar (`TimeMachineSlider.tsx`)
The scrubber uses semantic slider attributes:
```tsx
<div
  role="slider"
  aria-label="Time Machine snapshot restore turn"
  aria-valuemin={0}
  aria-valuemax={2}
  aria-valuenow={currentTurnIndex}
  aria-valuetext={`Turn ${currentTurnIndex + 1}: ${turnDescriptions[currentTurnIndex]}`}
  tabIndex={0}
  onKeyDown={handleSliderKeyNav}
  className="..."
/>
```

---

## 5. Motion, Vestibular Safety & Reduced Motion

Users with vestibular disorders can configure their OS to prefer reduced motion. ContextForge adheres strictly to `prefers-reduced-motion: reduce`.

### 5.1 Framer Motion Reduced-Motion Fallback
Wrap animated elements in Motion components that detect the system query:
```tsx
import { useReducedMotion } from 'framer-motion';

export function AnimatedContainer({ children }) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    animate: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.05 : 0.2 } },
  };

  return (
    <motion.div initial="initial" animate="animate" variants={variants}>
      {children}
    </motion.div>
  );
}
```

### 5.2 CSS Media Query Fallback
```css
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 6. A11y Verification & Audit Checklist

- [ ] Every non-decorative SVG or image has an `aria-hidden="true"` or explicit `alt` text.
- [ ] Color is never the sole indicator of state (all diff additions/deletions use explicit `+` / `-` glyphs and text status badges in addition to green/red hues).
- [ ] Touch targets on mobile measure at least $44 \times 44\text{px}$.
- [ ] Checksum copy buttons provide an `aria-live="assertive"` announcement when text is copied.
- [ ] Keyboard focus is trapped appropriately when the Desktop Hotkeys modal is opened.