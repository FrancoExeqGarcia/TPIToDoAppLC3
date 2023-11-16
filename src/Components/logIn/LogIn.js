import React, { useRef, useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../services/authenticationContext/authentication.context";
import ToggleTheme from "../ui/toggleTheme/ToggleTheme";
import ComboLanguage from "../ui/comboLanguage/ComboLanguaje";
import { TranslateContext } from "../../services/translationContext/translation.context";
import { ThemeContext } from "../services/themeContext/theme.context";
import useTranslation from "../../custom/useTranslation/useTranslation";

const Login = ({ onLoggedIn }) => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(AuthenticationContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const translate = useTranslation();

  const customAlert = (messageKey) => {
    const translatedMessage = translate(messageKey);
    window.alert(translatedMessage);
  };

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
      customAlert("emptyEmail");
      return;
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
      customAlert("emptyPassword");
      return;
    }
    onLoggedIn();
    handleLogin(email);
    navigate("/home");
  };
  const navigateToAddNewUser = () => {
    navigate("/add-new-user");
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
        <button
          onClick={navigateToAddNewUser} // por si creamos usuarios
          className="btn btn-secondary btn-block mt-3"
          type="button"
        >
          {translate("register_new_user")}
        </button>
        <br />

        <ToggleTheme />
      </div>
    </div>
  );
};

export default Login;
