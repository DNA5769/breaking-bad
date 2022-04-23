module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter',],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}