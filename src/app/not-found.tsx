import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0D0A09] px-4 text-center text-[#E6E0DD]">
      <div className="rounded-2xl border border-[#2A211D] bg-[#16110F] p-8 max-w-md shadow-2xl shadow-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <h1 className="font-mono text-4xl font-bold text-[#D97706]">404</h1>
        <h2 className="mt-2 font-display text-xl font-semibold">Page Not Found</h2>
        <p className="mt-4 font-mono text-xs text-[#8C827A] leading-relaxed">
          The requested resource could not be found or has been moved.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#E6E0DD] px-5 py-2.5 font-sans text-xs font-semibold text-[#0D0A09] hover:bg-white transition-colors"
          >
            Return to Workspace
          </Link>
        </div>
      </div>
    </div>
  );
}
