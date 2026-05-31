import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ContentPageHero from '../components/ContentPageHero';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import InternalLinksSection from '../components/InternalLinksSection';
import { usePageSeo } from '../utils/usePageSeo';

const INDUSTRIAL_SECTORS = [
  {
    title: 'High-Tonnage Mining Circuits',
    body:
      'From precious metals to industrial base ores, the mining sector demands relentless, high-availability output under brutal conditions. We operate as a specialized mining electrical integrator, designing massive power distribution networks, automated crushing stations, and smart telemetry systems. Whether handling abrasive iron ore or sticky copper concentrates, our designs protect your high-value assets from the pit to the processing plant.',
    focus: 'Run-of-Mine (ROM) primary stations, multi-drive overland transport, and port-loading integration.',
  },
  {
    title: 'Commercial Quarry Integration Markets',
    body:
      'Commercial quarrying relies on extreme efficiency and flexible production to match fluctuating market demands. We serve diverse quarry integration markets by replacing rigid, manual control setups with intelligent automation. Our systems allow operators to instantly switch production profiles via smart HMIs, shifting from high-volume base courses to strict, high-specification concrete fractions without mechanical re-configuration.',
    focus: 'Closed-loop PID feed control, automated sand washing logic, and multi-brand OEM synchronization.',
  },
  {
    title: 'High-Specification Aggregate Processing Geographies',
    body:
      'Infrastructure projects—such as high-speed rail links, airport runways, and mega-highways—demand perfect particle cubicity and strict grading curves. We adapt our designs to the distinct challenges of different aggregate processing geographies. From the extreme ambient heat and high-silica gabbro of the GCC to the high-moisture tropical environments of Southeast Asia, we over-engineer our structures and logic to deliver nameplate TPH anywhere on Earth.',
    focus: 'Tertiary VSI shape optimization, high-G structural screening, and micro-fines management.',
  },
];

const ADAPTATION_MATRIX = [
  {
    challenge: 'High-Abrasive Geologies (Gabbro, Quartzite, Basalt)',
    solution:
      'Composite wear protection systems for crushers featuring rock-boxes, ceramics, and 600BHN overlays.',
    impact: 'Extends chute and liner life from weeks to months.',
  },
  {
    challenge: 'Tropical & High-Moisture Ores (Nickel, Wet Coal, Limestone)',
    solution:
      'Steep-angle crusher discharge chute engineering with ultra-low friction UHMW liners.',
    impact: 'Eliminates material carry-back, bridging, and plugging.',
  },
  {
    challenge: 'Unstable Regional Power Grids (Remote Corridors, Diesel Hybrid Sites)',
    solution: 'Custom MCC panel fabrication with active climate control and active harmonic filtering.',
    impact: 'Eliminates thermal derating and nuisance power trips.',
  },
];

const IndustriesServed = () => {
  usePageSeo({
    title: 'Industries Served | Mining, Quarry & Aggregate | Maketronics',
    description:
      'Sector-specific engineering for mining circuits, commercial quarry integration, and aggregate processing geographies worldwide.',
    h1: 'Industries We Serve: Sector-Specific Processing Engineering',
  });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black font-sans antialiased">
      <Header />

      <main>
        <ContentPageHero variant="mechanical" badge="Sector expertise">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              Industries We Serve: Sector-Specific Processing Engineering
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              In heavy industrial processing, there is no room for &apos;one-size-fits-all&apos; engineering. The
              operational stressors of a deep-level copper mine in South America share almost nothing in common with a
              high-volume urban aggregate quarry in Southeast Asia or a hard-rock infrastructure site in the Middle East.
              Yet, many engineering firms deploy standardized, generic designs across these vastly different sectors.
              Failing to account for sector-specific variables—such as varying material abrasiveness, strict regional
              environmental laws, and erratic local power grids—guarantees a plant that underperforms, wastes energy, and
              suffers from chronic, premature mechanical and electrical fatigue.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              High-Stakes Industrial Sectors We Transform
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-10">
              Maketronics bridges the gap between raw mechanical extraction and precision processing. We engineer
              field-hardened ecosystems across three primary global pillars:
            </p>

            <div className="space-y-10">
              {INDUSTRIAL_SECTORS.map((sector, index) => (
                <article
                  key={sector.title}
                  className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
                    {index + 1}. {sector.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{sector.body}</p>
                  <p className="text-sm text-gray-400 border-l-2 border-yellow-400/50 pl-4">
                    <strong className="text-white">Key Focus Areas:</strong> {sector.focus}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              The Maketronics Adaptation Matrix
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-10">
              We don&apos;t expect your site conditions to match our designs; we engineer our designs to master your site
              conditions:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 pr-4 text-xs font-bold uppercase tracking-widest text-yellow-400">
                      Industrial Challenge
                    </th>
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-yellow-400">
                      Our Engineered Solution
                    </th>
                    <th className="py-4 pl-4 text-xs font-bold uppercase tracking-widest text-yellow-400">
                      System Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ADAPTATION_MATRIX.map((row) => (
                    <tr key={row.challenge} className="border-b border-white/10">
                      <td className="py-5 pr-4 align-top text-gray-200 font-medium">{row.challenge}</td>
                      <td className="py-5 px-4 align-top text-gray-300">{row.solution}</td>
                      <td className="py-5 pl-4 align-top text-gray-300">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Unifying the Power, Structure, and Logic Layer
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Our independent status allows us to engineer complete system harmony across any industrial sector, bypassing
              the proprietary hardware restrictions of single-brand OEMs:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Agnostic Process Automation:</strong> We deploy unified electrical
                automation architectures that connect disparate machinery brands onto a single, intuitive SCADA network.
              </li>
              <li>
                <strong className="text-white">Structural Longevity:</strong> We utilize advanced finite element analysis
                to ensure that our vibrating screen structural fabrication resists structural fatigue, keeping your plant
                balanced under high load profiles.
              </li>
              <li>
                <strong className="text-white">Turnkey Start-Up Security:</strong> We manage the entire transition from
                construction to live production through rigorous, site-specific crushing plant commissioning protocols,
                ensuring your systems perform from day one.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: Sector-Specific Engineering
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  How do your quarry systems adapt to changing environmental and dust regulations?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We integrate dust encapsulation and velocity-matched material placement directly into our crusher
                  discharge chute engineering. This suppresses dust at the source, keeping your quarry compliant with
                  local environmental laws without relying on heavy water suppression. Link to{' '}
                  <Link
                    to="/crusher-discharge-chute-engineering/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Crusher Discharge Chute Engineering
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Can you integrate a new automation system into an older, existing mining infrastructure?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. We specialize in brownfield modernization. As an independent system integrator, we can wrap a
                  modern, data-driven automation layer around legacy mechanical assets, extending the lifespan and
                  efficiency of your existing plant. Link to{' '}
                  <Link
                    to="/independent-system-integrator/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Independent System Integrator
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Do you provide on-site electrical engineering support for remote mining operations?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Alongside our modular, pre-tested electrical E-Rooms, we integrate secure remote-telemetry
                  gateways into our industrial control panels for mining, allowing our global engineering team to
                  diagnose and optimize your plant from anywhere in the world. Link to{' '}
                  <Link
                    to="/industrial-control-panels-mining/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Industrial Control Panels for Mining
                  </Link>{' '}
                  page.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#080808] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Are regional environmental challenges, power instability, or abrasive geologies throttling your plant&apos;s
              efficiency? Tell us your industry sector, your material profile, and your location. We will provide a
              specific industrial integration assessment to harden your operation.
            </p>
            <PrimaryCTA text="Request Industrial Integration Assessment" />
          </div>
        </section>

        <InternalLinksSection sourcePath="/industries/" />
      </main>

      <Footer />
    </div>
  );
};

export default IndustriesServed;
