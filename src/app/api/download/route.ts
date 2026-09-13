import { NextRequest, NextResponse } from 'next/server';
import { RELEASES_DATA } from '@/data/releases';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawPlatform = searchParams.get('platform')?.trim().toLowerCase();
  const rawFormat = searchParams.get('format')?.trim().toLowerCase();

  const validPlatforms: Array<'windows' | 'macos' | 'linux'> = ['windows', 'macos', 'linux'];
  const platform = validPlatforms.find((p) => p === rawPlatform);

  if (!platform || !RELEASES_DATA[platform]) {
    return NextResponse.redirect(new URL('/#downloads', request.url), 302);
  }

  const release = RELEASES_DATA[platform];

  // If a specific format was requested (e.g. ?platform=linux&format=deb or ?platform=macos&format=tar.gz)
  if (rawFormat && release.secondaryPackages) {
    const cleanFormat = rawFormat.startsWith('.') ? rawFormat.slice(1) : rawFormat;
    const matched = release.secondaryPackages.find((pkg) => {
      const pkgClean = pkg.format.startsWith('.') ? pkg.format.slice(1).toLowerCase() : pkg.format.toLowerCase();
      return (
        pkgClean === cleanFormat ||
        pkg.format.toLowerCase() === rawFormat ||
        cleanFormat.endsWith(pkgClean) ||
        pkgClean.endsWith(cleanFormat)
      );
    });

    if (matched) {
      return NextResponse.redirect(matched.url, 302);
    }
  }

  // Otherwise redirect to the platform's primary release asset binary
  return NextResponse.redirect(release.primaryAsset.url, 302);
}
