# Privacy Policy (`docs/PRIVACY_POLICY.md`)

**Last Updated:** September 13, 2026  
**Effective Date:** September 13, 2026  
**Product:** ContextForge Desktop Client & Distribution Hub (`contextforge.dev`)  
**Publisher:** ContextForge Systems

---

## 1. Architectural Privacy Commitment: Local-First by Design

ContextForge is engineered with a **local-first, zero-cloud workspace architecture**. Unlike traditional cloud-hosted AI coding assistants, ContextForge executes directly on your personal workstation or local network. 

**We do not maintain centralized servers that ingest, store, inspect, train on, or mirror your source code.**

---

## 2. Information ContextForge Does NOT Collect

When you download, install, and execute the ContextForge desktop client on Windows, macOS, or Linux, we enforce strict isolation:

* **No Source Code Telemetry:** Your project files, folder trees, abstract syntax trees (ASTs), and git configurations remain strictly on your local device.
* **No Snapshot Retention:** All Time Machine turn snapshots, diff caches, and file backups are written strictly to your local filesystem (`%LOCALAPPDATA%`, `~/Library/Application Support`, or `~/.local/share`).
* **No Rule Harvesting:** Custom `.contextforgerules` defined in your repositories are never transmitted to our infrastructure.
* **No Account Creation / Identity Tracking:** The core desktop client runs immediately without requiring an account, email registration, phone verification, or credit card collection.

---

## 3. Third-Party Model Routing & BYOK (Bring Your Own Key)

ContextForge provides direct client-to-provider inference bridging. You retain full ownership and control over your model connectivity:

### 3.1 Google Gemini API
* **Direct Encrypted Transport:** When utilizing Google Gemini, your desktop client communicates directly with Google Cloud endpoints (`generativelanguage.googleapis.com`) via TLS 1.3.
* **No Middleman Proxy:** Traffic never routes through an intermediate ContextForge proxy server or caching layer.
* **Key Storage:** Your Gemini API keys are encrypted at rest using your host operating system's native hardware-backed vault (Windows Credential Manager, macOS Keychain, Linux Secret Service).
* **Provider Terms:** Prompts and context submitted via your personal API key are governed directly by Google's API Terms of Service and Enterprise Privacy Commitments.

### 3.2 Local Ollama Daemon
* **Zero Network Egress:** When routing turns to local models via Ollama, all inference payloads are bound strictly to your loopback address (`http://127.0.0.1:11434` or `http://localhost:11434`). Zero packets leave your workstation.

---

## 4. Web Landing Page Analytics & Cookies (`contextforge.dev`)

The ContextForge distribution website adheres to modern, cookieless privacy standards:

* **Zero Tracking Cookies:** We do not drop tracking cookies, canvas fingerprinting scripts, or cross-site behavioral trackers on your browser.
* **Aggregated Edge Analytics:** Our edge hosting network (Vercel) processes anonymized server request metrics (HTTP status codes, coarse country code, requested URL path, operating system family) solely to monitor distribution bandwidth and detect denial-of-service attempts.
* **Do Not Track (DNT) / GPC:** We automatically honor Global Privacy Control (GPC) and Do Not Track headers.

---

## 5. Security & Binary Integrity

* Every published binary (`.exe`, `.dmg`, `.AppImage`, `.deb`) is compiled via transparent, automated GitHub Actions build runners.
* Cryptographic SHA-256 checksums are published directly on our landing page and release manifests to allow independent client-side verification prior to binary execution.

---

## 6. Updates to This Policy

We may update this Privacy Policy to reflect changes in binary distribution channels or compliance requirements. Any revisions will be published at `https://contextforge.dev/privacy` with an updated "Last Updated" timestamp.

---

## 7. Contact & Security Inquiries

For technical privacy questions or responsible security disclosures, contact our privacy engineers at:
* **Email:** `privacy@contextforge.dev`
* **PGP Key:** Published at `https://contextforge.dev/.well-known/security.txt`