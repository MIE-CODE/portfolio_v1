"use client";

import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer select-none p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </div>
  );
};
