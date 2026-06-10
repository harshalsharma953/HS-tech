import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, duration = 2, label }) => {
  const [count, setCount] = React.useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });

  React.useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
        {count}+
      </div>
      <p className="text-secondary text-xs sm:text-sm md:text-base mt-1 sm:mt-2">{label}</p>
    </motion.div>
  );
};

export default Counter;
