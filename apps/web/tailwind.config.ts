import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0B1B3A",
        orbit: "#1ED6C1",
        ion: "#FF7A18",
        nebula: "#4F56FF",
        cloud: "#EEF1F5",
        charcoal: "#0F172A"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      boxShadow: {
        glow: "0 10px 40px rgba(14, 186, 167, 0.35)"
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

