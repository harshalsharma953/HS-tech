/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5FF",
        secondary: "#C0C0C0",
        accent: "#38BDF8",
        dark: "#050816",
        "dark-secondary": "#0F172A",
        "dark-tertiary": "#1E293B",
        neon: "#00D9FF",
        "neon-pink": "#FF006E",
        "glow-blue": "#0EA5FF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(14, 165, 255, 0.5)",
        "glow-lg": "0 0 40px rgba(14, 165, 255, 0.7)",
        neon: "0 0 10px rgba(0, 217, 255, 0.5), inset 0 0 10px rgba(0, 217, 255, 0.1)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "rotate-slow": "rotate 20s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(14, 165, 255, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(14, 165, 255, 0.8)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
