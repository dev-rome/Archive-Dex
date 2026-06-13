"use client";

import { useState } from "react";
import { Pokemon, PokemonType } from "@/types/pokemon";
import SpecimenCard from "./SpecimenCard";

export default function ArchiveIndex({
  pokemon,
  types,
}: {
  pokemon: Pokemon[];
  types: ("all" | PokemonType)[];
}) {
  const [activeType, setActiveType] = useState<"all" | PokemonType>("all");
  const filtered =
    activeType === "all"
      ? pokemon
      : pokemon.filter((p) => p.types.some((t) => t === activeType));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setActiveType(t)}
            className={`rounded-full px-3 py-1 font-mono text-sm ${
              t === activeType
                ? "bg-paper text-ink"
                : "border border-line text-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <p className="font-mono text-sm text-muted">
        {filtered.length} of {pokemon.length} shown
      </p>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <SpecimenCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
