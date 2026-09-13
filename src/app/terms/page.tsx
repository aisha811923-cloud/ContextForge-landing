import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'ContextForge proprietary closed-source commercial software licensing terms.',
};

export default function TermsPage() {
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#59421D] bg-[#382A14] px-3 py-1 font-mono text-xs text-[#FBBF24] mb-4">
            <Shield className="h-3.5 w-3.5" />
            <span>PROPRIETARY COMMERCIAL LICENSE</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#E6E0DD]">
            Terms of Service
          </h1>
          <p className="mt-3 font-mono text-xs text-[#8C827A]">
            Last Updated: September 13, 2026 • Effective Date: September 13, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-10 space-y-12 font-sans text-sm sm:text-base leading-relaxed text-[#8C827A]">
          {/* Section 1 */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="font-sans text-xl font-bold text-[#E6E0DD]">
              1. Acceptance of Terms
            </h2>
            <p className="mt-4">
              By visiting <code className="font-mono text-[#FBBF24]">contextforge.dev</code>, downloading, installing, or executing the ContextForge desktop application (the &ldquo;Software&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not download, install, or use the Software.
            </p>
          </section>

          {/* Section 2 */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="font-sans text-xl font-bold text-[#E6E0DD]">
              2. Proprietary Software License &amp; Intellectual Property
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-sans text-base font-semibold text-[#E6E0DD]">2.1 Ownership</h3>
                <p className="mt-1 text-sm">
                  ContextForge is proprietary, closed-source commercial software. All rights, title, and interest in and to the Software—including compiled machine binaries, source code, UI/UX designs, Dark Espresso styling systems, logos, documentation, and website assets—remain the exclusive property of ContextForge Systems.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-base font-semibold text-[#E6E0DD]">2.2 Grant of License (Free Developer Tier)</h3>
                <p className="mt-1 text-sm">
                  Subject to your compliance with these Terms, ContextForge grants you a revocable, non-exclusive, non-transferable, limited personal and commercial license to download, install, and run compiled ContextForge binaries on your personal or corporate workstations to inspect, edit, and refactor your software codebases.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-base font-semibold text-[#E6E0DD]">2.3 Prohibited Conduct</h3>
                <p className="mt-1 text-sm">
                  You agree not to decompile, disassemble, reverse engineer, or attempt to derive the source code of desktop binaries (<code className="font-mono text-[#FBBF24]">.exe</code>, <code className="font-mono text-[#FBBF24]">.dmg</code>, <code className="font-mono text-[#FBBF24]">.AppImage</code>, <code className="font-mono text-[#FBBF24]">.deb</code>); circumvent code-signing integrity checks; or redistribute, resell, or package ContextForge as a hosted multi-tenant bureau.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="font-sans text-xl font-bold text-[#E6E0DD]">
              3. Bring Your Own Key (BYOK) &amp; Third-Party API Usage
            </h2>
            <p className="mt-4 text-sm">
              ContextForge provides direct integration bridges to third-party artificial intelligence inference providers, including Anthropic (Claude), OpenAI, Google Gemini, DeepSeek, Groq, custom OpenAI-compatible endpoints, and local Ollama runtimes. You are solely responsible for acquiring, managing, and securing your own API credentials, and you bear full financial liability for any API consumption fees or token charges incurred with third-party providers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="font-sans text-xl font-bold text-[#E6E0DD]">
              4. Code Generation, File Safety &amp; User Responsibility
            </h2>
            <p className="mt-4 text-sm">
              ContextForge provides granular review tools, including the Hunk Diff Inspector and Time Machine pre-mutation snapshot engine. AI models may hallucinate, generate inaccurate syntax, or produce insecure code patterns. <strong className="text-[#E6E0DD]">You are solely responsible for inspecting, testing, and verifying all proposed modifications before committing or compiling them.</strong>
            </p>
          </section>

          {/* Section 5 & 6 */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="font-sans text-xl font-bold text-[#E6E0DD]">
              5. Disclaimer of Warranties &amp; Limitation of Liability
            </h2>
            <p className="mt-4 text-xs font-mono uppercase tracking-wider text-[#8C827A] leading-relaxed">
              THE SOFTWARE AND ASSOCIATED DOCUMENTATION ARE PROVIDED ON AN &ldquo;AS-IS&rdquo; AND &ldquo;AS-AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CONTEXTFORGE SYSTEMS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES INCLUDING LOSS OF PROFITS, DATA, CODE, OR WORKSPACE ASSETS.
            </p>
          </section>

          {/* Section 7 Contact */}
          <section className="rounded-xl border border-[#2A211D] bg-[#16110F] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] font-mono text-xs">
            <h2 className="font-sans text-lg font-bold text-[#E6E0DD]">6. Contact &amp; Legal Notices</h2>
            <p className="mt-2 text-[#8C827A]">
              For formal legal inquiries or enterprise licensing inquiries, contact:
            </p>
            <p className="mt-2 text-[#E6E0DD]">
              Email: <span className="text-[#FBBF24]">legal@contextforge.dev</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
