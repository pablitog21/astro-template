/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita el modo oscuro mediante clases
  content: ['./src/**/*.{html,js,ts,jsx,tsx,astro}'],
  theme: {
    extend: {
      colors: {
        'astro-dark': '#1a1a1a',
        'fuchsia-500': '#d946ef',
        'indigo-600': '#5b21b6',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #d946ef, #5b21b6)',
        'gradient-to-b': 'linear-gradient(to bottom, #1e293b, #7e22ce, #000)',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
};
