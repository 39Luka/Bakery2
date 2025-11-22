// pages/ProductsPage.jsx
import Seccion from "../components/Seccion.jsx";
import { productos } from "../data/productos.js";
import RenderCards from "../components/RenderCards.jsx";

/**
 * ProductsPage component
 *
 * Página con catálogo completo de productos.
 * - Sección "Nuestros Productos" con todas las tarjetas.
 *
 * @component
 * @returns {JSX.Element} Página accesible con catálogo de productos.
 */
function ProductsPage() {
  return (
    <>
      {/* Sección de productos */}
      <Seccion titulo="Nuestros Productos">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-stretch items-stretch"
          aria-label="Catálogo de productos" // Lista accesible
        >
          <RenderCards elementos={productos} />
        </ul>
      </Seccion>
    </>
  );
}

export default ProductsPage;
