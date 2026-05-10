import Header from '../components/Header';
import ContentPageHero from '../components/ContentPageHero';
import Footer from '../components/Footer';
import InternalLinksSection from '../components/InternalLinksSection';
import PrimaryCTA from '../components/PrimaryCTA';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/usePageSeo';

const WearProtectionSystems = () => {
  usePageSeo({
    title: 'Wear Protection for Crushers | ME & Africa | Maketronics',
    h1: 'Wear Protection Systems for Crushers: Engineering Against Global Extremes',
    description:
      'Engineered wear protection systems for crushers. Extend the life of jaw, cone, and VSI stations with global-spec 500BHN, ceramics, and tungsten carbide.',
  });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      <main>
        <ContentPageHero variant="mechanical" badge="Wear protection">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              Wear Protection Systems for Crushers: Engineering Against Global Extremes
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              In high-tonnage mining, wear is not just a maintenance cost-it is a production thief. Whether you are
              processing Omani Basalt, Australian Iron Ore, or Brazilian Granite, unmanaged abrasion destroys
              structural integrity. Without engineered wear protection systems for crushers, high-velocity ore can
              grind through standard structural steel in weeks. Most operations rely on &apos;patch-welding&apos;-a
              reactive approach that leads to turbulent material flow and catastrophic mainframe fatigue. If your
              protection strategy isn&apos;t engineered for the specific &apos;Work Index&apos; of your rock, you are
              losing 10-15% of your potential uptime to avoidable steel failure.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              Why standard liners fail in high-stress mining circuits
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Generic wear plates often fail because they are designed for &apos;average&apos; conditions, ignoring the
              physics of extreme impact:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">The &quot;Peeling&quot; Effect:</strong> In high-velocity discharge
                zones, standard AR400 steel is too soft. Silica-rich ore &quot;peels&quot; the surface of the metal,
                leading to rapid thinning and eventual &quot;holing&quot; of the chute.
              </li>
              <li>
                <strong className="text-white">Inadequate Impact Absorption:</strong> Wear protection isn&apos;t just
                about hardness; it&apos;s about energy dissipation. Brittle liners often crack when hit by oversized
                ROM (Run of Mine) feed because they lack a dampened, shock-absorbing backing.
              </li>
              <li>
                <strong className="text-white">Thermal Bond Failure:</strong> In extreme climates-from desert heat to
                high-friction industrial zones-standard adhesive-bonded ceramics often fail. This causes liners to
                detach and enter the crusher cavity, leading to catastrophic &quot;tramp iron&quot; damage.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Our Global Approach to Wear Protection
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Maketronics engineers a &quot;multi-layered&quot; defense strategy, applying desert-hardened standards
              to every global project. Our systems include:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">&quot;Rock-Box&quot; &amp; Dead-Bed Technology:</strong> We design
                chutes that use the rock to protect the steel. By creating &quot;shelves&quot; where material
                accumulates, the incoming ore hits a bed of stone rather than the liner, virtually eliminating wear in
                high-impact zones.
              </li>
              <li>
                <strong className="text-white">Advanced Alloy Overlays (500BHN - 600BHN):</strong> We utilize
                ultra-hard Chromium Carbide overlays for sliding abrasion zones. These plates are CNC-cut to your
                specific crusher station geometry, ensuring zero &quot;grey areas&quot; where dust can bypass the
                protection.
              </li>
              <li>
                <strong className="text-white">Mechanical-Bonded Ceramic Modules:</strong> For high-velocity fines, we
                integrate alumina ceramic tiles mechanically fastened or vulcanized into rubber. This provides the
                diamond-like hardness of ceramic with the impact resilience of high-grade rubber.
              </li>
              <li>
                <strong className="text-white">Tungsten Carbide Hard-Facing:</strong> For critical components like VSI
                rotor tips or feed distributors, we apply precision tungsten carbide coatings to extend component life
                by up to 300% compared to standard manganese.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Engineering for the Earth&apos;s Most Abrasive Ores
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">High-Silica Hard Rock:</strong> We engineer specific protection for
                geologies like Gabbro, Basalt, and Quartzite, where the high Work Index (Wi) necessitates a hybrid
                &quot;Impact-plus-Abrasion&quot; approach.
              </li>
              <li>
                <strong className="text-white">Corrosive &amp; Wet Processing:</strong> For mineral sands or wet iron
                ore circuits, we provide corrosion-resistant wear systems that prevent the &quot;pitting&quot; that
                often precedes structural failure in high-moisture environments.
              </li>
              <li>
                <strong className="text-white">Thermal Resiliency:</strong> Applying our experience from 50°C+
                environments, our liners include &quot;Expansion Gaps&quot; to ensure that as the plant steel expands
                during peak operation, the wear plates don&apos;t buckle or shear their mounting bolts.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: Solving Extreme Wear Challenges
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  We are replacing our discharge liners every few weeks. Can this be improved?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. If you are using standard steel, you are likely suffering from high-velocity sliding abrasion.
                  By switching to a Choke-Flow chute design or integrating ceramic-rubber composites, we typically
                  extend wear life from weeks to 6+ months. Link to{' '}
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
                  Does adding heavy liners affect the vibration of my screen or crusher?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Adding mass changes the &quot;Natural Frequency&quot; of the machine. As part of our Mining
                  Plant Mechanical Integration, we recalculate the balance of your structure to ensure the added
                  protection doesn&apos;t trigger a resonance match. Link to{' '}
                  <Link
                    to="/vibrating-screen-fabrication/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Vibrating Screen Structural Fabrication
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  How do we protect areas that are difficult for welders to access?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We utilize &quot;Bolt-in&quot; modular kits. We engineer the protection system to be installed from
                  the outside or through specific access hatches, ensuring even the most difficult &quot;dead zones&quot;
                  in your primary jaw station are fully armored. Link to{' '}
                  <Link
                    to="/jaw-station-integration/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Primary Jaw Station Integration
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
              Is abrasive wear forcing your plant into constant maintenance shutdowns? Tell us your rock type and show
              us your highest wear points. We will provide a specific global wear-protection audit and an engineered
              liner map to keep your plant running longer.
            </p>
            <PrimaryCTA text="Request Global Wear-Protection Audit" />
          </div>
        </section>
        <InternalLinksSection sourcePath="/wear-protection-systems/" />
      </main>
      <Footer />
    </div>
  );
};

export default WearProtectionSystems;
