"use client";
import React, { useEffect } from "react";

import { Footer } from "@/components/footer/footer.component";
import { Contact } from "@/components/contact/contact.component";
import { Blog } from "@/components/blog/blog.component";
import { Testimonials } from "@/components/testimonials/testimonials.component";
import { ExperienceTimeline } from "@/components/experience/experience.component";
import { Projects } from "@/components/projects/projects.component";
import { Skills } from "@/components/skills/skills.component";
import { AboutTimeline } from "@/components/about/about.component";
import { Hero } from "@/components/hero/hero.component";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/navbar/navbar.component";

/*
  Complex Portfolio single-file React component (Next.js client component)
  - Uses Tailwind utility classes and your CSS variables (data-theme based)
  - Requires: framer-motion, gsap
  - Install: npm i framer-motion gsap

  Drop this file into a Next.js page (e.g. app/page.tsx) or component and adjust imports.
*/

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
      className="p-2 rounded-full border border-divider hover:scale-105 transition"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

export default function ComplexPortfolio() {
  return (
    <main className="bg-background text-foreground min-h-screen antialiased">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between p-6">
          <div className="font-bold">MIE</div>
          <div className="flex items-center gap-4">
            <Navbar />
            <ThemeToggle />
          </div>
        </header>

        <Hero />
        <AboutTimeline />
        <Skills />
        <Projects />
        <ExperienceTimeline />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
