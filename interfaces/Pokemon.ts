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
