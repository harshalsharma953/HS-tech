import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/variants";
import { PROCESS_STEPS } from "../data/content";

const Process = () => {
  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-secondary">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Our Process</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A structured 6-step approach to delivering exceptional solutions
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div className="relative" {...staggerContainer}>
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div key={idx} className="relative" variants={staggerItem}>
                <motion.div
                  className="glass p-8 rounded-xl text-center hover-lift relative z-10 h-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-dark">
                      {step.number}
                    </span>
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-secondary text-sm">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
