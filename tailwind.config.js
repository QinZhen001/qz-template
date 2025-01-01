import { CustomTheme } from './src/theme/tw.ts';
import animate from 'tailwindcss-animate';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { adapter } = require('./tailwind.adapter');

const test = adapter();
console.log(test);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...adapter(),
    extend: {
      ...CustomTheme,
    },
  },
  plugins: [animate],
};
