import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  extractFaqsFromDom,
  getBreadcrumbSchema,
  getFAQPageSchema,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getServiceSchema,
} from '../utils/schema';
import { getPageSchemaConfig } from '../utils/pageSchemaRegistry';

const HEAD_ORG_MARKER = 'data-schema-organization';
const BODY_SCHEMA_MARKER = 'data-schema-body';

function upsertJsonLdScript(target, marker, id, data) {
  const selector = `script[type="application/ld+json"][${marker}="${id}"]`;
  let script = target.querySelector(selector);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute(marker, id);
    target.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeBodySchemas() {
  document.body.querySelectorAll(`script[type="application/ld+json"][${BODY_SCHEMA_MARKER}]`).forEach((node) => {
    node.remove();
  });
}

const SchemaInjector = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    upsertJsonLdScript(document.head, HEAD_ORG_MARKER, 'organization', getOrganizationSchema());

    removeBodySchemas();

    const config = getPageSchemaConfig(pathname);
    let schemaIndex = 0;

    if (config.includeBreadcrumbs && config.breadcrumbs.length > 1) {
      upsertJsonLdScript(
        document.body,
        BODY_SCHEMA_MARKER,
        `schema-${schemaIndex++}`,
        getBreadcrumbSchema(config.breadcrumbs)
      );
    }

    if (config.service) {
      upsertJsonLdScript(
        document.body,
        BODY_SCHEMA_MARKER,
        `schema-${schemaIndex++}`,
        getServiceSchema(config.service)
      );
    }

    if (config.localBusiness) {
      upsertJsonLdScript(
        document.body,
        BODY_SCHEMA_MARKER,
        `schema-${schemaIndex++}`,
        getLocalBusinessSchema(config.localBusiness)
      );
    }

    const injectFaqSchema = () => {
      const faqs = extractFaqsFromDom();
      const faqSchema = getFAQPageSchema(faqs);
      if (faqSchema) {
        upsertJsonLdScript(document.body, BODY_SCHEMA_MARKER, `schema-faq`, faqSchema);
      }
    };

    const faqTimer = window.setTimeout(injectFaqSchema, 0);

    return () => {
      window.clearTimeout(faqTimer);
      removeBodySchemas();
    };
  }, [pathname]);

  return null;
};

export default SchemaInjector;
