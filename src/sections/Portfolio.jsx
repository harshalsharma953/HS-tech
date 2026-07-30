import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/variants";
import { PORTFOLIO_PROJECTS } from "../data/content";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Mobile App", "Website"];

  const filteredProjects =
    filter === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-secondary">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Our Projects</h2>
          <p className="text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Showcasing our best work across mobile apps and websites
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-white shadow-glow"
                  : "glass text-secondary hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          {...staggerContainer}
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="glass p-6 rounded-xl hover-lift group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl mb-4">
                {project.icon}
              </div>

              {/* Category Badge */}
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.features.slice(0, 4).map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-dark-tertiary px-2 py-1 rounded text-secondary"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 4 && (
                    <span className="text-xs bg-dark-tertiary px-2 py-1 rounded text-primary">
                      +{project.features.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-primary/10">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-primary/80 bg-primary/5 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* 10+ Projects Stats Card */}
          <motion.div
            className="glass p-6 rounded-xl hover-lift flex flex-col items-center justify-center text-center min-h-[280px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="text-6xl sm:text-7xl md:text-8xl font-bold gradient-text mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              10+
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Projects Delivered</h3>
            <p className="text-secondary text-sm">
              Mobile Apps, Websites & Custom Software Solutions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
