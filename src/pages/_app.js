import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import localFont from "next/font/local";
import { StoreProvider } from "@/providers/StoreProvider/ui/StoreProvider";
import "@/styles/globals.css";

/**
 * Local font configuration for TTSmalls font family.
 * @type {object}
 */
const ttSmalls = localFont({
  src: [
    {
      path: "../styles/fonts/TTSmalls-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/TTSmalls-Medium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/TTSmalls-SemiBold.woff",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-ttSmalls",
});

/**
 * Main application component.
 * @param {object} props - Component props.
 * @param {React.Component} props.Component - The current page component.
 * @param {object} props.pageProps - Props passed to the page component.
 * @returns {React.Component} - The main application component.
 */
export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Head>
        <title>User Role Dashboard</title>
      </Head>
      <main className="bg-background bg-no-repeat bg-cover bg-center">
        <Layout
          className={`${ttSmalls.className} font-ttsmalls w-full min-h-screen bg-bgGrey`}
        >
          <Component {...pageProps} />
        </Layout>
      </main>
    </StoreProvider>
  );
}
