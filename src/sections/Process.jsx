import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/variants";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Requirement Gathering",
      description:
        "We understand your business needs and project requirements thoroughly.",
    },
    {
      number: "02",
      title: "Planning & Strategy",
      description:
        "Create a comprehensive plan and development strategy tailored to your goals.",
    },
    {
      number: "03",
      title: "Design & Prototyping",
      description:
        "Design beautiful interfaces and create interactive prototypes for approval.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Build your solution using latest technologies with clean, maintainable code.",
    },
    {
      number: "05",
      title: "Deployment & Support",
      description:
        "Deploy your application and provide ongoing support and maintenance.",
    },
  ];

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
            A structured 5-step approach to delivering exceptional solutions
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div className="relative" {...staggerContainer}>
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div key={idx} className="relative" variants={staggerItem}>
                {/* Step Circle */}
                <motion.div
                  className="glass p-8 rounded-xl text-center mb-6 hover-lift relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-dark">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-secondary text-sm">{step.description}</p>
                </motion.div>

                {/* Arrow (except last) */}
                {idx < steps.length - 1 && (
                  <motion.div
                    className="hidden md:flex justify-center absolute -right-4 top-20"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-2xl text-primary">→</span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
