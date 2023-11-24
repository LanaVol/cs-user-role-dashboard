/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ttsmalls: ["var(--font-ttSmalls)", ...fontFamily.sans],
      },
      colors: {
        dark: "#292930",
        light: "#F5F5F5",
        light8: "#F5F5F508",
        light16: "#F5F5F516",
        light24: "#F5F5F524",
        primary: "#303038",
        secondary: "#6B6B7B",
        contrast1: "#6764F1",
        shadow16: "#6764F116",
        contrast2: "#EFB62B",
        grey: "#9C9CB0",
      },
      boxShadow: {
        titleShadow: "0px 4px 16px #00000024",
      },
    },
  },
  screens: {
    "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    xs: { max: "479px" },
    // => @media (max-width: 479px) { ... }
  },
  plugins: [],
};
