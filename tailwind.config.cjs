/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.res.mjs"],
  theme: {
    extend: {
      colors: {
        plain: {
          50: "#f8fbf9",
          100: "#f1f6f3",
          200: "#e0eae5",
          300: "#c9d8d1",
          400: "#8ea99c",
          500: "#5d7b6d",
          600: "#405b4f",
          700: "#2c473b",
          800: "#162f24",
          900: "#021d13",
        },
      },
    },
  },
  plugins: [],
};
