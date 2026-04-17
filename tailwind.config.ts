import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: "#6B1414",
        gold: "#C4992A",
        cream: "#FAF8F4",
        parchment: "#F2EDE4",
        charcoal: "#2C2C2C",
        mist: "#E8E2D9",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Instrument Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
