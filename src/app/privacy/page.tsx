import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, HardDrive, Key, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ContextForge local-first zero-telemetry architectural privacy commitments.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0D0A09] text-[#E6E0DD] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-[#2A211D] bg-[#16110F] px-3.5 py-1.5 font-mono text-xs text-[#8C827A] hover:text-[#E6E0DD] hover:border-[#8C827A]/40 transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to ContextForge</span>
        </Link>

        {/* Header */}
        <div className="border-b border-[#2A211D] pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1B4D31] bg-[#143823] px-3 py-1 font-mono text-xs text-[#4ADE80] mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>LOCAL-FIRST PRIVACY POLICY</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#E6E0DD]">
            Privacy Policy
          </h1>
          <p className="mt-3 font-mono text-xs text-[#8C827A]">
            Last Updated: September 13, 2026 • Effective Date: September 13, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-10 space-y-12 font-sans text-sm sm:text-base leading-relaxed text-[#8C827A]">
          {/* Section 1 */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="flex items-center gap-2.5 font-sans text-xl font-bold text-[#E6E0DD]">
              <Lock className="h-5 w-5 text-[#D97706]" />
              <span>1. Architectural Privacy Commitment: Local-First by Design</span>
            </h2>
            <p className="mt-4">
              ContextForge is engineered with a <strong className="text-[#E6E0DD]">local-first, zero-cloud workspace architecture</strong>. Unlike traditional cloud-hosted AI coding assistants, ContextForge executes directly on your personal workstation or local network.
            </p>
            <p className="mt-3 text-[#E6E0DD] font-medium">
              We do not maintain centralized servers that ingest, store, inspect, train on, or mirror your source code.
            </p>
          </section>

          {/* Section 2 */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="flex items-center gap-2.5 font-sans text-xl font-bold text-[#E6E0DD]">
              <HardDrive className="h-5 w-5 text-[#4ADE80]" />
              <span>2. Information ContextForge Does NOT Collect</span>
            </h2>
            <p className="mt-4">
              When you download, install, and execute the ContextForge desktop client on Windows, macOS, or Linux, we enforce strict local isolation:
            </p>
            <ul className="mt-4 space-y-2.5 list-disc list-inside text-sm">
              <li><strong className="text-[#E6E0DD]">No Source Code Telemetry:</strong> Your project files, folder trees, abstract syntax trees (ASTs), and git configurations remain strictly on your local device.</li>
              <li><strong className="text-[#E6E0DD]">No Snapshot Retention:</strong> All Time Machine turn snapshots, diff caches, and file backups are written strictly to your local filesystem.</li>
              <li><strong className="text-[#E6E0DD]">No Rule Harvesting:</strong> Custom <code className="font-mono text-[#FBBF24]">.contextforgerules</code> defined in your repositories are never transmitted to our infrastructure.</li>
              <li><strong className="text-[#E6E0DD]">No Account Creation / Identity Tracking:</strong> The core desktop client runs immediately without requiring an account, email registration, phone verification, or credit card collection.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="flex items-center gap-2.5 font-sans text-xl font-bold text-[#E6E0DD]">
              <Key className="h-5 w-5 text-[#D97706]" />
              <span>3. Third-Party Model Routing &amp; BYOK (Bring Your Own Key)</span>
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-sans text-base font-semibold text-[#E6E0DD]">3.1 Google Gemini API</h3>
                <p className="mt-1 text-sm">
                  When utilizing Google Gemini, your desktop client communicates directly with Google Cloud endpoints (<code className="font-mono text-[#FBBF24]">generativelanguage.googleapis.com</code>) via TLS 1.3. Traffic never routes through an intermediate ContextForge proxy server. Your API keys are encrypted at rest using your host operating system native credential vault.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-base font-semibold text-[#E6E0DD]">3.2 Local Ollama Daemon</h3>
                <p className="mt-1 text-sm">
                  When routing turns to local models via Ollama, all inference payloads are bound strictly to your loopback address (<code className="font-mono text-[#FBBF24]">http://127.0.0.1:11434</code>). Zero packets leave your workstation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="flex items-center gap-2.5 font-sans text-xl font-bold text-[#E6E0DD]">
              <Globe className="h-5 w-5 text-[#4ADE80]" />
              <span>4. Web Landing Page Analytics &amp; Cookies</span>
            </h2>
            <p className="mt-4 text-sm">
              The ContextForge distribution website adheres to cookieless privacy standards: zero tracking cookies, zero canvas fingerprinting, and aggregated edge analytics strictly for bandwidth monitoring and DDoS mitigation. We automatically honor Global Privacy Control (GPC) and Do Not Track (DNT) headers.
            </p>
          </section>

          {/* Section 5 & Contact */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] font-mono text-xs">
            <h2 className="font-sans text-lg font-bold text-[#E6E0DD]">5. Security Inquiries &amp; Contact</h2>
            <p className="mt-2 text-[#8C827A]">
              For technical privacy questions or responsible security disclosures, reach our systems team:
            </p>
            <p className="mt-2 text-[#E6E0DD]">
              Email: <span className="text-[#4ADE80]">privacy@contextforge.dev</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
