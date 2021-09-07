import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Pagination } from "../components/pagination";
import { PokedexFilters } from "../components/pokedexFilters";
import { Pokemons } from "../components/pokemons";
import { MyContext, SelectedContext } from "../context/PokemonContext";
import {
  PokedexContainer,
  PokedexGrid,
  PokedexInput,
  PokedexTitle,
} from "../styledComponents/Pokedex";
import { CreatePokemonInterface } from "../interfaces/Pokemon";

const Pokedex = () => {
  const [pokemonsPerPage] = useState<number>(9);
  const context = useContext(MyContext);
  const [value, setValue] = useState<string>("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentPokem, setCurrentPokemons] = useState<CreatePokemonInterface[]>(
    context.allPokemons
  );

  const lastPokemonIndex = context.currentPage * pokemonsPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
  const currentPokemons = currentPokem.slice(
    firstPokemonIndex,
    lastPokemonIndex
  );

  const allPokemons = context.allPokemons.slice(
    firstPokemonIndex,
    lastPokemonIndex
  );

  useEffect(() => {
    setCurrentPokemons(
      context.allPokemons.filter(
        (pokemon) =>
          pokemon.types
            .map((type) => type.type.name)
            .sort()
            .includes(selectedTypes.sort().join()) ||
          pokemon.types
            .map((type) => type.type.name)
            .sort()
            .join() === selectedTypes.sort().join()
      )
    );
  }, [selectedTypes]);

  useEffect(() => {
    setCurrentPokemons(
      context.allPokemons.filter((pokemon) => pokemon.name.startsWith(value))
    );
  }, [value]);

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
      <SelectedContext.Provider
        value={{
          selectedTypes,
          setSelectedTypes,
          currentPokemons,
          setCurrentPokemons,
        }}
      >
        <PokedexInput
          placeholder="Encuentra tu pokémon..."
          onChange={(e) => setValue(e.target.value)}
        />
        <PokedexFilters />
        {selectedTypes.length === 0 && value.length === 0 ? (
          <>
            <PokedexGrid>
              <Pokemons currentPokemons={allPokemons} />
            </PokedexGrid>
            <Pagination
              pokemonsPerPage={pokemonsPerPage}
              totalPokemons={context.allPokemons.length}
            />
          </>
        ) : (
          <>
            <PokedexGrid>
              <Pokemons currentPokemons={currentPokemons} />
            </PokedexGrid>
            <Pagination
              pokemonsPerPage={pokemonsPerPage}
              totalPokemons={currentPokem.length}
            />
          </>
        )}
      </SelectedContext.Provider>
      <Footer />
    </PokedexContainer>
  );
};

export default Pokedex;
