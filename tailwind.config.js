/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      sans: ['Fredoka', 'sans-serif'],
      },

    fontSize: {
      sm: '0.8rem',
      base: '0.9rem',
      xl: '1.3rem',
      '2xl': '1.456rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.4rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },

    colors: {
      "pink": "#f8a9d1",
      "blue": "#9dd6e5",
      "white": "#fcfffe",
      "gray": "#d9dbdd",
      "gray-200": "#e5e7eb",
      "gray-500": "#6b7280",
      "gray-700": "#374151",
    },

    extend: {},
  },
  plugins: [],
}

