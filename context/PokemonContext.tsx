import { createContext } from "react";
import { CreatePokemonInterface } from "../interfaces/Pokemon";

interface PokemonContext {
    allPokemons: CreatePokemonInterface[];
}

export const PokemonContext = createContext<Partial<PokemonContext>>({});