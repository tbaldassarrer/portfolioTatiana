export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Tatiana Baldassarre. Todos los derechos reservados.</p>
        <a href="#inicio">Volver arriba</a>
      </div>
    </footer>
  );
}
