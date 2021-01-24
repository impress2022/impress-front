import "tailwindcss/tailwind.css"
import "../styles/common.css"
import App from 'next/app'
import {MenuContext} from "../hooks/useMenu";

function MyApp({ Component, pageProps }) {
  return (
    <MenuContext.Provider value={pageProps.menu}>
      <Component {...pageProps} />
    </MenuContext.Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/wp/v2/pages/105')
  const data = await res.json()

  const appProps = await App.getInitialProps(appContext);

  appProps.pageProps.menu = data.acf;

  return { ...appProps }
}

export default MyApp
