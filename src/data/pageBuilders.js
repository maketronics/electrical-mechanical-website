import { SITE_URL } from '../config/site';
import {
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  serviceSchema,
} from '../utils/schema';

const ORG = organizationSchema();

export const HREFLANG_CRUSHING_PLANT = {
  'en-AE': '/middle-east/crushing-plant-engineering',
  'en-SA': '/middle-east/crushing-plant-engineering',
  'en-ZA': '/south-africa/crushing-plant-engineering',
  'en-VN': '/southeast-asia/crushing-plant-engineering',
  'en-ID': '/southeast-asia/crushing-plant-engineering',
  'en-TH': '/southeast-asia/crushing-plant-engineering',
  'x-default': '/services/crusher-station-fabrication',
};

export function titleLine(primary, secondary) {
  return `${primary} | ${secondary} | Maketronics`;
}

export function serviceJsonLd({ name, description, path, areaServed }) {
  const url = `${SITE_URL}${path}`;
  return [
    ORG,
    serviceSchema({ name, description, url, areaServed }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: name, path },
    ]),
  ];
}

export function regionalJsonLd({ name, description, path, regionLabel, hubPath }) {
  const url = `${SITE_URL}${path}`;
  return [
    ORG,
    serviceSchema({ name, description, url, areaServed: regionLabel }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: regionLabel, path: hubPath },
      { name, path },
    ]),
  ];
}

export function mergeFaqJsonLd(baseLd, faqs) {
  if (!faqs?.length) return baseLd;
  return [...baseLd, faqPageSchema(faqs)];
}

export function genericMechSections(keyword, extraSections = []) {
  const k = keyword;
  return [
    {
      h2: `${k}: built for real feed and duty cycles`,
      body: [
        `Reliable ${k.toLowerCase()} depends on structural discipline, wear strategy, and clean interfaces to crushers, screens, and conveyors. Catalog equipment alone cannot overcome poor chute geometry, weak access for maintenance, or transfer points that spill and destroy idlers.`,
        `Maketronics engineers mechanical packages against your actual size distribution, moisture, clay content, and throughput targets. We align steel, liners, and guarding so production stays on plan and safety expectations are met without improvised workarounds.`,
      ],
    },
    {
      h2: 'What we deliver on typical projects',
      body: [
        `Depending on scope, we provide fabrication drawings, BOMs aligned to approved manufacturers, modular shipping splits, and site supervision for assembly, alignment, and bolting discipline.`,
        `We coordinate interface loads, anchor patterns, and maintenance clearances with OEMs before steel is released—reducing the rework loops that delay commissioning.`,
      ],
      sub: [
        {
          h3: 'Structural and wear engineering',
          body: [
            `Impact and sliding wear are mapped to liner grades, thicknesses, and rock box geometry suited to your abrasiveness. Options include 400 BHN plate, ceramic, rubber, or hardfacing where kinetic energy and drop height demand it.`,
          ],
        },
        {
          h3: 'Walkways, guarding, and service access',
          body: [
            `Platforms and guards are laid out for mesh changes, lubrication, and belt observation—so crews do not bypass safety systems during normal tasks.`,
          ],
        },
      ],
    },
    {
      h2: 'Commissioning support and handover',
      body: [
        `Before energization we verify mechanical completeness: torque retention, chute clearances, conveyor alignment, and guard integrity. That sequence protects electrical and automation teams from debugging avoidable interference.`,
        `Handover includes as-built notes and punch lists tied to plant areas so your maintenance team inherits a traceable baseline for future upgrades.`,
      ],
    },
    ...extraSections,
  ];
}

export function genericElectricalSections(keyword, extraSections = []) {
  const k = keyword;
  return [
    {
      h2: `${k} for harsh plant environments`,
      body: [
        `Dust, vibration, and heat punish enclosures, terminations, and control logic. ${k} from Maketronics is laid out for service access, segregated power and control, and labeling that matches your maintenance workflow.`,
        `We coordinate motor data, starter types, and field device locations with mechanical layouts so cable schedules, tray fills, and heat rejection stay inside code and OEM limits.`,
      ],
    },
    {
      h2: 'Design, fabrication, and FAT approach',
      body: [
        `Panels are reviewed for arc flash considerations, fault levels, and selective coordination at the feeder level. Where VFDs are used, we address harmonics, braking, and cable routing to protect bearings and encoders.`,
        `Factory acceptance tests cover IO checks, interlock matrices, and alarm philosophy so site commissioning focuses on process tuning—not chasing missing signals.`,
      ],
      sub: [
        {
          h3: 'PLC and SCADA integration',
          body: [
            `Logic is structured for clarity: permissives, interlocks, and alarms are documented so operators and maintainers understand trip causes and recovery paths.`,
          ],
        },
        {
          h3: 'Site execution',
          body: [
            `We support gland plate detailing, motor termination audits, and loop checks so the system performs to the same standard after shipping as it did on the test bench.`,
          ],
        },
      ],
    },
    {
      h2: 'Outcomes you should expect',
      body: [
        `Predictable startups, fewer mystery trips, and faster fault finding when something does go wrong—because drawings, tags, and HMI screens match the field installation.`,
      ],
    },
    ...extraSections,
  ];
}

export function genericMechFaqs(shortName) {
  return [
    {
      q: `Do you supply branded crushers or screens?`,
      a: 'Maketronics is an independent integrator. We engineer and integrate equipment from approved OEMs; we do not act as a single-brand equipment dealer.',
    },
    {
      q: `What information speeds up a ${shortName} proposal?`,
      a: 'Throughput targets, feed gradation, moisture/clay, elevation drawings, preferred OEMs, and electrical supply constraints help us size structures and interfaces accurately.',
    },
    {
      q: 'Can you work with our existing civils and steel?',
      a: 'Yes. We can audit existing structures and chutes, then engineer modifications, reinforcements, or replacement modules that fit your schedule.',
    },
  ];
}

export function genericRegionalSections(regionLabel, topicPhrase) {
  return [
    {
      h2: `${topicPhrase} tailored for ${regionLabel}`,
      body: [
        `Sites in ${regionLabel} face distinct logistics, climate, and supplier lead-time profiles. We engineer integration packages that respect import cycles, modular shipping limits, and the need for rapid site assembly without sacrificing structural or electrical quality.`,
        `Maketronics remains equipment-agnostic: we coordinate OEM interfaces, steel fabrication, and electrical packages so performance accountability sits with the integrator—not fragmented across vendors.`,
      ],
    },
    {
      h2: 'Technical scope we typically cover',
      body: [
        `Depending on your RFQ, scope can include structural stations, transfer chutes, conveyor gantries, MCC and VFD assemblies, PLC logic, and commissioning support through performance trials.`,
        `Early engagement on geotech, lift plans, and crane windows reduces site surprises, especially when modules must land in tight elevations or adjacent to running lines.`,
      ],
      sub: [
        {
          h3: 'Mechanical and structural integration',
          body: [
            `Rock boxes, liner maps, and maintenance access are designed against your actual material—not generic catalog assumptions—so tonnage and availability targets remain achievable.`,
          ],
        },
        {
          h3: 'Electrical and automation alignment',
          body: [
            `Control narratives, interlocks, and alarming are written for operator clarity. Field layouts segregate power and control, with heat and dust management appropriate for outdoor process plants.`,
          ],
        },
      ],
    },
    {
      h2: 'Execution and long-term support',
      body: [
        `We support installation supervision, punch-list closure, and commissioning documentation. After handover, we remain available for optimization studies, capacity upgrades, and integration of additional process lines.`,
      ],
    },
  ];
}

export function genericElectricalFaqs() {
  return [
    {
      q: 'Which standards do you design against?',
      a: 'We align to project-specified codes and client standards. Early in the RFQ we confirm voltage levels, fault levels, IP ratings, and regional compliance expectations.',
    },
    {
      q: 'Do you provide onsite commissioning?',
      a: 'Yes. We support loop checks, motor starts, interlock verification, and handover documentation alongside mechanical completion.',
    },
    {
      q: 'Can you integrate with an existing DCS or SCADA?',
      a: 'We routinely provide interfaces via industrial networks or hardwired IO as required, coordinating signal lists and naming with your automation team.',
    },
  ];
}

export const RELATED = {
  mechanicalCore: [
    { to: '/mechanical-systems', label: 'Mechanical systems overview' },
    { to: '/services/bulk-material-handling', label: 'Bulk material handling' },
    { to: '/services/conveyor-system-design', label: 'Conveyor system design' },
    { to: '/middle-east/quarry-plant-engineering', label: 'Quarry plant engineering (Middle East)' },
  ],
  electricalCore: [
    { to: '/electrical-automation', label: 'Electrical & automation' },
    { to: '/services/crushing-plant-electrical-integration', label: 'Crushing plant electrical integration' },
    { to: '/services/plc-programming', label: 'PLC programming' },
    { to: '/services/mcc-panel-fabrication', label: 'MCC panel fabrication' },
  ],
  regionalMe: [
    { to: '/middle-east', label: 'Middle East hub' },
    { to: '/middle-east/mining-mechanical-integration', label: 'Mining mechanical integration' },
    { to: '/middle-east/commissioning-services', label: 'Commissioning services' },
    { to: '/services/mobile-crushing-integration', label: 'Mobile crushing integration' },
  ],
  regionalSa: [
    { to: '/south-africa', label: 'South Africa hub' },
    { to: '/mechanical-systems', label: 'Mechanical systems' },
    { to: '/services/screening-plant-engineering', label: 'Screening plant engineering' },
    { to: '/contact', label: 'Contact' },
  ],
  regionalSea: [
    { to: '/southeast-asia', label: 'Southeast Asia hub' },
    { to: '/southeast-asia/quarry-plant-integration', label: 'Quarry plant integration' },
    { to: '/services/bulk-material-handling', label: 'Bulk material handling' },
    { to: '/contact', label: 'Contact' },
  ],
};
