import { BenchmarkRow } from '@/types';

export const BENCHMARKS: BenchmarkRow[] = [
  {
    metric: 'Binary Distribution Size',
    contextForge: '< 15 MB',
    electron: '120 MB – 180 MB',
    advantage: '88% reduction in network payload',
  },
  {
    metric: 'Idle Memory Footprint (RAM)',
    contextForge: '< 50 MB',
    electron: '400 MB – 800 MB',
    advantage: '8x lower background memory overhead',
  },
  {
    metric: 'Cold Application Startup',
    contextForge: '< 250 ms',
    electron: '2,000 ms – 3,500 ms',
    advantage: 'Instantaneous native UI initialization',
  },
  {
    metric: 'Runtime Engine',
    contextForge: 'Native Rust + OS Web Engine',
    electron: 'Embedded Chromium + Node.js',
    advantage: 'Zero duplicate browser engines bundled',
  },
  {
    metric: 'Workspace Data Persistence',
    contextForge: '100% Local (SQLite / FS)',
    electron: 'Remote Cloud DB Sync',
    advantage: 'Zero code exfiltration or telemetry risk',
  },
];
