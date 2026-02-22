import { createContext, useEffect, useState, type ReactNode } from "react";

/* ============================================================
   Types
   ============================================================ */
export type Theme = "light" | "dark";

export interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

/* ============================================================
   Context
   ============================================================ */
const ThemeContext = createContext<ThemeContextValue | null>(null);

export { ThemeContext };

/* ============================================================
   Provider
   ============================================================ */
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("theme") as Theme) ?? "light";
  });

  /* Sync <html> class & localStorage whenever theme changes */
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = (next: Theme) => setThemeState(next);

  const toggleTheme = () =>
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{ theme, isDark: theme === "dark", toggleTheme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
