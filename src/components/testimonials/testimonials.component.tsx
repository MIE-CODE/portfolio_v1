import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "PM",
      text: "Delivered on time & great communication.",
    },
    {
      name: "John Smith",
      role: "CTO",
      text: "Fast, thoughtful, and technically strong.",
    },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setI((s) => (s + 1) % testimonials.length),
      4500
    );
    return () => clearInterval(t);
  }, [testimonials.length]);
  return (
    <section className="py-20 px-6" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="max-w-3xl mx-auto">
        <AnimatePresence>
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-2xl border border-divider bg-card text-center"
          >
            <p className="text-muted mb-4">“{testimonials[i].text}”</p>
            <div className="font-semibold">
              {testimonials[i].name}{" "}
              <span className="text-sm text-muted">
                — {testimonials[i].role}
              </span>
            </div>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </section>
  );
};
