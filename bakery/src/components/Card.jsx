// components/Card.jsx
/**
 * Card component
 *
 * Componente que muestra un producto en formato tarjeta con:
 * - Imagen del producto
 * - Nombre del producto
 * - Descripción
 *
 * Incluye accesibilidad mediante `aria-label`, `alt` y tabIndex.
 *
 * @component
 * @param {Object} props
 * @param {string} props.nombre - Nombre del producto.
 * @param {string} props.descripcion - Descripción del producto.
 * @param {string} props.imagen - URL de la imagen del producto.
 * @returns {JSX.Element} Tarjeta renderizada con imagen, nombre y descripción.
 */
function Card({ nombre, descripcion, imagen }) {
  return (
    <article
      tabIndex={0} // Permite que la tarjeta sea enfocada con teclado
      aria-label={`Producto: ${nombre}. ${descripcion}`} // Lector de pantalla lee nombre + descripción
      className="w-full bg-white rounded-xl shadow-lg flex flex-col h-full"
    >
      <figure>
        {/* Imagen del producto con texto alternativo */}
        <img
          src={imagen}
          alt={nombre} // Alt descriptivo para lectores de pantalla
          className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover rounded-t-xl"
        />
        {/* Información textual del producto */}
        <figcaption className="p-4">
          <h3 className="text-sm sm:text-base md:text-lg heading-base heading-h3 text-(--color-primary) mb-1">
            {nombre} {/* Nombre del producto */}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-medium text-(--color-grey-2) pt-1">
            {descripcion} {/* Descripción del producto */}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export default Card;
