import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    capacity: '',
    location: '',
    plantType: '',
    drawings: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black font-sans">
      <Header />
      
      <main>
        {/* 1. Hero Section - Calm & Confident */}
        <section
          className="relative min-h-[85vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.6) 100%), url('/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-7xl lg:text-9xl font-black text-white leading-[0.9] mb-10 tracking-tighter uppercase italic">
                CONTACT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  US
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed border-l-2 border-yellow-400/50 pl-8 italic">
                Discuss your project requirements. We'll evaluate your needs and propose a practical system configuration.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Contact Options - Two-Column Layout */}
        <section className="py-24 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Contact Details / Regions Served */}
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-6">Contact Information</h2>
                  <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase italic">Maketronics</h3>
                  <p className="text-lg text-gray-400 font-light leading-relaxed">
                    System integration and engineering partner for crushing & screening operations.
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4">Regions Served</h4>
                  <p className="text-2xl font-black uppercase italic tracking-tight">UAE | Saudi Arabia | Oman</p>
                </div>

                <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/5">
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    For project discussions, system consultations, or technical enquiries, please use the enquiry form or contact us directly.
                  </p>
                </div>
              </div>

              {/* Right Column: Enquiry Form */}
              <div className="lg:col-span-7 bg-[#0a0a0a] p-10 rounded-[3rem] border border-white/10 shadow-2xl">
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-10">Project Enquiry</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Project Type</label>
                      <select name="projectType" value={formData.projectType} onChange={handleChange} required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-400 outline-none transition-colors">
                        <option value="" className="bg-black">Select project type</option>
                        <option value="new-plant" className="bg-black">New Plant</option>
                        <option value="retrofit" className="bg-black">Retrofit / Upgrade</option>
                        <option value="expansion" className="bg-black">Capacity Expansion</option>
                        <option value="maintenance" className="bg-black">Maintenance Program</option>
                      </select>
                    </div>

                    {/* Capacity */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Capacity (TPH)</label>
                      <input type="text" name="capacity" value={formData.capacity} onChange={handleChange} required placeholder="e.g., 500 TPH" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-400 outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Location */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Location</label>
                      <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="City, Country" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-400 outline-none transition-colors" />
                    </div>

                    {/* New Plant / Retrofit */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">New Plant / Retrofit</label>
                      <select name="plantType" value={formData.plantType} onChange={handleChange} required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-400 outline-none transition-colors">
                        <option value="" className="bg-black">Select Option</option>
                        <option value="new" className="bg-black">New Plant</option>
                        <option value="retrofit" className="bg-black">Retrofit Existing</option>
                      </select>
                    </div>
                  </div>

                  {/* Upload Drawings */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Upload Drawings / RFQ</label>
                    <input type="file" name="drawings" onChange={handleChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs file:bg-yellow-400 file:border-0 file:rounded file:px-3 file:py-1 file:font-black file:uppercase file:mr-4" />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Describe your project requirements..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-400 outline-none transition-colors resize-none" />
                  </div>

                  <button type="submit" className="w-full bg-yellow-400 text-black font-black py-5 rounded-2xl hover:bg-yellow-300 transition-all uppercase tracking-[0.2em] text-sm shadow-xl">
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>

            {/* 3. Closing Line */}
            <div className="mt-32 pt-20 border-t border-white/5 text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-yellow-400"></div>
              <p className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto italic">
                “Let’s engineer a solution that performs consistently, day after day.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;