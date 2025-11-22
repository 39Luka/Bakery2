import Seccion from "../components/Seccion.jsx";
import { productos } from "../data/productos.js";
import RenderCards from "../components/RenderCards.jsx";

function ProductsPage() {
  return (
    <>
      {/* Sección de productos */}
      <Seccion titulo="Nuestros Productos">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-stretch items-stretch">
          <RenderCards elementos={productos} />
        </ul>
      </Seccion>
    </>
  );
}

export default ProductsPage;
