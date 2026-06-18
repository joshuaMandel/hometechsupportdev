import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

export default function OperationsStaffing() {
  return (
    <Layout
      title="Operations & Staffing"
      description="Skills, equipment, and operational requirements for a home-tech support business."
    >
      <PageHeader
        title="Operations & Staffing"
        subtitle="What it takes to deliver reliable, professional service in the field."
      />

      <div className="prose-section">
        <h2>Skills and Certifications</h2>
        <p>
          Technical proficiency across multiple platforms (iOS/Android,
          Windows/macOS, smart-home ecosystems) is critical. Certifications
          such as CompTIA A+, Network+, or vendor-specific training (e.g.,
          Apple Certified Support Professional) can improve credibility. Geek
          Squad and other providers highlight that their technicians are
          certified and background-checked. Consider obtaining relevant
          certifications and performing background checks on any future
          employees.
        </p>

        <h2>Tools and Equipment</h2>
        <ul>
          <li>Laptop and diagnostic software</li>
          <li>Smartphone with cellular data</li>
          <li>Screwdrivers and mounting tools</li>
          <li>Cable tester</li>
          <li>Network analyzer</li>
          <li>Ladder for TV mounting</li>
          <li>Protective gear</li>
          <li>Remote-access software subscription</li>
        </ul>

        <h2>Transportation</h2>
        <p>
          A reliable vehicle to travel to clients&apos; homes within your
          service area (St. Louis metro and surrounding counties). Keep tools
          organized in a vehicle kit.
        </p>

        <h2>Scheduling and CRM</h2>
        <p>
          Use appointment-booking software with real-time calendar,
          technician dispatching, and customer relationship management. Many
          independent technicians partner with platforms like HelloTech; you
          may build your own booking portal or leverage existing marketplaces
          to generate leads.
        </p>
      </div>
    </Layout>
  );
}
