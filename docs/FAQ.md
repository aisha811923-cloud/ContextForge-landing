# Technical FAQ & Objection Handling (`docs/FAQ.md`)

**Project:** ContextForge Web Landing Page & Distribution Hub  
**Document Version:** 1.0.0  
**Target Audience:** Security-conscious engineers, systems developers, and engineering leads

---

## 1. Frequently Asked Questions

### Is ContextForge open-source?
**No.** ContextForge is proprietary, closed-source desktop software. However, it is strictly architected under a **local-first** security model: the client runs locally on your workstation, operates directly on your local files, and does not transmit, store, or mirror your source code on ContextForge servers.

---

### Where does my source code go when I use ContextForge?
**Your source code remains entirely on your machine.** 
* Workspace indices, AST caches, file snapshots, and `.contextforgerules` are stored solely on your local filesystem (`%LOCALAPPDATA%`, `~/Library/Application Support`, or `~/.local/share`).
* When you submit a prompt, the required context is sent directly over an encrypted TLS connection from your device to Google Cloud endpoints using your personal Gemini API key. 
* If you run local models via Ollama, context never leaves `localhost:11434`—zero internet traffic is generated.

---

### How does the Bring-Your-Own-Key (BYOK) model work?
ContextForge does not charge markup, middleman tokens, or monthly subscriptions on model inference. You supply your own Google Gemini API key:
* Your key is stored in your operating system's native credential vault (Windows Credential Manager, macOS Keychain, or Linux Secret Service API).
* API requests are dispatched straight from your desktop client to Google. You pay Google directly at their standard rates (or utilize their free API tier limits).

---

### Do I need Ollama installed to use ContextForge?
**No.** Ollama is completely optional. ContextForge is engineered with a dual-inference bridge:
* Cloud streaming via Google Gemini is the default configuration.
* If you install and start Ollama (`localhost:11434`), ContextForge automatically detects running local models and allows you to switch seamlessly between cloud and local offline inference. If Ollama is not installed, local options remain safely disabled without affecting cloud functionality.

---

### How does Time Machine rollback differ from Git?
Git requires manual staging, committing, or dirty-tree stashing. ContextForge Time Machine operates at the **agent turn level**:
* Before ContextForge writes or mutates a single file on disk, it writes an atomic pre-mutation snapshot to a dedicated local cache directory.
* If an AI generation produces hallucinated imports, broken refactors, or unwanted deletions, clicking **Revert Turn** immediately restores the affected files to their exact pre-turn state.
* It does not pollute your Git commit log, create detached HEADs, or alter your Git reflog.

---

### How do `.contextforgerules` work?
Place a `.contextforgerules` file in the root of your project directory. ContextForge automatically ingests this file whenever the workspace is loaded. The engine prepends your rules directly into the system prompt context on every generation turn, ensuring the AI strictly adheres to your architectural choices, package managers, naming conventions, and file-access restrictions.

---

### What are the minimum system requirements?
Because ContextForge is compiled in native Rust via Tauri v2 rather than bundled with a heavy Chromium browser instance, system overhead is minimal:
* **Windows:** Windows 10 or 11 (64-bit). Microsoft Edge WebView2 runtime (pre-installed on modern Windows).
* **macOS:** macOS 11.0 (Big Sur) or higher. Native Universal binary runs on Apple Silicon (M1/M2/M3/M4) and Intel Macs.
* **Linux:** Modern 64-bit distribution (Ubuntu 20.04+, Debian 11+, Fedora 36+, Arch Linux) with `libwebkit2gtk-4.1` installed.
* **Hardware:** 200MB available disk space, 4GB RAM minimum (sub-50MB idle usage).

---

### Why choose Tauri v2 over Electron?
Electron applications package an entire copy of Chromium and Node.js with every app, leading to $150\text{MB}+$ download sizes and $400\text{MB} - 800\text{MB}$ idle memory consumption. ContextForge compiles natively with Rust and hooks into your operating system's built-in web engine (WebKit on macOS/Linux, WebView2 on Windows). The result:
* An installer size of under $15\text{MB}$.
* Idle RAM footprint under $50\text{MB}$.
* Cold application startup in under $250\text{ms}$.

---

### How do updates work?
ContextForge checks for signed release assets directly against the public GitHub Releases repository. When an update is detected, you receive an unobtrusive notification detailing the changelog, with 1-click upgrade execution. We never push forced silent background updates.