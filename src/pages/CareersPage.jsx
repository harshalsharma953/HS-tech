import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { fadeInUp, staggerContainer, staggerItem } from "../animations/variants";

const CareersPage = () => {
  const openings = [
    {
      title: "React Native Developer",
      type: "Full-time",
      location: "Indore / Remote",
      description: "Build cross-platform mobile apps for our growing client base.",
      skills: ["React Native", "JavaScript", "REST APIs", "Firebase"],
    },
    {
      title: "Full Stack Web Developer",
      type: "Full-time",
      location: "Indore / Remote",
      description: "Develop modern web applications using React and Node.js.",
      skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "UI/UX Designer",
      type: "Full-time / Intern",
      location: "Indore / Remote",
      description: "Design beautiful and intuitive interfaces for apps and websites.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      title: "AI/ML Intern",
      type: "Internship",
      location: "Remote",
      description: "Work on AI-powered features and automation solutions.",
      skills: ["Python", "Machine Learning", "TensorFlow", "NLP"],
    },
  ];

  const perks = [
    { icon: "🏠", title: "Remote Friendly", description: "Work from anywhere" },
    { icon: "📈", title: "Growth", description: "Learn and grow with us" },
    { icon: "💰", title: "Competitive Pay", description: "Fair compensation" },
    { icon: "🎯", title: "Real Projects", description: "Work on live products" },
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Careers at HS Tech</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Join our team and help build the future of digital solutions.
          </p>
        </motion.div>

        {/* Perks */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" {...staggerContainer}>
          {perks.map((perk, idx) => (
            <motion.div key={idx} className="glass p-5 rounded-xl text-center" variants={staggerItem}>
              <div className="text-3xl mb-2">{perk.icon}</div>
              <h3 className="font-bold text-sm">{perk.title}</h3>
              <p className="text-secondary text-xs">{perk.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Positions */}
        <h2 className="text-3xl font-bold text-center mb-10">Open Positions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {openings.map((job, idx) => (
            <motion.div
              key={idx}
              className="glass p-6 rounded-xl hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{job.type}</span>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{job.location}</span>
                </div>
              </div>
              <p className="text-secondary text-sm mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-dark-tertiary px-2 py-0.5 rounded text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apply CTA */}
        <motion.div
          className="text-center mt-12 glass p-8 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-3">Interested?</h3>
          <p className="text-secondary mb-6">Send your resume to us and we'll get back to you.</p>
          <a href="mailto:hs.techind@gmail.com" className="btn-primary inline-block">
            📧 Apply via Email
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;
