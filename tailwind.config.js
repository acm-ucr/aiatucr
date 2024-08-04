/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ai: {
          "blue-600": "#47759B",
          "blue-500": "#4F9AD7",
          "blue-400": "#77ABD4",
          "blue-300": "#9EBED7",
          "blue-200": "#AEC6D8",
          black: "#2E2E2E",
          gray: "#323232",
        },
      },
    },
  },
  plugins: [],
};
