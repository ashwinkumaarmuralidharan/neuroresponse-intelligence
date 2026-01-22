import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1929",
          dark: "#051422",
        },
        teal: {
          accent: "#14B8A6",
          light: "#5EEAD4",
        },
        background: "#FAFAFA",
        text: {
          primary: "#1A1A1A",
          secondary: "#6B7280",
        },
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
