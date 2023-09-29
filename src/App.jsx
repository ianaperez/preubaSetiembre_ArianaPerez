import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div class="contenedor">
        <h1>Prueba práctica React</h1>
        <Link class="links" to={"/usuarios"}>
          Usuarios
        </Link>
        <Link class="links" to={"/usuarios/pais"}>
          Usuarios por país
        </Link>
      </div>
    </>
  );
}

export default App;
