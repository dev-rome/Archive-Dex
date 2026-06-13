"use client";

import { useState } from "react";
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
  const [activeType, setActiveType] = useState<"all" | PokemonType>("all");
  const filtered =
    activeType === "all"
      ? pokemon
      : pokemon.filter((p) => p.types.some((t) => t === activeType));
  const shouldReduceMotion = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setActiveType(t)}
            className={`rounded-full px-3 py-1 font-mono text-sm ${
              t === activeType
                ? "bg-paper text-ink"
                : "border border-line text-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <p className="font-mono text-sm text-muted">
        {filtered.length} of {pokemon.length} shown
      </p>

      <motion.div className="grid grid-cols-1 gap-3 md:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div key={p.id} variants={item} layout>
              <SpecimenCard pokemon={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
