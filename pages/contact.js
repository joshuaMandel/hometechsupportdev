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
      description="Book an in-home tech visit or request a free quote from TechCare Home Services."
    >
      <PageHeader
        title="Get in Touch"
        subtitle="Tell us what you need help with and we'll follow up to schedule a visit or answer your questions—usually within one business day."
      />

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Contact details */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg text-brand-dark mb-3">Reach Us Directly</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-gray-500">Phone</span>
                <a href="tel:+19703311691" className="text-brand font-semibold hover:underline">(970) 331-1691</a>
              </li>
              <li>
                <span className="block text-gray-500">Email</span>
                <a href="mailto:jmandelmvp@gmail.com" className="text-brand font-semibold hover:underline">jmandelmvp@gmail.com</a>
              </li>
              <li>
                <span className="block text-gray-500">Hours</span>
                <span className="text-gray-800">Mon&ndash;Sat, 8:00am&ndash;7:00pm</span>
              </li>
              <li>
                <span className="block text-gray-500">Service Area</span>
                <span className="text-gray-800">St. Louis metro &amp; surrounding counties</span>
              </li>
            </ul>
          </div>
          <div className="bg-brand-light rounded-lg p-6">
            <p className="text-brand-dark font-semibold mb-1">Prefer to talk?</p>
            <p className="text-sm text-gray-700">Give us a call and a real person will help you figure out exactly what you need.</p>
          </div>
        </aside>

        {/* Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div role="status" className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6">
              <p className="font-semibold mb-1">Thanks for reaching out!</p>
              <p className="text-sm">
                This is a demo form, so nothing was actually sent. On the live
                site we&apos;d be in touch within one business day to schedule your visit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-gray-100 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input id="name" name="name" type="text" required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                  <input id="phone" name="phone" type="tel"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input id="email" name="email" type="email" required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">What do you need help with?</label>
                <select id="service" name="service"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brand">
                  <option>Wi-Fi &amp; home network</option>
                  <option>TV &amp; home theater</option>
                  <option>Computer or phone</option>
                  <option>Smart home devices</option>
                  <option>Tech training / coaching</option>
                  <option>Security &amp; backups</option>
                  <option>Something else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Tell us more</label>
                <textarea id="message" name="message" rows={4} required
                  placeholder="Describe what's going on and we'll let you know how we can help."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
              </div>

              <button type="submit"
                className="bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-dark transition-colors">
                Send Message
              </button>
              <p className="text-xs text-gray-500">We&apos;ll never share your information. This demo form does not actually submit.</p>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
