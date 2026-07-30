import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logoImage from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Services", to: "services" },
    { label: "Technologies", to: "technologies" },
    { label: "Portfolio", to: "portfolio" },
    { label: "Process", to: "process" },
    { label: "Contact", to: "contact" },
  ];

  const handleScroll = (e) => {
    e.preventDefault();
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer flex-shrink-0">
          <motion.div
            className="flex items-center gap-1 sm:gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={logoImage}
              alt="HS Tech Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-lg"
              onError={(e) => {
                e.target.style.display = "none";
                if (e.target.nextElementSibling) {
                  e.target.nextElementSibling.style.display = "block";
                }
              }}
            />
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center hidden">
              <span className="text-sm sm:text-lg font-bold">HS</span>
            </div>
            <span className="text-base sm:text-xl font-bold gradient-text">HS Tech</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="hidden lg:block btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Let's Talk
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="lg:hidden glass mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="section-container py-4 flex flex-col gap-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-primary transition-colors py-2 border-b border-primary/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="btn-primary w-full mt-4"
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Let's Talk
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
