/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      orange: {
        500: "#FFC134",
        600: "#d76208",
        700: "#b2420b",
      },
      slate: "#8892b0",
      lightestSlate: "#ccd6f6",
      blue: "#0a192f",
      darkblue: "#112240",
      bluethin: "#233554",
      gray: "#888",
      green: "#00b300",
      degrade: "#ffffff99",
      error: "red",
      success: "green",
    },
    extend: {
      backgroundImage: {
        trait: 'url("/images/trait.webp")',
        "hero-mobile": 'url("/images/hero-mobile.webp")',
        "hero-large": 'url("/images/desktop.jpg")',
      },
    },
  },
  plugins: [],
};
