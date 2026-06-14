import { generateText, stepCountIs } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { getPokemonTypesTool } from "@/services/getPokemonTypesTool";

export async function POST(req: Request) {
  const { team } = await req.json();

  const result = await generateText({
    model: anthropic("claude-sonnet-4-6"),
    tools: { getPokemonTypesTool },
    stopWhen: stepCountIs(8),
    prompt: `
    Analyze this Pokémon team:

${team}

Before writing your analysis:
- Look up every team member using the provided tool.
- Do not guess typings.
- Use only the typings returned by the tool.

Then:
- Identify overlapping weaknesses.
- Identify notable coverage strengths and gaps.
- If a Pokémon cannot be found, note it and continue.
- Write 3–5 sentences in plain prose.
- No headers, lists, markdown, or bold text .
- Maintain a dry, archival tone.
`,
  });
  return Response.json({ analysis: result.text });
}
