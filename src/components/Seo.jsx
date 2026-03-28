import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../config/site';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.canonicalPath - pathname e.g. /contact
 * @param {Record<string, string>} [props.hreflang] - lang -> full pathname
 * @param {object[]} [props.jsonLd]
 */
export default function Seo({ title, description, canonicalPath, hreflang, jsonLd = [], noindex = false }) {
  const path = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={canonical} />
      {hreflang &&
        Object.entries(hreflang).map(([lang, p]) => {
          const altPath = p.startsWith('/') ? p : `/${p}`;
          return (
            <link key={lang} rel="alternate" hrefLang={lang} href={`${SITE_URL}${altPath}`} />
          );
        })}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
