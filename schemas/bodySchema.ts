import { z } from "zod";

export const bodySchema = z.object({
  name: z.string(),
  types: z.array(z.string()),
  stats: z.array(z.object({ name: z.string(), value: z.number() })),
});
