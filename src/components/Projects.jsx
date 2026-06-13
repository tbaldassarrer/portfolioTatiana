import { useState } from 'react';
import { projects } from '../data/projects.js';
import hojaProjects from '../assets/fondos/hoja2.png';
import ImageLightbox from './ImageLightbox.jsx';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectImage = (project) => {
    if (project.image) {
      setSelectedProject(project);
    }
  };

  return (
    <section id="proyectos" className="section section-soft projects-section">
      <img className="leaf-decor leaf-decor-projects" src={hojaProjects} alt="" aria-hidden="true" />
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Proyectos reales</p>
            <h2>Casos de estudio con foco en interfaz, claridad y experiencia</h2>
          </div>
          <p>
            Una selección de proyectos donde la captura visual, la estructura y el detalle frontend son parte
            central del resultado.
          </p>
        </div>
        <div className="cards-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${project.image ? 'clickable-card' : ''}`}
              key={project.title}
              role={project.image ? 'button' : undefined}
              tabIndex={project.image ? 0 : undefined}
              onClick={() => openProjectImage(project)}
              onKeyDown={(event) => {
                if ((event.key === 'Enter' || event.key === ' ') && project.image) {
                  event.preventDefault();
                  openProjectImage(project);
                }
              }}
            >
              <div className={project.image ? 'image-frame' : 'image-placeholder image-placeholder-blank'}>
                {project.image ? (
                  <img src={project.image} alt={`Captura de ${project.title}`} loading="lazy" />
                ) : (
                  <span>Imagen pendiente</span>
                )}
              </div>
              <div className="card-body">
                <span className="case-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list" aria-label={`Tecnologías usadas en ${project.title}`}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <a
                    className="text-link"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ImageLightbox
        image={selectedProject?.image}
        title={selectedProject ? `Captura de ${selectedProject.title}` : ''}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
