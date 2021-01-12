module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '876px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1380px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        aller: ['Aller'],
        'en-sans': ['Encode Sans'],
        inter: ['Inter'],
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
        'lighter-grey': '#BDBDBD',
        'grey-hover-ghost': '#656565',
        'grey-card-bg': '#E5E5E5'
      },
      fontSize: {
        '10.625': '10.625rem',
        '4.375': '4.375rem',
        '3': '3rem',
        '2.875': '2.875rem',
        '2.625': '2.625rem',
        '2.5': '2.5rem',
        '2.25': '2.25rem',
        '1.75': '1.75rem',
        '1.625': '1.625rem',
        '1.5': '1.5rem',
        '1.375': '1.375rem',
        '1.25': '1.25rem',
        '1.125': '1.125rem',
        '0.75': '0.75rem',
        '0.5': '0.75rem',
      },
      borderRadius: {
        btn: '3.75rem'
      },
      inset: {
        'n15': '-1rem',
        '-15': '-15rem',
        '-1.375': '-1.375rem',
        '-219': '-219px',
        '-345': '-345px',
        '-6r': '-6rem',
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
        '0.875': '0.875',
        '3r': '3rem',
        '4r': '4rem',
        '2.625': '2.625rem',
        '2.125': '2.125rem',
        '4.5': '1.125rem',
        '5': '5rem',
        '200': '200%',
        '250': '250%',
        '11': '2.75rem',
        '12': '3rem',
      },
      padding: {
        '4.5': '4.5rem',
        '12.5': '12.5rem',
        '20': '20rem',
        '5.25': '5.25rem',
        '136': '34rem',
      },
      boxShadow: {
        'menuInset': '-300px 4px 0px 0px rgba(52,52,52,1)',
        'menuInsetActive': '0px 4px 0px 0px rgba(52,52,52,1)',
        'caseInset': '-10px 10px 0px 0px rgba(149,149,149,0.85)',
        'caseInsetActive': '-20px 20px 0px 0px rgba(126,126,126,0.85)',
        'caseInsetMobile': '-5px 5px 0px 0px rgba(149,149,149,0.85)',
        'caseInsetActiveMobile': '-10px 10px 0px 0px rgba(126,126,126,0.85)',
      },
      textColor: {
        'primary': '#202222',
      },
      margin: {
        '0.625': '0.625rem',
        '8r': '8rem',
        '7.5r': '7.5rem',
        '1.875': '1.875rem',
        '15': '3.75rem',
        '-136': '-34rem',
        's-mar': '200px',
      },
      width: {
        '25': '6.25rem',
        '22': '5.50rem',
        '320': '320px',
        '405': '405px',
        '400': '400px',
        'xs1': '22px',
        'x1': '73px',
        'x2': '115px',
        'x3': '146px',
        'x4': '219px',
        'x5': '230px',
        'x6': '240px',
        'x7': '345px',
        'l-320': '320px',
        'l-511': '511px',
        'l-805': '805px',
      },
      height: {
        '25': '6.25rem',
        'nav': '100px',
        '320': '320px',
        '400': '400px',
        '405': '405px',
        '420': '420px',
        'xs1': '22px',
        'x1': '73px',
        'x2': '115px',
        'x3': '146px',
        'x4': '219px',
        'x5': '230px',
        'x6': '240px',
        'x7': '345px',
        'l-320': '320px',
        'l-511': '511px',
        'l-805': '805px',
      },
      maxHeight: {
        '480': '480px',
      },
      maxWidth: {
        '803': '803px',
      },
      minWidth: {
        '387': '387px',
      },
      letterSpacing: {
        hero: '-2px',
        desc: '1%',
      }
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
}