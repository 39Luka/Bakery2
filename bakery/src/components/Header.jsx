import Nav from "./Nav.jsx";

/**
 * Header - Encabezado principal de la aplicación
 * Contiene el logo/título y la navegación
 */
function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-md bg-(--color-secondary) flex items-center justify-between p-8"
      aria-label="Encabezado principal"
    >
      {/* Logo/Título del sitio */}
      <h1 className="text-base heading-base heading-h1 text-(--color-primary)">
        Bakery++
      </h1>

      {/* Navegación principal */}
      <Nav />
    </header>
  );
}

export default Header;
