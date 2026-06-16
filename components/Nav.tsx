"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "deck", href: "/" },
  { label: "index", href: "/archive" },
  { label: "field notes", href: "/field-notes" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-line pb-4">
          <Link
            href="/"
            className="font-mono text-sm font-medium transition-colors duration-200 hover:text-muted"
          >
            the archive
          </Link>
          <ul className="flex items-center">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li
                  key={href}
                  className="not-first:before:mx-2 not-first:before:text-muted not-first:before:content-['·']"
                >
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-mono text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-paper" : "text-muted hover:text-paper"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
