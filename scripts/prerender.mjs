/**
 * Post-build prerender: captures each route with Playwright so <head> includes
 * title, meta, canonical, hreflang, and JSON-LD from react-helmet-async (no JS required for crawlers).
 *
 * Nginx (static dist/): use try_files $uri $uri/index.html /index.html;
 * so paths like /services/foo resolve to dist/services/foo/index.html.
 */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const PORT = 4173;
const BASE = `http://127.0.0.1:${PORT}`;
const SITE_URL = 'https://www.maketronics.store';

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function collectRoutes() {
  const registryHref = pathToFileURL(path.join(root, 'src', 'data', 'seoRegistry.js')).href;
  const { GLOBAL_SERVICES, REGIONAL_PAGES, VALID_REGIONS } = await import(registryHref);
  const paths = new Set([
    '/',
    '/mechanical-systems',
    '/electrical-automation',
    '/industries',
    '/execution-support',
    '/why-maketronics',
    '/contact',
    '/services',
  ]);
  for (const slug of Object.keys(GLOBAL_SERVICES)) {
    paths.add(`/services/${slug}`);
  }
  for (const region of VALID_REGIONS) {
    paths.add(`/${region}`);
    for (const slug of Object.keys(REGIONAL_PAGES[region] || {})) {
      paths.add(`/${region}/${slug}`);
    }
  }
  return [...paths].sort((a, b) => a.localeCompare(b));
}

function escapeXmlAttr(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

/** Drop Home-only schema blocks that Helmet sometimes leaves in the tree on nested URLs. */
function pruneStaleJsonLd($, canonHref) {
  if (!canonHref) return;
  let pathname = '';
  try {
    pathname = new URL(canonHref).pathname;
  } catch {
    return;
  }
  if (pathname === '/' || pathname === '') return;

  $('head script[type="application/ld+json"]').each((_, el) => {
    let j;
    try {
      j = JSON.parse($(el).html() || '');
    } catch {
      return;
    }
    const t = j['@type'];
    if (t === 'WebSite') {
      $(el).remove();
      return;
    }
    if (t === 'BreadcrumbList') {
      const items = j.itemListElement || [];
      if (items.length === 1 && items[0]?.name === 'Home') {
        $(el).remove();
      }
    }
    if (t === 'FAQPage') {
      const firstQ = j.mainEntity?.[0]?.name || '';
      if (firstQ.includes('industrial systems integration include')) {
        $(el).remove();
      }
    }
  });

  let orgKept = false;
  $('head script[type="application/ld+json"]').each((_, el) => {
    let j;
    try {
      j = JSON.parse($(el).html() || '');
    } catch {
      return;
    }
    if (j['@type'] === 'Organization' && String(j['@id'] || '').includes('organization')) {
      if (orgKept) $(el).remove();
      else orgKept = true;
    }
  });
}

/**
 * Move JSON-LD into <head>, dedupe title/meta/canonical/og/twitter/hreflang (Helmet + index.html placeholders).
 */
function postprocessHtml(html) {
  const $ = cheerio.load(html, { decodeEntities: false });

  $('#root script[type="application/ld+json"]').each((_, el) => {
    const $s = $(el);
    $('head').append($s.clone());
    $s.remove();
  });

  const ogTitle = $('head meta[property="og:title"]').last().attr('content');
  if (ogTitle) {
    $('head title').remove();
    $('head').prepend('<title></title>');
    $('head title').first().text(ogTitle);
  } else if ($('head title').length > 1) {
    const keep = $('head title').first().text();
    $('head title').remove();
    $('head').prepend('<title></title>');
    $('head title').first().text(keep);
  }

  const ogDesc = $('head meta[property="og:description"]').last().attr('content');
  if (ogDesc) {
    $('head meta[name="description"]').remove();
    $('head meta[property="og:description"]').last().after(
      `<meta name="description" content="${escapeXmlAttr(ogDesc)}">`
    );
  }

  const canon = $('head link[rel="canonical"]').last().attr('href');
  if (canon) {
    $('head link[rel="canonical"]').remove();
    $('head').append(`<link rel="canonical" href="${escapeXmlAttr(canon)}">`);
  }

  pruneStaleJsonLd($, canon);

  const ogProps = ['og:title', 'og:description', 'og:url', 'og:type', 'og:site_name', 'og:image'];
  for (const p of ogProps) {
    const $nodes = $(`head meta[property="${p}"]`);
    if ($nodes.length <= 1) continue;
    const last = $nodes.last().clone();
    $nodes.remove();
    $('head').append(last);
  }
  const tw = ['twitter:card', 'twitter:title', 'twitter:description'];
  for (const p of tw) {
    const $nodes = $(`head meta[name="${p}"]`);
    if ($nodes.length <= 1) continue;
    const last = $nodes.last().clone();
    $nodes.remove();
    $('head').append(last);
  }

  const byLang = new Map();
  $('head link[rel="alternate"][hreflang]').each((_, el) => {
    byLang.set($(el).attr('hreflang'), el);
  });
  $('head link[rel="alternate"][hreflang]').remove();
  for (const el of byLang.values()) {
    $('head').append($(el).clone());
  }

  const seenLd = new Set();
  $('head script[type="application/ld+json"]').each((_, el) => {
    const raw = $(el).html() || '';
    if (seenLd.has(raw)) {
      $(el).remove();
    } else {
      seenLd.add(raw);
    }
  });

  const out = $.html();
  return /^\s*<!doctype/i.test(out) ? out : `<!DOCTYPE html>\n${out}`;
}

function writeHtmlForRoute(route, html) {
  const target =
    route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.replace(/^\//, ''), 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, postprocessHtml(html), 'utf8');
  console.log('prerender', route, '→', path.relative(root, target));
}

function writeSitemap(paths) {
  const today = new Date().toISOString().slice(0, 10);
  const body = paths
    .map((p) => {
      const loc = `${SITE_URL}${p === '/' ? '' : p}`;
      const priority = p === '/' ? '1.0' : p.split('/').length <= 2 ? '0.9' : '0.8';
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml, 'utf8');
  console.log('wrote dist/sitemap.xml');
}

async function waitForServer(maxMs = 90000) {
  const deadline = Date.now() + maxMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${BASE}/`);
      if (res.ok) return;
    } catch {
      /* not ready */
    }
    await sleep(250);
  }
  throw new Error(`Preview server at ${BASE} did not become ready within ${maxMs}ms`);
}

function startPreview() {
  const isWin = process.platform === 'win32';
  const child = spawn(
    'npx',
    ['vite', 'preview', '--host', '127.0.0.1', '--port', String(PORT), '--strictPort'],
    {
      cwd: root,
      shell: isWin,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'production' },
    }
  );
  let log = '';
  const append = (buf) => {
    log += buf.toString();
    if (log.length > 8000) log = log.slice(-8000);
  };
  child.stdout?.on('data', append);
  child.stderr?.on('data', append);
  child.log = () => log;
  return child;
}

async function main() {
  if (!fs.existsSync(dist)) {
    console.error('dist/ missing — run vite build first');
    process.exit(1);
  }

  const routes = await collectRoutes();

  if (process.env.SKIP_PRERENDER === '1') {
    writeSitemap(routes);
    console.warn('SKIP_PRERENDER=1: wrote sitemap only (no per-route HTML; use for emergencies).');
    process.exit(0);
  }
  const child = startPreview();

  try {
    await waitForServer();
  } catch (e) {
    child.kill('SIGTERM');
    console.error(child.log());
    throw e;
  }

  const browser = await chromium.launch({ headless: true });

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      try {
        const url = `${BASE}${route}`;
        const res = await page.goto(url, { waitUntil: 'load', timeout: 120000 });
        if (!res || !res.ok()) {
          console.warn('non-OK response', route, res?.status());
        }
        await page.waitForSelector('title', { state: 'attached', timeout: 30000 });
        await sleep(1500);
        const html = await page.content();
        writeHtmlForRoute(route, html);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    child.kill('SIGTERM');
    await sleep(200);
  }

  writeSitemap(routes);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
