import GlobalStyle from "@/styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [bill, setBill] = useState(null);

  function addBill(newBill) {
    setBill(newBill);
  }
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} bill={bill} addBill={addBill} />
    </SWRConfig>
  );
}
