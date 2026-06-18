import Link from "next/link";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";

const services = [
  { icon: "📶", title: "Wi-Fi & Home Networks", body: "Router and mesh setup, dead-zone fixes, and secure networks that actually reach every room." },
  { icon: "📺", title: "TV & Home Theater", body: "TV mounting, soundbars, streaming devices, and home theater setup done cleanly and safely." },
  { icon: "💻", title: "Computers & Phones", body: "New device setup, data transfer, updates, speed-ups, virus removal, and printer fixes." },
  { icon: "🏠", title: "Smart Home", body: "Speakers, lights, thermostats, cameras, and doorbells configured and working together." },
  { icon: "🎓", title: "Patient Tech Training", body: "Friendly, jargon-free coaching for seniors and anyone who wants to feel confident with their devices." },
  { icon: "🔒", title: "Security & Backups", body: "Safe passwords, firewall and firmware updates, and reliable backups so your data is protected." },
];

const steps = [
  { n: "1", title: "Tell us what's wrong", body: "Call or send a message describing what you need help with." },
  { n: "2", title: "Pick a time", body: "We schedule an in-home visit that fits your day, often same week." },
  { n: "3", title: "We fix it", body: "A friendly, certified technician sorts it out and shows you how it works." },
];

const testimonials = [
  { quote: "They got our whole house Wi-Fi working and were so patient explaining it to my mom. Worth every penny.", name: "Karen D., Bridgeton" },
  { quote: "Mounted our TV, set up the soundbar and streaming, and cleaned up all the cables. Looks professional.", name: "Marcus T., St. Louis" },
  { quote: "No upselling, no jargon. Just fixed my laptop and showed me how to back things up. Highly recommend.", name: "Eleanor P., Florissant" },
];

function Stars() {
  return <span aria-hidden="true" className="text-amber-400 text-lg tracking-wide">★★★★★</span>;
}

export default function Home() {
  return (
    <Layout
      title="In-Home Tech Support in St. Louis"
      description="TechCare Home Services provides friendly, in-home help with Wi-Fi, TVs, computers, phones, and smart-home devices across the St. Louis metro."
    >
      {/* Hero */}
      <section className="relative text-center py-16 sm:py-24 overflow-hidden">
        {/* Animated gradient blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-brand/30 blur-3xl animate-blob" />
          <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand/20 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
        </div>

        <div className="animate-fade-up">
          <p className="pill mb-5">⚡ Serving the St. Louis metro &amp; surrounding counties</p>
          <h1 className="text-4xl sm:text-6xl mb-6 leading-[1.1]">
            Technology trouble?
            <span className="block gradient-text">We&apos;ll come to your home and fix it.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-9 leading-relaxed">
            Wi-Fi, TVs, computers, phones, and smart-home devices&mdash;set up and
            working, explained in plain language. Friendly, certified,
            background-checked technicians with honest, upfront pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary">Book a Visit</Link>
            <a href="tel:+19703311691" className="btn-secondary">📞 Call (970) 331-1691</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <Reveal as="section" className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-4 card">
        {[
          ["Same-week", "appointments"],
          ["Upfront", "flat-rate pricing"],
          ["Certified &", "background-checked"],
          ["Patient,", "no-jargon help"],
        ].map(([a, b]) => (
          <div key={a} className="px-2">
            <p className="font-display font-bold text-brand">{a}</p>
            <p className="text-sm text-muted">{b}</p>
          </div>
        ))}
      </Reveal>

      {/* Services */}
      <section className="py-16">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-3">How We Can Help</h2>
          <p className="text-muted text-lg">Whatever device is giving you trouble, we&apos;ve got it covered.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="card card-hover group">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-2xl transition-transform group-hover:scale-110">
                <span aria-hidden="true">{s.icon}</span>
              </div>
              <h3 className="text-lg text-ink mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="text-brand font-semibold hover:underline">
            See all services &rarr;
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden rounded-3xl p-8 sm:p-14 my-8 text-white"
        style={{ backgroundImage: "linear-gradient(130deg, rgb(var(--brand)), rgb(var(--accent)))" }}>
        <div aria-hidden="true" className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl animate-float" />
        <h2 className="text-3xl sm:text-4xl text-center text-white mb-12 relative">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur text-2xl font-bold text-white ring-1 ring-white/30">
                {s.n}
              </div>
              <h3 className="text-lg text-white mb-1">{s.title}</h3>
              <p className="text-white/85 text-sm leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl">What Neighbors Are Saying</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} as="figure" className="card card-hover flex flex-col">
              <Stars />
              <blockquote className="text-ink/90 my-4 flex-1 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="text-sm font-semibold text-brand">{t.name}</figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <Reveal as="section" className="card text-center py-14 px-6 relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-60">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-56 w-[28rem] rounded-full bg-brand/20 blur-3xl" />
        </div>
        <h2 className="text-3xl sm:text-4xl mb-3">Ready to get your tech working?</h2>
        <p className="text-muted max-w-2xl mx-auto mb-8 text-lg">
          Book an in-home visit today and let a friendly expert take care of it for you.
        </p>
        <Link href="/contact" className="btn-primary">Book a Visit</Link>
      </Reveal>
    </Layout>
  );
}
