import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { fadeInUp, staggerContainer, staggerItem } from "../animations/variants";

const NewsPage = () => {
  const news = [
    {
      title: "HS Tech Launches AI-Powered Solutions",
      date: "Jan 2024",
      description: "We are excited to announce the launch of our new AI and automation services to help businesses work smarter.",
      tag: "Launch",
    },
    {
      title: "New Website Development Services",
      date: "Nov 2023",
      description: "HS Tech now offers complete website development solutions for businesses looking to establish their online presence.",
      tag: "Services",
    },
    {
      title: "Rajmani Jewellers App Crosses 50K Downloads",
      date: "Aug 2023",
      description: "Our client's jewellery app has achieved a major milestone with over 50,000 downloads on Google Play Store.",
      tag: "Milestone",
    },
    {
      title: "HS Tech Expands Team",
      date: "May 2023",
      description: "We are growing! HS Tech welcomes new developers and designers to the team to serve our clients better.",
      tag: "Team",
    },
    {
      title: "Partnership with Ved Tour & Travels",
      date: "Mar 2023",
      description: "HS Tech partners with Ved Tour & Travels to build their digital booking platform.",
      tag: "Partnership",
    },
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">News & Updates</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Latest happenings and announcements from HS Tech.
          </p>
        </motion.div>

        {/* News List */}
        <motion.div className="space-y-6 max-w-3xl mx-auto" {...staggerContainer}>
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass p-6 rounded-xl hover-lift"
              variants={staggerItem}
            >
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
                <span className="text-xs text-secondary">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsPage;
