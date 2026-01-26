import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import SecondaryCTA from '../components/SecondaryCTA';

const IndustriesServed = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black font-sans">
      <Header />
      
      <main>
        {/* 1. Hero Section - Adjusted to 85vh for site-wide consistency */}
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
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                Sector Expertise
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-9xl font-black text-white leading-[0.9] mb-10 tracking-tighter uppercase italic">
                Industries <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  We Serve
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed border-l-2 border-yellow-400/50 pl-8 italic">
                Engineering solutions built for demanding material handling operations across the mineral and aggregate sectors.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Industry Grid - Lowered Slotted Layout (No Popping) */}
        <section className="py-24 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { 
                  title: "Mining & Minerals", 
                  image: "/mining.png", 
                  desc: "Heavy-duty integrated systems designed for high-tonnage extraction and primary processing plants."
                },
                { 
                  title: "Quarries & Aggregates", 
                  image: "/Quarries.png", 
                  desc: "Reliable solutions for crushing, screening, and material transfer designed specifically for stone production."
                },
                { 
                  title: "Crushing & Screening", 
                  image: "/crushing.png", 
                  desc: "Integrated mechanical and electrical systems for optimized performance, whether mobile or stationary."
                },
                { 
                  title: "Bulk Material Handling", 
                  image: "/Bulk.png", 
                  desc: "Systems designed for safe, controlled, high-volume material handling at ports, terminals, and facilities."
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="group relative flex flex-col bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-yellow-400/30 transition-all duration-500 shadow-2xl"
                >
                  {/* Image Container - Fixed height h-80 like Mechanical Systems */}
                  <div className="h-80 overflow-hidden relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                    
                    {/* Architectural Sector Tag */}
                    <div className="absolute top-6 right-6 font-mono text-[10px] text-white/20 group-hover:text-yellow-400 transition-colors tracking-[0.2em]">
                      [ SECTOR_ID_0{i + 1} ]
                    </div>
                  </div>

                  {/* Technical Text Tray */}
                  <div className="p-12 relative bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                    {/* Vertical Accent Line - Engineering Style */}
                    <div className="absolute top-0 left-0 w-[1px] h-0 bg-yellow-400 group-hover:h-full transition-all duration-700"></div>

                    <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase italic group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm font-light max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy Divider - Matching site-wide Process style */}
            <div className="mt-32 pt-20 border-t border-white/5 text-center relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-yellow-400"></div>
              <p className="text-2xl md:text-3xl text-gray-500 font-light leading-relaxed max-w-4xl mx-auto italic">
                "Our solutions are engineered around <span className="text-white font-bold">real operating challenges</span>, not theoretical assumptions."
              </p>
            </div>
          </div>
        </section>

        {/* 3. Final CTA - Identical to Home & Mechanical */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-yellow-400 rounded-[3rem] p-12 lg:p-20 text-center text-black shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none relative z-10">
                Ready to Discuss <br className="hidden md:block" /> Your Project?
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

export default IndustriesServed;