import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../services/themeContext/theme.context";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      className="ml-2 mt-2 mt-md-0"
      onClick={toggleTheme}
      variant={theme === "light" ? "dark" : "light"}
    >
      Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
    </Button>
  );
};

export default ToggleTheme;
