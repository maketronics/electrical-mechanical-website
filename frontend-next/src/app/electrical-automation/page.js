import Link from "next/link";
import Header from '../../components/Header';
import ContentPageHero from '../../components/ContentPageHero';
import Footer from '../../components/Footer';
import PrimaryCTA from '../../components/PrimaryCTA';
import InternalLinksSection from '../../components/InternalLinksSection';
import FAQAccordion from "../../components/FAQAccordion";


const AUTOMATION_STACK = [
  {
    label: 'Field Instrumentation',
    detail: 'Sensors, Scales, Level Monitors',
  },
  {
    label: 'Control & Optimization',
    detail: 'Custom PLC Programming & PID Loops',
  },
  {
    label: 'Power & Motion Control',
    detail: 'Hardened MCC Panels & VFD Systems',
  },
  {
    label: 'Unified Analytics Layer',
    detail: 'Real-Time SCADA Control Room',
  },
];

const CAPABILITY_CATALOG = [
  {
    title: 'Control Panels',
    desc: 'Custom-built for site conditions with logically mapped maintenance access.',
    tags: ['IP-Rated', 'Modular'],
  },
  {
    title: 'MCC & VFD Systems',
    desc: 'Motor control solutions optimized for load profiles and peak energy efficiency.',
    tags: ['Load Balancing', 'VFD'],
  },
  {
    title: 'Soft Starters',
    desc: 'Reduced mechanical stress through controlled motor acceleration and surge dampening.',
    tags: ['Stress Reduction', 'Safety'],
  },
  {
    title: 'PLC Automation',
    desc: 'Robust automation logic integrated directly with mechanical system feedback.',
    tags: ['Digital Twin', 'Logic'],
  },
  {
    title: 'Execution Support',
    desc: 'Professional on-site commissioning to ensure engineered values meet site reality.',
    tags: ['On-Site', 'Testing'],
  },
  {
    title: 'Preventive Programs',
    desc: 'Predictive maintenance schedules designed to identify failures before they halt production.',
    tags: ['Predictive', 'Asset Life'],
  },
];

  export const metadata = {
    title: 'Electrical & Automation Integration | Mining | Maketronics',
    description:
      'Integrated crushing plant electrical design and quarry plant automation. MCC panels, VFD systems, PLC programming, and SCADA for high-tonnage mining operations.',
  //   h1: 'Electrical & Automation for High-Tonnage Mineral Processing',
  };
const ElectricalAutomation = () => {
  //   title: 'Electrical & Automation Integration | Mining | Maketronics',
  //   description:
  //     'Integrated crushing plant electrical design and quarry plant automation. MCC panels, VFD systems, PLC programming, and SCADA for high-tonnage mining operations.',
  //   h1: 'Electrical & Automation for High-Tonnage Mineral Processing',
  // });

  const faqs = [
  {
    question: "What is the first step in upgrading a manual legacy quarry plant?",
    answer: (
      <>
        We begin with a comprehensive audit of the motor control infrastructure. We can retroactively integrate
        a centralized PLC system into an existing MCC panel fabrication, introducing automated interlocking and
        basic load-sensing logic without requiring a complete mechanical rebuild. Link to{" "}
        <Link
          href="/independent-system-integrator/"
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          Independent System Integrator
        </Link>{" "}
        page.
      </>
    ),
  },

  {
    question: "How does automated electrical integration protect our conveyor belts?",
    answer: (
      <>
        By matching VFD acceleration curves with real-time belt tension metrics, our mining electrical
        integrator solutions eliminate the harsh structural waves that cause belt stretching, splicing failures,
        and take-up tower damage. Link to{" "}
        <Link
          href="/vfd-systems-conveyors/"
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          VFD Systems for Crushing Plant Conveyors
        </Link>{" "}
        page.
      </>
    ),
  },

  {
    question: "Can an automated system handle varying material hardness automatically?",
    answer: (
      <>
        Yes. Through advanced PLC programming for quarry plants, we build smart "recipes." When the
        material profile switches from soft limestone to abrasive granite, the system automatically modulates
        crusher closed-side settings and screen speeds to preserve component life while optimizing grading
        specs. Link to{" "}
        <Link
          href="/plc-programming-quarry-plants/"
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          PLC Programming for Quarry Plants
        </Link>{" "}
        page.
      </>
    ),
  },
];

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />

      <main>
        <ContentPageHero variant="electrical" badge="Automation systems">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              Electrical &amp; Automation for High-Tonnage Mineral Processing
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              In modern high-tonnage mineral processing, the line between profit and loss is no longer drawn by
              mechanical raw power alone; it is drawn by microsecond computational control. Yet, many operations treat
              electrical automation as a secondary consideration, relying on legacy relay logic, uncooled field panels,
              or disconnected OEM automation platforms. This fragmented approach to crushing plant electrical design
              creates an operational disconnect. Without a unified digital architecture, plants suffer from hidden
              production leaks: uncoordinated material feeds that slug the crusher, unmitigated electrical harmonics that
              degrade motor windings, and an inability to track real-time cost-per-ton metrics.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              The Risks of Fragmented Quarry Plant Automation
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Operating a modern processing plant without an integrated electrical and automation blueprint exposes the
              infrastructure to severe operational liabilities:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">The &quot;Blind Loop&quot; Phenomenon:</strong> When instrumentation is
                not natively tied to drive logic, feeders cannot anticipate crusher load changes. This lack of automated
                intelligence results in a repeating cycle of empty belts and choked cavities.
              </li>
              <li>
                <strong className="text-white">Vibration-Induced Network Failures:</strong> Standard electrical
                components drop communications under the constant low-frequency resonance of a mine site. Poorly
                engineered control connections lead to intermittent &quot;bus faults&quot; that can shut down entire
                conveyor networks without warning.
              </li>
              <li>
                <strong className="text-white">Thermal Overstress in Extreme Environments:</strong> High-power processing
                electronics generate massive localized heat. When deployed in unmanaged enclosures, temperature spikes
                cause immediate processor throttling, premature component failure, and unexpected afternoon shutdowns.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Our Global Approach to Electrical Automation
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-10">
              Maketronics delivers complete, system-wide synergy by acting as a dedicated mining electrical integrator.
              We engineer a multi-layered automation stack designed to withstand the world&apos;s most abusive operational
              environments:
            </p>

            <div className="max-w-2xl mb-12 bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8 font-mono text-sm">
              {AUTOMATION_STACK.map((layer, index) => (
                <div key={layer.label}>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-yellow-400 shrink-0">[</span>
                    <span className="text-white font-semibold">{layer.label}</span>
                    <span className="text-yellow-400 shrink-0">]</span>
                    <span className="text-yellow-400/80 hidden sm:inline">─►</span>
                    <span className="text-gray-400">{layer.detail}</span>
                  </div>
                  {index < AUTOMATION_STACK.length - 1 && (
                    <div className="pl-6 py-1 text-yellow-400/40">│</div>
                  )}
                </div>
              ))}
            </div>

            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Holistic Crushing Plant Electrical Design:</strong> We engineer the entire
                network from the high-voltage substation down to the low-voltage sensor. Our designs ensure proper
                harmonic mitigation, transient surge protection, and robust grounding networks to safeguard your data
                assets.
              </li>
              <li>
                <strong className="text-white">Advanced Quarry Plant Automation:</strong> We eliminate manual operator
                errors by implementing intelligent sequential start/stop logic and demand-linked PID loops. The plant
                automatically balances feeder speeds against crusher motor amperage, maximizing throughput and
                maintaining a perfect choke-feed level.
              </li>
              <li>
                <strong className="text-white">Field-Hardened Infrastructure:</strong> Every component we deploy is
                housed inside our custom industrial control panels for mining, engineered with active thermal management,
                IP66 dust-and-water protection, and vibration-isolated sub-frames.
              </li>
              <li>
                <strong className="text-white">Predictive Diagnostics &amp; SCADA Integration:</strong> We transform raw
                operational data into actionable intelligence. Our automated systems monitor bearing temperatures,
                conveyor belt tracking, and motor winding health, alerting operators to potential failures before they
                trigger an emergency shutdown.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Unified Engineering Across the Power and Logic Stack
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Our value as an independent partner lies in our ability to integrate all aspects of the modern electrical
              ecosystem:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Intelligent Motor Control:</strong> We integrate custom-built MCC panel
                fabrication for mining plants with advanced VFD systems for crushing plant conveyors, reducing
                high-torque mechanical shock during start-ups and lowering peak utility demand penalties.
              </li>
              <li>
                <strong className="text-white">Multi-Brand Synthesis:</strong> We break down proprietary vendor barriers.
                Whether your facility utilizes Siemens, Rockwell Automation, or Schneider Electric, we compile unified
                code that allows different machinery brands to communicate flawlessly on a single network.
              </li>
              <li>
                <strong className="text-white">Remote Operational Telemetry:</strong> We engineer secure, industrial-grade
                VPN gateways into our automation systems. This allows our engineering team to provide remote diagnostics,
                code updates, and troubleshooting to remote mine sites worldwide.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-2">The Catalog</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
                  What We <span className="text-gray-500">Deliver</span>
                </h3>
              </div>
              <div className="hidden lg:block text-right">
                <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest leading-tight">
                  Integrated Electrical <br /> &amp; Automation Infrastructure
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITY_CATALOG.map((item, i) => (
                <div
                  key={i}
                  className="group bg-[#0a0a0a] p-10 rounded-[2rem] border border-white/5 hover:border-yellow-400/50 transition-all duration-500 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl font-black text-yellow-400/20">0{i + 1}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-yellow-400 transition-colors uppercase italic">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm mb-8">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tid) => (
                      <span
                        key={tid}
                        className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/80 border border-yellow-400/20 px-2 py-1 rounded bg-yellow-400/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
            
            <FAQAccordion
            title="FAQ: Maximizing Plant Automation"
            faqs={faqs}
         />
        {/* <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: Maximizing Plant Automation
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  What is the first step in upgrading a manual legacy quarry plant?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We begin with a comprehensive audit of the motor control infrastructure. We can retroactively integrate
                  a centralized PLC system into an existing MCC panel fabrication, introducing automated interlocking and
                  basic load-sensing logic without requiring a complete mechanical rebuild. Link to{' '}
                  <Link
                    href="/independent-system-integrator/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Independent System Integrator
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  How does automated electrical integration protect our conveyor belts?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  By matching VFD acceleration curves with real-time belt tension metrics, our mining electrical
                  integrator solutions eliminate the harsh structural waves that cause belt stretching, splicing failures,
                  and take-up tower damage. Link to{' '}
                  <Link
                    href="/vfd-systems-conveyors/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    VFD Systems for Crushing Plant Conveyors
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Can an automated system handle varying material hardness automatically?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Through advanced PLC programming for quarry plants, we build smart &quot;recipes.&quot; When the
                  material profile switches from soft limestone to abrasive granite, the system automatically modulates
                  crusher closed-side settings and screen speeds to preserve component life while optimizing grading
                  specs. Link to{' '}
                  <Link
                    href="/plc-programming-quarry-plants/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    PLC Programming for Quarry Plants
                  </Link>{' '}
                  page.
                </p>
              </article>
            </div>
          </div>
        </section> */}

        <section className="py-16 md:py-20 bg-[#080808] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Is your crushing circuit held back by mismatched control platforms or frequent electrical faults? Tell us
              your current machinery configuration and your environmental bottlenecks. We will provide a specific
              electrical automation assessment to maximize your plant&apos;s efficiency.
            </p>
            <PrimaryCTA text="Request Electrical Automation Assessment" />
          </div>
        </section>

        <InternalLinksSection sourcePath="/electrical-automation/" />
      </main>

      <Footer />
    </div>
  );
};

export default ElectricalAutomation;
