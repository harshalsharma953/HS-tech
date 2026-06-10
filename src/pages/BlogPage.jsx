import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { fadeInUp, staggerContainer, staggerItem } from "../animations/variants";

const BlogPage = () => {
  const posts = [
    {
      title: "Why Your Business Needs a Mobile App in 2024",
      date: "Dec 15, 2024",
      category: "Mobile Development",
      excerpt: "Discover how a mobile app can boost customer engagement and drive revenue for your business.",
      readTime: "5 min read",
    },
    {
      title: "React Native vs Flutter: Which One to Choose?",
      date: "Nov 28, 2024",
      category: "Technology",
      excerpt: "A detailed comparison of the two most popular cross-platform frameworks for mobile development.",
      readTime: "7 min read",
    },
    {
      title: "How AI is Transforming Small Businesses",
      date: "Oct 10, 2024",
      category: "AI & Automation",
      excerpt: "Learn how artificial intelligence tools can automate tasks and improve decision-making.",
      readTime: "4 min read",
    },
    {
      title: "Top Web Design Trends for 2025",
      date: "Sep 20, 2024",
      category: "Web Development",
      excerpt: "Stay ahead of the curve with these upcoming design trends that will dominate the web.",
      readTime: "6 min read",
    },
    {
      title: "Building Scalable Backend with Node.js",
      date: "Aug 5, 2024",
      category: "Backend",
      excerpt: "Best practices for building robust and scalable server-side applications with Node.js.",
      readTime: "8 min read",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Insights, tutorials, and updates from the HS Tech team.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" {...staggerContainer}>
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              className="glass p-6 rounded-xl hover-lift cursor-pointer group"
              variants={staggerItem}
            >
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                {post.category}
              </span>
              <h3 className="text-lg font-bold mt-3 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-secondary text-sm mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex justify-between items-center text-xs text-secondary">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Coming Soon Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary">More articles coming soon. Stay tuned!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
