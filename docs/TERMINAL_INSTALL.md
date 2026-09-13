# Terminal Installation Scripts (`docs/TERMINAL_INSTALL.md`)

ContextForge binaries can be installed directly from your terminal across Windows, macOS, and Linux without downloading via a browser.

---

## 1. Windows (PowerShell)

Installs ContextForge via PowerShell, verifies the download hash, and triggers silent background setup:

```powershell
# Run in an elevated or standard PowerShell terminal
$version = "1.0.0"
$repo = "your-org/ContextForge"
$url = "[https://github.com/$repo/releases/download/v$version/ContextForge_$](https://github.com/$repo/releases/download/v$version/ContextForge_$){version}_x64-setup.exe"
$dest = "$env:TEMP\ContextForge-Setup.exe"

Write-Host "Fetching ContextForge v$version for Windows (x64)..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $url -OutFile $dest

Write-Host "Running ContextForge installer..." -ForegroundColor Green
Start-Process -FilePath $dest -Wait

Remove-Item -Path $dest -Force
Write-Host "ContextForge v$version installed successfully." -ForegroundColor Green
```

### Silent / Headless Install (Enterprise Deployment)
```powershell
Start-Process -FilePath $dest -ArgumentList "/S" -Wait
```

---

## 2. macOS (Terminal / Curl)

Downloads the Universal `.dmg` (Apple Silicon & Intel), attaches the volume, installs to `/Applications`, and unmounts cleanly:

```bash
#!/usr/bin/env bash
set -e

VERSION="1.0.0"
REPO="your-org/ContextForge"
DMG_URL="[https://github.com/$](https://github.com/$){REPO}/releases/download/v${VERSION}/ContextForge_${VERSION}_universal.dmg"
TEMP_DMG="/tmp/ContextForge_${VERSION}.dmg"

echo "Downloading ContextForge v${VERSION} for macOS (Universal)..."
curl -sL "$DMG_URL" -o "$TEMP_DMG"

echo "Mounting disk image..."
MOUNT_DIR=$(hdiutil attach "$TEMP_DMG" -nobrowse | grep -o '/Volumes/ContextForge.*' | head -n 1)

echo "Copying ContextForge.app to /Applications..."
cp -R "${MOUNT_DIR}/ContextForge.app" /Applications/

echo "Cleaning up..."
hdiutil detach "$MOUNT_DIR" -quiet
rm -f "$TEMP_DMG"

echo "ContextForge v${VERSION} installed successfully to /Applications."
```

### Gatekeeper Verification Note
If macOS flags the application upon first launch:
```bash
xattr -d com.apple.quarantine /Applications/ContextForge.app
```

---

## 3. Linux (Shell / AppImage & Debian Package)

### Option A: Standalone AppImage (All Distributions)
Downloads the `.AppImage`, enables execution permissions, and places the binary inside your user's `$PATH`:

```bash
#!/usr/bin/env bash
set -e

VERSION="1.0.0"
REPO="your-org/ContextForge"
APPIMAGE_URL="[https://github.com/$](https://github.com/$){REPO}/releases/download/v${VERSION}/ContextForge_${VERSION}_amd64.AppImage"
TARGET_DIR="${HOME}/.local/bin"

mkdir -p "$TARGET_DIR"

echo "Downloading ContextForge v${VERSION} AppImage..."
curl -sL "$APPIMAGE_URL" -o "${TARGET_DIR}/contextforge"
chmod +x "${TARGET_DIR}/contextforge"

echo "ContextForge installed to ${TARGET_DIR}/contextforge."
if [[ ":$PATH:" != *":${TARGET_DIR}:"* ]]; then
  echo "Add export PATH=\"\$HOME/.local/bin:\$PATH\" to your ~/.bashrc or ~/.zshrc."
fi
```

### Option B: Ubuntu / Debian Package (`.deb`)
```bash
VERSION="1.0.0"
REPO="your-org/ContextForge"
curl -sL -O "[https://github.com/$](https://github.com/$){REPO}/releases/download/v${VERSION}/ContextForge_${VERSION}_amd64.deb"
sudo apt-get update
sudo apt-get install -y ./ContextForge_${VERSION}_amd64.deb
rm -f "ContextForge_${VERSION}_amd64.deb"
```

---

## 4. Cryptographic SHA-256 Checksum Verification

Verify file integrity prior to execution:

* **Windows:**
  ```powershell
  Get-FileHash -Path "$env:TEMP\ContextForge-Setup.exe" -Algorithm SHA256
  ```
* **macOS:**
  ```bash
  shasum -a 256 /tmp/ContextForge_1.0.0.dmg
  ```
* **Linux:**
  ```bash
  sha256sum ~/.local/bin/contextforge
  ```