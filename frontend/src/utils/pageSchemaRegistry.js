import { PAGE_TITLES, PATH_FOLDER } from './internalLinkGraph';
import { normalizePath } from './hreflangConfig';

const FOLDER_HUBS = {
  Mechanical: '/services/mechanical-systems/',
  Electrical: '/services/electrical-automation/',
  Industry: '/industries/',
  Approach: '/approach/',
  'Why Us': '/why-maketronics/',
};

const REGIONAL_PREFIXES = {
  'middle-east': {
    label: 'Middle East',
    hubPath: '/middle-east/crushing-plant-engineering/',
    localBusiness: {
      name: 'Maketronics Middle East',
      description:
        'Mining and aggregate system integration serving the GCC, UAE, and Saudi Arabia with crushing plant engineering and electrical automation.',
      areaServed: [
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'AdministrativeArea', name: 'Gulf Cooperation Council' },
      ],
    },
  },
  'south-africa': {
    label: 'South Africa',
    hubPath: '/south-africa/crushing-plant-engineering/',
    localBusiness: {
      name: 'Maketronics South Africa',
      description:
        'Crushing plant engineering and mining system integration for South African hard-rock and aggregate operations.',
      areaServed: [{ '@type': 'Country', name: 'South Africa' }],
    },
  },
  'southeast-asia': {
    label: 'Southeast Asia',
    hubPath: '/southeast-asia/crushing-plant-engineering/',
    localBusiness: {
      name: 'Maketronics Southeast Asia',
      description:
        'Quarry plant integration and conveyor system engineering for Vietnam, Indonesia, and Thailand.',
      areaServed: [
        { '@type': 'Country', name: 'Vietnam' },
        { '@type': 'Country', name: 'Indonesia' },
        { '@type': 'Country', name: 'Thailand' },
      ],
    },
  },
};

const LEGACY_REGIONAL_PATHS = {
  '/gcc-hard-rock-processing/': 'middle-east',
  '/crushing-plant-commissioning-middle-east/': 'middle-east',
  '/south-africa-crushing-plant-engineering/': 'south-africa',
  '/vietnam-quarry-plant-integration/': 'southeast-asia',
  '/indonesia-mining-conveyor-integration/': 'southeast-asia',
};

const SERVICE_PAGES = {
  '/services/mechanical-systems/': {
    name: 'Mechanical Systems Integration',
    description:
      'Integrated mechanical systems for mining and quarry operations, including crushing plant design, chutework, structural fabrication, and wear protection.',
  },
  '/services/electrical-automation/': {
    name: 'Electrical & Automation Integration',
    description:
      'Holistic crushing plant electrical design, quarry automation, MCC panels, VFD systems, PLC programming, and SCADA integration for mining plants.',
  },
  '/services/crusher-station-fabrication/': {
    name: 'Crusher Station Fabrication',
    description:
      'Specialized crusher station fabrication with stress-verified structural steel for jaw, cone, and VSI crushers in high-tonnage circuits.',
  },
};

function getPageTitle(path) {
  return PAGE_TITLES[path] ?? PAGE_TITLES[`${path}/`] ?? formatSlugTitle(path);
}

function formatSlugTitle(path) {
  const slug = path.split('/').filter(Boolean).pop() ?? 'Page';
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getRegionalKey(path) {
  const segments = path.split('/').filter(Boolean);
  if (segments[0] && REGIONAL_PREFIXES[segments[0]]) return segments[0];
  return LEGACY_REGIONAL_PATHS[path] ?? null;
}

function buildBreadcrumbs(path) {
  if (path === '/') return [];

  const title = getPageTitle(path);
  const crumbs = [{ name: 'Home', path: '/' }];
  const regionalKey = getRegionalKey(path);

  if (regionalKey) {
    const region = REGIONAL_PREFIXES[regionalKey];
    crumbs.push({ name: region.label, path: region.hubPath });
    if (path !== normalizePath(region.hubPath)) {
      crumbs.push({ name: title, path });
    }
    return crumbs;
  }

  if (path.startsWith('/services/')) {
    crumbs.push({ name: 'Services', path: '/services/mechanical-systems/' });
    crumbs.push({ name: title, path });
    return crumbs;
  }

  const folder = PATH_FOLDER[path] ?? PATH_FOLDER[`${path}/`];
  if (folder && folder !== 'Home' && FOLDER_HUBS[folder]) {
    crumbs.push({ name: folder, path: FOLDER_HUBS[folder] });
  }

  crumbs.push({ name: title, path });
  return crumbs;
}

export function getPageSchemaConfig(pathname) {
  const path = normalizePath(pathname);
  const breadcrumbs = buildBreadcrumbs(path);
  const service = SERVICE_PAGES[path] ?? null;

  const regionalKey = getRegionalKey(path);
  const localBusiness = regionalKey
    ? {
        ...REGIONAL_PREFIXES[regionalKey].localBusiness,
        url: path,
      }
    : null;

  const isServiceOrRegional = Boolean(service || regionalKey || path.startsWith('/services/'));

  return {
    breadcrumbs: breadcrumbs.length > 1 ? breadcrumbs : [],
    service: service ? { ...service, url: path } : null,
    localBusiness,
    includeBreadcrumbs: isServiceOrRegional || Boolean(PATH_FOLDER[path] ?? PATH_FOLDER[`${path}/`]),
  };
}
