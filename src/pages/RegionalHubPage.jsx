import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { getRegionalPage, listRegionalSlugs, VALID_REGIONS } from '../data/seoRegistry';
import { SITE_URL } from '../config/site';
import { breadcrumbSchema, localBusinessSchema, organizationSchema } from '../utils/schema';
import NotFoundPage from './NotFoundPage';

const REGION_META = {
  'middle-east': {
    title: 'Middle East crushing & quarry engineering | GCC integration | Maketronics',
    description:
      'Maketronics delivers crushing plant, quarry, and mining integration across the Middle East and GCC—mechanical, electrical, and commissioning from one partner.',
    h1: 'Middle East crushing and quarry plant integration',
    area: 'Middle East',
  },
  'south-africa': {
    title: 'South Africa crushing plant engineering | Mining integration | Maketronics',
    description:
      'Crushing plant engineering and integration for South Africa—aligned mechanical and electrical execution with site-focused support. Contact Maketronics today.',
    h1: 'South Africa crushing plant engineering and integration',
    area: 'South Africa',
  },
  'southeast-asia': {
    title: 'Southeast Asia quarry & conveyor integration | Plant engineering | Maketronics',
    description:
      'Quarry and mining conveyor integration across Southeast Asia—modular execution, controls, and logistics-aware engineering. Speak with Maketronics.',
    h1: 'Southeast Asia quarry and mining conveyor integration',
    area: 'Southeast Asia',
  },
};

export default function RegionalHubPage({ region }) {
  if (!region || !VALID_REGIONS.includes(region)) return <NotFoundPage />;

  const meta = REGION_META[region];
  const path = `/${region}`;
  const slugs = listRegionalSlugs(region);

  const jsonLd = [
    organizationSchema(),
    localBusinessSchema({
      name: `Maketronics — ${meta.area}`,
      url: `${SITE_URL}${path}`,
      areaName: meta.area,
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: meta.area, path },
    ]),
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Seo title={meta.title} description={meta.description} canonicalPath={path} jsonLd={jsonLd} />
      <Header />
      <main className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-400 mb-4">{meta.area}</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 max-w-4xl">{meta.h1}</h1>
          <p className="text-gray-400 max-w-2xl mb-14 leading-relaxed">{meta.description}</p>

          <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Regional service pages</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {slugs.map((slug) => {
              const p = getRegionalPage(region, slug);
              return (
                <li key={slug}>
                  <Link
                    to={`/${region}/${slug}`}
                    className="block p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-yellow-400/40 transition-colors"
                  >
                    <span className="font-bold text-lg">{p.h1}</span>
                    <span className="block text-sm text-gray-500 font-mono mt-2">
                      /{region}/{slug}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-16 pt-16 border-t border-white/10 flex flex-wrap gap-4">
            <Link to="/services" className="text-yellow-400 text-sm font-bold uppercase tracking-widest">
              All services →
            </Link>
            <Link to="/mechanical-systems" className="text-gray-400 text-sm hover:text-white">
              Mechanical systems
            </Link>
            <Link to="/electrical-automation" className="text-gray-400 text-sm hover:text-white">
              Electrical & automation
            </Link>
            <Link to="/contact" className="text-gray-400 text-sm hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
