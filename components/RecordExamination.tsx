"use client";

import { useEffect } from "react";

export default function RecordExamination({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("examined") ?? "[]") as {
      id: number;
      name: string;
    }[];
    const updated = [{ id, name }, ...stored.filter((x) => x.id !== id)].slice(
      0,
      50,
    );
    localStorage.setItem("examined", JSON.stringify(updated));
  }, [id, name]);
  return null;
}
