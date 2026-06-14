import { Suspense } from "react";
import { getPokemonData } from "@/services/getPokemonData";
import { PokemonType } from "@/types/pokemon";
import ArchiveIndex from "@/components/ArchiveIndex";

export default async function Archive() {
  const pokemon = await getPokemonData();
  const types: ("all" | PokemonType)[] = [
    "all",
    ...[...new Set(pokemon.flatMap((p) => p.types))].sort(),
  ];

  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 font-serif text-5xl">The index</h1>
        <Suspense
          fallback={<p className="font-mono text-sm text-muted">loading...</p>}
        >
          <ArchiveIndex pokemon={pokemon} types={types} />
        </Suspense>
      </div>
    </div>
  );
}
