import Link from "next/link";
import Layout from "../components/Layout";

const highlights = [
  {
    title: "Growing Demand",
    body: "U.S. households now own an average of 21 connected devices across 13 categories, and 57% are expected to own a smart-home device by 2025.",
  },
  {
    title: "A Digital Divide",
    body: "Many older adults and lower-income households lack the comfort or connectivity to manage their own devices and networks.",
  },
  {
    title: "Proven Market",
    body: "National players like Geek Squad and HelloTech charge $79-$250 per visit, proving people will pay for friendly, reliable in-home help.",
  },
];

export default function Home() {
  return (
    <Layout
      title="Home"
      description="In-home technology support for households, families, and seniors in the St. Louis metro area."
    >
      <section className="text-center py-12 sm:py-20">
        <h1 className="text-4xl sm:text-5xl mb-6">
          Friendly, In-Home Tech Support
          <span className="block text-brand">for Every Household</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          From Wi-Fi networks and smart speakers to TV mounting and senior-friendly
          tech training, TechCare Home Services brings patient, expert help right to
          your door.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-brand text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-brand-dark transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/services-pricing"
            className="bg-white text-brand border border-brand px-6 py-3 rounded-md font-semibold hover:bg-brand-light transition-colors"
          >
            View Services & Pricing
          </Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-6 py-10">
        {highlights.map((h) => (
          <div key={h.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl mb-2 text-brand-dark">{h.title}</h2>
            <p className="text-gray-600">{h.body}</p>
          </div>
        ))}
      </section>

      <section className="bg-brand-light rounded-lg p-8 sm:p-12 mt-10 text-center">
        <h2 className="text-2xl mb-3">Explore the Full Business Plan</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          This site walks through the market opportunity, legal setup, insurance,
          pricing strategy, operations, marketing, and risk management behind a
          home-technology support business.
        </p>
        <Link
          href="/market-opportunity"
          className="inline-block bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-dark transition-colors"
        >
          Start with Market Opportunity
        </Link>
      </section>
    </Layout>
  );
}
