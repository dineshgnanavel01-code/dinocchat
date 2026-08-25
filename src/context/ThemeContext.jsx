// Warm Editorial Community: appearance stays warm and paper-like by default, with a simple theme contract ready for future preferences.

import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("warm");
  const toggleTheme = () => setTheme((current) => current === "warm" ? "quiet" : "warm");
  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);
  return <ThemeContext.Provider value={value}><div data-theme={theme}>{children}</div></ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}
