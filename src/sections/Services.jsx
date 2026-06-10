import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/variants";

const Services = () => {
  const services = [
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native Android & iOS apps with modern UI/UX",
    },
    {
      icon: "⚛️",
      title: "React Native Development",
      description: "Cross-platform mobile solutions",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks",
    },
    {
      icon: "🛠️",
      title: "Custom Software Development",
      description: "Tailored enterprise software solutions",
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      description: "Machine learning and AI-powered solutions",
    },
    {
      icon: "🗄️",
      title: "Cloud Integration",
      description: "Seamless cloud deployment and management",
    },
    {
      icon: "💼",
      title: "ERP Solutions",
      description: "Enterprise resource planning systems",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Premium user experience and interface design",
    },
    {
      icon: "🛒",
      title: "E-commerce Development",
      description: "Complete e-commerce platforms and stores",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-secondary">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Our Services</h2>
          <p className="text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Comprehensive software solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          {...staggerContainer}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="glass p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl group hover-lift cursor-pointer"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon */}
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 inline-block"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-secondary text-xs sm:text-sm md:text-base mb-3 sm:mb-4">{service.description}</p>

              {/* Arrow */}
              <motion.div
                className="inline-flex items-center gap-2 text-primary"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-semibold">Learn More</span>
                <span>→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
