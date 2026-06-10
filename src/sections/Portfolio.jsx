import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/variants";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Rajmani Jewellers",
      category: "Mobile App",
      icon: "💎",
      description: "Premium jewellery e-commerce mobile application",
      tech: ["React Native", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Property Bazar",
      category: "Mobile App",
      icon: "🏢",
      description: "Comprehensive real estate marketplace platform",
      tech: ["React Native", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Second Income",
      category: "Mobile App",
      icon: "💰",
      description: "Wealth management and investment tracking app",
      tech: ["React Native", "Firebase", "Node.js"],
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Website",
      icon: "🌐",
      description: "Modern portfolio website with animations",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 5,
      title: "Ollyver Publications",
      category: "Website",
      icon: "📚",
      description: "Book publication website with catalog & ordering",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 6,
      title: "Ved Tour & Travels",
      category: "Website",
      icon: "✈️",
      description: "Travel booking and tour packages website",
      tech: ["React", "Tailwind CSS", "Firebase"],
    },
    {
      id: 7,
      title: "Rajmani Jewellers",
      category: "Website",
      icon: "💍",
      description: "Jewellery showcase and e-commerce website",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 8,
      title: "HS Tech",
      category: "Website",
      icon: "🚀",
      description: "Company portfolio website with modern animations",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
    },
  ];

  const categories = ["All", "Mobile App", "Website"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          {...staggerContainer}
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="glass p-5 rounded-xl hover-lift group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl mb-4">
                {project.icon}
              </div>

              {/* Category Badge */}
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold mt-2 mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-dark-tertiary px-2 py-0.5 rounded text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
