import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 text-center md:px-8">
      <p className="font-mono text-sm tracking-[0.12em] text-vermilion">
        specimen not found
      </p>
      <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.05] text-paper lg:text-[4.5rem]">
        no record in the archive
      </h1>
      <p className="mt-4 max-w-prose font-sans leading-[1.65] text-muted">
        This entry doesn&apos;t exist in the catalog — it may have been
        miscatalogued, or never collected at all.
      </p>
      <Link
        href="/archive"
        className="mt-8 rounded-full border border-vermilion px-4 py-2 font-mono text-sm text-vermilion transition-colors hover:bg-vermilion hover:text-ink"
      >
        return to the index ↗
      </Link>
    </div>
  );
}
