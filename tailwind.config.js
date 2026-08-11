/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine:   '#4A2535',
        rose:   '#D4396B',
        salmon: '#F08090',
        cream:  '#F5D5B0',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
}
