"use client";

import { useCompletion } from "@ai-sdk/react";

export default function CuratorNote({
  name,
  types,
  stats,
}: {
  name: string;
  types: string[];
  stats: { name: string; value: number }[];
}) {
  const { completion, complete, isLoading, error } = useCompletion({
    api: "/api/curator",
    streamProtocol: "text",
  });

  return (
    <div className="min-h-24">
      {!completion && !isLoading && (
        <button
          onClick={() => complete("", { body: { name, types, stats } })}
          className="rounded-full border border-vermilion px-3 py-1 font-mono text-xs text-vermilion transition-colors hover:bg-vermilion hover:text-ink"
        >
          generate note ↗
        </button>
      )}
      {isLoading && !completion && (
        <p className="font-mono text-xs text-muted">consulting the archive…</p>
      )}
      {completion && (
        <>
          <p className="border-l-2 border-vermilion pl-4 font-sans leading-[1.65] text-paper">
            {completion}
            {isLoading && <span className="ml-0.5 animate-pulse">▋</span>}
          </p>
          <button
            onClick={() => complete("", { body: { name, types, stats } })}
            className="mt-3 font-mono text-xs text-muted transition-colors hover:text-paper"
          >
            regenerate ↻
          </button>
        </>
      )}
      {error && (
        <p className="font-mono text-xs text-vermilion">
          the curator is unavailable — try again
        </p>
      )}
    </div>
  );
}
