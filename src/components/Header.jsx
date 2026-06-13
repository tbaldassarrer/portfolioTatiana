import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Proyectos', href: '#proyectos', id: 'proyectos' },
  { label: 'Demos', href: '#demos', id: 'demos' },
  { label: 'Sobre mí', href: '#sobre-mi', id: 'sobre-mi' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToHome = (event) => {
    event.preventDefault();
    setActiveSection('inicio');
    setIsMenuOpen(false);
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (item) => {
    setActiveSection(item.id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const activationLine = 130;
      const currentSection = navItems.reduce((current, item) => {
        const section = document.getElementById(item.id);

        if (!section) {
          return current;
        }

        const top = section.getBoundingClientRect().top;
        return top <= activationLine ? item.id : current;
      }, 'inicio');

      setActiveSection(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const closeMenuOnDesktop = () => {
      if (window.innerWidth > 680) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeMenu);
    window.addEventListener('resize', closeMenuOnDesktop);

    return () => {
      window.removeEventListener('keydown', closeMenu);
      window.removeEventListener('resize', closeMenuOnDesktop);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={scrollToHome}>
          Tatiana Baldassarre
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="nav-links"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <div className={isMenuOpen ? 'nav-links open' : 'nav-links'} id="nav-links">
          {navItems.map((item) => {
            const isHome = item.id === 'inicio';

            return (
              <a
                className={activeSection === item.id ? 'active' : ''}
                key={item.href}
                href={item.href}
                onClick={isHome ? scrollToHome : () => handleNavClick(item)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
