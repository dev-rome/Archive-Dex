import { notFound } from "next/navigation";
import { PokemonType, Specimen, SpecimenDetailShape } from "@/types/pokemon";

export async function getSpecimen(id: number): Promise<Specimen> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    next: { revalidate: false },
  });

  if (!res.ok) {
    notFound();
  }

  const data: SpecimenDetailShape = await res.json();

  return {
    id: data.id,
    name: data.name,
    sprite: data.sprites.front_default,
    types: data.types.map((t) => t.type.name as PokemonType),
    height: data.height,
    weight: data.weight,
    stats: data.stats.map((s) => ({ name: s.stat.name, value: s.base_stat })),
  };
}
