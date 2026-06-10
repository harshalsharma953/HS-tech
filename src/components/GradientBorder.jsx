import React from "react";
import { motion } from "framer-motion";

const GradientBorder = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-neon rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />

      {/* Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-neon rounded-xl p-[1px] opacity-50 hover:opacity-100 transition-opacity duration-300">
        <div className={`bg-dark-secondary rounded-xl h-full ${className}`} />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GradientBorder;
