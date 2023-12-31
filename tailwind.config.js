/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      orange: {
        500: '#f3860d',
        600: '#d76208',
        700: '#b2420b',
      },
      slate: '#94a3b8',
      blue: '#022144',
      darkblue: '#001B36',
      gray: '#888',
      green: '#00b300'
    },
    extend: {
      backgroundImage: {
        'noise': 'url("/images/noise.png")',
        'hero': 'url("/images/hero.webp")',
      }
    },
  },
  plugins: [],
};
