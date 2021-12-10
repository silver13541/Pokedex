import React, {
  createContext,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CreatePokemonInterface,
  InitialPokemonModal,
  IPokemon,
} from "../interfaces/Pokemon";

type MyContext = {
  allPokemons: CreatePokemonInterface[];
  setAllPokemons: React.Dispatch<SetStateAction<CreatePokemonInterface[]>>;
  pokemonModal: CreatePokemonInterface;
  setPokemonModal: React.Dispatch<SetStateAction<CreatePokemonInterface>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  modalActive: boolean;
  setModalActive: React.Dispatch<SetStateAction<boolean>>;
  currentPokem: CreatePokemonInterface[];
  setCurrentPokemons: React.Dispatch<SetStateAction<CreatePokemonInterface[]>>;
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<SetStateAction<string[]>>;
  modalRegistration: boolean;
  setModalRegistration: React.Dispatch<SetStateAction<boolean>>;
  auth: boolean;
  setAuth: React.Dispatch<SetStateAction<boolean>>;
};

type Props = {
  children: React.ReactNode;
};

const initialState: MyContext = {
  allPokemons: [],
  currentPage: 1,
  modalActive: false,
  pokemonModal: InitialPokemonModal,
  currentPokem: [],
  selectedTypes: [],
  modalRegistration: false,
  auth: false,
  setSelectedTypes: (selectedTypes) => selectedTypes,
  setPokemonModal: (setPokemonModal) => setPokemonModal,
  setAllPokemons: (allPokemons) => allPokemons,
  setCurrentPage: (setCurrentPage) => setCurrentPage,
  setModalActive: (setModalActive) => setModalActive,
  setCurrentPokemons: (setCurrentPokemons) => setCurrentPokemons,
  setModalRegistration: (setModalRegistration) => setModalRegistration,
  setAuth: (setAuth) => setAuth,
};

export const PokemonContext = createContext(initialState);

export const PokemonContextProvider = ({ children }: Props): ReactElement => {
  const [allPokemons, setAllPokemons] = useState<CreatePokemonInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [pokemonModal, setPokemonModal] =
    useState<CreatePokemonInterface>(InitialPokemonModal);
  const [currentPokem, setCurrentPokemons] =
    useState<CreatePokemonInterface[]>(allPokemons);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [modalRegistration, setModalRegistration] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=81");
    const data = await res.json();
    function createPokemonObject(results: IPokemon[]) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

  const value = useMemo(
    () => ({
      allPokemons,
      currentPage,
      modalActive,
      pokemonModal,
      currentPokem,
      setAllPokemons,
      setCurrentPage,
      setModalActive,
      setPokemonModal,
      setCurrentPokemons,
      selectedTypes,
      setSelectedTypes,
      modalRegistration,
      setModalRegistration,
      auth,
      setAuth,
    }),
    [
      allPokemons,
      currentPage,
      modalActive,
      pokemonModal,
      currentPokem,
      setAllPokemons,
      setCurrentPage,
      setModalActive,
      setPokemonModal,
      setCurrentPokemons,
      selectedTypes,
      setSelectedTypes,
      modalRegistration,
      setModalRegistration,
      auth,
      setAuth,
    ]
  );

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export const usePokemonContext = (): MyContext => useContext(PokemonContext);
