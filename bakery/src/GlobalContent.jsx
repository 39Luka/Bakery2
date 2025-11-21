import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/styles/index.css";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

/**
 * Skip Link + App wrapper
 * Renderiza la aplicación con BrowserRouter y StrictMode
 * 
 * Skip Link (a#skip-to-main):
 * - Oculto por defecto (sr-only)
 * - Visible y enfocado al navegar con Tab (focus:not-sr-only)
 * - Permite saltar directo al contenido principal (#main-content)
 * - Mejora accesibilidad para navegación por teclado
 */
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* Skip Link: enlace oculto que salta al contenido principal
          sr-only: oculto visualmente pero disponible para lectores de pantalla
          focus:not-sr-only: se muestra cuando recibe foco (Tab)
          z-50: por encima de otros elementos */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 
        focus:left-4 bg-(--color-primary) text-white px-4 py-2 rounded z-50"
        role="doc-link"
        aria-label="Saltar al contenido principal"
      >
        Contenido principal de la página
      </a>

      {/* App: componente raíz de la aplicación */}
      <App />
    </StrictMode>
  </BrowserRouter>
)
