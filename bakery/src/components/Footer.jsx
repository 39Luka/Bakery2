/**
 * Footer - Pie de página semántico
 * Estructura: footer > div (contenedor)
 * Accesibilidad: elemento footer semántico, aria-label para contexto
 * Estilos: color secundario fondo, ancho completo, posición flexible
 */
function Footer() {
  return (
    <footer
      className="bg-(--color-secondary) text-(--color-primary) text-base py-6 w-full"
      aria-label="Pie de página"
    >
      {/* Contenedor: ancho máximo, centrado automático con mx-auto */}
      <div className="container mx-auto text-center">
        {/* Texto de copyright */}
        © 2025 Mi Sitio
      </div>
    </footer>
  );
}

export default Footer;
