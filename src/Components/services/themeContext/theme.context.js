import { createContext, useState } from "react";

import ComboLanguage from "../../ui/comboLanguage/ComboLanguaje";
import { TranslateContext } from "../../../services/translationContext/translation.context";
import useTranslation from "../../../custom/useTranslation/useTranslation";
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("claro");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "claro" ? "oscuro" : "claro"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
