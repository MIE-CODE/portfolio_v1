import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MagneticButton } from "../magnetic_button/magnetic_button.component";

export const Projects = () => {
  const all = [
    {
      id: 1,
      title: "E-commerce UI",
      tags: ["frontend"],
      desc: "Shop flow, animations, checkout.",
    },
    {
      id: 2,
      title: "Mobile Booking App",
      tags: ["mobile"],
      desc: "Cross-platform booking with maps.",
    },
    {
      id: 3,
      title: "Admin Dashboard",
      tags: ["fullstack"],
      desc: "Charts, auth, role management.",
    },
    {
      id: 4,
      title: "Design System",
      tags: ["frontend"],
      desc: "Reusable components, tokens.",
    },
  ];
  const [filter, setFilter] = useState("all");
  const filtered = all.filter(
    (p) => filter === "all" || p.tags.includes(filter)
  );

  return (
    <section className="py-20 px-6" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {["all", "frontend", "mobile", "fullstack"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full border ${
              filter === f
                ? "bg-primary text-background"
                : "border-divider text-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-divider bg-card"
            >
              <div className="h-44 bg-muted" />
              <div className="p-6">
                <div className="text-sm text-muted uppercase tracking-wide">
                  {p.tags.join(" • ")}
                </div>
                <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
                <p className="text-sm text-muted mt-2">{p.desc}</p>
                <div className="mt-4 flex gap-3">
                  <MagneticButton className="bg-secondary text-background">
                    Live
                  </MagneticButton>
                  <MagneticButton className="border border-foreground">
                    Code
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
