import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-teal-accent',
    'text-teal-accent',
    'bg-teal-light',
    'text-teal-light',
    'border-teal-accent',
    'from-teal-accent',
    'to-teal-light',
    'bg-gradient-hero',
    'bg-gradient-section',
    'animate-fade-in-up',
    'animate-pulse-slow',
    'animate-gradient-shift',
    'hover-lift',
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
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 10s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
        'gradient-shift': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
