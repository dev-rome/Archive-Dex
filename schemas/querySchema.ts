import { z } from "zod";

export const querySchema = z.object({
  types: z
    .array(
      z.enum([
        "normal",
        "fire",
        "water",
        "electric",
        "grass",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dragon",
        "dark",
        "steel",
        "fairy",
      ]),
    )
    .optional(),
});
