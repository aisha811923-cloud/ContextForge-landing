'use client';

import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copy = useCallback(
    async (text: string) => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for insecure context or permission restrictions
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        setCopied(true);
        setError(null);

        setTimeout(() => {
          setCopied(false);
        }, timeout);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Clipboard write failed'));
        setCopied(false);
      }
    },
    [timeout]
  );

  return { copy, copied, error };
}
