import { useState, useEffect, type PropsWithChildren} from "react";
import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"))

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        Theme: <ThemeSwitcher text={theme}/>
        {children}
    </ThemeContext.Provider>
  );
};
