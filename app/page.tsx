import Link from "next/link";
import { getPokemonData } from "@/services/getPokemonData";
import SpecimenBubbles from "@/components/SpecimenBubbles";

export default async function Home() {
  const pokemon = await getPokemonData();
  const typesStudied = new Set(pokemon.flatMap((p) => p.types));

  const archiveStatistics = [
    {
      label: "catalogued",
      value: pokemon.length,
    },
    {
      label: "types studied",
      value: typesStudied.size,
    },
    {
      label: "examined by you",
      value: "—",
    },
    {
      label: "team drafts",
      value: "—",
    },
  ];

  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto max-w-6xl space-y-8 lg:space-y-12">
        <section className="relative flex min-h-55 flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-6 lg:min-h-65 lg:p-10">
          <h1 className="font-serif text-[2.5rem] leading-[1.05] lg:text-[4rem]">
            Good evening, <br /> curator.
          </h1>
          <p className="font-mono text-xs text-muted">
            {pokemon.length} {" "} specimens on file. Drag them around, they
            don&apos;t mind.
          </p>
          <SpecimenBubbles />
        </section>

        <div className="flex items-center justify-between rounded-[15px] border border-line px-4 py-3">
          <p className="font-mono text-[0.813rem]">
            <span className="text-muted">ask the archive</span>{" "}
            <span className="hidden text-paper sm:inline">
              fast water types with high attack...
            </span>
          </p>
          <button
            className="rounded-full border border-vermilion px-3 py-1 font-mono text-xs text-vermilion"
            disabled={true}
          >
            consult &#8599;
          </button>
        </div>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <h2 className="sr-only">archive statistics</h2>
          {archiveStatistics.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-line bg-surface p-4"
            >
              <p className="font-mono text-sm text-muted">{stat.label}</p>
              <p className="font-serif text-[1.75rem] text-paper md:text-4xl">
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        <section className="space-y-2">
          <h2 className="font-mono text-sm tracking-[0.08em] text-muted">
            recently examined
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-line px-3 py-1 font-mono text-sm">
              025 pikachu
            </span>
            <span className="rounded-full border border-line px-3 py-1 font-mono text-sm">
              006 charizard
            </span>
            <span className="rounded-full border border-line px-3 py-1 font-mono text-sm">
              001 bulbasaur
            </span>
            <Link
              href="/archive"
              className="rounded-full border border-line px-3 py-1 font-mono text-sm text-muted"
            >
              view index &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
