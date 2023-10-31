import React from "react";

const Sidebar = () => {
  return (
    <nav id="sidebar" className="bg-light">
      <div className="position-fixed">
        <ul className="list-unstyled">
          <li>
            <a href="#" className="btn btn-light d-block text-left">
              Tareas
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-light d-block text-left">
              Recordatorios
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-light d-block text-left">
              Editar tareas
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-light d-block text-left">
              Papelera
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
