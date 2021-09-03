import Head from "next/head";
import React, { createContext, useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Pagination } from "../components/pagination";
import { PokedexFilters } from "../components/pokedexFilters";
import { Pokemons } from "../components/pokemons";
import { PokemonContext } from "../context/PokemonContext";
import { CreatePokemonInterface, PokemonInterface } from "../interfaces/Pokemon";
import {
  PokedexContainer,
  PokedexGrid,
  PokedexInput,
  PokedexTitle,
} from "../styledComponents/Pokedex";


const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState<CreatePokemonInterface[]>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=45"
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pokemonsPerPage] = useState<number>(9);
  const [value,setValue] = useState<string>('');
    
  useEffect(() => {
    getAllPokemons(); 
  }, []);

  const lastPokemonIndex = currentPage * pokemonsPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    firstPokemonIndex,
    lastPokemonIndex
  );
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next);

    function createPokemonObject(results:PokemonInterface[]) {
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
        800 <b>Pokemons</b> for you to choose your favorite
      </PokedexTitle>
      <PokemonContext.Provider value={{allPokemons}}>
      <PokedexInput placeholder="Encuentra tu pokémon..." onChange={(e) => setValue(e.target.value)}/>
      <PokedexFilters />
      <PokedexGrid>
        <Pokemons currentPokemons={currentPokemons} />
      </PokedexGrid>
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={allPokemons.length}
        paginate={paginate}
      />
      <Footer />
      </PokemonContext.Provider>
    </PokedexContainer>
  );
};

export default Pokedex;
