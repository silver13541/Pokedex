import React, { createContext, SetStateAction, useContext } from "react";
import { CreatePokemonInterface } from "../interfaces/Pokemon";

type MyContext = {
    allPokemons: CreatePokemonInterface[];
    setAllPokemons: React.Dispatch<SetStateAction<CreatePokemonInterface[]>>
    currentPage:number;
    setCurrentPage: React.Dispatch<SetStateAction<number>>
}

export const MyContext = createContext<MyContext>({
    allPokemons: [],
    currentPage: 1,
    setAllPokemons: (allPokemons) => (allPokemons),
    setCurrentPage: (setCurrentPage) => (setCurrentPage),
});