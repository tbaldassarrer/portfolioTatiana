import { useEffect } from 'react';

export default function ImageLightbox({ image, title, onClose }) {
  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close" type="button" aria-label="Cerrar imagen" onClick={onClose}>
          ×
        </button>
        <img src={image} alt={title} />
      </div>
    </div>
  );
}
