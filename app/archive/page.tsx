import SpecimenCard from "@/components/SpecimenCard";

export default function Archive() {
  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <SpecimenCard />
          <SpecimenCard />
          <SpecimenCard />
        </div>
      </div>
    </div>
  );
}
