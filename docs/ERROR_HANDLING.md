# Error Handling, Resilience & Failure Mitigation (`ERROR_HANDLING.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Target Environment:** Client-Side React 19 / Next.js Edge Runtime  
**Goal:** Zero Broken UI States, Seamless Fallbacks for OS Detection, and Resilient Asset Delivery

---

## 1. Operating System Detection Fallbacks

The client relies on `navigator.userAgent` and the User-Agent Client Hints API (`navigator.userAgentData`) to detect the visitor's operating system. Privacy browsers (Brave, Tor, Firefox with anti-fingerprinting), browser extensions, or unusual OS identifiers can obscure or block these indicators.

### 1.1 Detection Matrix & Fallback Hierarchy
```
[Page Mounts]
      │
      ├── 1. Check `navigator.userAgentData?.platform` (Modern Chromium)
      │      └── Match "win", "mac", "linux" ➔ Set OS State
      │
      ├── 2. Fallback: Parse `navigator.userAgent` (Gecko, Safari, Legacy)
      │      └── Match "win", "mac", "linux", "x11" ➔ Set OS State
      │
      └── 3. Ultimate Fallback: Detection Inconclusive or Mobile Browser
             └── Transition CTA to "Download ContextForge v1.0.0"
                 └── Click triggers smooth scroll to `#downloads` platform matrix.
```

### 1.2 Graceful Degradation Pattern
If detection fails, the UI must never display an empty button or throw a hydration error:
* **Initial Server Render:** Renders a neutral, universal CTA: `Download ContextForge v1.0.0`.
* **Failed / Indeterminate Sniffing:** Remains as `Download ContextForge v1.0.0` with a trailing chevron icon. Clicking it scrolls the viewport directly to the multi-platform card grid at `#downloads`.
* **Mobile Devices (iOS / Android):** Displays `Download for Desktop` with a subtle helper tag: `ContextForge is engineered for desktop workstations (Windows, macOS, Linux)`.

---

## 2. Interactive Island Resilience & Error Boundaries

The landing page features client-side interactive widgets (the Hunk Diff Inspector, Time Machine scrub bar, and Spotlight glow). An uncaught JavaScript exception inside an interactive sandbox must never break page navigation or crash the parent document.

### 2.1 React Error Boundary Component (`src/components/common/IslandErrorBoundary.tsx`)
```tsx
'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  islandName: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class IslandErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[ContextForge Island Error] in ${this.props.islandName}:`, error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-[#381414] bg-[#16110F] p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#381414] text-[#F87171]">
            <AlertTriangle className="h-5 w-5"/>
          </div>
          <p className="mt-3 font-mono text-xs text-[#8C827A]">
            Unable to render {this.props.islandName}
          </p>
          <button
            onClick={this.handleReset}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#2A211D] bg-[#1E1714] px-3 py-1.5 font-mono text-xs text-[#E6E0DD] transition-colors hover:bg-[#2A211D]"
          >
            <RotateCcw className="h-3.5 w-3.5"/>
            Reset Component
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## 3. Asset Download & Mirror Failures

Binary assets are served via GitHub Releases. If GitHub experiences localized CDN outages, rate limiting, or temporary HTTP 404/500 errors during tag republishing, the landing page provides active failure fallbacks.

### 3.1 Download Link Architecture & Failover
* **Primary Route:** Direct URL pointing to the release artifact:  
  `https://github.com/<org>/ContextForge/releases/download/v1.0.0/ContextForge_1.0.0_x64-setup.exe`
* **Fallback Strategy:** Every download card renders a discreet secondary link: `Mirror / Releases Archive`.
* **Mirror Target:** Points to the tagged GitHub releases browser page (`https://github.com/<org>/ContextForge/releases/tag/v1.0.0`), allowing users to manually pick alternative binaries if direct links fail.

---

## 4. Clipboard API Fallbacks (SHA-256 Copy)

Clicking the SHA-256 verification pill copies the 64-character hash. The native `navigator.clipboard` API requires a secure HTTPS origin and explicit browser window focus; otherwise, it throws a `NotAllowedError`.

### 4.1 Resilient Clipboard Implementation (`src/hooks/useClipboard.ts`)
```typescript
'use client';

import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text: string) => {
    // 1. Try modern asynchronous Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), timeout);
        })
        .catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }

    // 2. Legacy execCommand textarea fallback
    function fallbackCopy(str: string) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = str;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), timeout);
        }
      } catch (err) {
        console.error('Failed to copy checksum to clipboard', err);
      }
    }
  }, [timeout]);

  return { copied, copy };
}
```

---

## 5. Network & Offline Indicators

If a user loses internet connectivity while browsing:
* The landing page remains fully navigable thanks to static SSG edge pre-rendering.
* The Hero live telemetry indicator changes its state dot from breathing green (`#22C55E`) to a muted offline state (`#8C827A`), updating its text to `Offline — Local Cached`.
* Interactive diff sandboxes continue to work seamlessly since they rely purely on local state (`mockDiffs.ts`) with zero network dependencies.