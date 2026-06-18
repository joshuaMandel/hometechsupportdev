import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="text-center py-24">
        <p className="text-7xl font-display font-extrabold gradient-text mb-4">404</p>
        <h1 className="text-3xl mb-3">Page Not Found</h1>
        <p className="text-muted mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    </Layout>
  );
}
