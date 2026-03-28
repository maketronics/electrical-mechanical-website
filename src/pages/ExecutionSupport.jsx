import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import SecondaryCTA from '../components/SecondaryCTA';
import Seo from '../components/Seo';
import { breadcrumbSchema, faqPageSchema, organizationSchema, serviceSchema } from '../utils/schema';
import { SITE_URL } from '../config/site';

const EX_DESC =
  'We manage your project from site assessment to commissioning. Maketronics provides structural analysis, equipment sourcing, and installation support. Partner with us for seamless project execution today.';

const EX_FAQ = [
  {
    q: 'What does Maketronics own during execution?',
    a: 'We own integration performance: interface engineering, assembly sequencing, installation support, and commissioning coordination—not branded equipment sales.',
  },
  {
    q: 'Can you support remote FAT and staged shipment?',
    a: 'Yes. We align factory acceptance tests, preservation requirements, and modular splits to site crane capability and laydown constraints.',
  },
  {
    q: 'Which pages detail regional commissioning?',
    a: 'Review Middle East commissioning services and execution support on this site for lifecycle narratives tied to your geography.',
  },
];

const ExecutionSupport = () => {
  const jsonLd = [
    organizationSchema(),
    serviceSchema({
      name: 'Industrial project execution and site support',
      description: EX_DESC,
      url: `${SITE_URL}/execution-support`,
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Execution & support', path: '/execution-support' },
    ]),
    faqPageSchema(EX_FAQ),
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black font-sans antialiased">
      <Seo
        title="Industrial Project Execution | Technical Site Support | Maketronics"
        description={EX_DESC}
        canonicalPath="/execution-support"
        jsonLd={jsonLd}
      />
      <Header />
      
      <main>
        {/* 1. Hero Section - Matching Mechanical Pattern */}
        <section
          className="relative min-h-[85vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.4) 100%), url('/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                Lifecycle Responsibility
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
                Industrial Project Execution
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 italic">
                  Technical site support &amp; commissioning
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed italic border-l-2 border-yellow-400/50 pl-6">
                From concept to commissioning and beyond — we remain responsible throughout the system lifecycle.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Execution Model - Vertical Arrow Flow */}
        <section className="py-24 bg-[#080808] border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-2">The Process</h2>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Execution <span className="text-gray-500">Model</span></h2>
              </div>
              <div className="hidden lg:block text-right">
                <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest leading-tight">
                  Systematic Project <br /> Delivery Framework
                </p>
              </div>
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative pl-12 md:pl-0">
              {/* Central Spine Arrow */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-yellow-400 via-white/10 to-transparent md:-translate-x-1/2">
                <div className="absolute bottom-0 -left-[5px] w-3 h-3 border-b border-r border-yellow-400 rotate-45"></div>
              </div>

              <div className="space-y-24 md:space-y-32">
                {[
                  { step: "01", title: "Requirement Understanding", desc: "Site assessment, capacity analysis, and operational constraints evaluation to ensure engineering alignment with site reality." },
                  { step: "02", title: "System Design", desc: "Complete engineering featuring structural analysis and equipment coordination for total system performance." },
                  { step: "03", title: "Supply & Integration", desc: "Component sourcing from proven manufacturers, quality-controlled assembly, and seamless interface integration." },
                  { step: "04", title: "Installation Support", desc: "On-site guidance and technical coordination during the physical installation of mechanical and electrical systems." },
                  { step: "05", title: "Commissioning", desc: "Rigorous system startup, load testing, and performance verification to meet engineered duty-cycle requirements." },
                  { step: "06", title: "Post-Installation Support", desc: "Ongoing optimization, preventive maintenance programs, and dedicated lifecycle support to ensure long-term uptime." }
                ].map((item, i) => (
                  <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Node Dot - Pinned to Spine */}
                    <div className="absolute left-[-41px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-[#050505] border border-yellow-400/50 rounded-xl z-10 flex items-center justify-center font-black text-lg text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                      {item.step}
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} mt-4 md:mt-0`}>
                      <div className="group bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-[2rem] hover:border-yellow-400/30 transition-all duration-500">
                        <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 text-white group-hover:text-yellow-400 transition-colors italic">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block w-[45%]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Responsibility Statement - High Impact */}
        <section className="py-32 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
            <div className="max-w-5xl mx-auto border-l-0 md:border-l-2 border-yellow-400 md:pl-16 py-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-10">Integration Responsibility</h2>
              <p className="text-2xl md:text-4xl lg:text-5xl text-gray-200 font-light leading-tight mb-10 italic tracking-tight">
                Equipment is sourced from proven manufacturers. <span className="text-white font-black underline decoration-yellow-400/40 decoration-2 underline-offset-8">Maketronics does not sell branded products.</span>
              </p>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-4xl">
                Maketronics owns system integration, performance, and site execution responsibility. We coordinate equipment supply, engineer interfaces, and ensure systems perform as designed on site.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#080808] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-gray-300 space-y-8 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-black text-white">Execution features from assessment to handover</h2>
            <p>
              Project execution fails when mechanical completion and electrical energization are treated as separate
              races. Maketronics sequences installation support, punch lists, and loop checks so that startup plans reflect
              verified field conditions—not assumptions from weeks earlier.
            </p>
            <h3 className="text-lg font-bold text-yellow-400/90">Related technical pages</h3>
            <p>
              Pair this page with{' '}
              <Link to="/middle-east/commissioning-services" className="text-yellow-400 hover:underline">
                crushing plant commissioning Middle East
              </Link>
              ,{' '}
              <Link to="/services/mobile-crushing-integration" className="text-yellow-400 hover:underline">
                mobile crushing integration
              </Link>
              , and{' '}
              <Link to="/why-maketronics" className="text-yellow-400 hover:underline">
                why Maketronics
              </Link>{' '}
              for governance and integration philosophy.
            </p>
            <h2 className="text-2xl font-black text-white">Frequently asked questions</h2>
            <ul className="space-y-4">
              {EX_FAQ.map((f, i) => (
                <li key={i} className="border border-white/10 rounded-xl p-5 bg-[#0a0a0a]">
                  <p className="font-bold text-white mb-1">{f.q}</p>
                  <p className="text-sm text-gray-400">{f.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-yellow-400 rounded-[2.5rem] p-12 md:p-16 text-center text-black shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none relative z-10 italic">
                Let's Execute a System <br /> That Performs on Site
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <PrimaryCTA className="!bg-black !text-white !px-12 !py-4 !text-xs" />
                <SecondaryCTA className="!border-black/20 !text-black !px-12 !py-4 !text-xs" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExecutionSupport;