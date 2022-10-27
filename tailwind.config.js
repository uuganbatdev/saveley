/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#385f61'
//#202124
      }
    },
  },
  plugins: [require("daisyui")],
}
