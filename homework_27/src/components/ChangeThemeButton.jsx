import { useContext } from "react";
import { ThemeContext, themes } from "../themeContext";

const ChangeThemeButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme.color === "black" ? themes.dark : themes.light);
  };

  return <button onClick={handleClick}>Light/dark theme</button>;
};

export default ChangeThemeButton;
