import { CustomTheme } from "./src/theme/tw.ts"
import animate  from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
     ...CustomTheme
    },
  },
  plugins: [animate],
}
