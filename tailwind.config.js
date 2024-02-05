/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'slate': '#030712',
        'slate-800': '#1e293b',
        'slate-600': '#475569',
        'black': '#000000',
        'black-2' : '#202020',
        'neutral-700': '#404040',
        'rose-600': '#E2244E',
      },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

