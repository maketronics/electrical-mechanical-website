"use client";
import { useEffect, useState } from 'react';
import Link from "next/link";
import Header from '../../components/Header';
import ContentPageHero from '../../components/ContentPageHero';
import Footer from '../../components/Footer';
import PrimaryCTA from '../../components/PrimaryCTA';
import InternalLinksSection from '../../components/InternalLinksSection';
import FAQAccordion from "../../components/FAQAccordion";


import feedHopper1 from '../../assets/images/feed-hopper.jpg';
import feedHopper2 from '../../assets/images/feed-hopper2.jpg';
import primaryHopperImg from '../../assets/images/primary-receiving-hopper.jpg';
import coneVsiImg from '../../assets/images/cone-vsi.jpg';
import screenStation1 from '../../assets/images/screen-station.jpg';
import screenStation2 from '../../assets/images/screen-station2.jpg';
import surgeHopperImg from '../../assets/images/surge-hopper.jpg';
import conveyor1 from '../../assets/images/conveyors1.jpg';
import conveyor2 from '../../assets/images/conveyors2.jpg';
import conveyor3 from '../../assets/images/conveyors3.jpg';
import conveyor4 from '../../assets/images/conveyors4.jpg';

const MultipleImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <img
      src={images[current].src}
      alt=""
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    />
  );
};

//   export const metadata = {
//   title: 'Mechanical Systems Integration | Mining & Quarry | Maketronics',
//   description:
//     'Integrated quarry mechanical systems and crushing plant mechanical design. Stress-verified chutes, structural fabrication, and wear protection for high-tonnage mining circuits.',
//     h1: 'Mechanical Systems for High-Tonnage Crushing & Screening Circuits',
// };
   
   const MechanicalSystems = () => {

    const faqs = [
  {
    question: "How do you prevent a crusher's heavy vibration from damaging nearby structures?",
    answer: (
      <>
        We utilize advanced structural isolation. By engineering heavy-duty spring mounts, anti-vibration
        structural dampeners, and isolated foundation pads, our mining mechanical integrator team prevents
        destructive harmonic energy from migrating into the rest of the plant. Link to{" "}
        <Link
          href="/vibrating-screen-fabrication/"
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          Vibrating Screen Structural Fabrication
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    question: "Can you re-engineer our existing high-wear transfer chutes without changing our conveyors?",
    answer: (
      <>
        Yes. We specialize in custom brownfield retrofits. We model your existing mechanical setup and
        design an optimized, bolt-in replacement chute that resolves wear and tracking issues while using
        your current footprint. Link to{" "}
        <Link
          href="/crusher-discharge-chute-engineering/"
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          Crusher Discharge Chute Engineering
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    question: "How do your mechanical systems handle sticky or high-clay ores?",
    answer: (
      <>
        We integrate specialized steep-angle geometries and ultra-low friction linings, such as UHMW-PE or
        specialized polymer panels, ensuring that sticky materials slide smoothly through the system without
        building up or bridging. Link to{" "}
        <Link
          href="/indonesia-mining-conveyor-integration/"
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          Mining Conveyor System Integration Indonesia
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
        <ContentPageHero variant="mechanical" badge="Mechanical integration">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              Mechanical Systems for High-Tonnage Crushing &amp; Screening Circuits
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              In high-tonnage material processing, mechanical components endure some of the most brutal destructive
              forces found in any industry. Yet, many operations treat crushing plant mechanical design as a series of
              standalone equipment purchases, relying on generic structures, basic chutes, and off-the-shelf conveyor
              setups. This fragmented approach to quarry mechanical systems creates severe physical vulnerabilities.
              Without an engineered, cohesive mechanical ecosystem, plants are plagued by systemic issues: structural
              resonance that cracks welds, severe impact zones that tear conveyor belts, and poor material flow dynamics
              that cause costly, frequent blockages.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              The Risks of Unengineered Quarry Mechanical Systems
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Operating a high-capacity circuit without a unified, stress-analyzed mechanical blueprint introduces
              severe threats to your production uptime and structural safety:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">The Structural Resonance Trap:</strong> Heavy machinery like primary
                jaw and cone crushers generate massive kinetic forces. If the surrounding structural steel is not
                dynamically tuned, these forces create harmonic resonance, cracking welds and shearing anchor bolts
                across the entire gantry.
              </li>
              <li>
                <strong className="text-white">Catastrophic Belt and Splice Destruction:</strong> Dropping large, sharp
                ROM (Run-of-Mine) feed directly onto a moving conveyor belt causes localized piercing and rapid carcass
                degradation. Unengineered transfer points can destroy an expensive belt in a matter of weeks.
              </li>
              <li>
                <strong className="text-white">Material Bridging and Monsoon Plugs:</strong> High-moisture, sticky ores
                or fine materials can easily bond to standard steel surfaces. This leads to material bridging inside
                chutes and hoppers, completely choking the circuit and forcing dangerous, manual clearing operations.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Our Global Approach to Mechanical Systems
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Maketronics eliminates mechanical bottlenecks by acting as a specialized mining mechanical integrator. We
              engineer heavy-duty, stress-verified physical systems built to withstand the world&apos;s most punishing
              material handling environments:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Advanced Crushing Plant Mechanical Design:</strong> We engineer the
                entire material path from the dumping hopper to the stockyards. Utilizing Finite Element Analysis (FEA),
                we design structural supports, platform modules, and skid bases that absorb and isolate heavy impact
                and operational loads.
              </li>
              <li>
                <strong className="text-white">Velocity-Matched Flow Engineering:</strong> We design custom crusher
                discharge chute engineering solutions that transform gravity drops into controlled material accelerators.
                By placing material gently onto receiving belts at a matched speed and direction, we eliminate
                center-wear and extend conveyor belt life by up to 300%.
              </li>
              <li>
                <strong className="text-white">Composite Wear Armor Suites:</strong> We protect your structural steel
                from sliding abrasion and high-energy impacts. Our custom-mapped wear protection systems for crushers
                combine rock-box &quot;dead beds&quot; with mechanically fastened alumina ceramics and 600BHN chromium
                carbide overlays.
              </li>
              <li>
                <strong className="text-white">High-G Structural Fabrication:</strong> We engineer and build heavy-duty
                screen frames and feeder supports capable of handling intense, continuous G-forces, ensuring your
                vibrating screen structural fabrication remains entirely free from fatigue cracking.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Unifying the Mechanical, Structural, and Flow Layers
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Our value as an independent partner lies in our ability to design and integrate the entire physical
              process flow layer:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Overland Transport Optimization:</strong> We design robust, high-capacity
                conveyor lines engineered for undulating terrains and harsh environments, incorporating optimized pulley
                lagging, heavy-duty idler layouts, and precise take-up tracking systems.
              </li>
              <li>
                <strong className="text-white">Multi-Brand Mechanical Interface:</strong> We bridge the gaps between
                different machinery brands. We design the custom transitions, chutework, and structural housings that
                allow an array of disparate OEM crushers and screens to connect flawlessly.
              </li>
              <li>
                <strong className="text-white">Modular Greenfield and Brownfield Deployment:</strong> We build
                pre-engineered, bolt-together mechanical stations. This minimizes hazardous on-site welding, speeds up
                installation timelines, and simplifies future plant relocations or expansions.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-2">Engineering Catalog</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
                  System <span className="text-gray-500">Breakdown</span>
                </h3>
              </div>
              <div className="hidden lg:block text-right">
                <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest leading-tight">
                  Integrated Mechanical <br /> Infrastructure
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Primary Receiving Hopper',
                  purpose: 'High-capacity entry point for truck or loader feed.',
                  image: primaryHopperImg,
                  bullets: [
                    'Heavy Duty Rock Box on the top',
                    'Sloped Sides at the bottom',
                    'Sloped sides will be lined with 10mm thick 400BHN Liner',
                    'Chain Curtain for safety',
                    'Integrated station for Grizzly Feeder',
                  ],
                  tags: ['Wear Reduction', 'Uptime'],
                },
                {
                  name: 'Feed Hopper + Grizzly + Jaw Station',
                  purpose: 'Integrated primary crushing and feed management.',
                  image: [feedHopper1, feedHopper2],
                  bullets: [
                    'Fabricated Frame for Grizzly Feeder & Jaw Crusher',
                    'Bolted Design for ease of transportation & assembly',
                    'Operation Platform all around the jaw crusher',
                    'Feed & discharge chute for Jaw Crusher',
                    'Wear liner of high impact area',
                    'Rock Box design for better life',
                  ],
                  tags: ['Modular', 'Safety'],
                },
                {
                  name: 'Cone & VSI Stations',
                  purpose: 'Secondary/tertiary stations with precision mounting.',
                  image: coneVsiImg,
                  bullets: [
                    'Bolted Frame design for crusher mounting',
                    'Operation platform for ease of operation & maintenance',
                    'Guard for crusher drive',
                    'Station for mounting auxiliary panel/Lub. Tank',
                    'Rock Box discharge Chute for all the cone crushers',
                    'Discharge Chute lining optional with 8mm thick 400BHN Liner',
                  ],
                  tags: ['Precision', 'Capacity'],
                },
                {
                  name: 'Screen Stations',
                  purpose: 'Integrated screening stations with structural mounting.',
                  image: [screenStation1, screenStation2],
                  bullets: [
                    'Completely Bolted station for all the screens',
                    'Operation platform all around the screen',
                    'Roll-away chute for easy replacement of wire meshes',
                    'Guards for belt drives',
                    'Sloped planes of roll-away chute will be lined with 8mm 400BHN liner',
                    'Man-hole on both the sides of roll-away chutes',
                    'Flap-gate system',
                    'Product chutes at the bottom with 8mm 400BHN liner',
                  ],
                  tags: ['Sizing', 'Efficiency'],
                },
                {
                  name: 'Surge Hoppers',
                  purpose: 'Material buffering for continuous plant operation.',
                  image: surgeHopperImg,
                  bullets: [
                    'Pyramid shape hopper for homogenous discharge',
                    'Rock Box design for minimal wear',
                    'Inclined plates on sloped sides to form Rock Box',
                    'Integrated station for Pan Feeder',
                  ],
                  tags: ['Stability', 'Control'],
                },
                {
                  name: 'Conveyors',
                  purpose: 'Transport systems with structural supports and safety.',
                  image: [conveyor1, conveyor2, conveyor3, conveyor4],
                  bullets: [
                    'Plate bend high-profile section for all conveyors',
                    '25% additional capacity over and above the Rated Capacity',
                    'Geared motor drive for all conveyors',
                    'Nord Make geared motors with brake for all Conveyors',
                    'Tail Pulley Guard & side guards upto skirt board length',
                    'Pull Chord Switch on one side of all conveyors',
                    'Rubber lagged heavy duty drive pulley for all conveyors',
                    'Primary Scrapper on the drive side & V-plough Scrapper on the tail side',
                    'Heavy Duty Carrying Rollers with SKF/FAG make anti-seize bearings',
                    'DODGE/NTN make bearing units for head pulley mounting of conveyors',
                  ],
                  tags: ['Reliable', 'Safety'],
                },
              ].map((system, i) => (
                <div
                  key={i}
                  className="group bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-yellow-400/40 transition-all duration-500 flex flex-col shadow-2xl h-[660px]"
                >
                  <div className="h-72 relative overflow-hidden bg-[#111] flex-shrink-0">
                    {Array.isArray(system.image) ? (
                      <MultipleImageSlider images={system.image} />
                    ) : (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: `url(${system.image.src})` }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400/30">
                    <div>
                      <h4 className="text-2xl font-bold mb-2 tracking-tighter uppercase italic group-hover:text-yellow-400 transition-colors">
                        {system.name}
                      </h4>
                      <p className="text-gray-400 text-sm italic mb-6 leading-relaxed border-l-2 border-yellow-400/50 pl-4">
                        {system.purpose}
                      </p>

                      <ul className="space-y-3">
                        {system.bullets.slice(0, 6).map((bullet, bid) => (
                          <li key={bid} className="flex items-start gap-3 text-[14px] text-gray-300 leading-snug">
                            <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      {system.bullets.length > 6 && (
                        <p className="mt-4 text-[11px] uppercase tracking-widest text-yellow-400/70 hover:text-yellow-400 cursor-pointer">
                          + More specifications available on request
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {system.tags.map((tag, tid) => (
                        <span
                          key={tid}
                          className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/80 bg-yellow-400/5 border border-yellow-400/10 px-3 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQAccordion
       title="FAQ: Optimizing Mechanical Systems"
       faqs={faqs}
      />
        {/* <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: Optimizing Mechanical Systems
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  How do you prevent a crusher&apos;s heavy vibration from damaging nearby structures?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We utilize advanced structural isolation. By engineering heavy-duty spring mounts, anti-vibration
                  structural dampeners, and isolated foundation pads, our mining mechanical integrator team prevents
                  destructive harmonic energy from migrating into the rest of the plant. Link to{' '}
                  <Link
                    href="/vibrating-screen-fabrication/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Vibrating Screen Structural Fabrication
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Can you re-engineer our existing high-wear transfer chutes without changing our conveyors?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. We specialized in custom brownfield retrofits. We model your existing mechanical setup and
                  design an optimized, bolt-in replacement chute that resolves wear and tracking issues while using
                  your current footprint. Link to{' '}
                  <Link
                    href="/crusher-discharge-chute-engineering/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Crusher Discharge Chute Engineering
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  How do your mechanical systems handle sticky or high-clay ores?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We integrate specialized steep-angle geometries and ultra-low friction linings, such as UHMW-PE or
                  specialized polymer panels, ensuring that sticky materials slide smoothly through the system without
                  building up or bridging. Link to{' '}
                  <Link
                    href="/indonesia-mining-conveyor-integration/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Mining Conveyor System Integration Indonesia
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
              Is your crushing circuit suffering from constant liner wear, structural cracks, or chute blockages? Tell
              us your machine configuration and your material characteristics. We will provide a specific mechanical
              design assessment to harden your operation.
            </p>
            <PrimaryCTA text="Request Mechanical Design Assessment" />
          </div>
        </section>

        <InternalLinksSection sourcePath="/mechanical-systems/" />
      </main>

      <Footer />
    </div>
  );
};

export default MechanicalSystems;
