import { ORG_ADDRESS, SITE_NAME, SITE_URL } from '../config/site.js';

const orgId = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logomain.png`,
    email: 'info@make-tronics.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG_ADDRESS.streetAddress,
      addressLocality: ORG_ADDRESS.addressLocality,
      addressRegion: ORG_ADDRESS.addressRegion,
      addressCountry: ORG_ADDRESS.addressCountry,
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    publisher: { '@id': orgId },
  };
}

export function localBusinessSchema({ name, url, areaName }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url,
    image: `${SITE_URL}/logomain.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG_ADDRESS.streetAddress,
      addressLocality: ORG_ADDRESS.addressLocality,
      addressRegion: ORG_ADDRESS.addressRegion,
      addressCountry: ORG_ADDRESS.addressCountry,
    },
    areaServed: { '@type': 'Place', name: areaName },
    parentOrganization: { '@id': orgId },
  };
}

export function serviceSchema({ name, description, url, areaServed }) {
  const s = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: { '@id': orgId },
  };
  if (areaServed) s.areaServed = { '@type': 'Place', name: areaServed };
  return s;
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Strip @context for nodes inside a shared @graph (avoids duplicate root types in Google's merger). */
function graphNode(schemaObject) {
  if (!schemaObject || typeof schemaObject !== 'object') return schemaObject;
  const { '@context': _ctx, ...rest } = schemaObject;
  return rest;
}

/**
 * Single JSON-LD graph for the homepage: one script tag, one FAQPage entity (Google rich result requirement).
 */
export function homePageGraphSchema(faqs) {
  const faqNode = {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faqpage`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      graphNode(organizationSchema()),
      graphNode(websiteSchema()),
      graphNode(breadcrumbSchema([{ name: 'Home', path: '/' }])),
      faqNode,
    ],
  };
}
