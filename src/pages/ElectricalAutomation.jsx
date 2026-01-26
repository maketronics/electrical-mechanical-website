import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import SecondaryCTA from '../components/SecondaryCTA';

const ElectricalAutomation = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      
      <main>
        {/* 1. Hero Section - Precision & Intelligence */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.4) 100%), url('/elec.png')",
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
                Automation Systems
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                Electrical & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Automation Solutions
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl font-light leading-relaxed">
                Reliable electrical and automation systems engineered for continuous plant operation in high-dust and extreme vibration environments.
              </p>

              <p className="text-sm text-gray-400 font-mono mb-10 border-l-2 border-yellow-400 pl-4">
                Systems integration engineered for site reality — not just diagrams.
              </p>

              <div className="flex flex-wrap gap-5">
                <PrimaryCTA />
                <SecondaryCTA />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Engineering Approach Section */}
        <section className="py-32 -mt-20 z-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-6">
                  The Approach
                </h2>
                <p className="text-3xl md:text-4xl text-white font-bold tracking-tighter leading-tight mb-8">
                   Engineered for <span className="text-yellow-400 italic">Harsh Realities</span>, optimized for total plant uptime.
                </p>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  Most failures occur at the intersection of electrical logic and mechanical stress. Our systems are built to withstand high dust loads, extreme vibration, and temperature flux. We focus on "Serviceable Intelligence"—ensuring panels and PLCs are logically organized and physically accessible for rapid troubleshooting.
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#0f0f0f] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 blur-3xl group-hover:bg-yellow-400/10 transition-all"></div>
                <h3 className="text-xl font-bold mb-8 tracking-tight border-b border-white/10 pb-4">Core Focus</h3>
                <ul className="space-y-5">
                  {[
                    'Dust & Vibration Resilience',
                    'Serviceable Layout Design',
                    'Energy-Efficient Duty Cycles',
                    'Fail-Safe Automation Logic',
                    'Real-time Performance Data'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-300 group/item">
                      <div className="h-1 w-1 rounded-full bg-yellow-400 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-sm font-medium uppercase tracking-wider">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Capability Grid - Using Your Refined Template */}
        <section className="py-32 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-4">The Catalog</h2>
                <h3 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase">What We <span className="text-gray-500 italic">Deliver</span></h3>
              </div>
              <div className="h-[1px] flex-grow mx-10 bg-white/10 hidden lg:block mb-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "Control Panels", 
                  desc: "Custom-built for site conditions with logically mapped maintenance access.",
                  tags: ["IP-Rated", "Modular"] 
                },
                { 
                  title: "MCC & VFD Systems", 
                  desc: "Motor control solutions optimized for load profiles and peak energy efficiency.",
                  tags: ["Load Balancing", "VFD"] 
                },
                { 
                  title: "Soft Starters", 
                  desc: "Reduced mechanical stress through controlled motor acceleration and surge dampening.",
                  tags: ["Stress Reduction", "Safety"] 
                },
                { 
                  title: "PLC Automation", 
                  desc: "Robust automation logic integrated directly with mechanical system feedback.",
                  tags: ["Digital Twin", "Logic"] 
                },
                { 
                  title: "Execution Support", 
                  desc: "Professional on-site commissioning to ensure engineered values meet site reality.",
                  tags: ["On-Site", "Testing"] 
                },
                { 
                  title: "Preventive Programs", 
                  desc: "Predictive maintenance schedules designed to identify failures before they halt production.",
                  tags: ["Predictive", "Asset Life"] 
                }
              ].map((item, i) => (
                <div key={i} className="group bg-[#0a0a0a] p-10 rounded-[2rem] border border-white/5 hover:border-yellow-400/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl font-black text-yellow-400/20">0{i + 1}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-yellow-400 transition-colors uppercase italic">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm mb-8">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tid) => (
                      <span key={tid} className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/80 border border-yellow-400/20 px-2 py-1 rounded bg-yellow-400/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Outcomes - Data-Driven Styling */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-8">
                  System Outcomes
                </h2>
                <h3 className="text-5xl font-black tracking-tighter uppercase leading-[0.9]">
                  Performance <br /> Metrics
                </h3>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12">
                {[
                  { label: 'Improved Efficiency', stat: 'OPTIMIZED LOAD' },
                  { label: 'Reduced Breakdowns', stat: 'PREDICTIVE UPTIME' },
                  { label: 'Enhanced Safety', stat: 'FAIL-SAFE LOGIC' },
                  { label: 'Predictable Operation', stat: 'DUTY CYCLE STABILITY' }
                ].map((outcome, i) => (
                  <div key={i} className="group border-l border-white/10 pl-8 py-2 hover:border-yellow-400 transition-colors duration-500">
                    <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-[0.3em] block mb-2">{outcome.stat}</span>
                    <span className="text-3xl text-gray-300 font-bold tracking-tight group-hover:text-white transition-colors">{outcome.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Final CTA - High Contrast */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-yellow-400 rounded-[3rem] p-12 lg:p-20 text-center text-black shadow-[0_0_50px_rgba(250,204,21,0.2)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[100px] rounded-full"></div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none relative z-10">
                Ready to Engineer <br className="hidden md:block"/> Digital Intelligence?
              </h2>
              <p className="text-xl text-black font-medium mb-10 opacity-80 relative z-10 max-w-2xl mx-auto">
                Share your site requirements and we'll propose an automation configuration optimized for reliability and long-term asset life.
              </p>
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

export default ElectricalAutomation;