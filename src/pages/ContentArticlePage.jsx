import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import SecondaryCTA from '../components/SecondaryCTA';
import Seo from '../components/Seo';

/**
 * @param {object} props
 * @param {object} props.page - from seo registry
 */
export default function ContentArticlePage({ page }) {
  if (!page) return null;

  const {
    title,
    description,
    canonicalPath,
    hreflang,
    jsonLd,
    h1,
    eyebrow,
    sections,
    faqs,
    relatedLinks,
  } = page;

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black font-sans antialiased">
      <Seo
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        hreflang={hreflang}
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        <section
          className="relative min-h-[72vh] flex items-center overflow-hidden pt-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.55) 100%), url(/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-400 mb-6">{eyebrow}</p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-8 tracking-tighter max-w-5xl">
              {h1}
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed border-l-2 border-yellow-400/50 pl-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <PrimaryCTA />
              <SecondaryCTA />
            </div>
          </div>
        </section>

        <article className="py-20 bg-[#080808] border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            {sections.map((sec, si) => (
              <section key={si} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-6">{sec.h2}</h2>
                {sec.body?.map((p, pi) => (
                  <p key={pi} className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
                    {p}
                  </p>
                ))}
                {sec.sub?.map((sub, ui) => (
                  <div key={ui} className="mt-8 ml-0 md:ml-2 border-l border-yellow-400/20 pl-6">
                    <h3 className="text-xl font-bold text-yellow-400/90 mb-3">{sub.h3}</h3>
                    {sub.body.map((p, pi) => (
                      <p key={pi} className="text-gray-400 leading-relaxed mb-3 text-sm md:text-base">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </section>
            ))}
          </div>
        </article>

        {faqs?.length > 0 && (
          <section className="py-20 bg-[#050505]">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-black mb-10">Frequently asked questions</h2>
              <ul className="space-y-8">
                {faqs.map((f, i) => (
                  <li key={i} className="border border-white/10 rounded-2xl p-6 bg-[#0a0a0a]">
                    <p className="font-bold text-white mb-2">{f.q}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {relatedLinks?.length > 0 && (
          <section className="py-16 bg-[#080808] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-400 mb-4">Related pages</h2>
              <ul className="flex flex-wrap gap-4">
                {relatedLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="inline-block px-5 py-2 rounded-full border border-white/15 text-sm text-gray-300 hover:border-yellow-400/50 hover:text-yellow-400 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-yellow-400 rounded-[2.5rem] p-12 md:p-16 text-center text-black shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase leading-tight">
                Discuss your plant requirements
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrimaryCTA className="!bg-black !text-white !px-10 !py-4" />
                <SecondaryCTA className="!border-black/30 !text-black !px-10 !py-4" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
