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

  const navItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Mechanical',
      href: '/services/mechanical-systems/',
      dropdown: [
        { name: 'Mechanical hub', href: '/services/mechanical-systems/' },
        { name: 'Jaw station integration', href: '/jaw-station-integration/' },
        { name: 'Crusher station fabrication', href: '/crusher-station-fabrication/' },
        { name: 'Cone crusher structural mounting', href: '/cone-crusher-structural-mounting/' },
        { name: 'Vibrating screen fabrication', href: '/vibrating-screen-fabrication/' },
        { name: 'Mining conveyor system design', href: '/mining-conveyor-system-design/' },
        { name: 'Wear protection systems', href: '/wear-protection-systems/' },
        { name: 'Crusher discharge chute', href: '/crusher-discharge-chute-engineering/' },
      ],
    },
    {
      name: 'Electrical',
      href: '/services/electrical-automation/',
      dropdown: [
        { name: 'Electrical hub', href: '/services/electrical-automation/' },
        { name: 'Plant electrical integration', href: '/crushing-plant-electrical-integration/' },
        { name: 'MCC panel fabrication', href: '/mcc-panel-fabrication-mining/' },
        { name: 'PLC programming quarry plants', href: '/plc-programming-quarry-plants/' },
        { name: 'Industrial control panels', href: '/industrial-control-panels-mining/' },
        { name: 'VFD systems conveyors', href: '/vfd-systems-conveyors/' },
      ],
    },
    {
      name: 'Industry',
      href: '/industries/',
      dropdown: [
        { name: 'Industries hub', href: '/industries/' },
        { name: 'GCC hard rock processing', href: '/gcc-hard-rock-processing/' },
        { name: 'Vietnam quarry integration', href: '/vietnam-quarry-plant-integration/' },
        { name: 'Indonesia mining conveyors', href: '/indonesia-mining-conveyor-integration/' },
        { name: 'South Africa crushing plant', href: '/south-africa-crushing-plant-engineering/' },
        { name: 'Bulk material handling', href: '/bulk-material-handling-system-integrator/' },
      ],
    },
    {
      name: 'Approach',
      href: '/approach/',
      dropdown: [
        { name: 'Approach hub', href: '/approach/' },
        { name: 'Independent system integrator', href: '/independent-system-integrator/' },
        { name: 'Mobile crushing integration', href: '/mobile-crushing-plant-integration/' },
        { name: 'Commissioning Middle East', href: '/crushing-plant-commissioning-middle-east/' },
        { name: 'Screening plant engineering', href: '/screening-plant-engineering-company/' },
      ],
    },
    {
      name: 'Why Us',
      href: '/why-maketronics/',
    },
  ];

  const normalizePath = (path) => (path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path);

  const isActive = (href) => {
    const current = normalizePath(location.pathname);
    const target = normalizePath(href);
    return target === '/' ? current === '/' : current.startsWith(target);
  };

  const isGroupActive = (item) =>
    item.dropdown?.length ? item.dropdown.some((entry) => isActive(entry.href)) : isActive(item.href);

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
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`relative text-[10px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap py-1 ${
                    isGroupActive(item) ? 'text-yellow-400' : 'text-gray-400 group-hover:text-white'
                  }`}
                >
                  {item.name}
                  {isGroupActive(item) && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-yellow-400" />
                  )}
                </Link>

                {item.dropdown?.length ? (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 top-full pt-3 z-50 min-w-[260px]">
                    <div className="bg-black/95 border border-white/10 rounded-md shadow-xl py-2">
                      {item.dropdown.map((entry) => (
                        <Link
                          key={entry.name}
                          to={entry.href}
                          className={`block px-4 py-2 text-[11px] leading-4 transition-colors ${
                            isActive(entry.href) ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          {entry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
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