import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";

export default function MarketOpportunity() {
  return (
    <Layout
      title="Market Opportunity"
      description="Why now is the right time to launch a home-technology support business."
    >
      <PageHeader
        title="Market Opportunity"
        subtitle="Connected devices are everywhere, but managing them isn't easy for everyone."
      />

      <div className="prose-section">
        <h2>Growing Household Technology Use</h2>
        <p>
          Smart devices are widespread. A ConsumerAffairs review of smart-home
          statistics notes that there were 57.55 million U.S. smart-home product
          users in 2022, and projects that 57% of U.S. households will own at
          least one smart-home device by 2025. U.S. households already own an
          average of 21 connected devices across 13 categories. Smart TVs and
          streaming devices are the most common smart-home devices.
        </p>
        <p>
          Despite high satisfaction&mdash;77% of owners say the devices improve
          quality of life&mdash;41% dislike the management required and 62%
          worry about security. Homes with more devices report more
          data-breach incidents.
        </p>

        <h2>Digital Divide Among Older Adults</h2>
        <p>
          A 2024 Pew Research Center survey found that adults aged 50+,
          especially those 65 and older, are less likely to own a smartphone
          than younger adults. Home-broadband adoption shows similar
          disparities: 95% of adults with household incomes of $100,000 or
          more have broadband, compared with 57% of those making less than
          $30,000, and rural residents subscribe at lower rates than suburban
          and urban residents.
        </p>
        <p>
          These gaps mean many households rely on smartphones or lack stable
          connections and may need help configuring devices and networks.
        </p>

        <h2>Demand for On-Site Tech Help</h2>
        <p>
          High device count and complexity drive demand for help configuring
          and troubleshooting phones, laptops, Wi-Fi networks, smart speakers,
          TVs and streaming boxes, printers, VR headsets, and other smart-home
          devices.
        </p>

        <h3>Competitor Pricing Benchmarks</h3>
        <p>
          An August 2025 comparison of in-home tech support providers ranked
          Best Buy&apos;s Geek Squad as best overall, with in-home services
          starting around $99.99. HelloTech offers on-demand tech help
          starting at $79 per service. Support.com offers remote support at
          about $99 per service and in-home starting at $149+. TaskRabbit and
          Thumbtack allow users to hire local taskers at $50&ndash;$80 per hour
          or $60&ndash;$120 per hour, respectively.
        </p>

        <DataTable
          caption="Geek Squad sample pricing"
          headers={["Service", "Typical Price"]}
          rows={[
            ["Remote OS tune-up", "$39.99"],
            ["Network setup", "$99.99"],
            ["In-home Wi-Fi setup", "$149.99"],
            ["Soundbar setup", "$99.99"],
            ["New computer setup with data transfer", "$199.99"],
            ["TV mounting and setup", "$249.99"],
            ["In-home visit (annual members)", "$49.99 per visit"],
          ]}
        />
        <p>These price points provide useful benchmarks for your own pricing strategy.</p>
      </div>
    </Layout>
  );
}
