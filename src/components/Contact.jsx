import BotanicalDecor from './BotanicalDecor.jsx';

const contactLinks = [
  {
    label: 'Email',
    value: 'tbaldassarrer@gmail.com',
    href: 'mailto:tbaldassarrer@gmail.com',
  },
  {
    label: 'WhatsApp',
    value: '+34 630 814 710',
    href: 'https://wa.me/34630814710',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tatiana-baldassarre-03479221b',
    href: 'https://www.linkedin.com/in/tatiana-baldassarre-03479221b/',
  },
  {
    label: 'GitHub',
    value: 'github.com/tbaldassarrer',
    href: 'https://github.com/tbaldassarrer',
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="section contact-section">
      <BotanicalDecor className="botanical-contact-left" variant="bloom" />
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Contacto</p>
          <h2>¿Tienes un negocio o proyecto en mente? Hablemos.</h2>
          <p>
            Puedo ayudarte a crear una web profesional, mejorar una existente o convertir una idea en una
            interfaz funcional, cuidada y responsive.
          </p>
          <a className="btn btn-primary" href="https://wa.me/34630814710" target="_blank" rel="noreferrer">
            Contactar ahora
          </a>
        </div>
        <div className="contact-card">
          {contactLinks.map((link) => {
            const isExternal = link.href.startsWith('http');

            return (
              <a
                className="contact-item"
                href={link.href}
                key={link.label}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
              >
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
