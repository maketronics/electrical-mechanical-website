import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import SecondaryCTA from '../components/SecondaryCTA';

const IndustriesServed = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black font-sans antialiased">
      <Header />
      
      <main>
        {/* 1. Hero Section - Synchronized Height & Typography */}
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
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12">
            <div className="max-w-4xl">
              {/* Standardized Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                Sector Expertise
              </div>
              
              {/* Heading - text-7xl matches Mechanical Systems perfectly */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter uppercase italic">
                Industries <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  We Serve
                </span>
              </h1>

              {/* Standardized Paragraph size */}
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed italic border-l-2 border-yellow-400/50 pl-6">
                Engineering solutions built for demanding material handling operations across the global mineral and aggregate sectors.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Industry Grid - 4 High-Density Tiles */}
        <section className="py-24 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-2">Market Segments</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Core <span className="text-gray-500">Sectors</span></h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Mining & Minerals", 
                  image: "/mining.png", 
                  purpose: "High-tonnage extraction and primary processing plants.",
                  bullets: ["Load-distribution frames", "Grizzly screen decks", "Wear-resistant liners", "Safety guard systems"],
                  tags: ["High Tonnage", "Uptime"]
                },
                { 
                  title: "Quarries & Aggregates", 
                  image: "/Quarries.png", 
                  purpose: "Precision screening and material transfer for stone production.",
                  bullets: ["Modular chassis design", "Impact station protection", "Ergonomic service access", "Perimeter walkways"],
                  tags: ["Modular", "Safety"]
                },
                { 
                  title: "Crushing & Screening Plants", 
                  image: "/crushing.png", 
                  purpose: "Integrated stations with structural mounting and automation.",
                  bullets: ["Custom-specific frames", "Maintenance gantries", "Abrasion-resistant chutes", "Rotor box protection"],
                  tags: ["Precision", "Capacity"]
                },
                { 
                  title: "Bulk Material Processing", 
                  image: "/Bulk.png", 
                  purpose: "High-volume handling at ports, terminals, and storage facilities.",
                  bullets: ["Support gantries", "Impact transfer points", "Belt tensioning systems", "Control interfaces"],
                  tags: ["Logistics", "Volume"]
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="group bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/5 hover:border-yellow-400/40 transition-all duration-500 flex flex-col h-[650px] shadow-2xl"
                >
                  <div className="h-48 relative overflow-hidden bg-[#111]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <span className="text-yellow-400 font-mono text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                        SEC-0{i + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold mb-3 tracking-tighter uppercase italic group-hover:text-yellow-400 transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-[13px] italic mb-6 leading-relaxed border-l-2 border-yellow-400/30 pl-4">
                        {item.purpose}
                      </p>
                      <ul className="space-y-3">
                        {item.bullets.map((bullet, bid) => (
                          <li key={bid} className="flex items-start gap-3 text-[13px] text-gray-300 leading-snug">
                            <div className="h-1 w-1 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0"></div>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {item.tags.map((tag, tid) => (
                        <span key={tid} className="text-[9px] font-bold uppercase tracking-widest text-yellow-400/80 bg-yellow-400/5 border border-yellow-400/10 px-2.5 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Methodology Line - Unified with other pages */}
        <section className="py-24 bg-[#050505] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-4">Methodology</h2>
                <h3 className="text-5xl font-black tracking-tighter uppercase italic">Our <span className="text-gray-500">Approach</span></h3>
              </div>
              <div className="hidden lg:block h-[1px] flex-grow mx-12 bg-white/10 mb-4"></div>
            </div>

            <div className="relative">
              <div className="absolute top-[27px] left-0 w-full h-[1px] bg-white/5 hidden lg:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {[
                  { step: "01", title: "Site Insight", desc: "Mapping geological challenges and production goals." },
                  { step: "02", title: "Custom Design", desc: "Mechanical and electrical alignment for seamless flow." },
                  { step: "03", title: "Supply Chain", desc: "Strategic component sourcing and fabrication." },
                  { step: "04", title: "Plant Support", desc: "Ongoing optimization to ensure long-term ROI." }
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="relative z-10 w-14 h-14 bg-[#050505] border border-white/10 rounded-xl flex items-center justify-center group-hover:border-yellow-400/50 transition-all duration-500">
                        <span className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors">{item.step}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-yellow-400 transition-colors">{item.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed font-light pr-4">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Final CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-yellow-400 rounded-[2.5rem] p-16 text-center text-black shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic leading-none">
                  Ready to Discuss <br /> Your Industry?
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <PrimaryCTA className="!bg-black !text-white !px-12 !py-4" />
                  <SecondaryCTA className="!border-black/30 !text-black !px-12 !py-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustriesServed;