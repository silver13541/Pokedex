import React, { useMemo } from "react";
import { useSelectedContext } from "../../../context/SelectedPokemon";
import { CurrentPokemonsInterface } from "../../../interfaces/Pokemon";
import { CreatePokemon } from "../CreatePokemon/createPokemon";

export const Pokemons = ({ currentPokemons }: CurrentPokemonsInterface) => {
  const { selectedTypes } = useSelectedContext();
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
        <CreatePokemon
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
