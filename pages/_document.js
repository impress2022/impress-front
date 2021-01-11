import Document, { Html, Head, Main, NextScript } from 'next/document'

class BaseDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head >
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap" rel="stylesheet"/>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default BaseDocument