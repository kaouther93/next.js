import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio de développeur web - Next.js, React, JavaScript" />
        <meta name="keywords" content="développeur web, react, nextjs, javascript, portfolio" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
