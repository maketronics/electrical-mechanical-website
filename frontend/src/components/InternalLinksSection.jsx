import { Link } from 'react-router-dom';
import { getLinksForPath } from '../utils/internalLinkGraph';

const InternalLinksSection = ({ sourcePath }) => {
  const links = getLinksForPath(sourcePath);
  if (!links.length) return null;

  return (
    <section className="py-12 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-400 mb-6">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.url}
              to={link.url}
              className="text-[11px] font-bold uppercase tracking-wider text-gray-300 hover:text-white border border-white/15 hover:border-yellow-400/50 bg-[#0f0f0f] px-4 py-2 rounded-md transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinksSection;
