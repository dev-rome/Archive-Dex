import Link from "next/link";

export default function Nav() {
  const navItems = [
    {
      label: "deck",
      href: "/",
    },
    {
      label: "index",
      href: "/archive",
    },
    {
      label: "field notes",
      href: "/field-notes",
    },
  ];

  return (
    <header>
    <nav className="px-4 py-6 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-line pb-4">
        <Link
          href="/"
          className="text-sm font-medium transition-colors duration-200 hover:text-muted"
        >
          the archive
        </Link>
        <ul className="flex items-center">
          {navItems.map(({ label, href }) => (
            <li
              key={label}
              className="not-first:before:mx-2 not-first:before:text-muted not-first:before:content-['•']"
            >
              <Link
                href={href}
                className="text-sm font-medium transition-colors duration-200 hover:text-muted"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </header>
  );
}
