import Link from "next/link";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

const reasons = [
  {
    title: "Patient & Friendly",
    body: "We never make you feel silly for asking. We explain things in plain language and at your pace.",
  },
  {
    title: "Certified & Trusted",
    body: "Our technicians are certified (CompTIA A+ / Network+) and background-checked, so you can feel safe inviting us in.",
  },
  {
    title: "Honest Pricing",
    body: "Clear, upfront flat rates and no pushy upselling—just the help you actually need.",
  },
  {
    title: "We Come to You",
    body: "Everything is done in your home, so there's no unplugging gear and hauling it to a store.",
  },
];

const areas = [
  "St. Louis", "Bridgeton", "Florissant", "Maryland Heights",
  "Chesterfield", "Creve Coeur", "St. Charles", "O'Fallon",
  "Kirkwood", "Webster Groves", "Ballwin", "& surrounding counties",
];

export default function About() {
  return (
    <Layout
      title="About"
      description="TechCare Home Services brings patient, certified, in-home tech support to households across the St. Louis metro."
    >
      <PageHeader
        title="About TechCare Home Services"
        subtitle="Friendly, local, in-home technology help you can actually trust."
      />

      <div className="prose-section max-w-3xl">
        <p>
          Technology should make life easier&mdash;but between Wi-Fi that won&apos;t
          reach the back bedroom, TVs that need three remotes, and phones that
          keep asking for passwords, it often does the opposite. We started
          TechCare Home Services to be the friendly neighbor who comes over,
          sorts it out, and shows you how it works.
        </p>
        <p>
          We specialize in helping people who don&apos;t want to feel rushed or
          talked down to&mdash;older adults, busy families, remote workers, and
          new homeowners. Whether it&apos;s a one-time setup or ongoing peace of
          mind through our Tech-Care membership, we&apos;re here to help.
        </p>
      </div>

      <section className="py-10">
        <h2 className="text-2xl mb-6">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg text-brand-dark mb-2">{r.title}</h3>
              <p className="text-gray-600 text-sm">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-light rounded-lg p-8">
        <h2 className="text-2xl mb-2">Where We Work</h2>
        <p className="text-gray-700 mb-6">
          We provide in-home service across the St. Louis metro and surrounding
          counties, including:
        </p>
        <ul className="flex flex-wrap gap-2">
          {areas.map((a) => (
            <li key={a} className="bg-white text-brand-dark text-sm font-medium px-3 py-1 rounded-full border border-blue-200">
              {a}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 mt-4">
          Not sure if you&apos;re in our area?{" "}
          <Link href="/contact" className="text-brand underline font-semibold">Just ask</Link>&mdash;we&apos;re happy to check.
        </p>
      </section>

      <div className="text-center mt-12">
        <Link href="/contact" className="inline-block bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-dark transition-colors">
          Book a Visit
        </Link>
      </div>
    </Layout>
  );
}
