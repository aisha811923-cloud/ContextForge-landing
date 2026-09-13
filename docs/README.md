# Project README & Local Development Guide (`README.md`)

# ContextForge — Web Landing Page & Distribution Hub

Official web portal and distribution repository for **ContextForge**, the proprietary, local-first AI workspace architect and code execution engine built on Tauri v2 (Rust).

This repository powers [`contextforge.dev`](https://contextforge.dev), hosted on the Vercel Edge Network. It provides high-converting marketing sections, interactive proof-of-control sandboxes, real-time operating system detection, and verified cross-platform binary distributions.

---

## Architecture & Tech Stack

- **Framework:** Next.js 15+ (App Router, Static Site Generation)
- **Runtime / UI:** React 19 / TypeScript 5
- **Styling Engine:** Tailwind CSS with custom **Dark Espresso** hardware tokens
- **Micro-Interactions:** Framer Motion 11+
- **Icons:** Lucide React
- **Hosting / Edge:** Vercel Edge Network (SSG with zero-lag edge caching)

---

## Project Specifications & Documentation Directory

All architectural constraints, design tokens, legal terms, and execution directives are cataloged under the `docs/` folder:

| File | Description |
| :--- | :--- |
| [`PRD.md`](docs/PRD.md) | Product Requirements Document (features, personas, tiers) |
| [`TRD.md`](docs/TRD.md) | Technical Architecture & Client Island contracts |
| [`AGENT.md`](docs/AGENT.md) | Antigravity AI Agent Directives & Guardrails |
| [`.cursorrules`](.cursorrules) | IDE Workspace conventions & color palette enforcement |
| [`DESIGN.md`](docs/DESIGN.md) | Dark Espresso design system, token dictionary & milled borders |
| [`ANIMATIONS.md`](docs/ANIMATIONS.md) | Motion physics, spotlight tracking & spring presets |
| [`ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Master directory tree, module map & component data flows |
| [`WEBFLOW.md`](docs/WEBFLOW.md) | Navigation architecture, anchor map & CTA logic |
| [`COPYWRITING.md`](docs/COPYWRITING.md) | Verbatim marketing headlines, pillar copy & trust tags |
| [`FAQ.md`](docs/FAQ.md) | Technical objection handling (BYOK, Git vs Snapshots, privacy) |
| [`CHANGELOG.md`](docs/CHANGELOG.md) | Official release notes for desktop client v1.0.0 |
| [`TERMINAL_INSTALL.md`](docs/TERMINAL_INSTALL.md) | One-line terminal commands (PowerShell, macOS curl, Linux) |
| [`PRIVACY_POLICY.md`](docs/PRIVACY_POLICY.md) | Legal policy (zero code retention, local isolation) |
| [`LEGAL_TERMS.md`](docs/LEGAL_TERMS.md) | Proprietary commercial software license & BYOK terms |
| [`SECURITY.md`](docs/SECURITY.md) | SHA-256 binary verification, CSP & threat mitigation |
| [`DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Vercel Edge deployment, DNS records & PWA manifest |
| [`ERROR_HANDLING.md`](docs/ERROR_HANDLING.md) | Fallback hierarchies for OS sniffing and GitHub mirrors |
| [`TESTING.md`](docs/TESTING.md) | Vitest, RTL, Playwright E2E and Lighthouse QA matrix |
| [`ACCESSIBILITY.md`](docs/ACCESSIBILITY.md) | WCAG 2.1 AA color contrast, ARIA landmarks & reduced motion |
| [`PERFORMANCE.md`](docs/PERFORMANCE.md) | Core Web Vitals budget (LCP < 1.0s, CLS = 0.00) |
| [`CONFIG_FILES.md`](docs/CONFIG_FILES.md) | Tailwind, TypeScript, Next.js and PostCSS manifests |
| [`SEO_METADATA.md`](docs/SEO_METADATA.md) | JSON-LD schema, OpenGraph card specs & sitemaps |
| [`ROADMAP.md`](docs/ROADMAP.md) | 7-phase step-by-step implementation milestones |

---

## Quick Start & Local Setup

### 1. Prerequisites
- Node.js `20.x` or higher
- `pnpm` (v9.x recommended)

### 2. Installation
```bash
# Clone the landing page repository
git clone [https://github.com/your-org/contextforge-landing.git](https://github.com/your-org/contextforge-landing.git)
cd contextforge-landing

# Install dependencies deterministically
pnpm install --frozen-lockfile
```

### 3. Development Server
```bash
pnpm dev
```
Open [`http://localhost:3000`](http://localhost:3000) in your browser.

### 4. Code Quality & Type Verification
```bash
# Run strict TypeScript validation
pnpm type-check

# Run ESLint checks
pnpm lint

# Execute unit and integration tests
pnpm test
```

### 5. Production Build Simulation
```bash
pnpm build
pnpm start
```

---

## The Dark Espresso Color Tokens

Never use generic Tailwind grays (`zinc`, `slate`, `gray`). Apply these exact color tokens:

- **Canvas Base:** `#0D0A09`
- **Card Surface:** `#16110F`
- **Active Wells / Hover:** `#1E1714`
- **Standard Borders:** `#2A211D`
- **Inner Milled Rim:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]`
- **Primary Typography:** `#E6E0DD`
- **Taupe Metadata:** `#8C827A`
- **Semantic Accents:** Emerald (`#22C55E`), Crimson (`#EF4444`), Amber (`#D97706`)

---

## Deployment to Vercel

1. Commit all files to the `main` branch.
2. Link the repository to your Vercel organization.
3. Configure the apex domain `contextforge.dev`.
4. Deploy with build command `pnpm build` and output directory `.next`.

---

## License & Proprietary Rights

ContextForge and the assets within this repository are proprietary commercial software.  
© 2026 ContextForge Systems. All rights reserved.