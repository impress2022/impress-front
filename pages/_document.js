import Document, { Html, Head, Main, NextScript } from "next/document";
import FacebookPixel from "../components/facebookPixel";

class BaseDocument extends Document {
  render() {
    return (
      <Html lang="pl" prefix="og: https://ogp.me/ns#">
        <Head>
            <meta
                name="Description"
                content="Marketing, PR, social media, Facebook, identyfikacja wizualna, grafika, logo, kampanie reklamowe. Sprawdź nas! Zapraszamy ★ Nowy Sącz ★ Rynek 13 ☎ 883 969 963"
            />
              <link rel="preconnect" href="https://res.cloudinary.com" />
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
              />
              <link rel="shortcut icon" href={process.env.NEXT_PUBLIC_FRONT_URL + "images/favicon.ico"} />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta property="og:title" content="ImPress PR & Marketing – robimy to, na czym się znamy" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={process.env.NEXT_PUBLIC_FRONT_URL} />
              <meta property="og:image" content={process.env.NEXT_PUBLIC_FRONT_URL + "images/logo-thumb.jpg"} />

          {/*// <!-- Global site tag (gtag.js) - Google Analytics -->*/}

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-26111618-1"/>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-26111618-1');
        `,
            }}
          />
          <FacebookPixel/>
        </Head>
        <body itemScope itemType="http://schema.org/WebPage">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BaseDocument;
