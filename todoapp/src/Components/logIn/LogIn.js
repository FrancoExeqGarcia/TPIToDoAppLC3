import React, { useRef, useState, useContext } from "react";
import "./Login.css";
import { AuthenticationContext } from "../services/authenticationContext/authentication.context";
import ToggleTheme from "../ui/toggleTheme/ToggleTheme";
import { ThemeContext } from "../services/themeContext/theme.context";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(AuthenticationContext);

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
      alert("Email vacío");
      return;
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      alert("Contraseña vacia");
      return;
    }
    handleLogin(email);
  };

  return (
    <div className="login-container">
      <div className={`login-box ${theme === "DARK" && "login-box-dark"}`}>
        <h3>WELCOME TO DO APP</h3>
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
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Login;
