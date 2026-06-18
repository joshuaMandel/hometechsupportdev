import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-surface/80 border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-extrabold text-ink whitespace-nowrap group"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white text-sm font-bold shadow-md transition-transform group-hover:scale-105"
            style={{ backgroundImage: "linear-gradient(120deg, rgb(var(--brand)), rgb(var(--accent)))" }}
          >
            GT
          </span>
          Gateway Tech
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
            {links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-3 py-2 rounded-lg transition-colors ${
                      active
                        ? "text-brand"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          <Link href="/contact" className="hidden sm:inline-flex btn-primary !px-4 !py-2 text-sm">
            Book a Visit
          </Link>

          <button
            className="md:hidden h-9 w-9 inline-flex flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-surface-2"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-5 h-0.5 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-1 text-sm font-medium bg-surface/95 backdrop-blur-md border-b border-border">
          {links.map((link) => {
            const active = router.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg transition-colors ${
                    active ? "bg-brand-light text-brand-ink" : "text-muted hover:bg-surface-2 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-1">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Book a Visit
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
