export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

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

export type Specimen = {
  id: number;
  name: string;
  sprite: string;
  types: PokemonType[];
  height: number;
  weight: number;
  stats: { name: string; value: number }[];
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
