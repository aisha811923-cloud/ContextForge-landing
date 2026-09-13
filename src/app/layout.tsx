import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-code',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const BASE_URL = 'https://contextforge.dev';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ContextForge — Local-First AI Workspace Architect & Code Execution Engine',
    template: '%s | ContextForge',
  },
  description:
    'Proprietary native desktop AI architect with real-time Gemini streaming, Time Machine turn rollbacks, hunk-by-hunk diff inspection, and offline Ollama fallback. Zero cloud workspace retention.',
  applicationName: 'ContextForge',
  authors: [{ name: 'ContextForge Systems', url: BASE_URL }],
  generator: 'Next.js',
  keywords: [
    'local-first AI',
    'AI coding agent',
    'Tauri v2 desktop',
    'code diff inspector',
    'turn rollback',
    'offline LLM',
    'Ollama desktop tool',
    'Gemini API coding assistant',
    'BYOK developer tools',
    'Rust desktop editor',
    'non-blocking prompt queue',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'ContextForge Systems',
  publisher: 'ContextForge Systems',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'ContextForge',
    title: 'ContextForge — The Local-First AI Agent That Never Overwrites Your Code',
    description:
      'Native desktop AI workspace architect. Real-time Gemini streaming, automated pre-mutation snapshots, per-hunk diff review, and local Ollama fallback. 100% local workspace storage.',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'ContextForge — Dark Espresso Desktop AI Workspace Architect Mockup',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContextForge — Local-First AI Desktop Architect',
    description:
      'Native desktop AI workspace architect. Real-time Gemini streaming, automated pre-mutation snapshots, per-hunk diff review, and local Ollama fallback. 100% local workspace storage.',
    images: ['/og-preview.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icons/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icons/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ContextForge',
  operatingSystem:
    'Windows 10, Windows 11, macOS 11.0+, Ubuntu, Debian, Fedora, Arch Linux',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'AI Code Execution & Workspace Architecture',
  offers: {
    '@type': 'Offer',
    price: '0.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  description:
    'Proprietary local-first AI workspace architect and code execution engine. Features non-blocking prompt queues, Time Machine turn snapshots, per-hunk diff inspection, and local Ollama offline fallback.',
  softwareVersion: '0.1.0',
  fileSize: '15MB',
  releaseNotes: 'https://contextforge.dev/docs/CHANGELOG.md',
  downloadUrl: 'https://contextforge.dev/#downloads',
  author: {
    '@type': 'Organization',
    name: 'ContextForge Systems',
    url: 'https://contextforge.dev',
  },
  screenshot: 'https://contextforge.dev/og-preview.png',
  featureList: [
    'Non-Blocking Turn Queue with Hardware Stop Interrupt',
    'Time Machine Pre-Mutation Disk Snapshot Rollbacks',
    'Hunk-by-Hunk Code Diff Inspector',
    'Persistent .contextforgerules Workspace Boundaries',
    'Sub-Millisecond Telemetry HUD (TTFT and tok/s)',
    'Dual Cloud (Gemini) and Local Offline (Ollama) Bridge',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${GeistSans.variable} ${GeistMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#0D0A09] font-sans text-[#E6E0DD] selection:bg-[#382A14] selection:text-[#FBBF24] antialiased relative overflow-x-hidden">
        {/* Subtle Hardware Sub-Pixel Matrix Canvas Overlay */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(#2A211D_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

        {/* Global Ambient Glow Wells */}
        <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#D97706]/5 via-transparent to-transparent blur-3xl z-0" />

        <div className="relative z-10 flex min-h-screen flex-col overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
