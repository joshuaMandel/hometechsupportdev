import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

export default function TermsOfService() {
  return (
    <Layout title="Terms of Service" description="Placeholder terms of service.">
      <PageHeader title="Terms of Service" />
      <div className="prose-section">
        <p>
          This is a placeholder terms of service page. Replace this content
          with your business&apos;s actual terms before launch.
        </p>
      </div>
    </Layout>
  );
}
