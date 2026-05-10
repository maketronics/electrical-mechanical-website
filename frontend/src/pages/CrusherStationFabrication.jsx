import Header from '../components/Header';
import ContentPageHero from '../components/ContentPageHero';
import Footer from '../components/Footer';
import InternalLinksSection from '../components/InternalLinksSection';
import PrimaryCTA from '../components/PrimaryCTA';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/usePageSeo';

const CrusherStationFabrication = () => {
  usePageSeo({
    title: 'Crusher Station Fabrication | Middle East & Africa | Maketronics',
    h1: 'A Specialized Crusher Station Fabrication Company for High-TPH Circuits',
    description:
      'Specialized crusher station fabrication company. We engineer high-stiffness, resonance-detuned steel structures for jaw, cone, and VSI crushers. Maketronics.',
  });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      <main>
        <ContentPageHero variant="mechanical" badge="Crusher stations">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              A Specialized Crusher Station Fabrication Company for High-TPH Circuits
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              Most structural steel contractors view a crusher support frame as just another &apos;platform.&apos;
              However, as a dedicated crusher station fabrication company, Maketronics understands that these
              structures are active mechanical components, not static buildings. In high-output quarrying, the steelwork
              must survive billions of stress cycles while supporting machines that generate massive dynamic forces.
              When fabrication is handled by non-specialists, the result is a frame that amplifies vibration, leading
              to cracked welds, catastrophic bolt failure, and the eventual warping of the crusher&apos;s mainframe.
              If your steelwork is vibrating in rhythm with your crusher, your plant is on a countdown to structural
              failure.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              The risks of generic structural steel in crushing circuits
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Using a general fabricator for high-vibration mining assets leads to three critical operational risks:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">The Resonance Match:</strong> If the natural frequency of the steel
                frame matches the operating RPM of the crusher, the structure enters a state of harmonic resonance.
                This vibration migration destroys electrical components and compromises the safety of surrounding
                walkways.
              </li>
              <li>
                <strong className="text-white">Inadequate Stiffness-to-Weight Ratio:</strong> Simply making steel
                &apos;heavier&apos; doesn&apos;t make it better. Proper crusher station fabrication requires the
                strategic placement of stiffeners and cross-bracing to resist the torsional torque of the motor during
                start-up and &apos;tramp iron&apos; events.
              </li>
              <li>
                <strong className="text-white">Weld Fatigue at Stress Concentrations:</strong> Under continuous 24/7
                load, standard fillet welds often fail at the joints. Specialized fabrication requires deep-penetration
                welds and specific heat-treatment protocols to ensure the steel can flex without fracturing.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Our approach to crusher station fabrication
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Maketronics bridges the gap between mechanical engineering and heavy-duty steelwork. Our fabrication
              standards include:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Finite Element Analysis (FEA):</strong> Before a single beam is cut, we
                model the structure&apos;s response to dynamic loads. We &quot;detune&quot; the frame by adjusting the
                mass and stiffness until the resonance frequency is safely outside the crusher&apos;s operating range.
              </li>
              <li>
                <strong className="text-white">Precision Machining of Mounting Plates:</strong> To prevent
                &quot;soft-foot&quot; (where a machine sits unevenly on its base), we machine the top mounting plates
                after welding. This ensures a 100% flat surface, preventing the crusher frame from twisting when the
                anchor bolts are torqued.
              </li>
              <li>
                <strong className="text-white">High-Strength Friction Grip (HSFG) Bolting:</strong> We move away from
                standard bolting in favor of HSFG protocols. This ensures that the joint is held by friction between
                the plates, preventing the &quot;vibration-loosening&quot; that plagues standard quarry structures.
              </li>
              <li>
                <strong className="text-white">Vibration Decoupling Systems:</strong> We integrate specialized
                rubber-to-metal mounts or heavy-duty springs into the fabrication design to ensure that the primary
                force stays in the machine and out of your plant&apos;s main skeleton.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              GCC site conditions we engineer for
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Thermal Expansion Management:</strong> We engineer mounting interfaces
                that accommodate the metal&apos;s expansion in 50°C+ heat without stressing the foundation bolts.
              </li>
              <li>
                <strong className="text-white">Corrosion &amp; Erosion Shielding:</strong> All steelwork is treated
                with high-build epoxy coatings and can be integrated with specialized &quot;Rock Boxes&quot; to protect
                the support steel from the abrasive splash of hard-rock crushing.
              </li>
              <li>
                <strong className="text-white">Modular Skid Designs:</strong> We specialize in skid-mounted stations
                for the KSA and UAE markets, allowing for rapid site assembly and easy relocation as the quarry face
                moves.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: Solving Structural Steel Failures
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Can we just add more bracing to a vibrating station?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Not always. Adding bracing can sometimes shift the natural frequency closer to the crusher&apos;s
                  RPM, making the vibration worse. As a crusher station fabrication company, we use frequency analysis
                  to determine exactly where to add-or remove-stiffness to solve the problem permanently. Link to{' '}
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
                  What grade of steel is used for high-impact primary stations?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We typically utilize high-tensile S355JR or equivalent grades, with extra-thick plate sections at
                  the impact and mounting zones to provide the necessary mass-dampening and fatigue resistance. Link to{' '}
                  <Link to="/jaw-station-integration/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Primary Jaw Station Integration
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  How do you ensure the station survives the transport to a remote mine?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We engineer for &apos;transport loads&apos; as well as &apos;operational loads.&apos; Our modular
                  skids are reinforced at the lift points and designed to maintain their alignment even when traveling
                  over unpaved site roads. Link to{' '}
                  <Link to="/mechanical-systems/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Mining Plant Mechanical Integration
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
              Is your current crusher support frame showing signs of weld failure or excessive vibration? Tell us your
              machine model and your site&apos;s rock type. We will provide a specific structural fabrication
              assessment, not a brochure.
            </p>
            <PrimaryCTA text="Request Structural Fabrication Assessment" />
          </div>
        </section>
        <InternalLinksSection sourcePath="/crusher-station-fabrication/" />
      </main>
      <Footer />
    </div>
  );
};

export default CrusherStationFabrication;
