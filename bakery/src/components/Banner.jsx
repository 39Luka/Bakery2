/**
 * Banner - Sección hero con imagen y texto superpuesto
 * Estructura semántica: section > figure > img + figcaption (overlay) + header (texto)
 * Accesibilidad: imagen con alt text, overlay mejora contraste, tabindex para enfoque
 */
function Banner({ imagen, titulo, contenido }) {
  return (
    <section
      className="relative w-full mx-auto my-8 px-4 sm:px-6 md:px-8"
      aria-label={`Banner: ${titulo}`}
      tabIndex={0}
      role="region"
    >
      {/* Figure: contenedor semántico para imagen con contexto */}
      <figure className="relative rounded-lg shadow-lg overflow-hidden aspect-video sm:aspect-auto sm:h-80 md:h-96">
        {/* Imagen: img con alt text descriptivo para lectores de pantalla */}
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Figcaption: overlay con gradiente oscuro (from-black/30 via-black/50 to-black/70)
            Mejora el contraste del texto blanco superpuesto, mejorando legibilidad para todos */}
        <figcaption className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/70 rounded-lg"></figcaption>

        {/* Header: contenedor posicionado absolutamente sobre la imagen
            Contiene h1 (título) y p (descripción) - semánticamente correcto */}
        <header className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 sm:px-8">
          {/* Título: h1 responsivo (texto-lg → lg:texto-4xl) con sombra para legibilidad */}
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl heading-base heading-h1 text-bold mb-2 drop-shadow-2xl">
            {titulo}
          </h1>

          {/* Párrafo descriptivo: texto responsivo con sombra para mejor contraste */}
          <p className="text-sm sm:text-base md:text-lg text-large drop-shadow-2xl">
            {contenido}
          </p>
        </header>
      </figure>
    </section>
  );
}

export default Banner;
