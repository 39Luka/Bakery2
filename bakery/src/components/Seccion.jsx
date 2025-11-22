// components/Seccion.jsx

/**
 * Seccion component
 *
 * Representa una sección de contenido con título.
 * Incluye accesibilidad mediante `role="region"` y `aria-labelledby`.
 *
 * @component
 * @param {Object} props
 * @param {string} props.titulo - Título de la sección.
 * @param {React.ReactNode} props.children - Contenido interno de la sección.
 * @returns {JSX.Element} Sección con encabezado y contenido accesible.
 */
function Seccion({ titulo, children }) {
  // Generar ID único y descriptivo a partir del título
  const id = titulo.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <section
      role="region" // Indica que es una sección relevante para lectores de pantalla
      aria-labelledby={id} // Vincula la sección con el título
      className="max-w-7xl mx-auto py-6 px-4"
    >
      <header className="text-start mb-8 mt-6">
        <h2 id={id} className="text-base heading-base heading-h2 text-(--color-primary)">
          {titulo} {/* Título de la sección */}
        </h2>
      </header>
      <div>{children}</div> {/* Contenido de la sección */}
    </section>
  );
}

export default Seccion;
