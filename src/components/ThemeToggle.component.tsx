"use client";

import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer select-none p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </div>
  );
};
