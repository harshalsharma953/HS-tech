import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../animations/variants";

const Hero = () => {
  useEffect(() => {
    // GSAP animations for additional effects
    gsap.to(".hero-text", {
      duration: 0.8,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const floatingIcons = [
    { icon: "⚛️", delay: 0 },
    { icon: "🔧", delay: 0.2 },
    { icon: "💻", delay: 0.4 },
    { icon: "🚀", delay: 0.6 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      {/* Floating background elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Headline */}
          <motion.div className="hero-text opacity-0" initial={{ y: 30 }}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              {...fadeInUp}
            >
              Transforming Ideas Into
              <span className="block gradient-text mt-2">
                Digital Excellence
              </span>
            </motion.h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary mb-6 sm:mb-8 max-w-2xl leading-relaxed px-2 sm:px-0"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            Mobile Apps, Web Applications, AI Solutions & Enterprise Software
            Development for businesses transforming their digital presence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            {...staggerContainer}
            transition={{ ...staggerContainer.transition, delay: 0.4 }}
          >
            <motion.button
              className="btn-primary flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={staggerItem}
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.button
              className="btn-secondary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={staggerItem}
            >
              Contact Us
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-primary/10 overflow-x-auto pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {floatingIcons.map((item, idx) => (
              <motion.div
                key={idx}
                className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: item.delay,
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { label: "Projects", value: "12+" },
              { label: "Clients", value: "6+" },
              { label: "Apps", value: "5+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="glass p-3 sm:p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl sm:text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
