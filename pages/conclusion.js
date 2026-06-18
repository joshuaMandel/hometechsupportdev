import Link from "next/link";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

export default function Conclusion() {
  return (
    <Layout
      title="Conclusion"
      description="Why now is the time to launch a home-tech support business."
    >
      <PageHeader title="Conclusion" />

      <div className="prose-section">
        <p>
          The proliferation of connected devices&mdash;combined with user
          frustration over setup, management, and security&mdash;creates a
          growing opportunity for an in-home tech support business. By
          offering transparent pricing, personalized service, senior-friendly
          training, and strong privacy practices, you can differentiate your
          business from national competitors like Geek Squad and on-demand
          platforms.
        </p>
        <p>
          Following the SBA&apos;s startup steps ensures legal compliance and
          reduces risk. Staying informed about local licensing and insurance
          requirements in Missouri is crucial. With thoughtful planning and
          marketing, a home-tech support business can address the needs of
          households seeking reliable help with phones, TVs, Wi-Fi networks,
          smart speakers, and other technologies.
        </p>
      </div>

      <div className="bg-brand-light rounded-lg p-8 mt-8 text-center">
        <h2 className="text-2xl mb-3">Ready to get started?</h2>
        <Link
          href="/contact"
          className="inline-block bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-dark transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </Layout>
  );
}
