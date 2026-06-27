import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const isFaqHeading = (text = '') => text.trim().toLowerCase().startsWith('faq');

const PageUiEnhancer = () => {
  const location = useLocation();

  useEffect(() => {
    const cleanupFns = [];
    const sections = Array.from(document.querySelectorAll('main section'));

    sections.forEach((section) => {
      const h2 = section.querySelector('h2');
      if (!h2 || !isFaqHeading(h2.textContent || '')) return;

      const items = Array.from(section.querySelectorAll('article'));
      if (!items.length) return;

      items.forEach((article, idx) => {
        article.classList.add('faq-accordion-item');
        if (idx === 0) article.classList.add('is-open');

        const trigger = article.querySelector('h3');
        if (!trigger) return;

        trigger.classList.add('faq-accordion-trigger');
        trigger.setAttribute('role', 'button');
        trigger.setAttribute('tabindex', '0');
        trigger.setAttribute('aria-expanded', idx === 0 ? 'true' : 'false');

        const onToggle = () => {
          const currentlyOpen = article.classList.contains('is-open');
          items.forEach((a) => {
            a.classList.remove('is-open');
            const h = a.querySelector('h3');
            if (h) h.setAttribute('aria-expanded', 'false');
          });
          if (!currentlyOpen) {
            article.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
          }
        };

        const onKeyDown = (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onToggle();
          }
        };

        trigger.addEventListener('click', onToggle);
        trigger.addEventListener('keydown', onKeyDown);
        cleanupFns.push(() => {
          trigger.removeEventListener('click', onToggle);
          trigger.removeEventListener('keydown', onKeyDown);
        });
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, [location.pathname]);

  return null;
};

export default PageUiEnhancer;
