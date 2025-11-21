/**
 * Seccion - Contenedor semántico reutilizable para secciones
 * Estructura: section > header > h2 + children
 * Accesibilidad: aria-labelledby referencia el h2 al section; useId genera id único
 * Props: titulo (string), children (JSX)
 */

import { useId } from "react";

function Seccion({ titulo, children }) {
  // Genera un id único para evitar colisiones en múltiples instancias
  const idTitulo = useId();

  return (
    <>
      {/* Section: contenedor semántico referenciado por su h2 mediante aria-labelledby
          max-w-7xl: ancho máximo 80rem (1280px)
          py-6 px-4: padding vertical 1.5rem, horizontal responsive (1rem móvil) */}
      <section
        aria-labelledby={idTitulo}
        className="max-w-7xl mx-auto py-6 px-4"
      >
        {/* Header: contenedor semántico para el título de la sección */}
        <header className="text-start mb-8 mt-6">
          {/* h2: id único vinculado a aria-labelledby del section
              Color primario, estilos de heading coherentes */}
          <h2
            id={idTitulo}
            className="text-base heading-base heading-h2 text-(--color-primary)"
          >
            {titulo}
          </h2>
        </header>

        {/* Children: contenido dinámico de la sección (típicamente una lista/grid) */}
        {children}
      </section>
    </>
  );
}

export default Seccion;
