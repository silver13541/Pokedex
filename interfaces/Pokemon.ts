export interface IPokemon{
  name: string;
}

interface ITypes{
  type: { name: string }
}

interface IStats {
  base_stat: number 
}

interface IAbilities { 
  ability: { name: string }
}

interface ISprites {
  other: { dream_world: { front_default: string } }
}

export interface CreatePokemonInterface {
  name: string;
  types: ITypes[];
  stats: IStats[];
  abilities: IAbilities[];
  sprites: ISprites;
  base_experience: number;
}

export interface CurrentPokemonsInterface {
  currentPokemons: CreatePokemonInterface[];
}

export const InitialPokemonModal = {
  name: "",
  types: [],
  stats: [],
  sprites: { other: { dream_world: { front_default: "" } } },
  base_experience: 0,
  abilities: [],
};

export const Color: PokemonColors = {
  grass: "#64D368",
  fire: "#B33327",
  water: "#5BC7FA",
  poison: "#9023a1",
  electric: "#eaff00",
  bug: "#52ff03",
  ground: "#f0ad05",
  normal: "#b7b8b0",
  fighting: '#e5daf7',
  psychic: '#fc3ac5',
  flying: '#3a41fc',
  rock: '#a0a1b0',
  steel: '#e1e2f2',
  fairy: '#ffbae8',
};

export interface PokemonColors {
  [key: string]: string
}