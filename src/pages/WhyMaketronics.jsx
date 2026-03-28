import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import Seo from '../components/Seo';
import { breadcrumbSchema, faqPageSchema, organizationSchema } from '../utils/schema';

const WHY_DESC =
  'Discover why Maketronics is the preferred partner for harsh environment engineering. Our independent model ensures you get the best equipment for your specific site. Contact us to learn about our process.';

const WHY_FAQ = [
  {
    q: 'Why independent integration instead of a single OEM?',
    a: 'Independence lets us align structures, chutes, and controls to your process targets without forcing a single brand across every duty point.',
  },
  {
    q: 'How do unified mechanical and electrical teams help?',
    a: 'One integrator removes gaps between steel and logic: interlocks, maintenance access, and cable routes are co-developed rather than negotiated late in construction.',
  },
  {
    q: 'What should I read next?',
    a: 'Review execution support, mechanical systems, and regional hubs to see how we deliver outside the brochure environment.',
  },
];

const WhyMaketronics = () => {
  const jsonLd = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Why Maketronics', path: '/why-maketronics' },
    ]),
    faqPageSchema(WHY_FAQ),
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black font-sans">
      <Seo
        title="Unified Engineering Model | Independent Systems Integrator | Maketronics"
        description={WHY_DESC}
        canonicalPath="/why-maketronics"
        jsonLd={jsonLd}
      />
      <Header />
      
      <main>
        {/* 1. Hero Section - Bold & Authoritative */}
        <section
          className="relative min-h-[85vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.5) 100%), url('/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
          
          {/* Reduced pt-20 to pt-12 to lift the entire text block */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                The Advantage
              </div>
              
              {/* Reduced from lg:text-9xl to lg:text-7xl to prevent vertical overflow */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
                Unified Engineering Model
                <span className="block text-3xl md:text-4xl mt-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 italic">
                  Independent systems integrator
                </span>
              </h1>

              {/* Adjusted padding and font size for better vertical fit */}
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed border-l-2 border-yellow-400/50 pl-6 italic">
                We bridge the gap between machine supply and site performance through unified mechanical and electrical engineering.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Value Tiles - Redesigned as a Technical Feature Grid */}
        <section className="py-32 bg-[#080808] border-y border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-4">Value propositions</h2>
            <p className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic mb-14 max-w-3xl">
              How the <span className="text-gray-500">unified model</span> shows up on site
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { 
                  title: "Industry-Specific Engineering", 
                  desc: "Our solutions are never 'off-the-shelf'. Every system is designed for your specific material characteristics and throughput targets." 
                },
                { 
                  title: "Unified Mechanical & Electrical", 
                  desc: "We eliminate the conflict between vendors by owning both the steel and the logic. One partner, one integrated system." 
                },
                { 
                  title: "Designed for Site Realities", 
                  desc: "Engineering that accounts for extreme dust, high vibration, and temperature flux—the real-world conditions your plant survives in." 
                },
                { 
                  title: "The Reliability Parameters", 
                  desc: "Safety, uptime, and maintainability aren't added later—they are the core parameters we use to calculate every structural beam and control loop." 
                },
                { 
                  title: "Execution-Focused Delivery", 
                  desc: "We follow the blueprint from factory floor to site commissioning, ensuring the engineered performance is actually realized on your site." 
                },
                { 
                  title: "Lifecycle Responsibility", 
                  desc: "We don't just supply and disappear. We take long-term responsibility for system optimization and ongoing operational support." 
                }
              ].map((item, i) => (
                <div key={i} className="group relative bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/5 hover:border-yellow-400/30 transition-all duration-500 shadow-2xl">
                  {/* Architectural Numbering */}
                  <div className="absolute top-8 right-8 font-mono text-[10px] text-white/20 group-hover:text-yellow-400 transition-colors">
                    [ MOD_0{i + 1} ]
                  </div>
                  
                  <h3 className="text-xl font-black mb-6 tracking-tighter group-hover:text-yellow-400 transition-colors uppercase italic leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed font-light">
                    {item.desc}
                  </p>
                  
                  {/* Decorative Scan Line */}
                  <div className="mt-8 h-[1px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#050505] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-gray-300 space-y-6 leading-relaxed">
            <h2 className="text-2xl font-black text-white">Operational proof points</h2>
            <p>
              Harsh-environment engineering is measured in avoided downtime and predictable maintenance windows. Our
              unified model reduces interface risk between mechanical contractors and electrical subcontractors because
              Maketronics carries both disciplines under one integration mandate.
            </p>
            <p>
              Continue with{' '}
              <Link to="/execution-support" className="text-yellow-400 hover:underline">
                execution &amp; support
              </Link>
              ,{' '}
              <Link to="/services" className="text-yellow-400 hover:underline">
                services
              </Link>
              , and{' '}
              <Link to="/middle-east" className="text-yellow-400 hover:underline">
                Middle East
              </Link>{' '}
              or{' '}
              <Link to="/southeast-asia" className="text-yellow-400 hover:underline">
                Southeast Asia
              </Link>{' '}
              hubs for geography-specific integration stories.
            </p>
            <h2 className="text-2xl font-black text-white pt-4">Frequently asked questions</h2>
            <ul className="space-y-4">
              {WHY_FAQ.map((f, i) => (
                <li key={i} className="border border-white/10 rounded-xl p-5 bg-[#0a0a0a]">
                  <p className="font-bold text-white mb-1">{f.q}</p>
                  <p className="text-sm text-gray-400">{f.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Closing Philosophy Section */}
        <section className="py-40 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-block relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-yellow-400"></div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none mb-12">
                Trusted System Partner, <br /> 
                <span className="text-gray-500 italic">Not Just a Supplier.</span>
              </h2>
            </div>
            
            <div className="flex justify-center">
              <PrimaryCTA className="!bg-yellow-400 !text-black !px-16 !py-6 text-xl" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyMaketronics;