/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: "var(--primary)",
        error: "var(--error)",
        warning: "var(--warning)",
        success: "var(--success)",
      },
    },
  },
  plugins: [],
}
