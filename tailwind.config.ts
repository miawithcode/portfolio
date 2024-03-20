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
        blink: "blink 6s linear infinite",
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
          "0%": { transform: "scale(1)", opacity: "1" },
          "20%": {
            transform: "scale(0.9)",
            opacity: ".8",
          },
          "40%": {
            transform: "scale(1.1)",
            opacity: "1",
          },
          "60%": {
            transform: "scale(0.90)",
            opacity: ".8",
          },
          "80%": {
            transform: "scale(1.1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
