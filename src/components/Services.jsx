import { useState } from 'react';
import BotanicalDecor from './BotanicalDecor.jsx';

const services = [
  {
    title: 'Webs para pequeños negocios',
    description: 'Sitios web profesionales que transmiten confianza y ayudan a atraer clientes.',
  },
  {
    title: 'Landing pages',
    description: 'Páginas enfocadas en un objetivo claro: captar atención y convertir visitas.',
  },
  {
    title: 'Portfolios personales',
    description: 'Diseños que destacan tu trabajo y cuentan tu historia de forma única.',
  },
  {
    title: 'Blogs y secciones administrables',
    description: 'Gestión de contenido sencilla para que puedas actualizar tu web sin complicaciones.',
  },
  {
    title: 'Mantenimiento y mejoras web',
    description: 'Actualizaciones, optimización y soporte para que tu web funcione con solidez.',
  },
  {
    title: 'Responsive design',
    description: 'Diseños adaptados a todos los dispositivos con una experiencia cuidada.',
  },
];

export default function Services() {
  const [openService, setOpenService] = useState(null);

  const toggleService = (index) => {
    setOpenService((current) => (current === index ? null : index));
  };

  return (
    <section id="servicios" className="section services-section">
      <BotanicalDecor className="botanical-services-right" variant="bloom" />
      <div className="container">
        <div className="section-heading services-heading">
          <p className="eyebrow">Servicios</p>
          <h2>Soluciones web claras, cuidadas y adaptadas a cada proyecto</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className={openService === index ? 'service-card open' : 'service-card'} key={service.title}>
              <button
                className="service-summary"
                type="button"
                aria-expanded={openService === index}
                onClick={() => toggleService(index)}
              >
                <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="service-icon" aria-hidden="true" />
                <h3>{service.title}</h3>
              </button>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
