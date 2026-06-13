import Image from "next/image";

export default function SpecimenCard() {
    return (
        <article className="relative overflow-hidden rounded-[10px] border border-line bg-surface p-4">
            <span className="absolute -top-2 right-2 opacity-20 pointer-events-none font-serif text-6xl">006</span>
            <div>
                <Image src="/images/specimen-card-image.png" alt="Specimen Card Image" width={100} height={100} />
                
            </div>
        </article>
    )
}