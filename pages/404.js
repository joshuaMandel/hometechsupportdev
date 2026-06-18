import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="text-center py-20">
        <h1 className="text-3xl mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
        <Link href="/" className="text-brand underline">
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}
