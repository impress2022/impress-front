import Document, { Html, Head, Main, NextScript } from "next/document";

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

          <!-- Facebook Pixel Code -->

          <script
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '346655060043456');
            fbq('track', 'PageView');
        `,
            }}
          />

          <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=346655060043456&ev=PageView&noscript=1"/></noscript>
          <!-- End Facebook Pixel Code -->

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
