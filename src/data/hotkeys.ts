import { DesktopHotkey } from '@/types';

export const DESKTOP_HOTKEYS: DesktopHotkey[] = [
  {
    combo: 'Alt + Space',
    action: 'Summon global desktop spotlight prompt HUD',
    category: 'Navigation',
    scope: 'Global',
  },
  {
    combo: 'Esc',
    action: 'Dismiss spotlight HUD / cancel pending queue item',
    category: 'Navigation',
    scope: 'Global',
  },
  {
    combo: 'Ctrl + Enter',
    action: 'Accept focused diff hunk / submit prompt to queue',
    category: 'Diff Review',
    scope: 'Inspector',
  },
  {
    combo: 'Ctrl + Backspace',
    action: 'Reject and discard focused diff hunk',
    category: 'Diff Review',
    scope: 'Inspector',
  },
  {
    combo: 'Ctrl + Shift + Z',
    action: 'Time Machine 1-click pre-mutation snapshot rewind',
    category: 'Execution',
    scope: 'Editor',
  },
  {
    combo: 'Ctrl + K',
    action: 'Open workspace rule selector (.contextforgerules)',
    category: 'Execution',
    scope: 'Editor',
  },
  {
    combo: 'Ctrl + .',
    action: 'Hardware Stop trigger: immediately interrupt token stream',
    category: 'Execution',
    scope: 'Global',
  },
];
