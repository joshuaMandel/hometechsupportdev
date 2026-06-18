import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-blue-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-white font-bold text-lg mb-2">TechCare Home Services</p>
          <p className="text-sm text-blue-200">
            Friendly, patient, in-home technology help for the St.&nbsp;Louis
            metro and surrounding counties.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-2">Get in Touch</p>
          <ul className="text-sm space-y-1">
            <li>
              Phone: <a href="tel:+19703311691" className="hover:text-white underline">(970) 331-1691</a>
            </li>
            <li>
              Email: <a href="mailto:jmandelmvp@gmail.com" className="hover:text-white underline">jmandelmvp@gmail.com</a>
            </li>
            <li>Hours: 24/7, every day</li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-2">Company</p>
          <ul className="text-sm space-y-1">
            <li><Link href="/services" className="hover:text-white underline">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-white underline">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-white underline">About</Link></li>
            <li><Link href="/contact" className="hover:text-white underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
          <p>&copy; {new Date().getFullYear()} TechCare Home Services. All rights reserved.</p>
          <nav aria-label="Legal navigation">
            <ul className="flex gap-6">
              <li><Link href="/privacy-policy" className="hover:text-white underline">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white underline">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
