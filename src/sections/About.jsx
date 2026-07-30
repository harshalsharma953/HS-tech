import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../animations/variants";
import { COMPANY_INFO, HIGHLIGHTS } from "../data/content";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-10 sm:mb-12 md:mb-16" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">About HS Tech</h2>
          <p className="text-secondary max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <motion.div
            className="glass p-5 sm:p-6 md:p-8 rounded-xl hover-lift"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-lg sm:text-xl md:text-2xl">🎯</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </motion.div>

          <motion.div
            className="glass p-5 sm:p-6 md:p-8 rounded-xl hover-lift"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-lg sm:text-xl md:text-2xl">🚀</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </motion.div>
        </div>

        {/* Founder Card - Elegant Text/Card Design (No Image) */}
        <motion.div
          className="max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass p-6 sm:p-8 md:p-10 rounded-xl text-center relative overflow-hidden">
            {/* Decorative gradient border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 mt-4">
              Founder & CEO
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              {COMPANY_INFO.founder}
            </h3>
            <p className="text-secondary italic text-sm sm:text-base md:text-lg leading-relaxed">
              "Technology is not just about code — it's about creating solutions
              that empower people and transform lives."
            </p>
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-secondary text-xs sm:text-sm">
              <span>🏢</span>
              <span>Founded in {COMPANY_INFO.founded}</span>
            </div>
          </div>
        </motion.div>

        {/* Company Highlights */}
        <motion.div
          className="mt-10 sm:mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Why Choose Us</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
            {...staggerContainer}
          >
            {HIGHLIGHTS.map((highlight, idx) => (
              <motion.div
                key={idx}
                className="glass px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-secondary hover:text-primary hover:border-primary/30 transition-colors"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                ✦ {highlight}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Goal Card */}
        <motion.div
          className="mt-10 sm:mt-12 md:mt-16 glass p-5 sm:p-6 md:p-8 rounded-xl text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-bold gradient-text mb-3 sm:mb-4">Our Goal</h3>
          <p className="text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
            {COMPANY_INFO.goal}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
