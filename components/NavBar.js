import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/market-opportunity", label: "Market Opportunity" },
  { href: "/legal-requirements", label: "Legal & Setup" },
  { href: "/insurance", label: "Insurance" },
  { href: "/services-pricing", label: "Services & Pricing" },
  { href: "/operations-staffing", label: "Operations & Staffing" },
  { href: "/marketing", label: "Marketing" },
  { href: "/risk-mitigation", label: "Risk & Security" },
  { href: "/conclusion", label: "Conclusion" },
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
        <Link href="/" className="text-lg font-bold text-brand-dark whitespace-nowrap">
          TechCare Home Services
        </Link>

        <button
          className="lg:hidden p-2 rounded-md border border-gray-300"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700" />
        </button>

        <ul className="hidden lg:flex flex-wrap gap-1 text-sm font-medium">
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
        </ul>
      </nav>

      {open && (
        <ul className="lg:hidden flex flex-col gap-1 px-4 pb-4 text-sm font-medium">
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
