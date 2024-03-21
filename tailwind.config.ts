import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)"],
      mono: ["var(--font-geist-mono)"],
    },
    extend: {
      colors: {
        primary: "#EA552B",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        blink: "blink 1.5s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        blink: {
          "0%": { transform: "scale(0.85)" },
          "33.33%": {
            transform: "scale(1.15)",
          },
          "66.67%": {
            transform: "scale(1.15)",
          },
          "100%": {
            transform: "scale(0.85)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
