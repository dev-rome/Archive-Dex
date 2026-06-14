import { tool } from "ai";
import { z } from "zod";

export const getPokemonTypesTool = tool({
  description:
    "Look up a single Pokémon's types by name. Call once per team member to determine coverage and shared weaknesses.",
  inputSchema: z.object({
    name: z.string().describe("Pokémon name, e.g. Charizard"),
  }),
  execute: async ({ name }) => {
    const normalize = name.toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${normalize}`, {
      next: { revalidate: false },
    });
    if (!res.ok) {
      return {
        success: false,
        name,
        error: "not found",
      };
    }
    const data = await res.json();
    return {
      success: true,
      name: data.name,
      types: data.types.map((t: { type: { name: string } }) => t.type.name),
    };
  },
});
