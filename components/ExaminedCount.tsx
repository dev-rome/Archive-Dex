"use client";
import { useState, useEffect } from "react";

export default function ExaminedCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(JSON.parse(localStorage.getItem("examined") ?? "[]").length);
  }, []);

  return <span>{count === null || count === 0 ? "—" : count}</span>;
}
