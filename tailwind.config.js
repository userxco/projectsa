/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
      cool: ['Lobster', 'cursive'],
      overall: ['Lunasima', 'sans-serif'],
      nor: ['Roboto Slab', 'serif'],
      gg: ['Rowdies', 'cursive'],
      gp: ['Satoshi', 'sans-serif'],
      cc: ['Poppins', 'sans-serif'],
     
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
    extend: {
      colors: {
        dark: '#111111',
        grey: {
          DEFAULT: '#555555',
        },
      },
      backgroundImage: {
        hero: "url('/src/img/hero/bg.jpg')",
        about: "url('/src/img/about/image.png')",
        interview: "url('/src/img/interview/bg.png')",
        coolness: "url('/src/img/hero/pexels-adrian-boustead-955938.jpg')",
      },
      content: {
        outlineText: 'url("/src/img/hero/outline-text.svg")',
      },
    },
  },
  plugins: [],
};