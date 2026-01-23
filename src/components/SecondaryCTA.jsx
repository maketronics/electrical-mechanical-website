const SecondaryCTA = ({ text = 'Send Drawings / RFQ', href = '/contact', className = '' }) => {
  return (
    <a
      href={href}
      className={`inline-block border-2 border-yellow-400 text-yellow-400 font-semibold px-6 py-2.5 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition-colors text-sm ${className}`}
    >
      {text}
    </a>
  );
};

export default SecondaryCTA;

