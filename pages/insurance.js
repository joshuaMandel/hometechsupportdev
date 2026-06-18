import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";

export default function Insurance() {
  return (
    <Layout
      title="Insurance"
      description="Insurance coverage to consider for a home-tech support business."
    >
      <PageHeader
        title="Insurance"
        subtitle="Protect your business, your equipment, and your clients."
      />

      <div className="prose-section">
        <p>
          The SBA notes that business structure (e.g., LLC or corporation)
          provides limited liability but does not replace insurance coverage.
          The federal government requires businesses with employees to have
          workers&apos; compensation, unemployment, and disability insurance.
          Additional coverage recommended for a home-tech business includes:
        </p>

        <DataTable
          caption="Recommended insurance coverage"
          headers={["Insurance Type", "Who It's For", "What It Covers"]}
          rows={[
            [
              "General liability",
              "Any business",
              "Protects against bodily injury, property damage, medical expenses, libel/slander, and lawsuit costs.",
            ],
            [
              "Professional liability (errors and omissions)",
              "Service businesses",
              "Covers financial loss from negligence or mistakes in services provided.",
            ],
            [
              "Commercial property",
              "Businesses with equipment",
              "Protects tools and equipment from loss or damage.",
            ],
            [
              "Home-based business rider",
              "Home-run businesses",
              "Adds coverage to homeowners insurance for business equipment and liability.",
            ],
            [
              "Business Owner's Policy (BOP)",
              "Small businesses, especially home-based",
              "Bundles liability and property coverage and may reduce premiums.",
            ],
          ]}
        />

        <p>
          The SBA recommends assessing your risks, working with a reputable
          licensed agent, comparing policies, and reassessing coverage
          annually.
        </p>
      </div>
    </Layout>
  );
}
