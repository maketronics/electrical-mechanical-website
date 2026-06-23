import Header from '../components/Header';
import ContentPageHero from '../components/ContentPageHero';
import Footer from '../components/Footer';
import InternalLinksSection from '../components/InternalLinksSection';
import PrimaryCTA from '../components/PrimaryCTA';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/usePageSeo';

const IndustrialControlPanelsMining = () => {
  usePageSeo({
    title: 'Industrial Control Panels for Mining | Maketronics',
    h1: 'Industrial Control Panels for Mining: Protecting the Intelligence of the Circuit',
    description:
      'Custom industrial control panels for mining. Engineered for high-vibration, high-dust, and extreme thermal environments. Global-spec protection for PLC & SCADA.',
  });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      <main>
        <ContentPageHero variant="electrical" badge="Control panels">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              Industrial Control Panels for Mining: Protecting the Intelligence of the Circuit
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl font-light leading-relaxed">
              A mining plant&apos;s automation is only as resilient as the steel box that protects it. In the global
              mining sector, industrial control panels are often the first point of failure because they are treated as
              standard electrical &apos;off-the-shelf&apos; items. However, the mining environment is a perfect storm of
              electronic killers: fine conductive dust, extreme ambient heat, and constant low-frequency mechanical
              vibration. When a control panel is not specifically engineered for these conditions, the result is
              &apos;ghost faults&apos; in the PLC, overheated processors, and short circuits that can bring a
              multi-million dollar crushing circuit to a dead stop.
            </p>
          </div>
        </ContentPageHero>

        <section className="relative z-20 -mt-20 py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              Why Standard Control Panels Fail on Mine Sites
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Generic industrial panels are built for factories, not the raw extremes of mineral processing. In the
              field, three primary environmental stressors cause standard panels to fail:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">The &quot;Greenhouse&quot; Effect:</strong> Sensitive PLCs, network
                switches, and I/O modules generate their own heat. In a standard uncooled enclosure, internal
                temperatures can quickly exceed 60°C, leading to processor throttling and sudden logic failure.
              </li>
              <li>
                <strong className="text-white">Abrasive Ingress:</strong> Standard seals often degrade under intense UV
                exposure or high-pressure wash-downs. Once silica or metallic dust enters the panel, it settles on
                circuit boards, leading to tracking, arcing, and permanent hardware damage.
              </li>
              <li>
                <strong className="text-white">Vibration-Induced Micro-Fractures:</strong> Constant resonance from
                crushers and screens can cause DIN-rail mounted components to vibrate loose. More critically, it can
                cause micro-fractures in solder joints on PCB boards, leading to intermittent communication errors that
                are nearly impossible to diagnose.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Our Global Approach to Control Panel Engineering
            </h2>
            <p className="text-gray-300 max-w-5xl leading-relaxed mb-6">
              Maketronics fabricates &quot;Field-Hardened&quot; control panels designed to house the brain of your
              operation in any climate. Our engineering standards include:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Advanced Climate Control:</strong> We integrate air-to-air heat
                exchangers or solid-state thermoelectric coolers. These systems keep the internal environment of the
                panel isolated from the outside air while actively removing heat, ensuring your PLC programming runs in
                a stable 25°C environment regardless of external extremes.
              </li>
              <li>
                <strong className="text-white">Double-Seal IP66 Fabrication:</strong> Our panels are fabricated from
                316L Stainless Steel or heavy-duty powder-coated carbon steel with high-performance EPDM gaskets. We
                ensure a true IP66 rating, making the panels impervious to both fine dust and high-pressure water jets.
              </li>
              <li>
                <strong className="text-white">Vibration Decoupling &amp; Ruggedized Mounting:</strong> We utilize
                shock-absorbing mounting feet and &quot;Lock-Down&quot; terminal technology. For high-vibration zones,
                the internal sub-panels are mounted on dampers to ensure that mechanical energy never reaches the
                sensitive electronics.
              </li>
              <li>
                <strong className="text-white">Electromagnetic Shielding (EMI/RFI):</strong> Mining sites are full of
                &quot;electrical noise&quot; from high-power VFDs and motors. We engineer our panels with specialized
                shielding and grounding busbars to protect low-voltage signals from interference.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              Engineering for Global Site Realities
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">Global Voltage Compatibility:</strong> We engineer our internal power
                supplies and transformers to handle various international grid standards (380V, 415V, 480V) and manage
                the voltage fluctuations common in remote mine sites.
              </li>
              <li>
                <strong className="text-white">Human-Machine Interface (HMI) Protection:</strong> We utilize high-NIT,
                sunlight-readable touchscreens protected by armored glass and UV-resistant covers, ensuring operators
                can see and control the plant even in direct, high-glare sunlight.
              </li>
              <li>
                <strong className="text-white">Modular &quot;Plug-and-Play&quot; Architecture:</strong> We utilize
                heavy-duty multi-pin connectors for external field sensors. This allows for rapid site installation and
                ensures that if a panel needs to be relocated, it can be disconnected and reconnected without the risk
                of wiring errors.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">
              FAQ: Solving Control Panel Failures
            </h2>
            <div className="space-y-6">
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Our PLC keeps restarting for no reason. Is it a software bug?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  It is often a &quot;Power Quality&quot; or &quot;Heat&quot; issue. If the internal temperature spikes
                  or the power supply is &quot;noisy,&quot; the PLC will reboot to protect itself. We audit your
                  industrial control panel to ensure it has the correct thermal management and power filtering. Link
                  to{' '}
                  <Link
                    to="/plc-programming-for-quarry-plants/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    PLC Programming for Quarry Plants
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">
                  Can we mount the control panel directly onto the crusher skid?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We advise against direct mounting without &quot;Vibration Isolation.&quot; We can engineer a
                  &quot;Pedestal Mount&quot; with heavy-duty dampeners that allows the panel to stay close to the
                  machine while protecting the electronics from the G-forces of the crusher. Link to{' '}
                  <Link
                    to="/cone-crusher-structural-mounting/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Cone Crusher Structural Mounting
                  </Link>{' '}
                  page.
                </p>
              </article>
              <article className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How do we monitor the panel health remotely?</h3>
                <p className="text-gray-300 leading-relaxed">
                  We integrate smart sensors that monitor internal temperature, humidity, and even door-open status.
                  This data is fed back to your central SCADA system, alerting you to a cooling fan failure before the
                  PLC reaches a critical temperature. Link to{' '}
                  <Link
                    to="/industrial-automation-for-crushing-plants/"
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
              Are your sensitive electronics unprotected from your site&apos;s harsh environment? Tell us your current
              panel failures and your environmental conditions. We will provide a specific industrial control panel
              assessment to shield your plant&apos;s intelligence.
            </p>
            <PrimaryCTA text="Request Industrial Control Panel Assessment" />
          </div>
        </section>
        <InternalLinksSection sourcePath="/industrial-control-panels-mining/" />
      </main>
      <Footer />
    </div>
  );
};

export default IndustrialControlPanelsMining;
