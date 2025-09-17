import { motion } from "framer-motion";

export const Skills = () => {
  const skills = [
    { name: "React", pct: 95 },
    { name: "Next.js", pct: 90 },
    { name: "TypeScript", pct: 88 },
    { name: "Flutter", pct: 80 },
    { name: "Node.js", pct: 70 },
    { name: "Design Systems", pct: 75 },
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-6 rounded-2xl border border-divider text-center"
          >
            <div className="flex items-center justify-center">
              {/* simple circular progress using conic-gradient via inline style */}
              <div
                className="w-28 h-28 rounded-full grid place-items-center"
                style={{
                  background: `conic-gradient(var(--secondary) 70%, #ddd 70%)`,
                }}
              >
                <div className="w-20 h-20 rounded-full bg-card grid place-items-center">
                  <div className="font-semibold">{s.pct}%</div>
                </div>
              </div>
            </div>
            <div className="mt-4 font-medium">{s.name}</div>
            <p className="text-sm text-muted mt-2">
              Experienced building real products with {s.name}.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
