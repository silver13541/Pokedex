import { createContext } from "react";

interface PokemonContext {
    allPokemons: string[];
}

export const PokemonContext = createContext<Partial<PokemonContext>>({});