/** Canonical production origin (always use www). */
export const SITE_URL = 'https://www.maketronics.store';

/**
 * Hreflang alternate sets keyed by logical page group.
 * Paths are site-relative; multiple hreflang codes may share the same regional URL.
 */
export const HREFLANG_GROUPS = {
  'crushing-plant-engineering': [
    { hreflang: 'en-AE', path: '/middle-east/crushing-plant-engineering/' },
    { hreflang: 'en-SA', path: '/middle-east/crushing-plant-engineering/' },
    { hreflang: 'en-ZA', path: '/south-africa/crushing-plant-engineering/' },
    { hreflang: 'en-VN', path: '/southeast-asia/crushing-plant-engineering/' },
    { hreflang: 'en-ID', path: '/southeast-asia/crushing-plant-engineering/' },
    { hreflang: 'en-TH', path: '/southeast-asia/crushing-plant-engineering/' },
    { hreflang: 'x-default', path: '/services/crusher-station-fabrication/' },
  ],
};

/** Map any routable path (with or without trailing slash) to a hreflang group id. */
export const PATH_TO_HREFLANG_GROUP = {
  '/middle-east/crushing-plant-engineering/': 'crushing-plant-engineering',
  '/south-africa/crushing-plant-engineering/': 'crushing-plant-engineering',
  '/southeast-asia/crushing-plant-engineering/': 'crushing-plant-engineering',
  '/services/crusher-station-fabrication/': 'crushing-plant-engineering',
  // Legacy aliases kept in the same cluster during URL migration
  '/crusher-station-fabrication/': 'crushing-plant-engineering',
  '/south-africa-crushing-plant-engineering/': 'crushing-plant-engineering',
  '/gcc-hard-rock-processing/': 'crushing-plant-engineering',
  '/vietnam-quarry-plant-integration/': 'crushing-plant-engineering',
  '/indonesia-mining-conveyor-integration/': 'crushing-plant-engineering',
};

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function toAbsoluteUrl(path) {
  return `${SITE_URL}${normalizePath(path)}`;
}

export function getHreflangGroupId(pathname) {
  return PATH_TO_HREFLANG_GROUP[normalizePath(pathname)] ?? null;
}

export function getHreflangAlternates(pathname) {
  const groupId = getHreflangGroupId(pathname);
  if (!groupId) return [];

  const entries = HREFLANG_GROUPS[groupId] ?? [];
  return entries.map(({ hreflang, path }) => ({
    hreflang,
    href: toAbsoluteUrl(path),
  }));
}

export function getCanonicalUrl(pathname) {
  return toAbsoluteUrl(normalizePath(pathname));
}
