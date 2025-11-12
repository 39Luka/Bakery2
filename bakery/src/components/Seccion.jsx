/**
 * Componente genérico que muestra una lista de elementos usando otro componente.
 * Si se pasa una función `filtro`, solo muestra los elementos que la cumplan.
 *
 * @param {string} titulo - Título de la sección.
 * @param {Array} elementos - Lista de objetos que se mostrarán.
 * @param {React.ComponentType} Componente - Componente que renderiza cada elemento.
 * @param {Function} [filtro] - (Opcional) Función que recibe cada elemento y devuelve true/false.
 */

import { useId } from "react";

function Seccion({ titulo, elementos, Componente, filtro }) {

  // Si se pasa una función de filtro, la aplica. Si no, usa todos los elementos.(Opcional)
  const lista = filtro ? elementos.filter(filtro) : elementos;
  // Se genera un id único
  const idTitulo = useId()

  return (

    <>
    <section 
     aria-labelledby={idTitulo}
     className="max-w-7xl mx-auto py-6 px-4">

      <header className="text-center mb-8 mt-6">
        <h2 id={idTitulo} className="text-base heading-base heading-h2">{titulo}</h2>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-stretch">
        {lista.map((item, index) => (
          <li key={index}>
            <Componente {...item} />{/* Pasa todas las propiedades del objeto 'item' como props 
                                      al componente. Si el componente no usa alguna, React la 
                                      ignora sin error. */}
          </li>
        ))}
      </ul>


    </section>
    </>
  );
}
export default Seccion;
