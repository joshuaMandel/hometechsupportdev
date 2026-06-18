import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-blue-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TechCare Home Services. All rights reserved.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-white underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
