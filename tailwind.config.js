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
      checkBorder: '#D6BBFB',
      checkWhite: '#F9F5FF',

      deepPurple: '#53389E',
      deepViolet: '#9E77ED',
      transparent: 'transparent',
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        'tabs': '0 1px 2px rgba(16, 24, 40, 0.05)',
      },
      boxShadow: {
        'input': '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
    customForms: (theme) => ({
      default: {
        checkbox: {
          icon: `<svg fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>`,
        },
        radio: {
          icon: '<svg fill="#7F56D9" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>',
        },
      },
    }),
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/custom-forms'),
  ],
};
