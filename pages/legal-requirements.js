import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

export default function LegalRequirements() {
  return (
    <Layout
      title="Legal Requirements & Business Setup"
      description="Steps to legally register and set up a home-tech support business."
    >
      <PageHeader
        title="Legal Requirements & Business Setup"
        subtitle="Getting the legal foundation right protects you and your business."
      />

      <div className="prose-section">
        <h2>General Small-Business Steps</h2>
        <p>
          The U.S. Small Business Administration (SBA) outlines ten basic
          steps for starting a business:
        </p>
        <ul>
          <li>Conduct market research</li>
          <li>Write a business plan</li>
          <li>Fund your business</li>
          <li>Pick a business location</li>
          <li>Choose a legal structure</li>
          <li>Choose a business name</li>
          <li>Register the business</li>
          <li>Obtain federal and state tax IDs</li>
          <li>Apply for licenses and permits</li>
          <li>Open a business bank account</li>
        </ul>
        <p>These steps ensure that your business is legal and ready to operate.</p>

        <h2>Missouri-Specific Registration</h2>
        <p>
          MOSourceLink summarizes the steps to legally register a business in
          Missouri. Key steps include:
        </p>
        <ul>
          <li>
            Decide on a business structure (sole proprietorship, partnership,
            LLC, LLP, or corporation)
          </li>
          <li>
            Register the name with the Secretary of State (sole proprietors
            using their own names do not need to register)
          </li>
          <li>Obtain an Employer Identification Number (EIN)</li>
          <li>Register for Missouri business taxes</li>
          <li>File employment paperwork if hiring</li>
          <li>Check for city or county licenses and permits</li>
        </ul>
        <p>
          Cities may require home-occupation permits&mdash;verify
          requirements with your local clerk.
        </p>
      </div>
    </Layout>
  );
}
