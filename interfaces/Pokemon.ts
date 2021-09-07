export interface PokemonInterface {
  name: string;
}

export interface CreatePokemonInterface {
  name: string;
  types: Array<{ type: { name: string } }>;
  stats: Array<{ base_stat: number }>;
  abilities: Array<{ ability: { name: string } }>;
  sprites: { other: { dream_world: { front_default: string } } };
  base_experience: number;
}

export interface CurrentPokemonsInterface {
  currentPokemons: CreatePokemonInterface[];
}

