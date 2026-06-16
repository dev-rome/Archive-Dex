"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExaminedEntry } from "@/types/pokemon";

export default function RecentlyExamined() {
  const [examined, setExamined] = useState<ExaminedEntry[] | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setExamined(JSON.parse(localStorage.getItem("examined") ?? "[]"));
  }, []);

  if (examined === null) {
    return <p className="font-mono text-sm text-muted">loading…</p>;
  }

  if (examined.length === 0) {
    return (
      <p className="font-mono text-sm text-muted">no specimens examined yet</p>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {examined.slice(0, 3).map((p) => (
        <Link
          key={p.id}
          href={`/specimen/${p.id}`}
          className="rounded-full border border-line px-3 py-1 font-mono text-sm capitalize transition-colors hover:border-paper"
        >
          {String(p.id).padStart(3, "0")} {p.name}
        </Link>
      ))}
    </div>
  );
}