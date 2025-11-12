import Seccion from "./components/Seccion";
import "./assets/styles/index.css";
import { productos } from "./data/productos";
import Producto from "./components/Card";

function App() {
  return (
    <>
    <main id="main-content"
    role="main"
    tabIndex={-1}
    >
    <Seccion titulo="Nuestros Productos" elementos={productos} Componente={Producto}/>    
    </main>
    </>
  );
}

export default App;
