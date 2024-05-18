/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

