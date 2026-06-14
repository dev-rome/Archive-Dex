import { anthropic } from "@ai-sdk/anthropic";
import { streamText, smoothStream } from "ai";
import { bodySchema } from "@/schemas/bodySchema";

export async function POST(req: Request) {
  const { name, types, stats } = bodySchema.parse(await req.json());

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    prompt: `
        You are the curator of a specimen archive, writing a brief field assessment for a museum placard.

        Specimen: ${name}
        Types: ${types.join(", ")}
        Base stats:
        ${stats.map((s) => `- ${s.name}: ${s.value}`).join("\n")}

        Instructions:
        - Write exactly 2-3 sentences.
        - Plain prose only.
        - No headers, lists, markdown, quotation marks, or labels.
        - Maintain a dry, knowledgeable, archival tone.
        - Interpret only the relative distribution of the provided statistics.
        - Do not mention Pokémon mechanics, moves, abilities, evolutions, games, trainers, or lore.
        - Do not speculate beyond what the numbers support.
        - Refer to the subject as "the specimen" rather than "the Pokémon".

        Focus on what the balance of strength, endurance, speed, and other recorded measurements suggests about the specimen's overall characteristics.
        `,
    experimental_transform: smoothStream({
      delayInMs: 50,
      chunking: "word",
    }),
  });

  return result.toTextStreamResponse();
}
