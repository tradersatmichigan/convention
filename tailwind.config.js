/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],

}
