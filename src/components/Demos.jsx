import { useState } from 'react';
import { demos } from '../data/demos.js';
import BotanicalDecor from './BotanicalDecor.jsx';
import ImageLightbox from './ImageLightbox.jsx';

export default function Demos() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  return (
    <section id="demos" className="section demos-section">
      <BotanicalDecor className="botanical-demos-left" variant="sprig" />
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Demos conceptuales</p>
            <h2>Ejemplos visuales para negocios locales</h2>
          </div>
          <p>
            Propuestas ficticias para mostrar cómo podría verse una web profesional orientada a captación y confianza.
          </p>
        </div>
        <div className="cards-grid demos-grid">
          {demos.map((demo, index) => (
            <article
              className="demo-card clickable-card"
              key={demo.title}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedDemo(demo)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedDemo(demo);
                }
              }}
            >
              <div className="image-frame image-frame-small">
                <img src={demo.image} alt={`Demo conceptual: ${demo.title}`} loading="lazy" />
              </div>
              <div className="card-body">
                <div className="demo-meta">
                  <p className="demo-label">Ejemplo conceptual</p>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{demo.title}</h3>
                <p>{demo.description}</p>
                <ul className="feature-list">
                  {demo.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ImageLightbox
        image={selectedDemo?.image}
        title={selectedDemo ? `Demo conceptual: ${selectedDemo.title}` : ''}
        onClose={() => setSelectedDemo(null)}
      />
    </section>
  );
}
