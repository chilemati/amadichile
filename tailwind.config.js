/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": "Inter"
      },
      colors: {
        "co1": "#BF7506",
        "co2": "#211B12",
        "co3": "#E0DEDC",
        "co4": "#83807C",
      }
    },
  },
  plugins: [],
}