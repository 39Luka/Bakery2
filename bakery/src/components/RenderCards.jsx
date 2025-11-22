import { Link } from "react-router-dom";
import Card from "./Card";

function RenderCards({ elementos, options = {} }) {
  const { maxItems, order } = options;

  let items = [...elementos];

  if (order) items.sort(order);
  if (maxItems) items = items.slice(0, maxItems);

 return items.map((item) => (
  <li key={item.id} className="w-full">
    <Link
      to={`/productos/${item.id}`}
      aria-label={`Ver detalles del producto ${item.nombre}`}
    >
      <Card {...item} />
    </Link>
  </li>
));

}

export default RenderCards;
