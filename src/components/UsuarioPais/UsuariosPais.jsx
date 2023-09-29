import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsuariosPais = () => {
  const [usuarioPais, setUsuarioPais] = useState([]);

  const { idPais } = useParams();

  useEffect(() => {
    async function obtenerUsuario() {
      const respuesta = await fetch(`https://randomuser.me/api/?nat=${idPais}`);
      const datos = await respuesta.json();
      setUsuarioPais(datos.results);
    }
    obtenerUsuario();
  }, []);

  return (
    <div class="contenedor">
      <h1>Usuarios:</h1>
      {usuarioPais.map((usuario) => (
        <div class="sub_contenedor">
          <img src={usuario.picture.large} alt="Foto de perfil del usuario" />
          <p>
            <span>Nombre:</span> {usuario.name.first}
          </p>
          <p>
            <span>Email:</span> {usuario.email}
          </p>
          <p>
            <span>Pais:</span> {usuario.location.country}
          </p>
        </div>
      ))}
    </div>
  );
};

export { UsuariosPais };
