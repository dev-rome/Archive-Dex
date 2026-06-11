"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { pokemonTypeColors } from "@/constants/pokemonTypeColors";

const bubbles = [
    {
        id: "006",
        bg: pokemonTypeColors.fire,
        fg: "#4A1F11",
        top: "top-24 md:top-20 xl:top-24",
        right: "right-6 md:right-40 xl:right-[25rem]",
        duration: 2.8,
        delay: 0,
        hideOnMobile: false,
    },
    {
        id: "025",
        bg: pokemonTypeColors.electric,
        fg: "#4A3A14",
        top: "md:top-30 xl:top-40",
        right: "md:right-12 xl:right-56",
        duration: 3.2,
        delay: 0.5,
        hideOnMobile: true,
    },
    {
        id: "007",
        bg: pokemonTypeColors.water,
        fg: "#1E3044",
        top: "md:top-6 xl:top-4",
        right: "md:right-20 xl:right-[17rem]",
        duration: 3.6,
        delay: 0.1,
        hideOnMobile: true,
    },
];

export default function SpecimenBubbles() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
        >
            {bubbles.map((b) => (
                <motion.div
                    className={`absolute pointer-events-auto cursor-grab active:cursor-grabbing ${b.top} ${b.right} ${b.hideOnMobile ? "hidden md:flex" : "flex"}`}
                    key={b.id}
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0.2}>
                    <motion.div
                        className="h-12 w-12 flex items-center justify-center rounded-full font-mono text-sm md:h-14 md:w-14 lg:h-16 lg:w-16"
                        style={{ backgroundColor: b.bg, color: b.fg }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span>{b.id}</span>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
