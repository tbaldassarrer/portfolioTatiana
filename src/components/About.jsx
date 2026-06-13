import BotanicalDecor from './BotanicalDecor.jsx';

export default function About() {
  return (
    <section id="sobre-mi" className="section section-about">
      <BotanicalDecor className="botanical-about-right" variant="vine" />
      <div className="container about-grid">
        <div className="about-heading">
          <p className="eyebrow">Sobre mí</p>
          <h2>Frontend con mirada práctica, estética y funcional</h2>
        </div>
        <div className="about-copy">
          <p>
            Soy Tatiana Baldassarre, desarrolladora Frontend especializada en crear interfaces modernas,
            responsivas y fáciles de usar. Trabajo con React, JavaScript, HTML, CSS y también tengo
            conocimientos de backend con Spring Boot y MySQL.
          </p>
          <p>
            Me enfoco en construir sitios claros, mantenibles y preparados para comunicar con profesionalidad,
            tanto para perfiles personales como para negocios que necesitan una presencia digital cuidada.
          </p>
        </div>
      </div>
    </section>
  );
}
