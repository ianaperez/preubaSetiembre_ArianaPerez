import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>Prueba práctica React</h1>
        <Link to={"/usuarios"}>Usuarios</Link>
        <Link to={"/usuarios/pais"}>Usuarios por pais</Link>
      </div>
    </>
  );
}

export default App;
