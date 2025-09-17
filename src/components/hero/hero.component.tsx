import { motion } from "framer-motion";
import { MagneticButton } from "../magnetic_button/magnetic_button.component";
import { useEffect, useState } from "react";
import gsap from "gsap";

export const Hero = () => {
  function Counter({ from = 0, to = 100, duration = 2, suffix = "" }) {
    const [val, setVal] = useState(from);
    useEffect(() => {
      const obj = { n: from };
      gsap.to(obj, {
        n: to,
        duration,
        ease: "power1.out",
        onUpdate: () => setVal(Math.floor(obj.n)),
      });
    }, [from, to, duration]);
    return (
      <span>
        {val}
        {suffix}
      </span>
    );
  }
  const easing: [number, number, number, number] = [0.6, -0.05, 0.01, 0.99];
  return (
    <section className="h-screen relative flex items-center justify-center text-center overflow-hidden">
      {/* parallax BG shapes */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute left-10 top-24 w-48 h-48 rounded-full blur-3xl"
          style={{ background: "var(--secondary)" }}
          data-float
        />
        <div
          className="absolute right-20 bottom-32 w-60 h-60 rounded-full blur-3xl"
          style={{ background: "var(--primary)" }}
          data-float
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easing }}
        className="max-w-4xl px-6"
      >
        <p className="text-sm uppercase tracking-widest text-muted mb-4">
          Senior Frontend & Mobile Developer
        </p>
        <motion.h1
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I’m <span className="text-secondary">Menyaga Enyo Israel</span> —
          crafting delightful interfaces & fast apps.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6 text-lg max-w-2xl mx-auto text-muted"
        >
          I build production-ready web & mobile applications with beautiful
          interactions, performance-first architecture, and product-minded UI.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <MagneticButton className="bg-primary text-background font-semibold shadow">
            See my work
          </MagneticButton>
          <MagneticButton className="border border-foreground font-medium">
            Contact me
          </MagneticButton>
        </motion.div>

        <div className="mt-12 flex items-center justify-center gap-8 text-muted">
          <div className="text-center">
            <div className="text-2xl font-bold">
              <Counter to={5} suffix="+" />
            </div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="h-1 w-10 bg-divider rounded" />
          <div className="text-center">
            <div className="text-2xl font-bold">
              <Counter to={50} suffix="+" />
            </div>
            <div className="text-sm">Projects</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
