import React, { createContext, SetStateAction, useContext } from "react";
import { CreatePokemonInterface } from "../interfaces/Pokemon";

type MyContext = {
    allPokemons: CreatePokemonInterface[];
    setAllPokemons: React.Dispatch<SetStateAction<CreatePokemonInterface[]>>
    currentPage:number;
    setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

export const MyContext = createContext<MyContext>({
    allPokemons: [],
    currentPage: 1,
    setAllPokemons: (allPokemons) => (allPokemons),
    setCurrentPage: (setCurrentPage) => (setCurrentPage),
});

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