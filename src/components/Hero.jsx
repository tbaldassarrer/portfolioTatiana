export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <p className="eyebrow">Hola, soy Tatiana</p>
        <h1>
          Desarrollo webs modernas para <em>negocios y profesionales</em>
        </h1>
        <p className="hero-subtitle">
          Creo interfaces cuidadas, responsivas y funcionales con React, JavaScript y Spring Boot.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="https://wa.me/34630814710" target="_blank" rel="noreferrer">
            Hablemos por WhatsApp
          </a>
          <a className="btn btn-secondary" href="#proyectos">
            Ver proyectos <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
