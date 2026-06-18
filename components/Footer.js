import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/5">
              <Image
                src="/images/logo-icon.png"
                alt="Gateway Tech logo"
                width={45}
                height={40}
                className="h-7 w-auto"
              />
            </span>
            <span className="font-display font-extrabold text-lg text-ink">Gateway Tech Home Services</span>
          </div>
          <p className="text-sm text-muted max-w-xs">
            Friendly, patient, in-home technology help for the St.&nbsp;Louis
            metro and surrounding counties.
          </p>
        </div>

        <div>
          <p className="font-display font-bold mb-3 text-ink">Get in Touch</p>
          <ul className="text-sm space-y-2 text-muted">
            <li>
              Phone: <a href="tel:+19703311691" className="text-brand hover:underline">(970) 331-1691</a>
            </li>
            <li>
              Email: <a href="mailto:jmandelmvp@gmail.com" className="text-brand hover:underline">jmandelmvp@gmail.com</a>
            </li>
            <li>Hours: 24/7, every day</li>
          </ul>
        </div>

        <div>
          <p className="font-display font-bold mb-3 text-ink">Company</p>
          <ul className="text-sm space-y-2 text-muted">
            <li><Link href="/services" className="hover:text-brand transition-colors">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-brand transition-colors">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-brand transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Gateway Tech Home Services. All rights reserved.</p>
          <nav aria-label="Legal navigation">
            <ul className="flex gap-6">
              <li><Link href="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-brand transition-colors">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
