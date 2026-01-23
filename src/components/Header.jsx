import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PrimaryCTA from './PrimaryCTA';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
          ? 'bg-black border-b border-gray-800'
          : 'bg-black'
      }`}
    >
      {/* Container is w-full to ensure it hits the edges of the screen */}
      <div className="w-full px-8"> 
        <div className="flex items-center justify-between h-20">

          {/* 1. LOGO — PUSHED TO THE FAR LEFT */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-black tracking-tighter text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              MAKETRONICS
            </Link>
          </div>

          {/* 2. RIGHT SIDE CONTAINER (Nav + CTA) */}
          <div className="hidden lg:flex items-center">
            
            {/* NAV LINKS */}
            <nav className="flex items-center space-x-10 mr-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                    location.pathname === link.href
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {link.name}
                </Link>
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