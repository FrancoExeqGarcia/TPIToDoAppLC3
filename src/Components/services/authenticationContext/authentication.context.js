import { useState } from "react";

import ComboLanguage from "../../ui/comboLanguage/ComboLanguaje";
import { TranslateContext } from "../../../services/translationContext/translation.context";
import useTranslation from "../../../custom/useTranslation/useTranslation";

const { createContext } = require("react");

export const AuthenticationContext = createContext();

const userValue = JSON.parse(localStorage.getItem("user"));

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(userValue);

  const handleLogin = (email) => {
    localStorage.setItem("user", JSON.stringify({ ...user, email }));
    setUser({ ...user, email });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
