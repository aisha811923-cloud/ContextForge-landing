# Deployment & PWA Specifications (`DEPLOYMENT.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Hosting Target:** Vercel Edge Network  
**Domain Strategy:** Primary Apex (`contextforge.dev`) + Global Edge CDN

---

## 1. Edge Deployment Architecture

The landing page is deployed on the Vercel Edge Network, utilizing Static Site Generation (SSG) with immediate global edge cache replication. Static pages are compiled ahead-of-time (AOT) and distributed across globally replicated points of presence (PoPs).

```
                    [Git Push: main / release tag]
                                  │
                                  ▼
                     [GitHub Actions / Vercel CI]
                       - pnpm install --frozen-lockfile
                       - pnpm build (next build)
                       - Type check (tsc --noEmit)
                       - ESLint audit
                                  │
                                  ▼
                     [Vercel Global Edge Network]
      ┌───────────────────────────┼───────────────────────────┐
      ▼                           ▼                           ▼
[US Edge PoP]               [EU Edge PoP]               [APAC Edge PoP]
 (SSG Cached)                (SSG Cached)                (SSG Cached)
      │                           │                           │
      └───────────────────────────┼───────────────────────────┘
                                  │
                       [Zero-Latency Client Paint]
```

---

## 2. Environment Variables & Build Configurations

The production build is fully self-contained and static. Environment variables manage release tags and CDN asset targets:

```bash
# Production Environment Variables (.env.production)
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_APP_RELEASE_TAG="v1.0.0"
NEXT_PUBLIC_GITHUB_ORG="your-org"
NEXT_PUBLIC_GITHUB_REPO="ContextForge"
NEXT_PUBLIC_SITE_URL="[https://contextforge.dev](https://contextforge.dev)"
```

### Vercel Build Settings
* **Framework Preset:** Next.js
* **Build Command:** `pnpm build`
* **Output Directory:** `.next`
* **Install Command:** `pnpm install --frozen-lockfile`
* **Node.js Version:** `20.x`

---

## 3. Custom Domain & DNS Records Configuration

| Record Type | Host / Name | Target / Value | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | 300 (Auto) | Vercel Apex Anycast IP |
| **CNAME** | `www` | `cname.vercel-dns.com.` | 300 (Auto) | WWW Canonical Alias |
| **CAA** | `@` | `0 issue "letsencrypt.org"` | 3600 | SSL Certificate Authority Authorization |
| **TXT** | `@` | `v=spf1 -all` | 3600 | Email Spoofing Defense (Domain sends no mail) |

* **Apex Redirection:** `www.contextforge.dev` automatically issues a 308 permanent redirect to canonical `https://contextforge.dev`.
* **SSL/TLS Certificate:** Provisioned automatically via Let's Encrypt / Vercel SSL with automated 90-day renewals and TLS 1.3 enforcement.

---

## 4. Progressive Web App (PWA) & Manifest (`manifest.json`)

To enable developers to bookmark and install the web portal as a desktop-class PWA or offline documentation reader, ContextForge provides a lightweight web app manifest:

### 4.1 Manifest Configuration (`public/manifest.json`)
```json
{
  "name": "ContextForge — Local-First AI Workspace Architect",
  "short_name": "ContextForge",
  "description": "Proprietary, local-first AI workspace architect and code execution engine.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0D0A09",
  "theme_color": "#0D0A09",
  "orientation": "any",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

### 4.2 Service Worker Caching Policy
A minimal service worker caches:
* Core CSS and JavaScript chunks.
* Font binaries (`Geist Sans`, `Geist Mono`).
* Static documentation routes (`/privacy`, `/terms`).
* **Exclusion:** Large binary release files (`.exe`, `.dmg`, `.AppImage`) are explicitly excluded from browser service worker caches.

---

## 5. Cache Invalidation & Static Asset Lifecycles

```text
# Next.js Static Asset Cache Rules (next.config.ts)
/_next/static/*       -> Cache-Control: public, max-age=31536000, immutable
/assets/*             -> Cache-Control: public, max-age=86400, stale-while-revalidate=604800
/favicon.ico          -> Cache-Control: public, max-age=86400
/manifest.json        -> Cache-Control: public, max-age=3600, must-revalidate
```

* **Atomic Deployments:** Every commit pushed to `main` triggers a unique build hash on Vercel. Cache purging is instantaneous across all global PoPs upon deployment completion.
* **Instant Rollbacks:** In the event of an asset regression, Vercel allows 1-click instantaneous promotion of prior deployment artifacts without rebuilding.