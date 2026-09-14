import Link from 'next/link';
import { AlertCircle, RotateCcw } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0D0A09] px-4 py-16 text-center text-[#E6E0DD] overflow-hidden">
      {/* Ambient Lighting Wells */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.1),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#2A211D_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      {/* Tactile Espresso Card */}
      <div className="relative z-10 mx-auto w-full max-w-lg rounded-2xl border border-[#2A211D] bg-[#16110F]/95 p-8 sm:p-10 shadow-2xl shadow-black backdrop-blur-xl ring-1 ring-white/5">
        {/* Terminal Header Strip */}
        <div className="mb-6 flex items-center justify-between border-b border-[#2A211D] pb-4 font-mono text-xs text-[#8C827A]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
            <span className="ml-2 font-semibold text-[#E6E0DD]">contextforge://workspace</span>
          </div>
          <span className="text-[#5A514B]">exit_code: 1</span>
        </div>

        {/* Error Code Monospace Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[#59421D] bg-[#382A14]/70 px-3.5 py-1.5 font-mono text-xs font-semibold text-[#FBBF24]">
          <AlertCircle className="h-3.5 w-3.5 text-[#D97706]" />
          <span>404 // DIRECTIVE_NOT_FOUND</span>
        </div>

        {/* Heading & Subcopy */}
        <h1 className="mt-3 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#E6E0DD]">
          This snapshot does not exist.
        </h1>
        <p className="mt-3 font-mono text-xs sm:text-sm text-[#8C827A] leading-relaxed">
          The requested route was not found in the local workspace index.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="group min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E6E0DD] px-6 py-3 font-sans text-xs font-semibold text-[#0D0A09] shadow-md transition-all hover:bg-white active:scale-95"
          >
            <RotateCcw className="h-4 w-4 transition-transform duration-200 group-hover:-rotate-45" />
            <span>Revert to Safe Baseline</span>
          </Link>
        </div>

        {/* Telemetry Micro-Marker */}
        <div className="mt-8 pt-4 border-t border-[#2A211D]/60 flex items-center justify-between text-[11px] font-mono text-[#5A514B]">
          <span>State: UNCOMMITTED</span>
          <span>Time Machine: ARMED</span>
        </div>
      </div>
    </div>
  );
}
