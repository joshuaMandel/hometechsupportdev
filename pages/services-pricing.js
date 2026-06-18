import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

const services = [
  {
    title: "Device Setup and Training",
    body:
      "Phone, tablet, and computer setup; data transfer; operating system updates; user training for apps, email, and productivity software. Geek Squad charges $149.99 for new PC setup with data transfer and $39.99 for remote computer setup.",
  },
  {
    title: "Home Network Installation and Optimization",
    body:
      "Router/modem setup, Wi-Fi mesh configuration, security and parental controls, and network troubleshooting. Geek Squad charges $149.99 for Wi-Fi setup.",
  },
  {
    title: "Audio/Video Setup",
    body:
      "TV mounting, soundbar or speaker installation, home-theater configuration and calibration. Competitor pricing ranges from $99.99 to $249.99 per in-home visit.",
  },
  {
    title: "Smart-Home Device Integration",
    body:
      "Install and configure smart speakers, lighting, thermostats, doorbells, security cameras, streaming boxes, VR headsets, and other IoT devices; create automations; integrate with voice assistants.",
  },
  {
    title: "Troubleshooting and Repair",
    body:
      "Virus removal, performance tune-ups, printer issues, and data backup and recovery. Geek Squad charges $149.99 for virus removal.",
  },
  {
    title: "Remote Support",
    body:
      "Phone or remote-access software support for minor issues; can be offered as a lower-cost option (e.g., $20-$50 per session) or bundled in a membership.",
  },
  {
    title: "Consulting and Training Packages",
    body:
      "Personalized education for older adults on smartphone basics, online safety, social media, cloud storage, and cybersecurity, addressing the 62% of device owners who worry about security.",
  },
];

const pricingModels = [
  {
    title: "Flat-Rate Per Service",
    body:
      "Use competitor benchmarks (e.g., $99-$249 for on-site visits) but offer transparent pricing with minimal upselling to differentiate from Geek Squad.",
  },
  {
    title: "Hourly Rate",
    body:
      "Offer flexible troubleshooting at $60-$90 per hour, competitive with TaskRabbit/Thumbtack taskers at $50-$120 per hour.",
  },
  {
    title: "Subscription Plans",
    body:
      "Provide monthly/annual plans that include a set number of remote support sessions and discounted in-home visits. Geek Squad memberships include unlimited tune-ups and virus removal with in-home visits at $49.99 per visit; consider a similar “Tech-Care” membership (e.g., $20/month with two remote sessions and $40 per on-site visit).",
  },
  {
    title: "Packages",
    body:
      "Bundle services (e.g., “Move-in setup”: configure network, mount TV, set up streaming devices and speakers for $200-$300). Offer discounts for seniors or first-time clients.",
  },
];

export default function ServicesPricing() {
  return (
    <Layout
      title="Services & Pricing Strategy"
      description="Service offerings and pricing strategy for a home-tech support business."
    >
      <PageHeader
        title="Services & Pricing Strategy"
        subtitle="Clear, competitive offerings built around real household needs."
      />

      <div className="prose-section">
        <h2>Types of Services</h2>
        <p>
          Based on competitor offerings and common household needs, consider
          providing:
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg text-brand-dark mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="prose-section">
        <h2>Pricing Model</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {pricingModels.map((p) => (
          <div key={p.title} className="bg-brand-light rounded-lg p-6">
            <h3 className="text-lg text-brand-dark mb-2">{p.title}</h3>
            <p className="text-gray-700 text-sm">{p.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
