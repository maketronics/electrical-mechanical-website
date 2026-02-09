import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Field = ({ label, type = 'text', ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        rows="4"
        {...props}
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm
                   focus:border-yellow-400 outline-none resize-none"
      />
    ) : (
      <input
        type={type}
        {...props}
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm
                   focus:border-yellow-400 outline-none"
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
    setFormData(prev => ({
      ...prev,
      [name]: files ? [...files] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'drawings') {
          value.forEach(file => data.append('drawings', file));
        } else {
          data.append(key, value);
        }
      });

      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        body: data
      });

      const result = await res.json();
      alert(result.message || 'Enquiry submitted successfully');

    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
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

            <div className="border-t border-white/10 pt-8">
              <p className="text-yellow-400 text-xs uppercase tracking-widest mb-2">
                Regions Served
              </p>
              <p className="text-2xl font-black italic uppercase">
                UAE | Saudi Arabia | Oman
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7 bg-[#0a0a0a] p-10 rounded-[3rem] border border-white/10">
            <p className="text-xs uppercase tracking-[0.5em] text-yellow-400 mb-10">
              Project Enquiry
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Full Name" name="fullName" onChange={handleChange} />
                <Field label="Email ID" name="email" onChange={handleChange} />
                <Field label="Telephone Number" name="phone" onChange={handleChange} />
                <Field label="Company Name" name="company" onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Project Type (Retain)" name="projectType" onChange={handleChange} />
                <Field label="TPH Required" name="tph" onChange={handleChange} />
                <Field label="Feed Rock Type / Bulk Density" name="feedRockBulkDensity" onChange={handleChange} />
                <Field label="Top Feed Size" name="topFeedSize" onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Clay & Moisture Content" name="clayMoisture" onChange={handleChange} />
                <Field label="Voltage & Frequency" name="voltageFrequency" onChange={handleChange} />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500">
                  Upload Drawings / RFQ
                </label>
                <input
                  type="file"
                  name="drawings"
                  multiple
                  onChange={handleChange}
                  className="mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs
                             file:bg-yellow-400 file:border-0 file:rounded
                             file:px-3 file:py-1 file:font-black file:uppercase"
                />
              </div>

              <Field label="Message" type="textarea" name="message" onChange={handleChange} />

              <button className="w-full bg-yellow-400 text-black font-black py-4 rounded-2xl
                                 uppercase tracking-[0.2em] hover:bg-yellow-300 transition">
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
