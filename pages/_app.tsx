import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../UI/layout";
import React, { useEffect, useState } from "react";
import { MyContext } from "../context/PokemonContext";
import {
  CreatePokemonInterface,
  PokemonInterface,
} from "../interfaces/Pokemon";
import { ModalWindow } from "../UI/Modal/modal";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [allPokemons, setAllPokemons] = useState<CreatePokemonInterface[]>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=81"
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [pokemonModal, setPokemonModal] = useState<CreatePokemonInterface>({
    name: "",
    types: [],
    stats: [],
    sprites: { other: { dream_world: { front_default: "" } } },
    base_experience: 0,
    abilities: [],
  });

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next);

    function createPokemonObject(results: PokemonInterface[]) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

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
        <MyContext.Provider
          value={{
            allPokemons,
            setAllPokemons,
            currentPage,
            setCurrentPage,
            modalActive,
            setModalActive,
            pokemonModal,
            setPokemonModal,
          }}
        >
          <Component {...pageProps} />
          <ModalWindow pokenModal={pokemonModal} />
        </MyContext.Provider>
      </Layout>
    </>
  );
}
export default MyApp;
