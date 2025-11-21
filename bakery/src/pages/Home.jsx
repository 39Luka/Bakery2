import Seccion from "../components/Seccion";
import { productos } from "../data/productos";
import RenderCards from "../components/RenderCards.jsx";
import Banner from "../components/Banner.jsx";

/**
 * Home - Página de inicio
 * Muestra banner hero + sección de top ventas (productos más vendidos)
 * Estructura: Banner + Seccion > ul > RenderCards
 * Accesibilidad: aria-labelledby en Seccion, semantic elements, responsive grid
 */
function Home() {
  return (
    <>
      {/* Banner hero con imagen, título y descripción
          Componente reutilizable con sección semántica */}
      <Banner
        imagen="https://i.ibb.co/BHkPNrcv/pan-rustico.jpg"
        titulo="Bienvenido a Bakery++"
        contenido="Descubre nuestros productos frescos y artesanales cada día"
      />

      {/* Seccion: contenedor con h2 "Top Ventas" y grid de productos
          Ordena productos por totalVentas (mayor primero)
          Limita a 8 items máximo */}
      <Seccion titulo="Top Ventas">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-stretch items-stretch"
          aria-label="Productos más vendidos"
          role="list"
        >
          {/* RenderCards con opciones:
              maxItems: 8 (mostrar solo 8 productos)
              order: función sort por totalVentas descendente */}
          <RenderCards
            elementos={productos}
            options={{
              maxItems: 8,
              order: (a, b) => b.totalVentas - a.totalVentas,
            }}
          />
        </ul>
      </Seccion>
    </>
  );
}

export default Home;