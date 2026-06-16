import { z } from "zod";
import { POKEMON_TYPES, statSchema } from "@/types/pokemon";

export const bodySchema = z.object({
  name: z.string(),
  types: z.array(z.enum(POKEMON_TYPES)),
  stats: z.array(statSchema),
});