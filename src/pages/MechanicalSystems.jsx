import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import SecondaryCTA from '../components/SecondaryCTA';

const MechanicalSystems = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.4) 100%), url('/Mechanical.png')",
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
                Mechanical Integration
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                Mechanical Systems for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Crushing & Screening
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl font-light leading-relaxed">
                Engineering and integration of complete mechanical systems built for real site conditions.
              </p>
              <div className="flex flex-wrap gap-5">
                <PrimaryCTA />
                <SecondaryCTA />
              </div>
            </div>
          </div>
        </section>
{/* 3. Systems Breakdown - Interactive Technical Grid */}
{/* 3. Systems Breakdown - Tall Technical Cards */}
<section className="py-24 bg-[#080808] border-y border-white/5">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Section Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
      <div>
        <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-4">Engineering Catalog</h2>
        <h3 className="text-5xl font-black tracking-tighter uppercase italic">System <span className="text-gray-500">Breakdown</span></h3>
      </div>
      <div className="hidden lg:block text-right">
        <p className="text-gray-500 text-sm font-mono uppercase tracking-widest leading-relaxed">
          Integrated Mechanical <br /> Infrastructure
        </p>
      </div>
    </div>

    {/* The Grid: 3-Column layout with longer image focus */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          name: "Primary Receiving Hopper",
          purpose: "High-capacity entry point for truck or loader feed.",
          image: "/hopper.png",
          bullets: [
            "Structural load-distribution frame",
            "Grizzly or screen deck sizing",
            "Wear-resistant impact liners",
            "Anti-bridging discharge geometry",
            "Integrated safety guards"
          ],
          tags: ["Wear Reduction", "Uptime"]
        },
        {
          name: "Feed Hopper + Grizzly + Jaw Station",
          purpose: "Integrated primary crushing and feed management.",
          image: "/feedHopper.png",
          bullets: [
            "Modular bolted chassis design",
            "High-impact station protection",
            "Crusher interface coordination",
            "Ergonomic maintenance access",
            "Perimeter safety walkways"
          ],
          tags: ["Modular", "Safety"]
        },
        {
          name: "Cone & VSI Stations",
          purpose: "Secondary/tertiary stations with precision mounting.",
          image: "/cone.png",
          bullets: [
            "Custom model-specific frames",
            "Maintenance service gantries",
            "Abrasion-resistant chutes",
            "Rotor box wear protection",
            "Auxiliary service access"
          ],
          tags: ["Precision", "Capacity"]
        },
        {
          name: "Screen Stations",
          purpose: "Integrated screening stations with structural mounting.",
          image: "/screenStations.png",
          bullets: [
            "High-frequency bolted design",
            "High-BHN lined discharge chutes",
            "Drive station safety guarding",
            "Feeder rotation service access",
            "Safety-grated cleanouts"
          ],
          tags: ["Sizing", "Efficiency"]
        },
        {
          name: "Surge Hoppers",
          purpose: "Material buffering for continuous plant operation.",
          image: "/surgeHoppers.png",
          bullets: [
            "Regulated discharge storage",
            "Critical flow wear liners",
            "Feeder integration logic",
            "Digital level monitoring",
            "Reinforced platforms"
          ],
          tags: ["Stability", "Control"]
        },
        {
          name: "Conveyors",
          purpose: "Transport systems with structural supports and safety.",
          image: "/conveyors.png",
          bullets: [
            "Engineered support gantries",
            "Impact transfer point chutes",
            "Automated belt tensioning",
            "Safety pull-wire integration",
            "Automation control interface"
          ],
          tags: ["Reliable", "Safety"]
        }
      ].map((system, i) => (
        <div 
          key={i} 
          className="group bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/5 hover:border-yellow-400/40 transition-all duration-500 flex flex-col shadow-2xl"
        >
          {/* Top: Longer Image Section (h-80 for more visibility) */}
          <div className="h-80 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url('${system.image}')` }}
            ></div>
            {/* Darker Bottom Gradient for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            
            <div className="absolute bottom-4 left-6">
              <span className="text-yellow-400 font-mono text-[10px] uppercase tracking-widest bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                System 0{i + 1}
              </span>
            </div>
          </div>

          {/* Bottom: Content Section */}
          <div className="p-8 flex-grow flex flex-col">
            <h4 className="text-2xl font-bold mb-2 tracking-tighter uppercase italic group-hover:text-yellow-400 transition-colors">
              {system.name}
            </h4>
            <p className="text-gray-400 text-xs italic mb-6 leading-relaxed border-l-2 border-yellow-400/50 pl-4">
              {system.purpose}
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {system.bullets.map((bullet, bid) => (
                <li key={bid} className="flex items-start gap-2 text-[12px] text-gray-300 leading-tight">
                  <div className="h-1 w-1 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0"></div>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Outcome Tags */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {system.tags.map((tag, tid) => (
                <span key={tid} className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/80 bg-yellow-400/5 border border-yellow-400/10 px-3 py-1 rounded">
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
        {/* Keeping the rest of your sections for consistency... */}
        {/* Engineering Depth */}
        <section className="py-32 relative overflow-hidden bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-4">Engineering Depth</h2>
              <h3 className="text-5xl font-black tracking-tighter uppercase">Wear & Safety <span className="text-gray-500">Standards</span></h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Rock Box Geometry", desc: "Optimized geometry for material-on-material wear." },
                { title: "400 BHN Armor", desc: "Multi-layer liners matched to specific abrasiveness." },
                { title: "Man-Safe Access", desc: "Designed for zero-harm maintenance." },
                { title: "Bolted Modularity", desc: "Precision assembled systems for site flexibility." },
                { title: "Flow Dynamics", desc: "Chute designs that maximize throughput efficiency." },
                { title: "Integrated Safety", desc: "ISO standards as a core parameter." }
              ].map((item, i) => (
                <div key={i} className="group bg-[#0f0f0f] p-10 rounded-3xl border border-white/5 hover:border-yellow-400/50 transition-all duration-500">
                  <h4 className="text-lg font-bold mb-3 text-white group-hover:text-yellow-400 uppercase">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* 5. How We Work (Mini Process) - Horizontal Engineering Line */}
<section className="py-24 bg-[#080808] border-y border-white/5 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Section Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
      <div>
        <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-4">Methodology</h2>
        <h3 className="text-5xl font-black tracking-tighter uppercase italic">How We <span className="text-gray-500">Work</span></h3>
      </div>
      <div className="hidden lg:block h-[1px] flex-grow mx-12 bg-white/10 mb-4"></div>
    </div>

    {/* 4-Step Horizontal Process Container */}
    <div className="relative">
      {/* Background Connecting Line */}
      <div className="absolute top-[27px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {[
          { 
            step: "01", 
            title: "Site Assessment", 
            desc: "Analysis of capacity, material properties, and site constraints." 
          },
          { 
            step: "02", 
            title: "System Engineering", 
            desc: "Unified mechanical and electrical design using CAD/FEA analysis." 
          },
          { 
            step: "03", 
            title: "Execution & Supply", 
            desc: "Precision manufacturing and seamless integration of all components." 
          },
          { 
            step: "04", 
            title: "Commissioning", 
            desc: "Peak performance testing and comprehensive operator training." 
          }
        ].map((item, i) => (
          <div key={i} className="group relative">
            {/* The "Node" on the timeline */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative z-10 w-14 h-14 bg-[#050505] border border-white/10 rounded-xl flex items-center justify-center group-hover:border-yellow-400/50 transition-all duration-500">
                <span className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors">{item.step}</span>
                {/* Glowing pulse dot */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
              </div>
              <div className="h-[1px] flex-grow bg-white/5 lg:hidden"></div>
            </div>

            {/* Content Area */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed font-light pr-4">
                {item.desc}
              </p>
            </div>

            {/* Subtle Vertical Accent Line for Desktop */}
            <div className="absolute top-20 left-7 w-[1px] h-0 bg-gradient-to-b from-yellow-400/50 to-transparent group-hover:h-12 transition-all duration-700 hidden lg:block"></div>
          </div>
        ))}
      </div>
    </div>

    {/* Mini CTA - Integrated into the section flow */}
    <div className="mt-20 pt-10 border-t border-white/5 flex justify-center lg:justify-start">
       <a 
        href="/why-maketronics" 
        className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-yellow-400 transition-all"
      >
        Explore Our Full Capabilities
        <span className="w-8 h-[1px] bg-gray-800 group-hover:bg-yellow-400 group-hover:w-12 transition-all"></span>
        <span className="text-lg">→</span>
      </a>
    </div>

  </div>
</section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-yellow-400 rounded-[3rem] p-16 text-center text-black shadow-2xl">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">
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

export default MechanicalSystems;