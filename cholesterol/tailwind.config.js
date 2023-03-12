/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2052",
        blue: "#4285F4",
        shadowContent: "#5A98FF"

      },
      fontFamily: {
        inter: "Inter, sans-serif",
        lato: "Lato, sans-serif",
        staatliches: "Staatliches, sans-serif",
        poppins: "Poppins, sans-serif",
        playfair: "Playfair Display, serif",
      },
      boxShadow: {
        shadowMain: "0px 15px 20px 0 rgba(0, 0, 0, 0.2)",
        shadowNews: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
      },

      dropShadow: {
        shadowContentBlue: "20px 20px 0 rgb(90, 152, 255)",
        shadowContentRed: "20px 20px 0 rgb(225, 74, 108)"
      }



    },
  },
  plugins: [],
}
