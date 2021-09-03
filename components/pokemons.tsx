import React, { useState } from "react";
import { CreatePokemonInterface, CurrentPokemonsInterface } from "../interfaces/Pokemon";
import { CreatePokemon } from "./createPokemon";

export const Pokemons = ({ currentPokemons }: CurrentPokemonsInterface) => {
  console.log(currentPokemons);
  
  const [count,setCount] = useState<number>(0);
  
  return (
    <>
      {currentPokemons.map((pokemon, index: React.Key) => (
        <CreatePokemon
          name={pokemon.name}
          stats={pokemon.stats}
          types={pokemon.types}
          sprites={pokemon.sprites}
          key={index}
        />
      ))}
    </>
  );
};
;
