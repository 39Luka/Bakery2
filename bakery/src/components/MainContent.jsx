import { Outlet } from "react-router-dom";

/**
 * MainContent - Contenedor semántico principal de contenido
 * Estructura: main con Outlet (React Router) para renderizar rutas
 * Accesibilidad: role="main", id para referencia, tabIndex={-1} para skip link
 * Estilos: flex-1 (crece), pt-36 (debajo del header fijo), pb-15 (arriba del footer)
 */
function MainContent() {
  return (
    <main
      className="flex-1 mx-auto pt-36 pb-15"
      id="main-content"
      role="main"
      tabIndex={-1}
      aria-label="Contenido principal"
    >
      {/* Outlet: punto de renderización de componentes de ruta
          Cada página (Home, ProductsPage, DetailProductPage) se renderiza aquí */}
      <Outlet />
    </main>
  );
}

export default MainContent;
