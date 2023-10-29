import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../services/themeContext/theme.context";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Button className="mt-4" onClick={handleToggleTheme}>
      {translate(theme === "DARK" ? "light_theme_change" : "dark_theme_change")}
    </Button>
  );
};

export default ToggleTheme;
