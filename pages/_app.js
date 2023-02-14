import GlobalStyle from "@/styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [bill, setBill] = useState(null);
  const router = useRouter();

  async function addBill(bill) {
    await fetch("api/bills", {
      method: "POST",
      body: JSON.stringify(bill),
    });
    setBill(bill);
    router.push("/bills/${id}");
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
      <Layout>
        <Head>
          <title>Capstone Project</title>
        </Head>
        <Component {...pageProps} bill={bill} addBill={addBill} />
      </Layout>
    </SWRConfig>
  );
}
