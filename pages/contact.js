import { useState } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout
      title="Contact"
      description="Get in touch with TechCare Home Services."
    >
      <PageHeader
        title="Get in Touch"
        subtitle="Tell us what you need help with and we'll follow up to schedule a visit."
      />

      {submitted ? (
        <div role="status" className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 max-w-xl">
          Thanks! This is a demo form, so nothing was actually sent, but in a
          live version we&apos;d be in touch shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-gray-100 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <button
            type="submit"
            className="bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-dark transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </Layout>
  );
}
