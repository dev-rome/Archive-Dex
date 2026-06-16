"use client";

import { motion, useReducedMotion } from "motion/react";
import { Stat } from "@/types/pokemon";

export default function MeasurementBars({
  stats,
  typeColor,
}: {
  stats: Stat[];
  typeColor: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {stats.map((stat, i) => (
        <div key={stat.name} className="flex items-center gap-3">
          <span className="w-20 font-mono text-xs text-muted">{stat.name}</span>
          <div className="relative h-0.5 flex-1 bg-line">
            <motion.div
              className="absolute top-0 left-0 h-0.5"
              style={{ backgroundColor: typeColor }}
              initial={shouldReduceMotion ? false : { width: 0 }}
              animate={{ width: `${(stat.value / 255) * 100}%` }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            />
          </div>
          <span className="w-8 text-right font-mono text-xs text-paper">
            {stat.value}
          </span>
        </div>
      ))}
    </>
  );
}
