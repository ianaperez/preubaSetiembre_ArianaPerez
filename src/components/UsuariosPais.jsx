import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsuariosPais = () => {
  const [usuarioPais, setUsuarioPais] = useState({
    nombre: { first: "" },
    email: "",
    fotoPerfil: { medium: "" },
    pais: "",
    nat: "",
  });

  const { idPais } = useParams;

  useEffect(() => {
    async function obtenerUsuarioPais() {
      const respuesta = await fetch("https://randomuser.me/api/?results=3");
      const datos = await respuesta.json();
      setUsuarioPais(datos);
    }
    obtenerUsuarioPais();
  }, [idPais]);

  return (
    <div>
      <h1>Usuarios:</h1>
      <div>
        <img src={usuarioPais?.fotoPerfil} alt="Foto de perfil del usuario" />
        <p>Nombre: {usuarioPais.name}</p>
        <p>Email: {usuarioPais.email}</p>
        <p>Pais: {usuarioPais.pais}</p>
      </div>
    </div>
  );
};

export { UsuariosPais };
