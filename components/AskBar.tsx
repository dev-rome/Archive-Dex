"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AskBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleAsk = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setNotFound(false);
    setError(false);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      const data: { types?: string[] } = await res.json();
      if (data.types?.[0]) {
        router.push(`/archive?type=${data.types[0]}`);
      } else {
        setNotFound(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between gap-3 rounded-[15px] border border-line px-4 py-3">
        <div className="flex flex-1 items-center gap-2">
          <span className="hidden font-mono text-[0.813rem] text-muted sm:inline">
            ask the archive
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
            placeholder="fast water types with high attack..."
            className="w-full flex-1 bg-transparent font-mono text-[0.813rem] text-paper outline-none placeholder:text-muted"
          />
        </div>
        <button
          className="shrink-0 rounded-full border border-vermilion px-3 py-1 font-mono text-xs text-vermilion transition-colors hover:bg-vermilion hover:text-ink disabled:opacity-50"
          onClick={handleAsk}
          disabled={loading}
        >
          {loading ? "consulting…" : "consult ↗"}
        </button>
      </div>
      {notFound && (
        <p className="mt-2 font-mono text-xs text-muted">
          the archive couldn&apos;t identify a type in that request
        </p>
      )}
      {error && (
        <p className="mt-2 font-mono text-xs text-vermilion">
          something went wrong — try again
        </p>
      )}
    </>
  );
}
