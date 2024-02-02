import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      mono: {
        "jetbrains-mono": ["JetBrains Mono"],
      },
      animation: {
        fadeout: "fadeOut 0.7s ease-in-out",
        fadein: "fadeIn 0.7s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: '1' },
          "100%": { opacity: '0' },
        },
        fadeIn: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
