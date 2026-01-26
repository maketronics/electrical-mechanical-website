import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import SecondaryCTA from '../components/SecondaryCTA';

const ExecutionSupport = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      
      <main>
        {/* Hero Section - Following Mechanical Pattern */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.4) 100%), url('/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                Lifecycle Responsibility
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                Execution & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Site Support
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl font-light leading-relaxed">
                From concept to commissioning and beyond — we remain responsible throughout the system lifecycle.
              </p>
              <div className="flex flex-wrap gap-5">
                <PrimaryCTA />
                <SecondaryCTA />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Execution Model - Vertical Arrow Flow Pattern */}
        <section className="py-24 bg-[#080808] border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-4">The Process</h2>
                <h3 className="text-5xl font-black tracking-tighter uppercase italic">Execution <span className="text-gray-500">Model</span></h3>
              </div>
              <div className="hidden lg:block text-right">
                <p className="text-gray-500 text-sm font-mono uppercase tracking-widest leading-relaxed">
                  Systematic Project <br /> Delivery Framework
                </p>
              </div>
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative pl-12 md:pl-0">
              {/* Central Spine Arrow */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400 via-white/20 to-transparent md:-translate-x-1/2">
                <div className="absolute bottom-0 -left-[6px] w-4 h-4 border-b-2 border-r-2 border-yellow-400 rotate-45"></div>
              </div>

              <div className="space-y-32">
                {[
                  { step: "01", title: "Requirement Understanding", desc: "Site assessment, capacity analysis, and operational constraints evaluation to ensure engineering alignment with site reality." },
                  { step: "02", title: "System Design", desc: "Complete engineering featuring structural analysis and equipment coordination for total system performance." },
                  { step: "03", title: "Supply & Integration", desc: "Component sourcing from proven manufacturers, quality-controlled assembly, and seamless interface integration." },
                  { step: "04", title: "Installation Support", desc: "On-site guidance and technical coordination during the physical installation of mechanical and electrical systems." },
                  { step: "05", title: "Commissioning", desc: "Rigorous system startup, load testing, and performance verification to meet engineered duty-cycle requirements." },
                  { step: "06", title: "Post-Installation Support", desc: "Ongoing optimization, preventive maintenance programs, and dedicated lifecycle support to ensure long-term uptime." }
                ].map((item, i) => (
                  <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Bold Node Dot */}
                    <div className="absolute left-[-42px] md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-[#050505] border-2 border-yellow-400 rounded-2xl z-10 flex items-center justify-center font-black text-xl text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all group hover:scale-110">
                      {item.step}
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} mt-4 md:mt-0`}>
                      <div className="group bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem] hover:border-yellow-400/50 transition-all duration-500 shadow-xl">
                        <h4 className="text-xl md:text-2xl font-black uppercase tracking-widest mb-4 text-white group-hover:text-yellow-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
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

        {/* 3. Responsibility Statement - Bold Text Pattern */}
        <section className="py-40 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto border-l-4 border-yellow-400 pl-12 md:pl-24 py-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-12">Responsibility</h2>
              <p className="text-3xl md:text-4xl lg:text-5xl text-gray-200 font-light leading-tight mb-12 italic">
                Equipment is sourced from proven manufacturers. <span className="text-white font-black underline decoration-yellow-400 decoration-4 underline-offset-[12px]">Maketronics does not sell branded products.</span>
              </p>
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-4xl">
                Maketronics owns system integration, performance, and site execution responsibility. We coordinate equipment supply, engineer interfaces, and ensure systems perform as designed on site.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA - Matching Reference */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-yellow-400 rounded-[3rem] p-16 text-center text-black shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/30 blur-[120px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none relative z-10">
                Let's Execute a System <br /> That Performs on Site
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
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

export default ExecutionSupport;