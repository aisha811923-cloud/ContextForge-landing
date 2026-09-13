import { PlatformKey, ReleaseAsset, ReleasePackage, PlatformRelease } from '@/types';

export type { ReleasePackage, PlatformRelease };

export const LATEST_VERSION = '0.1.0';

export const RELEASES_DATA: Record<'windows' | 'macos' | 'linux', PlatformRelease> = {
  windows: {
    name: 'Windows',
    platform: 'windows',
    version: '0.1.0',
    primaryAsset: {
      filename: 'ContextForge_0.1.0_x64-setup.exe',
      extension: '.exe',
      url: 'https://github.com/aisha811923-cloud/ContextForge-releases/releases/download/v1.0.0/ContextForge_0.1.0_x64-setup.exe',
      size: '14.2 MB',
      sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    },
    systemRequirements: 'Windows 10 / 11 (64-bit) • Microsoft Edge WebView2',
  },
  macos: {
    name: 'macOS',
    platform: 'macos',
    version: '0.1.0',
    primaryAsset: {
      filename: 'ContextForge_0.1.0_universal.dmg',
      extension: '.dmg',
      url: 'https://github.com/aisha811923-cloud/ContextForge-releases/releases/download/v1.0.0/ContextForge_0.1.0_universal.dmg',
      size: '16.8 MB',
      sha256: 'a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0',
    },
    secondaryPackages: [
      {
        format: '.tar.gz',
        label: 'Universal App Archive (.tar.gz)',
        url: 'https://github.com/aisha811923-cloud/ContextForge-releases/releases/download/v1.0.0/ContextForge_universal.app.tar.gz',
      },
    ],
    systemRequirements: 'macOS 11.0+ (Big Sur) • Universal (Apple Silicon M1-M4 & Intel)',
  },
  linux: {
    name: 'Linux',
    platform: 'linux',
    version: '0.1.0',
    primaryAsset: {
      filename: 'ContextForge_0.1.0_amd64.AppImage',
      extension: '.AppImage',
      url: 'https://github.com/aisha811923-cloud/ContextForge-releases/releases/download/v1.0.0/ContextForge_0.1.0_amd64.AppImage',
      size: '15.4 MB',
      sha256: '9f8e7d6c5b4a3210fedcba9876543210fedcba9876543210fedcba9876543210',
    },
    secondaryPackages: [
      {
        format: '.deb',
        label: 'Debian / Ubuntu (.deb)',
        url: 'https://github.com/aisha811923-cloud/ContextForge-releases/releases/download/v1.0.0/ContextForge_0.1.0_amd64.deb',
      },
      {
        format: '.rpm',
        label: 'Fedora / RHEL (.rpm)',
        url: 'https://github.com/aisha811923-cloud/ContextForge-releases/releases/download/v1.0.0/ContextForge-0.1.0-1.x86_64.rpm',
      },
    ],
    systemRequirements: 'glibc 2.31+ • WebKitGTK 4.1',
  },
};

export const RELEASES: Record<Exclude<PlatformKey, 'unknown'>, ReleaseAsset> = {
  windows: {
    platform: 'windows',
    osName: RELEASES_DATA.windows.name,
    fileName: RELEASES_DATA.windows.primaryAsset.filename,
    version: LATEST_VERSION,
    fileSize: RELEASES_DATA.windows.primaryAsset.size,
    architecture: 'x64 (64-bit)',
    sha256: RELEASES_DATA.windows.primaryAsset.sha256,
    downloadUrl: RELEASES_DATA.windows.primaryAsset.url,
    format: '.exe (NSIS Setup)',
    requirements: RELEASES_DATA.windows.systemRequirements,
    installCommand: 'powershell -c "irm https://contextforge.dev/install.ps1 | iex"',
  },
  macos: {
    platform: 'macos',
    osName: RELEASES_DATA.macos.name,
    fileName: RELEASES_DATA.macos.primaryAsset.filename,
    version: LATEST_VERSION,
    fileSize: RELEASES_DATA.macos.primaryAsset.size,
    architecture: 'Universal (Apple Silicon M1-M4 & Intel)',
    sha256: RELEASES_DATA.macos.primaryAsset.sha256,
    downloadUrl: RELEASES_DATA.macos.primaryAsset.url,
    format: 'Universal .dmg',
    requirements: RELEASES_DATA.macos.systemRequirements,
    secondaryPackages: RELEASES_DATA.macos.secondaryPackages,
    installCommand: 'curl -fsSL https://contextforge.dev/install.sh | bash',
  },
  linux: {
    platform: 'linux',
    osName: RELEASES_DATA.linux.name,
    fileName: RELEASES_DATA.linux.primaryAsset.filename,
    version: LATEST_VERSION,
    fileSize: RELEASES_DATA.linux.primaryAsset.size,
    architecture: 'amd64 / x86_64',
    sha256: RELEASES_DATA.linux.primaryAsset.sha256,
    downloadUrl: RELEASES_DATA.linux.primaryAsset.url,
    format: '.AppImage (Standalone)',
    requirements: RELEASES_DATA.linux.systemRequirements,
    secondaryPackages: RELEASES_DATA.linux.secondaryPackages,
    installCommand: 'curl -fsSL https://contextforge.dev/install.sh | bash',
  },
};

export const DEFAULT_RELEASE: ReleaseAsset = RELEASES.windows;

export const ALL_RELEASES = Object.values(RELEASES);
