import Image from "next/image";
import Link from "next/link";
import { pokemonTypeColors } from "@/constants/pokemonTypeColors";
import { getSpecimen } from "@/services/getSpecimen";
import { getSpecies } from "@/services/getSpecies";

export async function generateStaticParams() {
  return Array.from({ length: 151 }, (_, i) => ({ id: String(i + 1) }));
}

export default async function SpecimenPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numId = Number(id);
  const [specimen, species] = await Promise.all([
    getSpecimen(numId),
    getSpecies(numId),
  ]);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <article className="relative overflow-hidden">
        <span
          className="pointer-events-none absolute -top-8 right-0 font-serif leading-none opacity-[0.08]"
          style={{
            fontSize: "12rem",
            color: pokemonTypeColors[specimen.types[0]],
          }}
        >
          {String(specimen.id).padStart(3, "0")}
        </span>
        
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <p className="font-mono text-sm tracking-[0.12em] text-vermilion">
              specimen {String(specimen.id).padStart(3, "0")} ·{" "}
              {specimen.types.join(" / ")}
            </p>
            <h1 className="font-serif text-[2.75rem] leading-[1.05] text-paper capitalize lg:text-[4.5rem]">
              {specimen.name}
            </h1>
            <p className="max-w-prose font-sans leading-[1.65] text-muted">
              {species}
            </p>

            <div
              className="flex h-20 w-20 items-center justify-center rounded-full"
              style={{
                backgroundColor: pokemonTypeColors[specimen.types[0]],
              }}
            >
              <Image
                src={specimen.sprite}
                alt={specimen.name}
                width={60}
                height={60}
              />
            </div>

            <p className="font-mono text-xs text-muted">
              HT {specimen.height / 10}m · WT {specimen.weight / 10}kg
            </p>
          </div>

          <div className="space-y-8">
            <section className="space-y-3">
              <p className="font-mono text-sm tracking-widest text-muted">
                measurements
              </p>
              {specimen.stats.map((stat) => (
                <div key={stat.name} className="flex items-center gap-3">
                  {/* label — fixed width so all bars start at the same x */}
                  <span className="w-20 font-mono text-xs text-muted">
                    {stat.name}
                  </span>
                  {/* track */}
                  <div className="relative h-0.5 flex-1 bg-line">
                    {/* fill */}
                    <div
                      className="absolute top-0 left-0 h-0.5"
                      style={{
                        width: `${(stat.value / 255) * 100}%`,
                        backgroundColor: pokemonTypeColors[specimen.types[0]],
                      }}
                    />
                  </div>
                  {/* value */}
                  <span className="w-8 text-right font-mono text-xs text-paper">
                    {stat.value}
                  </span>
                </div>
              ))}
            </section>

            <section className="space-y-2">
              <p className="font-mono text-sm tracking-widest text-muted">
                curator&apos;s note — ai
              </p>
              <p className="border-l-2 border-vermilion pl-4 font-sans leading-[1.65] text-paper">
                {/* static placeholder for now — goes live Day 8 */}A field
                assessment will appear here once the archive&apos;s curator
                reviews this specimen.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-12 flex gap-2">
          {specimen.id > 1 && (
            <Link
              href={`/specimen/${specimen.id - 1}`}
              className="rounded-full border border-line px-3 py-1 font-mono text-sm text-muted"
            >
              ← {String(specimen.id - 1).padStart(3, "0")}
            </Link>
          )}
          {specimen.id < 151 && (
            <Link
              href={`/specimen/${specimen.id + 1}`}
              className="rounded-full border border-line px-3 py-1 font-mono text-sm text-muted"
            >
              {String(specimen.id + 1).padStart(3, "0")} →
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}
