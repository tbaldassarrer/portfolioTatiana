import cafeImage from '../assets/demos/demo-cafeteria.png';
import hairSalonImage from '../assets/demos/demo-peluqueria.png';
import wellnessImage from '../assets/demos/demo-bienestar.png';

export const demos = [
  {
    title: 'Web para cafetería',
    image: cafeImage,
    description:
      'Ejemplo conceptual para una cafetería local que necesita presentar su ambiente, carta y datos de contacto con claridad.',
    features: ['Carta digital', 'Horarios y ubicación', 'Reservas o WhatsApp directo'],
    demoUrl: '#',
  },
  {
    title: 'Web para peluquería',
    image: hairSalonImage,
    description:
      'Ejemplo conceptual para un salón que quiere mostrar servicios, precios, trabajos realizados y facilitar citas.',
    features: ['Listado de servicios', 'Galería de estilos', 'Reserva de cita'],
    demoUrl: '#',
  },
  {
    title: 'Web para fisioterapeuta',
    image: wellnessImage,
    description:
      'Ejemplo conceptual para un centro de bienestar que necesita explicar tratamientos y generar confianza profesional.',
    features: ['Servicios por especialidad', 'Formulario de contacto', 'Testimonios o preguntas frecuentes'],
    demoUrl: '#',
  },
];
