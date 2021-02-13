module.exports = {
  purge: {
    content: [
      "./pages/**/*.js",
      "./components/**/*.js",
      "./pages/**/*.jsx",
      "./components/**/*.jsx",
      "**/*.html",
      "**/*.svg",
      "**/*.woff2",
      "**/*.woff",
    ],
    options: {
      safelist: [
        "fill-green",
        "dark-green",
        "fill-red",
        "fill-grey",
        "fill-blue",
        "bg-grey",
        "bg-green",
        "bg-dark-green",
        "bg-red",
        "bg-blue",
        "bg-white",
        "bg-customGrey",
        "bg-grey-hover",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      // 'md': '876px',
      // => @media (min-width: 768px) { ... }

      md: "768px",
      // => @media (min-width: 1024px) { ... }

      md2: "876px",

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }

      xl: "1620px",

      "2xl": "2501px",
    },
    extend: {
      fontFamily: {
        aller: ["Aller"],
        "en-sans": ["Encode Sans"],
        inter: ["Inter"],
      },
      colors: {
        grey: "#202222",
        green: "#C7D300",
        "dark-green": "#A8B200",
        "green-hover": "#DCE823",
        red: "#CC3366",
        "input-red": "#E9316F",
        "red-hover": "#B52052",
        blue: "#3580CC",
        "input-color": "#E0E0E0",
        white: "#FFFFFF",
        customGrey: "#909191",
        "grey-hover": "#343434",
        "grey-bg": "#F2F2F2",
        "grey-hover-btn": "#7E7E7E",
        "light-grey": "#4B4B4B",
        "grey-background-box": "#A6A6A6",
        "lighter-grey": "#BDBDBD",
        "grey-hover-ghost": "#656565",
        "grey-card-bg": "#E5E5E5",
      },
      fontSize: {
        "10.625": "10.625rem",
        "4.375": "4.375rem",
        "3": "3rem",
        "2.875": "2.875rem",
        "2.625": "2.625rem",
        "2.5": "2.5rem",
        "2.25": "2.25rem",
        "1.75": "1.75rem",
        "1.625": "1.625rem",
        "1.5": "1.5rem",
        "1.375": "1.375rem",
        "1.25": "1.25rem",
        "1.125": "1.125rem",
        "0.75": "0.75rem",
        "0.5": "0.75rem",
        "0.625": "0.625rem",
        "170": "170px",
        initial: "initial",
      },
      borderRadius: {
        btn: "3.75rem",
      },
      inset: {
        initial: "initial",
        "3.75": "3.75rem",
        n15: "-1rem",
        "7.5": "7.5rem",
        "-15": "-15rem",
        "-1.375": "-1.375rem",
        "-219": "-219px",
        "-345": "-345px",
        "-6r": "-6rem",
        "-xs1": "-22px",
        xs1: "22px",
        "100": "100px",
        "200": "200px",
        "26px": "26px",
        "57px": "57px",
      },
      spacing: {
        l58: "58%",
      },
      fill: {
        grey: "#202222",
        green: "#C7D300",
        red: "#CC3366",
        blue: "#3580CC",
      },
      translate: {
        o1: "0.1rem",
        xs1: "22px",
        "137": "137px",
        "5p": "5%",
        "-80p": "-80%",
      },
      lineHeight: {
        "0.875": "0.875",
        "3r": "3rem",
        "4r": "4rem",
        "2.625": "2.625rem",
        "2.875": "2.875rem",
        "2.125": "2.125rem",
        "4.5": "1.125rem",
        "5": "5rem",
        "200": "200%",
        "250": "250%",
        "11": "2.75rem",
        "12": "3rem",
        "200px": "200px",
        "1.5": "1.5rem",
      },
      padding: {
        "4.5": "4.5rem",
        "15": "3.75rem",
        "12.5": "12.5rem",
        "20": "20rem",
        "7.5r": "7.5rem",
        "5.25": "5.25rem",
        "7.25": "7.25rem",
        "104": "26rem",
        "132": "34rem",
        "300": "300px",
        "-690": "-690px",
      },
      boxShadow: {
        menuInset: "-300px 4px 0px 0px rgba(52,52,52,1)",
        menuInsetActive: "0px 4px 0px 0px rgba(52,52,52,1)",
        caseInset: "-10px 10px 0px 0px rgba(149,149,149,0.85)",
        caseInsetActive: "-15px 15px 0px 0px rgba(126,126,126,0.85)",
        caseInsetMobile: "-5px 5px 0px 0px rgba(149,149,149,0.85)",
        sliderMobile: "-5px 5px 0px 0px rgba(0,0,0,0.1)",
        sliderTablet: "-10px 10px 0px 0px rgba(0,0,0,0.1)",
        dark: "-5px 5px 0px 0px rgba(0,0,0,0.4)",
        "dark-wide": "-10px 10px 0px 0px rgba(0,0,0,0.4)",
        buttonBg: "-10px 10px 0px 0px rgba(0,0,0,0.3)",
        caseInsetActiveMobile: "-10px 10px 0px 0px rgba(126,126,126,0.85)",
        cardShadow: "0px 0px 0px 0px rgba(0,0,0,0.45)",
        cardShadowActive: "-15px 15px 0px 0px rgba(0,0,0,0.45)",
        slider:
          "-30px 0px 0px 0px rgba(52,52,52,1), 30px 0px 0px 0px rgba(52,52,52,1)",
        challenges:
          "-30px 0px 0px 0px rgba(199,211,0,1), 30px 0px 0px 0px rgba(199,211,0,1)",
        "challenges-li": "-6px 0px 0px 0px rgba(220,232,35,1)",
        "1px-grey": "0px 2px 0px 0px rgba(32,34,34,1)",
        "1px-white": "0px -2px 0px 0px rgba(255,255,255,1)",
        "1px-red": "0px 2px 0px 0px rgba(204,51,102,1)",
      },
      textColor: {
        primary: "#202222",
      },
      margin: {
        "0.625": "0.625rem",
        "8r": "8rem",
        "7.5r": "7.5rem",
        "1.875": "1.875rem",
        "2.625": "2.625rem",
        "3.125": "3.125rem",
        "5.625": "5.625rem",
        "6.25": "6.25rem",
        "15": "3.75rem",
        "-104": "-26rem",
        "s-mar": "200px",
        "20p": "20%",
        "30p": "30%",
        "150": "150px",
        "200": "200px",
        "-200": "-200px",
        "250": "250px",
        "300": "300px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
        "700": "700px",
      },
      width: {
        "45p": "45%",
        "25": "6.25rem",
        "22": "5.50rem",
        "320": "320px",
        "405": "405px",
        "438": "438px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
        "690": "690px",
        xs1: "22px",
        xs2: "57px",
        xs3: "40px",
        xs4: "36px",
        xs5: "80px",
        x1: "73px",
        x2: "115px",
        x3: "146px",
        x4: "219px",
        x5: "230px",
        x6: "240px",
        x7: "345px",
        "w-41": "40vw",
        "l-320": "60vh",
        "l-511": "42vh",
        "l-805": "80vh",
        "xl-80": "75vh",
        "l-118": "118px",
        "l-160": "160px",
        "l-255": "255px",
        "3/8": "37.5%",
      },
      height: {
        "25": "6.25rem",
        nav: "100px",
        "155": "155px",
        "220": "220px",
        "320": "320px",
        "345": "345px",
        "390": "390px",
        "438": "438px",
        "400": "400px",
        "625": "625px",
        "690": "690px",
        "405": "405px",
        "420": "420px",
        xs1: "22px",
        xs2: "57px",
        xs3: "40px",
        xs4: "36px",
        xs5: "80px",
        x1: "73px",
        x2: "115px",
        x3: "146px",
        x4: "219px",
        x5: "230px",
        x6: "240px",
        x7: "345px",
        "l-320": "60vh",
        "l-511": "42vh",
        "l-805": "80vh",
        "xl-80": "75vh",
        "l-118": "118px",
        "l-160": "160px",
        "l-255": "255px",
        "80p": "80%",
        "500": "500px",
        "100vh": "100vh",
        "50vh": "50vh",
        "30vh": "30vh",
        "80px": "80px",
        "148px": "148px",
        "230px": "230px",
      },
      maxHeight: {
        "480": "480px",
        "350": "350px",
        "555": "555px",
      },
      maxWidth: {
        "40": "40%",
        "50": "50%",
        "90": "90%",
        "14": "14rem",
        "16.25": "16.25rem",
        "26.875": "26.875rem",
        "25": "25rem",
        "26.5": "26.5rem",
        "280": "280px",
        "365": "365px",
        "803": "803px",
        "670": "670px",
        "690": "690px",
        "460": "460px",
        "500": "500px",
        "555": "555px",
        "1/3": "33.33%",
      },
      minWidth: {
        "35": "35vw",
        "1/3": "33vw",
        "1/4": "25vw",
        "345": "345px",
        "387": "387px",
        "42": "42vw",
        "60vw": "60vw",
        "70vw": "70vw",
      },
      minHeight: {
        "40": "40vh",
        "60": "60vh",
        "80": "80vh",
        "300": "300px",
        "410": "410px",
        "455": "455px",
        "510": "510px",
      },
      letterSpacing: {
        hero: "-2px",
        desc: "1%",
      },
      flex: {
        "100": "1 1 100%",
        "50": "1 1 50%",
        "40": "1 1 40%",
        "30": "1 1 30%",
      },
      outline: {
        "grey-slider": "25px solid #202222",
      },
      borderColor: {
        grey: "#202222",
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
        "bounce-slow-diag": "bounce-arrow-diag 2s linear infinite",
      },
      keyframes: {
        "bounce-arrow-diag": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(10px, -10px, 0)" },
        },
      },
      zIndex: {
        "60": "60",
      },
      scale: {
        "200": "2",
      },
      backgroundColor: {
        modal: "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
      translate: ["first"],
    },
  },
  plugins: [],
};
