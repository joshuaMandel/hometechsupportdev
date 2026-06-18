import { useState } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.target;
    const payload = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      service: form.service.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  }

  return (
    <Layout
      title="Contact"
      description="Book an in-home tech visit or request a free quote from Gateway Tech Home Services."
    >
      <PageHeader
        title="Get in Touch"
        subtitle="Tell us what you need help with and we'll follow up to schedule a visit or answer your questions—usually within one business day."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact details */}
        <Reveal as="aside" className="lg:col-span-1 space-y-6">
          <div className="card">
            <h2 className="text-lg text-ink mb-4">Reach Us Directly</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-muted mb-0.5">📞 Phone</span>
                <a href="tel:+19703311691" className="text-brand font-semibold hover:underline">(970) 331-1691</a>
              </li>
              <li>
                <span className="block text-muted mb-0.5">✉️ Email</span>
                <a href="mailto:jmandelmvp@gmail.com" className="text-brand font-semibold hover:underline break-all">jmandelmvp@gmail.com</a>
              </li>
              <li>
                <span className="block text-muted mb-0.5">🕒 Hours</span>
                <span className="text-ink">Open 24 hours, 7 days a week</span>
              </li>
              <li>
                <span className="block text-muted mb-0.5">📍 Service Area</span>
                <span className="text-ink">St. Louis metro &amp; surrounding counties</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 text-white relative overflow-hidden"
            style={{ backgroundImage: "linear-gradient(130deg, rgb(var(--brand)), rgb(var(--accent)))" }}>
            <p className="font-display font-bold mb-1 text-white">Prefer to talk?</p>
            <p className="text-sm text-white/90">Give us a call and a real person will help you figure out exactly what you need.</p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={120} className="lg:col-span-2">
          {submitted ? (
            <div role="status" className="card border-accent/40">
              <div className="text-4xl mb-2" aria-hidden="true">🎉</div>
              <p className="font-display font-bold text-xl mb-1 text-ink">Thanks for reaching out!</p>
              <p className="text-muted">
                Your message is on its way and we&apos;ll be in touch soon to
                schedule your visit. For anything urgent, call us at{" "}
                <a href="tel:+19703311691" className="text-brand font-semibold">(970) 331-1691</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-ink">Name</label>
                  <input id="name" name="name" type="text" required className="input" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5 text-ink">Phone</label>
                  <input id="phone" name="phone" type="tel" className="input" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-ink">Email</label>
                <input id="email" name="email" type="email" required className="input" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1.5 text-ink">What do you need help with?</label>
                <select id="service" name="service" className="input">
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
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-ink">Tell us more</label>
                <textarea id="message" name="message" rows={4} required
                  placeholder="Describe what's going on and we'll let you know how we can help."
                  className="input" />
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-600 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2.5">
                  {error}
                </p>
              )}
              <button type="submit" disabled={sending} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
                {sending ? "Sending…" : "Send Message"}
              </button>
              <p className="text-xs text-muted">We&apos;ll never share your information.</p>
            </form>
          )}
        </Reveal>
      </div>
    </Layout>
  );
}
