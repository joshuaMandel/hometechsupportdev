import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ title, description, children }) {
  const pageTitle = title ? `${title} | TechCare Home Services` : "TechCare Home Services";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "In-home technology support for households and seniors."} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {children}
      </main>
      <Footer />
    </>
  );
}
