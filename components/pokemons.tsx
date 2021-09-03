import React, { useState } from "react";
import { CreatePokemon } from "./createPokemon";

export const Pokemons = ({ setAllPokemons,value,currentPokemons }) => {
  const [count,setCount] = useState<number>(0);
  
  return (
    <>
      {currentPokemons.filter(pokemon => pokemon.name.startsWith(value)).map((pokemon, index) => (
        <CreatePokemon
          name={pokemon.name}
          attack={pokemon.stats[1].base_stat}
          defense={pokemon.stats[2].base_stat}
          types={pokemon.types}
          image={pokemon.sprites.other.dream_world.front_default}
          key={index}
        />
      ))}
    </>
  );
};
;
