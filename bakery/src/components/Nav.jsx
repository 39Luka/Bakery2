import { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * Nav - Navegación principal
 * Incluye menú móvil (hamburguesa) y menú horizontal (desktop)
 * Accesibilidad: roles, aria-labels, tabindex, navegación por teclado
 */
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Enlaces de navegación
  const links = [
    { to: "/home", label: "Home" },
    { to: "/productos", label: "Productos" },
  ];

  // Alterna visibilidad del menú móvil
  const toggleMenu = () => setIsOpen(!isOpen);

  // Estilos para enlaces activos e inactivos
  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-base text-bold rounded-md ${
      isActive
        ? "text-(--color-primary)"
        : "text-black hover:text-(--color-primary)"
    }`;

  return (
    <nav className="relative" aria-label="Navegación principal">
      {/* BOTÓN HAMBURGUESA - Solo visible en móvil */}
      <button
        onClick={toggleMenu}
        className="text-2xl text-(--color-primary) px-2 py-1 rounded md:hidden"
        aria-controls="menu-movil"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        tabIndex={0}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* MENÚ MÓVIL - Solo visible en pantallas pequeñas */}
      {isOpen && (
        <ul
          id="menu-movil"
          className="fixed top-20 left-0 w-full bg-(--color-secondary) z-50 flex flex-col gap-4 p-6 md:hidden"
          role="menu"
          aria-label="Menú de navegación móvil"
        >
          {links.map((link) => (
            <li key={link.to} role="menuitem">
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
                tabIndex={0}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* MENÚ DESKTOP - Visible en pantallas medianas+ */}
      <ul
        className="hidden md:flex gap-6"
        role="menubar"
        aria-label="Menú de navegación principal"
      >
        {links.map((link) => (
          <li key={link.to} role="menuitem">
            <NavLink to={link.to} className={linkClass} tabIndex={0}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
