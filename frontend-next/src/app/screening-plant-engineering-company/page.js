import Header from '../../components/Header';
import ContentPageHero from '../../components/ContentPageHero';
import Footer from '../../components/Footer';
import PrimaryCTA from '../../components/PrimaryCTA';
import InternalLinksSection from '../../components/InternalLinksSection';
import Link from "next/link";


export const metadata = {
  title: 'Screening Plant Engineering Company | Maketronics',
  description:
  'Specialist screening plant engineering company. We solve structural resonance, blinding issues, and material carry-over in high-tonnage circuits.',
   };


const ScreeningPlantEngineeringCompany = () => {
  //   title: 'Screening Plant Engineering Company | Maketronics',
  //   h1: 'A Screening Plant Engineering Company for High-Specification Material Grading',
  //   description:
  //     'Specialist screening plant engineering company. We solve structural resonance, blinding issues, and material carry-over in high-tonnage circuits.',
  // });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />

      <main>
        <ContentPageHero variant="mechanical" badge="Screening plants">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              A Screening Plant Engineering Company for High-Specification Material Grading
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              A screening plant is the &apos;cash register&apos; of the quarry; if the sizing is inaccurate, the
              product is unsellable. Yet, most operators struggle with a fundamental engineering failure: the gantry.
              As a specialized screening plant engineering company, Maketronics understands that a vibrating screen is
              a controlled earthquake. If the supporting structure is not engineered to handle high-G dynamic loads,
              the vibration migrates into the feed conveyors and neighboring structures. This leads to
              &apos;blinding&apos; (clogged meshes), excessive carry-over of fines into premium products, and frequent
              structural cracking that forces the entire plant to a standstill.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              Why standard structural fabricators fail at screening plant design
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              General engineering firms often treat a screening gantry as a static platform, ignoring the physics of
              high-frequency oscillation:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Resonance Migration:</strong> If the gantry&apos;s natural frequency
                matches the screen&apos;s operating frequency, the vibration amplifies. This doesn&apos;t just shake
                the screen; it shakes the sensors, the PLC panels, and the conveyor bearings, leading to systemic
                failures.
              </li>
              <li>
                <strong className="text-white">Inadequate Feed Distribution:</strong> Poorly engineered headboxes
                result in material hitting only the center of the screen deck. This reduces effective screening area by
                40%, accelerates mesh wear in one spot, and leads to &apos;contamination&apos; of the oversize product.
              </li>
              <li>
                <strong className="text-white">Access-to-Maintenance Gap:</strong> In many plants, changing a bottom
                deck screen cloth is a 6-hour ordeal because the engineering didn&apos;t account for
                &apos;clearance zones.&apos; This turns a routine maintenance task into a major production loss.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Our approach to screening plant engineering
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              At Maketronics, we engineer the grading process, not just the steel. Our methodology includes:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Dynamic Mass Analysis:</strong> We use Finite Element Analysis (FEA) to
                &apos;detune&apos; the gantry. We ensure the steel structure is stiff enough to support the load but
                dampens the vibration before it reaches the ground or connected conveyors.
              </li>
              <li>
                <strong className="text-white">Velocity-Controlled Headboxes:</strong> We engineer custom feed boxes
                that slow down the material and spread it across the full width of the screen deck. This ensures every
                square inch of your mesh is working, maximizing TPH and grading accuracy.
              </li>
              <li>
                <strong className="text-white">Multi-Deck Synchronization:</strong> For complex circuits, we engineer
                the vertical integration of triple-deck screens, ensuring that chutes for the &apos;Mids&apos; and
                &apos;Fines&apos; are designed with the correct angles to prevent plugging, even in high-moisture
                conditions.
              </li>
              <li>
                <strong className="text-white">Integrated Dust &amp; Noise Encapsulation:</strong> We design modular
                covers and dust-extraction interfaces that move with the screen, reducing environmental impact without
                restricting maintenance access.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Harsh environments we engineer for
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Abrasive Fines Management:</strong> In Gabbro and Basalt quarries, the
                &apos;fines&apos; act like sandpaper. We integrate specialized ceramic or polyurethane-lined chutes to
                handle the high-velocity discharge of abrasive dust.
              </li>
              <li>
                <strong className="text-white">High-Heat Electrical Integration:</strong> We house screen-start VFDs
                and safety sensors in climate-controlled industrial control panels, preventing the thermal trips that
                common in 50°C desert environments.
              </li>
              <li>
                <strong className="text-white">Wet &amp; Sticky Material Circuits:</strong> We engineer specialized
                spray-bar headers and &apos;anti-clogging&apos; deck configurations for plants processing material with
                high clay or moisture content.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: Solving Screening Efficiency Problems
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  We are seeing too many &apos;fines&apos; in our 20mm product. Is our screen too small?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Not necessarily. It is often an engineering issue with the &quot;Bed Depth.&quot; If the material is
                  moving too fast or is too thick on the deck, the fines never reach the mesh. We re-engineer the feed
                  headbox and deck angle to optimize the &quot;dwell time.&quot; Link to{' '}
                  <Link
                    href="/mechanical-systems/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Mining Plant Mechanical Integration
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  The gantry is shaking so much we can&apos;t stand on the walkways. Is it safe?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  No. Excessive walkway vibration is a sign of structural resonance. As a screening plant engineering
                  company, we can perform a vibration audit and install &quot;Tuned Mass Dampers&quot; or stiffeners to
                  neutralize the shaking. Link to{' '}
                  <Link
                    href="/crusher-station-fabrication/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Crusher Station Fabrication Company
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Can we switch from wire mesh to polyurethane panels on our existing screen?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  This requires a recalculation of the &quot;Throw.&quot; Polyurethane is heavier than wire, which
                  changes the screen&apos;s center of gravity and stroke. We engineer the necessary weight-compensation
                  and mounting-rail conversions to make the switch successful. Link to{' '}
                  <Link
                    href="/industrial-automation-for-crushing-plants/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Industrial Automation for Crushing Plants
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
              Is your screening plant failing to meet grading specs or causing structural damage to your gantry? Tell
              us your TPH targets and the material you are processing. We will provide a specific screening circuit
              assessment, not a brochure.
            </p>
            <PrimaryCTA text="Request Screening Circuit Assessment" />
          </div>
        </section>
        <InternalLinksSection sourcePath="/screening-plant-engineering-company/" />
      </main>

      <Footer />
    </div>
  );
};

export default ScreeningPlantEngineeringCompany;
