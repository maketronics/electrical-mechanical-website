import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { breadcrumbSchema, organizationSchema } from '../utils/schema';

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

const CONTACT_DESC =
  'Ready to optimize your industrial operations? Contact Maketronics for expert mechanical and electrical engineering support. Reach out today to discuss your project requirements with our technical team.';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = ({ target }) => {
    const { name, value, files } = target;
    setFormData(p => ({ ...p, [name]: files ? [...files] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://electrical-mechanical-website.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your enquiry has been submitted successfully.' });
        // Reset form
        setFormData({
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
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit form. Please try again.' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check if the server is running.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050505] text-white font-sans">
      <Seo
        title="Engineering Consultation | Industrial Support Services | Maketronics"
        description={CONTACT_DESC}
        canonicalPath="/contact"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95]">
            Engineering Consultation
            <span className="block text-3xl md:text-4xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 italic">
              Industrial support services
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
              <h2 className="text-4xl font-black uppercase italic">
                Maketronics
              </h2>
              <p className="text-gray-400 mt-4">
                System integration partner for crushing & screening operations.
              </p>
              <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                Before you submit the form, you may want our{' '}
                <Link to="/services" className="text-yellow-400 hover:underline">
                  services directory
                </Link>
                ,{' '}
                <Link to="/middle-east" className="text-yellow-400 hover:underline">
                  Middle East hub
                </Link>
                , or{' '}
                <Link to="/execution-support" className="text-yellow-400 hover:underline">
                  execution &amp; support
                </Link>{' '}
                pages for vocabulary alignment on your RFQ.
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

              {submitStatus && (
                <div className={`p-4 rounded-xl ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black font-black py-4 rounded-2xl
                           uppercase tracking-[0.2em] hover:bg-yellow-300 transition
                           disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
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
