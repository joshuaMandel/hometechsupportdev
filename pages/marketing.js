import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

const tactics = [
  {
    title: "Define Your Niche",
    body:
      "Focus on residential clients who lack technical expertise: older adults, remote workers, families, and new homeowners. Emphasize friendly, patient support and training.",
  },
  {
    title: "Branding and Online Presence",
    body:
      "Choose a name and domain that convey reliability (e.g., “TechCare Home Services”). Build a website with service descriptions, pricing, client testimonials, booking forms, and a blog offering tips that improve search visibility.",
  },
  {
    title: "Local SEO and Listings",
    body:
      "Register on Google Business Profile, Bing Places, and local directories; encourage satisfied clients to leave reviews. Target keywords like “home tech support Bridgeton” or “Wi-Fi setup St Louis.”",
  },
  {
    title: "Partnerships",
    body:
      "Collaborate with local electronics retailers, realtors, interior designers, senior-living communities, and IT consultants who may refer clients needing in-home setup or troubleshooting. Offer referral fees or joint promotions.",
  },
  {
    title: "Community Outreach",
    body:
      "Conduct free workshops at libraries or community centers on topics like online safety, smartphone basics, and smart-home benefits. This builds trust and positions you as an expert.",
  },
  {
    title: "Membership Incentives",
    body:
      "Encourage repeat business through membership plans or loyalty discounts. Provide first-time service discounts to convert leads.",
  },
  {
    title: "Social Media and Content Marketing",
    body:
      "Share short videos and how-to guides on platforms popular with your target audience (Facebook groups, Nextdoor). Highlight client success stories and promotions.",
  },
];

export default function Marketing() {
  return (
    <Layout
      title="Marketing & Customer Acquisition"
      description="How to find and keep customers for a home-tech support business."
    >
      <PageHeader
        title="Marketing & Customer Acquisition"
        subtitle="Reaching the households that need help most."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {tactics.map((t) => (
          <div key={t.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg text-brand-dark mb-2">{t.title}</h2>
            <p className="text-gray-600 text-sm">{t.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
