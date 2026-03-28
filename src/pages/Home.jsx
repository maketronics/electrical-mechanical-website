import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import SecondaryCTA from '../components/SecondaryCTA';
import Seo from '../components/Seo';
import { breadcrumbSchema, faqPageSchema, organizationSchema } from '../utils/schema';

const HOME_FAQ = [
  {
    q: 'What does industrial systems integration include at Maketronics?',
    a: 'We engineer and integrate mechanical structures—stations, chutes, conveyors, and wear systems—together with electrical packages such as MCCs, VFDs, PLC logic, and field devices, so your plant starts up as one coordinated system rather than disconnected vendor scopes.',
  },
  {
    q: 'Do you manufacture crushers or screens?',
    a: 'Maketronics is an independent integrator. We coordinate proven OEM equipment, fabricate structural and chute work, and own interface engineering, assembly support, and commissioning accountability.',
  },
  {
    q: 'Which regions and service pages should I review first?',
    a: 'Explore our Middle East, South Africa, and Southeast Asia hubs for regional integration, the services directory for detailed mechanical and electrical offerings, and mechanical or electrical overview pages for capability depth.',
  },
];

const Home = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Seo
        title="Industrial Systems Integration | Engineering Solutions | Maketronics"
        description="Optimize your industrial operations with Maketronics' unified engineering. We integrate mechanical and electrical systems for harsh environments. Request a consultation today to improve site efficiency."
        canonicalPath="/"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
          faqPageSchema(HOME_FAQ),
        ]}
      />
      <Header />
      
      <main>
        {/* Hero Section - Optimized for Button Visibility */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.4) 100%), url('/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12"> {/* Reduced pt-20 to pt-12 */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                Engineering Excellence
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
                Industrial Systems Integration
                <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  for crushing & screening plants
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl font-light leading-relaxed">
                Engineering, supplying, and supporting integrated mechanical and electrical systems
                for demanding material handling environments.
              </p>

              <p className="text-xs text-gray-400 font-mono mb-8 border-l-2 border-yellow-400 pl-4 uppercase tracking-wider">
                Independent system solutions and integration partner.
              </p>

              <div className="flex flex-wrap gap-5">
                <PrimaryCTA />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Section - Added "What We Do" Heading */}
        <section className="relative py-24 -mt-20 z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-2">Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">What We <span className="text-gray-500 text-outline-white">Do</span></h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  title: "System Design & Engineering", 
                  desc: "Complete system architecture and engineering solutions tailored to site requirements.", 
                  icon: "M9 12h6m-6 4h6m2 5H7a2-2V5a2-2h5.586a1-1.293l5.414 5.414a1-1.707V19a2-2 2z" 
                },
                { 
                  title: "Mechanical System Integration", 
                  desc: "Seamless integration of high-performance mechanical components and heavy-duty systems.", 
                  icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                },
                { 
                  title: "Electrical & Automation Solutions", 
                  desc: "Advanced control systems, PLC logic, and comprehensive electrical integration.", 
                  icon: "M13 10V3L4 14h7v7l9-11h-7z" 
                },
                { 
                  title: "Site Support & Commissioning", 
                  desc: "On-site expert support, lifecycle operations, and technical commissioning.", 
                  icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" 
                }
              ].map((pillar, i) => (
                <div key={i} className="group bg-[#0f0f0f] p-8 rounded-2xl border border-white/5 hover:border-yellow-400/50 transition-all duration-500 shadow-2xl">
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-400/20 transition-all">
                    <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Mechanical Systems - Tightened Padding (py-24 instead of py-48) */}
<section 
  className="relative py-24 flex items-center border-b border-white/5"
  style={{
    backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.4) 100%), url('/Mechanical.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">Mechanical <span className="text-yellow-400">Systems</span></h2>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
        Integrated solutions designed for the toughest industrial environments. From wear protection to complete system assembly.
      </p>
      
      {/* Condensed Inline List */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm font-bold uppercase tracking-widest text-gray-400">
        <span className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-yellow-400"></div> System Design</span>
        <span className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-yellow-400"></div> Wear Protection</span>
        <span className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-yellow-400"></div> Commissioning</span>
      </div>

      <Link to="/mechanical-systems" className="group inline-flex items-center gap-3 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-yellow-300 transition-all">
        Explore Systems <span className="group-hover:translate-x-2 transition-transform">→</span>
      </Link>
    </div>
  </div>
</section>

{/* Electrical & Automation - Tightened Padding */}
<section 
  className="relative py-24 flex items-center"
  style={{
    backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.4) 100%), url('/elec.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-end">
    <div className="max-w-2xl text-right">
      <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">Electrical & <span className="text-yellow-400">Automation</span></h2>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
        Advanced control systems that keep your operations running smoothly. From control panels to PLC programming.
      </p>

      {/* Condensed Inline List (Right Aligned) */}
      <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 mb-8 text-sm font-bold uppercase tracking-widest text-gray-400">
        <span className="flex items-center gap-2">Control Panels <div className="h-1.5 w-1.5 bg-yellow-400"></div></span>
        <span className="flex items-center gap-2">PLC Logic <div className="h-1.5 w-1.5 bg-yellow-400"></div></span>
        <span className="flex items-center gap-2">Integration <div className="h-1.5 w-1.5 bg-yellow-400"></div></span>
      </div>

        <div className="flex justify-end">
        <Link to="/electrical-automation" className="group inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-all min-h-[44px]">
          View Solutions <span className="group-hover:translate-x-2 transition-transform">→</span>
        </Link>
      </div>
    </div>
  </div>
</section>
{/* Industries Served Section */}
<section className="py-32 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-4">
                  Expertise
                </h2>
                <h3 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase">
                  Industries <span className="text-gray-500">Served</span>
                </h3>
              </div>
              <Link 
                to="/industries" 
                className="group flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-500 min-h-[44px]"
              >
                <span className="text-sm font-bold uppercase tracking-widest">View All Industries</span>
                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Mining & Minerals", 
                  image: "/mining.png",
                  desc: "Heavy-duty integrated systems designed for high-tonnage extraction." 
                },
                { 
                  title: "Quarries & Aggregates", 
                  image: "/Quarries.png",
                  desc: "Precision engineering for sand, gravel, and stone production." 
                },
                { 
                  title: "Crushing Plants", 
                  image: "/crushing.png",
                  desc: "Turnkey integration for mobile and stationary crushing operations." 
                },
                { 
                  title: "Bulk Materials", 
                  image: "/Bulk.png",
                  desc: "Advanced handling solutions for ports and terminals." 
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="group relative h-[450px] rounded-[2rem] overflow-hidden border border-white/5 hover:border-yellow-400/50 transition-all duration-500 shadow-2xl"
                >
                  {/* Background Image with Scale effect */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  
                  {/* Dark Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl font-black text-yellow-400/20">0{i + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-yellow-400 transition-colors uppercase italic">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-gray-300 leading-relaxed space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Industrial integration from feed point to load-out
              </h2>
              <p className="mb-4">
                Industrial systems integration is the discipline of making crushers, screens, feeders, conveyors, and
                electrical controls behave as one production system. Maketronics engineers the structural interfaces,
                chutes, wear packages, and automation narratives together so that commissioning addresses process
                performance—not a backlog of mismatched drawings.
              </p>
              <p className="mb-4">
                Whether you are expanding a limestone quarry, hard-rock mine, or port handling line, we align OEM
                equipment selections with fabrication sequencing, modular shipping splits, and site crane plans. That
                coordination is how plants protect throughput when feed characteristics change or when maintenance
                windows are tight.
              </p>
              <h3 className="text-lg font-bold text-yellow-400/90 mb-2 mt-8">Mechanical scope we routinely integrate</h3>
              <p>
                Primary and surge hoppers, jaw and cone stations, vibrating screen structures, transfer chutes, and
                conveyor gantries are detailed with service access, guarding, and liner maps suited to your abrasion
                profile. Explore our{' '}
                <Link to="/mechanical-systems" className="text-yellow-400 hover:underline">
                  mechanical systems
                </Link>{' '}
                overview or jump into services such as{' '}
                <Link to="/services/crusher-station-fabrication" className="text-yellow-400 hover:underline">
                  crusher station fabrication
                </Link>{' '}
                and{' '}
                <Link to="/services/screening-plant-engineering" className="text-yellow-400 hover:underline">
                  screening plant engineering
                </Link>
                .
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Electrical, automation, and commissioning as one delivery
              </h2>
              <p className="mb-4">
                High-dust and high-vibration sites punish control panels and field wiring. We design MCC and motor control
                assemblies, VFD systems, and PLC programs with maintainable layouts, clear interlocks, and alarm
                philosophies operators can interpret during night shifts.
              </p>
              <h3 className="text-lg font-bold text-yellow-400/90 mb-2 mt-6">Where to go next on this site</h3>
              <p>
                Review{' '}
                <Link to="/electrical-automation" className="text-yellow-400 hover:underline">
                  electrical &amp; automation
                </Link>
                ,{' '}
                <Link to="/services/crushing-plant-electrical-integration" className="text-yellow-400 hover:underline">
                  crushing plant electrical integration
                </Link>
                , and{' '}
                <Link to="/execution-support" className="text-yellow-400 hover:underline">
                  execution &amp; support
                </Link>{' '}
                for how we stay responsible from installation through performance trials.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Regional hubs and global integration</h2>
              <p className="mb-4">
                We publish dedicated routes for{' '}
                <Link to="/middle-east" className="text-yellow-400 hover:underline">
                  Middle East
                </Link>
                ,{' '}
                <Link to="/south-africa" className="text-yellow-400 hover:underline">
                  South Africa
                </Link>
                , and{' '}
                <Link to="/southeast-asia" className="text-yellow-400 hover:underline">
                  Southeast Asia
                </Link>{' '}
                so procurement and engineering teams can find region-aware integration narratives, internal links, and
                structured data aligned to their logistics reality. The full{' '}
                <Link to="/services" className="text-yellow-400 hover:underline">
                  services directory
                </Link>{' '}
                lists mechanical and electrical detail pages for RFQ-driven research.
              </p>
              <p>
                If you are benchmarking partners for a new line or debottleneck, start with{' '}
                <Link to="/industries" className="text-yellow-400 hover:underline">
                  industries served
                </Link>{' '}
                and{' '}
                <Link to="/why-maketronics" className="text-yellow-400 hover:underline">
                  why Maketronics
                </Link>
                , then{' '}
                <Link to="/contact" className="text-yellow-400 hover:underline">
                  contact us
                </Link>{' '}
                with throughput targets, material assays, and single-line diagrams.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#050505]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-black text-white mb-8">Frequently asked questions</h2>
            <ul className="space-y-6">
              {HOME_FAQ.map((item, i) => (
                <li key={i} className="border border-white/10 rounded-2xl p-6 bg-[#0a0a0a]">
                  <p className="font-bold text-white mb-2">{item.q}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-yellow-400/5 blur-[120px] rounded-full"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                  Why <br />
                  <span className="text-yellow-400 underline decoration-4 underline-offset-8">Choose Us</span>
                </h2>
                <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
                  We merge mechanical robustness with electrical intelligence to eliminate vendor friction.
                </p>
                <div className="flex">
                  <Link to="/why-maketronics" className="group flex items-center gap-6 min-h-[44px]">
                    <div className="w-16 h-16 rounded-full border border-yellow-400/30 flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-500">
                      <span className="text-yellow-400 group-hover:text-black transition-colors text-2xl">→</span>
                    </div>
                    <span className="text-lg font-bold uppercase tracking-[0.2em]">Our Process</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Unified Engineering", desc: "Mechanical and electrical designed as one unit." },
                  { title: "Harsh Focus", desc: "Battle-tested in dust and vibration." },
                  { title: "Independent", desc: "Best-in-class components for your specific goals." },
                  { title: "Support", desc: "Customized." }
                ].map((point, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/[0.08] transition-all">
                    <h4 className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-4"></h4>
                    <h5 className="text-xl font-bold mb-3 tracking-tight">{point.title}</h5>
                    <p className="text-gray-400 text-sm">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-yellow-400 rounded-[3rem] p-16 text-center text-black shadow-2xl">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase">
                Ready to Optimize?
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <PrimaryCTA className="!bg-black !text-white !px-12 !py-4" />
                <SecondaryCTA className="!border-black/30 !text-black !px-12 !py-4" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;