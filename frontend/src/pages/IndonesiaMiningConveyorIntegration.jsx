import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ContentPageHero from '../components/ContentPageHero';
import Footer from '../components/Footer';
import InternalLinksSection from '../components/InternalLinksSection';
import { usePageSeo } from '../utils/usePageSeo';

const IndonesiaMiningConveyorIntegration = () => {
  usePageSeo({
    title: 'Mining Conveyor System Integration | Indonesia | Maketronics',
    h1: 'Mining Conveyor System Integration Indonesia: Mastering Tropical Logistics',
    description:
      'Specialist mining conveyor system integration in Indonesia. High-moisture ore handling, overland conveyor synchronization, and port loading solutions.',
  });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      <main>
        <ContentPageHero variant="mechanical" badge="Indonesia mining">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              Mining Conveyor System Integration Indonesia: Mastering Tropical Logistics
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              Indonesia&apos;s mining sector, especially in Kalimantan and Sulawesi, operates in one of the world&apos;s
              toughest logistics environments. Mining conveyor system integration determines whether export cycles stay
              profitable or fail under belt tracking issues, wet-ore slippage, and transfer-point buildup over long
              pit-to-port distances.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              Solving the Logistical Hurdles of Indonesian Mining
            </h2>
            <ul className="space-y-4 text-gray-300 max-w-5xl">
              <li><strong className="text-white">High-Moisture Sticky Ore Management:</strong> Advanced cleaners and low-friction chute liner strategy to prevent carry-back and plugging in monsoon conditions.</li>
              <li><strong className="text-white">Overland Synchronization & Tension Control:</strong> Master-follower VFD load sharing prevents belt snaps on long undulating routes.</li>
              <li><strong className="text-white">Barge-Loading & Port Integration:</strong> Overland feed linked to ship-loader automation to modulate TPH through barge transitions without overspill.</li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Our Engineering Approach for Indonesian Operations
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Tropicalized Electrical Infrastructure:</strong> MCC and control panels
                with anti-fungal coating and dehumidification to prevent humidity-driven pitting and short circuits.
              </li>
              <li>
                <strong className="text-white">Dynamic Braking for Undulating Terrains:</strong> Regenerative braking
                for downhill runs with fail-safe stopping to prevent runaway belts.
              </li>
              <li>
                <strong className="text-white">Smart Health Monitoring:</strong> Rip detectors, pull-wire switches,
                and bearing temperature sensing integrated into central PLC architecture for predictive maintenance.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Equipment & Systems for the Indonesian Market
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">Overland Conveyor Flights:</strong> High-capacity systems for long-distance transport through dense terrain.</li>
              <li><strong className="text-white">Barge Loading Systems:</strong> Integrated radial stackers and telescopic conveyors for ship-loading efficiency.</li>
              <li><strong className="text-white">Mobile Link Conveyors:</strong> Part of mobile crushing integration for shifting pit-to-plant transport.</li>
              <li><strong className="text-white">Intelligent MCC Hubs:</strong> MCC panel fabrication with specialized cooling for 95% humidity environments.</li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Representative Scenario: 1,500 TPH Coal Handling Facility (Kalimantan)
            </h2>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-10">
              <p className="text-gray-200 leading-relaxed">
                <span className="font-bold text-white">The Project:</span> Integration of a 2 km overland conveyor
                system and barge loading station.
              </p>
              <p className="text-gray-200 leading-relaxed mt-4">
                <span className="font-bold text-white">The Challenge:</span> High coal moisture caused slippage and
                belt mistracking, creating frequent emergency stops.
              </p>
              <p className="text-gray-200 leading-relaxed mt-4">
                <span className="font-bold text-white">The Solution:</span> Re-engineered high-torque VFD drive logic,
                automated belt-tensioning, and industrial control panels with real-time moisture-compensation logic.
              </p>
              <p className="text-gray-200 leading-relaxed mt-4">
                <span className="font-bold text-white">Outcome:</span>{' '}
                <span className="text-yellow-400 font-semibold">
                  25% increase in loading speed and complete elimination of belt-slip shutdowns during peak monsoon.
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-5">
                Representative scenario. Replace with verified client case data before sales publication.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Regional Presence: Indonesia&apos;s Integration Partner
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">Kalimantan:</strong> Large-scale coal operations with rugged overland conveyor networks.</li>
              <li><strong className="text-white">Sulawesi & Halmahera:</strong> Nickel ore transport systems for growing smelter sectors.</li>
              <li><strong className="text-white">Sumatra:</strong> Modular conveyor solutions for gold and copper mining infrastructure.</li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: Optimizing Indonesian Bulk Handling
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How do we stop belts from slipping during heavy rain?</h3>
                <p className="text-gray-300 leading-relaxed">
                  We combine high-tension gravity take-ups, ceramic-lagged pulleys, and VFD torque-limiting logic for
                  smooth startup under saturated conditions. See{' '}
                  <Link to="/vfd-systems-conveyors/" className="text-yellow-400 hover:text-yellow-300">
                    VFD Systems for Crushing Plant Conveyors
                  </Link>
                  .
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Our transfer chutes keep plugging with wet coal. Can this be fixed?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. We re-engineer chute angle and lining with steep geometry plus UHMW liners so sticky material
                  will not bond to steel. See{' '}
                  <Link to="/crusher-discharge-chute-engineering/" className="text-yellow-400 hover:text-yellow-300">
                    Crusher Discharge Chute Engineering
                  </Link>
                  .
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can we monitor our Kalimantan site from Jakarta?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Absolutely. Industrial IoT gateway integration provides secure real-time TPH, belt speed, and energy
                  dashboards via satellite or 5G links. See{' '}
                  <Link to="/plc-programming-quarry-plants/" className="text-yellow-400 hover:text-yellow-300">
                    Industrial Automation for Crushing Plants
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
              Specific Tropical Logistics Assessment
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Is your Indonesian operation losing TPH to belt slippage or transfer bottlenecks? Share conveyor length
              and material moisture profile and we will provide a specific integration roadmap to stabilize logistics.
            </p>
          </div>
        </section>
        <InternalLinksSection sourcePath="/indonesia-mining-conveyor-integration/" />
      </main>
      <Footer />
    </div>
  );
};

export default IndonesiaMiningConveyorIntegration;
