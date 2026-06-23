import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ContentPageHero from '../components/ContentPageHero';
import Footer from '../components/Footer';
import InternalLinksSection from '../components/InternalLinksSection';
import { usePageSeo } from '../utils/usePageSeo';

const GccHardRockProcessing = () => {
  usePageSeo({
    title: 'Hard Rock Processing Plant Engineering | GCC | Maketronics',
    h1: 'Hard Rock Processing Plant Engineering GCC: Built for the World’s Harshest Ores',
    description:
      'Specialist hard rock processing plant engineering in the GCC. We design high-availability circuits for abrasive Gabbro, Basalt, and Limestone in 50C+ environments.',
  });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      <main>
        <ContentPageHero variant="mechanical" badge="GCC hard rock">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              Hard Rock Processing Plant Engineering GCC: Built for the World&apos;s Harshest Ores
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              The GCC region contains some of the most abrasive and high-strength geologies in the world, from dense
              gabbro to volcanic basalt. For operators in these regions, hard rock processing engineering is a battle
              against physics. Standard designs built for softer aggregates fail rapidly under high Work Index and 24/7
              thermal stress, driving a cascade of wear, structural fatigue, and electrical instability.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              Why Standard Engineering Fails in the GCC Hard Rock Sector
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">The Abrasive Sandblast Effect:</strong> High-silica gabbro can perforate standard chutes in under 200 hours without kinetic-energy flow control.</li>
              <li><strong className="text-white">Structural Harmonic Destruction:</strong> If screen/gantry structures are not detuned, resonance drives catastrophic weld and beam failure.</li>
              <li><strong className="text-white">Thermal Derating of Power Assets:</strong> At 50C, cable and VFD capacity drops. Without thermal-derating design, nuisance trips dominate peak production hours.</li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Our Engineering Approach for GCC Hard Rock Plants
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Hybrid Wear Protection Suites:</strong> Composite protection with
                rock-box shelves for impact zones, ceramic-rubber liners for fines, and 600BHN overlays for sliding abrasion.
              </li>
              <li>
                <strong className="text-white">High-Stiffness Gantry Designs:</strong> Heavy wide-flange sections and
                full-penetration welding create low-vibration structural zones.
              </li>
              <li>
                <strong className="text-white">Climate-Isolated Automation:</strong> Closed-loop cooled industrial
                control panels isolate PLC/VFD architecture from desert heat.
              </li>
              <li>
                <strong className="text-white">Dust-Encapsulated Flow Paths:</strong> Laminar-flow chute geometry
                minimizes dust turbulence while reducing water dependency for compliance.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: Engineering for GCC Performance
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Why is our power consumption high versus nameplate TPH?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Crusher gap and choke-feed control are often mismanaged. We optimize PLC programming to reduce
                  over-grinding and can cut specific energy demand significantly. See{' '}
                  <Link to="/plc-programming-quarry-plants/" className="text-yellow-400 hover:text-yellow-300">
                    PLC Programming for Quarry Plants
                  </Link>
                  .
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can you engineer one plant for both limestone and gabbro?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. We design dual-mode circuits where VFD speed and stroke profiles adapt to hardness and maintain
                  grading performance across soft and hard feeds. See{' '}
                  <Link to="/vfd-systems-conveyors/" className="text-yellow-400 hover:text-yellow-300">
                    VFD Systems for Crushing Plant Conveyors
                  </Link>
                  .
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">What is the most common GCC design mistake?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Under-engineered transfer points. We focus on soft-loading discharge geometry to protect conveyor
                  belts, the most expensive recurring consumable. See{' '}
                  <Link to="/crusher-discharge-chute-engineering/" className="text-yellow-400 hover:text-yellow-300">
                    Crusher Discharge Chute Engineering
                  </Link>
                  .
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#080808] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-5">
              Specific GCC Hard Rock Assessment
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Is your hard rock plant struggling with excessive wear or structural fatigue? Tell us your rock type and
              current maintenance intervals and we will provide a specific GCC hard rock engineering assessment.
            </p>
          </div>
        </section>
        <InternalLinksSection sourcePath="/gcc-hard-rock-processing/" />
      </main>
      <Footer />
    </div>
  );
};

export default GccHardRockProcessing;
