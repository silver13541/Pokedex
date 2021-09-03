import Head from "next/head";
import React, { useContext, useState } from "react";
import { Footer } from "../components/footer";
import { Pagination } from "../components/pagination";
import { PokedexFilters } from "../components/pokedexFilters";
import { Pokemons } from "../components/pokemons";
import { MyContext } from "../context/PokemonContext";
import {
  PokedexContainer,
  PokedexGrid,
  PokedexInput,
  PokedexTitle,
} from "../styledComponents/Pokedex";

const Pokedex = () => {
  const [pokemonsPerPage] = useState<number>(9);
  const context = useContext(MyContext);
  const [value, setValue] = useState<string>("");
  
  const lastPokemonIndex = context.currentPage * pokemonsPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
  const currentPokemons = context.allPokemons.slice(
    firstPokemonIndex,
    lastPokemonIndex
  );

  console.log(context.currentPage);
  

  
  return (
    <PokedexContainer>
      <Head>
        <title>Pokedex</title>
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      ></link>
      <PokedexTitle>
        800<b>Pokemons</b> for you to choose your favorite
      </PokedexTitle>
      <PokedexInput
        placeholder="Encuentra tu pokémon..."
        onChange={(e) => setValue(e.target.value)}
      />
      <PokedexFilters />
      <PokedexGrid>
        <Pokemons currentPokemons={currentPokemons} />
      </PokedexGrid>
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={context.allPokemons.length}
      />
      <Footer />
    </PokedexContainer>
  );
};

export default Pokedex;
