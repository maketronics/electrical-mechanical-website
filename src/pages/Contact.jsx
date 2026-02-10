import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* =======================
   FIELD COMPONENT (FIXED)
   ======================= */
const Field = ({ label, type = 'text', ...props }) => (
  <div className="flex flex-col gap-2">
    {/* LABEL – WHITE */}
    <label className="text-[10px] font-bold uppercase tracking-widest text-white/80">
      {label}
    </label>

    {type === 'textarea' ? (
      <textarea
        rows="4"
        {...props}
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm
                   text-white caret-white
                   placeholder:text-white/40
                   focus:border-yellow-400 outline-none resize-none
                   appearance-none"
      />
    ) : (
      <input
        type={type}
        {...props}
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm
                   text-white caret-white
                   placeholder:text-white/40
                   focus:border-yellow-400 outline-none
                   appearance-none"
      />
    )}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    tph: '',
    feedRockBulkDensity: '',
    topFeedSize: '',
    clayMoisture: '',
    voltageFrequency: '',
    drawings: [],
    message: ''
  });

  const handleChange = ({ target }) => {
    const { name, value, files } = target;
    setFormData(p => ({ ...p, [name]: files ? [...files] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-[#050505] text-white font-sans">
      <Header />

      {/* HERO */}
      <section
        className="min-h-[70vh] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,.95) 30%, rgba(0,0,0,.6)), url('/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-12">
          <h1 className="text-6xl md:text-7xl font-black uppercase italic leading-[0.9]">
            Contact <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Us
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-gray-300 border-l-2 border-yellow-400/50 pl-6 italic">
            Discuss your project requirements. We'll evaluate and propose a
            practical configuration.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* INFO */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-yellow-400 mb-6">
                Contact Information
              </p>
              <h3 className="text-4xl font-black uppercase italic">
                Maketronics
              </h3>
              <p className="text-gray-400 mt-4">
                System integration partner for crushing & screening operations.
              </p>
            </div>

            {/*<div className="border-t border-white/10 pt-8">
              <p className="text-yellow-400 text-xs uppercase tracking-widest mb-2">
                Regions Served
              </p>
              <p className="text-2xl font-black italic uppercase">
                UAE | Saudi Arabia | Oman
              </p>
            </div>*/}
          </div>

          {/* FORM */}
          <div className="lg:col-span-7 bg-[#0a0a0a] p-10 rounded-[3rem] border border-white/10">
            <p className="text-xs uppercase tracking-[0.5em] text-yellow-400 mb-10">
              Project Enquiry
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
                <Field label="Email ID" name="email" value={formData.email} onChange={handleChange} />
                <Field label="Telephone Number" name="phone" value={formData.phone} onChange={handleChange} />
                <Field label="Company Name" name="company" value={formData.company} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Project Type (Retain)" name="projectType" value={formData.projectType} onChange={handleChange} />
                <Field label="TPH Required" name="tph" value={formData.tph} onChange={handleChange} />
                <Field label="Feed Rock Type / Bulk Density" name="feedRockBulkDensity" value={formData.feedRockBulkDensity} onChange={handleChange} />
                <Field label="Top Feed Size" name="topFeedSize" value={formData.topFeedSize} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Clay & Moisture Content" name="clayMoisture" value={formData.clayMoisture} onChange={handleChange} />
                <Field label="Voltage & Frequency" name="voltageFrequency" value={formData.voltageFrequency} onChange={handleChange} />
              </div>

              {/* FILE UPLOAD */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                  Upload Drawings / RFQ
                </label>
                <input
                  type="file"
                  name="drawings"
                  multiple
                  onChange={handleChange}
                  className="mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs
                             text-white
                             file:bg-yellow-400 file:border-0 file:rounded
                             file:px-3 file:py-1 file:font-black file:uppercase"
                />
                {formData.drawings.length > 0 && (
                  <ul className="mt-2 text-xs text-gray-400 space-y-1">
                    {formData.drawings.map((f, i) => (
                      <li key={i}>📎 {f.name}</li>
                    ))}
                  </ul>
                )}
              </div>

              <Field
                label="Message"
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-black py-4 rounded-2xl
                           uppercase tracking-[0.2em] hover:bg-yellow-300 transition"
              >
                Submit Enquiry
              </button>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
