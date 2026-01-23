import { useState, useEffect } from 'react';
import PrimaryCTA from './PrimaryCTA';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Mechanical Systems', href: '/mechanical-systems' },
    { name: 'Electrical & Automation', href: '/electrical-automation' },
    { name: 'Industries Served', href: '/industries' },
    { name: 'Execution & Support', href: '/execution-support' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur border-b border-gray-800'
          : 'bg-gray-900/90 backdrop-blur'
      }`}
    >
      {/* Container is w-full to ensure it hits the edges of the screen */}
      <div className="w-full px-8"> 
        <div className="flex items-center justify-between h-20">

          {/* 1. LOGO — PUSHED TO THE FAR LEFT */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-black tracking-tighter text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              MAKETRONICS
            </a>
          </div>

          {/* 2. RIGHT SIDE CONTAINER (Nav + CTA) */}
          <div className="hidden lg:flex items-center">
            
            {/* NAV LINKS */}
            <nav className="flex items-center space-x-10 mr-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-yellow-400 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA — PUSHED TO THE FAR RIGHT */}
            <div className="flex-shrink-0">
              <PrimaryCTA />
            </div>
          </div>

          {/* MOBILE MENU BUTTON (Only shows on mobile) */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;