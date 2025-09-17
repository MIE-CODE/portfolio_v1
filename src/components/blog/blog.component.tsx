import { motion } from "framer-motion";
export const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Designing for Performance",
      excerpt: "Optimizing renders and bundle size.",
    },
    {
      id: 2,
      title: "Animating with Purpose",
      excerpt: "When to animate and when not to.",
    },
  ];
  return (
    <section className="py-20 px-6 bg-background">
      <h2 className="text-3xl font-bold text-center mb-8">Articles</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {posts.map((p) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 border border-divider rounded-2xl bg-card"
          >
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted">{p.excerpt}</p>
            <div className="mt-4">
              <a className="text-secondary font-medium group cursor-default">
                Read{" "}
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2 cursor-default">
                  →
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
