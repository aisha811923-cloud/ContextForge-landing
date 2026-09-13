'use client';

import { useState, useEffect } from 'react';
import { PlatformKey, OSState } from '@/types';

export function useOperatingSystem(): OSState {
  const [os, setOs] = useState<OSState>({
    platform: 'unknown',
    label: 'Download ContextForge',
    extension: '',
    isDetected: false,
  });

  useEffect(() => {
    // 1. Prioritize Client Hints API if available
    const nav = navigator as unknown as { userAgentData?: { platform?: string } };
    if (nav.userAgentData?.platform) {
      const plat = nav.userAgentData.platform.toLowerCase();
      if (plat.includes('win')) {
        setOs({
          platform: 'windows',
          label: 'Download for Windows',
          extension: '.exe',
          isDetected: true,
        });
        return;
      }
      if (plat.includes('mac')) {
        setOs({
          platform: 'macos',
          label: 'Download for macOS',
          extension: '.dmg',
          isDetected: true,
        });
        return;
      }
      if (plat.includes('linux')) {
        setOs({
          platform: 'linux',
          label: 'Download for Linux',
          extension: '.AppImage',
          isDetected: true,
        });
        return;
      }
    }

    // 2. Fallback to navigator.userAgent sniffing
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('win')) {
      setOs({
        platform: 'windows',
        label: 'Download for Windows',
        extension: '.exe',
        isDetected: true,
      });
    } else if (ua.includes('mac') || ua.includes('macintosh')) {
      setOs({
        platform: 'macos',
        label: 'Download for macOS',
        extension: '.dmg',
        isDetected: true,
      });
    } else if (ua.includes('linux') || ua.includes('x11')) {
      setOs({
        platform: 'linux',
        label: 'Download for Linux',
        extension: '.AppImage',
        isDetected: true,
      });
    } else {
      setOs({
        platform: 'unknown',
        label: 'Download ContextForge',
        extension: '',
        isDetected: false,
      });
    }
  }, []);

  return os;
}
