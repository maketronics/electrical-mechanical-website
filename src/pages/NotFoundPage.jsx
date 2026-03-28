import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen flex flex-col">
      <Seo
        title="Page not found | Maketronics"
        description="The page you requested is not available. Explore our services or contact Maketronics for engineering support."
        canonicalPath="/404"
        noindex
      />
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-black mb-4">404</h1>
          <p className="text-gray-400 mb-8">This page does not exist or has moved.</p>
          <Link
            to="/"
            className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full uppercase tracking-widest text-xs"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
