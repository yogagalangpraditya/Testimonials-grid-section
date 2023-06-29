/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'barlow-semi-condensed': ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

