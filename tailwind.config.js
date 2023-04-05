/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#F65916",
        background: "#00282E",
        yellow: "#FFBD13",
        input: "#C4C4C4"
      },
      fontFamily: {
        italian: ["Italianno"],
        main: ["Inter"]
      }
    },
  },
  plugins: [],
}

