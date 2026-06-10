import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ParticleBackground = ({ particleCount = 50 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create particles
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: radial-gradient(circle, rgba(14, 165, 255, 0.8), rgba(14, 165, 255, 0.2));
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 ${Math.random() * 10 + 10}px rgba(14, 165, 255, 0.6);
        pointer-events: none;
      `;

      containerRef.current.appendChild(particle);
      particles.push(particle);

      // Animate each particle
      gsap.to(particle, {
        duration: Math.random() * 20 + 20,
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        opacity: Math.random() * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, [particleCount]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(14, 165, 255, 0.1) 0%, transparent 70%)",
      }}
    />
  );
};

export default ParticleBackground;
