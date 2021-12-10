import React, { useEffect, useState } from "react";
import { Footer } from "../src/UI/components/Footer/footer";
import { Pagination } from "../src/UI/components/Pagination/pagination";
import { PokedexFilters } from "../src/UI/components/PokedexFilters/pokedexFilters";
import { Pokemons } from "../src/UI/components/Pokemons/pokemons";
import { usePokemonContext } from "../context/PokemonContext";
import {
  PokedexContainer,
  PokedexGrid,
  PokedexInput,
  PokedexTitle,
} from "../src/UI/components/PokedexFilters/Styles";

const Pokedex = () => {
  const {
    selectedTypes,
    currentPokem,
    allPokemons,
    currentPage,
    setCurrentPokemons,
  } = usePokemonContext();
  const [value, setValue] = useState<string>("");
  const [pokemonsPerPage] = useState<number>(9);

  const lastPokemonIndex = currentPage * pokemonsPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;

  const currentPokemons = currentPokem.slice(
    firstPokemonIndex,
    lastPokemonIndex
  );
  const sliceAllPokemons = allPokemons.slice(
    firstPokemonIndex,
    lastPokemonIndex
  );

  useEffect(() => {
    setCurrentPokemons(
      allPokemons.filter(
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
      allPokemons.filter((pokemon) => pokemon.name.startsWith(value))
    );
  }, [value]);

  return (
    <PokedexContainer>
      <PokedexTitle>
        800 <b>Pokemons</b> for you to choose your favorite
      </PokedexTitle>
      <PokedexInput
        placeholder="Encuentra tu pokémon..."
        onChange={(e) => setValue(e.target.value)}
      />
      <PokedexFilters />
      <PokedexGrid>
        <Pokemons
          currentPokemons={
            selectedTypes.length === 0 && value.length === 0
              ? sliceAllPokemons
              : currentPokemons
          }
        />
      </PokedexGrid>
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={
          selectedTypes.length === 0 && value.length === 0
            ? allPokemons.length
            : currentPokem.length
        }
      />
      <Footer />
    </PokedexContainer>
  );
};

export default Pokedex;
