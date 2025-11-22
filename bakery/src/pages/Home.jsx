// pages/Home.jsx
import Seccion from "../components/Seccion";
import { productos } from "../data/productos";
import RenderCards from "../components/RenderCards.jsx";
import Banner from "../components/Banner.jsx";

/**
 * Home component
 *
 * Página de inicio con:
 * - Banner de bienvenida.
 * - Sección "Top Ventas" con tarjetas de productos más vendidos.
 *
 * @component
 * @returns {JSX.Element} Página de inicio accesible.
 */
function Home() {
  return (
    <>
      {/* Banner de bienvenida */}
      <Banner
        imagen="https://i.ibb.co/BHkPNrcv/pan-rustico.jpg"
        titulo="Bienvenido a Bakery++"
        contenido="Descubre nuestros productos frescos y artesanales cada día"
      />

      {/* Sección Top Ventas */}
      <Seccion titulo="Top Ventas">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-stretch items-stretch"
          aria-label="Productos más vendidos" // Lista accesible para lectores de pantalla
        >
          <RenderCards
            elementos={productos}
            options={{
              maxItems: 8, // Limitar a los 8 productos más vendidos
              order: (a, b) => b.totalVentas - a.totalVentas, // Orden descendente
            }}
          />
        </ul>
      </Seccion>
    </>
  );
}

export default Home;
