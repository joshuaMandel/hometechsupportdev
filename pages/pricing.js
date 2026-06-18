import Link from "next/link";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";

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

      <div className="grid sm:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-lg p-6 border flex flex-col ${
              p.highlight ? "border-brand shadow-md bg-white ring-2 ring-brand" : "border-gray-100 shadow-sm bg-white"
            }`}
          >
            {p.highlight && (
              <p className="text-xs font-bold uppercase tracking-wide text-brand mb-2">Most Popular</p>
            )}
            <h2 className="text-xl text-brand-dark mb-1">{p.name}</h2>
            <p className="text-3xl font-bold text-gray-900">{p.price}</p>
            <p className="text-sm text-gray-500 mb-4">{p.unit}</p>
            <ul className="space-y-2 mb-6 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <span aria-hidden="true" className="text-brand font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`text-center px-4 py-2 rounded-md font-semibold transition-colors ${
                p.highlight ? "bg-brand text-white hover:bg-brand-dark" : "bg-brand-light text-brand-dark hover:bg-blue-200"
              }`}
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl mb-4">Sample Service Rates</h2>
        <p className="text-gray-600 mb-6 max-w-3xl">
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
        <p className="text-sm text-gray-500">
          Final pricing depends on your specific setup&mdash;we&apos;ll confirm a flat
          quote before any work begins. Discounts available for seniors and first-time clients.
        </p>
      </div>

      <div className="bg-brand-dark text-white rounded-lg p-8 mt-12 text-center">
        <h2 className="text-2xl text-white mb-3">Not sure what you need?</h2>
        <p className="text-blue-100 mb-6">Tell us what&apos;s going on and we&apos;ll give you a free, no-obligation quote.</p>
        <Link href="/contact" className="inline-block bg-white text-brand px-6 py-3 rounded-md font-semibold hover:bg-brand-light transition-colors">
          Request a Quote
        </Link>
      </div>
    </Layout>
  );
}
