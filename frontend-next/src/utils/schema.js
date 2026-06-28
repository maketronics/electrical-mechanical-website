import { SITE_URL, normalizePath, toAbsoluteUrl } from './hreflangConfig';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const SERVICE_AREAS = [
  { '@type': 'Country', name: 'United Arab Emirates' },
  { '@type': 'Country', name: 'Saudi Arabia' },
  { '@type': 'Country', name: 'South Africa' },
  { '@type': 'Country', name: 'Vietnam' },
  { '@type': 'Country', name: 'Indonesia' },
  { '@type': 'Country', name: 'Thailand' },
];

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Maketronics',
    url: SITE_URL,
    logo: `${SITE_URL}/logomain.png`,
    description:
      'Independent mining and aggregate system integrator specializing in mechanical systems, electrical automation, and crushing plant engineering for high-tonnage operations worldwide.',
    areaServed: SERVICE_AREAS,
    knowsAbout: [
      'Crushing plant mechanical design',
      'Quarry plant automation',
      'Mining electrical integration',
      'Bulk material handling systems',
      'Wear protection systems',
      'Crusher discharge chute engineering',
      'Vibrating screen structural fabrication',
      'MCC panel fabrication for mining',
      'PLC programming for quarry plants',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: `${SITE_URL}/contact`,
      availableLanguage: ['English'],
    },
  };
}

export function getServiceSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: toAbsoluteUrl(url),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: SERVICE_AREAS,
    serviceType: name,
  };
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function getLocalBusinessSchema({ name, description, url, areaServed }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${toAbsoluteUrl(url)}#localbusiness`,
    name,
    description,
    url: toAbsoluteUrl(url),
    parentOrganization: { '@id': ORGANIZATION_ID },
    areaServed,
    priceRange: '$$$$',
  };
}

export function getFAQPageSchema(faqs) {
  if (!faqs?.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function extractFaqsFromDom() {
  const faqHeading = Array.from(document.querySelectorAll('main h2')).find((heading) =>
    /^FAQ[:\s]/i.test(heading.textContent.trim())
  );
  if (!faqHeading) return [];

  const section = faqHeading.closest('section') ?? faqHeading.parentElement;
  if (!section) return [];

  return Array.from(section.querySelectorAll('article'))
    .map((article) => {
      const question = article.querySelector('h3')?.textContent?.trim();
      const answer = article.querySelector('p')?.innerText?.trim();
      return question && answer ? { question, answer } : null;
    })
    .filter(Boolean);
}

export { normalizePath, toAbsoluteUrl };
