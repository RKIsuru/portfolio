/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "san-serif"],
      },
      screens: {
        xxxs: "300px",
        xxs: "440px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
