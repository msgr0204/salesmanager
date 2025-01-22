/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'], 
        roboto: ['roboto', 'sans-serif'], 
        inter: ['inter', 'sans-serif'], 
      },
      colors: {
        primero: {
          DEFAULT: '#0f172a',
          claro: '#1E293B',
          oscuro: '#080d17',
        },
        segundo: {
          DEFAULT: '#37B6EF',
          claro: '#57f1ff',
          oscuro: '#45bec9',
        },
        tercero: {
          DEFAULT: '#38bdf8',
          claro: '#3ac2ff',
          oscuro: '#2d98c7',
        },
        cuarto: {
          DEFAULT: '#f8fafc',
          claro: '#ffffff',
          medio: '#CAD4E0',
          semi: '#2C3C4F',
          oscuro: '#1E293B',
        },
      },
    },
  },
  plugins: [],
}