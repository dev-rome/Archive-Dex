import { SpeciesShape } from "@/types/pokemon";

export async function getSpecies(id: number): Promise<string> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
    next: { revalidate: false },
  });

  if (!res.ok) {
    return "";
  }

  const data: SpeciesShape = await res.json();

  const englishEntry = data.flavor_text_entries.find(
    (entry) => entry.language.name === "en",
  );

  const cleaned = englishEntry?.flavor_text.replace(/\s+/g, " ") ?? "";

  return cleaned;
}
