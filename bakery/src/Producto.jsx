// Este componente usa props explícitas (nombre, descripcion, imagen) en lugar de children
// porque queremos que Seccion sea totalmente genérica y reutilizable con cualquier tipo de elemento.
// Así, cada componente solo recibe las props que necesita, evitando problemas si otro componente
// pasado a Seccion no espera recibir children.

/**
 * Componente Producto que muestra un artículo con imagen, nombre y descripción.
 * 
 * @param {string} nombre - Nombre del producto.
 * @param {string} descripcion - Descripción del producto.
 * @param {string} imagen - URL de la imagen del producto.
 * @returns {JSX.Element} Elemento JSX que representa un producto.
 */

function Producto({ nombre, descripcion, imagen }) {
  return (
    <article 
    tabIndex={0}
    aria-label="nombre"
    className="w-[286px] bg-[var(--color-white)] rounded-xl shadow-lg flex flex-col h-full">
      <figure>
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-[170px] object-cover rounded-t-xl"
        />
        <figcaption className="p-4">
          {/* === Título === */}
          <h3 className="text-base heading-base heading-h3 mb-1">
            {nombre}
          </h3>
          {/* === Descripción === */}
          <p className="text-base text-small text-[var(--color-grey-2)] leading-tight">
            {descripcion}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export default Producto;
