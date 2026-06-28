import Header from '../../components/Header';
import ContentPageHero from '../../components/ContentPageHero';
import Footer from '../../components/Footer';
import PrimaryCTA from '../../components/PrimaryCTA';
import InternalLinksSection from '../../components/InternalLinksSection';

export const metadata = {
  title: 'Maketronics Services',
  description:
    'Maketronics engineering capability page for mining, quarry, and aggregate integration across GCC, Africa, and Southeast Asia.',
};

const LinkedPlaceholderPage = ({ pageTitle, sourcePath }) => {
  //   title: `${pageTitle} Services | Maketronics`,
  //   h1: pageTitle,
  //   description:
  //     'Maketronics engineering capability page for mining, quarry, and aggregate integration across GCC, Africa, and Southeast Asia.',
  // });

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <Header />

      <main>
        <ContentPageHero variant="mechanical" badge="Maketronics">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tighter">
              {pageTitle}
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl font-light leading-relaxed">
              This page is routed and connected in your internal link structure. Full page content can be expanded next.
            </p>
            <PrimaryCTA />
          </div>
        </ContentPageHero>
        <InternalLinksSection sourcePath={sourcePath} />
      </main>

      <Footer />
    </div>
  );
};

export default LinkedPlaceholderPage;
