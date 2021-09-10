import "../UI/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../UI/components/layout";
import React from "react";
import { PokemonContextProvider } from "../context/PokemonContext";
import { ModalWindow } from "../UI/components/Modal/modal";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      ></link>
      <Layout>
        <PokemonContextProvider>
          <Component {...pageProps} />
          <ModalWindow/>
        </PokemonContextProvider>
      </Layout>
    </>
  );
}
export default MyApp;
