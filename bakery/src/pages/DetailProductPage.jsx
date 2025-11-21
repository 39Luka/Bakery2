import { useParams } from "react-router-dom";
import { productos } from "../data/productos.js";

/**
 * DetailProductPage - Página de detalle de producto individual
 * Muestra información completa, imagen y acciones de un producto específico
 * Estructura semántica: article > section + figure (2 columnas en desktop)
 * Accesibilidad: aria-labels, role="region", figcaption, tabindex, keyboard navigation
 * Responsive: 1 columna (móvil) → 2 (md+)
 */
function DetailProductPage() {
  const { id } = useParams();
  const producto = productos.find((prod) => prod.id === parseInt(id));

  // Manejo de producto no encontrado
  if (!producto) {
    return (
      <section
        aria-label="Producto no encontrado"
        className="max-w-6xl mx-auto px-4 py-12"
        role="alert"
      >
        {/* Encabezado de error con semántica clara */}
        <h1 className="heading-base heading-h1 text-(--color-error)">
          Producto no encontrado
        </h1>

        {/* Mensaje descriptivo */}
        <p className="text-base text-normal text-(--color-grey-2) mt-4">
          Lo sentimos, el producto que buscas no existe.
        </p>
      </section>
    );
  }

  return (
    <article
      className="max-w-6xl mx-auto px-4 py-12"
      aria-label={`Detalle del producto: ${producto.nombre}`}
    >
      {/* Contenedor grid 2 columnas: contenido (izq) + imagen (der)
          grid-cols-2 solo en md+; mobile: stack vertical */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        role="presentation"
      >
        {/* === SECCIÓN 1: CONTENIDO DEL PRODUCTO (Izquierda) === */}
        <section className="flex flex-col gap-6 order-2 md:order-1">
          {/* Header semántico: h2 para nombre, h3 para categoría */}
          <header>
            {/* Título del producto: responsive (text-lg → lg:text-3xl) */}
            <h2 className="heading-base heading-h2 text-(--color-primary) mb-1 text-lg md:text-2xl lg:text-3xl">
              {producto.nombre}
            </h2>

            {/* Categoría: h3 secundario en gris para distinguir */}
            <h3 className="heading-base heading-h3 text-(--color-grey-2) text-sm md:text-base">
              {producto.categoria}
            </h3>
          </header>

          {/* Región de precio: role="region" + aria-label para indicar a lectores de pantalla
              Formato: .toFixed(2) asegura 2 decimales siempre */}
          <p
            className="text-base md:text-lg lg:text-xl text-(--color-primary) font-semibold"
            role="region"
            aria-label="Información de precio"
            aria-live="polite"
          >
            {Number(producto.precio).toFixed(2)}€
          </p>

          {/* Descripción: párrafo con leading-relaxed para legibilidad */}
          <p className="text-sm md:text-base text-normal text-(--color-grey-1) leading-relaxed">
            {producto.descripcion}
          </p>

          {/* Grupo de acciones: div con role="group" para agrupar controles relacionados */}
          <div
            className="flex gap-4 pt-4"
            role="group"
            aria-label="Acciones disponibles para el producto"
          >
            {/* Botón de carrito: aria-label descriptivo */}
            <button
              className="px-6 py-3 bg-(--color-primary) text-white rounded-lg font-semibold hover:bg-(--color-secondary) hover:text-(--color-primary) transition-colors duration-300"
              aria-label={`Añadir ${producto.nombre} al carrito`}
              tabIndex={0}
            >
              Añadir al carrito
            </button>
          </div>
        </section>

        {/* === SECCIÓN 2: IMAGEN DEL PRODUCTO (Derecha) === */}
        <figure className="flex justify-center order-1 md:order-2">
          {/* Imagen: responsive height (h-48 → lg:h-96)
              object-cover mantiene relación aspecto sin distorsión
              alt text descriptivo para accesibilidad */}
          <img
            src={producto.imagen}
            alt={`Imagen del producto ${producto.nombre}`}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
            loading="lazy"
            tabIndex={0}
          />

          {/* Figcaption: oculto visualmente pero disponible para lectores de pantalla
              sr-only (screen-reader-only) proporciona contexto adicional */}
          <figcaption className="sr-only">
            Imagen principal del producto {producto.nombre}
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

export default DetailProductPage;