import { useState } from "react";
import GlobalStyle from "@/styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [bill, setBill] = useState(null);

  function addBill(newBill) {
    setBill(newBill);
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} bill={bill} addBill={addBill} />
    </>
  );
}
