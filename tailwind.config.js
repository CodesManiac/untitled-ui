/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: '#101828',
      lightGrey: '#EAECF0',
      white: '#FFFFFF',
      offWhite: '#F9FAFB',
      gray: '#667085',
      black: '#000000',
      purple: '#7F56D9',
      violet: '#6941C6',
      darkGrey: '#344054',
      searchBorder: '#D0D5DD',
      transparent: 'transparent',
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
};
