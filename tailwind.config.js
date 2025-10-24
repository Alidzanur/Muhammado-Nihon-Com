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
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        brand: {
          50: '#fef1f1',
          100: '#fee2e2',
          200: '#fcc9c9',
          300: '#faa3a3',
          400: '#f56565',
          500: '#BC002D',
          600: '#a7002a',
          700: '#920026',
          800: '#7d0022',
          900: '#68001e',
        },
        accent: {
          50: '#fff5f5',
          100: '#fed7d7',
          200: '#feb2b2',
          300: '#fc8181',
          400: '#f56565',
          500: '#e53e3e',
          600: '#c53030',
          700: '#9b2c2c',
          800: '#822727',
          900: '#63171b',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #BC002D 0%, #dc2626 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, rgba(188, 0, 45, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)',
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(188, 0, 45, 0.1)',
        'brand-lg': '0 10px 25px -3px rgba(188, 0, 45, 0.1), 0 4px 6px -2px rgba(188, 0, 45, 0.05)',
      },
    },
  },
  plugins: [],
};
