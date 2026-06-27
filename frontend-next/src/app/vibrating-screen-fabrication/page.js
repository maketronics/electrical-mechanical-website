import Header from '../../components/Header';
import ContentPageHero from '../../components/ContentPageHero';
import Footer from '../../components/Footer';
import InternalLinksSection from '../../components/InternalLinksSection';
import PrimaryCTA from '../../components/PrimaryCTA';
import Link from "next/link";


export const metadata = {
  title: 'Vibrating Screen Structural Fabrication | GCC & SE Asia | Maketronics',
  description:
    'Specialized vibrating screen structural fabrication. We engineer resonance-free gantries and high-fatigue support steel for mining and quarrying.',
};

const VibratingScreenFabrication = () => {
  //   title: 'Vibrating Screen Structural Fabrication | GCC & SE Asia | Maketronics',
  //   h1: 'Vibrating Screen Structural Fabrication: Engineering for High-G Forces',
  //   description:
  //     'Specialized vibrating screen structural fabrication. We engineer resonance-free gantries and high-fatigue support steel for mining and quarrying.',
  // });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      <main>
        <ContentPageHero variant="mechanical" badge="Screen fabrication">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              Vibrating Screen Structural Fabrication: Engineering for High-G Forces
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              A vibrating screen is a machine designed to destroy its own support structure. In high-specification
              grading, vibrating screen structural fabrication is often the weakest link in the plant. Most fabricators
              treat a screen gantry as a static platform, but a triple-deck screen operating at 4G to 5G of
              acceleration creates massive, oscillating dynamic loads. If the steelwork is not specifically engineered
              for high-fatigue cycles, the result is a structure that &apos;whips&apos; in resonance, leading to
              sheared mounting bolts, cracked welds in the main beams, and a total loss of grading accuracy due to
              unmanaged deck movement.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              Why standard structural steel fails under screening loads
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              General steel fabrication lacks the dynamic modeling required for high-frequency screening, leading to
              three systemic failures:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Structural Harmonic Matching:</strong> If the natural frequency of the
                gantry matches the operating RPM of the screen, the vibration is amplified rather than absorbed. This
                energy migration shakes the entire plant, leading to phantom trips in electrical panels and bearing
                failure in nearby conveyors.
              </li>
              <li>
                <strong className="text-white">Weld Fatigue in the HAZ:</strong> Under the constant &quot;pounding&quot;
                of a screen deck, the Heat Affected Zones (HAZ) around standard welds become brittle. Without
                specialized joint design and stress-relieving protocols, these points fracture within months.
              </li>
              <li>
                <strong className="text-white">Inadequate Stiffness-to-Mass Ratio:</strong> Simply using
                &quot;thicker&quot; steel often makes the problem worse by adding mass that traps vibration. Effective
                fabrication requires strategic stiffness to ensure the energy stays in the screen deck and out of the
                support columns.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Our approach to vibrating screen structural fabrication
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              At Maketronics, we fabricate structures that act as a &quot;mechanical filter&quot; for vibration. Our
              methodology includes:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Dynamic Modal Analysis:</strong> We use Finite Element Analysis (FEA)
                to &quot;detune&quot; the gantry. We ensure the steel structure&apos;s natural frequency is safely
                outside the 600-1200 RPM operating range of the screen, preventing harmonic destruction.
              </li>
              <li>
                <strong className="text-white">High-Fatigue Joint Engineering:</strong> We move away from simple fillet
                welds in critical areas. We utilize full-penetration welds and specialized gussets designed to
                distribute dynamic stress across a larger surface area, significantly extending the life of the
                steelwork.
              </li>
              <li>
                <strong className="text-white">Integrated Vibration Isolation:</strong> Our fabrication designs
                incorporate specialized mounting interfaces for heavy-duty coil springs or rubber-to-metal
                &quot;marshmallow&quot; mounts, decoupling the screen from the gantry with up to 98% efficiency.
              </li>
              <li>
                <strong className="text-white">Precision Feed &amp; Discharge Chutes:</strong> We fabricate the
                headboxes and discharge chutes as part of the structural unit, ensuring they are lined with 500BHN or
                ceramics to handle the abrasive splash of the material grading process.
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
                <strong className="text-white">High-Abrasive GCC Quarries:</strong> For plants processing Gabbro or
                Basalt, we reinforce the &quot;impact zones&quot; where oversized rock hits the chutes, preventing the
                steel from being &quot;sandblasted&quot; away.
              </li>
              <li>
                <strong className="text-white">Thermal Resiliency:</strong> We specify steel grades and coating systems
                that maintain their structural integrity and elasticity even in the 50°C+ ambient temperatures of the
                Middle East.
              </li>
              <li>
                <strong className="text-white">Corrosive Wash Plants:</strong> For silica sand or iron ore washing, we
                provide hot-dip galvanized or specialized epoxy-coated fabrication to resist the corrosive effects of
                constant water and chemical exposure.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: Solving Screening Structural Issues
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Our walkways are vibrating so much we can&apos;t use them while the plant is running. Can we just
                  stiffen the legs?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Stiffening the legs might actually move the resonance closer to the screen&apos;s frequency. We
                  perform a frequency audit to determine whether the structure needs more stiffness or more damping to
                  neutralize the vibration. Link to{' '}
                  <Link
                    href="/screening-plant-engineering-company/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Screening Plant Engineering Company
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Why are the mounting bolts on our screen constantly snapping?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  This is a classic sign of &quot;Structural Rigidity Failure.&quot; If the fabrication is too stiff
                  and doesn&apos;t allow the isolation mounts to work, the bolts take the full force of the G-load. We
                  re-engineer the mounting interface to allow for proper energy dissipation. Link to{' '}
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
                  Can you build a gantry that allows us to change screen clothes faster?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. We engineer &quot;Maintenance-First&quot; gantries with integrated trolley beams and
                  wide-clearance platforms, reducing a 6-hour screen change to under 2 hours. Link to{' '}
                  <Link
                    href="/crusher-station-fabrication/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Crusher Station Fabrication Company
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
              Is your screening gantry showing signs of structural fatigue or excessive vibration? Tell us your screen
              model and your current deck configuration. We will provide a specific structural fabrication assessment to
              stabilize your grading circuit.
            </p>
            <PrimaryCTA text="Request Structural Fabrication Assessment" />
          </div>
        </section>
        <InternalLinksSection sourcePath="/vibrating-screen-fabrication/" />
      </main>
      <Footer />
    </div>
  );
};

export default VibratingScreenFabrication;
