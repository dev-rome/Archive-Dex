import Image from "next/image";
import { Pokemon } from "@/types/pokemon";
import { pokemonTypeColors } from "@/constants/pokemonTypeColors";

export default function SpecimenCard({ pokemon }: { pokemon: Pokemon }) {
  const dexNumber = String(pokemon.id).padStart(3, "0");
  const typeColor = pokemonTypeColors[pokemon.types[0]];

  return (
    <article className="relative overflow-hidden rounded-[10px] border border-line bg-surface p-4">
      <span
        className="pointer-events-none absolute -top-2 right-2 font-serif text-6xl opacity-30"
        style={{ color: typeColor }}
      >
        {dexNumber}
      </span>
      <div className="flex flex-col">
        <Image
          src={pokemon.sprite}
          alt={pokemon.name}
          width={100}
          height={100}
        />
        <h2 className="font-serif text-[1.375rem] text-paper capitalize">
          {pokemon.name}
        </h2>
        <p className="font-mono text-sm text-muted">
          no. {dexNumber} · {pokemon.types.join(" / ")}
        </p>
      </div>
    </article>
  );
}
