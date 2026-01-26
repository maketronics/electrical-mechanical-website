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
    href === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur border-b border-gray-800'
          : 'bg-black'
      }`}
    >
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            MAKETRONICS
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-8 mr-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`relative text-[11px] font-semibold uppercase tracking-widest transition-colors ${
                    isActive(link.href)
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <PrimaryCTA />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors"
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
