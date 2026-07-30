import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ParticleBackground = ({ particleCount = 40 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = [];
    const colors = [
      "rgba(30, 144, 255, 0.6)",
      "rgba(56, 189, 248, 0.5)",
      "rgba(10, 61, 145, 0.4)",
      "rgba(30, 144, 255, 0.3)",
    ];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 ${size * 4}px ${color};
        pointer-events: none;
        will-change: transform, opacity;
      `;

      containerRef.current.appendChild(particle);
      particles.push(particle);

      // Smooth floating animation
      gsap.to(particle, {
        duration: Math.random() * 30 + 20,
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        opacity: Math.random() * 0.4 + 0.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 5,
      });

      // Subtle scale pulse
      gsap.to(particle, {
        duration: Math.random() * 4 + 3,
        scale: Math.random() * 0.5 + 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      });
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, [particleCount]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, rgba(30, 144, 255, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(56, 189, 248, 0.04) 0%, transparent 50%)",
      }}
    />
  );
};

export default ParticleBackground;
