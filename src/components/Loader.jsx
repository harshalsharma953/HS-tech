import React from "react";
import { motion } from "framer-motion";
import logoImage from "../assets/images/logo.png";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-dark z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Background pulse */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(30,144,255,0.05) 0%, transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(30,144,255,0.15) 0%, transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(30,144,255,0.05) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Logo with rings */}
        <div className="relative w-28 h-28">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ rotate: { duration: 3, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          />

          {/* Middle ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-accent/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner glow ring */}
          <motion.div
            className="absolute inset-4 rounded-full"
            style={{ boxShadow: "0 0 30px rgba(30,144,255,0.3), inset 0 0 30px rgba(30,144,255,0.1)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Center logo */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={logoImage}
              alt="HS Tech"
              className="w-14 h-14 rounded-lg object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                if (e.target.nextElementSibling) {
                  e.target.nextElementSibling.style.display = "flex";
                }
              }}
            />
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent items-center justify-center hidden">
              <span className="text-xl font-bold">HS</span>
            </div>
          </motion.div>
        </div>

        {/* Company name with typing effect */}
        <motion.div className="text-center">
          <motion.h2
            className="text-2xl font-bold gradient-text mb-2"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.1em" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            HS Tech
          </motion.h2>
          <motion.p
            className="text-secondary text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.7, 1] }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            Transforming Ideas Into Digital Excellence
          </motion.p>
        </motion.div>

        {/* Loading bar */}
        <motion.div className="w-48 h-0.5 bg-dark-tertiary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
