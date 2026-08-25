// Dinoc India Edition: appearance preferences persist locally so the app can switch between day and night community modes.

import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext(null);

function initialTheme() {
  if (typeof window === "undefined") return "day";
  return window.localStorage.getItem("dinoc-theme") || "day";
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(initialTheme);
  const setTheme = (next) => { setThemeState(next); window.localStorage?.setItem("dinoc-theme", next); };
  const toggleTheme = () => setTheme(theme === "day" ? "night" : "day");
  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);
  return <ThemeContext.Provider value={value}><div className={`theme-root theme-${theme}`} data-theme={theme}>{children}</div></ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}
