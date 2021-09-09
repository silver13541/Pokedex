import React, { createContext, SetStateAction } from "react";
import { CreatePokemonInterface, InitialPokemonModal } from "../interfaces/Pokemon";

type MyContext = {
    allPokemons: CreatePokemonInterface[];
    setAllPokemons: React.Dispatch<SetStateAction<CreatePokemonInterface[]>>;
    pokemonModal: CreatePokemonInterface;
    setPokemonModal: React.Dispatch<SetStateAction<CreatePokemonInterface>>;
    currentPage:number;
    setCurrentPage: React.Dispatch<SetStateAction<number>>;
    modalActive: boolean;
    setModalActive: React.Dispatch<SetStateAction<boolean>>;
}

export const MyContext = createContext<MyContext>({
    allPokemons: [],
    currentPage: 1,
    modalActive: false,
    pokemonModal: InitialPokemonModal,
    setPokemonModal: (setPokemonModal) => (setPokemonModal),
    setAllPokemons: (allPokemons) => (allPokemons),
    setCurrentPage: (setCurrentPage) => (setCurrentPage),
    setModalActive: (setModalActive) => (setModalActive),
});