import React, { createContext, SetStateAction } from "react";
import { CreatePokemonInterface } from "../interfaces/Pokemon";

type SelectedContext = {
    selectedTypes: string[];
    currentPokemons: CreatePokemonInterface[];
    setSelectedTypes: React.Dispatch<SetStateAction<string[]>>;
    setCurrentPokemons: React.Dispatch<SetStateAction<CreatePokemonInterface[]>>
}

export const SelectedContext = createContext<SelectedContext>({
    selectedTypes: [],
    currentPokemons: [],
    setSelectedTypes: (selectedTypes) => (selectedTypes),
    setCurrentPokemons: (setCurrentPokemons) => (setCurrentPokemons),
})