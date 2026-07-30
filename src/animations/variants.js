// Smooth easing curves
const smoothEase = [0.25, 0.46, 0.45, 0.94];
const springConfig = { type: "spring", stiffness: 100, damping: 15 };

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: smoothEase },
  viewport: { once: true, margin: "-50px" },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: smoothEase },
  viewport: { once: true, margin: "-50px" },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: smoothEase },
  viewport: { once: true, margin: "-50px" },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: smoothEase },
  viewport: { once: true, margin: "-50px" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: smoothEase },
  viewport: { once: true, margin: "-50px" },
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  viewport: { once: true, margin: "-50px" },
};

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: smoothEase },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -5, scale: 0.95 },
  whileInView: { opacity: 1, rotate: 0, scale: 1 },
  transition: { duration: 0.6, ease: smoothEase },
  viewport: { once: true },
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: smoothEase },
  viewport: { once: true, margin: "-50px" },
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: smoothEase },
  viewport: { once: true, margin: "-50px" },
};

export const blurIn = {
  initial: { opacity: 0, filter: "blur(10px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: smoothEase },
  viewport: { once: true },
};

export const popIn = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: springConfig,
  viewport: { once: true },
};
