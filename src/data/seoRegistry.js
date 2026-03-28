import {
  HREFLANG_CRUSHING_PLANT,
  genericElectricalFaqs,
  genericElectricalSections,
  genericMechFaqs,
  genericMechSections,
  genericRegionalSections,
  mergeFaqJsonLd,
  regionalJsonLd,
  RELATED,
  serviceJsonLd,
  titleLine,
} from './pageBuilders.js';

const REGION_LABEL = {
  'middle-east': 'Middle East',
  'south-africa': 'South Africa',
  'southeast-asia': 'Southeast Asia',
};

function mechService(slug, cfg) {
  const path = `/services/${slug}`;
  const faqs = genericMechFaqs(cfg.faqShort);
  return {
    title: titleLine(cfg.titleP, cfg.titleS),
    description: cfg.desc,
    canonicalPath: path,
    h1: cfg.h1,
    eyebrow: 'Mechanical systems',
    sections: genericMechSections(cfg.sectionKw),
    faqs,
    relatedLinks: cfg.related || RELATED.mechanicalCore,
    jsonLd: mergeFaqJsonLd(
      serviceJsonLd({ name: cfg.schemaName, description: cfg.desc, path }),
      faqs
    ),
  };
}

function elecService(slug, cfg) {
  const path = `/services/${slug}`;
  const faqs = genericElectricalFaqs();
  return {
    title: titleLine(cfg.titleP, cfg.titleS),
    description: cfg.desc,
    canonicalPath: path,
    h1: cfg.h1,
    eyebrow: 'Electrical & automation',
    sections: genericElectricalSections(cfg.sectionKw),
    faqs,
    relatedLinks: cfg.related || RELATED.electricalCore,
    jsonLd: mergeFaqJsonLd(
      serviceJsonLd({ name: cfg.schemaName, description: cfg.desc, path }),
      faqs
    ),
  };
}

function regional(region, slug, cfg) {
  const path = `/${region}/${slug}`;
  const hubPath = `/${region}`;
  const label = REGION_LABEL[region];
  const faqs = cfg.faqs || genericMechFaqs(cfg.faqShort || 'plant integration');
  const sections = cfg.sections || genericRegionalSections(label, cfg.topicPhrase);
  const baseLd = mergeFaqJsonLd(
    regionalJsonLd({
      name: cfg.schemaName,
      description: cfg.desc,
      path,
      regionLabel: label,
      hubPath,
    }),
    faqs
  );
  return {
    title: titleLine(cfg.titleP, cfg.titleS),
    description: cfg.desc,
    canonicalPath: path,
    h1: cfg.h1,
    eyebrow: cfg.eyebrow || label,
    sections,
    faqs,
    relatedLinks: cfg.related,
    hreflang: cfg.hreflang,
    jsonLd: baseLd,
  };
}

export const GLOBAL_SERVICES = {
  'screening-plant-engineering': mechService('screening-plant-engineering', {
    titleP: 'Crushing & screening plant engineering company',
    titleS: 'Structural stations & chutes',
    desc: 'Partner with Maketronics for crushing and screening plant engineering—structures, chutes, and integration built for tonnage and uptime. Request a technical review today.',
    h1: 'Crushing & screening plant engineering company',
    sectionKw: 'Crushing & screening plant engineering',
    faqShort: 'screening plant',
    schemaName: 'Crushing and screening plant engineering',
  }),
  'crusher-station-fabrication': mechService('crusher-station-fabrication', {
    titleP: 'Crusher station fabrication company',
    titleS: 'Modular frames & platforms',
    desc: 'Fabricated crusher stations with rock boxes, access, and OEM-ready interfaces. Ask Maketronics for a station package aligned to your feed and duty. Get a quote now.',
    h1: 'Crusher station fabrication company',
    sectionKw: 'Crusher station fabrication',
    faqShort: 'crusher station',
    schemaName: 'Crusher station fabrication',
  }),
  'jaw-crusher-integration': mechService('jaw-crusher-integration', {
    titleP: 'Jaw crusher station integration',
    titleS: 'Feed & discharge chutes',
    desc: 'Integrated jaw stations with platforms, chutes, and wear planning for primary duty. Maketronics aligns OEM loads and site logistics. Contact us for integration support.',
    h1: 'Jaw crusher station integration',
    sectionKw: 'Jaw crusher station integration',
    faqShort: 'jaw station',
    schemaName: 'Jaw crusher station integration',
  }),
  'cone-crusher-mounting': mechService('cone-crusher-mounting', {
    titleP: 'Cone crusher structural mounting',
    titleS: 'Secondary & tertiary stations',
    desc: 'Structural mounting for cone and VSI stations—guarding, lube interfaces, and discharge chutes engineered for service access. Speak with Maketronics engineers today.',
    h1: 'Cone crusher structural mounting',
    sectionKw: 'Cone crusher structural mounting',
    faqShort: 'cone station',
    schemaName: 'Cone crusher structural mounting',
  }),
  'mobile-crushing-integration': mechService('mobile-crushing-integration', {
    titleP: 'Mobile crushing plant integration',
    titleS: 'Modular site assembly',
    desc: 'Integration support for mobile crushing spreads—alignment, chutes, conveyors, and electrical handoffs for fast moves. Request a mobilization plan from Maketronics.',
    h1: 'Mobile crushing plant integration',
    sectionKw: 'Mobile crushing plant integration',
    faqShort: 'mobile plant',
    schemaName: 'Mobile crushing plant integration',
  }),
  'conveyor-system-design': mechService('conveyor-system-design', {
    titleP: 'Mining conveyor system design',
    titleS: 'Transfer points & guarding',
    desc: 'Conveyor system design for mining and quarry plants—capacity, guarding, scrapers, and structural supports. Improve reliability with Maketronics. Send your RFQ today.',
    h1: 'Mining conveyor system design',
    sectionKw: 'Mining conveyor system design',
    faqShort: 'conveyor system',
    schemaName: 'Mining conveyor system design',
  }),
  'bulk-material-handling': mechService('bulk-material-handling', {
    titleP: 'Bulk material handling system integrator',
    titleS: 'Ports, stacks & plants',
    desc: 'Bulk material handling integration for high-volume transfer with structural discipline and safety. Maketronics unifies mechanical execution. Book a consultation.',
    h1: 'Bulk material handling system integrator',
    sectionKw: 'Bulk material handling integration',
    faqShort: 'bulk handling',
    schemaName: 'Bulk material handling integration',
  }),
  'vibrating-screen-fabrication': mechService('vibrating-screen-fabrication', {
    titleP: 'Vibrating screen structural fabrication',
    titleS: 'Decks, chutes & access',
    desc: 'Structural fabrication for vibrating screens—bolt-up stations, roll-away chutes, and liner strategy for abrasive feeds. Partner with Maketronics for screen integration.',
    h1: 'Vibrating screen structural fabrication',
    sectionKw: 'Vibrating screen structural fabrication',
    faqShort: 'screen station',
    schemaName: 'Vibrating screen structural fabrication',
  }),
  'wear-protection-systems': mechService('wear-protection-systems', {
    titleP: 'Wear protection systems for crushers',
    titleS: 'Liners & rock boxes',
    desc: 'Wear protection engineered for crushers and transfer points—liner maps, rock boxes, and lifecycle planning. Reduce unplanned stops with Maketronics. Contact us.',
    h1: 'Wear protection systems for crushers',
    sectionKw: 'Wear protection for crushers',
    faqShort: 'wear systems',
    schemaName: 'Crusher wear protection systems',
  }),
  'discharge-chute-engineering': mechService('discharge-chute-engineering', {
    titleP: 'Crusher discharge chute engineering',
    titleS: 'Impact & flow control',
    desc: 'Discharge chute engineering that controls impact, flow, and dust at crusher exits. Maketronics designs for your gradation and moisture. Request chute concepts today.',
    h1: 'Crusher discharge chute engineering',
    sectionKw: 'Crusher discharge chute engineering',
    faqShort: 'discharge chute',
    schemaName: 'Crusher discharge chute engineering',
  }),
  'mcc-panel-fabrication': elecService('mcc-panel-fabrication', {
    titleP: 'MCC panel fabrication for mining plants',
    titleS: 'Motor control assemblies',
    desc: 'MCC panel fabrication aligned to mining plant duty, fault levels, and maintenance access. Modernize motor control with Maketronics. Ask for a panel schedule review.',
    h1: 'MCC panel fabrication for mining plants',
    sectionKw: 'MCC panel fabrication',
    schemaName: 'MCC panel fabrication for mining plants',
  }),
  'vfd-systems': elecService('vfd-systems', {
    titleP: 'VFD systems for crushing plant conveyors',
    titleS: 'Tuning & harmonics',
    desc: 'VFD systems for conveyors—starting profiles, braking, and harmonic planning for reliable tonnage control. Improve energy and uptime with Maketronics. Get technical input.',
    h1: 'VFD systems for crushing plant conveyors',
    sectionKw: 'VFD systems for crushing conveyors',
    schemaName: 'VFD systems for crushing plant conveyors',
  }),
  'plc-programming': elecService('plc-programming', {
    titleP: 'PLC programming for quarry plants',
    titleS: 'Interlocks & alarming',
    desc: 'PLC programming for quarries and mines—clear permissives, interlocks, and alarms operators can trust. Commission faster with Maketronics logic. Reach out today.',
    h1: 'PLC programming for quarry plants',
    sectionKw: 'PLC programming for quarry plants',
    schemaName: 'PLC programming for quarry plants',
  }),
  'industrial-control-panels': elecService('industrial-control-panels', {
    titleP: 'Industrial control panels for mining',
    titleS: 'IP-rated field enclosures',
    desc: 'Industrial control panels built for dust, heat, and vibration in mining plants. Maketronics delivers serviceable layouts. Request a panel specification workshop.',
    h1: 'Industrial control panels for mining',
    sectionKw: 'Industrial control panels for mining',
    schemaName: 'Industrial control panels for mining',
  }),
  'crushing-plant-electrical-integration': elecService('crushing-plant-electrical-integration', {
    titleP: 'Crushing plant electrical integration',
    titleS: 'Power, control & commissioning',
    desc: 'End-to-end electrical integration for crushing plants—MCC, VFD, PLC, and field devices coordinated with mechanical completion. Start your integration review now.',
    h1: 'Crushing plant electrical integration',
    sectionKw: 'Crushing plant electrical integration',
    schemaName: 'Crushing plant electrical integration',
  }),
};

export const REGIONAL_PAGES = {
  'middle-east': {
    'crushing-plant-engineering': regional('middle-east', 'crushing-plant-engineering', {
      titleP: 'Crushing plant system integrator Middle East',
      titleS: 'Mechanical & electrical',
      desc: 'Crushing plant integration for GCC and Middle East sites—structures, automation, and commissioning from one partner. Speak with Maketronics about your next line.',
      h1: 'Crushing plant system integrator Middle East',
      topicPhrase: 'Crushing plant integration',
      faqShort: 'crushing plant',
      schemaName: 'Crushing plant system integration Middle East',
      related: RELATED.regionalMe,
      hreflang: HREFLANG_CRUSHING_PLANT,
    }),
    'quarry-plant-engineering': regional('middle-east', 'quarry-plant-engineering', {
      titleP: 'Quarry plant engineering Middle East',
      titleS: 'Aggregates & limestone',
      desc: 'Quarry plant engineering for the Middle East—feed systems, crushing trains, and material handling tuned to local logistics. Request a Middle East quarry study.',
      h1: 'Quarry plant engineering Middle East',
      topicPhrase: 'Quarry plant engineering',
      faqShort: 'quarry plant',
      schemaName: 'Quarry plant engineering Middle East',
      related: RELATED.regionalMe,
    }),
    'mining-mechanical-integration': regional('middle-east', 'mining-mechanical-integration', {
      titleP: 'Mining plant mechanical integration',
      titleS: 'GCC projects',
      desc: 'Mechanical integration for mining plants—stations, conveyors, and chutes coordinated with OEM schedules across the GCC. Partner with Maketronics for execution.',
      h1: 'Mining plant mechanical integration',
      topicPhrase: 'Mining plant mechanical integration',
      faqShort: 'mining plant',
      schemaName: 'Mining plant mechanical integration',
      related: RELATED.regionalMe,
    }),
    'industrial-automation': regional('middle-east', 'industrial-automation', {
      titleP: 'Industrial automation for crushing plants',
      titleS: 'Middle East delivery',
      desc: 'Industrial automation for crushing plants in the Middle East—PLC, VFD, and control panels engineered for heat and dust. Modernize controls with Maketronics.',
      h1: 'Industrial automation for crushing plants',
      topicPhrase: 'Industrial automation for crushing plants',
      faqs: genericElectricalFaqs(),
      sections: genericElectricalSections('Industrial automation for crushing plants'),
      schemaName: 'Industrial automation for crushing plants',
      related: [...RELATED.electricalCore, ...RELATED.regionalMe].slice(0, 5),
    }),
    'commissioning-services': regional('middle-east', 'commissioning-services', {
      titleP: 'Crushing plant commissioning Middle East',
      titleS: 'Startup & performance tests',
      desc: 'Commissioning services for crushing plants in the Middle East—mechanical completion, loop checks, and performance trials. Reduce startup risk with Maketronics.',
      h1: 'Crushing plant commissioning Middle East',
      topicPhrase: 'Crushing plant commissioning',
      faqShort: 'commissioning',
      schemaName: 'Crushing plant commissioning Middle East',
      related: RELATED.regionalMe,
    }),
    'hard-rock-processing': regional('middle-east', 'hard-rock-processing', {
      titleP: 'Hard rock processing plant engineering GCC',
      titleS: 'Primary & secondary lines',
      desc: 'Hard rock processing engineering for GCC sites—abrasion-aware chutes, heavy structural duty, and automation handoffs. Discuss capacity upgrades with Maketronics.',
      h1: 'Hard rock processing plant engineering GCC',
      topicPhrase: 'Hard rock processing plant engineering',
      faqShort: 'hard rock',
      schemaName: 'Hard rock processing plant engineering GCC',
      related: RELATED.regionalMe,
    }),
  },
  'south-africa': {
    'crushing-plant-engineering': regional('south-africa', 'crushing-plant-engineering', {
      titleP: 'Crushing plant engineering South Africa',
      titleS: 'Integration & support',
      desc: 'Crushing plant engineering for South Africa—integrated mechanical and electrical packages with local execution support. Contact Maketronics for your Southern Africa project.',
      h1: 'Crushing plant engineering South Africa',
      topicPhrase: 'Crushing plant engineering',
      faqShort: 'crushing plant',
      schemaName: 'Crushing plant engineering South Africa',
      related: RELATED.regionalSa,
      hreflang: HREFLANG_CRUSHING_PLANT,
    }),
  },
  'southeast-asia': {
    'quarry-plant-integration': regional('southeast-asia', 'quarry-plant-integration', {
      titleP: 'Quarry plant system integration Vietnam',
      titleS: 'Southeast Asia projects',
      desc: 'Quarry plant system integration across Southeast Asia—modular structures, conveyors, and controls for fast deployment. Engage Maketronics for integration leadership.',
      h1: 'Quarry plant system integration Vietnam',
      topicPhrase: 'Quarry plant system integration',
      faqShort: 'quarry integration',
      schemaName: 'Quarry plant system integration Southeast Asia',
      related: RELATED.regionalSea,
    }),
    'mining-conveyor-integration': regional('southeast-asia', 'mining-conveyor-integration', {
      titleP: 'Mining conveyor system integration Indonesia',
      titleS: 'SEA material transport',
      desc: 'Mining conveyor integration in Indonesia and wider Southeast Asia—capacity, guarding, and electrical packages aligned to tropical duty. Request a conveyor integration plan.',
      h1: 'Mining conveyor system integration Indonesia',
      topicPhrase: 'Mining conveyor system integration',
      faqShort: 'conveyor integration',
      schemaName: 'Mining conveyor system integration Southeast Asia',
      related: RELATED.regionalSea,
    }),
    'crushing-plant-engineering': regional('southeast-asia', 'crushing-plant-engineering', {
      titleP: 'Crushing plant engineering Southeast Asia',
      titleS: 'Integration partner',
      desc: 'Crushing plant engineering for Southeast Asia projects—unified mechanical and electrical delivery with regional logistics awareness. Talk to Maketronics about your site.',
      h1: 'Crushing plant engineering Southeast Asia',
      topicPhrase: 'Crushing plant engineering',
      faqShort: 'crushing plant',
      schemaName: 'Crushing plant engineering Southeast Asia',
      related: RELATED.regionalSea,
      hreflang: HREFLANG_CRUSHING_PLANT,
    }),
  },
};

export function getGlobalService(slug) {
  return GLOBAL_SERVICES[slug] || null;
}

export function getRegionalPage(region, slug) {
  return REGIONAL_PAGES[region]?.[slug] || null;
}

export function listRegionalSlugs(region) {
  return Object.keys(REGIONAL_PAGES[region] || {});
}

export const VALID_REGIONS = Object.keys(REGIONAL_PAGES);
