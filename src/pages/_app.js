import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import localFont from "next/font/local";
import "@/styles/globals.css";

const ttSmalls = localFont({
  src: [
    {
      path: "../fonts/TTSmalls-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/TTSmalls-Medium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TTSmalls-SemiBold.woff",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-ttSmalls",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>User Role Dashboard</title>
      </Head>
      <Layout
        className={`${ttSmalls.className} font-ttsmalls w-full min-h-screen`}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
