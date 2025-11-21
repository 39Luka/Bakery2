import { Link } from "react-router-dom";
import Card from "./Card";

/**
 * RenderCards - Renderizador de tarjetas de productos
 * Mapea una lista de productos en elementos li con links de navegación
 * Estructura semántica: li > Link > Card (NavLink se envuelve sin div extra)
 * Accesibilidad: Link tiene aria-label descriptivo, li elementos semánticos
 *
 * @param {Array} elementos - Lista de productos a renderizar
 * @param {Object} options - Opciones de filtrado y ordenamiento
 * @param {number} options.maxItems - Máximo número de elementos a mostrar
 * @param {Function} options.order - Función de comparación para ordenar
 * @returns {Array<JSX.Element>} Array de elementos li con tarjetas
 */
function RenderCards({ elementos, options = {} }) {
  const { maxItems, order } = options;

  // Copia del array para evitar mutaciones
  let items = [...elementos];

  // Aplicar ordenamiento si se proporciona (orden debe ser función de comparación)
  if (order) {
    items.sort(order);
  }

  // Limitar cantidad de elementos si se especifica
  if (maxItems) {
    items = items.slice(0, maxItems);
  }

  // Renderizar lista de items: cada li contiene un Link a la página de detalle
  // className="contents" en Link elimina el div wrapper innecesario
  return items.map((item) => (
    <li key={item.id} className="w-full" role="listitem">
      {/* Link navegable hacia página de detalle del producto
          aria-label proporciona contexto accesible para navegación */}
      <Link
        to={`/productos/${item.id}`}
        className="contents"
        aria-label={`Ver detalles de ${item.nombre}`}
      >
        <Card {...item} />
      </Link>
    </li>
  ));
}

export default RenderCards;
