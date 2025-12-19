/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          500: '#FF9500',
          600: '#ea7c00',
        }
      },
      spacing: {
        72: '18rem',
      }
    },
  },
  plugins: [],
}
