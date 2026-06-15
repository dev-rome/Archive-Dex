import { z } from "zod";
import { POKEMON_TYPES } from "@/types/pokemon";

export const querySchema = z.object({
  types: z.array(z.enum(POKEMON_TYPES)).optional(),
});
