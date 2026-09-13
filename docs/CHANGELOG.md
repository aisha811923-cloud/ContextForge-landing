# Changelog (`docs/CHANGELOG.md`)

All notable changes to the ContextForge desktop workspace client and distribution assets are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-09-13

### Added
- **Non-Blocking Prompt Queue:**
  - Implemented asynchronous turn queue allowing users to submit follow-up directives while the engine streams active completions.
  - Added hardware stop button (`Esc`) to cleanly interrupt token generation or abort queued turns without crashing the active session.
- **Time Machine Snapshot Rollback Engine:**
  - Automated pre-mutation file system captures before applying agent modifications.
  - Added 1-click turn restoration (`Ctrl + Shift + Z`) restoring affected workspace files to exact pre-turn state.
  - Snapshots stored locally in user data directories (`%LOCALAPPDATA%`, `~/Library/Application Support`, `~/.local/share`).
- **Unified Hunk Diff Inspector:**
  - Integrated hunk-by-hunk patch inspector enabling granular acceptance (`Ctrl + Enter`) or rejection (`Ctrl + Backspace`) of code additions and deletions.
  - Unified diff view with colored syntax highlighting and addition/deletion markers.
- **Persistent Workspace Rules Engine:**
  - Added automatic detection and ingestion of root-level `.contextforgerules`.
  - Enforces project boundaries, coding conventions, and excluded file paths into system prompts on every execution turn.
- **Real-Time Telemetry HUD:**
  - Added sub-millisecond measurement of Time-To-First-Token (TTFT).
  - Real-time generation throughput speed gauge (tok/s).
  - Context window ceiling utilization bar with model threshold warnings.
- **Dual Inference Bridge (Gemini + Local Ollama):**
  - Native streaming integration with Google Gemini 1.5 Pro & Flash via Bring-Your-Own-Key (BYOK).
  - Automatic detection and zero-crash failover to local Ollama daemon (`http://localhost:11434`) when network connectivity drops.
- **Native OS Spotlight Summon (`Alt + Space`):**
  - Global system hotkey summoning ContextForge floating architect HUD over active IDEs and terminal windows.
- **Multi-Platform Native Binaries:**
  - Windows: 64-bit NSIS installer executable (`ContextForge_1.0.0_x64-setup.exe`) with automated Edge WebView2 verification.
  - macOS: Universal binary disk image (`ContextForge_1.0.0_universal.dmg`) supporting Apple Silicon (ARM64) and Intel (x86_64).
  - Linux: Standalone portable `.AppImage` and Debian package (`.deb`) utilizing WebKitGTK 4.1.

### Security & Privacy
- Zero cloud repository syncing: workspace files and snapshot logs remain 100% on the local disk.
- BYOK API credentials encrypted via host operating system keychains (Windows Credential Manager, macOS Keychain, Linux Secret Service).
- Cryptographic SHA-256 checksums published for all release binaries.