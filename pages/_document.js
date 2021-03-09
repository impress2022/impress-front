import Document, { Html, Head, Main, NextScript } from "next/document";

class BaseDocument extends Document {
  render() {
    return (
      <Html lang="pl" prefix="og: https://ogp.me/ns#">
        <Head>
            <meta
                name="Description"
                content="Budowanie wizerunku, media społecznościowe, facebook, identyfikacja wizualna, doradztwo.  Agencja marketingowa ★ Nowy Sącz ★ Rynek 13 ☎ 883 969 963"
            />
              <link rel="preconnect" href="https://res.cloudinary.com" />
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
              />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BaseDocument;
