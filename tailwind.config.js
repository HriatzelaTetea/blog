const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.jsx",
    ],
    theme: {
      extend: {
        boxShadow: {
          n: "0 5px 5px rgb(0,0,0), inset  0 30px 25px -24px rgb(17,24,39), inset 0 -30px 25px -24px rgb(17,24,39)",
          nb: "5px 5px 8px rgb(0,0,0)",
          s: "inset -20px 0 20px -20px rgb(0,0,0)",
          sb: "inset 0 -15px 20px -15px rgb(0,0,0)",
          sbh: "inset 0 -15px 20px -15px rgb(0,0,0), 0 15px 10px -10px rgb(0,0,0)",
          i: "0 10px 20px -10px rgb(0,0,0)",
          bs: "10px rgb(194, 65, 12)"
        },
        animation: {
          spinx: "spin 5s linear infinite"
        },
        gridTemplateColumns: {
          c: "1fr 13rem 1fr"
        },
        minWidth: {
          btn: "8rem"
        }
      },
    },
    plugins: [],
  }
  