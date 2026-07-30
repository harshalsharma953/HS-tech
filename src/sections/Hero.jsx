import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.to(".hero-text", {
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.15,
      ease: "power4.out",
    });
  }, []);

  const floatingIcons = [
    { icon: "⚛️", delay: 0 },
    { icon: "🔧", delay: 0.3 },
    { icon: "💻", delay: 0.6 },
    { icon: "🚀", delay: 0.9 },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 sm:pt-20 flex items-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(30,144,255,0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse at 60% 30%, rgba(30,144,255,0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse at 20% 50%, rgba(30,144,255,0.08) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 -left-40 w-80 h-80 bg-primary/8 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-80 h-80 bg-accent/8 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              Transforming Ideas Into
              <span className="gradient-text mt-1 sm:mt-2">
                Digital Excellence
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary mb-6 sm:mb-8 max-w-2xl leading-relaxed px-2 sm:px-0"
            variants={itemVariants}
          >
            Mobile Apps, Web Applications, Custom Software & UI/UX Design
            for businesses transforming their digital presence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <motion.button
              className="btn-primary flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(30,144,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("portfolio")}
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="btn-secondary flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
              <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-primary/10 overflow-x-auto pb-2"
            variants={itemVariants}
          >
            {floatingIcons.map((item, idx) => (
              <motion.div
                key={idx}
                className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut",
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12"
            variants={itemVariants}
          >
            {[
              { label: "Projects", value: "15+" },
              { label: "Clients", value: "8+" },
              { label: "Apps", value: "5+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="glass p-3 sm:p-4 rounded-lg"
                whileHover={{ scale: 1.05, borderColor: "rgba(30,144,255,0.3)" }}
                transition={{ duration: 0.3 }}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
