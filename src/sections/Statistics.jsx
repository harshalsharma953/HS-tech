import React from "react";
import { motion } from "framer-motion";
import Counter from "../components/Counter";
import { staggerContainer, staggerItem } from "../animations/variants";

const Statistics = () => {
  const stats = [
    { label: "Projects Delivered", value: 12 },
    { label: "Happy Clients", value: 6 },
    { label: "Apps Published", value: 5 },
    { label: "Client Satisfaction", value: 98 },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          {...staggerContainer}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl text-center hover-lift"
              variants={staggerItem}
            >
              <Counter end={stat.value} duration={2.5} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
