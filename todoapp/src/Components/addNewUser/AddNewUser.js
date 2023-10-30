import React, { useState } from "react";

const AddNewUser = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // falta logica para enviar los datos del usuario al servidor

    console.log("Datos del usuario:", user);
  };
  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default AddNewUser;
