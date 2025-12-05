import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <main
      className="flex-1 mx-auto pt-36 pb-15"
      id="main-content" // ID usado para enlaces de accesibilidad ("skip link")
      tabIndex={-1} // Permite que el main reciba foco programáticamente
    >
      {/* Renderiza las rutas hijas definidas en App.jsx */}
      <Outlet />
    </main>
  );
}

export default MainContent;
