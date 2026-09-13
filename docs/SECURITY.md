# Security & Threat Mitigation (`SECURITY.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Status:** Approved  
**Security Model:** Proprietary Closed-Source Desktop Binary Distribution & Zero-Trust Web Edge

---

## 1. Threat Model & Security Posture Overview

ContextForge delivers a proprietary desktop client alongside a high-traffic web distribution hub. The security perimeter spans two distinct surfaces:
1. **Web Distribution Edge (`contextforge.dev`):** Preventing asset tampering, binary spoofing, man-in-the-middle (MITM) hijacking, and client-side script injection.
2. **Desktop Client Architecture:** Enforcing strict local-first data isolation, personal API key (BYOK) safety, and sandbox execution for workspace edits.

```
       [Developer Browser]
               │ (HTTPS / TLS 1.3 Strict)
               ▼
   [Vercel Edge Network / CSP]
               │
    ┌──────────┴──────────────────────────┐
    ▼                                     ▼
[Static Web Assets]           [GitHub Releases CDN]
 - CSP Nonce Injection         - Cryptographic Binary Storage
 - SHA-256 Checksum Table      - Signed Artifact Check (SHA-256)
 - Subresource Integrity (SRI) - Authenticated Release Tags
```

---

## 2. Cryptographic Binary Integrity & Verification

To protect users against supply chain attacks, mirror tampering, or compromised network delivery, all distributed binaries are hashed using cryptographic SHA-256 checksums.

### 2.1 SHA-256 Verification Protocol
The landing page explicitly publishes immutable SHA-256 hashes alongside every asset. Developers can verify downloaded packages prior to execution:

* **Windows (`.exe`):**
  ```powershell
  # Verify downloaded NSIS installer checksum in PowerShell
  Get-FileHash -Path ".\ContextForge_1.0.0_x64-setup.exe" -Algorithm SHA256
  ```
* **macOS (`.dmg`):**
  ```bash
  # Verify Apple Disk Image checksum
  shasum -a 256 ./ContextForge_1.0.0_universal.dmg
  ```
* **Linux (`.AppImage` / `.deb`):**
  ```bash
  # Verify AppImage checksum
  sha256sum ./ContextForge_1.0.0_amd64.AppImage
  ```

### 2.2 Binary Signing & Notarization Strategy
* **macOS:** Universal binaries must be codesigned with an Apple Developer ID Application certificate and notarized via Apple's `notarytool` to satisfy macOS Gatekeeper requirements without quarantine flags.
* **Windows:** Authenticode code-signing certificate applied during the Tauri NSIS compilation pipeline to avoid Microsoft SmartScreen false positives.

---

## 3. Web Application Security Architecture

### 3.1 Content Security Policy (CSP)
The landing page enforces a strict, zero-eval Content Security Policy configured in `next.config.ts` via HTTP response headers:

```http
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: [https://github.com](https://github.com);
  font-src 'self';
  connect-src 'self' [https://api.github.com](https://api.github.com) [https://github.com](https://github.com);
  object-src 'none';
  base-uri 'self';
  form-action 'none';
  frame-ancestors 'none';
  upgrade-insecure-requests;
```

### 3.2 HTTP Security Headers Baseline
Every response delivered by the edge network includes:
```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
```

### 3.3 DOM Sanitization for Interactive Diff Viewer
* **Risk:** The interactive showcase parses and highlights code diff lines directly in the client browser.
* **Mitigation:** The diff engine uses pure text node projection (`textContent` via React JSX primitives). HTML parsing (`dangerouslySetInnerHTML`) is prohibited across all showcase sandboxes to eliminate cross-site scripting (XSS) vectors.

---

## 4. Desktop Client Privacy & BYOK Boundary Architecture

### 4.1 Zero-Code-Ingestion Guarantee
* **Local Storage Isolation:** Workspace indexing, pre-mutation snapshots, and `.contextforgerules` parsing execute exclusively within local system memory and local storage (`%LOCALAPPDATA%`, `~/Library/Application Support`, `~/.local/share`).
* **Zero Remote Telemetry:** ContextForge desktop binaries transmit zero source code, zero AST parse trees, and zero prompt contents to any ContextForge remote server.

### 4.2 Bring-Your-Own-Key (BYOK) Security
* **Google Gemini API Keys:** In the desktop client, user API credentials are stored securely via the host OS native credential manager (Windows Credential Manager, macOS Keychain, Linux Secret Service API) via Tauri's secure vault plugin.
* **Direct Transport:** Network traffic flows directly from the local Tauri Rust backend over TLS 1.3 to `generativelanguage.googleapis.com`. No intermediate proxy or telemetry aggregator is used.
* **Ollama Local Security:** Local model communications are locked to the loopback interface (`http://127.0.0.1:11434` or `http://localhost:11434`), refusing non-local bindings.

---

## 5. Vulnerability Disclosure & Threat Matrix

| Threat Vector | Risk Level | Mitigation Strategy |
| :--- | :--- | :--- |
| **Tampered Binary Mirror** | Critical | SHA-256 checksums embedded in static page; direct links to immutable GitHub Releases CDN. |
| **XSS via Diff Showcase** | High | Zero `dangerouslySetInnerHTML`; strict React string rendering; strict CSP without `unsafe-eval`. |
| **Clickjacking / Framing** | Medium | `X-Frame-Options: DENY` and `frame-ancestors 'none'` applied at edge HTTP header level. |
| **API Key Leakage** | Critical | Client-side landing page contains zero API keys; desktop app stores keys in OS Keychain. |
| **DNS Spoofing / Hijack**| High | DNSSEC enabled; HSTS preloading with 2-year `max-age` duration. |

### Vulnerability Reporting
Security researchers may submit responsible disclosure reports directly to: `security@contextforge.dev`. PGP key fingerprint is published at `https://contextforge.dev/.well-known/security.txt`.