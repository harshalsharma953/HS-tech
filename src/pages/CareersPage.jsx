import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiMapPin, FiBriefcase, FiClock } from "react-icons/fi";
import { fadeInUp, staggerContainer, staggerItem } from "../animations/variants";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

const CareersPage = () => {
  const hrContact = {
    email: "hr.hstechind@gmail.com",
    phone: "+91 7024630069",
  };

  const fresherOpenings = [
    {
      title: "Junior React Native Developer",
      type: "Full-time",
      experience: "Fresher / 0-1 Year",
      location: "Indore / Remote",
      description:
        "Looking for enthusiastic freshers who have knowledge of React Native and want to build real-world mobile applications.",
      skills: ["React Native", "JavaScript", "REST APIs", "Git"],
      salary: "₹10K - ₹20K / month",
    },
    {
      title: "Frontend Developer (React.js)",
      type: "Full-time",
      experience: "Fresher / 0-1 Year",
      location: "Indore / Remote",
      description:
        "Join our web team to build modern, responsive websites using React.js and Tailwind CSS.",
      skills: ["React.js", "HTML/CSS", "JavaScript", "Tailwind CSS"],
      salary: "₹10K - ₹18K / month",
    },
    {
      title: "UI/UX Design Intern",
      type: "Internship (3-6 months)",
      experience: "Fresher",
      location: "Remote",
      description:
        "Design beautiful mobile app and website interfaces. Great opportunity to learn and grow in product design.",
      skills: ["Figma", "Adobe XD", "Prototyping", "Mobile Design"],
      salary: "₹5K - ₹10K / month",
    },
    {
      title: "Backend Developer Intern",
      type: "Internship (3-6 months)",
      experience: "Fresher",
      location: "Remote",
      description:
        "Work on real backend projects using Node.js and MongoDB. Learn API development and database management.",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      salary: "₹8K - ₹12K / month",
    },
  ];

  const experiencedOpenings = [
    {
      title: "Senior React Native Developer",
      type: "Full-time",
      experience: "2-4 Years",
      location: "Indore / Remote",
      description:
        "Lead mobile app development projects, mentor junior developers, and deliver high-quality cross-platform applications.",
      skills: ["React Native", "TypeScript", "Redux", "Firebase", "CI/CD"],
      salary: "₹30K - ₹60K / month",
    },
    {
      title: "Full Stack Developer (MERN)",
      type: "Full-time",
      experience: "2-3 Years",
      location: "Indore / Remote",
      description:
        "Build end-to-end web applications with React frontend and Node.js backend. Handle database design and API architecture.",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "AWS"],
      salary: "₹25K - ₹50K / month",
    },
    {
      title: "Project Manager",
      type: "Full-time",
      experience: "3-5 Years",
      location: "Indore",
      description:
        "Manage multiple client projects, coordinate with development teams, ensure timely delivery and client satisfaction.",
      skills: ["Project Management", "Agile/Scrum", "Client Communication", "Technical Understanding"],
      salary: "₹35K - ₹60K / month",
    },
    {
      title: "Senior UI/UX Designer",
      type: "Full-time",
      experience: "2-4 Years",
      location: "Indore / Remote",
      description:
        "Lead the design team, create design systems, and deliver premium user experiences for mobile and web applications.",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Animation"],
      salary: "₹25K - ₹45K / month",
    },
  ];

  const perks = [
    { icon: "🏠", title: "Remote Friendly", description: "Work from anywhere in India" },
    { icon: "📈", title: "Fast Growth", description: "Learn and grow rapidly with real projects" },
    { icon: "💰", title: "Competitive Pay", description: "Fair compensation + performance bonuses" },
    { icon: "🎯", title: "Real Projects", description: "Work on live products used by thousands" },
    { icon: "🎓", title: "Learning Culture", description: "Regular training and skill development" },
    { icon: "🤝", title: "Supportive Team", description: "Collaborative and friendly work environment" },
  ];

  const JobCard = ({ job }) => (
    <motion.div
      className="glass p-6 rounded-xl hover-lift"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
        <h3 className="text-xl font-bold">{job.title}</h3>
        <span className="text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full font-medium">
          {job.salary}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 mb-4 text-sm text-secondary">
        <span className="flex items-center gap-1">
          <FiBriefcase className="text-primary" /> {job.type}
        </span>
        <span className="flex items-center gap-1">
          <FiClock className="text-primary" /> {job.experience}
        </span>
        <span className="flex items-center gap-1">
          <FiMapPin className="text-primary" /> {job.location}
        </span>
      </div>

      <p className="text-secondary text-sm mb-4">{job.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map((skill, i) => (
          <span key={i} className="text-xs bg-dark-tertiary px-2 py-1 rounded text-secondary">
            {skill}
          </span>
        ))}
      </div>

      <a
        href={`mailto:${hrContact.email}?subject=Application for ${job.title}`}
        className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-accent transition-colors"
      >
        Apply Now →
      </a>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-dark">
      <ParticleBackground particleCount={30} />
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
          >
            <FiArrowLeft /> Back to Home
          </Link>

          {/* Header */}
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Join <span className="gradient-text">HS Tech</span>
            </h1>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              We're looking for passionate developers, designers, and tech enthusiasts
              to join our growing team. Build real products that make a difference.
            </p>
          </motion.div>

          {/* Perks */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
            {...staggerContainer}
          >
            {perks.map((perk, idx) => (
              <motion.div
                key={idx}
                className="glass p-5 rounded-xl text-center hover-lift"
                variants={staggerItem}
              >
                <div className="text-3xl mb-2">{perk.icon}</div>
                <h3 className="font-bold text-sm mb-1">{perk.title}</h3>
                <p className="text-secondary text-xs">{perk.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fresher Openings */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Fresher Openings</h2>
                <p className="text-secondary text-sm">Perfect for freshers and recent graduates</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {fresherOpenings.map((job, idx) => (
                <JobCard key={idx} job={job} />
              ))}
            </div>
          </motion.div>

          {/* Experienced Openings */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl">💼</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Experienced Hiring</h2>
                <p className="text-secondary text-sm">For experienced professionals looking to grow</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {experiencedOpenings.map((job, idx) => (
                <JobCard key={idx} job={job} />
              ))}
            </div>
          </motion.div>

          {/* How to Apply */}
          <motion.div
            className="glass p-8 md:p-12 rounded-2xl text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            <h3 className="text-2xl md:text-3xl font-bold mb-4">How to Apply?</h3>
            <p className="text-secondary mb-8 max-w-xl mx-auto">
              Send your resume with the job title in the subject line. Our HR team will
              review your application and get back to you within 3-5 working days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={`mailto:${hrContact.email}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                📧 {hrContact.email}
              </a>
              <a
                href={`tel:${hrContact.phone.replace(/\s/g, "")}`}
                className="btn-secondary inline-flex items-center gap-2"
              >
                📱 {hrContact.phone}
              </a>
            </div>

            <p className="text-secondary text-sm">
              HR Department • HS Tech, Indore - Betma - 453001, Madhya Pradesh
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CareersPage;
