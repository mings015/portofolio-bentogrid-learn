/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary : '#A291FD',
        primary_600: '#101010',
        primary_500: '#191919',
        primary_400: '#282828',
        primary_450: '#191919',
        primary_300: '#999999',
        primary_200: '#CCCCCC',
        primary_100: '#E6E6E6',
      }, 
    },
  },
  plugins: [],
}

