import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/productos", label: "Productos" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-base text-bold rounded-md ${
      isActive
        ? "text-(--color-primary)"
        : "text-black hover:text-(--color-primary)"
    }`;

  return (
    <nav className="relative">
      {/* Botón para abrir/cerrar menú móvil */}
      <button
        onClick={toggleMenu}
        className="text-2xl text-(--color-primary) px-2 py-1 rounded md:hidden"
        aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <ul className="fixed top-20 left-0 w-full bg-(--color-secondary) z-50 flex flex-col gap-4 p-6 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* Menú de escritorio */}
      <ul className="hidden md:flex gap-6">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
