/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      navy: {
        100: '#0a192f',
        200: '#172a45',
        300: '#303C55'
      },
      slate: {
        100: '#8892b0',
        200: '#a8b2d1',
        300: '#ccd6f6'
      },
      white: '#e6f1ff',
      green: '#64ffda',
      darkgreen: '#46dbb8',
    },
    extend: {},
  },
  plugins: [],
}

