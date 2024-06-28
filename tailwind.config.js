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
          navbar: "#9EBED7",
          header: "#4F9AD7",
          buttons: "#77ABD4",
          buttons_darker: "#5C8CB3",
        },
      },
    },
  },
  plugins: [],
};
