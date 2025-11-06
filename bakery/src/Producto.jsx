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
    <article className="relative w-[286px] bg-white rounded-xl shadow-lg">
      <figure>
        <img src={imagen} alt={nombre} className="w-full h-[170px] object-cover rounded-t-xl"/>

        {/* La sobra decorativa que no se muestra al lector de pantallas*/}
        <div className="absolute w-[90%] h-[50%] top-[52%] left-[5%] bg-gray-300/60 rounded-lg blur-xl" 
             aria-hidden="true" 
             role="presentation">
        </div>

        <figcaption className="relative p-4 z-10">
          <h2 className="text-lg font-bold text-primary mb-1">{nombre}</h2>
          <p className="text-sm text-gray-600 leading-tight">{descripcion}</p>
        </figcaption>

      </figure>
    </article>
  );
}

export default Producto;
