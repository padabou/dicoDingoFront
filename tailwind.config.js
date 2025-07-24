const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      maxWith: '100%',
    },
    extend: {
      colors: {
        gray: colors.neutral,
        'custom-blue': '#00539C',
        'custom-red': '#C27C6A',
        'custom-sauge-green': '#A4C2A5',
        'custom-grey': '#2E2E2E',
        'custom-broken-white':'#F5F5F5',
        'custom-clear-blue': '#EAF0F6'
      },
      fontFamily: {
        // to change, update font in _document.js
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        stock: [defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      }
    },
    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
      3000: '3000ms'
    },
  },
  variants: {
    extend: {}
  },

  plugins: [require("@tailwindcss/typography")]
};
