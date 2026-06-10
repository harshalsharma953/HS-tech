import React from "react";
import { motion } from "framer-motion";

const Loader = () => {

  return (
    <motion.div
      className="fixed inset-0 bg-dark z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Loading logo animation */}
      <motion.div
        className="flex flex-col items-center gap-8"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative w-24 h-24">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent border-t-primary border-r-accent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner rotating ring (opposite direction) */}
          <motion.div
            className="absolute inset-3 border-2 border-transparent border-b-neon rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-xl font-bold">HS</span>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <motion.p
          className="text-lg font-semibold gradient-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
