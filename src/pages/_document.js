import { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom document component for Next.js.
 * @returns {JSX.Element} - The HTML document structure.
 */
export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
