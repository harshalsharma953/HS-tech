import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/variants";

const Technologies = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "React Native", icon: "📱" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "⚡" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "✨" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Android", icon: "🤖" },
    { name: "Git", icon: "📂" },
    { name: "REST APIs", icon: "🔌" },
  ];

  return (
    <section id="technologies" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Tech Stack</h2>
          <p className="text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            We work with the latest and most reliable technologies
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          {...staggerContainer}
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              className="glass p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl text-center group hover-lift"
              variants={staggerItem}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4 inline-block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
              >
                {tech.icon}
              </motion.div>
              <h3 className="font-semibold text-xs sm:text-sm md:text-lg group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
