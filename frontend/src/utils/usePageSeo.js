import { useEffect } from 'react';

const upsertHeadTag = (selector, createTag, attributes = {}, content) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(createTag);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  if (typeof content === 'string') {
    element.setAttribute('content', content);
  }
  return element;
};

const upsertMetaByName = (name, content) => {
  if (!content) return;
  upsertHeadTag(`meta[name="${name}"]`, 'meta', { name }, content);
};

const upsertMetaByProperty = (property, content) => {
  if (!content) return;
  upsertHeadTag(`meta[property="${property}"]`, 'meta', { property }, content);
};

const upsertCanonical = (href) => {
  if (!href) return;
  const link = upsertHeadTag('link[rel="canonical"]', 'link', { rel: 'canonical' });
  link.setAttribute('href', href);
};

const safeTitle = (title) => {
  if (!title) return 'Maketronics';
  return title.length <= 59 ? title : `${title.slice(0, 56)}...`;
};

export const usePageSeo = ({ title, description, h1 }) => {
  useEffect(() => {
    const computedTitle = safeTitle(title);
    const canonical = `${window.location.origin}${window.location.pathname}`;
    document.title = computedTitle;
    upsertMetaByName('description', description);
    upsertMetaByName('robots', 'index, follow');
    upsertMetaByProperty('og:title', computedTitle);
    upsertMetaByProperty('og:description', description);
    upsertMetaByProperty('og:type', 'website');
    upsertMetaByProperty('og:url', canonical);
    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', computedTitle);
    upsertMetaByName('twitter:description', description);
    upsertCanonical(canonical);

    if (h1 && computedTitle.trim().toLowerCase() === h1.trim().toLowerCase()) {
      // Keep a visible dev warning for content QA.
      // eslint-disable-next-line no-console
      console.warn('SEO rule: title tag and H1 should not be identical.');
    }
  }, [title, description, h1]);
};

