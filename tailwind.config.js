/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d8efff',
          200: '#b9e4ff',
          300: '#88d5ff',
          400: '#4bbfff',
          500: '#1fa6ff',
          600: '#0686ff',
          700: '#006ce6',
          800: '#0459b9',
          900: '#0a4c91',
        },
      },
    },
  },
  plugins: [],
};
