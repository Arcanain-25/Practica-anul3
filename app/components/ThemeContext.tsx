"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "aether" | "void";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "aether",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("aether");

  useEffect(() => {
    // читаем "заклинание" из свитка (localStorage)
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.add(saved);
    } else {
      document.documentElement.classList.add("aether");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "aether" ? "void" : "aether";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // снимаем старое заклинание и накладываем новое
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
