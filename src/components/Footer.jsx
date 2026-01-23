const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Mechanical Systems', href: '/mechanical-systems' },
      { name: 'Electrical & Automation', href: '/electrical-automation' },
      { name: 'Execution & Support', href: '/execution-support' },
    ],
    company: [
      { name: 'Industries Served', href: '/industries' },
      { name: 'Why Maketronics', href: '/why-maketronics' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">MAKETRONICS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Independent system solutions and integration partner for crushing & screening operations.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-gray-200 font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-gray-200 font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Maketronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

