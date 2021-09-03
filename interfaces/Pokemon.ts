export interface PokemonInterface {
  name: string;
}

export interface CreatePokemonInterface {
  name: string;
  types: Type[];
  stats: BaseStat[]
  sprites: Other;
}

export interface CurrentPokemonsInterface {
  currentPokemons: CreatePokemonInterface[]
}

interface Type {
  type: Name;
}

interface Name {
  name: string;
}

interface BaseStat { 
  base_stat: number;
}

interface Other{
  other: DreamWorld;
}

interface DreamWorld {
  dream_world: FrontDefault;
}

interface FrontDefault {
  front_default: string;
}