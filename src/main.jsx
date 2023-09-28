import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RouterProvider from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage.jsx";
import { Usuarios } from "./components/Usuarios.jsx";
import { UsuariosPais } from "./components/UsuariosPais.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/usuarios/pais/:idPais",
    element: <UsuariosPais />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
