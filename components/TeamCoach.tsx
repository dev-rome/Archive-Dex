"use client";

import { useState, useEffect } from "react";

export default function TeamCoach() {
  const [team, setTeam] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!analysis) return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(analysis.slice(0, i));
      if (i >= analysis.length) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [analysis]);

  const handleAnalyze = async () => {
    if (!team.trim()) return;
    setLoading(true);
    setError(false);
    setAnalysis("");
    setDisplayed("");
    try {
      const res = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ team }),
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      const data = await res.json();
      setAnalysis(data.analysis);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 rounded-[15px] border border-line px-4 py-3">
        <input
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
          placeholder="charizard, gyarados, pidgeot"
          className="flex-1 bg-transparent font-mono text-sm text-paper outline-none placeholder:text-muted"
        />
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="rounded-full border border-vermilion px-3 py-1 font-mono text-xs text-vermilion transition-colors hover:bg-vermilion hover:text-ink"
        >
          {loading ? "analyzing…" : "analyze ↗"}
        </button>
      </div>
      {loading && (
        <p className="font-mono text-xs text-muted">
          consulting the archive… cross-referencing specimens
        </p>
      )}
      {displayed && (
        <p className="border-l-2 border-vermilion pl-4 font-sans leading-[1.65] text-paper">
          {displayed}
          {displayed.length < analysis.length && (
            <span className="ml-0.5 animate-pulse">▋</span>
          )}
        </p>
      )}
      {error && (
        <p className="font-mono text-xs text-vermilion">
          the analysis could not be completed — try again
        </p>
      )}
    </div>
  );
}
