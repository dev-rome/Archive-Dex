import Link from "next/link";
import { getPokemonData } from "@/services/getPokemonData";
import SpecimenBubbles from "@/components/SpecimenBubbles";
import AskBar from "@/components/AskBar";
import ExaminedCount from "@/components/ExaminedCount";
import RecentlyExamined from "@/components/RecentlyExamined";

export default async function Home() {
  const pokemon = await getPokemonData();
  const typesStudied = new Set(pokemon.flatMap((p) => p.types));
  const archiveStatistics = [
    { label: "catalogued", value: pokemon.length },
    { label: "types studied", value: typesStudied.size },
  ];

  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto max-w-6xl space-y-8 lg:space-y-12">
        <section className="relative flex min-h-55 flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-6 lg:min-h-65 lg:p-10">
          <h1 className="font-serif text-[2.5rem] leading-[1.05] lg:text-[4rem]">
            Welcome, <br /> curator.
          </h1>

          <p className="font-mono text-xs text-muted">
            {pokemon.length} {" "} specimens on file. Drag them around, they
            don&apos;t mind.
          </p>

          <SpecimenBubbles />
        </section>

        <AskBar />

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

          <div className="rounded-lg border border-line bg-surface p-4">
            <p className="font-mono text-sm text-muted">examined by you</p>
            <p className="font-serif text-[1.75rem] text-paper md:text-4xl">
              <ExaminedCount />
            </p>
          </div>

          <Link
            href="/field-notes"
            className="rounded-lg border border-line bg-surface p-4 transition-colors hover:border-paper"
          >
            <p className="font-mono text-sm text-muted">team drafts</p>
            <p className="font-serif text-[1.75rem] text-paper md:text-4xl">
              analyze →
            </p>
          </Link>
        </section>

        <section className="space-y-2">
          <h2 className="font-mono text-sm tracking-[0.08em] text-muted">
            recently examined
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <RecentlyExamined />
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
