import Seccion from "../components/Seccion.jsx";
import { productos } from "../data/productos.js";
import RenderCards from "../components/RenderCards.jsx";
import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar.jsx";
/**
 * ProductsPage - Página de listado de productos
 * Muestra todos los productos en una cuadrícula responsiva
 * Estructura: Seccion (section semántica) > ul (grid) > li (items)
 * Accesibilidad: grid responsivo, aria-label en ul, semantic HTML
 * Responsive: 1 columna (móvil) → 2 (sm) → 3 (md) → 4 (lg)
 */
function ProductsPage() {


  const [searchTerm, setSearchTerm] = useState("");

  const filteredProductos = useMemo(() => {
    if (!searchTerm) {
      return productos;
      // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productos.filter((producto) =>
      // Filtra por el nombre de la película
      producto.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);



  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar producto por nombre..."
      />

      {/* Seccion: contenedor semántico con h2 de título */}
      <Seccion titulo="Nuestros Productos">
        {/* ul: contenedor grid responsivo con gap consistente
            grid-cols-1 (móvil: 1 col)
            sm:grid-cols-2 (640px: 2 cols)
            md:grid-cols-3 (768px: 3 cols)
            lg:grid-cols-4 (1024px: 4 cols)
            gap-8: espaciado consistente
            justify-items-stretch / items-stretch: tarjetas llenan espacio
        */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-stretch items-stretch"
          aria-label="Catálogo de productos"
          role="list"
        >
          {/* RenderCards: mapea array de productos en items li con tarjetas */}
          <RenderCards elementos={filteredProductos} />
        </ul>
      </Seccion>
    </>
  );
}

export default ProductsPage;