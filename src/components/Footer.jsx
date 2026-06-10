import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: "Mobile Development", href: "#services" },
      { label: "Web Development", href: "#services" },
      { label: "AI Solutions", href: "#services" },
      { label: "Cloud Integration", href: "#services" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
    ],
    Support: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Contact Support", href: "#contact" },
      { label: "Status", href: "#" },
    ],
  };

  return (
    <footer className="bg-dark-secondary border-t border-primary/10">
      <div className="section-container py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoImage}
                alt="HS Tech Logo"
                className="w-8 h-8 object-cover rounded-lg"
                onError={(e) => {
                  e.target.style.display = "none";
                  if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.style.display = "flex";
                  }
                }}
              />
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center hidden">
                <span className="text-sm font-bold">HS</span>
              </div>
              <span className="text-lg font-bold">HS Tech</span>
            </div>
            <p className="text-secondary text-sm">
              Transforming ideas into digital excellence with premium software
              solutions.
            </p>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map((column, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">{column[0]}</h4>
              <ul className="space-y-2">
                {column[1].map((link, i) => (
                  <li key={i}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-secondary hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-secondary hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-secondary text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {currentYear} HS Tech. All rights reserved. | Privacy Policy |
            Terms of Service
          </motion.p>

          <motion.div
            className="flex gap-6 mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { name: "Twitter", url: "#" },
              { name: "LinkedIn", url: "#" },
              { name: "GitHub", url: "#" },
              { name: "Instagram", url: "https://www.instagram.com/hstech.ind?igsh=MWp2bDF3M2FldmYybw==" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors text-sm"
              >
                {social.name}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
