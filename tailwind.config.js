import typography from "@tailwindcss/typography";

export default {
  plugins: [typography],
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};