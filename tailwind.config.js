module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
        'grey-hover': '#343434',
        'grey-bg': '#F2F2F2'
      },
      fontSize: {
        shadeText: '10.625rem',
        h1: '4.375rem',
        h2: '2.875rem',
        strong: '1.625rem',
        p: '1.5rem',
        small: '1.125rem',
        note: '0.75rem'
      },
      borderRadius: {
        btn: '3.75rem'
      },
      inset: {
        'n15': '-1rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}