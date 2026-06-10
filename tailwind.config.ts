import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skadi: {
          bg: "#080e07",
          green: "#6e964f",
          "green-light": "#abbe9c",
          card: "#202b1f",
          muted: "rgba(255,255,255,0.54)",
          faint: "rgba(210,213,208,0.87)",
        },
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
