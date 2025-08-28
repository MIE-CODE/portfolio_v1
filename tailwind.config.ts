import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import lineClamp from "@tailwindcss/line-clamp";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["DIN 2014", "sans-serif"],
        body: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        primary: "#2563EB", // blue-600
        secondary: "#7C3AED", // purple-600
        accent: "#F97316", // orange-500
        background: "#FFFFFF",
        foreground: "#1E293B",
        muted: "#94A3B8",
        dark: {
          background: "#0F172A",
          foreground: "#F8FAFC",
          muted: "#64748B",
        },
      },
      boxShadow: {
        soft: "0 2px 6px rgba(0, 0, 0, 0.1)",
        card: "0 4px 12px rgba(0, 0, 0, 0.15)",
        glow: "0 0 20px rgba(37, 99, 235, 0.5)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #2563EB, #7C3AED)",
        "gradient-accent": "linear-gradient(90deg, #F97316, #2563EB)",
        "gradient-dark": "linear-gradient(135deg, #111827, #1F2937)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.6s ease-out forwards",
        scaleUp: "scaleUp 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [forms, typography, aspectRatio, lineClamp],
};

export default config;
