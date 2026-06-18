import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

export default function RiskMitigation() {
  return (
    <Layout
      title="Risk Mitigation & Data Security"
      description="Protecting client data and managing liability in a home-tech support business."
    >
      <PageHeader
        title="Risk Mitigation & Data Security"
        subtitle="Earning client trust means protecting their data and your business."
      />

      <div className="prose-section">
        <h2>Data Protection</h2>
        <p>
          Since clients may share sensitive information during
          troubleshooting, implement strict privacy practices: obtain consent
          before accessing devices, avoid storing client data, and use
          encrypted remote-access tools. Educate clients about phishing and
          password hygiene.
        </p>

        <h2>Cybersecurity Services</h2>
        <p>
          Given that smart devices face thousands of cyber attacks weekly,
          offer security assessments, router firmware updates, firewall
          setup, and guidance on safe device usage.
        </p>

        <h2>Liability Management</h2>
        <p>
          Carry professional liability insurance to protect against claims of
          data loss or negligence, and general liability to cover property
          damage or injuries on site. Document service agreements and obtain
          signed waivers describing limitations of liability.
        </p>
      </div>
    </Layout>
  );
}
