import { useState, useEffect } from "react";
import { ExaminedEntry } from "@/types/pokemon";

export function useExamined(): ExaminedEntry[] | null {
  const [examined, setExamined] = useState<ExaminedEntry[] | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setExamined(JSON.parse(localStorage.getItem("examined") ?? "[]"));
  }, []);

  return examined;
}
