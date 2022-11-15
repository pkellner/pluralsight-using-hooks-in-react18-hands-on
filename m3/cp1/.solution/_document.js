import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/bootstrap.css" />
      </Head>
      <body>
      <div className="container">
        <Main />
      </div>
      <NextScript />
      </body>
    </Html>
  );
}
