export const POKEMON_TYPES = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
] as const;

export type PokemonType = (typeof POKEMON_TYPES)[number];

export type Stat = { name: string; value: number };

export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  height: number;
  weight: number;
  types: PokemonType[];
};

export type Specimen = Pokemon & {
  stats: Stat[];
};

export type PokemonDetailShape = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
};

export type SpecimenDetailShape = PokemonDetailShape & {
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
};

export type SpeciesShape = {
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string };
  }[];
};
