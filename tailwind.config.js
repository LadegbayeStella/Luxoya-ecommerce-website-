/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#FAF6F2',
        secondary: '#34251F',
        inputbg: '#E3E3E3',
        white : '#FFFFFF',
        footer: '#A5A5A5',
        placeholder: '#212121',
        subscribe: '#683B2B',
      },
        //  npx tailwindcss -i ./input.css -o ./output.css --watch //
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        kepler: "'Kepler Std', sans-serif",
      },
      width: {
        window: "83%",
        window2:'37%',
        footer1: "23.33%",
        footer2: "30%",
      },
    },
  },
  plugins: [],
}
