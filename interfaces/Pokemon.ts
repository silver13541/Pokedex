export interface IPokemon{
  name: string;
}

interface ITypes{
  type: { name: string }
}

interface IStats {
  base_stat: number;
  stat: {name: string} 
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

export const ColorModalInfo: PokemonColors = {
  grass: "#21bf60",
  fire: "#e30513",
  water: "#4083b3",
  poison: "#982cdb",
  electric: "#d5d909",
  bug: "#2cdb49",
  ground: "#bf9032",
  normal: "#8f8d8d",
  fighting: '#d5beed',
  psychic: '#a63cb0',
  flying: '#3a41fc',
  rock: '#5c5c5c',
  steel: '#e1e2f2',
  fairy: '#db7bd8',
};


export interface PokemonColors {
  [key: string]: string
}