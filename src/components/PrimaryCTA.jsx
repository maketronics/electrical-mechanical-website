const PrimaryCTA = ({ text = 'Request a System Consultation', href = '/contact', className = '' }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center min-h-[44px] bg-yellow-400 text-gray-900 font-semibold px-6 py-2.5 rounded-md hover:bg-yellow-300 transition-colors text-sm ${className}`}
    >
      {text}
    </a>
  );
};

export default PrimaryCTA;

