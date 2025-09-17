"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";

const sections = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "testimonials",
  "contact",
];

export const Navbar = () => {
  function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
      document.documentElement.setAttribute(
        "data-theme",
        theme === "dark" ? "dark" : "light"
      );
    }, [theme]);

    return (
      <button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="p-1 rounded-full border border-divider hover:scale-105 transition text-sm"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    );
  }
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="w-[90%] md:w-fit fixed top-6 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-md px-8 py-3 rounded-full shadow-lg z-50"
    >
      <ul className="md:hidden gap-6 flex justify-between items-center">
        <li>
          {" "}
          <div className="font-bold">MIE</div>
        </li>
        <li>
          {" "}
          <ThemeToggle />
        </li>
      </ul>
      <ul className="hidden md:flex gap-6">
        {sections.map((id) => (
          <li key={id} className="relative">
            <Link
              href={`#${id}`}
              className={`capitalize font-medium transition-colors ${
                active === id
                  ? "text-secondary"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {id}
            </Link>

            {active === id && (
              <motion.div
                layoutId="nav-underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-secondary rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
