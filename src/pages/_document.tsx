import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <meta charSet="utf-8" />

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://grooveit.vercel.app/' />
          <meta name='twitter:title' content={'Groove.it'} />
          <meta name='twitter:description' content='O Groove.it surgiu para mesclar a técnica de Pomodoro com o amor de muitos dançarinos. Enquanto mantemos a saúde em dia enquanto estudamos ou trabalhamos.' />
          <meta name='twitter:image' content='https://intothewind.com/pub/media/catalog/product/cache/21e022855eefd8dd9c6fe26e185d2d84/_/5/_5_9_59501_2.jpg' />
          <meta name='twitter:creator' content='@JohnMaroe' />

          <meta property='og:type' content='website' />
          <meta property='og:title' content={'Groove.it'} />
          <meta property='og:description' content='O Groove.it surgiu para mesclar a técnica de Pomodoro com o amor de muitos dançarinos. Enquanto mantemos a saúde em dia enquanto estudamos ou trabalhamos.' />
          <meta property='og:site_name' content={'Groove.it'} />
          <meta property='og:url' content='https://grooveit.vercel.app/' />
          <meta property='og:image' content='https://intothewind.com/pub/media/catalog/product/cache/21e022855eefd8dd9c6fe26e185d2d84/_/5/_5_9_59501_2.jpg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}