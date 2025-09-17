import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect } from "react";
import { MagneticButton } from "../magnetic_button/magnetic_button.component";

function useMountAnimation() {
  useEffect(() => {
    gsap.from("[data-float]", {
      y: 20,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
}
export const AboutTimeline = () => {
  useMountAnimation();
  const events = [
    {
      year: 2022,
      title: "Intern — Frontend",
      desc: "Learned best practices, built UIs",
    },
    {
      year: 2023,
      title: "Junior Dev — React",
      desc: "Owned features, shipping to production",
    },
    {
      year: 2024,
      title: "Mobile Developer — Flutter",
      desc: "Built cross-platform app for clients",
    },
  ];
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="md:flex gap-8">
        <div className="md:w-1/2">
          <p className="text-muted mb-6">
            Product-minded frontend & mobile engineer with a passion for UX,
            animation, and fast code. I enjoy mentoring, clean architecture, and
            maintaining delightful developer experience.
          </p>
          <div className="space-y-4">
            {events.map((e, i) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-4 border border-divider rounded-2xl bg-card"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted">{e.year}</div>
                    <div className="font-semibold text-lg">{e.title}</div>
                  </div>
                  <div className="text-sm text-muted">•</div>
                </div>
                <p className="mt-3 text-muted text-sm">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="p-6 rounded-2xl border border-divider bg-background shadow-inner">
            <h3 className="font-bold mb-2">Tools I use</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Framer Motion",
                "Flutter",
              ].map((t) => (
                <div
                  key={t}
                  className="px-3 py-2 border border-divider rounded-lg text-sm text-muted"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-6 p-6 rounded-2xl border border-divider bg-card"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-semibold mb-2">Open to</h4>
            <p className="text-sm text-muted">
              Full-time roles, senior frontend, remote-first, contract work,
              mentorship.
            </p>
            <div className="mt-4 flex gap-3">
              <MagneticButton className="bg-secondary text-background">
                Download CV
              </MagneticButton>
              <MagneticButton className="border border-foreground">
                Let&apos;s chat
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
