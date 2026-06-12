import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { fadeInUp, staggerContainer, staggerItem } from "../animations/variants";

const AboutPage = () => {
  const values = [
    { title: "Quality", icon: "⭐", description: "We deliver premium solutions that exceed expectations." },
    { title: "Innovation", icon: "💡", description: "We embrace new technologies and creative approaches." },
    { title: "Integrity", icon: "🤝", description: "Transparency and honesty in everything we do." },
    { title: "Customer Focus", icon: "🎯", description: "Your success is our primary goal." },
  ];

  const timeline = [
    { year: "2020", event: "HS Tech Founded", description: "Started with a vision to transform businesses digitally." },
    { year: "2021", event: "First Major Projects", description: "Delivered mobile apps and web solutions for key clients." },
    { year: "2022", event: "Growing Client Base", description: "Expanded services across India with diverse project portfolio." },
    { year: "2023", event: "Website Solutions", description: "Launched website development services for businesses." },
    { year: "2024", event: "AI & Automation", description: "Introduced AI-powered solutions and automation services." },
  ];

  return (
    <div className="min-h-screen bg-dark pt-20 pb-16">
      <div className="section-container">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8">
          <FiArrowLeft /> Back to Home
        </Link>

        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About HS Tech</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            We are a premium software company dedicated to transforming businesses through cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          className="glass p-8 md:p-12 rounded-2xl mb-16 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-40 h-40 shrink-0">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ padding: "3px" }}
            >
              <div className="w-full h-full rounded-full bg-dark" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">PS</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Mrs. Pratibha Sharma</h2>
            <p className="text-primary font-semibold mb-4">Founder & CEO</p>
            <p className="text-secondary leading-relaxed">
              Mrs. Pratibha Sharma founded HS Tech with a vision to make premium software accessible to businesses of all sizes. 
              With a passion for technology and a drive for excellence, she leads the team in delivering innovative solutions 
              that help businesses grow digitally.
            </p>
            <p className="text-secondary italic mt-4 border-l-2 border-primary pl-4">
              "Technology is not just about code — it's about creating solutions that empower people and transform lives."
            </p>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div className="mb-16" {...staggerContainer}>
          <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-xl text-center hover-lift"
                variants={staggerItem}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-secondary text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-xl flex gap-6 items-start hover-lift"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold gradient-text shrink-0">{item.year}</div>
                <div>
                  <h3 className="font-bold text-lg">{item.event}</h3>
                  <p className="text-secondary text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
