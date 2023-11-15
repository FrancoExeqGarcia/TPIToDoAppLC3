import React, { useRef, useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../services/authenticationContext/authentication.context";
import ToggleTheme from "../ui/toggleTheme/ToggleTheme";
import { ThemeContext } from "../services/themeContext/theme.context";
import ComboLanguage from "../ui/comboLanguage/ComboLanguaje";
import { TranslateContext } from "../../services/translationContext/translation.context";
import useTranslation from "../../custom/useTranslation/useTranslation";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(AuthenticationContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const translate = useTranslation();

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
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
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
    handleLogin(email);
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className={`login-box ${theme === "DARK" && "login-box-dark"}`}>
        <ComboLanguage />
        <h3 className="mb-4">{translate("welcome")}</h3>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder={translate("email")}
            type="email"
            onChange={emailChangeHandler}
            value={email}
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder={translate("password")}
            type="password"
            onChange={passwordChangeHandler}
            value={password}
            ref={passwordRef}
          />
        </div>
        <button
          onClick={signInHandler}
          className="btn btn-primary btn-block"
          type="button"
        >
          {translate("login")}
        </button>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Login;
