import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { GLOBAL_SERVICES } from '../data/seoRegistry';
import { breadcrumbSchema, organizationSchema } from '../utils/schema';

const HUB_DESC =
  'Browse Maketronics mechanical and electrical services for crushing, screening, conveyors, and plant automation. Request integration support for your next project.';

export default function ServicesHubPage() {
  const slugs = Object.keys(GLOBAL_SERVICES).sort();
  const jsonLd = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Seo
        title="Plant integration services | Mechanical & electrical | Maketronics"
        description={HUB_DESC}
        canonicalPath="/services"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-400 mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 max-w-3xl">
            Mechanical & electrical services for crushing and bulk handling plants
          </h1>
          <p className="text-gray-400 max-w-2xl mb-14 leading-relaxed">{HUB_DESC}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {slugs.map((slug) => {
              const p = GLOBAL_SERVICES[slug];
              return (
                <Link
                  key={slug}
                  to={`/services/${slug}`}
                  className="group block p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-yellow-400/40 transition-colors"
                >
                  <h2 className="text-lg font-bold text-white group-hover:text-yellow-400 mb-2">{p.h1}</h2>
                  <p className="text-sm text-gray-500 font-mono">/services/{slug}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 pt-16 border-t border-white/10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-6">Regional hubs</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/middle-east"
                className="px-5 py-2 rounded-full border border-white/15 text-sm hover:border-yellow-400/50"
              >
                Middle East
              </Link>
              <Link
                to="/south-africa"
                className="px-5 py-2 rounded-full border border-white/15 text-sm hover:border-yellow-400/50"
              >
                South Africa
              </Link>
              <Link
                to="/southeast-asia"
                className="px-5 py-2 rounded-full border border-white/15 text-sm hover:border-yellow-400/50"
              >
                Southeast Asia
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
