'use client';

import React, { useEffect, useRef } from 'react';
import { DESKTOP_HOTKEYS } from '@/data/hotkeys';
import { Command, X } from 'lucide-react';

interface HotkeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HotkeyModal({ isOpen, onClose }: HotkeyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="hotkey-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-[#2A211D] bg-[#16110F] shadow-2xl shadow-black ring-1 ring-white/5"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#2A211D] bg-[#1E1714] px-6 py-4">
          <div className="flex items-center gap-2.5">
            <Command className="h-4 w-4 text-[#D97706]" />
            <h3 id="hotkey-modal-title" className="font-sans text-base font-bold text-[#E6E0DD]">
              Desktop Keyboard Shortcuts
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#8C827A] hover:bg-[#2A211D] hover:text-[#E6E0DD] transition-colors"
            aria-label="Close keyboard shortcuts dialog"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Hotkeys Table */}
        <div className="max-h-[70vh] overflow-y-auto p-6">
          <div className="divide-y divide-[#2A211D]/60">
            {DESKTOP_HOTKEYS.map((hotkey) => (
              <div
                key={hotkey.combo}
                className="flex items-center justify-between py-3 font-sans text-xs"
              >
                <div className="flex items-center gap-3">
                  <kbd className="inline-flex min-w-[90px] items-center justify-center rounded border border-[#2A211D] bg-[#1E1714] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    {hotkey.combo}
                  </kbd>
                  <span className="text-[#E6E0DD] font-medium">{hotkey.action}</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px]">
                  <span className="rounded bg-[#1E1714] px-2 py-0.5 text-[#8C827A]">
                    {hotkey.category}
                  </span>
                  <span className="text-[#5A514B] hidden sm:inline">{hotkey.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info note */}
        <div className="border-t border-[#2A211D] bg-[#0D0A09] px-6 py-3 font-mono text-[11px] text-[#8C827A] flex items-center justify-between">
          <span>Shortcuts can be customized in ~/.contextforge/config.json</span>
          <span className="text-[#5A514B]">Press Esc to dismiss</span>
        </div>
      </div>
    </div>
  );
}
