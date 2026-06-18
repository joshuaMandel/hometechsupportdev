import Link from "next/link";
import Layout from "../components/Layout";

const services = [
  {
    title: "Wi-Fi & Home Networks",
    body: "Router and mesh setup, dead-zone fixes, and secure networks that actually reach every room.",
  },
  {
    title: "TV & Home Theater",
    body: "TV mounting, soundbars, streaming devices, and home theater setup done cleanly and safely.",
  },
  {
    title: "Computers & Phones",
    body: "New device setup, data transfer, updates, speed-ups, virus removal, and printer fixes.",
  },
  {
    title: "Smart Home",
    body: "Speakers, lights, thermostats, cameras, and doorbells configured and working together.",
  },
  {
    title: "Patient Tech Training",
    body: "Friendly, jargon-free coaching for seniors and anyone who wants to feel confident with their devices.",
  },
  {
    title: "Security & Backups",
    body: "Safe passwords, firewall and firmware updates, and reliable backups so your data is protected.",
  },
];

const steps = [
  { n: "1", title: "Tell us what's wrong", body: "Call or send a message describing what you need help with." },
  { n: "2", title: "Pick a time", body: "We schedule an in-home visit that fits your day, often same week." },
  { n: "3", title: "We fix it", body: "A friendly, certified technician sorts it out and shows you how it works." },
];

function StarRow() {
  return (
    <span aria-hidden="true" className="text-yellow-400">★★★★★</span>
  );
}

const testimonials = [
  {
    quote: "They got our whole house Wi-Fi working and were so patient explaining it to my mom. Worth every penny.",
    name: "Karen D., Bridgeton",
  },
  {
    quote: "Mounted our TV, set up the soundbar and streaming, and cleaned up all the cables. Looks professional.",
    name: "Marcus T., St. Louis",
  },
  {
    quote: "No upselling, no jargon. Just fixed my laptop and showed me how to back things up. Highly recommend.",
    name: "Eleanor P., Florissant",
  },
];

export default function Home() {
  return (
    <Layout
      title="In-Home Tech Support in St. Louis"
      description="TechCare Home Services provides friendly, in-home help with Wi-Fi, TVs, computers, phones, and smart-home devices across the St. Louis metro."
    >
      {/* Hero */}
      <section className="text-center py-12 sm:py-20">
        <p className="inline-block bg-brand-light text-brand-dark text-sm font-semibold px-3 py-1 rounded-full mb-5">
          Serving the St. Louis metro &amp; surrounding counties
        </p>
        <h1 className="text-4xl sm:text-5xl mb-6 leading-tight">
          Technology trouble?
          <span className="block text-brand">We&apos;ll come to your home and fix it.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Wi-Fi, TVs, computers, phones, and smart-home devices&mdash;set up and
          working, explained in plain language. Friendly, certified, and
          background-checked technicians with honest, upfront pricing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-brand text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-brand-dark transition-colors"
          >
            Book a Visit
          </Link>
          <a
            href="tel:+13145550123"
            className="bg-white text-brand border border-brand px-6 py-3 rounded-md font-semibold hover:bg-brand-light transition-colors"
          >
            Call (314) 555-0123
          </a>
        </div>
      </section>

      {/* Trust bar */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6 border-y border-gray-200">
        {[
          ["Same-week", "appointments"],
          ["Upfront", "flat-rate pricing"],
          ["Certified &", "background-checked"],
          ["Patient,", "no-jargon help"],
        ].map(([a, b]) => (
          <div key={a}>
            <p className="font-bold text-brand-dark">{a}</p>
            <p className="text-sm text-gray-600">{b}</p>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl mb-2">How We Can Help</h2>
          <p className="text-gray-600">Whatever device is giving you trouble, we&apos;ve got it covered.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg text-brand-dark mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="text-brand font-semibold underline">
            See all services &rarr;
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-light rounded-lg p-8 sm:p-12 my-6">
        <h2 className="text-3xl text-center mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white text-xl font-bold">
                {s.n}
              </div>
              <h3 className="text-lg mb-1">{s.title}</h3>
              <p className="text-gray-700 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14">
        <h2 className="text-3xl text-center mb-10">What Neighbors Are Saying</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <StarRow />
              <blockquote className="text-gray-700 my-3">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="text-sm font-semibold text-brand-dark">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-dark text-white rounded-lg p-8 sm:p-12 text-center">
        <h2 className="text-3xl text-white mb-3">Ready to get your tech working?</h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-6">
          Book an in-home visit today and let a friendly expert take care of it for you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-brand px-6 py-3 rounded-md font-semibold hover:bg-brand-light transition-colors"
        >
          Book a Visit
        </Link>
      </section>
    </Layout>
  );
}
