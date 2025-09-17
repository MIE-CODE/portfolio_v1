"use client";

import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer select-none p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
    >
      {theme === "light" ? "🌙" : "🌞"}
    </div>
  );
};
