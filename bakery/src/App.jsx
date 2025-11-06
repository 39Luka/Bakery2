import Seccion from "./Seccion";
import "./styles/index.css";
import { productos } from "./data/productos";
import Producto from "./Producto";

function App() {
  return (
    <Seccion titulo="Nuestros Productos" elementos={productos} Componente={Producto}/>    
  );
}

export default App;
