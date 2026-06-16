"use client";
import { useExamined } from "@/hooks/useExamined";

export default function ExaminedCount() {
  const examined = useExamined();
  const count = examined?.length ?? 0;

  return <span>{count === 0 ? "—" : count}</span>;
}
