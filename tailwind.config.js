module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        primary: ['Aller'],
        secondary: ['Encode Sans']
      },
      colors: {
        grey: '#202222',
        green: '#C7D300',
        red: '#CC3366',
        blue: '#3580CC',
        white: '#FFFFFF',
        'customGrey': '#909191',
        'grey-hover': '#343434',
        'grey-bg': '#F2F2F2',
        'grey-hover-btn': '#7E7E7E',
        'light-grey': '#4B4B4B',
      },
      fontSize: {
        '10.625': '10.625rem',
        '4.375': '4.375rem',
        '2.875': '2.875rem',
        '1.625': '1.625rem',
        '1.5': '1.5rem',
        '1.375': '1.375rem',
        '1.125': '1.125rem',
        '0.75': '0.75rem',
        '2.5': '2.5rem'
      },
      borderRadius: {
        btn: '3.75rem'
      },
      inset: {
        'n15': '-1rem',
      },
      spacing: {
        'l58': '58%'
      },
      fill: {
        'grey': '#202222',
        'green': '#C7D300',
        'red': '#CC3366',
        'blue': '#3580CC',
      },
      translate: {
        'o1': '0.1rem',
      },
      lineHeight: {
        '4.5': '1.125rem',
        '200': '200%',
        '250': '250%',
      },
      padding: {
        '20': '20rem',
        '5.25': '5.25rem',
      },
      boxShadow: {
        'menuInset': '0px 4px 0px 0px rgba(52,52,52,1)',
      },
      textColor: {
        'primary': '#202222',
      },
      margin: {
        '15': '3.75rem',
      },
      width: {
        '25': '6.25rem',
        '22': '5.50rem',
      },
      height: {
        '25': '6.25rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}