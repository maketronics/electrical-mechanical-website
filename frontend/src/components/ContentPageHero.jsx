const HERO_BACKGROUNDS = {
  mechanical:
    "linear-gradient(to right, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.4) 100%), url('/Mechanical.png')",
  electrical:
    "linear-gradient(to right, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.4) 100%), url('/elec.png')",
};

/**
 * Service-page hero aligned with MechanicalSystems / ElectricalAutomation hubs (bg image, gradient, badge strip).
 */
const ContentPageHero = ({ variant = 'mechanical', badge, children }) => {
  const backgroundImage = HERO_BACKGROUNDS[variant] ?? HERO_BACKGROUNDS.mechanical;

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12 pb-24">
        {badge ? (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
            </span>
            {badge}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
};

export default ContentPageHero;
