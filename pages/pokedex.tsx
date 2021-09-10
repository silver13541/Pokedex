import React, { useEffect, useState } from "react";
import { Footer } from "../UI/components/Footer/footer";
import { Pagination } from "../UI/components/Pagination/pagination";
import { PokedexFilters } from "../UI/components/PokedexFilters/pokedexFilters";
import { Pokemons } from "../UI/components/Pokemons/pokemons";
import { usePokemonContext } from "../context/PokemonContext";
import {
  PokedexContainer,
  PokedexGrid,
  PokedexInput,
  PokedexTitle,
} from "../UI/components/PokedexFilters/Styles";
import { CreatePokemonInterface } from "../interfaces/Pokemon";
import { SelectedContext } from "../context/SelectedPokemon";

const Pokedex = () => {
  const { allPokemons, currentPage } = usePokemonContext();

  const [pokemonsPerPage] = useState<number>(9);
  const [value, setValue] = useState<string>("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentPokem, setCurrentPokemons] =
    useState<CreatePokemonInterface[]>(allPokemons);

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
      </SelectedContext.Provider>
      <Footer />
    </PokedexContainer>
  );
};

export default Pokedex;
