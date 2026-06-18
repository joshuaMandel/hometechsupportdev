import Link from "next/link";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import Reveal from "../components/Reveal";

const plans = [
  {
    name: "Single Visit",
    price: "From $99",
    unit: "per in-home visit",
    features: ["Upfront flat-rate quote", "No subscription required", "Certified technician", "We explain everything"],
    cta: "Book a Visit",
    highlight: false,
  },
  {
    name: "Tech-Care Membership",
    price: "$20",
    unit: "per month",
    features: ["2 remote support sessions / month", "In-home visits at just $40", "Priority scheduling", "Free annual security checkup"],
    cta: "Join Tech-Care",
    highlight: true,
  },
  {
    name: "Move-In Package",
    price: "$200–$300",
    unit: "one-time bundle",
    features: ["Set up your home network", "Mount your TV", "Connect streaming & speakers", "New homeowner & senior discounts"],
    cta: "Get a Quote",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <Layout
      title="Pricing"
      description="Honest, upfront pricing for in-home tech support. Flat-rate visits, memberships, and bundles."
    >
      <PageHeader
        title="Simple, Honest Pricing"
        subtitle="No surprises and no pushy upsells. You'll always get a clear quote before we start any work."
      />

      <div className="grid sm:grid-cols-3 gap-6 items-stretch">
        {plans.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 100}
            className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
              p.highlight
                ? "bg-surface border-2 border-brand shadow-glow sm:-translate-y-2"
                : "card card-hover"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                style={{ backgroundImage: "linear-gradient(120deg, rgb(var(--brand)), rgb(var(--accent)))" }}>
                MOST POPULAR
              </span>
            )}
            <h2 className="text-xl text-ink mb-1">{p.name}</h2>
            <p className="text-3xl font-display font-extrabold gradient-text">{p.price}</p>
            <p className="text-sm text-muted mb-5">{p.unit}</p>
            <ul className="space-y-2.5 mb-7 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink/80">
                  <span aria-hidden="true" className="text-accent font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={p.highlight ? "btn-primary w-full" : "btn-secondary w-full"}>
              {p.cta}
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h2 className="text-2xl sm:text-3xl mb-4">Sample Service Rates</h2>
        <p className="text-muted mb-6 max-w-3xl leading-relaxed">
          Most jobs are flat-rate so you know the cost before we begin. Hourly
          troubleshooting is available at $60&ndash;$90/hour. Here are some common examples:
        </p>
        <DataTable
          caption="Sample service rates"
          headers={["Service", "Starting Price"]}
          rows={[
            ["Remote support session", "$20–$50"],
            ["Computer or phone setup & data transfer", "$99"],
            ["Home Wi-Fi / network setup", "$99"],
            ["Soundbar or speaker setup", "$99"],
            ["TV mounting & setup", "$149"],
            ["Virus removal & tune-up", "$129"],
            ["Move-in bundle (network + TV + streaming)", "$200–$300"],
          ]}
        />
        <p className="text-sm text-muted">
          Final pricing depends on your specific setup&mdash;we&apos;ll confirm a flat
          quote before any work begins. Discounts available for seniors and first-time clients.
        </p>
      </Reveal>

      <Reveal as="section" className="relative overflow-hidden rounded-3xl text-center text-white p-10 mt-16"
        style={{ backgroundImage: "linear-gradient(130deg, rgb(var(--brand)), rgb(var(--accent)))" }}>
        <div aria-hidden="true" className="absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-white/10 blur-2xl animate-float" />
        <h2 className="text-2xl sm:text-3xl text-white mb-3 relative">Not sure what you need?</h2>
        <p className="text-white/90 mb-7 relative">Tell us what&apos;s going on and we&apos;ll give you a free, no-obligation quote.</p>
        <Link href="/contact" className="btn-light relative">Request a Quote</Link>
      </Reveal>
    </Layout>
  );
}
