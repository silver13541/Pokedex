import "../UI/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../UI/components/layout";
import React, { useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import {
  CreatePokemonInterface,
  InitialPokemonModal,
  IPokemon,
} from "../interfaces/Pokemon";
import { ModalWindow } from "../UI/components/Modal/modal";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [allPokemons, setAllPokemons] = useState<CreatePokemonInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [pokemonModal, setPokemonModal] = useState<CreatePokemonInterface>(InitialPokemonModal);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=81");
    const data = await res.json();
    function createPokemonObject(results: IPokemon[]) {
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
        <PokemonContext.Provider
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
          <ModalWindow
            sprites={pokemonModal.sprites}
            types={pokemonModal.types}
            name={pokemonModal.name}
            base_experience={pokemonModal.base_experience}
            abilities={pokemonModal.abilities}
            stats={pokemonModal.stats}
          />
        </PokemonContext.Provider>
      </Layout>
    </>
  );
}
export default MyApp;
