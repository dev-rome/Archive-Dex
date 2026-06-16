"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Pokemon, PokemonType } from "@/types/pokemon";
import {
  motion,
  Variants,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import SpecimenCard from "./SpecimenCard";

export default function ArchiveIndex({
  pokemon,
  types,
}: {
  pokemon: Pokemon[];
  types: ("all" | PokemonType)[];
}) {
  const searchParams = useSearchParams();
  const rawType = searchParams.get("type");
  const initialType: "all" | PokemonType =
    rawType && types.includes(rawType as PokemonType)
      ? (rawType as PokemonType)
      : "all";
  const [activeType, setActiveType] = useState<"all" | PokemonType>(
    initialType,
  );
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 50;
  const filtered = pokemon
    .filter(
      (p) => activeType === "all" || p.types.some((t) => t === activeType),
    )
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const shouldReduceMotion = useReducedMotion();
  const item: Variants = {
    exit: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
  };

  return (
    <div className="space-y-4">
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder="search the archive…"
        className="w-full rounded-[15px] border border-line bg-transparent px-4 py-3 font-mono text-sm text-paper outline-none placeholder:text-muted"
      />
      <div className="flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => {
              setActiveType(t);
              setPage(1);
            }}
            className={`rounded-full px-3 py-1 font-mono text-sm transition-colors ${
              t === activeType
                ? "bg-paper text-ink"
                : "border border-line text-muted hover:border-paper hover:text-paper"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="font-mono text-sm text-muted">
        {filtered.length} of {pokemon.length} shown
      </p>
      {filtered.length === 0 ? (
        <p className="py-12 text-center font-mono text-sm text-muted">
          no specimens match — try a different search or filter
        </p>
      ) : (
        <>
          <motion.div className="grid grid-cols-1 gap-3 md:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence>
              {paged.map((p) => (
                <motion.div key={p.id} variants={item} layout>
                  <SpecimenCard pokemon={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <div className="flex items-center justify-center gap-4 font-mono text-sm">
            <button
              className="transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              ← prev
            </button>
            <span className="text-muted">
              page {page} of {totalPages}
            </span>
            <button
              className="transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              next →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
