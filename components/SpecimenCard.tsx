import Image from "next/image";
import Link from "next/link";
import { Pokemon } from "@/types/pokemon";
import { pokemonTypeColors } from "@/constants/pokemonTypeColors";

export default function SpecimenCard({ pokemon }: { pokemon: Pokemon }) {
  const dexNumber = String(pokemon.id).padStart(3, "0");
  const typeColor = pokemonTypeColors[pokemon.types[0]];

  return (
    <Link href={`/specimen/${pokemon.id}`} className="block">
      <article
        className="group relative overflow-hidden rounded-[10px] border border-line bg-surface p-4 transition-colors hover:border-(--type)"
        style={{ "--type": typeColor } as React.CSSProperties}
      >
        <span
          className="pointer-events-none absolute -top-2 right-2 font-serif text-6xl opacity-30 group-hover:opacity-60"
          style={{ color: typeColor }}
        >
          {dexNumber}
        </span>
        <div className="flex flex-col">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full"
            style={{
              backgroundColor: pokemonTypeColors[pokemon.types[0]],
            }}
          >
            <Image
              src={pokemon.sprite}
              alt={pokemon.name}
              width={60}
              height={60}
            />
          </div>
          <h2 className="font-serif text-[1.375rem] text-paper capitalize">
            {pokemon.name}
          </h2>
          <p className="font-mono text-sm text-muted">
            no. {dexNumber} · {pokemon.types.join(" / ")}
          </p>
        </div>
      </article>
    </Link>
  );
}
