import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ContextForge - Local-First AI Workspace';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0D0A09',
          backgroundImage:
            'radial-gradient(circle at 600px 315px, rgba(217, 119, 6, 0.14) 0%, transparent 65%), radial-gradient(#2A211D 1.5px, transparent 1.5px)',
          backgroundSize: '100% 100%, 32px 32px',
          padding: '64px 72px',
          color: '#E6E0DD',
          fontFamily: 'sans-serif',
          border: '1px solid #2A211D',
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo & Brand Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#16110F',
                border: '1.5px solid #2A211D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 11L6 16L8.5 21"
                  stroke="#D97706"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.5 11L26 16L23.5 21"
                  stroke="#D97706"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 13.5H21M13 13.5V18.5M19 13.5V18.5M10.5 18.5H21.5"
                  stroke="#D97706"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="21" cy="9.5" r="2" fill="#22C55E" />
              </svg>
            </div>
            <span
              style={{
                fontSize: '28px',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
              }}
            >
              ContextForge
            </span>
          </div>

          {/* Release Version Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#16110F',
              border: '1px solid #2A211D',
              borderRadius: '9999px',
              padding: '8px 18px',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '9999px',
                backgroundColor: '#22C55E',
              }}
            />
            <span
              style={{
                fontSize: '13px',
                fontFamily: 'monospace',
                fontWeight: 600,
                color: '#4ADE80',
                letterSpacing: '0.08em',
              }}
            >
              v0.1.0 STABLE
            </span>
          </div>
        </div>

        {/* Center Hero Block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '1020px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontSize: '13px',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: '#D97706',
                textTransform: 'uppercase',
              }}
            >
              LOCAL-FIRST AI WORKSPACE ARCHITECT
            </span>
          </div>

          <h1
            style={{
              fontSize: '56px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            The Local-First AI Agent That Never Overwrites Your Code.
          </h1>

          <p
            style={{
              fontSize: '22px',
              lineHeight: 1.45,
              color: '#8C827A',
              margin: 0,
              maxWidth: '920px',
            }}
          >
            Atomic pre-mutation snapshots, per-hunk diff review, and non-blocking turn queues. Native desktop execution with 100% local workspace storage.
          </p>
        </div>

        {/* Bottom Feature Footprint Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '24px',
            borderTop: '1px solid #2A211D',
          }}
        >
          {/* Universal BYOK Providers */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#16110F',
              border: '1px solid #2A211D',
              borderRadius: '12px',
              padding: '12px 22px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontFamily: 'monospace',
                fontWeight: 700,
                color: '#D97706',
              }}
            >
              Universal BYOK:
            </span>
            <span
              style={{
                fontSize: '14px',
                fontFamily: 'monospace',
                color: '#E6E0DD',
              }}
            >
              Claude 3.7 • Gemini 2.5 • OpenAI • Ollama Offline
            </span>
          </div>

          {/* Engine Architecture Footprint */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#16110F',
              border: '1px solid #2A211D',
              borderRadius: '12px',
              padding: '12px 22px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '9999px',
                backgroundColor: '#D97706',
              }}
            />
            <span
              style={{
                fontSize: '14px',
                fontFamily: 'monospace',
                fontWeight: 600,
                color: '#E6E0DD',
              }}
            >
              Tauri v2 + Native Rust
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
