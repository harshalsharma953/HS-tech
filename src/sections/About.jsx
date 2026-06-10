import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../animations/variants";
import founderImage from "../assets/images/founder.png";

const About = () => {
  const aboutPoints = [
    {
      title: "Vision",
      description:
        "To be the leading digital transformation partner for businesses worldwide.",
    },
    {
      title: "Mission",
      description:
        "Deliver innovative software solutions that drive business growth and digital excellence.",
    },
    {
      title: "Values",
      description:
        "Quality, Innovation, Integrity, and Customer-Centric Solutions.",
    },
  ];

  const timeline = [
    { year: "2020", event: "Company Founded" },
    { year: "2021", event: "50+ Projects Delivered" },
    { year: "2022", event: "Global Client Base" },
    { year: "2024", event: "AI Solutions Launch" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About HS Tech</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Founded by Harshal Sharma, HS Tech is a premium software company
            dedicated to transforming businesses through cutting-edge technology
            solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - About Points */}
          <motion.div className="space-y-6" {...staggerContainer}>
            {aboutPoints.map((point, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-xl hover-lift"
                variants={staggerItem}
              >
                <h3 className="text-xl font-bold gradient-text mb-2">
                  {point.title}
                </h3>
                <p className="text-secondary">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Founder Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Founder Card */}
            <motion.div
              className="glass p-8 rounded-xl text-center"
              whileHover={{ scale: 1.02 }}
            >
              {/* Founder image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                {/* Animated background ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ padding: "3px" }}
                >
                  <div className="w-full h-full rounded-full bg-dark" />
                </motion.div>
                {/* Stable image */}
                <div className="absolute inset-1 rounded-full overflow-hidden">
                  <img
                    src={founderImage}
                    alt="Harshal Sharma - Founder"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = "none";
                      if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.style.display = "flex";
                      }
                    }}
                  />
                  <div className="w-full h-full rounded-full bg-dark-secondary flex items-center justify-center border-2 border-primary/30 hidden">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">Harshal Sharma</h3>
              <p className="text-primary font-semibold mb-4">Founder & CEO</p>
              <p className="text-secondary mb-6">
                Transforming Ideas Into Digital Excellence
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-secondary">
                <p>📧 hs.techind@gmail.com</p>
                <p>📱 +91 7024630069</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-12 text-center">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-xl text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {item.year}
                </div>
                <p className="text-secondary">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
