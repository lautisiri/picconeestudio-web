import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          soft: "#141414",
        },
        navy: {
          DEFAULT: "#0b1c3a",
          deep: "#081428",
          light: "#16305c",
        },
        cream: {
          DEFAULT: "#faf8f4",
          soft: "#f3efe6",
        },
        gold: {
          DEFAULT: "#b8964f",
          light: "#d4b878",
          dark: "#8f7238",
        },
        plum: {
          DEFAULT: "#4a3f6b",
          soft: "#6b5b95",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1360px",
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, #b8964f, transparent)",
      },
      boxShadow: {
        premium: "0 20px 60px -20px rgba(11, 28, 58, 0.35)",
        soft: "0 8px 30px -10px rgba(10, 10, 10, 0.15)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 32s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
