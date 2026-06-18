import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-brand-dark whitespace-nowrap">
          <span aria-hidden="true" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-white">TC</span>
          TechCare Home Services
        </Link>

        <button
          className="sm:hidden p-2 rounded-md border border-gray-300"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700" />
        </button>

        <ul className="hidden sm:flex flex-wrap items-center gap-1 text-sm font-medium">
          {links.map((link) => {
            const active = router.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    active
                      ? "bg-brand text-white"
                      : "text-gray-600 hover:bg-brand-light hover:text-brand-dark"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark transition-colors"
            >
              Book a Visit
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <ul className="sm:hidden flex flex-col gap-1 px-4 pb-4 text-sm font-medium">
          {links.map((link) => {
            const active = router.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    active
                      ? "bg-brand text-white"
                      : "text-gray-600 hover:bg-brand-light hover:text-brand-dark"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
