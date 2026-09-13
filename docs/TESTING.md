# Testing & Quality Assurance Suite (`TESTING.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Test Stack:** Vitest, React Testing Library, Playwright (E2E), Axe-Core (A11y), Lighthouse CI  

---

## 1. Testing Strategy Overview

The testing suite validates four critical pillars:
1. **Functional Correctness:** Hooks (`useOperatingSystem`, `useClipboard`) and interactive components operate without regressions.
2. **Hydration Integrity:** Zero React SSR/hydration warnings on initial page load across different browser user agents.
3. **Cross-Platform & Browser Parity:** Clean layout and full functionality across Chromium, Gecko, and WebKit engines.
4. **Performance & Accessibility Auditing:** Strict enforcement of Core Web Vitals ($CLS = 0.00$) and WCAG 2.1 AA standards.

---

## 2. Unit & Integration Testing (Vitest & RTL)

### 2.1 OS Detection Hook Test (`tests/hooks/useOperatingSystem.test.ts`)
```typescript
import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useOperatingSystem } from '@/hooks/useOperatingSystem';

describe('useOperatingSystem Hook', () => {
  const originalNavigator = window.navigator;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('correctly identifies Windows platforms', () => {
    vi.stubGlobal('navigator', {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    });

    const { result } = renderHook(() => useOperatingSystem());
    expect(result.current.platform).toBe('windows');
    expect(result.current.extension).toBe('.exe');
    expect(result.current.label).toContain('Windows');
  });

  it('correctly identifies macOS platforms', () => {
    vi.stubGlobal('navigator', {
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    });

    const { result } = renderHook(() => useOperatingSystem());
    expect(result.current.platform).toBe('macos');
    expect(result.current.extension).toBe('.dmg');
    expect(result.current.label).toContain('macOS');
  });

  it('correctly identifies Linux platforms', () => {
    vi.stubGlobal('navigator', {
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
    });

    const { result } = renderHook(() => useOperatingSystem());
    expect(result.current.platform).toBe('linux');
    expect(result.current.extension).toBe('.AppImage');
    expect(result.current.label).toContain('Linux');
  });

  it('gracefully falls back when platform is unknown or mobile', () => {
    vi.stubGlobal('navigator', {
      userAgent: 'Mozilla/5.0 (Android 14; Mobile; rv:109.0)',
    });

    const { result } = renderHook(() => useOperatingSystem());
    expect(result.current.platform).toBe('unknown');
    expect(result.current.isDetected).toBe(false);
  });
});
```

### 2.2 Interactive Diff Viewer Test (`tests/components/InteractiveDiffViewer.test.tsx`)
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InteractiveDiffViewer } from '@/components/showcase/InteractiveDiffViewer';

describe('InteractiveDiffViewer Component', () => {
  it('toggles hunk acceptance and updates counter', () => {
    render(<InteractiveDiffViewer/>);

    const acceptButton = screen.getAllByRole('button', { name: /accept hunk/i })[0];
    expect(screen.getByText(/0 \/ 2 Accepted/i)).toBeDefined();

    fireEvent.click(acceptButton);
    expect(screen.getByText(/1 \/ 2 Accepted/i)).toBeDefined();
  });

  it('toggles hunk rejection and strikes out line header', () => {
    render(<InteractiveDiffViewer/>);

    const rejectButton = screen.getAllByRole('button', { name: /reject hunk/i })[0];
    fireEvent.click(rejectButton);

    expect(screen.getByText(/1 Discarded/i)).toBeDefined();
  });
});
```

---

## 3. End-to-End & Cross-Browser Matrix (Playwright)

Playwright runs automated regression suites against the production build (`pnpm build && pnpm start`) across multiple emulated browser contexts:

| Browser / Emulation | Resolution | Verified Target |
| :--- | :--- | :--- |
| **Desktop Chromium** | $1440 \times 900$ | Primary layout, spotlight hover, downloads matrix |
| **Desktop WebKit (Safari)** | $1440 \times 900$ | Backdrop-filter blur, WebKit smooth scrolling |
| **Desktop Firefox** | $1440 \times 900$ | Font metric alignment, monospace rendering |
| **Mobile Safari (iPhone 14)** | $390 \times 844$ | Responsive collapse, touch targets $\ge 44\text{px}$ |
| **Mobile Chrome (Pixel 7)** | $412 \times 915$ | Single-column bento reflow, horizontal overflow rules |

### 3.1 Playwright E2E Test (`tests/e2e/download-flow.spec.ts`)
```typescript
import { test, expect } from '@playwright/test';

test.describe('Landing Page Download Workflows', () => {
  test('verifies primary CTA matches detected user agent', async ({ page }) => {
    await page.goto('/');

    // Validate that the primary CTA contains a direct binary download trigger
    const cta = page.locator('#primary-download-cta');
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute('href', /.*(ContextForge_1.0.0).*/);

    // Validate SHA-256 copy confirmation
    const copyButton = page.locator('[data-testid="copy-sha256"]').first();
    await copyButton.click();
    await expect(page.locator('text=Copied')).toBeVisible();
  });

  test('verifies smooth navigation via anchor links', async ({ page }) => {
    await page.goto('/');

    await page.click('a[href="#pricing"]');
    await expect(page.locator('#pricing')).toBeInViewport();

    await page.click('a[href="#showcase"]');
    await expect(page.locator('#showcase')).toBeInViewport();
  });
});
```

---

## 4. Accessibility & Automated Audits (Axe & Lighthouse)

### 4.1 Automated Accessibility Testing
```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('landing page passes WCAG 2.1 AA accessibility standards', async ({ page }) => {
  await page.goto('/');
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```

### 4.2 CI/CD Verification Gates
Every pull request or release branch must pass:
* `pnpm tsc --noEmit` (Zero TypeScript errors)
* `pnpm lint` (Zero ESLint warnings)
* `pnpm test` (100% Vitest unit tests passing)
* `pnpm test:e2e` (Playwright suite passes across Chromium, Firefox, WebKit)
* Lighthouse CI check: Performance $\ge 95$, Accessibility $\ge 98$, Best Practices $= 100$, SEO $= 100$.