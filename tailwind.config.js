/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#0EA5E9" },
      fontFamily: { inter: ["Inter", "sans-serif"] },
    },
  },
  plugins: [],
};
