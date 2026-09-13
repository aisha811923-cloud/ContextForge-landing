/**
 * ContextForge TypeScript Type Definitions
 * Strict typing across platform detection, release artifacts, interactive diff hunks,
 * hardware hotkeys, benchmarks, and FAQ datasets.
 */

// =============================================================================
// Platform & OS State Types
// =============================================================================

export type PlatformKey = 'windows' | 'macos' | 'linux' | 'unknown';

export interface ReleasePackage {
  format: string;
  label: string;
  url: string;
}

export interface PlatformRelease {
  name: string;
  platform: 'windows' | 'macos' | 'linux';
  version: string;
  primaryAsset: {
    filename: string;
    extension: string;
    url: string;
    size: string;
    sha256: string;
  };
  secondaryPackages?: ReleasePackage[];
  systemRequirements: string;
}

export interface ReleaseAsset {
  platform: PlatformKey;
  osName: string;
  fileName: string;
  version: string;
  fileSize: string;
  architecture: string;
  sha256: string;
  downloadUrl: string;
  format: string;
  requirements: string;
  installCommand?: string;
  secondaryPackages?: ReleasePackage[];
}

export interface OSState {
  platform: PlatformKey;
  label: string;
  extension: string;
  isDetected: boolean;
}

// =============================================================================
// Code Diff & Patch Types
// =============================================================================

export type DiffLineType = 'add' | 'delete' | 'context';

export interface DiffLine {
  id: string;
  type: DiffLineType;
  content: string;
  oldLineNumber?: number;
  newLineNumber?: number;
}

export interface MockHunk {
  id: string;
  header: string;
  oldStart: number;
  oldLines: number;
  newStart: number;
  newLines: number;
  lines: DiffLine[];
}

export interface DiffFile {
  id: string;
  filePath: string;
  status: 'modified' | 'added' | 'deleted';
  hunks: MockHunk[];
  oldPath?: string;
  newPath?: string;
}

// =============================================================================
// Time Machine Types
// =============================================================================

export interface TimeMachineSnapshot {
  turn: number;
  label: string;
  timestamp: string;
  description: string;
  affectedFiles: string[];
  status: 'clean' | 'saved' | 'breaking';
  codeSnippet: string;
}

// =============================================================================
// Benchmark Types
// =============================================================================

export interface BenchmarkRow {
  metric: string;
  contextForge: string;
  electron: string;
  advantage: string;
}

// =============================================================================
// Desktop Hotkeys Types
// =============================================================================

export type HotkeyCategory = 'Navigation' | 'Execution' | 'Diff Review';
export type HotkeyScope = 'Global' | 'Editor' | 'Inspector';

export interface DesktopHotkey {
  combo: string;
  action: string;
  category: HotkeyCategory;
  scope: HotkeyScope;
}

// =============================================================================
// FAQ Types
// =============================================================================

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// =============================================================================
// Feature Pillar & Pricing Types
// =============================================================================

export interface FeaturePillar {
  id: string;
  pillarNumber: number;
  title: string;
  headline: string;
  description: string;
  tag: string;
}

export interface PricingTier {
  id: string;
  badge: string;
  name: string;
  price: string;
  pricePeriod?: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  isFeatured: boolean;
}
