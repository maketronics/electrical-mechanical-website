import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import SecondaryCTA from '../components/SecondaryCTA';
import ImagePlaceholder from '../components/ImagePlaceholder';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      
      <main>
        {/* Hero Section */}
      {/* Hero Section */}
<section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
  {/* Background Image with updated positioning */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/hero-image.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center right', // Align image to right to fill that space
    }}
  />
  
  {/* Sophisticated Gradient: Heavy dark on left, fading to transparent on right */}
  <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>

  {/* Content Container */}
  <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Left Column: Text Content */}
      <div className="lg:col-span-7 xl:col-span-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white">
          Complete System Solutions for <br className="hidden md:block" />
          <span className="text-yellow-400">Crushing & Screening</span> Operations
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
          Engineering, supplying, and supporting integrated mechanical and electrical systems 
          for demanding material handling environments.
        </p>

        <p className="text-sm text-gray-400 italic mb-10 flex items-center">
          <span className="w-8 h-[1px] bg-yellow-400 mr-3"></span>
          Independent system solutions and integration partner (not an OEM).
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <div className="transform hover:scale-105 transition-transform">
            <PrimaryCTA />
          </div>
          <div className="transform hover:scale-105 transition-transform">
            <SecondaryCTA />
          </div>
        </div>
      </div>

      {/* Right Column: Visual Balance Element */}
      {/* This fills the "empty" space with a subtle, professional design element */}
      <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
        <div className="relative">
          {/* Decorative frame or a small featured image placeholder */}
          <div className="absolute -inset-4 border border-yellow-400/20 rounded-xl"></div>
          <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-2xl">
            <div className="space-y-4">
              <div className="h-2 w-20 bg-yellow-400 rounded"></div>
              <p className="text-gray-100 font-medium">System Excellence</p>
              <p className="text-sm text-gray-400">
                Optimizing throughput and reliability through precision engineering.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


        {/* What We Do - 4 Pillars */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">System Design & Engineering</h3>
                <p className="text-gray-400 text-sm">Complete system architecture and engineering solutions.</p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mechanical System Integration</h3>
                <p className="text-gray-400 text-sm">Seamless integration of mechanical components and systems.</p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Electrical & Automation Solutions</h3>
                <p className="text-gray-400 text-sm">Comprehensive electrical systems and automation integration.</p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Site Support & Commissioning</h3>
                <p className="text-gray-400 text-sm">On-site support, commissioning, and lifecycle operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mechanical Systems Preview */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ImagePlaceholder
                  src={null}
                  alt="Mechanical Systems"
                  className="h-80"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Mechanical Systems</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Comprehensive mechanical integration solutions designed for the toughest industrial environments. From wear protection to complete system assembly, we engineer solutions that deliver reliability and performance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span className="text-gray-300">Complete mechanical system design and integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span className="text-gray-300">Wear protection and material handling solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span className="text-gray-300">Execution and commissioning support</span>
                  </li>
                </ul>
                <a
                  href="/mechanical-systems"
                  className="inline-block text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                >
                  Explore Mechanical Systems →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Electrical & Automation Preview */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <ImagePlaceholder
                  src={null}
                  alt="Electrical & Automation"
                  className="h-80"
                />
              </div>
              <div className="lg:order-1">
                <h2 className="text-3xl font-bold mb-6">Electrical & Automation</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced electrical systems and automation solutions that keep your operations running smoothly. From control panels to PLC programming, we deliver integrated electrical solutions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span className="text-gray-300">Control panels, MCCs, and electrical distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span className="text-gray-300">PLC programming and automation integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span className="text-gray-300">Commissioning and ongoing support</span>
                  </li>
                </ul>
                <a
                  href="/electrical-automation"
                  className="inline-block text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                >
                  View Electrical Solutions →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served Preview */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Industries Served</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                <h3 className="text-xl font-semibold mb-2">Mining & Minerals</h3>
                <p className="text-gray-400 text-sm">Heavy-duty systems for mining operations.</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                <h3 className="text-xl font-semibold mb-2">Quarries & Aggregates</h3>
                <p className="text-gray-400 text-sm">Robust solutions for aggregate processing.</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                <h3 className="text-xl font-semibold mb-2">Crushing & Screening Plants</h3>
                <p className="text-gray-400 text-sm">Complete plant integration and support.</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                <h3 className="text-xl font-semibold mb-2">Bulk Material Processing</h3>
                <p className="text-gray-400 text-sm">Systems for material handling facilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Maketronics (Condensed) */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Maketronics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Industry-Specific Engineering</h3>
                <p className="text-gray-400 text-sm">Solutions designed for your specific operational challenges.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Integrated Capability</h3>
                <p className="text-gray-400 text-sm">Mechanical and electrical expertise in one partner.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Designed for Site Realities</h3>
                <p className="text-gray-400 text-sm">Engineering that accounts for real-world conditions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Execution-Focused</h3>
                <p className="text-gray-400 text-sm">From design to commissioning and beyond.</p>
              </div>
            </div>
            <div className="text-center">
              <a
                href="/why-maketronics"
                className="inline-block text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
              >
                Why Choose Us →
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA Band */}
        <section className="py-20 bg-gray-800 border-t border-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Discuss Your System Requirements?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's explore how integrated mechanical and electrical solutions can enhance your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryCTA />
              <SecondaryCTA />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

