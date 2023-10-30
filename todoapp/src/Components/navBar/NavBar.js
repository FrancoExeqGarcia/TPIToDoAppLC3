import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tareas">
              Tareas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto">
              Contacto
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {" "}
          {}
          <li className="nav-item">
            <a className="nav-link" href="/iniciar-sesion">
              Iniciar Sesión
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
