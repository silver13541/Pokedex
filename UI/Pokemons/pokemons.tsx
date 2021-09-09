import React, { useContext } from "react";
import { SelectedContext } from "../../context/SelectedPokemon";
import { CurrentPokemonsInterface } from "../../interfaces/Pokemon";
import { CreatePokemon } from "../CreatePokemon/createPokemon";

export const Pokemons = ({ currentPokemons }: CurrentPokemonsInterface) => {
  const context = useContext(SelectedContext);

  return (
    <>
      {context.selectedTypes.length !== 0
        ? currentPokemons
            .filter(
              (pokemon) =>
                pokemon.types
                  .map((type) => type.type.name)
                  .sort()
                  .includes(context.selectedTypes.sort().join()) ||
                pokemon.types
                  .map((type) => type.type.name)
                  .sort()
                  .join() === context.selectedTypes.sort().join()
            )
            .map((pokemon, index: React.Key) => (
              <CreatePokemon
                name={pokemon.name}
                stats={pokemon.stats}
                types={pokemon.types}
                sprites={pokemon.sprites}
                base_experience={pokemon.base_experience}
                abilities={pokemon.abilities}
                key={index}
              />
            ))
        : currentPokemons.map((pokemon, index: React.Key) => (
            <CreatePokemon
              name={pokemon.name}
              stats={pokemon.stats}
              types={pokemon.types}
              sprites={pokemon.sprites}
              base_experience={pokemon.base_experience}
              abilities={pokemon.abilities}
              key={index}
            />
          ))}
    </>
  );
};
