import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/variants";
import { SERVICES } from "../data/content";
import { FaApple } from "react-icons/fa";

const ServiceIcon = ({ icon }) => {
  if (icon === "apple") {
    return <FaApple className="text-3xl sm:text-4xl md:text-5xl text-white" />;
  }
  return <span>{icon}</span>;
};

const Services = () => {
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
          {SERVICES.map((service, idx) => (
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
                <ServiceIcon icon={service.icon} />
              </motion.div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-secondary text-xs sm:text-sm md:text-base mb-3 sm:mb-4">{service.description}</p>

              {/* Category Badge */}
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                {service.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
