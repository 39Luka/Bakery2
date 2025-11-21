/**
 * Card - Tarjeta de producto
 * Muestra un producto con imagen, nombre y descripción
 * Estructura semántica: article > figure > img + figcaption
 * Accesibilidad: tabindex para navegación por teclado, aria-label, alt text
 * 
 * @param {string} nombre - Nombre del producto
 * @param {string} descripcion - Descripción corta del producto
 * @param {string} imagen - URL de la imagen del producto
 * @returns {JSX.Element} Tarjeta de producto
 */
function Card({ nombre, descripcion, imagen }) {
  return (
    <article
      tabIndex={0}
      aria-label={`Producto: ${nombre}`}
      aria-describedby={`desc-${nombre.replace(/\s+/g, "-").toLowerCase()}`}
      className="w-full bg-white rounded-xl shadow-lg flex flex-col h-full"
    >
      {/* Figure: contenedor semántico para imagen con contexto */}
      <figure>
        {/* Imagen: responsive height (h-32 → lg:h-44), object-cover para mantener relación aspecto */}
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover rounded-t-xl"
          loading="lazy"
        />

        {/* Figcaption: contenedor semántico para título y descripción */}
        <figcaption className="p-4">
          {/* Título: h3 responsivo (text-sm → md:text-lg), color primario con énfasis visual */}
          <h3
            className="text-sm sm:text-base md:text-lg heading-base heading-h3 text-(--color-primary) mb-1"
          >
            {nombre}
          </h3>

          {/* Descripción: párrafo con id asociado a aria-describedby
              Permite lectores de pantalla conectar descripción con tarjeta */}
          <p
            id={`desc-${nombre.replace(/\s+/g, "-").toLowerCase()}`}
            className="text-xs sm:text-sm md:text-base text-medium text-(--color-grey-2) pt-1"
          >
            {descripcion}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export default Card;
