import { motion } from "framer-motion";
export const ExperienceTimeline = () => {
  const items = [
    {
      year: "2024",
      title: "Senior Frontend",
      org: "Trueperk",
      detail: "Led UI and DX",
    },
    {
      year: "2023",
      title: "Frontend Dev",
      org: "Procentric IQ",
      detail: "Built Gate Secure App",
    },
    {
      year: "2022",
      title: "Intern",
      org: "Various",
      detail: "Laid foundation",
    },
  ];
  return (
    <section className="py-20 px-6 bg-card">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="md:max-w-4xl md:mx-auto relative">
        <div className="absolute left-6 top-4 bottom-4 w-px bg-divider" />
        <div className="space-y-8 ">
          {items.map((it, i) => (
            <motion.div
              key={it.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-4 border border-divider rounded-2xl bg-background"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted">{it.year}</div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-sm text-muted">{it.org}</div>
                </div>
                <div className="text-sm text-muted">→</div>
              </div>
              <p className="mt-3 text-sm text-muted">{it.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
