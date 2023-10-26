import React, { useRef, useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const emailChangeHandler = (event) => {
    if (emailRef.current.value.length > 0) {
      emailRef.current.style.borderColor = "";
      emailRef.current.style.outline = "";
    }
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const signInHandler = () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      alert("Email vacío");
      return;
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
      alert("Contraseña vacia");
      return;
    }
    alert(`Su email es: ${email} y su password es: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3>To do App</h3>
        <div className="input-container">
          <input
            className="input-control"
            placeholder="Email"
            type="email"
            onChange={emailChangeHandler}
            value={email}
            ref={emailRef}
          />
        </div>
        <div className="input-container">
          <input
            className="input-control"
            placeholder="Contraseña"
            type="password"
            onChange={passwordChangeHandler}
            value={password}
            ref={passwordRef}
          />
        </div>
        <button onClick={signInHandler} className="signin-button" type="button">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
