// components/RenderCards.jsx
import { Link } from "react-router-dom";
import Card from "./Card";

/**
 * RenderCards component
 *
 * Renderiza una lista de tarjetas dentro de elementos <li> para semántica correcta.
 * Cada tarjeta está enlazada a su detalle mediante React Router `Link`.
 *
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.elementos - Array de objetos con datos de productos.
 * @param {Object} [props.options] - Opciones de renderizado.
 * @param {number} [props.options.maxItems] - Número máximo de elementos a renderizar.
 * @param {Function} [props.options.order] - Función de comparación para ordenar los elementos.
 * @returns {JSX.Element[]} Lista de <li> con tarjetas accesibles.
 */
function RenderCards({ elementos, options = {} }) {
  const { maxItems, order } = options;

  let items = [...elementos];

  // Ordenar elementos si se proporciona la función
  if (order) items.sort(order);

  // Limitar cantidad de elementos si se especifica maxItems
  if (maxItems) items = items.slice(0, maxItems);

  // Renderizar cada tarjeta dentro de <li> y enlazada
  return items.map((item) => (
    <li key={item.id} className="w-full" role="listitem">
      <Link to={`/productos/${item.id}`}>
        <Card {...item} />
      </Link>
    </li>
  ));
}

export default RenderCards;
