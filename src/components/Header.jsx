import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PrimaryCTA from './PrimaryCTA';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
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
    { name: 'Why Maketronics', href: '/why-maketronics' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-black'
      }`}
    >
      <div className="w-full px-6 lg:px-10">
        <div className="flex items-center h-[72px]">
          
          {/* LOGO - Far left */}
          <div className="shrink-0">
            <Link
              to="/"
              className="block"
            >
              <img 
                src="/logomain.png" 
                alt="MAKETRONICS" 
                className="h-8 w-60"
              />
            </Link>
          </div>

          {/* NAV - ml-auto here pushes the links and CTA to the right together */}
          <nav className="hidden xl:flex items-center ml-auto gap-5 mr-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-[10px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap py-1 ${
                  isActive(link.href) ? 'text-yellow-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-yellow-400" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA - Now sits immediately after the Nav links */}
          <div className="hidden xl:block shrink-0">
            <PrimaryCTA />
          </div>

          {/* MOBILE BUTTON */}
          <button className="xl:hidden ml-auto p-2 text-gray-300">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;