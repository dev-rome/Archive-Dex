import { anthropic } from "@ai-sdk/anthropic";
import { generateText, Output } from "ai";
import { querySchema } from "@/schemas/querySchema";

export async function POST(req: Request) {
  const { query } = await req.json();
  const result = await generateText({
    model: anthropic("claude-haiku-4-5-20251001"),
    output: Output.object({ schema: querySchema }),
    prompt: `
          Extract Pokémon type filters from the user's request.

          Valid types:
          normal, fire, water, electric, grass, ice, fighting,
          poison, ground, flying, psychic, bug, rock, ghost,
          dragon, dark, steel, fairy.

          Rules:
          - Return only types that are explicitly mentioned.
          - Do not infer types from Pokémon names.
          - Do not infer types from descriptions.
          - If no type is mentioned, return an empty object.

          Request: "${query}"
          `,
  });
  return Response.json(result.output);
}
