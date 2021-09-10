import React, { createContext, SetStateAction, useContext } from "react";
import { CreatePokemonInterface } from "../interfaces/Pokemon";

type SelectedContext = {
    selectedTypes: string[];
    currentPokemons: CreatePokemonInterface[];
    setSelectedTypes: React.Dispatch<SetStateAction<string[]>>;
    setCurrentPokemons: React.Dispatch<SetStateAction<CreatePokemonInterface[]>>
}

const initialState : SelectedContext = {
    selectedTypes: [],
    currentPokemons: [],
    setSelectedTypes: (selectedTypes) => (selectedTypes),
    setCurrentPokemons: (setCurrentPokemons) => (setCurrentPokemons),
}

export const SelectedContext = createContext(initialState)

export const useSelectedContext =(): SelectedContext => useContext(SelectedContext)
