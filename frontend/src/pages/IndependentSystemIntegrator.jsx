import Header from '../components/Header';
import ContentPageHero from '../components/ContentPageHero';
import Footer from '../components/Footer';
import InternalLinksSection from '../components/InternalLinksSection';
import { usePageSeo } from '../utils/usePageSeo';

const IndependentSystemIntegrator = () => {
  usePageSeo({
    title: 'Independent System Integrator | Brand-Agnostic | Maketronics',
    h1: 'Independent System Integrator for Multi-OEM Plant Engineering',
    description:
      'Independent system integration for mining and quarry plants, connecting mechanical, electrical, and automation layers across OEM platforms.',
  });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      <main>
        <ContentPageHero variant="mechanical" badge="System integration">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              Independent System Integrator for Multi-OEM Plant Engineering
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl font-light leading-relaxed">
              We operate brand-agnostic and own integration risk across structural, electrical, and control interfaces
              so your plant runs as one system regardless of equipment origin.
            </p>
          </div>
        </ContentPageHero>
        <InternalLinksSection sourcePath="/independent-system-integrator/" />
      </main>
      <Footer />
    </div>
  );
};

export default IndependentSystemIntegrator;
