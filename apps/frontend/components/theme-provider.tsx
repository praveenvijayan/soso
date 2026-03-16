"use client";

import * as React from "react";

type Theme = "light" | "dark" | "device";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: "device",
  setTheme: () => {},
});

export function useTheme() {
  return React.useContext(ThemeContext);
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light-theme", "dark-theme");
  if (theme === "dark") root.classList.add("dark-theme");
  if (theme === "light") root.classList.add("light-theme");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("device");

  // On mount, read from localStorage
  React.useEffect(() => {
    const stored = localStorage.getItem("orion-theme") as Theme | null;
    const initial = stored ?? "device";
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  const setTheme = React.useCallback((next: Theme) => {
    setThemeState(next);
    localStorage.setItem("orion-theme", next);
    applyTheme(next);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
