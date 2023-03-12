/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2052",
        primaryBlue: "#4285F4"
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        lato: "Lato, sans-serif",
        playfair: "Staatliches, sans-serif",
      },
      boxShadow: {
        shadowMain: "0px 15px 20px 0 rgba(0, 0, 0, 0.070)",
        shadowNews: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)"
      }

    },
  },
  plugins: [],
}
