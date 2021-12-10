import React, { useMemo } from "react";
import { usePokemonContext } from "../../../../context/PokemonContext";
import { CurrentPokemonsInterface } from "../../../../interfaces/Pokemon";
import { PokemonCard } from "../PokemonCard/pokemonCard";

export const Pokemons = ({ currentPokemons }: CurrentPokemonsInterface) => {
  const { selectedTypes } = usePokemonContext();
  let filterPokemons;

  if (selectedTypes.length !== 0) {
    filterPokemons = useMemo(
      () =>
        currentPokemons.filter(
          (pokemon) =>
            pokemon.types
              .map((type) => type.type.name)
              .sort()
              .includes(selectedTypes.sort().join()) ||
            pokemon.types
              .map((type) => type.type.name)
              .sort()
              .join() === selectedTypes.sort().join()
        ),
      [currentPokemons]
    );
  }

  return (
    <>
      {(filterPokemons ?? currentPokemons).map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          stats={pokemon.stats}
          types={pokemon.types}
          sprites={pokemon.sprites}
          base_experience={pokemon.base_experience}
          abilities={pokemon.abilities}
          key={pokemon.name + pokemon.types}
        />
      ))}
    </>
  );
};
