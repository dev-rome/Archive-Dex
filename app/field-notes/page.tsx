import TeamCoach from "@/components/TeamCoach";

export default function FieldNotes() {
  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="font-serif text-5xl">Field notes</h1>
          <p className="mt-2 font-mono text-sm text-muted">
            name a team — the curator will cross-reference the specimens and
            assess its weaknesses
          </p>
        </div>
        <TeamCoach />
      </div>
    </div>
  );
}
