/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        Orange: 'hsl(26, 100%, 55%)',
        PaleOrange: 'hsl(25, 100%, 94%)',
        VeryDarkBlue: 'hsl(220, 13%, 13%)',
        DarkGrayishBlue: 'hsl(219, 9%, 45%)',
        GrayishBlue: 'hsl(220, 14%, 75%)',
        LightGrayishBlue: 'hsl(223, 64%, 98%)',
      },
    },
  },
  plugins: [],
};
