import Header from '../../components/Header';
import ContentPageHero from '../../components/ContentPageHero';
import Footer from '../../components/Footer';
import InternalLinksSection from '../../components/InternalLinksSection';
import PrimaryCTA from '../../components/PrimaryCTA';


export const metadata = {
  title: 'PLC Programming for Quarry Plants | Maketronics',
  description:
  'Expert PLC programming for quarry plants with start/stop sequencing, interlocks, diagnostics, and feeder optimization for stable high-tonnage performance.',
   };

const PlcProgrammingQuarryPlants = () => {
  //   title: 'PLC Programming for Quarry Plants | Maketronics',
  //   h1: 'PLC Programming for Quarry Plants: The Brain of the Operation',
  //   description:
  //     'Expert PLC programming for quarry plants with start/stop sequencing, interlocks, diagnostics, and feeder optimization for stable high-tonnage performance.',
  // });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      <main>
        <ContentPageHero variant="electrical" badge="PLC programming">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              PLC Programming for Quarry Plants: The Brain of the Operation
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              A quarry&apos;s efficiency is only as good as the logic that drives it. Maketronics delivers expert PLC
              programming for quarry plants, turning disconnected machines into a synchronized, self-optimizing
              system. We bridge mechanical potential and peak production through intelligent automation and fail-safe
              interlocking logic.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              What We Do: Intelligent Sequence Control
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed">
              In manual or poorly programmed plants, a single conveyor trip can create hours of spillage and
              mechanical damage. Our PLC programming eliminates these risks with custom logic for start/stop
              sequencing, auto-feed loops, and safety interlocks that keep high-tonnage circuits at nameplate output.
              From surge-pile control to mantle protection, logic is built for full operational transparency.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Our Engineering Process: Logic that Scales
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">Process Flow Mapping:</strong> Defining all states from cold-start to full-load and emergency shutdown.</li>
              <li><strong className="text-white">Safety Interlocking:</strong> Hard and soft interlocks to stop upstream equipment when downstream belts trip.</li>
              <li><strong className="text-white">Auto-Feeder Optimization:</strong> PID loops adjusting feeder speed from crusher amps and cavity level sensors.</li>
              <li><strong className="text-white">Fault Diagnostics & Logging:</strong> Detailed alarm handling with fast root-cause visibility on SCADA.</li>
              <li><strong className="text-white">Remote Integration:</strong> Secure gateways for off-site monitoring and over-the-air logic updates.</li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Capabilities & Logic Modules
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">Sequential Start/Stop:</strong> Motor starts are staggered to avoid grid surge events.</li>
              <li><strong className="text-white">Crusher Cavity Management:</strong> VFD and sensor coordination for sustained choke-feed performance.</li>
              <li><strong className="text-white">Belt-Scale Integration:</strong> Real-time TPH tracking and automated production reporting.</li>
              <li><strong className="text-white">Intelligent Lubrication Loops:</strong> Oil flow/temperature/pressure monitoring to prevent bearing failures.</li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Representative Scenario: 800 TPH Aggregate Automation (Vietnam)
            </h2>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-10">
              <p className="text-gray-200 leading-relaxed">
                <span className="font-bold text-white">The Project:</span> Full-scale PLC programming for a quarry
                plant with three crushers and five screening stages.
              </p>
              <p className="text-gray-200 leading-relaxed mt-4">
                <span className="font-bold text-white">The Challenge:</span> Secondary crusher surges caused overflow
                and required two hours of manual cleanup per shift.
              </p>
              <p className="text-gray-200 leading-relaxed mt-4">
                <span className="font-bold text-white">The Solution:</span> Demand-linked PLC logic that monitored
                secondary load and automatically trimmed primary feeder speed via VFD control.
              </p>
              <p className="text-gray-200 leading-relaxed mt-4">
                <span className="font-bold text-white">Outcome:</span>{' '}
                <span className="text-yellow-400 font-semibold">
                  Complete elimination of material spills and 12% increase in average daily throughput.
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-5">
                Representative scenario. Replace with verified project data before sales publication.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Regional Presence: Automated Efficiency Globally
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">Middle East (GCC):</strong> Remote-monitored PLC systems for desert quarries in KSA and Oman.</li>
              <li><strong className="text-white">Southeast Asia:</strong> Supporting plant integration in Vietnam and Indonesia.</li>
              <li><strong className="text-white">Africa:</strong> Modernizing legacy plants with current PLC architectures in South Africa.</li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: PLC Programming for Quarry Plants
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can you update programming on older PLC systems?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. We handle legacy migration by porting older logic platforms to modern processors while adding
                  remote diagnostics and control enhancements.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How does PLC logic protect expensive crushers?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Logic monitors oil pressure, return-oil temperature, and eccentric speed. If values move outside
                  OEM-safe windows, controlled feed shutdown happens before mechanical failure.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Do we need a full-time programmer on site?</h3>
                <p className="text-gray-300 leading-relaxed">
                  No. We provide intuitive HMI screens so operators can adjust setpoints, view faults, and run plant
                  logic without accessing raw code.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#080808] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-5">
              Request a Logic Audit
            </h2>
            <PrimaryCTA text="Consult a PLC Engineer" />
          </div>
        </section>
        <InternalLinksSection sourcePath="/plc-programming-quarry-plants/" />
      </main>
      <Footer />
    </div>
  );
};

export default PlcProgrammingQuarryPlants;
