import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../services/themeContext/theme.context";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      className="mt-4"
      onClick={ToggleTheme}
      variant={theme === "light" ? "dark" : "light"}
    >
      Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
    </Button>
  );
};

export default ToggleTheme;
