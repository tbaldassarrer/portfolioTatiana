import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      const servicesSection = document.getElementById('servicios');
      const startPoint = servicesSection
        ? servicesSection.offsetTop - 160
        : window.innerHeight * 0.8;

      setIsVisible(window.scrollY >= startPoint);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    updateVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={isVisible ? 'scroll-to-top visible' : 'scroll-to-top'}
      type="button"
      aria-label="Volver arriba"
      onClick={scrollToTop}
    >
      Volver arriba
    </button>
  );
}
