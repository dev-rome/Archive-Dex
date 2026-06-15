import {
  PokemonListResponse,
  PokemonDetailShape,
  Pokemon,
  PokemonType,
} from "@/types/pokemon";

export async function getPokemonData(): Promise<Pokemon[]> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025", {
    next: { revalidate: false },
  });

  const data: PokemonListResponse = await res.json();

  const pokemon = await Promise.all(
    data.results.map(async (item) => {
      const detailRes = await fetch(item.url, {
        next: { revalidate: false },
      });

      const detail: PokemonDetailShape = await detailRes.json();

      return {
        id: detail.id,
        name: detail.name,
        sprite: detail.sprites.front_default,
        height: detail.height,
        weight: detail.weight,
        types: detail.types.map((t) => t.type.name as PokemonType),
      };
    }),
  );

  return pokemon;
}
